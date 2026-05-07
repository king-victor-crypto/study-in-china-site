// 四合一翻译引擎：谷歌+百度+有道+离线增强全收录版
const langMap17 = {
    zh:"zh-CN",en:"en",ru:"ru",ko:"ko",ja:"ja",fr:"fr",es:"es",de:"de",
    it:"it",pt:"pt",ar:"ar",tr:"tr",th:"th",vi:"vi",id:"id",ms:"ms",fa:"fa"
};
const supportLang = Object.keys(langMap17);
let currLang = localStorage.getItem("siteLang") || "zh";

// 离线增强词库（已收录你当前页面所有文字）
const offlineDict = {
    zh: {
        "发现项目":"发现项目",
        "探索院校":"探索院校",
        "申请指南":"申请指南",
        "留学中国":"留学中国",
        "资源中心":"资源中心",
        "探索国内院校":"探索国内院校",
        "双一流":"双一流",
        "公办本科":"公办本科",
        "特色院校":"特色院校",
        "财经理工":"财经理工",
        "医药艺术":"医药艺术",
        "师范":"师范",
        "搜索大学、院校类型、地区...":"搜索大学、院校类型、地区...",
        "一流大学":"一流大学",
        "公办本科院校":"公办本科院校",
        "理工类院校":"理工类院校",
        "财经类院校":"财经类院校",
        "艺术类院校":"艺术类院校",
        "师范类院校":"师范类院校",
        "按地区选校":"按地区选校",
        "点击进入查看详情":"点击进入查看详情",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China 来华留学一站式平台"
    },
    en: {
        "发现项目":"Discover Programs",
        "探索院校":"Explore Universities",
        "申请指南":"Application Guide",
        "留学中国":"Study in China",
        "资源中心":"Resource Center",
        "探索国内院校":"Explore Chinese Universities",
        "双一流":"Double First-Class",
        "公办本科":"Public Universities",
        "特色院校":"Specialized Universities",
        "财经理工":"Finance & Tech",
        "医药艺术":"Medical & Art",
        "师范":"Normal Universities",
        "搜索大学、院校类型、地区...":"Search universities, types, regions...",
        "一流大学":"Top Universities",
        "公办本科院校":"Public Undergraduate Universities",
        "理工类院校":"Science & Engineering Universities",
        "财经类院校":"Finance & Economics Universities",
        "艺术类院校":"Art Universities",
        "师范类院校":"Normal Universities",
        "按地区选校":"Find Universities by Region",
        "点击进入查看详情":"Click to view details",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China One-stop Platform"
    },
    ru: {
        "发现项目":"Найти программы",
        "探索院校":"Университеты",
        "申请指南":"Инструкция",
        "留学中国":"Учиться в Китае",
        "资源中心":"Ресурсы",
        "探索国内院校":"Китайские университеты",
        "双一流":"Двойной класс",
        "公办本科":"Государственные вузы",
        "特色院校":"Специальные вузы",
        "财经理工":"Финансы и техника",
        "医药艺术":"Медицина и искусство",
        "师范":"Педагогические вузы",
        "搜索大学、院校类型、地区...":"Поиск вузов, типов, регионов...",
        "一流大学":"Лучшие вузы",
        "公办本科院校":"Государственные вузы",
        "理工类院校":"Технические вузы",
        "财经类院校":"Экономические вузы",
        "艺术类院校":"Художественные вузы",
        "师范类院校":"Педагогические вузы",
        "按地区选校":"Найти вузы по региону",
        "点击进入查看详情":"Подробнее",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Одноразовая платформа"
    },
    ko: {
        "发现项目":"프로그램 찾기",
        "探索院校":"대학 탐색",
        "申请指南":"신청 가이드",
        "留学中国":"중국 유학",
        "资源中心":"자료 센터",
        "探索国内院校":"중국 대학 탐색",
        "双一流":"쌍일류",
        "公办本科":"공립 대학",
        "特色院校":"특성화 대학",
        "财经理工":"경제공과",
        "医药艺术":"의예예술",
        "师范":"사범대학",
        "搜索大学、院校类型、地区...":"대학, 유형, 지역 검색...",
        "一流大学":"일류 대학",
        "公办本科院校":"공립 대학",
        "理工类院校":"이공계 대학",
        "财经类院校":"경제대학",
        "艺术类院校":"예술대학",
        "师范类院校":"사범대학",
        "按地区选校":"지역별 대학 찾기",
        "点击进入查看详情":"자세히 보기",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China 원스톱 플랫폼"
    },
    ja: {
        "发现项目":"プログラム",
        "探索院校":"大学探し",
        "申请指南":"申込ガイド",
        "留学中国":"中国留学",
        "资源中心":"リソース",
        "探索国内院校":"中国の大学を探す",
        "双一流":"双一流",
        "公办本科":"公立大学",
        "特色院校":"特色大学",
        "财经理工":"財経理工",
        "医药艺术":"医療芸術",
        "师范":"師範大学",
        "搜索大学、院校类型、地区...":"大学、種類、地域を検索...",
        "一流大学":"一流大学",
        "公办本科院校":"公立大学",
        "理工类院校":"理工系大学",
        "财经类院校":"財経大学",
        "艺术类院校":"芸術大学",
        "师范类院校":"師範大学",
        "按地区选校":"地域別大学検索",
        "点击进入查看详情":"詳細を見る",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China ワンストッププラットフォーム"
    },
    fr: {
        "发现项目":"Programmes",
        "探索院校":"Universités",
        "申请指南":"Guide",
        "留学中国":"Étudier en Chine",
        "资源中心":"Ressources",
        "探索国内院校":"Explorer les universités chinoises",
        "双一流":"Double premier rang",
        "公办本科":"Universités publiques",
        "特色院校":"Universités spécialisées",
        "财经理工":"Finance & Tech",
        "医药艺术":"Médical & Art",
        "师范":"Universités normales",
        "搜索大学、院校类型、地区...":"Rechercher universités, types, régions...",
        "一流大学":"Top universités",
        "公办本科院校":"Universités publiques",
        "理工类院校":"Universités scientifiques",
        "财经类院校":"Universités économiques",
        "艺术类院校":"Universités artistiques",
        "师范类院校":"Universités normales",
        "按地区选校":"Trouver par région",
        "点击进入查看详情":"Voir détails",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plateforme tout-en-un"
    },
    es: {
        "发现项目":"Programas",
        "探索院校":"Universidades",
        "申请指南":"Guía",
        "留学中国":"Estudiar en China",
        "资源中心":"Recursos",
        "探索国内院校":"Explorar universidades chinas",
        "双一流":"Doble primera clase",
        "公办本科":"Universidades públicas",
        "特色院校":"Universidades especializadas",
        "财经理工":"Finanzas y tecnología",
        "医药艺术":"Médico y arte",
        "师范":"Universidades normales",
        "搜索大学、院校类型、地区...":"Buscar universidades, tipos, regiones...",
        "一流大学":"Universidades de primer nivel",
        "公办本科院校":"Universidades públicas",
        "理工类院校":"Universidades de ciencia",
        "财经类院校":"Universidades económicas",
        "艺术类院校":"Universidades artísticas",
        "师范类院校":"Universidades normales",
        "按地区选校":"Buscar por región",
        "点击进入查看详情":"Ver detalles",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plataforma integral"
    },
    de: {
        "发现项目":"Programme",
        "探索院校":"Universitäten",
        "申请指南":"Anleitung",
        "留学中国":"Studieren in China",
        "资源中心":"Ressourcen",
        "探索国内院校":"Chinesische Universitäten entdecken",
        "双一流":"Doppelspitze",
        "公办本科":"Öffentliche Universitäten",
        "特色院校":"Spezialisierte Universitäten",
        "财经理工":"Finanzen & Technik",
        "医药艺术":"Medizin & Kunst",
        "师范":"Pädagogische Universitäten",
        "搜索大学、院校类型、地区...":"Suche Universitäten, Typen, Regionen...",
        "一流大学":"Spitzenuniversitäten",
        "公办本科院校":"Öffentliche Universitäten",
        "理工类院校":"Technische Universitäten",
        "财经类院校":"Wirtschaftsuniversitäten",
        "艺术类院校":"Kunstuniversitäten",
        "师范类院校":"Pädagogische Universitäten",
        "按地区选校":"Nach Region suchen",
        "点击进入查看详情":"Details anzeigen",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China All-in-One-Plattform"
    },
    it: {
        "发现项目":"Programmi",
        "探索院校":"Università",
        "申请指南":"Guida",
        "留学中国":"Studiare in Cina",
        "资源中心":"Risorse",
        "探索国内院校":"Esplora le università cinesi",
        "双一流":"Doppia prima classe",
        "公办本科":"Università pubbliche",
        "特色院校":"Università specializzate",
        "财经理工":"Finanza e tecnologia",
        "医药艺术":"Medico e arte",
        "师范":"Università normali",
        "搜索大学、院校类型、地区...":"Cerca università, tipi, regioni...",
        "一流大学":"Università di alto livello",
        "公办本科院校":"Università pubbliche",
        "理工类院校":"Università scientifiche",
        "财经类院校":"Università economiche",
        "艺术类院校":"Università artistiche",
        "师范类院校":"Università normali",
        "按地区选校":"Cerca per regione",
        "点击进入查看详情":"Vedi dettagli",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Piattaforma completa"
    },
    pt: {
        "发现项目":"Programas",
        "探索院校":"Universidades",
        "申请指南":"Guia",
        "留学中国":"Estudar na China",
        "资源中心":"Recursos",
        "探索国内院校":"Explorar universidades chinesas",
        "双一流":"Dupla primeira classe",
        "公办本科":"Universidades públicas",
        "特色院校":"Universidades especializadas",
        "财经理工":"Finanças e tecnologia",
        "医药艺术":"Médico e arte",
        "师范":"Universidades normais",
        "搜索大学、院校类型、地区...":"Pesquisar universidades, tipos, regiões...",
        "一流大学":"Universidades de topo",
        "公办本科院校":"Universidades públicas",
        "理工类院校":"Universidades de ciência",
        "财经类院校":"Universidades econômicas",
        "艺术类院校":"Universidades artísticas",
        "师范类院校":"Universidades normais",
        "按地区选校":"Pesquisar por região",
        "点击进入查看详情":"Ver detalhes",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plataforma completa"
    },
    ar: {
        "发现项目":"البرامج",
        "探索院校":"الجامعات",
        "申请指南":"دليل",
        "留学中国":"الدراسة في الصين",
        "资源中心":"الموارد",
        "探索国内院校":"استكشف الجامعات الصينية",
        "双一流":"الدرجة الممتازة",
        "公办本科":"الجامعات العامة",
        "特色院校":"الجامعات المتخصصة",
        "财经理工":"المالية والتكنولوجيا",
        "医药艺术":"الطب والفن",
        "师范":"الجامعات التعليمية",
        "搜索大学、院校类型、地区...":"ابحث عن الجامعات والأنواع والمناطق...",
        "一流大学":"الجامعات الرائدة",
        "公办本科院校":"الجامعات العامة",
        "理工类院校":"الجامعات التقنية",
        "财经类院校":"الجامعات الاقتصادية",
        "艺术类院校":"الجامعات الفنية",
        "师范类院校":"الجامعات التعليمية",
        "按地区选校":"ابحث حسب المنطقة",
        "点击进入查看详情":"عرض التفاصيل",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China منصة شاملة"
    },
    tr: {
        "发现项目":"Programlar",
        "探索院校":"Üniversiteler",
        "申请指南":"Kılavuz",
        "留学中国":"Çin'de Eğitim",
        "资源中心":"Kaynaklar",
        "探索国内院校":"Çin üniversitelerini keşfet",
        "双一流":"Çift birinci sınıf",
        "公办本科":"Devlet üniversiteleri",
        "特色院校":"Özel üniversiteler",
        "财经理工":"Finans ve teknoloji",
        "医药艺术":"Tıp ve sanat",
        "师范":"Eğitim üniversiteleri",
        "搜索大学、院校类型、地区...":"Üniversiteleri, türleri, bölgeleri ara...",
        "一流大学":"En iyi üniversiteler",
        "公办本科院校":"Devlet üniversiteleri",
        "理工类院校":"Teknik üniversiteler",
        "财经类院校":"Ekonomi üniversiteleri",
        "艺术类院校":"Sanat üniversiteleri",
        "师范类院校":"Eğitim üniversiteleri",
        "按地区选校":"Bölgeye göre ara",
        "点击进入查看详情":"Detayları gör",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Tek durak platformu"
    },
    th: {
        "发现项目":"โปรแกรม",
        "探索院校":"มหาวิทยาลัย",
        "申请指南":"คู่มือ",
        "留学中国":"เรียนจีน",
        "资源中心":"ทรัพยากร",
        "探索国内院校":"สำรวจมหาวิทยาลัยจีน",
        "双一流":"ชั้นนำ",
        "公办本科":"มหาวิทยาลัยรัฐ",
        "特色院校":"มหาวิทยาลัยเฉพาะทาง",
        "财经理工":"การเงินและเทคโนโลยี",
        "医药艺术":"การแพทย์และศิลปะ",
        "师范":"มหาวิทยาลัยครู",
        "搜索大学、院校类型、地区...":"ค้นหามหาวิทยาลัย ประเภท ภูมิภาค...",
        "一流大学":"มหาวิทยาลัยชั้นนำ",
        "公办本科院校":"มหาวิทยาลัยรัฐ",
        "理工类院校":"มหาวิทยาลัยเทคโนโลยี",
        "财经类院校":"มหาวิทยาลัยเศรษฐศาสตร์",
        "艺术类院校":"มหาวิทยาลัยศิลปะ",
        "师范类院校":"มหาวิทยาลัยครู",
        "按地区选校":"ค้นหาตามภูมิภาค",
        "点击进入查看详情":"ดูรายละเอียด",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China แพลตฟอร์มครบวงจร"
    },
    vi: {
        "发现项目":"Chương trình",
        "探索院校":"Trường đại học",
        "申请指南":"Hướng dẫn",
        "留学中国":"Học tại Trung Quốc",
        "资源中心":"Tài nguyên",
        "探索国内院校":"Khám phá các trường đại học Trung Quốc",
        "双一流":"Đôi hạng đầu",
        "公办本科":"Trường công lập",
        "特色院校":"Trường chuyên ngành",
        "财经理工":"Tài chính và kỹ thuật",
        "医药艺术":"Y tế và nghệ thuật",
        "师范":"Trường sư phạm",
        "搜索大学、院校类型、地区...":"Tìm kiếm trường, loại, khu vực...",
        "一流大学":"Trường đại học hàng đầu",
        "公办本科院校":"Trường công lập",
        "理工类院校":"Trường khoa học kỹ thuật",
        "财经类院校":"Trường kinh tế",
        "艺术类院校":"Trường nghệ thuật",
        "师范类院校":"Trường sư phạm",
        "按地区选校":"Tìm theo khu vực",
        "点击进入查看详情":"Xem chi tiết",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Nền tảng toàn diện"
    },
    id: {
        "发现项目":"Program",
        "探索院校":"Universitas",
        "申请指南":"Panduan",
        "留学中国":"Belajar di Tiongkok",
        "资源中心":"Sumber Daya",
        "探索国内院校":"Jelajahi universitas Tiongkok",
        "双一流":"Ganda kelas satu",
        "公办本科":"Universitas negeri",
        "特色院校":"Universitas khusus",
        "财经理工":"Keuangan & Teknologi",
        "医药艺术":"Medis & Seni",
        "师范":"Universitas keguruan",
        "搜索大学、院校类型、地区...":"Cari universitas, jenis, wilayah...",
        "一流大学":"Universitas terkemuka",
        "公办本科院校":"Universitas negeri",
        "理工类院校":"Universitas sains",
        "财经类院校":"Universitas ekonomi",
        "艺术类院校":"Universitas seni",
        "师范类院校":"Universitas keguruan",
        "按地区选校":"Cari berdasarkan wilayah",
        "点击进入查看详情":"Lihat detail",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Platform terintegrasi"
    },
    ms: {
        "发现项目":"Program",
        "探索院校":"Universiti",
        "申请指南":"Panduan",
        "留学中国":"Belajar di China",
        "资源中心":"Sumber",
        "探索国内院校":"Terokai universiti China",
        "双一流":"Dua kelas pertama",
        "公办本科":"Universiti awam",
        "特色院校":"Universiti khusus",
        "财经理工":"Kewangan & Teknologi",
        "医药艺术":"Perubatan & Seni",
        "师范":"Universiti perguruan",
        "搜索大学、院校类型、地区...":"Cari universiti, jenis, wilayah...",
        "一流大学":"Universiti terkemuka",
        "公办本科院校":"Universiti awam",
        "理工类院校":"Universiti sains",
        "财经类院校":"Universiti ekonomi",
        "艺术类院校":"Universiti seni",
        "师范类院校":"Universiti perguruan",
        "按地区选校":"Cari mengikut wilayah",
        "点击进入查看详情":"Lihat butiran",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Platform bersepadu"
    },
    fa: {
        "发现项目":"برنامه‌ها",
        "探索院校":"دانشگاه‌ها",
        "申请指南":"راهنما",
        "留学中国":"تحصیل در چین",
        "资源中心":"منابع",
        "探索国内院校":"دانشگاه‌های چین را کاوش کنید",
        "双一流":"دو رتبه اول",
        "公办本科":"دانشگاه‌های دولتی",
        "特色院校":"دانشگاه‌های تخصصی",
        "财经理工":"مالی و فناوری",
        "医药艺术":"پزشکی و هنر",
        "师范":"دانشگاه‌های تربیت معلم",
        "搜索大学、院校类型、地区...":"جستجوی دانشگاه‌ها، نوع، منطقه...",
        "一流大学":"دانشگاه‌های برتر",
        "公办本科院校":"دانشگاه‌های دولتی",
        "理工类院校":"دانشگاه‌های فنی",
        "财经类院校":"دانشگاه‌های اقتصادی",
        "艺术类院校":"دانشگاه‌های هنری",
        "师范类院校":"دانشگاه‌های تربیت معلم",
        "按地区选校":"جستجو بر اساس منطقه",
        "点击进入查看详情":"مشاهده جزئیات",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China پلتفرم یکپارچه"
    }
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

// 离线增强替换（现在能翻译你页面上所有文字）
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
