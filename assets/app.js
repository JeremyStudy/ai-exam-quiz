/* =========================================================
   AI 算法工程师 · 背题答题台
   纯静态实现（无依赖）：数据来自 data/questions.js
   ========================================================= */
(function () {
  'use strict';

  var ALL = Array.isArray(window.QBANK) ? window.QBANK : [];

  var SECTIONS = {
    single: { label: '单选题', short: '单选' },
    multi: { label: '多选题', short: '多选' },
    qa1: { label: '问答题', short: '问答' },
    qa2: { label: '问答题 · 实操', short: '实操' }
  };

  var STATUS_META = {
    error: { label: '存在错误', icon: '⛔', cls: 'st-error' },
    doubt: { label: '答案存疑', icon: '⚠️', cls: 'st-doubt' },
    borderline: { label: '表述提示', icon: '💡', cls: 'st-border' }
  };

  /* ---------------- 存储 ---------------- */
  var store = {
    get: function (key, fallback) {
      try {
        var v = localStorage.getItem('qb.' + key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) { return fallback; }
    },
    set: function (key, val) {
      try { localStorage.setItem('qb.' + key, JSON.stringify(val)); } catch (e) {}
    }
  };

  var mastered = store.get('mastered', {});   // id -> true
  var wrong = store.get('wrong', {});         // id -> count
  var seen = store.get('seen', {});           // id -> true

  function saveMastered() { store.set('mastered', mastered); }
  function saveWrong() { store.set('wrong', wrong); }
  function saveSeen() { store.set('seen', seen); }

  function addMastered(id) { mastered[id] = true; saveMastered(); }
  function removeMastered(id) { delete mastered[id]; saveMastered(); }
  function recordWrong(id) {
    wrong[id] = (wrong[id] || 0) + 1;
    saveWrong();
    delete mastered[id];
    saveMastered();
  }
  function clearWrong(id) { if (wrong[id]) { delete wrong[id]; saveWrong(); } }
  function markSeen(id) { if (!seen[id]) { seen[id] = true; saveSeen(); } }

  /* ---------------- 工具 ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function byId(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i]; return null; }
  function countKeys(o) { return Object.keys(o).length; }
  function pct(a, b) { return b ? Math.round(a * 100 / b) : 0; }

  /* ---------------- 状态 ---------------- */
  /* 背题/答题各自独立保存筛选配置，互不影响；配置会写入 localStorage */
  var state = {
    mode: 'study',
    filters: {
      study: { book: 'all', status: 'all', q: '' },
      quiz: { book: 'all', status: 'all', q: '', types: 'all' }
    },
    pos: 0,
    // 背题模式默认显示答案；该显隐状态跨题目保持，并记住上次选择
    revealed: store.get('revealMode', true),
    quiz: null,
    setup: { count: 10, shuffle: true, order: store.get('optionOrder', 'doc') === 'random' ? 'random' : 'doc' }
  };

  function F() { return state.filters[state.mode]; }

  var BOOK_LABEL = { all: '全部题库', '1': '文档1 · 算法工程师', '2': '文档2 · 系列实操' };
  var BOOK_SHORT = { all: '全部题库', '1': '文档1', '2': '文档2' };
  var STATUS_LABEL = {
    all: '全部状态', unmastered: '未掌握', mastered: '已掌握', wrong: '错题本', flagged: '有标注'
  };
  var TYPE_LABEL = { all: '全部题型', choice: '选择题', single: '单选', multi: '多选', qa: '问答' };
  var TYPE_KEYS = ['all', 'choice', 'single', 'multi', 'qa'];

  /* 恢复上次保存的筛选配置（只记住题库/题型，状态与搜索属于临时筛选） */
  (function restoreFilters() {
    var saved = store.get('filters', null);
    if (!saved || typeof saved !== 'object') return;
    ['study', 'quiz'].forEach(function (m) {
      var s = saved[m];
      var d = state.filters[m];
      if (!s || typeof s !== 'object') return;
      if (s.book === 'all' || s.book === '1' || s.book === '2') d.book = s.book;
      if (m === 'quiz' && TYPE_LABEL[s.types]) d.types = s.types;
    });
  })();

  function persistFilters() {
    store.set('filters', {
      study: { book: state.filters.study.book },
      quiz: { book: state.filters.quiz.book, types: state.filters.quiz.types }
    });
  }

  /* ---------------- 筛选 ---------------- */
  function matchesFilter(q, f, ignoreType) {
    if (f.book !== 'all' && String(q.book) !== f.book) return false;
    if (f.status === 'unmastered' && mastered[q.id]) return false;
    if (f.status === 'mastered' && !mastered[q.id]) return false;
    if (f.status === 'wrong' && !wrong[q.id]) return false;
    if (f.status === 'flagged' && (!q.status || q.status === 'ok')) return false;
    if (!ignoreType && f.types && f.types !== 'all') {
      if (f.types === 'choice') { if (q.type !== 'single' && q.type !== 'multi') return false; }
      else if (q.type !== f.types) return false;
    }
    if (f.q) {
      var needle = f.q.toLowerCase();
      var hay = (q.stem + ' ' + q.options.map(function (o) { return o.text; }).join(' ')).toLowerCase();
      if (hay.indexOf(needle) === -1) return false;
    }
    return true;
  }

  function pool() {
    var f = F();
    return ALL.filter(function (q) { return matchesFilter(q, f); });
  }

  /* 工具栏与当前模式配置保持一致 */
  function syncToolbar() {
    var f = F();
    var b = $('#bookSel'), s = $('#statusSel'), i = $('#searchInput');
    if (b && b.value !== f.book) b.value = f.book;
    if (s && s.value !== f.status) s.value = f.status;
    if (i && i.value !== f.q && document.activeElement !== i) i.value = f.q;
  }

  /* ---------------- 渲染：进度 ---------------- */
  function renderProgress() {
    var total = ALL.length;
    var masteredCount = 0, seenCount = 0, wrongCount = 0;
    ALL.forEach(function (q) {
      if (mastered[q.id]) masteredCount++;
      if (seen[q.id]) seenCount++;
      if (wrong[q.id]) wrongCount++;
    });
    var pctVal = pct(masteredCount, total);
    $('#progressLine').innerHTML =
      '<span>已看 <b>' + seenCount + '</b>/' + total + '</span>' +
      '<span>已掌握 <b>' + masteredCount + '</b>/' + total + '（' + pctVal + '%）</span>' +
      '<span>错题本 <b class="warn-num">' + wrongCount + '</b></span>' +
      '<div class="pbar" role="progressbar" aria-valuenow="' + pctVal + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pctVal + '%"></i></div>';
  }

  /* ---------------- 渲染：题型/状态徽章 ---------------- */
  function typeLabel(q) { return SECTIONS[q.section] ? SECTIONS[q.section].label : '题目'; }
  function statusChip(q) {
    var m = STATUS_META[q.status];
    if (!m) return '';
    return '<span class="chip ' + m.cls + '" title="由逐题审核标注">' + m.icon + ' ' + m.label + '</span>';
  }
  function headerChips(q, extra) {
    var bookTag = q.book === 1 ? '文档1 ' : '文档2 ';
    return '<span class="chip type">' + esc(typeLabel(q)) + '</span>' +
      '<span class="chip">' + bookTag + '· 第 ' + q.num + ' 题</span>' +
      statusChip(q) + (extra || '');
  }

  /* ---------------- 选项 HTML ---------------- */
  /* display 数组元素：{ key: 显示的字母(A/B/C…), orig: 文档原字母, text }
     不传 display 时按文档顺序展示（orig 与 key 相同）。 */
  function optionListHTML(q, opts) {
    opts = opts || {};
    var revealed = !!opts.revealed;
    var picked = opts.picked || [];
    var quizMode = !!opts.quiz;
    var answered = !!opts.answered;
    var correctKeys = q.answer ? q.answer.split('') : [];
    if (q.type === 'qa') return '';

    var display = opts.display || q.options.map(function (o) { return { key: o.key, orig: o.key, text: o.text }; });

    return '<ol class="options">' + display.map(function (o) {
      var orig = o.orig || o.key;
      var cls = 'opt';
      var mark = '';
      if (quizMode && !answered) {
        cls += ' clickable';
        if (picked.indexOf(orig) !== -1) cls += ' picked';
      }
      if (revealed) {
        var isCorrect = correctKeys.indexOf(orig) !== -1;
        var isPicked = picked.indexOf(orig) !== -1;
        if (isCorrect) {
          cls += ' correct';
          mark = '<span class="mark">✓</span>';
        } else if (isPicked && !opts.gradedOk) {
          cls += ' picked-bad dim';
          mark = '<span class="mark">✗</span>';
        } else if (!opts.gradedOk && isPicked) {
          cls += ' picked';
        } else if (picked.length && !opts.gradedOk) {
          cls += ' dim';
        }
      }
      return '<li class="' + cls + '"' + (quizMode && !answered ? ' data-action="pick" data-key="' + orig + '"' : '') + '>' +
        '<span class="key">' + esc(o.key) + '</span><span class="txt">' + esc(o.text) + '</span>' + mark + '</li>';
    }).join('') + '</ol>';
  }

  /* 按设置生成当前题的展示选项（随机时打乱位置，并按显示顺序重新标 A/B/C/D） */
  function buildDisplayOptions(q, order) {
    var arr = q.options.map(function (o) { return { orig: o.key, text: o.text }; });
    if (order === 'random') {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
      }
    }
    var letters = 'ABCDEFGH';
    return arr.map(function (o, i) { return { key: letters.charAt(i), orig: o.orig, text: o.text }; });
  }

  /* 同一题的展示顺序在一次作答内保持不变（多选反复勾选、反馈重绘都不会跳动） */
  function ensureDisplayOptions() {
    var quiz = state.quiz;
    if (!quiz) return null;
    var q = byId(quiz.ids[quiz.pos]);
    if (!q) return null;
    if (!quiz.displayOpts || quiz.displayFor !== q.id) {
      quiz.displayOpts = buildDisplayOptions(q, quiz.optionOrder);
      quiz.displayFor = q.id;
    }
    return quiz.displayOpts;
  }

  /* ---------------- 答案/解析区 ---------------- */
  function answerBlocksHTML(q, opts) {
    opts = opts || {};
    var html = '';

    if (q.type === 'qa') {
      html += '<div class="block ref"><h4>📄 参考答案</h4><p>' + esc(q.answer) + '</p></div>';
    } else if (!opts.hideAnswer) {
      var ansText = q.answer.split('').map(function (k) {
        var o = q.options.filter(function (x) { return x.key === k; })[0];
        return o ? o.text : k;
      }).join('；');
      html += '<div class="ans-banner neutral">参考答案：' + esc(q.answer) +
        '<span class="sub">' + esc(ansText) + '</span></div>';
    }

    if (q.docAnswer && q.docAnswer !== q.answer) {
      var docText = q.options.filter(function (x) { return x.key === q.docAnswer; })[0];
      html += '<div class="block doc-ans"><h4>⛔ 文件原答案</h4><p>' + esc(q.docAnswer) +
        (docText ? '．' + esc(docText.text) : '') +
        '（按文档顺序的字母；经逐题复核判定有误，本平台已按正确结论修正，详见下方「我的见解」）</p></div>';
    }

    if (q.explain) {
      html += '<div class="block"><h4>🔍 解析</h4><p>' + esc(q.explain) + '</p></div>';
    }
    if (q.tip) {
      html += '<div class="block tip"><h4>📌 记忆要点</h4><p>' + esc(q.tip) + '</p></div>';
    }
    if (q.pitfall) {
      html += '<div class="block pitfall"><h4>⚠️ 易错点</h4><p>' + esc(q.pitfall) + '</p></div>';
    }
    if (q.insight) {
      var m = STATUS_META[q.status];
      html += '<div class="block insight"><h4>' + (m ? m.icon : '💡') + ' 我的见解 · 审核结论</h4><p>' + esc(q.insight) + '</p></div>';
    }
    return html;
  }

  /* ---------------- 背题模式 ---------------- */
  function renderStudy() {
    var list = pool();
    if (!list.length) {
      $('#view').innerHTML = emptyHTML('当前筛选条件下没有题目', '试试切换「题库」「状态」或清空搜索关键词。');
      return;
    }
    if (state.pos >= list.length) state.pos = list.length - 1;
    if (state.pos < 0) state.pos = 0;
    var q = list[state.pos];
    var isMastered = !!mastered[q.id];

    var card = '<article class="card">' +
      '<div class="card-head">' + headerChips(q) +
      '<span class="spacer"></span>' +
      '<button type="button" class="btn small ' + (isMastered ? 'soft-ok' : 'ghost') + '" data-action="mark">' +
      (isMastered ? '✓ 已掌握' : '标记掌握') + '</button></div>' +
      '<div class="card-body">' +
      '<h2 class="stem' + (q.type === 'qa' ? ' qa-stem' : '') + '">' + esc(q.stem) + '</h2>' +
      optionListHTML(q, { revealed: state.revealed }) +
      '<div class="card-actions">' +
      '<button type="button" class="btn primary" data-action="reveal">' +
      (state.revealed ? '隐藏答案' : '显示答案（空格）') + '</button>' +
      '<button type="button" class="btn ghost" data-action="random">🎲 随机</button>' +
      '<div class="nav">' +
      '<button type="button" class="btn ghost" data-action="prev"' + (state.pos === 0 ? ' disabled' : '') + '>← 上一题</button>' +
      '<span class="pos">' + (state.pos + 1) + ' / ' + list.length + '</span>' +
      '<button type="button" class="btn ghost" data-action="next"' + (state.pos === list.length - 1 ? ' disabled' : '') + '>下一题 →</button>' +
      '</div></div>' +
      (state.revealed ? '<div class="answer-zone">' + answerBlocksHTML(q) + '</div>' : '') +
      '</div></article>';

    $('#view').innerHTML = card + navGridHTML(list);
  }

  function navGridHTML(list) {
    return '<details class="navgrid"><summary>🗂 题目导航（' + list.length + ' 题，点击跳转）</summary><div class="grid">' +
      list.map(function (q, i) {
        var cls = '';
        if (mastered[q.id]) cls += ' mastered';
        else if (wrong[q.id]) cls += ' wrong';
        if (i === state.pos) cls += ' current';
        return '<button type="button" class="' + cls + '" data-action="goto" data-i="' + i + '" title="' +
          esc((SECTIONS[q.section] ? SECTIONS[q.section].label : '') + ' 第' + q.num + '题') + '">' + (i + 1) + '</button>';
      }).join('') + '</div></details>';
  }

  function emptyHTML(title, desc) {
    return '<div class="card"><div class="empty"><span class="ico">🔍</span><p><strong>' + esc(title) + '</strong></p>' +
      '<p class="hint">' + esc(desc) + '</p></div></div>';
  }

  /* ---------------- 答题模式 ---------------- */
  function renderQuiz() {
    if (!state.quiz) { renderQuizSetup(); return; }
    if (state.quiz.pos >= state.quiz.ids.length) { renderQuizResult(true); return; }
    renderQuizStep();
  }

  function filterSummaryHTML(f) {
    var html = '';
    if (f.book !== 'all') html += '<span class="chip">📚 ' + BOOK_SHORT[f.book] + '</span>';
    if (f.status !== 'all') html += '<span class="chip">' + STATUS_LABEL[f.status] + '</span>';
    if (f.types && f.types !== 'all') html += '<span class="chip">' + TYPE_LABEL[f.types] + '</span>';
    if (f.q) html += '<span class="chip">🔍 ' + esc(f.q) + '</span>';
    return html;
  }

  function renderQuizSetup() {
    var f = F();
    var list = pool();
    var wrongInPool = list.filter(function (q) { return !!wrong[q.id]; });
    var bookCount = { all: ALL.length };
    ALL.forEach(function (q) { bookCount[q.book] = (bookCount[q.book] || 0) + 1; });

    /* 题型计数：忽略题型条件，保留题库/状态/搜索，便于用户看到“这个范围里有哪些题型” */
    var base = ALL.filter(function (q) { return matchesFilter(q, f, true); });
    var typeCount = { single: 0, multi: 0, qa: 0 };
    base.forEach(function (q) { typeCount[q.type] = (typeCount[q.type] || 0) + 1; });

    var bookPills = [['all', '全部（' + bookCount.all + '）'], ['1', '文档1（' + (bookCount['1'] || 0) + '）'], ['2', '文档2（' + (bookCount['2'] || 0) + '）']].map(function (b) {
      return '<button type="button" class="pill' + (f.book === b[0] ? ' active' : '') + '" data-action="set-quiz-book" data-b="' + b[0] + '">' + b[1] + '</button>';
    }).join('');
    var typePills = [
      ['all', '全部题型（' + base.length + '）'],
      ['choice', '选择题（' + (typeCount.single + typeCount.multi) + '）'],
      ['single', '单选（' + typeCount.single + '）'],
      ['multi', '多选（' + typeCount.multi + '）'],
      ['qa', '问答（' + typeCount.qa + '）']
    ].map(function (t) {
      return '<button type="button" class="pill' + (f.types === t[0] ? ' active' : '') + '" data-action="set-quiz-type" data-t="' + t[0] + '">' + t[1] + '</button>';
    }).join('');
    var countPills = [10, 20, 'all'].map(function (c) {
      return '<button type="button" class="pill' + (state.setup.count === c ? ' active' : '') + '" data-action="set-count" data-c="' + c + '">' +
        (c === 'all' ? '全部（' + list.length + '）' : c + ' 题') + '</button>';
    }).join('');
    var shufflePill = '<button type="button" class="pill' + (state.setup.shuffle ? ' active' : '') + '" data-action="toggle-shuffle">' +
      (state.setup.shuffle ? '🔀 随机顺序' : '↕️ 顺序出题') + '</button>';
    var optionOrderPills =
      '<button type="button" class="pill' + (state.setup.order === 'doc' ? ' active' : '') + '" data-action="set-option-order" data-o="doc">📄 文档顺序</button>' +
      '<button type="button" class="pill' + (state.setup.order === 'random' ? ' active' : '') + '" data-action="set-option-order" data-o="random">🎲 随机打乱</button>';
    var hasFilter = f.book !== 'all' || f.status !== 'all' || !!f.q || (f.types && f.types !== 'all');
    var breakdown = '可选范围共 ' + base.length + ' 题：单选 ' + typeCount.single + ' · 多选 ' + typeCount.multi + ' · 问答 ' + typeCount.qa;

    var card = '<article class="card">' +
      '<div class="card-head"><span class="chip type">答题模式</span>' +
      '<span class="chip">当前范围 ' + list.length + ' 题</span>' +
      filterSummaryHTML(f) +
      '<span class="spacer"></span>' + (hasFilter ? '<button type="button" class="btn small ghost" data-action="clear-quiz-filters">清空筛选</button>' : '') +
      '<button type="button" class="btn small ghost" data-action="reset">清除本机进度</button></div>' +
      '<div class="card-body setup">' +
      '<div><h2 class="stem">准备开始一轮练习</h2>' +
      '<p class="hint">答题模式有独立的题库/题型/筛选配置（与背题模式互不影响，且会记住）。选中答案后立即判分，并展开解析、记忆要点、易错点与审核见解；答对的题自动记为已掌握，答错自动进错题本。</p></div>' +
      '<div class="setup-row">' +
      '<div class="field"><span class="field-label">题库</span><div class="range-pills">' + bookPills + '</div></div>' +
      '</div>' +
      '<div class="setup-row">' +
      '<div class="field"><span class="field-label">题型</span><div class="range-pills">' + typePills + '</div></div>' +
      '</div>' +
      '<p class="hint" style="margin:-4px 0 0">' + esc(breakdown) + '</p>' +
      '<div class="setup-row">' +
      '<div class="field"><span class="field-label">题量</span><div class="range-pills">' + countPills + '</div></div>' +
      '<div class="field"><span class="field-label">题目顺序</span><div class="range-pills">' + shufflePill + '</div></div>' +
      '</div>' +
      '<div class="setup-row">' +
      '<div class="field"><span class="field-label">选项顺序</span><div class="range-pills">' + optionOrderPills + '</div></div>' +
      '</div>' +
      '<button type="button" class="btn primary" data-action="start"' + (list.length ? '' : ' disabled') + '>开始答题（' +
      (state.setup.count === 'all' ? list.length : Math.min(state.setup.count, list.length)) + ' 题）</button>' +
      '<button type="button" class="btn" data-action="start-wrong"' + (wrongInPool.length ? '' : ' disabled') + '>只练错题（' + wrongInPool.length + '）</button>' +
      '</div>' +
      '<p class="hint">多选题需勾选后点「提交答案」；问答题先自答，再点「显示参考答案」并自评。选项顺序可切换「文档顺序 / 随机打乱」，设置会被记住。</p>' +
      '</div></article>';
    $('#view').innerHTML = card;
  }

  /* 防御性校验：确保本轮题目一定落在 scope（题库/题型）内 */
  function inScope(q, scope) {
    if (!q || !scope) return false;
    if (scope.book && scope.book !== 'all' && String(q.book) !== scope.book) return false;
    var t = scope.types || 'all';
    if (t !== 'all') {
      if (t === 'choice') { if (q.type !== 'single' && q.type !== 'multi') return false; }
      else if (q.type !== t) return false;
    }
    return true;
  }

  function startQuiz(ids, scope) {
    var f = F();
    var sc = scope || { book: f.book, status: f.status, q: f.q, types: f.types || 'all' };
    ids = ids.filter(function (id) { return inScope(byId(id), sc); });
    if (!ids.length) return;
    state.quiz = {
      ids: ids.slice(), pos: 0, correct: 0, answered: false, picked: [], results: [],
      optionOrder: state.setup.order, displayOpts: null, displayFor: null,
      scope: sc
    };
    renderQuizStep();
  }

  function startFromPool(wrongOnly) {
    var list = pool();
    if (wrongOnly) list = list.filter(function (q) { return !!wrong[q.id]; });
    if (state.setup.shuffle) list = shuffle(list);
    if (state.setup.count !== 'all') list = list.slice(0, state.setup.count);
    startQuiz(list.map(function (q) { return q.id; }));
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function quizScopeLabel(scope) {
    if (!scope) return '';
    var parts = [BOOK_SHORT[scope.book] || BOOK_SHORT.all];
    if (scope.types && scope.types !== 'all') parts.push('仅' + TYPE_LABEL[scope.types]);
    if (scope.status !== 'all') parts.push(STATUS_LABEL[scope.status] || scope.status);
    if (scope.q) parts.push('🔍 ' + scope.q);
    return parts.join(' · ');
  }

  function scopeChanged(quiz) {
    if (!quiz || !quiz.scope) return false;
    var f = F();
    return quiz.scope.book !== f.book || quiz.scope.status !== f.status || quiz.scope.q !== f.q ||
      (quiz.scope.types || 'all') !== (f.types || 'all');
  }

  function quizTopHTML(quiz) {
    var total = quiz.ids.length;
    var answered = quiz.results.length;
    var p = pct(quiz.correct, answered);
    return '<div class="quiz-top">' +
      '<span>第 <b>' + (quiz.pos + 1) + '</b>/<b>' + total + '</b> 题</span>' +
      '<span>已答 <b>' + answered + '</b></span>' +
      '<span>正确 <b>' + quiz.correct + '</b>（' + p + '%）</span>' +
      '<span class="scope-tag">📚 ' + esc(quizScopeLabel(quiz.scope)) + '</span>' +
      '<div class="qbar"><i style="width:' + pct(quiz.pos, total) + '%"></i></div>' +
      '<button type="button" class="btn small ghost" data-action="quit">结束本轮</button>' +
      '</div>';
  }

  function renderQuizStep() {
    var quiz = state.quiz;
    var q = byId(quiz.ids[quiz.pos]);
    if (!q) { quiz.pos++; renderQuiz(); return; }

    var answered = quiz.answered;
    var picked = quiz.picked;
    var list = pool(); // 仅用于展示导航时不必

    var body = '';
    var display = ensureDisplayOptions();
    body += '<h2 class="stem' + (q.type === 'qa' ? ' qa-stem' : '') + '">' + esc(q.stem) + '</h2>';
    body += optionListHTML(q, {
      quiz: true, answered: answered, revealed: answered,
      picked: picked, gradedOk: quiz.lastOk, display: display
    });

    if (!answered) {
      if (q.type === 'single') {
        body += '<p class="hint" style="margin-top:14px;color:var(--text-3);font-size:13px">点击选项立即判分</p>';
      } else if (q.type === 'multi') {
        body += '<div class="card-actions"><button type="button" class="btn primary" data-action="submit-multi"' +
          (picked.length ? '' : ' disabled') + '>提交答案（已选 ' + picked.length + ' 项）</button></div>';
      } else if (q.type === 'qa') {
        body += '<div class="card-actions"><button type="button" class="btn primary" data-action="reveal-qa">显示参考答案</button></div>';
      }
    }

    if (answered) {
      var isLast = quiz.pos === quiz.ids.length - 1;
      var ansText = q.type === 'qa' ? '' : q.answer.split('').map(function (k) {
        var o = q.options.filter(function (x) { return x.key === k; })[0];
        return o ? o.text : k;
      }).join('；');
      var hasAlt = q.accept && q.accept.length > 1;
      var qaPending = q.type === 'qa' && !quiz.lastRate;
      var banner;
      if (qaPending) {
        banner = '<div class="ans-banner neutral">📄 参考答案已显示<span class="sub">请诚实自评：我记住了 / 还没记住</span></div>';
      } else if (quiz.lastRate === 'ok') {
        banner = '<div class="ans-banner ok">✅ 我记住了<span class="sub">已自动记为已掌握</span></div>';
      } else if (quiz.lastRate === 'bad') {
        banner = '<div class="ans-banner bad">✗ 还没记住<span class="sub">已加入错题本，建议重点复习</span></div>';
      } else if (quiz.lastOk) {
        banner = '<div class="ans-banner ok">✅ 回答正确<span class="sub">答案：' + esc(ansText) +
          (hasAlt ? ' · 本题答案存疑，已按宽松标准判定' : '') + '</span></div>';
      } else {
        banner = '<div class="ans-banner bad">❌ 回答错误<span class="sub">正确答案：' + esc(ansText) + '</span></div>';
      }
      body += '<div class="answer-zone">' + banner + answerBlocksHTML(q, { hideAnswer: q.type !== 'qa' }) + '</div>';
      if (qaPending) {
        body += '<div class="feedback-actions">' +
          '<button type="button" class="btn soft-ok" data-action="rate-ok">✓ 我记住了</button>' +
          '<button type="button" class="btn soft-bad" data-action="rate-bad">✗ 还没记住</button></div>';
      } else {
        body += '<div class="feedback-actions"><button type="button" class="btn primary" data-action="next-quiz">' +
          (isLast ? '查看本轮结果 →' : '下一题 →') + '</button></div>';
      }
    }

    var notice = '';
    if (scopeChanged(quiz)) {
      notice = '<div class="notice-warn">⚠️ 筛选条件已更改，本轮仍按开始时的范围（' + esc(quizScopeLabel(quiz.scope)) +
        '）出题，更改将在下一轮生效。<button type="button" class="btn small ghost" data-action="restart-setup">返回设置重开</button></div>';
    }

    $('#view').innerHTML = notice + quizTopHTML(quiz) +
      '<article class="card"><div class="card-head">' + headerChips(q) +
      '<span class="spacer"></span>' +
      (quiz.optionOrder === 'random' && q.type !== 'qa' ? '<span class="chip">🎲 选项乱序</span>' : '') +
      '<span class="chip">' +
      (q.type === 'multi' ? '多选' : q.type === 'qa' ? '自评' : '单选') + '</span></div>' +
      '<div class="card-body">' + body + '</div></article>';
  }

  /* ---------------- 判分 ---------------- */
  function checkAnswer(q, picked) {
    if (q.type === 'qa') return null;
    var sel = picked.slice().sort().join('');
    var accept = (q.accept && q.accept.length) ? q.accept : [q.answer];
    return accept.indexOf(sel) !== -1;
  }

  function commitAnswer(picked, rate) {
    var quiz = state.quiz;
    var q = byId(quiz.ids[quiz.pos]);
    var ok = rate === 'ok' ? true : rate === 'bad' ? false : checkAnswer(q, picked);
    quiz.answered = true;
    quiz.picked = picked.slice();
    quiz.lastOk = ok;
    quiz.lastRate = rate || null;
    quiz.results.push({ id: q.id, ok: ok });
    if (ok) {
      quiz.correct++;
      mastered[q.id] = true; saveMastered();
      clearWrong(q.id);
    } else {
      recordWrong(q.id);
    }
    markSeen(q.id);
    renderProgress();
    renderQuizStep();
  }

  /* ---------------- 结果页 ---------------- */
  function renderQuizResult() {
    var quiz = state.quiz;
    if (!quiz) { renderQuizSetup(); return; }
    var answered = quiz.results.length;
    var total = quiz.ids.length;
    var rate = pct(quiz.correct, answered);
    var wrongInSession = quiz.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.id; });

    var listHTML = quiz.results.map(function (r) {
      var q = byId(r.id);
      if (!q) return '';
      return '<div class="result-item"><span class="mark ' + (r.ok ? 'ok' : 'bad') + '">' + (r.ok ? '✓' : '✗') + '</span>' +
        '<span class="txt"><b>' + esc(SECTIONS[q.section] ? SECTIONS[q.section].label : '') +
        ' 第' + q.num + '题</b> ' + esc(q.stem.slice(0, 46)) + (q.stem.length > 46 ? '…' : '') + '</span>' +
        statusChip(q) + '</div>';
    }).join('');

    var html = '<article class="card"><div class="card-head"><span class="chip type">本轮结果</span>' +
      '<span class="chip">已答 ' + answered + ' / ' + total + '</span>' +
      '<span class="spacer"></span><button type="button" class="btn small ghost" data-action="restart-setup">返回设置</button></div>' +
      '<div class="card-body">' +
      '<div class="result-hero"><div class="score">' + quiz.correct + '<small> / ' + answered + '</small></div>' +
      '<p>正确率 ' + rate + '%' + (wrongInSession.length ? ' · 本轮错题 ' + wrongInSession.length + ' 道已进错题本' : ' · 全对，漂亮！') + '</p></div>' +
      (quiz.results.length ? '<div class="result-list">' + listHTML + '</div>' : '') +
      '<div class="card-actions">' +
      '<button type="button" class="btn primary" data-action="again">再来一轮</button>' +
      '<button type="button" class="btn" data-action="retry-wrong"' + (wrongInSession.length ? '' : ' disabled') + '>重做本轮错题（' + wrongInSession.length + '）</button>' +
      '<button type="button" class="btn ghost" data-action="to-study" style="margin-left:auto">去背题模式</button>' +
      '</div></div></article>';
    $('#view').innerHTML = html;
  }

  /* ---------------- 事件 ---------------- */
  function currentList() { return pool(); }

  function studyGo(delta) {
    var list = pool();
    if (!list.length) return;
    state.pos = Math.min(list.length - 1, Math.max(0, state.pos + delta));
    render(); // 显隐状态跨题目保持
  }

  function handleAction(action, el) {
    var q, list, quiz;
    switch (action) {
      /* --- 背题 --- */
      case 'reveal':
        state.revealed = !state.revealed;
        store.set('revealMode', state.revealed);
        render();
        break;
      case 'prev': studyGo(-1); break;
      case 'next': studyGo(1); break;
      case 'mark':
        list = pool();
        q = list[state.pos];
        if (!q) break;
        if (mastered[q.id]) removeMastered(q.id); else addMastered(q.id);
        render();
        break;
      case 'random': {
        list = pool();
        if (list.length > 1) {
          var i = state.pos;
          while (i === state.pos) i = Math.floor(Math.random() * list.length);
          state.pos = i;
        }
        render();
        break;
      }
      case 'goto':
        state.pos = parseInt(el.getAttribute('data-i'), 10) || 0;
        render();
        break;

      /* --- 答题 --- */
      case 'set-count':
        state.setup.count = el.getAttribute('data-c') === 'all' ? 'all' : parseInt(el.getAttribute('data-c'), 10);
        renderQuizSetup();
        break;
      case 'set-quiz-book':
        F().book = el.getAttribute('data-b');
        persistFilters();
        render();
        break;
      case 'set-quiz-type':
        F().types = el.getAttribute('data-t') || 'all';
        persistFilters();
        render();
        break;
      case 'clear-quiz-filters':
        F().book = 'all'; F().status = 'all'; F().q = ''; F().types = 'all';
        persistFilters();
        render();
        break;
      case 'set-option-order':
        state.setup.order = el.getAttribute('data-o') === 'random' ? 'random' : 'doc';
        store.set('optionOrder', state.setup.order);
        renderQuizSetup();
        break;
      case 'toggle-shuffle':
        state.setup.shuffle = !state.setup.shuffle;
        renderQuizSetup();
        break;
      case 'start':
        startFromPool(false);
        break;
      case 'start-wrong':
        startFromPool(true);
        break;
      case 'pick':
        quiz = state.quiz;
        if (!quiz || quiz.answered) break;
        var key = el.getAttribute('data-key');
        if (quiz.picked.indexOf(key) === -1) quiz.picked.push(key);
        else quiz.picked = quiz.picked.filter(function (k) { return k !== key; });
        q = byId(quiz.ids[quiz.pos]);
        if (q.type === 'single' && quiz.picked.length === 1) {
          commitAnswer(quiz.picked, null);
        } else {
          renderQuizStep();
        }
        break;
      case 'submit-multi':
        quiz = state.quiz;
        if (!quiz || quiz.answered || !quiz.picked.length) break;
        commitAnswer(quiz.picked, null);
        break;
      case 'reveal-qa':
        quiz = state.quiz;
        if (!quiz || quiz.answered) break;
        quiz.picked = [];
        quiz.lastOk = null;
        quiz.lastRate = null;
        quiz.answered = true;
        q = byId(quiz.ids[quiz.pos]);
        markSeen(q.id);
        renderQuizStep();
        break;
      case 'rate-ok': commitAnswer([], 'ok'); break;
      case 'rate-bad': commitAnswer([], 'bad'); break;
      case 'next-quiz':
        quiz = state.quiz;
        if (!quiz) break;
        quiz.pos++;
        quiz.answered = false;
        quiz.picked = [];
        quiz.lastOk = null;
        quiz.lastRate = null;
        if (quiz.pos >= quiz.ids.length) renderQuizResult();
        else renderQuizStep();
        break;
      case 'quit':
        if (state.quiz && state.quiz.results.length) renderQuizResult();
        else { state.quiz = null; renderQuizSetup(); }
        break;
      case 'restart-setup':
        state.quiz = null;
        renderQuizSetup();
        break;
      case 'again':
        startFromPool(false);
        break;
      case 'retry-wrong': {
        quiz = state.quiz;
        var ids = quiz ? quiz.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.id; }) : [];
        var keepScope = quiz ? quiz.scope : null;
        state.quiz = null;
        startQuiz(ids, keepScope);
        break;
      }
      case 'to-study':
        state.mode = 'study';
        state.quiz = null;
        state.pos = 0;
        setModeUI();
        render();
        break;
      case 'reset':
        if (window.confirm('确定清除本机记录的掌握状态、错题本和阅读进度吗？此操作不可撤销。')) {
          mastered = {}; wrong = {}; seen = {};
          saveMastered(); saveWrong(); saveSeen();
          state.quiz = null;
          state.pos = 0;
          render();
        }
        break;
    }
  }

  /* ---------------- 视图渲染入口 ---------------- */
  function render() {
    syncToolbar();
    // 背题模式下答案可见即视为「已看」；显隐状态跨题目保持
    if (state.mode === 'study' && state.revealed) {
      var list = pool();
      if (list.length) {
        var cur = list[Math.min(state.pos, list.length - 1)];
        if (cur) markSeen(cur.id);
      }
    }
    renderProgress();
    if (state.mode === 'study') renderStudy();
    else renderQuiz();
  }

  function setModeUI() {
    var btns = document.querySelectorAll('#modeNav button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-mode') === state.mode);
    }
  }

  /* ---------------- 主题 ---------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = $('#themeBtn');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    store.set('theme', theme);
  }

  /* ---------------- 事件绑定 ---------------- */
  function bind() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-action]');
      if (!t) return;
      if (!document.getElementById('view').contains(t) && !t.closest('#view')) {
        if (t.id !== 'randomBtn') return;
      }
      handleAction(t.getAttribute('data-action'), t);
    });

    $('#modeNav').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-mode]');
      if (!btn) return;
      state.mode = btn.getAttribute('data-mode');
      setModeUI();
      render();
    });

    $('#themeBtn').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    $('#bookSel').addEventListener('change', function () {
      F().book = this.value;
      persistFilters();
      if (state.mode === 'study') state.pos = 0;
      render();
    });
    $('#statusSel').addEventListener('change', function () {
      F().status = this.value;
      persistFilters();
      if (state.mode === 'study') state.pos = 0;
      render();
    });
    var timer = null;
    $('#searchInput').addEventListener('input', function () {
      var v = this.value;
      clearTimeout(timer);
      timer = setTimeout(function () {
        F().q = v.trim();
        persistFilters();
        if (state.mode === 'study') state.pos = 0;
        render();
      }, 120);
    });
    $('#randomBtn').addEventListener('click', function () {
      if (state.mode === 'study') {
        var list = pool();
        if (list.length > 1) {
          var i = state.pos;
          while (i === state.pos) i = Math.floor(Math.random() * list.length);
          state.pos = i;
        }
        render();
      }
    });

    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (state.mode === 'study') {
        if (e.key === 'ArrowLeft') { e.preventDefault(); studyGo(-1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); studyGo(1); }
        else if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          state.revealed = !state.revealed;
          store.set('revealMode', state.revealed);
          render();
        } else if (e.key === 'm' || e.key === 'M') {
          var l2 = pool();
          var q2 = l2[state.pos];
          if (q2) { if (mastered[q2.id]) removeMastered(q2.id); else addMastered(q2.id); render(); }
        }
        return;
      }

      /* 答题模式快捷键 */
      var quiz = state.quiz;
      if (!quiz) return;
      var q = byId(quiz.ids[quiz.pos]);
      if (!q) return;
      if (/^[1-6]$/.test(e.key) && !quiz.answered && q.type !== 'qa') {
        var idx = parseInt(e.key, 10) - 1;
        var display = ensureDisplayOptions();
        if (display && display[idx]) {
          e.preventDefault();
          var key = display[idx].orig;
          if (q.type === 'single') commitAnswer([key], null);
          else {
            if (quiz.picked.indexOf(key) === -1) quiz.picked.push(key);
            else quiz.picked = quiz.picked.filter(function (k) { return k !== key; });
            renderQuizStep();
          }
        }
        return;
      }
      if (e.key === 'Enter') {
        if (quiz.answered) {
          e.preventDefault();
          handleAction('next-quiz');
        } else if (q.type === 'multi' && quiz.picked.length) {
          e.preventDefault();
          handleAction('submit-multi');
        }
        return;
      }
      if ((e.key === ' ' || e.key === 'Spacebar') && q.type === 'qa' && !quiz.answered) {
        e.preventDefault();
        handleAction('reveal-qa');
      }
    });
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    applyTheme(store.get('theme', window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    bind();
    setModeUI();
    if (!ALL.length) {
      $('#view').innerHTML = '<div class="card"><div class="empty"><span class="ico">📭</span><p><strong>题库数据未加载</strong></p><p class="hint">请确认 data/questions.js 与 index.html 在同一站点目录下。</p></div></div>';
      return;
    }
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
