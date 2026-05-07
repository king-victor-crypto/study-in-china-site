// lang.js - 17种语言完整语言包
const translations = {
    // 1. 中文（默认）
    zh: {
        nav_projects: "发现项目",
        nav_schools: "探索院校",
        nav_guide: "申请指南",
        nav_life: "留学中国",
        nav_resource: "资源中心",
        btn_search: "搜索",
        btn_consult: "免费咨询",
        text_click_detail: "点击进入查看详情",
        hero_projects: "发现留学项目",
        hero_schools: "探索国内院校",
        hero_guide: "来华留学申请指南",
        hero_life: "留学生活指南",
        hero_resource: "资源中心"
    },
    // 2. 英语
    en: {
        nav_projects: "Discover Programs",
        nav_schools: "Explore Universities",
        nav_guide: "Application Guide",
        nav_life: "Study in China",
        nav_resource: "Resource Center",
        btn_search: "Search",
        btn_consult: "Free Consultation",
        text_click_detail: "Click to view details",
        hero_projects: "Discover Study Programs",
        hero_schools: "Explore Chinese Universities",
        hero_guide: "Study in China Application Guide",
        hero_life: "Study Abroad Life Guide",
        hero_resource: "Resource Center"
    },
    // 3. 俄语
    ru: {
        nav_projects: "Найти программы",
        nav_schools: "Исследовать университеты",
        nav_guide: "Руководство по заявке",
        nav_life: "Учиться в Китае",
        nav_resource: "Центр ресурсов",
        btn_search: "Поиск",
        btn_consult: "Бесплатная консультация",
        text_click_detail: "Нажмите для просмотра деталей",
        hero_projects: "Найти программы обучения",
        hero_schools: "Исследовать китайские университеты",
        hero_guide: "Руководство по поступлению в Китай",
        hero_life: "Руководство по жизни студента",
        hero_resource: "Центр ресурсов"
    },
    // 4. 韩语
    ko: {
        nav_projects: "프로그램 찾기",
        nav_schools: "대학 탐색",
        nav_guide: "신청 가이드",
        nav_life: "중국 유학",
        nav_resource: "자료 센터",
        btn_search: "검색",
        btn_consult: "무료 상담",
        text_click_detail: "클릭하여 자세히 보기",
        hero_projects: "유학 프로그램 찾기",
        hero_schools: "중국 대학 탐색",
        hero_guide: "중국 유학 신청 가이드",
        hero_life: "유학 생활 가이드",
        hero_resource: "자료 센터"
    },
    // 5. 日语
    ja: {
        nav_projects: "プログラムを探す",
        nav_schools: "大学を探す",
        nav_guide: "申請ガイド",
        nav_life: "中国留学",
        nav_resource: "リソースセンター",
        btn_search: "検索",
        btn_consult: "無料相談",
        text_click_detail: "クリックして詳細を表示",
        hero_projects: "留学プログラムを探す",
        hero_schools: "中国の大学を探す",
        hero_guide: "中国留学申請ガイド",
        hero_life: "留学生活ガイド",
        hero_resource: "リソースセンター"
    },
    // 6. 法语
    fr: {
        nav_projects: "Découvrir les programmes",
        nav_schools: "Explorer les universités",
        nav_guide: "Guide de candidature",
        nav_life: "Étudier en Chine",
        nav_resource: "Centre de ressources",
        btn_search: "Rechercher",
        btn_consult: "Consultation gratuite",
        text_click_detail: "Cliquez pour voir les détails",
        hero_projects: "Découvrir les programmes d'études",
        hero_schools: "Explorer les universités chinoises",
        hero_guide: "Guide de candidature pour étudier en Chine",
        hero_life: "Guide de la vie étudiante",
        hero_resource: "Centre de ressources"
    },
    // 7. 西班牙语
    es: {
        nav_projects: "Descubrir programas",
        nav_schools: "Explorar universidades",
        nav_guide: "Guía de solicitud",
        nav_life: "Estudiar en China",
        nav_resource: "Centro de recursos",
        btn_search: "Buscar",
        btn_consult: "Consulta gratuita",
        text_click_detail: "Haz clic para ver detalles",
        hero_projects: "Descubrir programas de estudio",
        hero_schools: "Explorar universidades chinas",
        hero_guide: "Guía de solicitud para estudiar en China",
        hero_life: "Guía de vida estudiantil",
        hero_resource: "Centro de recursos"
    },
    // 8. 德语
    de: {
        nav_projects: "Programme entdecken",
        nav_schools: "Universitäten erkunden",
        nav_guide: "Bewerbungsleitfaden",
        nav_life: "Studieren in China",
        nav_resource: "Ressourcenzentrum",
        btn_search: "Suchen",
        btn_consult: "Kostenlose Beratung",
        text_click_detail: "Klicken Sie hier für Details",
        hero_projects: "Studienprogramme entdecken",
        hero_schools: "Chinesische Universitäten erkunden",
        hero_guide: "Leitfaden für die Bewerbung zum Studium in China",
        hero_life: "Leitfaden für das Studentenleben",
        hero_resource: "Ressourcenzentrum"
    },
    // 9. 意大利语
    it: {
        nav_projects: "Scopri i programmi",
        nav_schools: "Esplora le università",
        nav_guide: "Guida alla domanda",
        nav_life: "Studiare in Cina",
        nav_resource: "Centro risorse",
        btn_search: "Cerca",
        btn_consult: "Consulenza gratuita",
        text_click_detail: "Clicca per vedere i dettagli",
        hero_projects: "Scopri i programmi di studio",
        hero_schools: "Esplora le università cinesi",
        hero_guide: "Guida alla domanda per studiare in Cina",
        hero_life: "Guida alla vita studentesca",
        hero_resource: "Centro risorse"
    },
    // 10. 葡萄牙语
    pt: {
        nav_projects: "Descobrir programas",
        nav_schools: "Explorar universidades",
        nav_guide: "Guia de candidatura",
        nav_life: "Estudar na China",
        nav_resource: "Centro de recursos",
        btn_search: "Pesquisar",
        btn_consult: "Consulta gratuita",
        text_click_detail: "Clique para ver detalhes",
        hero_projects: "Descobrir programas de estudo",
        hero_schools: "Explorar universidades chinesas",
        hero_guide: "Guia de candidatura para estudar na China",
        hero_life: "Guia da vida estudantil",
        hero_resource: "Centro de recursos"
    },
    // 11. 阿拉伯语
    ar: {
        nav_projects: "اكتشف البرامج",
        nav_schools: "استكشف الجامعات",
        nav_guide: "دليل التقديم",
        nav_life: "الدراسة في الصين",
        nav_resource: "مركز الموارد",
        btn_search: "بحث",
        btn_consult: "استشارة مجانية",
        text_click_detail: "انقر لعرض التفاصيل",
        hero_projects: "اكتشف برامج الدراسة",
        hero_schools: "استكشف الجامعات الصينية",
        hero_guide: "دليل التقديم للدراسة في الصين",
        hero_life: "دليل الحياة الطلابية",
        hero_resource: "مركز الموارد"
    },
    // 12. 土耳其语
    tr: {
        nav_projects: "Programları Keşfet",
        nav_schools: "Üniversiteleri Keşfet",
        nav_guide: "Başvuru Kılavuzu",
        nav_life: "Çin'de Eğitim",
        nav_resource: "Kaynak Merkezi",
        btn_search: "Ara",
        btn_consult: "Ücretsiz Danışmanlık",
        text_click_detail: "Detayları görmek için tıklayın",
        hero_projects: "Eğitim Programlarını Keşfet",
        hero_schools: "Çin Üniversitelerini Keşfet",
        hero_guide: "Çin'de Eğitim Başvuru Kılavuzu",
        hero_life: "Öğrenci Hayatı Kılavuzu",
        hero_resource: "Kaynak Merkezi"
    },
    // 13. 泰语
    th: {
        nav_projects: "ค้นพบโปรแกรม",
        nav_schools: "สำรวจมหาวิทยาลัย",
        nav_guide: "คู่มือการสมัคร",
        nav_life: "เรียนในจีน",
        nav_resource: "ศูนย์ทรัพยากร",
        btn_search: "ค้นหา",
        btn_consult: "ปรึกษาฟรี",
        text_click_detail: "คลิกเพื่อดูรายละเอียด",
        hero_projects: "ค้นพบโปรแกรมการศึกษา",
        hero_schools: "สำรวจมหาวิทยาลัยจีน",
        hero_guide: "คู่มือการสมัครเรียนในจีน",
        hero_life: "คู่มือชีวิตนักเรียน",
        hero_resource: "ศูนย์ทรัพยากร"
    },
    // 14. 越南语
    vi: {
        nav_projects: "Khám phá chương trình",
        nav_schools: "Khám phá các trường đại học",
        nav_guide: "Hướng dẫn đăng ký",
        nav_life: "Học tập tại Trung Quốc",
        nav_resource: "Trung tâm tài nguyên",
        btn_search: "Tìm kiếm",
        btn_consult: "Tư vấn miễn phí",
        text_click_detail: "Nhấp để xem chi tiết",
        hero_projects: "Khám phá chương trình học tập",
        hero_schools: "Khám phá các trường đại học Trung Quốc",
        hero_guide: "Hướng dẫn đăng ký học tập tại Trung Quốc",
        hero_life: "Hướng dẫn cuộc sống sinh viên",
        hero_resource: "Trung tâm tài nguyên"
    },
    // 15. 印尼语
    id: {
        nav_projects: "Temukan Program",
        nav_schools: "Jelajahi Universitas",
        nav_guide: "Panduan Pendaftaran",
        nav_life: "Belajar di Tiongkok",
        nav_resource: "Pusat Sumber Daya",
        btn_search: "Cari",
        btn_consult: "Konsultasi Gratis",
        text_click_detail: "Klik untuk melihat detail",
        hero_projects: "Temukan Program Studi",
        hero_schools: "Jelajahi Universitas Tiongkok",
        hero_guide: "Panduan Pendaftaran Belajar di Tiongkok",
        hero_life: "Panduan Kehidupan Mahasiswa",
        hero_resource: "Pusat Sumber Daya"
    },
    // 16. 马来语
    ms: {
        nav_projects: "Cari Program",
        nav_schools: "Terokai Universiti",
        nav_guide: "Panduan Permohonan",
        nav_life: "Belajar di China",
        nav_resource: "Pusat Sumber",
        btn_search: "Cari",
        btn_consult: "Konsultasi Percuma",
        text_click_detail: "Klik untuk melihat butiran",
        hero_projects: "Cari Program Pengajian",
        hero_schools: "Terokai Universiti China",
        hero_guide: "Panduan Permohonan Belajar di China",
        hero_life: "Panduan Hidup Pelajar",
        hero_resource: "Pusat Sumber"
    },
    // 17. 波斯语
    fa: {
        nav_projects: "کشف برنامه‌ها",
        nav_schools: "کاوش دانشگاه‌ها",
        nav_guide: "راهنمای درخواست",
        nav_life: "تحصیل در چین",
        nav_resource: "مرکز منابع",
        btn_search: "جستجو",
        btn_consult: "مشاوره رایگان",
        text_click_detail: "برای دیدن جزئیات کلیک کنید",
        hero_projects: "کشف برنامه‌های تحصیلی",
        hero_schools: "کاوش دانشگاه‌های چین",
        hero_guide: "راهنمای درخواست تحصیل در چین",
        hero_life: "راهنمای زندگی دانشجویی",
        hero_resource: "مرکز منابع"
    }
};

// 自动检测浏览器系统语言
function getBrowserLang() {
    const lang = navigator.language || navigator.userLanguage;
    const supported = ['zh', 'en', 'ru', 'ko', 'ja', 'fr', 'es', 'de', 'it', 'pt', 'ar', 'tr', 'th', 'vi', 'id', 'ms', 'fa'];
    // 取语言代码前两位，比如 zh-CN 转为 zh
    const langCode = lang.split('-')[0];
    return supported.includes(langCode) ? langCode : 'zh';
}

// 初始化语言：优先读取用户上次选择，没有则用系统语言
let currentLang = localStorage.getItem('lang') || getBrowserLang();

// 切换语言函数
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
}

// 应用翻译到页面
function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;

    // 导航栏翻译
    const navElements = document.querySelectorAll('[data-i18n^="nav_"]');
    navElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // 按钮翻译
    const btnElements = document.querySelectorAll('[data-i18n^="btn_"]');
    btnElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // 标题和通用文本翻译
    const textElements = document.querySelectorAll('[data-i18n]');
    textElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // 更新下拉框选中状态
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = currentLang;
}

// 页面加载完成后自动应用翻译
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    // 给下拉框绑定事件
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            switchLang(e.target.value);
        });
    }
});
