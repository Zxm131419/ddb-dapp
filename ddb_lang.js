// ===== DDB 多语言系统 (借鉴 NNB 成熟方案; 外部独立脚本, 不破坏主页面JS) =====
// 语言: 简体中文🇨🇳 / 繁體中文🇭🇰 / English🇺🇸 / 日本語🇯🇵 / 한국어🇰🇷 / Tiếng Việt🇻🇳 / Bahasa🌏
// 机制: data-i18n + TreeWalker兜底 + 浮动语言面板 + nnbT()动态 + 版本号破缓存
var DDB_DICT = {};
var LANG_KEY='ddb_lang_v2';
var DDB_LANGS=[{code:'zh-CN',flag:'🇨🇳',label:'简体中文'},{code:'zh-TW',flag:'🇭🇰',label:'繁體中文'},{code:'en',flag:'🇺🇸',label:'English'},{code:'ja',flag:'🇯🇵',label:'日本語'},{code:'ko',flag:'🇰🇷',label:'한국어'},{code:'vi',flag:'🇻🇳',label:'Tiếng Việt'},{code:'ms',flag:'🌏',label:'Bahasa'}];

// ---------- 简体中文(基准) ----------
DDB_DICT["zh-CN"]={
 "nav_home":"首页","nav_trade":"交易","nav_mine":"矿机","nav_invite":"邀请","nav_node":"节点",
 "connect_wallet":"连接钱包","lang.title":"选择语言","back":"返回首页",
 "banner1":"鼎立乾坤 · 聚财昌隆","banner2":"DDB · 以鼎聚财 · 五行护运","supply":"发行 13,143,186 枚",
 "price":"DDB 当前价格","origin":"初始价","rise":"总涨幅",
 "sub_title":"一键认购","sub_desc":"认购即销毁 · 3倍产能 · 鼎聚财运","sub_price":"认购价格","sub_triple":"3倍产出","sub_btn":"立即认购",
 "mine_status":"矿机状态","mine_not_bought":"未购买","mine_balance":"DDB 余额","mine_capacity":"剩余产能","mine_claimable":"今日可领","mine_19accel":"19代加速",
 "mine_buy":"购买矿机","mine_all":"全部","mine_hint":"持 DDB 即可购买矿机，自动激活，3倍产能","mine_value":"当前价值","mine_base":"预计基础 DDB","mine_total":"预计挖矿总量","mine_approve":"授权购买矿机",
 "claim_title":"领取收益","claim_btn":"领取今日收益","claim_gas":"领取需要极少量 BNB 作为 gas 费",
 "reinvest":"复投（3倍产能）","reinvest_btn":"复投 (最低1000 DDB)",
 "trade_title":"交易中心","trade_buy":"买入 DDB","trade_sell":"卖出 DDB","trade_pay":"支付 USDT","trade_get":"预计获得 DDB","trade_buy_btn":"确认买入","trade_to":"预计到账 USDT (扣13%)","trade_sell_btn":"确认卖出","trade_pool":"底池 USDT 总量",
 "invite_title":"邀请 · 团队","bind_ref":"绑定上级","bind_btn":"确认绑定","invite_link":"我的推广链接","invite_copy":"复制","invite_direct":"直推人数","invite_perf":"直推业绩","invite_unlock":"已解锁代数",
 "node_title":"节点 · 分红","node_btn":"激活节点","node_div":"可领分红","node_claim":"领取节点分红","node_status":"节点状态","node_active":"已激活节点",
 "19_gen":"19代加速","19_desc":"每级10%自动加速","mech_title":"项目机制"
};
// ---------- 繁體中文 ----------
DDB_DICT["zh-TW"]={
 "nav_home":"首頁","nav_trade":"交易","nav_mine":"礦機","nav_invite":"邀請","nav_node":"節點","connect_wallet":"連接錢包","lang.title":"選擇語言","back":"返回首頁",
 "banner1":"鼎立乾坤·聚財昌隆","banner2":"DDB·以鼎聚財·五行護運","supply":"發行 13,143,186 枚","price":"DDB 當前價格","origin":"初始價","rise":"總漲幅",
 "sub_title":"一鍵認購","sub_desc":"認購即銷毀·3倍產能·鼎聚財運","sub_price":"認購價格","sub_triple":"3倍產出","sub_btn":"立即認購",
 "mine_status":"礦機狀態","mine_not_bought":"未購買","mine_balance":"DDB 餘額","mine_capacity":"剩餘產能","mine_claimable":"今日可領","mine_19accel":"19代加速",
 "mine_buy":"購買礦機","mine_all":"全部","mine_hint":"持 DDB 即可購買礦機，自動啟動，3倍產能","mine_value":"當前價值","mine_base":"預計基礎 DDB","mine_total":"預計挖礦總量","mine_approve":"授權購買礦機",
 "claim_title":"領取收益","claim_btn":"領取今日收益","claim_gas":"領取需要極少量 BNB 作為 gas 費",
 "reinvest":"復投（3倍產能）","reinvest_btn":"復投 (最低1000 DDB)",
 "trade_title":"交易中心","trade_buy":"買入 DDB","trade_sell":"賣出 DDB","trade_pay":"支付 USDT","trade_get":"預計獲得 DDB","trade_buy_btn":"確認買入","trade_to":"預計到帳 USDT (扣13%)","trade_sell_btn":"確認賣出","trade_pool":"底池 USDT 總量",
 "invite_title":"邀請·團隊","bind_ref":"綁定上級","bind_btn":"確認綁定","invite_link":"我的推廣連結","invite_copy":"複製","invite_direct":"直推人數","invite_perf":"直推業績","invite_unlock":"已解鎖代數",
 "node_title":"節點·分紅","node_btn":"啟動節點","node_div":"可領分紅","node_claim":"領取節點分紅","node_status":"節點狀態","node_active":"已啟動節點","19_gen":"19代加速","19_desc":"每級10%自動加速","mech_title":"項目機制"
};
// ---------- English ----------
DDB_DICT["en"]={
 "nav_home":"Home","nav_trade":"Trade","nav_mine":"Miner","nav_invite":"Invite","nav_node":"Node","connect_wallet":"Connect","lang.title":"Language","back":"Back",
 "banner1":"Prosperity · Fortune","banner2":"DDB · Five Elements","supply":"Supply 13,143,186","price":"DDB Price","origin":"Initial","rise":"Change",
 "sub_title":"Subscribe","sub_desc":"Buy&Burn · 3x · Fortune","sub_price":"Price","sub_triple":"3x Output","sub_btn":"Subscribe",
 "mine_status":"Status","mine_not_bought":"Not bought","mine_balance":"DDB Balance","mine_capacity":"Capacity","mine_claimable":"Claimable","mine_19accel":"19-gen Boost",
 "mine_buy":"Buy Miner","mine_all":"All","mine_hint":"Hold DDB to buy miner, auto-activate, 3x","mine_value":"Value","mine_base":"Base DDB","mine_total":"Total Mining","mine_approve":"Approve & Buy",
 "claim_title":"Claim","claim_btn":"Claim Today","claim_gas":"Minor BNB gas required",
 "reinvest":"Reinvest (3x)","reinvest_btn":"Reinvest (min 1000 DDB)",
 "trade_title":"Trade","trade_buy":"Buy DDB","trade_sell":"Sell DDB","trade_pay":"Pay USDT","trade_get":"Get DDB","trade_buy_btn":"Buy","trade_to":"Receive USDT (13% fee)","trade_sell_btn":"Sell","trade_pool":"Pool USDT",
 "invite_title":"Invite","bind_ref":"Bind Referrer","bind_btn":"Confirm Bind","invite_link":"My Link","invite_copy":"Copy","invite_direct":"Referrals","invite_perf":"Performance","invite_unlock":"Unlocked Gen",
 "node_title":"Node","node_btn":"Activate Node","node_div":"Claimable Div","node_claim":"Claim Dividend","node_status":"Node Status","node_active":"Active","19_gen":"19-gen Boost","19_desc":"10% per level","mech_title":"Mechanism"
};
// 其他语言: ja/ko/vi/ms 简化为纯文转换(通过 __translateFallback 或基础)
// --- 完整翻譯 (不再用英文兜底) ---
DDB_DICT["ja"]={"nav_home":"ホーム","nav_trade":"取引","nav_mine":"マイナー","nav_invite":"招待","nav_node":"ノード","connect_wallet":"ウォレット接続","lang.title":"言語を選択","back":"ホームに戻る","banner1":"鼎立乾坤 · 富貴繁栄","banner2":"DDB · 鼎で福を集める · 五行護運","supply":"発行 13,143,186 枚","price":"DDB 現在価格","origin":"初期価格","rise":"上昇率","sub_title":"ワンクリック購入","sub_desc":"購入即焼却 · 3倍生産力 · 鼎聚財運","sub_price":"購入価格","sub_triple":"3倍生産","sub_btn":"今すぐ購入","mine_status":"マイナー状態","mine_not_bought":"未購入","mine_balance":"DDB 残高","mine_capacity":"残り生産力","mine_claimable":"今日受取可","mine_19accel":"19世代加速","mine_buy":"マイナー購入","mine_all":"全て","mine_hint":"DDB 保有でマイナー購入・自動起動・3倍生産力","mine_value":"現在価値","mine_base":"予定基礎 DDB","mine_total":"予定採掘総量","mine_approve":"承認して購入","claim_title":"利益受取","claim_btn":"今日の利益を受取","claim_gas":"受取には少量の BNB ガス料金が必要","reinvest":"再投資（3倍生産力）","reinvest_btn":"再投資 (最低1000 DDB)","trade_title":"取引センター","trade_buy":"DDB を購入","trade_sell":"DDB を売却","trade_pay":"USDT を支払","trade_get":"取得予定 DDB","trade_buy_btn":"購入確認","trade_to":"受取予定 USDT（13%手数料）","trade_sell_btn":"売却確認","trade_pool":"流動性プール USDT","invite_title":"招待 · チーム","bind_ref":"上位を绑定","bind_btn":"绑定確認","invite_link":"私の紹介リンク","invite_copy":"コピー","invite_direct":"直推人数","invite_perf":"直推業績","invite_unlock":"解放した世代","node_title":"ノード · 配当","node_btn":"ノード起動","node_div":"受取配当","node_claim":"ノード配当を受取","node_status":"ノード状態","node_active":"起動済みノード","19_gen":"19世代加速","19_desc":"毎レベル10%自動加速","mech_title":"プロジェクト仕組み"};
DDB_DICT["ko"]={"nav_home":"홈","nav_trade":"거래","nav_mine":"마이너","nav_invite":"초대","nav_node":"노드","connect_wallet":"지갑 연결","lang.title":"언어 선택","back":"홈으로 돌아가기","banner1":"정립건곤 · 부귀번영","banner2":"DDB · 정으로 재물을 모으다 · 오행호운","supply":"발행 13,143,186 개","price":"DDB 현재 가격","origin":"초기 가격","rise":"상승률","sub_title":"원클릭 구매","sub_desc":"구매 즉시 소각 · 3배 생산력 · 정취재운","sub_price":"구매 가격","sub_triple":"3배 생산","sub_btn":"즉시 구매","mine_status":"마이너 상태","mine_not_bought":"미구매","mine_balance":"DDB 잔액","mine_capacity":"남은 생산력","mine_claimable":"오늘 수령 가능","mine_19accel":"19세대 가속","mine_buy":"마이너 구매","mine_all":"전체","mine_hint":"DDB 보유 시 마이너 구매·자동 활성화·3배 생산력","mine_value":"현재 가치","mine_base":"예상 기초 DDB","mine_total":"예상 채굴 총량","mine_approve":"승인 후 구매","claim_title":"수익 수령","claim_btn":"오늘의 수익 수령","claim_gas":"수령 시 소량 BNB 가스 필요","reinvest":"재투자（3배 생산력）","reinvest_btn":"재투자 (최소 1000 DDB)","trade_title":"거래 센터","trade_buy":"DDB 매수","trade_sell":"DDB 매도","trade_pay":"USDT 지불","trade_get":"획득 예정 DDB","trade_buy_btn":"매수 확인","trade_to":"수령 예정 USDT (13% 수수료)","trade_sell_btn":"매도 확인","trade_pool":"유동성 풀 USDT","invite_title":"초대 · 팀","bind_ref":"상위 바인딩","bind_btn":"바인딩 확인","invite_link":"내 추천 링크","invite_copy":"복사","invite_direct":"직추 인원","invite_perf":"직추 실적","invite_unlock":"해제된 세대","node_title":"노드 · 배당","node_btn":"노드 활성화","node_div":"수령 배당","node_claim":"노드 배당 수령","node_status":"노드 상태","node_active":"활성화된 노드","19_gen":"19세대 가속","19_desc":"레벨당 10% 자동 가속","mech_title":"프로젝트 메커니즘"};
DDB_DICT["vi"]={"nav_home":"Trang chủ","nav_trade":"Giao dịch","nav_mine":"Máy đào","nav_invite":"Mời","nav_node":"Node","connect_wallet":"Kết nối ví","lang.title":"Chọn ngôn ngữ","back":"Về trang chủ","banner1":"Đỉnh lập càn khôn · Phú quý hưng vượng","banner2":"DDB · Dùng đỉnh tụ tài · Ngũ hành hộ vận","supply":"Phát hành 13,143,186","price":"Giá hiện tại DDB","origin":"Giá ban đầu","rise":"Tăng","sub_title":"Đăng ký 1 chạm","sub_desc":"Mua là đốt · 3x năng suất · Tụ tài","sub_price":"Giá đăng ký","sub_triple":"3x sản lượng","sub_btn":"Đăng ký ngay","mine_status":"Trạng thái máy đào","mine_not_bought":"Chưa mua","mine_balance":"Số dư DDB","mine_capacity":"Năng suất còn lại","mine_claimable":"Nhận hôm nay","mine_19accel":"Tăng tốc 19 đời","mine_buy":"Mua máy đào","mine_all":"Tất cả","mine_hint":"Giữ DDB để mua máy đào, tự kích hoạt, 3x","mine_value":"Giá trị hiện tại","mine_base":"DDB cơ bản","mine_total":"Tổng đào","mine_approve":"Phê duyệt & mua","claim_title":"Nhận thưởng","claim_btn":"Nhận hôm nay","claim_gas":"Cần phí gas BNB nhỏ","reinvest":"Tái đầu tư (3x)","reinvest_btn":"Tái đầu tư (tối thiểu 1000 DDB)","trade_title":"Trung tâm giao dịch","trade_buy":"Mua DDB","trade_sell":"Bán DDB","trade_pay":"Trả USDT","trade_get":"Nhận DDB","trade_buy_btn":"Xác nhận mua","trade_to":"Nhận USDT (13% phí)","trade_sell_btn":"Xác nhận bán","trade_pool":"Pool USDT","invite_title":"Mời · Đội ngũ","bind_ref":"Liên kết cấp trên","bind_btn":"Xác nhận liên kết","invite_link":"Link mời của tôi","invite_copy":"Sao chép","invite_direct":"Số người giới thiệu","invite_perf":"Doanh số giới thiệu","invite_unlock":"Đời đã mở","node_title":"Node · Cổ tức","node_btn":"Kích hoạt node","node_div":"Cổ tức nhận được","node_claim":"Nhận cổ tức node","node_status":"Trạng thái node","node_active":"Đã kích hoạt node","19_gen":"Tăng tốc 19 đời","19_desc":"10% mỗi cấp","mech_title":"Cơ chế dự án"};
DDB_DICT["ms"]={"nav_home":"Utama","nav_trade":"Dagang","nav_mine":"Pelombong","nav_invite":"Jemput","nav_node":"Node","connect_wallet":"Sambung Dompet","lang.title":"Pilih Bahasa","back":"Kembali ke utama","banner1":"Kemakmuran · Keberuntungan","banner2":"DDB · Ding kutip kekayaan · Lima Elemen","supply":"Bekalan 13,143,186","price":"Harga DDB Semasa","origin":"Harga Awal","rise":"Kenaikan","sub_title":"Langgan 1-klik","sub_desc":"Beli&Bakar · 3x · Kekayaan","sub_price":"Harga Langgan","sub_triple":"Hasil 3x","sub_btn":"Langgan Sekarang","mine_status":"Status Pelombong","mine_not_bought":"Belum beli","mine_balance":"Baki DDB","mine_capacity":"Kapasiti","mine_claimable":"Boleh Tuntut","mine_19accel":"Pecutan 19 gen","mine_buy":"Beli Pelombong","mine_all":"Semua","mine_hint":"Pegang DDB utk beli pelombong, auto-aktif, 3x","mine_value":"Nilai","mine_base":"DDB Asas","mine_total":"Jumlah Perlombongan","mine_approve":"Lulus & Beli","claim_title":"Tuntut","claim_btn":"Tuntut Hari Ini","claim_gas":"Gas BNB kecil diperlukan","reinvest":"Pelaburan Semula (3x)","reinvest_btn":"Pelaburan Semula (min 1000 DDB)","trade_title":"Pusat Dagang","trade_buy":"Beli DDB","trade_sell":"Jual DDB","trade_pay":"Bayar USDT","trade_get":"Dapat DDB","trade_buy_btn":"Sahkan Beli","trade_to":"Terima USDT (13% yuran)","trade_sell_btn":"Sahkan Jual","trade_pool":"Pool USDT","invite_title":"Jemput · Pasukan","bind_ref":"Ikat atasan","bind_btn":"Sahkan Ikat","invite_link":"Pautan Jemputan","invite_copy":"Salin","invite_direct":"Bilangan Rujukan","invite_perf":"Prestasi","invite_unlock":"Generasi Dibuka","node_title":"Node · Dividen","node_btn":"Aktifkan Node","node_div":"Dividen Layak","node_claim":"Tuntut Dividen","node_status":"Status Node","node_active":"Node Aktif","19_gen":"Pecutan 19 gen","19_desc":"10% setiap tahap","mech_title":"Mekanisme Projek"};


