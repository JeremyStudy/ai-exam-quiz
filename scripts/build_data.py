# -*- coding: utf-8 -*-
"""合并 raw.json + explain_*.json + flags.json -> site/data/questions.js，并做完整性校验。"""
import json, sys, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # site/（脚本位于 site/scripts/）
DATA = os.path.join(BASE, "data")

def load(name):
    p = os.path.join(DATA, name)
    with open(p, encoding="utf-8") as f:
        return json.load(f)

raw = load("raw.json")
flags = load("flags.json")
ex_single = load("explain_single.json")
ex_multi = load("explain_multi.json")
ex_qa = load("explain_qa.json")
explain = {}
for d in (ex_single, ex_multi, ex_qa):
    explain.update(d)

out = []
errors = []

for section in ("single", "multi", "qa1", "qa2"):
    for q in raw[section]:
        qid = q["id"]
        flag = flags.get(qid, {})
        ex = explain.get(qid)
        if not ex:
            errors.append(f"{qid}: 缺少解析")
            ex = {}
        answer = flag.get("answer", q["answer"])
        accept = flag.get("accept", [answer])
        # 规范化 accept：去重、排序、大写
        accept = sorted({a.upper() for a in accept})
        item = {
            "id": qid,
            "type": q["type"],
            "book": q["book"],
            "section": section,
            "num": q["num"],
            "stem": q["stem"],
            "options": q["options"],
            "answer": answer,
            "accept": accept,
            "status": flag.get("status", "ok"),
        }
        if flag.get("answer") and flag["answer"] != q["answer"]:
            item["docAnswer"] = q["answer"]
        if flag.get("insight"):
            item["insight"] = flag["insight"]
        item["explain"] = ex.get("explain", "").strip()
        item["tip"] = ex.get("tip", "").strip()
        item["pitfall"] = ex.get("pitfall", "").strip()
        # 与题目结构一致性校验
        if item["type"] in ("single", "multi"):
            letters = {o["key"] for o in item["options"]}
            if not set(answer) <= letters:
                errors.append(f"{qid}: 答案 {answer} 不在选项 {sorted(letters)} 中")
            for a in accept:
                if not set(a) <= letters:
                    errors.append(f"{qid}: accept {a} 含非法选项")
        out.append(item)

# 校验覆盖与数量
ids_raw = [q["id"] for s in ("single", "multi", "qa1", "qa2") for q in raw[s]]
covered = [q["id"] for q in out]
if len(ids_raw) != len(covered) or set(ids_raw) != set(covered):
    errors.append("id 集合不一致")
missing_explain = [q["id"] for q in out if not q["explain"]]
if missing_explain:
    errors.append("缺少 explain: " + ",".join(missing_explain))

by_status = {}
by_section = {}
for q in out:
    by_status[q["status"]] = by_status.get(q["status"], 0) + 1
    by_section[q["section"]] = by_section.get(q["section"], 0) + 1

if errors:
    print("校验失败：")
    for e in errors:
        print(" -", e)
    sys.exit(1)

js = "/* 自动生成：scripts/build_data.py | 数据源：两份 docx 题库 + 逐题审核标注 */\n" \
     "window.QBANK = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n"
with open(os.path.join(DATA, "questions.js"), "w", encoding="utf-8") as f:
    f.write(js)

print("OK -> data/questions.js")
print("总数:", len(out), "| 分节:", by_section, "| 状态:", by_status)
print("文件大小: %.1f KB" % (os.path.getsize(os.path.join(DATA, "questions.js")) / 1024))
