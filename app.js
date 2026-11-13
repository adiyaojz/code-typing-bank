/* ============================================================
 * 代码打字练习 · 学生端
 * 题库来自独立的 bank.json：页面每次加载都会重新拉取，
 * 老师在管理页改完题库后，学生刷新即可看到（热更新）。
 * ============================================================ */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const LS = {
  settings: 'ct_settings_v2', user: 'ct_user_v2', done: 'ct_done_v2',
  history: 'ct_history_v2', bankCache: 'ct_bank_cache_v2',
  bankOverride: 'ct_bank_override_v2', lang: 'ct_lang_v2',
  srs: 'ct_srs_v2', bankDefaultApplied: 'ct_bank_default_v3',
  kbHeight: 'ct_kb_height_v1'
};
// 静态站由 index.html 注入绝对地址；完整版为空，表示自身带服务端
const BATTLE_URL = window.BATTLE_URL || '';

/* __DONE_MIGRATION_START__ */
const DONE_MIGRATION = {"cpp":{"0":"基础高频","1":"数据类型与变量","2":"分支与循环","3":"分支与循环","4":"函数","5":"数组与 vector","6":"字符串操作","7":"STL容器接口","8":"vector 深入","9":"字符串操作","10":"algorithm 高频","11":"set 集合","12":"map 映射","13":"stack 栈","14":"queue 队列","15":"deque · 构造与赋值","16":"deque · 构造与赋值","17":"deque · 构造与赋值","18":"deque · 迭代器与遍历","19":"deque · 迭代器与遍历","20":"deque · 容量访问与修改","21":"deque · 容量访问与修改","22":"deque · 容量访问与修改","23":"deque · 容量访问与修改","24":"deque · 容量访问与修改","25":"deque · 容量访问与修改","26":"deque · 进阶与实战","27":"deque · 进阶与实战","28":"deque · 进阶与实战","29":"priority_queue 堆","30":"pair 对","31":"数据类型与变量","32":"输入输出","33":"运算符补充","34":"分支与循环","35":"数组与 vector","36":"程序结构与头文件","37":"程序结构与头文件","38":"函数","39":"指针入门","40":"结构体 struct","41":"类与对象入门","42":"常用库函数","43":"文件读写","44":"GESP输入输出实战","45":"常用库函数","46":"结构体 struct","47":"综合挑战","48":"二分查找模板","49":"前缀和与差分","50":"枚举与模拟","51":"素数与数学","52":"进制与位运算","53":"BFS / DFS 框架","54":"动态规划入门","55":"结构体与排序进阶","56":"字符串处理进阶","57":"GESP 易错点速记","58":"GESP 一级 · 程序框架与运算","59":"GESP 一级 · 条件与循环","60":"GESP 二级 · 嵌套与一维数组","61":"GESP 二级 · 字符与函数","62":"GESP 三级 · 数组排序与字符串","63":"GESP 三级 · 枚举模拟与递归","64":"GESP 四级 · 指针结构体与文件","65":"GESP 四级 · 递推二分与排序","66":"GESP 五级 · 高精度与 STL 容器","67":"GESP 五级 · 贪心数论与位运算","68":"GESP 六级 · 树图存储","69":"GESP 六级 · 搜索与动态规划","70":"GESP 七级 · 并查集堆与树状数组","71":"GESP 七级 · 最短路区间 DP 与哈希","72":"GESP 八级 · 组合计数与数论进阶","73":"GESP 八级 · 字符串算法与状压 DP","74":"小算法 · 完整程序（求和累加）","75":"GESP 一级 · 完整程序","76":"GESP 二级 · 完整程序","77":"GESP 三级 · 完整程序","78":"GESP 四级 · 完整程序","79":"GESP 五级 · 完整程序","80":"GESP 六级 · 完整程序","81":"GESP 七级 · 完整程序","82":"GESP 八级 · 完整程序","83":"真题 · 一级（CCF 官方 · 完整程序）","84":"真题 · 二级（CCF 官方 · 完整程序）","85":"真题 · 三级（CCF 官方 · 完整程序）"},"basic":{"0":"零基础 · 字母键位热身","1":"零基础 · 最短代码词","2":"零基础 · 高频代码词","3":"零基础 · 常见关键字","4":"零基础 · 变量名与命名","5":"零基础 · 数字与表达式"},"python":{"0":"基础高频","1":"逻辑与判断","2":"循环语句","3":"函数与作用域","4":"字符串方法","5":"列表与元组","6":"字典与集合","7":"文件读写","8":"标准库常用","9":"类型转换与输入","10":"运算符","11":"切片详解","12":"常用内置函数","13":"列表推导","14":"综合挑战","15":"GESP 一级 · 基础语句","16":"GESP 一级 · 分支与循环","17":"GESP 二级 · 字符串处理","18":"GESP 二级 · 列表进阶","19":"GESP 三级 · 函数与递归","20":"GESP 三级 · 字典与集合","21":"海龟绘图 turtle","22":"随机数与猜数游戏","23":"格式化输出 f-string","24":"文件读写","25":"类与对象入门","26":"Python 常用算法片段","27":"GESP 四级 · 列表元组与字典集合","28":"GESP 四级 · 函数递推与二分","29":"GESP 四级 · 文件读写与异常","30":"GESP 五级 · 递归与自定义排序","31":"GESP 五级 · 贪心枚举与数学模块","32":"GESP 五级 · 位运算与进制转换","33":"GESP 六级 · 搜索与图树表示","34":"GESP 六级 · 动态规划与记忆化","35":"GESP 七级 · 堆与哈希计数","36":"GESP 七级 · 区间 DP 与迭代器","37":"GESP 八级 · 组合枚举与数论","38":"GESP 八级 · Trie 状压与缓存","39":"小算法 · 完整程序（求和累加）","40":"GESP 一级 · 完整程序","41":"GESP 二级 · 完整程序","42":"GESP 三级 · 完整程序","43":"真题 · 一级（CCF 官方 · 完整程序）","44":"真题 · 二级（CCF 官方 · 完整程序）","45":"真题 · 三级（CCF 官方 · 完整程序）"},"c":{"0":"C 程序框架","1":"printf 输出","2":"scanf 输入","3":"数据类型与常量","4":"运算符","5":"分支结构","6":"循环结构","7":"数组与字符串","8":"函数与指针入门"},"arduino":{"0":"程序骨架","1":"数字 IO","2":"模拟 IO","3":"串口与调试","4":"常用传感器与库"},"scratch":{"0":"事件与流程 Events","1":"控制积木 Control","2":"外观与声音 Looks & Sound","3":"侦测与运算 Sensing & Operators","4":"运动与变量 Motion & Variables"},"symbols":{"0":"括号与配对","1":"标点与运算符","2":"代码骨架速打"}};
/* __DONE_MIGRATION_END__ */

/* ---------- 离线兜底题库（仅在完全取不到线上题库时使用） ---------- */
const FALLBACK_BANK = {
  version: 0, updatedAt: null,
  langs: {
    python: { label: 'Python', groups: [{ name: '离线应急词库', items: [
      ['print("Hello World")', '输出一行文字', 'print("Hello World")'],
      ['for i in range(5):', '循环 5 次', 'for i in range(5):\n    print(i)'],
      ['if n > 0:', '条件判断', 'if n > 0:\n    print("正数")'],
      ['def add(a, b):', '定义函数', 'def add(a, b):\n    return a + b']
    ] }] },
    cpp: { label: 'C++', groups: [{ name: '离线应急词库', items: [
      ['#include <iostream>', '引入输入输出头文件', '#include <iostream>'],
      ['int main() {', '主函数入口', 'int main() {\n    return 0;\n}'],
      ['cout << "hi" << endl;', '输出并换行', 'cout << "hi" << endl;'],
      ['for (int i = 0; i < 5; i++) {', 'for 循环', 'for (int i = 0; i < 5; i++) {\n    cout << i;\n}']
    ] }] }
  }
};

const LABELS = {
  python:['Python','PY'], cpp:['C++','C+'], c:['C 语言','C'],
  basic:['零基础键位','AB'], scratch:['Scratch','SC'],
  arduino:['Arduino','IO'], symbols:['符号键位','#']
};
/* 语言展示顺序：C++ 放第一位、零基础第二；未列出的新语言排在后面 */
const LANG_ORDER = ['cpp', 'basic', 'python', 'c', 'arduino', 'scratch', 'symbols'];

/* 默认题库源：公开仓库的 GitHub Pages；push 更新后学生刷新即热更新 */
const DEFAULT_BANK_URL = 'https://adiyaojz.github.io/code-typing-bank/bank.json';

const DEFAULTS = {
  round: 12, strict: false, skipCJK: false, sound: true,
  symbar: true, font: 24, dark: false, bankUrl: DEFAULT_BANK_URL,
  highlight: true, keyboard: true, autoRedo: true, imeRealtime: true, wordMode: true,
  kbOpacity: 100
};

/* ---------- 状态 ---------- */
let settings = loadJSON(LS.settings, DEFAULTS);
/* 一次性迁移：旧版本默认关闭音效；用户要求输入音效后改为开启，已手动关闭的仍尊重 */
if (!localStorage.getItem('ct_sound_default_v2')) {
  if (settings.sound === false) { settings.sound = true; save(LS.settings, settings); }
  try { localStorage.setItem('ct_sound_default_v2', '1'); } catch(e){}
}
let BANK = null;                 // 规范化后的题库
let sourceLabel = '线上';
let langKey = localStorage.getItem(LS.lang) || 'cpp';
let currentUser = '';
let practicing = false;
/* 练习态一屏布局：整页固定，仅代码区内部滚动 */
function setPracticing(v){
  practicing = v;
  document.body.classList.toggle('practice-fixed', v);
}
let queue = [], curMod = 0, itemIdx = 0, charIdx = 0;
let curItem = null, lineEls = [];
let startTs = null, timerId = null;
let correctKeys = 0, mistakes = 0;           // 本轮累计
let roundWrong = {};                          // 本轮错题统计
let audioCtx = null;