// ===== 函数机制(仿 NNB, 成熟不外挂冲突) =====
function currentLang(){try{var s=localStorage.getItem(LANG_KEY);if(s&&DDB_DICT[s])return s}catch(e){}return 'zh-CN'}
function saveLang(l){try{localStorage.setItem(LANG_KEY,l)}catch(e){}}
function mergeDict(lang){var d=Object.assign({},DDB_DICT['zh-CN']);if(DDB_DICT[lang])Object.assign(d,DDB_DICT[lang]);return d}

function applyLang(){
  var lang=currentLang();var dict=mergeDict(lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(dict[k]!=null&&dict[k]!=='')el.innerHTML=dict[k];});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){var k=el.getAttribute('data-i18n-placeholder');if(dict[k]!=null)el.setAttribute('placeholder',dict[k]);});
  // TreeWalker 兜底: 把残留的简体中文(匹配词典)替换为当前语言, 防硬编码残留
  if(lang!=='zh-CN'){
    var z=DDB_DICT['zh-CN'];var nodes=[];var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var t=n.nodeValue||'';if(t.trim().length>50)return NodeFilter.FILTER_REJECT;if(!/[一-鿿]/.test(t))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});
    var nd;while(nd=w.nextNode())nodes.push(nd);
    for(var i=0;i<nodes.length;i++){var t=nodes[i].nodeValue||'';for(var k in z){if(z[k]&&z[k]===t.trim()&&dict[k]){nodes[i].nodeValue=dict[k];break;}}}
  }
  try{document.documentElement.lang=lang}catch(e){}
  if(typeof afterLang==='function'){try{afterLang(lang)}catch(e){}}
}
function setLang(l){saveLang(l);applyLang();var p=document.getElementById('ddbLangPanel');if(p)p.style.display='none'}
function t(key){try{var d=mergeDict(currentLang());return d[key]||key}catch(e){return key}}
function toggleLangPanel(){
  var old=document.getElementById('ddbLangPanel');
  if(old){old.style.display=old.style.display==='none'?'block':'none';return}
  var panel=document.createElement('div');panel.id='ddbLangPanel';
  panel.style.cssText='position:fixed;top:12px;right:12px;background:rgba(18,24,40,.97);border:1px solid #3a4666;border-radius:14px;padding:8px 6px;z-index:99999;box-shadow:0 12px 40px rgba(0,0,0,.6);min-width:190px';
  var cur=currentLang();var html='<div style="padding:8px 14px;color:#8b93a8;font-size:11px;border-bottom:1px solid rgba(255,255,255,.08)">'+t('lang.title')+'</div>';
  DDB_LANGS.forEach(function(l){html+='<div onclick="ddbSetLang(\''+l.code+'\')" style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-radius:8px;color:#e8ecf5;font-size:13px;'+(l.code===cur?'background:rgba(245,197,24,.15);color:#f0d568;':'')+'"><span style="font-size:16px">'+l.flag+'</span><span>'+l.label+'</span></div>';});
  panel.innerHTML=html;panel.onmouseleave=function(){setTimeout(function(){if(panel)panel.style.display='none'},400)};document.body.appendChild(panel);
}
window.ddbSetLang=setLang; window.ddbT=t; window.ddbToggleLangPanel=toggleLangPanel;
(function(){if(typeof document==='undefined')return;var run=function(){applyLang()};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else setTimeout(run,0);})();
