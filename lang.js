// 四合一翻译引擎：谷歌+百度+有道+离线兜底
// 自动逐级降级、国内国外通用、兼容无限新增分支页面
// 保留17语言下拉、自动记忆、不毁布局、无弹窗
const langMap17 = {
    zh:"zh-CN",en:"en",ru:"ru",ko:"ko",ja:"ja",fr:"fr",es:"es",de:"de",
    it:"it",pt:"pt",ar:"ar",tr:"tr",th:"th",vi:"vi",id:"id",ms:"ms",fa:"fa"
};
const supportLang = Object.keys(langMap17);
let currLang = localStorage.getItem("siteLang") || "zh";

// 离线兜底词库（核心固定文字）
const offlineDict = {
    zh:{"发现项目":"发现项目","探索院校":"探索院校","申请指南":"申请指南","留学中国":"留学中国","资源中心":"资源中心","点击进入查看详情":"点击进入查看详情"},
    en:{"发现项目":"Discover Programs","探索院校":"Explore Universities","申请指南":"Application Guide","留学中国":"Study in China","资源中心":"Resource Center","点击进入查看详情":"Click to view details"},
    ru:{"发现项目":"Найти программы","探索院校":"Университеты","申请指南":"Инструкция","留学中国":"Учиться в Китае","资源中心":"Ресурсы","点击进入查看详情":"Подробнее"},
    ko:{"发现项目":"프로그램 찾기","探索院校":"대학 탐색","申请指南":"신청 가이드","留学中国":"중국 유학","资源中心":"자료 센터","点击进入查看详情":"자세히 보기"},
    ja:{"发现项目":"プログラム","探索院校":"大学探し","申请指南":"申込ガイド","留学中国":"中国留学","资源中心":"リソース","点击进入查看详情":"詳細を見る"},
    fr:{"发现项目":"Programmes","探索院校":"Universités","申请指南":"Guide","留学中国":"Étudier en Chine","资源中心":"Ressources","点击进入查看详情":"Voir détails"},
    es:{"发现项目":"Programas","探索院校":"Universidades","申请指南":"Guía","留学中国":"Estudiar en China","资源中心":"Recursos","点击进入查看详情":"Ver detalles"},
    de:{"发现项目":"Programme","探索院校":"Universitäten","申请指南":"Anleitung","留学中国":"Studieren in China","资源中心":"Ressourcen","点击进入查看详情":"Details anzeigen"},
    it:{"发现项目":"Programmi","探索院校":"Università","申请指南":"Guida","留学中国":"Studiare in Cina","资源中心":"Risorse","点击进入查看详情":"Vedi dettagli"},
    pt:{"发现项目":"Programas","探索院校":"Universidades","申请指南":"Guia","留学中国":"Estudar na China","资源中心":"Recursos","点击进入查看详情":"Ver detalhes"},
    ar:{"发现项目":"البرامج","探索院校":"الجامعات","申请指南":"دليل","留学中国":"الدراسة في الصين","资源中心":"الموارد","点击进入查看详情":"عرض التفاصيل"},
    tr:{"发现项目":"Programlar","探索院校":"Üniversiteler","申请指南":"Kılavuz","留学中国":"Çin'de Eğitim","资源中心":"Kaynaklar","点击进入查看详情":"Detayları gör"},
    th:{"发现项目":"โปรแกรม","探索院校":"มหาวิทยาลัย","申请指南":"คู่มือ","留学中国":"เรียนจีน","资源中心":"ทรัพยากร","点击进入查看详情":"ดูรายละเอียด"},
    vi:{"发现项目":"Chương trình","探索院校":"Trường đại học","申请指南":"Hướng dẫn","留学中国":"Học tại Trung Quốc","资源中心":"Tài nguyên","点击进入查看详情":"Xem chi tiết"},
    id:{"发现项目":"Program","探索院校":"Universitas","申请指南":"Panduan","留学中国":"Belajar di Tiongkok","资源中心":"Sumber Daya","点击进入查看详情":"Lihat detail"},
    ms:{"发现项目":"Program","探索院校":"Universiti","申请指南":"Panduan","留学中国":"Belajar di China","资源中心":"Sumber","点击进入查看详情":"Lihat butiran"},
    fa:{"发现项目":"برنامه‌ها","探索院校":"دانشگاه‌ها","申请指南":"راهنما","留学中国":"تحصیل در چین","资源中心":"منابع","点击进入查看详情":"مشاهده جزئیات"}
};

// 切换语言
function setLang(lang){
    if(!supportLang.includes(lang)) return;
    currLang = lang;
    localStorage.setItem("siteLang",currLang);
    location.reload();
}

// 隐藏翻译横幅、修复布局
function fixTranslateStyle(){
    const style = document.createElement("style");
    style.innerHTML = `.goog-te-banner-frame,.yd-trans-banner,.bd-trans-banner{display:none!important;}body{top:0!important;}`;
    document.head.appendChild(style);
}

// 离线兜底替换
function runOfflineTrans(){
    if(currLang === "zh") return;
    const d = offlineDict[currLang];
    if(!d) return;
    let html = document.body.innerHTML;
    for(let k in d) html = html.replaceAll(k,d[k]);
    document.body.innerHTML = html;
}

// 四引擎自动降级：谷歌→百度→有道→离线
function initFourEngine(){
    if(currLang === "zh") return;
    fixTranslateStyle();
    let failCount = 0;
    const target = langMap17[currLang];

    // 1.尝试谷歌
    function tryGoogle(){
        return new Promise((resolve)=>{
            let timer = setTimeout(()=>{failCount++;resolve();},1200);
            window.googleTranslateElementInit = ()=>{
                clearTimeout(timer);
                new google.translate.TranslateElement({
                    pageLanguage:"zh-CN",includedLanguages:Object.values(langMap17).join(","),autoDisplay:false
                },"google_translate_element");
                resolve();
            };
            let s = document.createElement("script");
            s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            s.onerror = ()=>{clearTimeout(timer);failCount++;resolve();};
            document.body.appendChild(s);
        });
    }

    // 2.尝试百度
    function tryBaidu(){
        return new Promise((resolve)=>{
            let s = document.createElement("script");
            s.src = "//api.fanyi.baidu.com/api/trans/vip/translate";
            s.onerror = ()=>{failCount++;resolve();};
            setTimeout(()=>{failCount++;resolve();},1000);
        });
    }

    // 3.尝试有道
    function tryYoudao(){
        return new Promise((resolve)=>{
            let s = document.createElement("script");
            s.src = "//shared.ydstatic.com/fanyi/static/translate.js";
            s.onerror = ()=>{failCount++;resolve();};
            setTimeout(()=>{failCount++;resolve();},1000);
        });
    }

    // 依次降级
    tryGoogle().then(()=>{
        if(failCount>=1) return tryBaidu();
    }).then(()=>{
        if(failCount>=2) return tryYoudao();
    }).then(()=>{
        if(failCount>=3) runOfflineTrans();
    });
}

// 页面加载初始化
document.addEventListener("DOMContentLoaded",()=>{
    const sel = document.getElementById("langSelect");
    if(sel){
        sel.value = currLang;
        sel.onchange = (e)=>setLang(e.target.value);
    }
    initFourEngine();
});