/* 阶段二：练习模式、错题库、联机挑战、指法键盘图 */
let mode = 'normal';             // normal | review | challenge
let roundMeta = { title: '', lang: 'cpp', mod: -1 };
let itemMistakes = 0;            // 当前词条打错次数
let roundRedone = false;         // 本轮是否已自动重练过错题
let roundWrongItems = {};        // 本轮打错过的完整词条，供自动重练
let kbMap = null;                // 指法键盘图控制器
let kbExpanded = true;
let kbUserHeight = 0;           // 用户拖出来的浮窗高度（0 = 跟随内容）
let lastCenterRow = -1;         // 上次居中过的代码行，避免逐字抖动
let challenge = null;            // 当前房间
let chTimerId = null, chPollId = null, chReportId = null;

function loadJSON(key, def){
  try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v && typeof v === 'object' ? Object.assign({}, def, v) : Object.assign({}, def); }
  catch(e){ return Object.assign({}, def); }
}
function save(key, val){ try { localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val)); } catch(e){} }
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
/* 分享链接带访问凭据，站内请求显式透传，避免某些浏览器/隐私模式下丢失 */
function withShare(url){
  let sc = '';
  try { sc = new URLSearchParams(location.search).get('sharecode') || ''; } catch(e){}
  if (!sc || /^https?:\/\//i.test(url)) return url;   // 外部题库地址不加
  return url + (url.includes('?') ? '&' : '?') + 'sharecode=' + encodeURIComponent(sc);
}
function toast(msg){
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._tid); t._tid = setTimeout(() => t.classList.remove('show'), 2200);
}
function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function langLabel(key){
  if (BANK) { const l = BANK.langs.find(x => x.key === key); if (l) return l.label; }
  return (LABELS[key] || [key])[0];
}
function itemId(lang, code){
  const s = lang + '|' + code;
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return lang + '_' + (h >>> 0).toString(36);
}
function downloadJSON(filename, obj){
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = filename;
  a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ---------- 题库规范化：兼容新格式 / 旧格式 / 导入格式 ---------- */
function normalizeBank(raw){
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('题库格式不正确');
  const src = raw.langs || raw;
  const langs = [];
  for (const key of Object.keys(src)) {
    if (['version','updatedAt','note'].includes(key)) continue;
    const node = src[key];
    if (!node) continue;
    const groups = Array.isArray(node) ? node : node.groups;
    if (!Array.isArray(groups) || !groups.length) continue;
    const gs = [];
    for (const g of groups) {
      if (!g || !g.name || !Array.isArray(g.items)) continue;
      const items = [];
      for (const it of g.items) {
        if (!Array.isArray(it) || it.length < 3) continue;
        const code = String(it[0]);
        if (!code.trim()) continue;
        items.push({ code, cn: String(it[1] || ''), ex: String(it[2] || ''), cjk: /[^\x00-\x7F]/.test(code) });
      }
      if (items.length) gs.push({ name: String(g.name), items });
    }
    if (!gs.length) continue;
    const lb = LABELS[key] || [key, key.slice(0,2).toUpperCase()];
    langs.push({ key, label: (node.label || lb[0]), icon: (node.icon || lb[1]), desc: node.desc || '', groups: gs });
  }
  if (!langs.length) throw new Error('题库里没有可用的分组');
  // 统一排序（C++ 第一），不改动题库文件本身，避免覆盖老师在线编辑的内容
  const rank = k => { const i = LANG_ORDER.indexOf(k); return i < 0 ? 99 : i; };
  langs.sort((a, b) => (rank(a.key) - rank(b.key)) || a.key.localeCompare(b.key));
  return { version: raw.version || 1, updatedAt: raw.updatedAt || null, langs };
}

function fmtTime(iso){
  if (!iso) return '未知';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return String(iso);
  const p = n => String(n).padStart(2,'0');
  return `${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

async function fetchJSON(url){
  const r = await fetch(url, { cache: 'no-store', credentials: 'same-origin' });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const txt = await r.text();
  return JSON.parse(txt);   // 若被 SPA 兜底成 HTML，这里会抛错，由调用方降级
}

/* ---------- 加载题库（热更新的核心） ---------- */
async function loadBank(manual){
  const override = localStorage.getItem(LS.bankOverride);
  const stamp = '?t=' + Date.now();
  let raw = null, used = '';

  if (override) {
    try { raw = JSON.parse(override); used = '本机导入'; }
    catch(e){ localStorage.removeItem(LS.bankOverride); }
  }
  if (!raw && settings.bankUrl.trim()) {
    try { raw = await fetchJSON(settings.bankUrl.trim() + (settings.bankUrl.includes('?') ? '&' : '?') + 't=' + Date.now()); used = (settings.bankUrl.trim() === DEFAULT_BANK_URL) ? 'GitHub 题库' : '自定义地址'; }
    catch(e){ console.warn('自定义题库读取失败', e); }
  }
  if (!raw) {
    try { raw = await fetchJSON(withShare('/api/bank' + stamp)); used = '线上'; }
    catch(e){ try { raw = await fetchJSON(withShare('bank.json' + stamp)); used = '线上'; } catch(e2){ console.warn('线上题库读取失败', e2); } }
  }
  if (raw) {
    try {
      BANK = normalizeBank(raw);
      save(LS.bankCache, raw);
      sourceLabel = used;
    } catch(e){ console.warn('题库格式错误，改用缓存', e); }
  }
  if (!BANK) {
    const cache = localStorage.getItem(LS.bankCache);
    if (cache) { try { BANK = normalizeBank(JSON.parse(cache)); sourceLabel = '本机缓存（离线）'; } catch(e){} }
  }
  if (!BANK) { BANK = normalizeBank(FALLBACK_BANK); sourceLabel = '离线应急词库'; }

  if (manual) toast(`已拉取最新题库 · ${fmtTime(BANK.updatedAt)} · ${BANK.langs.reduce((n,l)=>n+l.groups.length,0)} 组`);
  updateBankInfo();
}

function updateBankInfo(){
  const total = BANK.langs.reduce((n,l) => n + l.groups.reduce((m,g) => m + g.items.length, 0), 0);
  $('mUpdated').textContent = fmtTime(BANK.updatedAt);
  $('footerVersion').textContent = `题库 v${BANK.version} · ${fmtTime(BANK.updatedAt)} · 来源：${sourceLabel} · 共 ${BANK.langs.length} 种语言 / ${total} 条`;
  const badge = $('bankSource');
  badge.textContent = sourceLabel;
  badge.className = 'badge' + (/缓存|应急/.test(sourceLabel) ? ' warn' : '');
  $('setBankUrl').value = settings.bankUrl || '';
}

function exportableBank(){
  const langs = {};
  BANK.langs.forEach(l => {
    langs[l.key] = {
      label: l.label, icon: l.icon, desc: l.desc,
      groups: l.groups.map(g => ({ name: g.name, items: g.items.map(i => [i.code, i.cn, i.ex]) }))
    };
  });
  return { version: BANK.version, updatedAt: BANK.updatedAt, langs };
}

/* ---------- 设置 ---------- */
function applySettings(){
  document.body.classList.toggle('dark', !!settings.dark);
  $('btnTheme').textContent = settings.dark ? '浅色' : '深色';
  document.documentElement.style.setProperty('--code-size', (settings.font || 24) + 'px');
  $('setRound').value = String(settings.round);
  $('setStrict').checked = !!settings.strict;
  $('setSkipCJK').checked = !!settings.skipCJK;
  $('setSound').checked = !!settings.sound;
  $('setSymbar').checked = !!settings.symbar;
  $('setHighlight').checked = !!settings.highlight;
  $('setKeyboard').checked = !!settings.keyboard;
  $('setAutoRedo').checked = !!settings.autoRedo;
  $('setImeRealtime').checked = settings.imeRealtime !== false;
  $('setWordMode').checked = settings.wordMode !== false;
  $('setFont').value = String(settings.font);
  $('setBankUrl').value = settings.bankUrl || '';
  const kbOp = (settings.kbOpacity == null) ? 100 : Number(settings.kbOpacity);
  $('setKbOpacity').value = String(kbOp);
  $('kbOpacityVal').textContent = kbOp + '%';
  $('kbmap').style.opacity = String(kbOp / 100);
  $('symbar').classList.toggle('show', !!settings.symbar && practicing);
  $('kbmap').classList.toggle('show', !!settings.keyboard && practicing);
  $('code').classList.toggle('no-hl', !settings.highlight);
  $('langTabs').querySelectorAll('button').forEach(b => b.disabled = practicing);
  syncKbDock();
}
function updateSetting(k, v){ settings[k] = v; save(LS.settings, settings); applySettings(); }

/* ---------- 语言 / 菜单 ---------- */
function curLang(){
  return BANK.langs.find(l => l.key === langKey) || BANK.langs[0];
}
function renderLangTabs(){
  const box = $('langTabs'); box.innerHTML = '';
  BANK.langs.forEach(l => {
    const b = document.createElement('button');
    b.textContent = l.label;
    b.className = l.key === langKey ? 'active' : '';
    b.onclick = () => setLang(l.key);
    box.appendChild(b);
  });
}
function setLang(k){
  langKey = k; localStorage.setItem(LS.lang, k);
  const L = curLang();
  const logo = $('logo'); if (logo && L) logo.textContent = L.icon;   // 图标跟当前语言走
  renderLangTabs(); renderMenu(); applySettings();
}

// 完成标记按「语言_分组名」存储，分组增删/重排不会再错位。
// 旧版是「语言_分组序号」，首次读取时按 DONE_MIGRATION 一次性迁移并清理旧键。
function doneKey(){ return 'ct_done_v3_' + (currentUser || 'guest'); }
function getDone(){
  let s;
  try { const v = JSON.parse(localStorage.getItem(doneKey()) || '[]'); s = new Set(Array.isArray(v) ? v : []); }
  catch(e){ s = new Set(); }
  const legacyKey = LS.done + '_' + (currentUser || 'guest');
  let legacy = null;
  try { legacy = localStorage.getItem(legacyKey); } catch(e){}
  if (legacy) {
    try {
      const arr = JSON.parse(legacy) || [];
      if (Array.isArray(arr)) for (const k of arr) {
        if (typeof k !== 'string') continue;
        const m = /^([a-z]+)_(\d+)$/.exec(k);
        if (m) {
          // 旧序号能映射才保留；映射不到的旧分组直接丢弃，避免留下永不匹配的脏键
          if (DONE_MIGRATION[m[1]] && DONE_MIGRATION[m[1]][m[2]])
            s.add(m[1] + '_' + DONE_MIGRATION[m[1]][m[2]]);
        } else s.add(k);
      }
    } catch(e){}
    try { localStorage.removeItem(legacyKey); save(doneKey(), [...s]); } catch(e){}
  }
  return s;
}
function markDone(key){ const s = getDone(); s.add(key); save(doneKey(), [...s]); }

function renderMenu(){
  const L = curLang();
  if (!L) return;
  const groups = L.groups;
  const total = groups.reduce((n,g) => n + g.items.length, 0);
  const done = getDone();
  $('mGroups').textContent = groups.length;
  $('mWords').textContent = total;
  $('mDone').textContent = groups.filter(g => done.has(L.key + '_' + g.name)).length + ' / ' + groups.length;
  $('mRound').textContent = settings.round >= 999 ? '全部' : '随机 ' + settings.round + ' 项';

  const kw = $('search').value.trim().toLowerCase();
  const list = $('modList'); list.innerHTML = '';
  let shown = 0;
  groups.forEach((g, i) => {
    if (kw && g.name.toLowerCase().indexOf(kw) < 0) return;
    shown++;
    const isDone = done.has(L.key + '_' + g.name);
    const cjk = g.items.filter(x => x.cjk).length;
    const card = document.createElement('div');
    card.className = 'mod';
    const row1 = document.createElement('div'); row1.className = 'row1';
    const gEl = document.createElement('span'); gEl.className = 'g'; gEl.textContent = 'GROUP ' + String(i+1).padStart(2,'0');
    const ico = document.createElement('span'); ico.className = 'ico'; ico.textContent = L.icon;
    row1.append(gEl, ico);
    const h3 = document.createElement('h3'); h3.textContent = g.name;
    const meta = document.createElement('div'); meta.className = 'meta';
    meta.textContent = `${g.items.length} 词条 · ${settings.round >= 999 ? '全部' : '随机 ' + Math.min(settings.round, g.items.length)} 项`;
    const tags = document.createElement('div'); tags.className = 'tags';
    const t1 = document.createElement('span'); t1.className = 'tag' + (isDone ? ' done' : ''); t1.textContent = isDone ? '已完成' : '未挑战';
    tags.appendChild(t1);
    if (cjk) { const t2 = document.createElement('span'); t2.className = 'tag cjk'; t2.textContent = `含中文 ${cjk}`; tags.appendChild(t2); }
    card.append(row1, h3, meta, tags);
    card.onclick = () => startModule(i);
    list.appendChild(card);
  });
  if (!shown) { const e = document.createElement('div'); e.className = 'empty'; e.textContent = '没有匹配的分组，换个关键词试试'; list.appendChild(e); }
  renderHistory();
  renderSrsCard();
}

function renderHistory(){
  let h = [];
  try { h = JSON.parse(localStorage.getItem(LS.history) || '[]'); if (!Array.isArray(h)) h = []; } catch(e){ h = []; }
  const box = $('history'); box.innerHTML = '';
  if (!h.length) { box.innerHTML = '<div class="hist">还没有练习记录，选一个分组开始吧</div>'; return; }
  const best = Math.max(...h.map(x => x.wpm || 0));
  const items = [
    ['最佳速度', best + ' WPM', '本机纪录'],
    ...h.slice(0,4).map(x => [(x.wpm||0) + ' WPM', (x.acc||0) + '% 准确率', (x.group||'') + ' · ' + (x.date||'')])
  ];
  items.forEach(([a,b,c]) => {
    const d = document.createElement('div'); d.className = 'hist';
    const bold = document.createElement('b'); bold.textContent = a;
    const span = document.createElement('span'); span.textContent = c;
    d.append(bold, document.createTextNode(b), document.createElement('br'), span);
    box.appendChild(d);
  });
}

/* ---------- 练习流程 ---------- */
function startModule(i){
  const g = curLang().groups[i];
  if (!g) return;
  let pool = settings.skipCJK ? g.items.filter(x => !x.cjk) : g.items.slice();
  if (!pool.length) pool = g.items.slice();
  queue = shuffle(pool);
  // 完整程序很长，一轮自动最多 3 条，避免一次打十几分钟（仍可在设置里改每轮题量）
  const isProgram = /完整程序/.test(g.name);
  const limit = isProgram ? Math.min(settings.round, 3) : settings.round;
  queue = (settings.round >= 999 && !isProgram) ? queue : queue.slice(0, Math.min(limit, queue.length));
  curMod = i; itemIdx = 0;
  mode = 'normal';
  roundMeta = { title: g.name, lang: curLang().key, mod: g.name };
  correctKeys = 0; mistakes = 0; roundWrong = {}; roundWrongItems = {}; roundRedone = false;
  startTs = null; clearInterval(timerId);
  stopChallengeTimers();
  $('chTimer').style.display = 'none';
  setPracticing(true);
  $('menu').style.display = 'none';
  $('practice').style.display = 'block';
  applySettings();
  loadItem();
  focusGhost();
}

function loadItem(){
  curItem = queue[itemIdx];
  charIdx = 0; itemMistakes = 0;
  $('pName').innerHTML = esc(roundMeta.title) + '<small>第 ' + (itemIdx+1) + ' / ' + queue.length + ' 项</small>';
  $('cnText').textContent = curItem.cn;
  $('exText').textContent = curItem.ex;
  renderCode();
  charIdx = skipSpaces(curItem.code, 0);
  applyCursor(); updateNextChar(); updateStats(); updateProgress();
}

// 只有左右都是单词字符的空格必须敲；标点旁、行首缩进的空格自动跳过
function skipSpaces(s, i){
  while (i < s.length && s[i] === ' ') {
    const L = i > 0 ? s[i-1] : '';
    const R = i < s.length - 1 ? s[i+1] : '';
    if (/[A-Za-z0-9_]/.test(L) && /[A-Za-z0-9_]/.test(R)) break;
    i++;
  }
  return i;
}

/* ---------- 按单词重打 / 回退 ----------
 * 用「连续非空白字符」切词，空格和换行是词边界。行首缩进会被 skipSpaces
 * 自动跳过，所以每个词首都是学生真正要敲的第一个字符。
 * 打错时只退回当前单词开头重打，退格一次退一个单词，而不是整条代码重来。 */
function wordModeOn(){ return settings.wordMode !== false && !settings.strict; }
function wordSpans(s){
  const out = []; const re = /\S+/g; let m;
  while ((m = re.exec(s))) out.push({ start: m.index, end: m.index + m[0].length });
  return out;
}
function wordStartAt(s, pos){
  const ws = wordSpans(s);
  let last = 0;
  for (const w of ws) {
    if (w.start > pos) break;
    last = w.start;
    if (pos < w.end) return w.start;   // pos 在某个词内部
  }
  return last;                          // pos 落在词之间的空白：重打刚敲完的词
}
function prevWordStart(s, pos){
  const ws = wordSpans(s);
  let cur = 0;
  for (const w of ws) { if (w.start > pos) break; cur = w.start; }
  const start = skipSpaces(s, cur);
  if (start < pos) return start;        // 在词中间 → 退回本词开头
  const i = ws.findIndex(w => w.start === cur);
  return i > 0 ? skipSpaces(s, ws[i-1].start) : 0;   // 已在词首 → 再退一个词
}

function renderCode(){
  const box = $('code'); box.innerHTML = ''; lineEls = [];
  lastCenterRow = -1; box.scrollTop = 0;
  box.classList.toggle('no-hl', !settings.highlight);
  // 逐字符 token 类别；review 模式下每条词条自带语言
  const lang = (curItem && curItem.lang) || roundMeta.lang || langKey;
  const toks = (window.CT && settings.highlight) ? CT.tokenize(curItem.code, lang) : null;
  const lines = curItem.code.split('\n');
  // 长代码：上下各留半屏空白，首行/末行也能滚到代码区垂直中部
  box.classList.toggle('padded', lines.length >= 6);
  const padTop = document.createElement('div'); padTop.className = 'code-pad';
  box.appendChild(padTop);
  let flat = 0;
  lines.forEach((line, r) => {
    const ln = document.createElement('div'); ln.className = 'ln';
    const spans = [];
    for (const ch of line) {
      const sp = document.createElement('span');
      const t = toks ? (toks[flat++] || '') : '';
      sp.className = 'pend' + (t ? ' t-' + t : '');
      sp.textContent = ch === ' ' ? '\u00A0' : ch;
      ln.appendChild(sp); spans.push(sp);
    }
    flat++;   // 跳过 token 数组里对应 \n 的位置
    if (r < lines.length - 1) {
      const sp = document.createElement('span');
      sp.className = 'pend newline'; sp.textContent = '⏎';
      ln.appendChild(sp); spans.push(sp);   // 对应 locate 的 c = line.length
    }
    box.appendChild(ln); lineEls.push(spans);
  });
  const padBottom = document.createElement('div'); padBottom.className = 'code-pad';
  box.appendChild(padBottom);
  // 布局稳定后按代码区实际高度重算留白，并重新把当前行居中
  requestAnimationFrame(() => { syncCodePadding(); lastCenterRow = -1; applyCursor(); });
}

function locate(pos){
  const lines = curItem.code.split('\n');
  let p = pos;
  for (let r = 0; r < lines.length; r++) {
    const len = lines[r].length;
    if (p <= len) return { r, c: p };
    p -= len + 1;
  }
  return { r: lines.length-1, c: lines[lines.length-1].length };
}
/* 长代码：当前待敲行滚动到代码区垂直中部；同一行内逐字敲击不重复滚动 */
function ensureVisible(sp, row){
  const box = $('code');
  if (!box || box.scrollHeight <= box.clientHeight + 2) return;
  if (row === lastCenterRow) return;
  lastCenterRow = row;
  const ln = lineEls[row] && lineEls[row][0] && lineEls[row][0].parentElement;
  if (!ln) return;
  const target = ln.offsetTop - (box.clientHeight - ln.offsetHeight) / 2;
  const maxTop = Math.max(0, box.scrollHeight - box.clientHeight);
  const top = Math.max(0, Math.min(maxTop, target));
  if (Math.abs(box.scrollTop - top) < 8) return;
  if (box.scrollTo) box.scrollTo({ top, behavior: 'smooth' });
  else box.scrollTop = top;
}
function applyCursor(){
  const flat = curItem.code;
  // 只增删状态类，保留 t-kw / t-str … 语法高亮类
  lineEls.flat().forEach(sp => { sp.classList.remove('done', 'cur', 'miss'); sp.classList.add('pend'); });
  for (let i = 0; i < charIdx; i++) {
    const { r, c } = locate(i);
    const sp = lineEls[r] && lineEls[r][c];
    if (sp) { sp.classList.remove('pend'); sp.classList.add('done'); }
  }
  if (charIdx < flat.length) {
    const { r, c } = locate(charIdx);
    const sp = lineEls[r] && lineEls[r][c];
    if (sp) { sp.classList.remove('pend'); sp.classList.add('cur'); ensureVisible(sp, r); }
  }
}
function flashWrong(){
  if (charIdx >= curItem.code.length) return;
  const { r, c } = locate(charIdx);
  const sp = lineEls[r] && lineEls[r][c];
  if (!sp) return;
  sp.classList.add('miss');
  setTimeout(() => sp.classList.remove('miss'), 240);
}
function updateNextChar(){
  if (!curItem || charIdx >= curItem.code.length) {
    $('nextChar').textContent = '本条完成 ✓';
    if (kbMap) kbMap.clear();
    return;
  }
  const ch = curItem.code[charIdx];
  let show = ch;
  if (ch === ' ') show = '空格';
  else if (ch === '\n') show = '⏎ 回车';
  else show = ch;
  $('nextChar').innerHTML = '下一个要敲：<b>' + esc(show) + '</b>　（手机上可用下方符号条）';
  if (kbMap) kbMap.highlight(ch);      // 指法键盘图：高亮下一个键与手指
}
function updateProgress(){
  const doneRatio = queue.length ? (itemIdx / queue.length) : 0;
  const inRatio = curItem ? (charIdx / Math.max(1, curItem.code.length)) : 0;
  const pct = Math.min(100, Math.round((doneRatio + inRatio / queue.length) * 100));
  $('progressBar').style.width = pct + '%';
}

function feedChar(ch){
  if (!practicing || !curItem) return;
  if (ch == null || ch === '') return;
  if (ch === '\r') ch = '\n';
  const s = curItem.code;
  if (charIdx >= s.length) return;
  // 宽容处理：用户照着屏幕把「本应自动跳过」的空格也敲了出来，不判错、不计分
  if (ch === ' ' && s[charIdx] !== ' ') {
    let j = charIdx - 1;
    while (j >= 0 && s[j] === ' ') j--;
    if (j < charIdx - 1) return;
  }
  if (!startTs) {
    startTs = Date.now();
    timerId = setInterval(() => { updateTimer(); updateStats(); }, 500);
  }
  if (ch === s[charIdx]) {
    correctKeys++; charIdx++;
    charIdx = skipSpaces(s, charIdx);
    applyCursor(); updateNextChar(); updateStats(); updateProgress(); playTick(true);
    if (charIdx >= s.length) {
      clearInterval(timerId);
      playFinish();
      recordRight(curItem, itemMistakes);
      setTimeout(nextItem, 280);
    }
  } else {
    mistakes++; itemMistakes++;
    const key = curItem.code.slice(0, 40);
    roundWrong[key] = (roundWrong[key] || 0) + 1;
    roundWrongItems[curItem.code] = curItem;
    recordWrong(curItem);
    playTick(false);
    if (settings.strict) {
      charIdx = skipSpaces(s, 0);                       // 旧行为：整条重来
    } else if (wordModeOn()) {
      const back = wordStartAt(s, charIdx);            // 只退回当前单词开头
      if (back < charIdx) {
        charIdx = skipSpaces(s, back);
        const w = wordSpans(s).find(x => x.start === back);
        if (w) toast('重打这个词：' + s.slice(w.start, w.end));
      }
    }
    applyCursor(); flashWrong(); updateNextChar(); updateStats();
  }
}
function backspace(){
  if (!practicing || !curItem || settings.strict || charIdx <= 0) return;
  // 单词模式：一次退一个单词（在词中间退回本词开头，已在词首则再退上一个词）
  charIdx = wordModeOn() ? prevWordStart(curItem.code, charIdx) : Math.max(0, charIdx - 1);
  applyCursor(); updateNextChar(); updateProgress();
}
function skipItem(){
  if (!practicing) return;
  toast('已跳过本条');
  nextItem();
}
/* 输入音效：正确键清脆短音、打错低沉双音、完成一条上行双音；Web Audio 合成，无需联网 */
function tone(freq, dur, type, vol, delay){
  if (!audioCtx) return;
  const t0 = audioCtx.currentTime + (delay || 0);
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = type || 'triangle';
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.06, t0 + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
function audioReady(){
  if (!settings.sound) return false;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return true;
  } catch(e){ return false; }
}
function playTick(ok){
  if (!audioReady()) return;
  if (ok) tone(880, 0.045, 'triangle', 0.055);
  else { tone(220, 0.085, 'sawtooth', 0.04); tone(165, 0.085, 'sawtooth', 0.028, 0.06); }
}
function playFinish(){
  if (!audioReady()) return;
  tone(659, 0.09, 'triangle', 0.05);
  tone(880, 0.13, 'triangle', 0.05, 0.09);
}

function updateTimer(){
  if (startTs) $('pTime').textContent = Math.floor((Date.now() - startTs)/1000) + 's';
}
function updateStats(){
  const sec = startTs ? (Date.now() - startTs) / 1000 : 0;
  const cpm = sec >= 1 ? Math.round(correctKeys / sec * 60) : 0;   // 前 1 秒不计速，避免瞬时峰值
  $('pWpm').textContent = Math.round(cpm / 5);
  $('pCpm').textContent = cpm;
  const total = correctKeys + mistakes;
  $('pAcc').textContent = (total ? Math.round(correctKeys/total*100) : 100) + '%';
  if (startTs) $('pTime').textContent = Math.floor(sec) + 's';
}

function nextItem(){
  itemIdx++;
  updateProgress();
  if (itemIdx >= queue.length) {
    // 联机挑战：题目循环，直到倒计时结束
    if (mode === 'challenge') {
      if (!challenge || Date.now() >= challenge.deadline) { finishRound(); return; }
      queue = shuffle(queue); itemIdx = 0; loadItem(); return;
    }
    // 普通练习：本轮错题自动再练一遍（只触发一次，避免无限循环）
    const wrongList = Object.values(roundWrongItems);
    if (mode === 'normal' && settings.autoRedo && !roundRedone && wrongList.length) {
      roundRedone = true;
      queue = queue.concat(shuffle(wrongList));
      toast('错题自动再练一遍 · ' + wrongList.length + ' 条');
      loadItem(); return;
    }
    finishRound(); return;
  }
  loadItem();
}
function finishRound(){
  clearInterval(timerId); setPracticing(false);
  stopChallengeTimers();
  document.body.classList.remove('kbd-open');
  $('chTimer').style.display = 'none';
  const isCh = mode === 'challenge';
  const sec = startTs ? Math.max(1, Math.round((Date.now() - startTs)/1000)) : 1;
  const cpm = Math.round(correctKeys / sec * 60);
  const wpm = Math.round(cpm / 5);
  const total = correctKeys + mistakes;
  const acc = total ? Math.round(correctKeys/total*100) : 100;
  $('rWpm').textContent = wpm; $('rAcc').textContent = acc + '%'; $('rTime').textContent = sec + 's';
  $('rTitle').textContent = isCh ? '挑战结束' : (mode === 'review' ? '复习完成' : '本轮完成');
  $('rSub').textContent = isCh ? '成绩已同步到房间排行榜，和同学再比一局？'
    : (mode === 'review' ? '答对的错题已拉长复习间隔，答错的继续留在待复习列表'
    : (acc >= 95 ? '准确率很棒，可以试着提速了！' : '先求准，再求快，多练几轮就顺了'));
  $('btnRetry').textContent = isCh ? '再来一局' : (mode === 'review' ? '继续复习' : '再来一轮');

  const wl = Object.entries(roundWrong).sort((a,b) => b[1]-a[1]).slice(0,3);
  const box = $('rWrong');
  if (wl.length) {
    box.style.display = 'block';
    box.innerHTML = '<b>本轮最容易敲错的词条（已自动加入复习计划）</b>' +
      wl.map(([k,n]) => '<div>· <code>' + esc(k) + '</code> × ' + n + '</div>').join('');
  } else box.style.display = 'none';

  const board = $('rBoard');
  if (isCh && challenge) {
    reportChallenge(true, wpm, acc);
    board.style.display = 'block';
    renderBoard(board, challenge.lastRoom, challenge.name);
    pollChallenge().then(room => { if (room && challenge) renderBoard(board, room, challenge.name); });
  } else board.style.display = 'none';

  if (mode === 'normal') markDone(roundMeta.lang + '_' + roundMeta.mod);
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem(LS.history) || '[]'); if (!Array.isArray(hist)) hist = []; } catch(e){ hist = []; }
  const d = new Date(), p = x => String(x).padStart(2,'0');
  hist.unshift({ wpm, acc, sec, group: roundMeta.title, lang: langLabel(roundMeta.lang),
                 date: `${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}` });
  save(LS.history, hist.slice(0, 40));
  renderSrsCard();
  $('overlay').classList.add('show');
}
function retry(){
  $('overlay').classList.remove('show');
  if (mode === 'review') startReview();
  else if (mode === 'challenge') startChallengeRound();
  else startModule(curMod);
}
function exitPractice(){
  clearInterval(timerId); setPracticing(false);
  stopChallengeTimers();
  $('chTimer').style.display = 'none';
  document.body.classList.remove('kbd-open');
  const kh = $('kbdHint');
  if (kh) { kh.classList.remove('on'); kh.textContent = '点这里唤起键盘 · 然后照着上面敲'; }
  $('overlay').classList.remove('show');
  $('practice').style.display = 'none';
  $('menu').style.display = 'block';
  applySettings(); renderMenu(); renderSrsCard();
}
function focusGhost(){
  if (!practicing) return;
  const g = $('ghost');
  try { g.focus({ preventScroll: true }); } catch(e){ try { g.focus(); } catch(e2){} }
  const hint = $('kbdHint');
  if (hint) { hint.classList.add('on'); hint.textContent = '键盘已就绪 · 照着上面的代码敲'; }
}

/* ---------- 输入层 ----------
 * 透明输入框覆盖在代码区上，必须是「真实可聚焦、可点击」的元素，
 * iOS / 安卓输入法才愿意弹出软键盘（旧版 1x1 且 pointer-events:none，手机上完全没反应）。
 *
 * 手机英文输入法的「单词预测 / 候选预选框」会让输入进入 composition 状态。
 * 旧版在 input 事件里一遇到 composing 就直接 return，字符全被丢弃，
 * 只能等候选词上屏才一次性出现 —— 也就是「先弹预选框、没有实时反馈」。
 *
 * 现在 composition 期间也实时判定，但只喂「新增的字符」：
 *   - 用 InputEvent.data 做差分（Gboard 之类组合时给的是整个单词：p -> pr -> pri）
 *   - 只接受纯 ASCII 可打印字符，中文拼音候选交给 compositionend
 *   - 每次处理完立即清空 value，打断输入法攒词，逼它逐字实时上屏
 *   - compositionend 只补「最终上屏文本比已喂过的多出的部分」，不重复、不丢字
 * 设置里可关掉「实时输入」回退到「等候选上屏」，兼容少数特殊输入法。
 * composing 带 3 秒超时复位，防止输入法异常时标志卡死导致后续按键全失效。
 */
let composing = false, composingTimer = null, keydownHandled = false;
let compPrev = '', compFed = '';      // 组合串快照 / 本次组合已实时喂过的字符

function onInsert(text){
  if (!text || !practicing) return;
  for (const c of [...text]) feedChar(c);
}
/* 允许换行/回车：多行完整程序要靠它们换行，不能被当成「中文候选」过滤掉 */
const ASCII_INPUT = /^[\x0A\x0D\x20-\x7E]+$/;
const realtimeIME = () => settings.imeRealtime !== false;

function bindInput(){
  const ghost = $('ghost');
  const armTimer = () => {
    clearTimeout(composingTimer);
    composingTimer = setTimeout(() => { composing = false; compPrev = ''; compFed = ''; }, 3000);
  };

  ghost.addEventListener('compositionstart', () => {
    composing = true; compPrev = ''; compFed = ''; ghost.value = ''; armTimer();
  });
  ghost.addEventListener('compositionupdate', armTimer);
  ghost.addEventListener('compositionend', e => {
    composing = false; clearTimeout(composingTimer);
    const final = (typeof e.data === 'string' && e.data) ? e.data : (ghost.value || '');
    ghost.value = '';
    keydownHandled = false;
    if (compFed) {
      // 已逐字实时喂过：只补末尾多出的部分（例如点候选词补了后缀）
      if (final.startsWith(compFed)) onInsert(final.slice(compFed.length));
    } else {
      // 没实时喂过（中文拼音 / 输入法只在结束时给数据）：喂上屏文本里的 ASCII 部分
      onInsert(final.replace(/[^\x0A\x0D\x20-\x7E]/g, ''));
    }
    compPrev = ''; compFed = '';
  });

  ghost.addEventListener('input', e => {
    if (keydownHandled) { keydownHandled = false; ghost.value = ''; return; }
    const v = ghost.value;
    ghost.value = '';                    // 立即清空，打断攒词预测，让输入法逐字上屏
    const d = (typeof e.data === 'string' && e.data) ? e.data : v;
    if (!d) return;
    if (composing && !realtimeIME()) return;      // 兼容模式：等候选上屏
    if (!ASCII_INPUT.test(d)) return;             // 中文拼音 / 全角字符：等上屏
    if (composing) {
      // 英文预测组合：data 常是「整个组合串」，差分成新增字符再喂
      let delta;
      if (compPrev && d.startsWith(compPrev)) delta = d.slice(compPrev.length);
      else if (compFed && d.startsWith(compFed)) delta = d.slice(compFed.length);
      else delta = d;
      compPrev = d;
      if (delta) { compFed += delta; onInsert(delta); }
    } else {
      onInsert(d);
    }
  });

  ghost.addEventListener('keydown', e => {
    if (!practicing) return;
    if (e.isComposing || composing || e.keyCode === 229) return;   // 229 = 输入法处理中
    if (e.key === 'Enter') { e.preventDefault(); ghost.value = ''; feedChar('\n'); return; }
    if (e.key === 'Tab') { e.preventDefault(); skipItem(); return; }
    if (e.key === 'Backspace') { e.preventDefault(); ghost.value = ''; backspace(); return; }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key && e.key.length === 1) {
      e.preventDefault();                 // 阻止默认插入，input 事件便不会重复喂字
      keydownHandled = true;
      setTimeout(() => { keydownHandled = false; }, 0);
      ghost.value = '';
      feedChar(e.key);
    }
  });

  // 点代码区 / 提示条：在用户手势的同步调用栈里聚焦，iOS 才会弹键盘
  $('stage').addEventListener('click', focusGhost);
  $('kbdHint').addEventListener('click', e => {
    e.preventDefault(); focusGhost(); toast('键盘已唤起，照着代码敲即可');
  });
  document.addEventListener('pointerdown', e => {
    if (!practicing) return;
    if ($('settingsOverlay').classList.contains('show') ||
        $('overlay').classList.contains('show') ||
        $('loginOverlay').classList.contains('show')) return;
    if (e.target === ghost) return;
    if (e.target.closest && e.target.closest('button, input, select, textarea, .kbmap-grip')) return;
    focusGhost();
  });

  // 软键盘弹出时收起次要区块，保证「代码 + 符号条」同时在首屏可见
  if (window.visualViewport) {
    const vv = window.visualViewport;
    const onVV = () => {
      const gap = Math.round(window.innerHeight - vv.height - vv.offsetTop);
      const open = practicing && gap > 130;
      document.body.classList.toggle('kbd-open', open);
      // 键盘弹出时把整页高度锁到「可视视口」，符号条才会贴在键盘上方，而不是被挡到键盘后面
      document.documentElement.style.setProperty('--vvh', open ? Math.round(vv.height) + 'px' : '');
      syncKbDock();
    };
    vv.addEventListener('resize', onVV);
    vv.addEventListener('scroll', onVV);
  }
}

/* 符号快捷条 */
const SYMS = [
  ['(', '('], [')', ')'], ['[', '['], [']', ']'], ['{', '{'], ['}', '}'],
  [';', ';'], [':', ':'], [',', ','], ['.', '.'], ['=', '='],
  ['+', '+'], ['-', '-'], ['*', '*'], ['/', '/'], ['%', '%'], ['<', '<'],
  ['>', '>'], ['#', '#'], ['"', '"'], ["'", "'"], ['_', '_'], ['&', '&'],
  ['|', '|'], ['!', '!'], ['\\', '\\'],
  [' ', '空格'], ['\n', '⏎ 回车'], ['skip', '跳过本条']
];
function buildSymKeys(){
  const box = $('symkeys'); box.innerHTML = '';
  SYMS.forEach(([ch, label]) => {
    const b = document.createElement('button');
    b.textContent = label;
    if (label.length > 2) b.classList.add('wide');
    b.addEventListener('pointerdown', e => {
      e.preventDefault();               // 保持软键盘不收起
      if (ch === 'skip') skipItem();
      else for (const c of [...ch]) feedChar(c);
      focusGhost();
    });
    box.appendChild(b);
  });
}

/* ============================================================
 * 错题库 · 间隔重复（Leitner 盒子）
 * level 0 = 立即复习，之后按 1/2/4/7/15/30 天递增；
 * 打错立即归零重新排队，完整答对一次才升级。
 * ============================================================ */
const SRS_INTERVALS = [0, 1, 2, 4, 7, 15, 30];
function loadSrs(){
  try { const o = JSON.parse(localStorage.getItem(LS.srs) || '{}'); return (o && typeof o === 'object' && !Array.isArray(o)) ? o : {}; }
  catch(e){ return {}; }
}
function saveSrs(o){ save(LS.srs, o); }
function srsLang(item){ return (item && item.lang) || roundMeta.lang || langKey; }
function recordWrong(item){
  if (!item) return;
  const s = loadSrs(), lang = srsLang(item), id = itemId(lang, item.code);
  const rec = s[id] || { lang, code: item.code, cn: item.cn || '', ex: item.ex || '', level: 0, due: 0, wrong: 0, right: 0, last: 0 };
  rec.wrong++; rec.level = 0; rec.due = 0; rec.last = Date.now();
  rec.cn = item.cn || rec.cn; rec.ex = item.ex || rec.ex;
  s[id] = rec; saveSrs(s);
}
function recordRight(item, mis){
  if (!item) return;
  const s = loadSrs(), id = itemId(srsLang(item), item.code);
  const rec = s[id];
  if (!rec) return;                        // 本来就没错过，不占用复习计划
  rec.right++; rec.last = Date.now();
  if (mis === 0) {
    rec.level = Math.min(SRS_INTERVALS.length - 1, (rec.level || 0) + 1);
    rec.due = Date.now() + SRS_INTERVALS[rec.level] * 86400000;
  } else { rec.level = 0; rec.due = 0; }
  saveSrs(s);
}
function srsDue(){
  const now = Date.now();
  return Object.values(loadSrs()).filter(r => (r.due || 0) <= now).sort((a, b) => (a.due || 0) - (b.due || 0));
}
function renderSrsCard(){
  const s = loadSrs(), due = srsDue(), total = Object.keys(s).length;
  const t = $('srsTitle'), d = $('srsDesc');
  if (!t || !d) return;
  t.textContent = '错题库 · ' + due.length + ' 条待复习';
  d.textContent = total
    ? `共收录 ${total} 条 · 完整答对一次，间隔按 1/2/4/7/15/30 天递增；打错立即重新排队`
    : '自动收集敲错的词条，按间隔重复安排复习：越容易错的越勤出现';
  $('srsCard').classList.toggle('due', due.length > 0);
  $('btnSrsStart').disabled = !due.length;
}
function startReview(){
  const due = srsDue();
  if (!due.length) { toast('暂时没有到期要复习的错题'); return; }
  queue = due.map(r => ({ code: r.code, cn: r.cn, ex: r.ex, lang: r.lang }));
  mode = 'review';
  roundMeta = { title: '错题库 · 间隔复习', lang: queue[0].lang || langKey, mod: -1 };
  itemIdx = 0; correctKeys = 0; mistakes = 0; roundWrong = {}; roundWrongItems = {}; roundRedone = true;
  startTs = null; clearInterval(timerId); stopChallengeTimers();
  $('chTimer').style.display = 'none';
  setPracticing(true);
  $('menu').style.display = 'none'; $('practice').style.display = 'block';
  applySettings(); loadItem(); focusGhost();
  toast('到期错题 ' + queue.length + ' 条，全部答对即可拉长复习间隔');
}
function exportSrs(){
  const arr = Object.values(loadSrs());
  if (!arr.length) { toast('错题库还是空的'); return; }
  downloadJSON('错题库-' + new Date().toISOString().slice(0, 10) + '.json', arr);
  toast('已导出 ' + arr.length + ' 条错题');
}

/* ============================================================
 * 联机限时挑战：创建/加入房间、倒计时、成绩上报、实时榜单
 * ============================================================ */
function chName(){
  const v = ($('chName').value.trim() || currentUser || '').slice(0, 12);
  if (v) return v;
  // 未填昵称时给每个浏览器一个稳定且互不冲突的名字，避免榜单互相覆盖
  let n = localStorage.getItem('ct_battle_name_v1');
  if (!n) { n = '同学' + Math.random().toString(36).slice(2, 5).toUpperCase(); localStorage.setItem('ct_battle_name_v1', n); }
  return n;
}
function chMsg(text, ok){
  const e = $('chMsg'); if (!e) return;
  e.textContent = text; e.className = 'ch-msg' + (ok ? ' ok' : '');
}
/* ---------- 对战比赛：一键建房 / 邀请链接 / 二维码 ---------- */
function battleInviteUrl(code){
  const u = new URL(location.href);
  const sc = u.searchParams.get('sharecode') || '';
  u.search = '';
  if (sc) u.searchParams.set('sharecode', sc);
  u.searchParams.set('room', code);
  return u.toString();
}
function showBattleInvite(code){
  const url = battleInviteUrl(code);
  const inp = $('chInvite'); if (inp) inp.value = url;
  const box = $('chQr'), img = $('chQrImg');
  if (!img || !box) return;
  box.classList.remove('qr-fail'); img.style.display = '';
  // 二维码由公共服务生成；加载失败时降级为「复制上方链接」
  img.onerror = () => { img.style.display = 'none'; box.classList.add('qr-fail'); };
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=' + encodeURIComponent(url);
}
async function copyBattleInvite(){
  if (!challenge) return;
  const url = battleInviteUrl(challenge.code);
  try { await navigator.clipboard.writeText(url); toast('邀请链接已复制，发给同学即可'); }
  catch(e){
    const i = $('chInvite'); if (i) { i.focus(); i.select(); try { document.execCommand('copy'); } catch(_){} }
    toast('邀请链接已选中，请手动复制');
  }
}
async function quickCreateBattle(){
  if (practicing) return;
  fillChLang();
  if (!$('chName').value && !currentUser) currentUser = chName();
  $('loginOverlay').classList.remove('show');
  $('challengeOverlay').classList.add('show');
  chMsg('正在创建对战房间…', true);
  try {
    const room = await chApi('create', {
      duration: parseInt($('chDur').value, 10) || 120,
      count: parseInt($('chCount').value, 10) || 15,
      lang: $('chLang').value || (BANK && BANK.langs[0] ? BANK.langs[0].key : 'cpp')
    });
    enterLobby(room, true);
    try { await navigator.clipboard.writeText(battleInviteUrl(room.code)); } catch(e){}
  } catch(e){
    chMsg('创建失败：' + e.message);
    $('chSetup').style.display = 'block'; $('chLobby').style.display = 'none';
  }
}
async function autoJoinBattle(code){
  if (practicing) return;
  fillChLang();
  if (!$('chName').value && !currentUser) currentUser = chName();
  $('loginOverlay').classList.remove('show');
  $('challengeOverlay').classList.add('show');
  $('chCode').value = code;
  await joinChallenge();
}
function fillChLang(){
  const sel = $('chLang');
  if (!sel || !BANK) return;
  const keep = sel.value;
  sel.innerHTML = '';
  BANK.langs.forEach(l => {
    const o = document.createElement('option'); o.value = l.key; o.textContent = l.label; sel.appendChild(o);
  });
  sel.value = (keep && BANK.langs.some(l => l.key === keep)) ? keep : BANK.langs[0].key;
}
function decodeItems(b64, lang){
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
  const arr = JSON.parse(new TextDecoder().decode(bytes));
  return arr.map(x => ({ code: String(x[0]), cn: String(x[1] || ''), ex: String(x[2] || ''), lang }));
}
async function chApi(action, extra){
  const name = (challenge && challenge.name) || chName();
  const body = Object.assign({ action, name }, extra || {});
  const r = await fetch(withShare('/api/challenge'), {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    cache: 'no-store', body: JSON.stringify(body)
  });
  const j = await r.json();
  if (!r.ok || j.ok === false) throw new Error(j.error || ('HTTP ' + r.status));
  return j.room;
}
function renderBoard(container, room, me){
  if (!container) return;
  const players = (room && room.players) || [];
  if (!players.length) { container.innerHTML = '<div class="board-empty">还没有成绩，开赛后这里会实时更新</div>'; return; }
  let html = '<div class="ch-row head"><span>#</span><span>昵称</span><span style="text-align:right">WPM</span><span style="text-align:right">准确率</span><span>状态</span></div>';
  players.forEach((p, i) => {
    html += '<div class="ch-row' + (p.name === me ? ' me' : '') + '">' +
      '<span class="rk">' + (i + 1) + '</span>' +
      '<span class="nm">' + esc(p.name) + '</span>' +
      '<span class="w">' + esc(String(p.wpm)) + '</span>' +
      '<span class="w">' + esc(String(p.acc)) + '%</span>' +
      '<span class="fin">' + (p.finished ? '已完成' : '进行中') + '</span></div>';
  });
  container.innerHTML = html;
}
function enterLobby(room, created){
  challenge = {
    code: room.code, name: chName(), duration: room.duration, lang: room.lang,
    items: decodeItems(room.itemsB64, room.lang), lastRoom: room, deadline: 0
  };
  $('chSetup').style.display = 'none';
  $('chLobby').style.display = 'block';
  $('chRoomCode').textContent = room.code;
  $('chRoomInfo').textContent = `语言 ${langLabel(room.lang)} · ${room.count} 条题 · 限时 ${room.duration} 秒 · 当前 ${room.playerCount} 人`;
  renderBoard($('chBoard'), room, challenge.name);
  chMsg(created ? '房间已创建，邀请链接已自动复制' : '已加入房间，点「开始挑战」即可', true);
  showBattleInvite(room.code);
  startChallengePolling();
}
async function createChallenge(){
  chMsg('正在创建房间…', true);
  try {
    const room = await chApi('create', {
      duration: parseInt($('chDur').value, 10),
      count: parseInt($('chCount').value, 10),
      lang: $('chLang').value
    });
    enterLobby(room, true);
  } catch(e){ chMsg('创建失败：' + e.message); }
}
async function joinChallenge(){
  const code = $('chCode').value.trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(code)) { chMsg('请输入 6 位房间码'); return; }
  chMsg('正在加入房间…', true);
  try { const room = await chApi('join', { code }); enterLobby(room, false); }
  catch(e){ chMsg('加入失败：' + e.message); }
}
async function pollChallenge(){
  if (!challenge) return null;
  try {
    const r = await fetch(withShare('/api/challenge?code=' + encodeURIComponent(challenge.code)), { cache: 'no-store' });
    const j = await r.json();
    if (!r.ok || j.ok === false) return null;
    challenge.lastRoom = j.room;
    renderBoard($('chBoard'), j.room, challenge.name);
    if ($('overlay').classList.contains('show')) renderBoard($('rBoard'), j.room, challenge.name);
    return j.room;
  } catch(e){ return null; }
}
function startChallengePolling(){
  if (chPollId) clearInterval(chPollId);
  chPollId = setInterval(pollChallenge, 2000);
}
async function reportChallenge(finished, wpm, acc){
  if (!challenge) return;
  const sec = startTs ? Math.max(1, (Date.now() - startTs) / 1000) : 1;
  const w = (wpm != null) ? wpm : Math.round(correctKeys / sec * 12);
  const total = correctKeys + mistakes;
  const a = (acc != null) ? acc : (total ? Math.round(correctKeys / total * 100) : 100);
  try {
    const room = await chApi('report', {
      code: challenge.code, correct: correctKeys, mistakes, done: itemIdx,
      wpm: w, acc: a, finished: !!finished
    });
    challenge.lastRoom = room;
  } catch(e){ /* 网络抖动不影响本地练习 */ }
}
function startChallengeRound(){
  if (!challenge) return;
  stopChallengeTimers();
  queue = shuffle(challenge.items);
  mode = 'challenge';
  roundMeta = { title: '联机挑战 · 房间 ' + challenge.code, lang: challenge.lang, mod: -1 };
  itemIdx = 0; correctKeys = 0; mistakes = 0; roundWrong = {}; roundWrongItems = {}; roundRedone = true;
  startTs = null; clearInterval(timerId);
  challenge.deadline = Date.now() + challenge.duration * 1000;
  setPracticing(true);
  $('menu').style.display = 'none'; $('practice').style.display = 'block';
  $('challengeOverlay').classList.remove('show');
  $('chTimer').style.display = 'inline';
  applySettings(); loadItem(); focusGhost();
  chTimerId = setInterval(tickChallenge, 200);
  chReportId = setInterval(() => reportChallenge(false), 2500);
  startChallengePolling();
  tickChallenge();
}
function tickChallenge(){
  if (!practicing || mode !== 'challenge' || !challenge) return;
  const left = Math.max(0, Math.ceil((challenge.deadline - Date.now()) / 1000));
  $('chLeft').textContent = left + 's';
  $('chTimer').classList.toggle('urgent', left <= 10);
  if (left <= 0) finishRound();
}
function stopChallengeTimers(){
  if (chTimerId) { clearInterval(chTimerId); chTimerId = null; }
  if (chReportId) { clearInterval(chReportId); chReportId = null; }
  if (chPollId) { clearInterval(chPollId); chPollId = null; }
}
function leaveChallenge(){
  stopChallengeTimers(); challenge = null;
  $('chLobby').style.display = 'none'; $('chSetup').style.display = 'block';
  chMsg('已退出房间');
}
function openChallenge(){
  if (practicing) return;
  fillChLang();
  if (!$('chName').value) $('chName').value = currentUser || '';
  if (challenge) {
    $('chSetup').style.display = 'none'; $('chLobby').style.display = 'block';
    $('chRoomCode').textContent = challenge.code;
    renderBoard($('chBoard'), challenge.lastRoom, challenge.name);
    startChallengePolling(); pollChallenge();
  } else {
    $('chSetup').style.display = 'block'; $('chLobby').style.display = 'none';
  }
  $('challengeOverlay').classList.add('show');
}

/* ---------- 指法键盘图 ---------- */
/* 底部浮层占位：让 .wrap 留出与浮窗等高的空白，长代码不被遮挡 */
function syncKbDock(){
  document.body.classList.toggle('practice-fixed', !!practicing);
  const el = $('kbmap'); if (!el) return;
  const visible = el.classList.contains('show') &&
                  !document.body.classList.contains('kbd-open') &&
                  !document.body.classList.contains('settings-open');
  document.body.classList.toggle('kbmap-dock', visible);
  document.documentElement.style.setProperty('--kb-h', visible ? el.offsetHeight + 'px' : '0px');
  fitKbScale();
  syncCodePadding();
}
/* 上下留白 = 代码区半高，保证首行/末行也能滚到正中间 */
function syncCodePadding(){
  const box = $('code');
  if (!box || !box.classList.contains('padded') || !box.clientHeight) return;
  const h = Math.max(24, Math.round(box.clientHeight / 2));
  if (box.style.getPropertyValue('--code-pad') === h + 'px') return;
  box.style.setProperty('--code-pad', h + 'px');
  lastCenterRow = -1;
  if (practicing && curItem) applyCursor();
}
/* 键盘图整体等比缩放：浮窗变高变矮时 5 行键始终全部可见，按键长宽比不变 */
function fitKbScale(){
  const body = $('kbBody'); if (!body || !body.clientHeight) return;
  const inner = body.querySelector('.kb-scale'); if (!inner) return;
  if ('zoom' in inner.style) inner.style.zoom = '1';
  else inner.style.transform = 'none';
  const cw = inner.scrollWidth, ch = inner.scrollHeight;
  const aw = body.clientWidth, ah = body.clientHeight;
  if (!cw || !ch || !ah) return;
  const s = Math.max(0.42, Math.min(1.5, aw / cw, ah / ch));
  if ('zoom' in inner.style) inner.style.zoom = String(s);
  else inner.style.transform = 'scale(' + s + ')';
}

/* 拖动把手：上下拖动调整浮窗高度，写入本地偏好；双击恢复默认 */
function applyKbHeight(h){
  const el = $('kbmap'); if (!el) return;
  el.style.height = h > 0 ? h + 'px' : '';
  syncKbDock();
}
function initKbResize(){
  const grip = $('kbGrip'), el = $('kbmap');
  if (!grip || !el) return;
  kbUserHeight = parseInt(localStorage.getItem(LS.kbHeight) || '0', 10) || 0;
  if (kbUserHeight) applyKbHeight(kbUserHeight);
  let dragging = false, startY = 0, startH = 0;
  const minH = 140, maxH = () => Math.max(minH + 40, Math.round(window.innerHeight * 0.7));
  grip.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();   // 不抢打字输入焦点
    if (!kbExpanded) toggleKbMap(true);
    dragging = true; startY = e.clientY; startH = el.offsetHeight;
    try { grip.setPointerCapture(e.pointerId); } catch(_){}
  });
  grip.addEventListener('pointermove', e => {
    if (!dragging) return;
    const h = Math.min(maxH(), Math.max(minH, startH + (startY - e.clientY)));
    kbUserHeight = h; applyKbHeight(h);
  });
  const endDrag = e => {
    if (!dragging) return;
    dragging = false;
    try { grip.releasePointerCapture(e.pointerId); } catch(_){}
    save(LS.kbHeight, String(kbUserHeight));
  };
  grip.addEventListener('pointerup', endDrag);
  grip.addEventListener('pointercancel', endDrag);
  grip.addEventListener('dblclick', () => {
    kbUserHeight = 0; localStorage.removeItem(LS.kbHeight); applyKbHeight(0);
  });
}

function buildKbMap(){
  if (!window.CT || !$('kbBody')) return;
  const body = $('kbBody');
  body.innerHTML = '<div class="kb-scale"></div>';
  kbMap = CT.buildKeyboard(body.querySelector('.kb-scale'), ch => {
    if (ch != null && ch !== '') { for (const c of [...ch]) feedChar(c); }
    focusGhost();
  });
  fitKbScale();
}
function toggleKbMap(force){
  kbExpanded = (typeof force === 'boolean') ? force : !kbExpanded;
  const body = $('kbBody'); if (body) body.style.display = kbExpanded ? '' : 'none';
  applyKbHeight(kbExpanded ? kbUserHeight : 0);
}

/* ---------- 账号 ---------- */
function updateUserChip(){ $('userChip').textContent = (currentUser || '游客') + ' · 切换账号'; }
function closeLogin(){
  $('loginOverlay').classList.remove('show');
  updateUserChip(); renderMenu(); focusGhost();
}
function doLogin(){
  const name = $('nameInput').value.trim();
  if (!name) { $('nameInput').focus(); return; }
  currentUser = name; save(LS.user, name); closeLogin();
}
function logout(){
  if (!confirm('切换账号？本机练习记录会保留，但会换成新昵称。')) return;
  localStorage.removeItem(LS.user); currentUser = '';
  $('loginOverlay').classList.add('show'); $('nameInput').focus();
}

/* 设置弹层统一开关：同步层级状态、底部占位与输入焦点 */
function setSettingsOpen(open){
  $('settingsOverlay').classList.toggle('show', open);
  document.body.classList.toggle('settings-open', open);
  syncKbDock();
  if (!open) focusGhost();
}

/* ---------- 事件绑定 ---------- */
function bindEvents(){
  $('btnTheme').onclick = () => updateSetting('dark', !settings.dark);
  $('btnSettings').onclick = () => setSettingsOpen(true);
  $('btnCloseSettings').onclick = () => setSettingsOpen(false);
  $('userChip').onclick = logout;
  $('btnBack').onclick = exitPractice;
  $('btnBack2').onclick = exitPractice;
  $('btnRetry').onclick = retry;
  $('btnLogin').onclick = doLogin;
  $('btnSkip').onclick = () => { currentUser = ''; closeLogin(); };
  $('nameInput').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
  $('search').addEventListener('input', renderMenu);
  $('btnCheckUpdate').onclick = async () => { localStorage.removeItem(LS.bankOverride); await loadBank(true); renderLangTabs(); renderMenu(); };
  $('btnAdmin').onclick = () => { location.href = withShare('admin.html'); };
  $('btnClearHistory').onclick = () => { if (confirm('清空本机所有练习记录？')) { localStorage.removeItem(LS.history); renderHistory(); toast('已清空'); } };

  /* 错题库 / 间隔重复 */
  $('btnSrsStart').onclick = startReview;
  $('btnSrsExport').onclick = exportSrs;
  $('btnSrsClear').onclick = () => {
    if (confirm('清空本机全部错题与复习计划？')) { localStorage.removeItem(LS.srs); renderSrsCard(); toast('错题库已清空'); }
  };

  /* 联机限时挑战 */
  $('btnChallenge').onclick = () => {
    // 静态站没有服务端：跳到带服务端的对战应用，并自动创建房间
    // BATTLE_URL 自带 ?sharecode= 访问码，用 URL API 追加参数，避免拼出两个问号
    if (BATTLE_URL) {
      const u = new URL(BATTLE_URL, location.href);
      u.searchParams.set('battle', '1');
      location.href = u.toString();
      return;
    }
    quickCreateBattle();
  };
  $('btnChCreate').onclick = createChallenge;
  $('btnChQuick').onclick = quickCreateBattle;
  $('btnChCopyLink').onclick = copyBattleInvite;
  $('btnChSwitch').onclick = () => { leaveChallenge(); openChallenge(); };
  $('btnChJoin').onclick = joinChallenge;
  $('btnChStart').onclick = startChallengeRound;
  $('btnChRefresh').onclick = async () => { const r = await pollChallenge(); toast(r ? '榜单已刷新' : '暂时拉取不到榜单'); };
  $('btnChLeave').onclick = leaveChallenge;
  $('btnChClose').onclick = () => $('challengeOverlay').classList.remove('show');
  $('btnChCopy').onclick = async () => {
    if (!challenge) return;
    try { await navigator.clipboard.writeText(challenge.code); toast('房间码已复制：' + challenge.code); }
    catch(e){ toast('房间码：' + challenge.code + '（请手动复制）'); }
  };
  $('chCode').addEventListener('keydown', e => { if (e.key === 'Enter') joinChallenge(); });
  $('chName').addEventListener('keydown', e => { if (e.key === 'Enter') createChallenge(); });

  $('setRound').onchange = e => { updateSetting('round', parseInt(e.target.value,10)); renderMenu(); };
  $('setStrict').onchange = e => {
    updateSetting('strict', e.target.checked);
    if (e.target.checked && settings.wordMode !== false) { settings.wordMode = false; save(LS.settings, settings); applySettings(); }
  };
  $('setSkipCJK').onchange = e => updateSetting('skipCJK', e.target.checked);
  $('setSound').onchange = e => updateSetting('sound', e.target.checked);
  $('setSymbar').onchange = e => updateSetting('symbar', e.target.checked);
  $('setKeyboard').onchange = e => updateSetting('keyboard', e.target.checked);
  $('setKbOpacity').oninput = e => {
    const v = parseInt(e.target.value, 10);
    $('kbmap').style.opacity = String(v / 100);
    $('kbOpacityVal').textContent = v + '%';
  };
  $('setKbOpacity').onchange = e => updateSetting('kbOpacity', parseInt(e.target.value, 10));
  $('setAutoRedo').onchange = e => updateSetting('autoRedo', e.target.checked);
  $('setImeRealtime').onchange = e => updateSetting('imeRealtime', e.target.checked);
  $('setWordMode').onchange = e => {
    updateSetting('wordMode', e.target.checked);
    if (e.target.checked && settings.strict) { settings.strict = false; save(LS.settings, settings); applySettings(); }
  };
  $('setHighlight').onchange = e => {
    updateSetting('highlight', e.target.checked);
    if (practicing && curItem) { renderCode(); applyCursor(); }   // 立即重绘当前词条
  };
  $('setFont').onchange = e => updateSetting('font', parseInt(e.target.value,10));
  $('btnApplyUrl').onclick = async () => {
    settings.bankUrl = $('setBankUrl').value.trim(); save(LS.settings, settings);
    localStorage.removeItem(LS.bankOverride);
    await loadBank(false); renderLangTabs(); renderMenu();
    toast(settings.bankUrl ? '已切换到自定义题库地址' : '已恢复本站题库');
  };
  $('btnResetUrl').onclick = async () => {
    $('setBankUrl').value = ''; settings.bankUrl = ''; save(LS.settings, settings);
    localStorage.removeItem(LS.bankOverride);
    await loadBank(true); renderLangTabs(); renderMenu();
  };
  $('btnImport').onclick = () => $('fileInput').click();
  $('fileInput').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const obj = JSON.parse(rd.result);
        const nb = normalizeBank(obj);
        save(LS.bankOverride, obj);
        BANK = nb; sourceLabel = '本机导入';
        updateBankInfo(); renderLangTabs(); renderMenu();
        toast(`导入成功：${nb.langs.length} 种语言 / ${nb.langs.reduce((n,l)=>n+l.groups.length,0)} 组`);
      } catch(err){ alert('题库格式不正确：' + err.message + '\n请使用「导出题库」得到的文件，或旧版 [python/cpp] 格式。'); }
    };
    rd.readAsText(f); e.target.value = '';
  };
  $('btnExport').onclick = () => {
    const blob = new Blob([JSON.stringify(exportableBank(), null, 2)], { type:'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '代码打字题库-' + new Date().toISOString().slice(0,10) + '.json';
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  $('btnClearLocalBank').onclick = async () => {
    localStorage.removeItem(LS.bankOverride);
    await loadBank(true); renderLangTabs(); renderMenu();
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if ($('challengeOverlay').classList.contains('show')) $('challengeOverlay').classList.remove('show');
      else if ($('settingsOverlay').classList.contains('show')) setSettingsOpen(false);
      else if (practicing) exitPractice();
    }
  });
}

/* ---------- 启动 ---------- */
(async function boot(){
  // 触屏判定：决定符号条、跳过中文词条、键盘唤起提示是否显示
  let coarse = false;
  try {
    coarse = !!window.matchMedia('(pointer: coarse)').matches ||
             ('ontouchstart' in window && !window.matchMedia('(pointer: fine)').matches);
  } catch(e){}
  document.body.classList.toggle('touch', coarse);
  // 首次访问：触屏显示符号条、跳过含中文词条；桌面显示指法键盘图，手机默认收起以省空间
  const rawSettings = localStorage.getItem(LS.settings);
  if (!rawSettings) {
    settings.symbar = coarse;
    settings.skipCJK = coarse;
    settings.keyboard = !coarse;
    save(LS.settings, settings);
  } else {
    try {
      const old = JSON.parse(rawSettings);
      if (old && typeof old.keyboard === 'undefined') { settings.keyboard = !coarse; save(LS.settings, settings); }
    } catch(e){}
  }
  // 一次性应用默认 GitHub 题库源；之后在设置里清空/改地址不再被覆盖
  if (!localStorage.getItem(LS.bankDefaultApplied)) {
    if (!settings.bankUrl) settings.bankUrl = DEFAULT_BANK_URL;
    localStorage.setItem(LS.bankDefaultApplied, '1');
    save(LS.settings, settings);
  }
  window.addEventListener('resize', syncKbDock);
  applySettings();
  buildSymKeys();
  buildKbMap();
  initKbResize();
  toggleKbMap(true);
  bindInput();
  bindEvents();
  await loadBank(false);
  renderLangTabs();
  // 记住上次语言（题库更新后若该语言消失则回退第一个，即 C++）
  if (!BANK.langs.some(l => l.key === langKey)) langKey = BANK.langs[0].key;
  setLang(langKey);
  fillChLang();
  const saved = localStorage.getItem(LS.user) || '';
  if (saved) { currentUser = saved; $('loginOverlay').classList.remove('show'); updateUserChip(); renderMenu(); }
  else { $('nameInput').focus(); }
  // 邀请链接 ?room=CODE 自动加入；?battle=1 自动建房（静态站不处理，交给对战应用）
  if (!BATTLE_URL) {
    const qs = new URLSearchParams(location.search);
    const room = (qs.get('room') || '').toUpperCase();
    const quick = qs.get('battle') === '1';
    if (/^[A-Z0-9]{6}$/.test(room) || quick) {
      $('loginOverlay').classList.remove('show');
      if (!currentUser) currentUser = chName();
      if (/^[A-Z0-9]{6}$/.test(room)) autoJoinBattle(room); else quickCreateBattle();
    }
  }
})();
})();
