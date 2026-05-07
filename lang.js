// 双引擎整页翻译 国内/国外自动适配 无手动翻译 懒人终极版
let currentLang = localStorage.getItem('siteLang') || 'zh';

// 17种语言映射
const langMap = {
    zh: 'zh',
    en: 'en',
    ru: 'ru',
    ko: 'ko',
    ja: 'ja',
    fr: 'fr',
    es: 'es',
    de: 'de',
    it: 'it',
    pt: 'pt',
    ar: 'ar',
    tr: 'tr',
    th: 'th',
    vi: 'vi',
    id: 'id',
    ms: 'ms',
    fa: 'fa'
};

// 切换语言
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    location.reload();
}

// 隐藏翻译横幅、修复布局
function fixStyle() {
    const style = document.createElement('style');
    style.textContent = `
        .goog-te-banner-frame,.translate-banner {display:none !important;} 
        body {top:0 !important;}
    `;
    document.head.appendChild(style);
}

// 优先谷歌翻译，超时自动切国内整页翻译
function initTranslate() {
    if (currentLang === 'zh') return;
    fixStyle();
    const targetLang = langMap[currentLang];

    // 超时800ms 谷歌加载失败就切国内方案
    let googleTimeout = setTimeout(() => {
        useLocalTranslate(targetLang);
    }, 800);

    // 尝试谷歌翻译
    window.googleTranslateElementInit = function () {
        clearTimeout(googleTimeout);
        new google.translate.TranslateElement({
            pageLanguage: 'zh',
            includedLanguages: Object.values(langMap).join(','),
            autoDisplay: false
        }, 'google_translate_element');
    };

    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.onerror = () => {
        clearTimeout(googleTimeout);
        useLocalTranslate(targetLang);
    };
    document.body.appendChild(script);
}

// 国内备用：简单整页文本替换兜底
function useLocalTranslate(targetLang) {
    const textMap = {
        en: { "发现项目":"Discover Programs","探索院校":"Explore Universities","申请指南":"Application Guide","留学中国":"Study in China","资源中心":"Resource Center","点击进入查看详情":"Click to view details" },
        ru: { "发现项目":"Найти программы","探索院校":"Университеты","申请指南":"Инструкция","留学中国":"Учиться в Китае","资源中心":"Ресурсы","点击进入查看详情":"Подробнее" },
        ko: { "发现项目":"프로그램 찾기","探索院校":"대학 탐색","申请指南":"신청 가이드","留学中国":"중국 유학","资源中心":"자료 센터","点击进入查看详情":"자세히 보기" },
        ja: { "发现项目":"プログラム","探索院校":"大学探し","申请指南":"申込ガイド","留学中国":"中国留学","资源中心":"リソース","点击进入查看详情":"詳細を見る" }
    };
    const map = textMap[targetLang];
    if(!map) return;
    const walk = el => {
        if(el.nodeType === 3){
            let t = el.textContent;
            for(let k in map) t = t.replaceAll(k, map[k]);
            el.textContent = t;
        }
        for(let c of el.childNodes) walk(c);
    };
    walk(document.body);
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function () {
    const sel = document.getElementById('langSelect');
    if (sel) {
        sel.value = currentLang;
        sel.onchange = function () {
            switchLang(this.value);
        };
    }
    initTranslate();
});
