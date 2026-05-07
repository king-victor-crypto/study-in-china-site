// ==========================================
// Study in China - 17语言翻译包
// ==========================================

const translations = {
  // ---------- 通用导航 ----------
  nav_home: {
    zh: "首页", en: "Home", ar: "الرئيسية", fr: "Accueil", es: "Inicio",
    ru: "Главная", pt: "Início", id: "Beranda", th: "หน้าแรก",
    vi: "Trang chủ", ja: "ホーム", ko: "홈", de: "Start",
    it: "Home", fa: "خانه", tr: "Ana Sayfa", hi: "होम"
  },
  nav_discover: {
    zh: "发现项目", en: "Discover", ar: "اكتشف", fr: "Découvrir",
    es: "Descubrir", ru: "Поиск", pt: "Descobrir", id: "Temukan",
    th: "ค้นหา", vi: "Khám phá", ja: "見つける", ko: "찾기",
    de: "Entdecken", it: "Scopri", fa: "کشف", tr: "Keşfet", hi: "खोजें"
  },
  nav_universities: {
    zh: "探索院校", en: "Universities", ar: "الجامعات", fr: "Universités",
    es: "Universidades", ru: "Вузы", pt: "Universidades", id: "Universitas",
    th: "มหาวิทยาลัย", vi: "Đại học", ja: "大学", ko: "대학",
    de: "Unis", it: "Università", fa: "دانشگاه‌ها", tr: "Üniversiteler", hi: "विश्वविद्यालय"
  },
  nav_guide: {
    zh: "申请指南", en: "Guide", ar: "الدليل", fr: "Guide",
    es: "Guía", ru: "Гайд", pt: "Guia", id: "Panduan",
    th: "คู่มือ", vi: "Hướng dẫn", ja: "ガイド", ko: "가이드",
    de: "Leitfaden", it: "Guida", fa: "راهنما", tr: "Rehber", hi: "गाइड"
  },
  nav_life: {
    zh: "留学中国", en: "Life in China", ar: "الحياة في الصين", fr: "Vie en Chine",
    es: "Vida en China", ru: "Жизнь в Китае", pt: "Vida na China", id: "Kehidupan di Tiongkok",
    th: "ชีวิตในจีน", vi: "Cuộc sống tại TQ", ja: "中国での生活", ko: "중국 생활",
    de: "Leben in China", it: "Vita in Cina", fa: "زندگی در چین", tr: "Çin'de Yaşam", hi: "चीन में जीवन"
  },
  nav_career: {
    zh: "职业发展", en: "Career", ar: "مهنة", fr: "Carrière",
    es: "Carrera", ru: "Карьера", pt: "Carreira", id: "Karier",
    th: "อาชีพ", vi: "Nghề nghiệp", ja: "キャリア", ko: "커리어",
    de: "Karriere", it: "Carriera", fa: "کار", tr: "Kariyer", hi: "करियर"
  },
  nav_resources: {
    zh: "资源中心", en: "Resources", ar: "الموارد", fr: "Ressources",
    es: "Recursos", ru: "Ресурсы", pt: "Recursos", id: "Sumber Daya",
    th: "ทรัพยากร", vi: "Tài nguyên", ja: "リソース", ko: "자료",
    de: "Ressourcen", it: "Risorse", fa: "منابع", tr: "Kaynaklar", hi: "संसाधन"
  },
  nav_consult: {
    zh: "免费咨询", en: "Consult", ar: "استشارة", fr: "Consultation",
    es: "Consultar", ru: "Консультация", pt: "Consultar", id: "Konsultasi",
    th: "ปรึกษา", vi: "Tư vấn", ja: "相談", ko: "상담",
    de: "Beratung", it: "Consulenza", fa: "مشاوره", tr: "Danışmanlık", hi: "परामर्श"
  },

  // ---------- 首页 ----------
  home_title: {
    zh: "来华留学，一站触达", en: "Study in China, All in One Place",
    ar: "الدراسة في الصين، كل شيء في مكان واحد", fr: "Étudier en Chine, tout en un",
    es: "Estudiar en China, todo en un solo lugar", ru: "Учёба в Китае — всё в одном месте",
    pt: "Estudar na China, tudo num só lugar", id: "Kuliah di Tiongkok, Semua dalam Satu Tempat",
    th: "เรียนต่อจีน ครบในที่เดียว", vi: "Du học Trung Quốc, tất cả trong một",
    ja: "中国留学、すべてここに", ko: "중국 유학, 한 곳에서",
    de: "Studieren in China, alles an einem Ort", it: "Studiare in Cina, tutto in un posto",
    fa: "تحصیل در چین، همه چیز در یک جا", tr: "Çin'de Eğitim, Hepsi Bir Arada", hi: "चीन में पढ़ाई, सब एक जगह"
  },
  home_subtitle: {
    zh: "检索项目、探索院校、准备申请、适应生活、规划职业",
    en: "Search programs, explore universities, prepare applications, adapt to life, plan your career",
    ar: "ابحث عن برامج، استكشف الجامعات، استعد للتقديم، تكيف مع الحياة، خطط لمهنتك",
    fr: "Cherchez des programmes, explorez les universités, préparez votre candidature, adaptez-vous à la vie, planifiez votre carrière",
    es: "Busca programas, explora universidades, prepara tu solicitud, adáptate a la vida, planifica tu carrera",
    ru: "Ищите программы, изучайте вузы, готовьте документы, адаптируйтесь, планируйте карьеру",
    pt: "Pesquise programas, explore universidades, prepare a candidatura, adapte-se à vida, planeie a carreira",
    id: "Cari program, jelajahi universitas, siapkan aplikasi, beradaptasi dengan kehidupan, rencanakan karier",
    th: "ค้นหาหลักสูตร สำรวจมหาวิทยาลัย เตรียมใบสมัคร ปรับตัว วางแผนอาชีพ",
    vi: "Tìm chương trình, khám phá trường, chuẩn bị hồ sơ, thích nghi, lên kế hoạch nghề nghiệp",
    ja: "プログラム検索、大学探索、出願準備、生活適応、キャリア計画",
    ko: "프로그램 검색, 대학 탐색, 지원 준비, 생활 적응, 경력 계획",
    de: "Programme suchen, Unis erkunden, Bewerbung vorbereiten, Leben anpassen, Karriere planen",
    it: "Cerca programmi, esplora università, prepara la domanda, adattati alla vita, pianifica la carriera",
    fa: "جستجوی برنامه‌ها، کاوش دانشگاه‌ها، آماده‌سازی درخواست، سازگاری با زندگی، برنامه‌ریزی شغلی",
    tr: "Program ara, üniversiteleri keşfet, başvuru hazırla, hayata uyum sağla, kariyer planla",
    hi: "कार्यक्रम खोजें, विश्वविद्यालय खोजें, आवेदन तैयार करें, जीवन में ढलें, करियर योजना बनाएं"
  },
  search_placeholder: {
    zh: "搜索专业、院校、关键词...", en: "Search programs, universities, keywords...",
    ar: "ابحث عن برامج، جامعات، كلمات...", fr: "Rechercher programmes, universités, mots-clés...",
    es: "Buscar programas, universidades, palabras clave...", ru: "Поиск программ, вузов, ключевых слов...",
    pt: "Pesquisar programas, universidades, palavras-chave...", id: "Cari program, universitas, kata kunci...",
    th: "ค้นหาหลักสูตร มหาวิทยาลัย คำสำคัญ...", vi: "Tìm chương trình, trường, từ khóa...",
    ja: "プログラム、大学、キーワード検索...", ko: "프로그램, 대학, 키워드 검색...",
    de: "Programme, Unis, Stichwörter suchen...", it: "Cerca programmi, università, parole chiave...",
    fa: "جستجوی برنامه‌ها، دانشگاه‌ها، کلمات کلیدی...", tr: "Program, üniversite, anahtar kelime ara...",
    hi: "कार्यक्रम, विश्वविद्यालय, कीवर्ड खोजें..."
  },
  filter_degree: {
    zh: "学历层次", en: "Degree Level", ar: "المستوى الدراسي", fr: "Niveau",
    es: "Nivel", ru: "Уровень", pt: "Nível", id: "Jenjang",
    th: "ระดับ", vi: "Cấp độ", ja: "学位", ko: "학위",
    de: "Abschluss", it: "Livello", fa: "مقطع", tr: "Derece", hi: "डिग्री स्तर"
  },
  filter_major: {
    zh: "专业方向", en: "Major", ar: "التخصص", fr: "Spécialité",
    es: "Especialidad", ru: "Специальность", pt: "Especialidade", id: "Jurusan",
    th: "สาขา", vi: "Chuyên ngành", ja: "専攻", ko: "전공",
    de: "Fach", it: "Specializzazione", fa: "رشته", tr: "Bölüm", hi: "विषय"
  },
  filter_type: {
    zh: "项目类型", en: "Program Type", ar: "نوع البرنامج", fr: "Type",
    es: "Tipo", ru: "Тип", pt: "Tipo", id: "Jenis",
    th: "ประเภท", vi: "Loại", ja: "種類", ko: "종류",
    de: "Typ", it: "Tipo", fa: "نوع", tr: "Tür", hi: "कार्यक्रम प्रकार"
  },
  search_button: {
    zh: "搜索", en: "Search", ar: "بحث", fr: "Rechercher",
    es: "Buscar", ru: "Поиск", pt: "Pesquisar", id: "Cari",
    th: "ค้นหา", vi: "Tìm", ja: "検索", ko: "검색",
    de: "Suchen", it: "Cerca", fa: "جستجو", tr: "Ara", hi: "खोजें"
  },

  // ---------- 底部通用 ----------
  footer_text: {
    zh: "© 2026 Study in China 来华留学一站式服务平台",
    en: "© 2026 Study in China Platform",
    ar: "© 2026 منصة Study in China",
    fr: "© 2026 Plateforme Study in China",
    es: "© 2026 Plataforma Study in China",
    ru: "© 2026 Платформа Study in China",
    pt: "© 2026 Plataforma Study in China",
    id: "© 2026 Platform Study in China",
    th: "© 2026 แพลตฟอร์ม Study in China",
    vi: "© 2026 Nền tảng Study in China",
    ja: "© 2026 Study in China プラットフォーム",
    ko: "© 2026 Study in China 플랫폼",
    de: "© 2026 Study in China Plattform",
    it: "© 2026 Piattaforma Study in China",
    fa: "© 2026 پلتفرم Study in China",
    tr: "© 2026 Study in China Platformu",
    hi: "© 2026 Study in China प्लेटफ़ॉर्म"
  }
};

// ---------- 语言切换函数 ----------
function switchLanguage(lang) {
  if (!translations) return;
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
  // 处理阿拉伯语/波斯语的RTL
  if (lang === 'ar' || lang === 'fa') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
  localStorage.setItem('site_lang', lang);
}

// 页面加载时读取上次语言选择
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site_lang') || 'zh';
  switchLanguage(saved);
});
