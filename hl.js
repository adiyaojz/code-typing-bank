/* ============================================================
 * 代码打字练习 · 语法高亮 + 指法键盘图（纯工具模块）
 * 暴露 window.CT，供 app.js 调用，不依赖页面状态。
 * ============================================================ */
(function () {
'use strict';

/* ---------- 关键字表 ---------- */
const CPP_KW = [
  'include','define','ifdef','ifndef','endif','pragma','using','namespace','std',
  'int','long','short','char','float','double','bool','void','unsigned','signed',
  'const','constexpr','auto','static','inline','extern','register','volatile','mutable',
  'return','if','else','for','while','do','break','continue','switch','case','default','goto',
  'struct','class','union','enum','typedef','template','typename','public','private','protected',
  'virtual','override','final','this','new','delete','sizeof','nullptr','true','false','NULL',
  'try','catch','throw','operator','friend',
  'cout','cin','cerr','endl','string','vector','map','set','unordered_map','unordered_set',
  'queue','stack','deque','priority_queue','pair','make_pair','array','bitset','iterator',
  'sort','swap','reverse','max','min','abs','push_back','pop_back','size','length','begin','end',
  'find','count','lower_bound','upper_bound','memset','fill','unique','gcd','__gcd'
];
const PY_KW = [
  'and','as','assert','async','await','break','class','continue','def','del','elif','else',
  'except','False','finally','for','from','global','if','import','in','is','lambda','None',
  'nonlocal','not','or','pass','raise','return','True','try','while','with','yield',
  'print','range','len','int','float','str','list','dict','set','tuple','bool','input',
  'sum','max','min','abs','sorted','reversed','enumerate','zip','map','filter','type',
  'isinstance','open','format','chr','ord','round','pow','any','all','bin','hex','divmod'
];
const KW = {
  cpp: new Set(CPP_KW),
  c: new Set(CPP_KW.filter(k => !/^(class|template|typename|new|delete|cout|cin|endl|vector|map|set|unordered_map|priority_queue|string|namespace|std|virtual|override|this|nullptr|friend|operator|constexpr)$/.test(k))),
  arduino: new Set(CPP_KW.concat([
    'setup','loop','pinMode','digitalWrite','digitalRead','analogWrite','analogRead','delay',
    'delayMicroseconds','millis','micros','Serial','HIGH','LOW','INPUT','OUTPUT','INPUT_PULLUP',
    'A0','A1','A2','LED_BUILTIN','tone','noTone','attachInterrupt','map','constrain'
  ])),
  python: new Set(PY_KW),
  scratch: new Set([]),
  symbols: new Set([])
};

/**
 * 逐字符 token 着色：返回与 code 等长的类别数组。
 * 类别: kw 关键字 / str 字符串 / num 数字 / com 注释 / op 运算符标点 / id 标识符 / '' 空白
 */
function tokenize(code, lang) {
  const kws = KW[lang] || KW.cpp;
  const out = new Array(code.length).fill('');
  const isPy = lang === 'python';
  const isC = lang === 'cpp' || lang === 'c' || lang === 'arduino';
  let i = 0;
  const mark = (a, b, kind) => { for (let p = a; p < b && p < code.length; p++) out[p] = kind; };
  while (i < code.length) {
    const ch = code[i];
    if (/\s/.test(ch)) { i++; continue; }
    // 注释
    if (isPy && ch === '#') {
      let j = i; while (j < code.length && code[j] !== '\n') j++;
      mark(i, j, 'com'); i = j; continue;
    }
    if (isC && ch === '/' && code[i + 1] === '/') {
      let j = i; while (j < code.length && code[j] !== '\n') j++;
      mark(i, j, 'com'); i = j; continue;
    }
    if (isC && ch === '/' && code[i + 1] === '*') {
      let j = i + 2;
      while (j < code.length && !(code[j] === '*' && code[j + 1] === '/')) j++;
      j = Math.min(code.length, j + 2);
      mark(i, j, 'com'); i = j; continue;
    }
    // 字符串（含转义）
    if (ch === '"' || ch === "'") {
      const q = ch; let j = i + 1;
      while (j < code.length) {
        if (code[j] === '\\') { j += 2; continue; }
        if (code[j] === q) { j++; break; }
        if (code[j] === '\n') break;
        j++;
      }
      mark(i, j, 'str'); i = j; continue;
    }
    // 数字（含 0x / 小数）
    if (/[0-9]/.test(ch)) {
      let j = i + 1;
      while (j < code.length && /[0-9a-fA-FxXbBoO._]/.test(code[j])) j++;
      mark(i, j, 'num'); i = j; continue;
    }
    // 标识符 / 关键字
    if (/[A-Za-z_]/.test(ch)) {
      let j = i + 1;
      while (j < code.length && /[A-Za-z0-9_]/.test(code[j])) j++;
      mark(i, j, kws.has(code.slice(i, j)) ? 'kw' : 'id');
      i = j; continue;
    }
    mark(i, i + 1, 'op');
    i++;
  }
  return out;
}

/* ---------- 指法键盘图 ---------- */
const FINGER_NAME = {
  LP: '左手小指', LR: '左手无名指', LM: '左手中指', LI: '左手食指',
  RI: '右手食指', RM: '右手中指', RR: '右手无名指', RP: '右手小指', TH: '双手拇指'
};
// [主字符, Shift 层, 手指]
const KEY_ROWS = [
  [['`','~','LP'],['1','!','LP'],['2','@','LR'],['3','#','LM'],['4','$','LI'],['5','%','LI'],
   ['6','^','RI'],['7','&','RI'],['8','*','RM'],['9','(','RR'],['0',')','RP'],['-','_','RP'],['=','+','RP']],
  [['q','Q','LP'],['w','W','LR'],['e','E','LM'],['r','R','LI'],['t','T','LI'],['y','Y','RI'],
   ['u','U','RI'],['i','I','RM'],['o','O','RR'],['p','P','RP'],['[','{','RP'],[']','}','RP'],['\\','|','RP']],
  [['a','A','LP'],['s','S','LR'],['d','D','LM'],['f','F','LI'],['g','G','LI'],['h','H','RI'],
   ['j','J','RI'],['k','K','RM'],['l','L','RR'],[';',':','RP'],["'",'"','RP']],
  [['z','Z','LP'],['x','X','LR'],['c','C','LM'],['v','V','LI'],['b','B','LI'],['n','N','RI'],
   ['m','M','RI'],[',','<','RM'],['.','>','RR'],['/','?','RP']]
];

function makeKey(txt, finger, cls, dataMain, dataShift) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'kb-key' + (finger ? ' f-' + finger : '') + (cls ? ' ' + cls : '');
  if (dataMain !== undefined) b.dataset.main = dataMain;
  if (dataShift !== undefined) b.dataset.shift = dataShift;
  b.textContent = txt;
  return b;
}

/**
 * 在 container 里生成键盘图。
 * onKey(ch, needShift) 在点键时回调（可为空）。
 * 返回 { highlight(ch), clear() }
 */
function buildKeyboard(container, onKey) {
  container.innerHTML = '';
  const hint = document.createElement('div');
  hint.className = 'kb-finger';
  hint.textContent = '准备开始';
  container.appendChild(hint);

  const keysWrap = document.createElement('div');
  keysWrap.className = 'kb-rows';
  container.appendChild(keysWrap);

  const allKeys = [];
  const bind = (btn, ch, needShift) => {
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();              // 保持输入焦点，避免软键盘收起
      if (onKey) onKey(ch, needShift);
    });
  };

  // 数字行 + Backspace
  const r1 = document.createElement('div'); r1.className = 'kb-row';
  KEY_ROWS[0].forEach(([m, s, f]) => {
    const b = makeKey(m, f, '', m, s);
    const sup = document.createElement('i'); sup.textContent = s; b.appendChild(sup);
    bind(b, m, false); r1.appendChild(b); allKeys.push(b);
  });
  const back = makeKey('Backspace', 'RP', 'kb-wide'); bind(back, null, false);
  r1.appendChild(back);
  keysWrap.appendChild(r1);

  // 第二行 + Tab
  const r2 = document.createElement('div'); r2.className = 'kb-row';
  const tab = makeKey('Tab', 'LP', 'kb-wide'); bind(tab, null, false); r2.appendChild(tab);
  KEY_ROWS[1].forEach(([m, s, f]) => {
    const b = makeKey(m, f, '', m, s);
    const sup = document.createElement('i'); sup.textContent = s; b.appendChild(sup);
    bind(b, m, false); r2.appendChild(b); allKeys.push(b);
  });
  keysWrap.appendChild(r2);

  // 第三行 + Caps / Enter
  const r3 = document.createElement('div'); r3.className = 'kb-row';
  const caps = makeKey('Caps', 'LP', 'kb-wide'); bind(caps, null, false); r3.appendChild(caps);
  KEY_ROWS[2].forEach(([m, s, f]) => {
    const b = makeKey(m, f, '', m, s);
    const sup = document.createElement('i'); sup.textContent = s; b.appendChild(sup);
    bind(b, m, false); r3.appendChild(b); allKeys.push(b);
  });
  const enter = makeKey('Enter', 'RP', 'kb-wide kb-enter');
  enter.dataset.enter = '1'; bind(enter, '\n', false); r3.appendChild(enter);
  keysWrap.appendChild(r3);

  // 第四行 + 双 Shift
  const r4 = document.createElement('div'); r4.className = 'kb-row';
  const sl = makeKey('Shift', 'LP', 'kb-wide kb-shift'); sl.dataset.shiftkey = '1'; bind(sl, null, false); r4.appendChild(sl);
  KEY_ROWS[3].forEach(([m, s, f]) => {
    const b = makeKey(m, f, '', m, s);
    const sup = document.createElement('i'); sup.textContent = s; b.appendChild(sup);
    bind(b, m, false); r4.appendChild(b); allKeys.push(b);
  });
  const sr = makeKey('Shift', 'RP', 'kb-wide kb-shift'); sr.dataset.shiftkey = '1'; bind(sr, null, false); r4.appendChild(sr);
  keysWrap.appendChild(r4);

  // 空格行
  const r5 = document.createElement('div'); r5.className = 'kb-row';
  const space = makeKey('空格', 'TH', 'kb-space');
  space.dataset.space = '1'; bind(space, ' ', false); r5.appendChild(space);
  keysWrap.appendChild(r5);

  function clear() {
    container.querySelectorAll('.kb-key.on').forEach(b => b.classList.remove('on'));
  }
  function highlight(ch) {
    clear();
    if (ch == null || ch === '') { hint.textContent = '本条完成，准备下一条'; return; }
    let target = null, needShift = false, finger = '';
    if (ch === ' ') { target = space; finger = 'TH'; }
    else if (ch === '\n' || ch === '\r') { target = enter; finger = 'RP'; }
    else {
      for (const b of allKeys) {
        if (b.dataset.main === ch) { target = b; break; }
        if (b.dataset.shift === ch) { target = b; needShift = true; break; }
      }
      if (target) finger = (target.className.match(/f-(LP|LR|LM|LI|RI|RM|RR|RP)/) || [])[1] || '';
    }
    if (!target) { hint.textContent = '当前字符：' + (ch === '\n' ? '回车' : ch) + '（不在标准键位）'; return; }
    target.classList.add('on');
    if (needShift) container.querySelectorAll('.kb-shift').forEach(b => b.classList.add('on'));
    const fname = FINGER_NAME[finger] || '手指';
    hint.textContent = '下一个要敲：' + (ch === ' ' ? '空格' : ch === '\n' ? '回车' : ch) +
                       '　·　' + fname + (needShift ? '　·　需按住 Shift' : '');
  }
  return { highlight, clear };
}

window.CT = { tokenize, buildKeyboard, FINGER_NAME };
})();
