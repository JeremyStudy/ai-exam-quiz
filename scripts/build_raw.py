# -*- coding: utf-8 -*-
"""把 q1.txt / q2.txt 精确解析为结构化 raw.json（不做任何改写）。
用法：python scripts/build_raw.py [q1.txt 路径] [q2.txt 路径]
默认从站点目录的上一级读取 q1.txt / q2.txt。"""
import json, re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # site/
ROOT = os.path.dirname(BASE)                                        # 项目根目录

def lines_of(path):
    raw = [l.strip() for l in open(path, encoding="utf-8").read().split("\n") if l.strip()]
    # 处理"题干……答案：……”写在同一行的情况（文档2 第4题）
    out = []
    for l in raw:
        m = re.match(r"^(.*?)[。？]\s*答案[：:]\s*(.*)$", l)
        if m and not l.startswith("答案"):
            out.append(m.group(1) + "。")
            out.append("答案：" + m.group(2))
        else:
            out.append(l)
    return out

def parse_objective(lines):
    qs, cur = [], None
    for line in lines:
        m = re.match(r"^答案[：:]\s*(.*)$", line)
        if m:
            cur["answer"] = m.group(1).strip().upper()
            qs.append(cur)
            cur = None
            continue
        om = re.match(r"^([A-F])[\.、]\s*(.*)$", line)
        if om and cur is not None:
            cur["options"].append({"key": om.group(1), "text": om.group(2).strip()})
            continue
        cur = {"stem": re.sub(r"^\d+[\.、]\s*", "", line), "options": [], "raw": line}
    return qs

def parse_qa_simple(lines):
    """q1 问答题：题干行 + 紧邻的答案行（单行答案）。"""
    qs = []
    for i, line in enumerate(lines):
        m = re.match(r"^答案[：:]\s*(.*)$", line)
        if m:
            qs.append({"stem": lines[i - 1], "answer": m.group(1).strip()})
    return qs

def parse_qa_blocks(lines):
    """q2 问答题：题干行 + 首行为'答案：'、可能跨多行的答案块。"""
    ans_idx = [i for i, l in enumerate(lines) if re.match(r"^答案[：:]\s*", l)]
    qs = []
    for n, k in enumerate(ans_idx):
        stem = lines[k - 1]
        stem = re.sub(r"^\d+[\.、]\s*", "", stem)
        body = [re.sub(r"^答案[：:]\s*", "", lines[k])]
        end = (ans_idx[n + 1] - 1) if n + 1 < len(ans_idx) else len(lines)
        body += lines[k + 1:end]
        qs.append({"stem": stem, "answer": "\n".join(x for x in body if x).strip()})
    return qs

import sys

q1_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "q1.txt")
q2_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "q2.txt")
q1 = lines_of(q1_path)
q2 = lines_of(q2_path)

i_single = q1.index("一. 单选题")
i_multi = q1.index("二. 多选题")
i_qa = q1.index("三. 问答题")

single = parse_objective(q1[i_single + 1:i_multi])
multi = parse_objective(q1[i_multi + 1:i_qa])
qa1 = parse_qa_simple(q1[i_qa + 1:])
qa2 = parse_qa_blocks(q2)

def finalize(obj, typ, book, section):
    out = []
    for n, q in enumerate(obj, 1):
        item = {
            "id": f"{section}-{n:02d}",
            "type": typ,
            "book": book,
            "section": section,
            "num": n,
            "stem": q["stem"],
            "options": q.get("options", []),
            "answer": q["answer"],
        }
        if "raw" in q:
            item["docNum"] = q["raw"]
        out.append(item)
    return out

data = {
    "single": finalize(single, "single", 1, "single"),
    "multi": finalize(multi, "multi", 1, "multi"),
    "qa1": finalize(qa1, "qa", 1, "qa1"),
    "qa2": finalize(qa2, "qa", 2, "qa2"),
}

json.dump(data, open(os.path.join(BASE, "data", "raw.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("single", len(data["single"]), "multi", len(data["multi"]),
      "qa1", len(data["qa1"]), "qa2", len(data["qa2"]))
for k in data:
    for q in data[k][:3]:
        print(k, q["id"], q["stem"][:30], "| opt:", len(q["options"]), "| ans:", q["answer"][:20])
