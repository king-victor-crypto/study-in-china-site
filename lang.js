// 懒人一劳永逸 全局整页自动翻译 17语言版
let currentLang = localStorage.getItem('lang') || 'zh';

// 语言映射 17种
const langMap = {
    zh: 'zh-CN',
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

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang);
    location.reload();
}

// 加载谷歌翻译全局脚本
function loadTranslate() {
    if(currentLang === 'zh') return;
    const tLang = langMap[currentLang];
    const script = document.createElement('script');
    script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    window.googleTranslateElementInit = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'zh-CN',
            includedLanguages: Object.values(langMap).join(','),
            autoDisplay: false
        }, 'google_translate_element');
        // 强制切换到选中语言
        setTimeout(()=>{
            const frame = document.querySelector('.goog-te-banner-frame');
            if(frame){
                const doc = frame.contentDocument || frame.contentWindow.document;
                const sel = doc.querySelector('select');
                if(sel) sel.value = tLang;
                sel.dispatchEvent(new Event('change'));
            }
        }, 800);
    };
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function(){
    // 同步下拉框选中
    const sel = document.getElementById('langSelect');
    if(sel) sel.value = currentLang;
    sel.onchange = function(){
        switchLang(this.value);
    };
    // 执行全局翻译
    loadTranslate();
    // 隐藏谷歌翻译自带横幅，只留我们自己的下拉
    const style = document.createElement('style');
    style.textContent = `.goog-te-banner-frame{display:none !important;} body{top:0 !important;}`;
    document.head.appendChild(style);
});
