// 零延迟无刷新 秒切换17语言 离线全收录版
const langMap = {
    zh: {},
    en: {
        "发现项目":"Discover Programs",
        "探索院校":"Explore Universities",
        "申请指南":"Application Guide",
        "留学中国":"Study in China",
        "资源中心":"Resource Center",
        "发现留学项目":"Discover Study Programs",
        "本科":"Bachelor",
        "硕士":"Master",
        "博士":"PhD",
        "交换生":"Exchange Student",
        "语言进修":"Language Training",
        "短期研学":"Short-term Study Tour",
        "搜索项目、专业、奖学金...":"Search programs, majors, scholarships...",
        "硕士项目":"Master Programs",
        "博士项目":"PhD Programs",
        "交换生项目":"Exchange Programs",
        "短期研学":"Short-term Programs",
        "奖学金项目":"Scholarship Programs",
        "热门专业":"Popular Majors",
        "点击进入查看详情":"Click to view details",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China One-stop Platform"
    },
    ru: {
        "发现项目":"Найти программы",
        "探索院校":"Университеты",
        "申请指南":"Инструкция",
        "留学中国":"Учиться в Китае",
        "资源中心":"Ресурсы",
        "发现留学项目":"Программы обучения",
        "本科":"Бакалавр",
        "硕士":"Магистр",
        "博士":"Доктор",
        "交换生":"Обмен",
        "语言进修":"Языковые курсы",
        "短期研学":"Краткосрочные программы",
        "搜索项目、专业、奖学金...":"Поиск программ, специальностей, стипендий...",
        "硕士项目":"Магистерские программы",
        "博士项目":"Докторские программы",
        "交换生项目":"Программы обмена",
        "短期研学":"Краткосрочные программы",
        "奖学金项目":"Стипендии",
        "热门专业":"Популярные специальности",
        "点击进入查看详情":"Подробнее",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Одноразовая платформа"
    },
    ko: {
        "发现项目":"프로그램 찾기",
        "探索院校":"대학 탐색",
        "申请指南":"신청 가이드",
        "留学中国":"중국 유학",
        "资源中心":"자료 센터",
        "发现留学项目":"유학 프로그램",
        "本科":"학사",
        "硕士":"석사",
        "博士":"박사",
        "交换生":"교환학생",
        "语言进修":"어학연수",
        "短期研学":"단기연수",
        "搜索项目、专业、奖学金...":"프로그램, 전공, 장학금 검색...",
        "硕士项目":"석사 프로그램",
        "博士项目":"박사 프로그램",
        "交换生项目":"교환 프로그램",
        "短期研学":"단기 프로그램",
        "奖学金项目":"장학금 프로그램",
        "热门专业":"인기 전공",
        "点击进入查看详情":"자세히 보기",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China 원스톱 플랫폼"
    },
    ja: {
        "发现项目":"プログラム",
        "探索院校":"大学探し",
        "申请指南":"申込ガイド",
        "留学中国":"中国留学",
        "资源中心":"リソース",
        "发现留学项目":"留学プログラム",
        "本科":"学士",
        "硕士":"修士",
        "博士":"博士",
        "交换生":"交換留学生",
        "语言进修":"語学研修",
        "短期研学":"短期研修",
        "搜索项目、专业、奖学金...":"プログラム、専攻、奨学金を検索...",
        "硕士项目":"修士プログラム",
        "博士项目":"博士プログラム",
        "交换生项目":"交換プログラム",
        "短期研学":"短期プログラム",
        "奖学金项目":"奨学金プログラム",
        "热门专业":"人気専攻",
        "点击进入查看详情":"詳細を見る",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China ワンストッププラットフォーム"
    },
    fr: {
        "发现项目":"Programmes",
        "探索院校":"Universités",
        "申请指南":"Guide",
        "留学中国":"Étudier en Chine",
        "资源中心":"Ressources",
        "发现留学项目":"Programmes d'études",
        "本科":"Licence",
        "硕士":"Master",
        "博士":"Doctorat",
        "交换生":"Étudiant d'échange",
        "语言进修":"Cours de langue",
        "短期研学":"Programmes courts",
        "搜索项目、专业、奖学金...":"Rechercher programmes, spécialités, bourses...",
        "硕士项目":"Programmes de master",
        "博士项目":"Programmes de doctorat",
        "交换生项目":"Programmes d'échange",
        "短期研学":"Programmes courts",
        "奖学金项目":"Bourses d'études",
        "热门专业":"Spécialités populaires",
        "点击进入查看详情":"Voir détails",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plateforme tout-en-un"
    },
    es: {
        "发现项目":"Programas",
        "探索院校":"Universidades",
        "申请指南":"Guía",
        "留学中国":"Estudiar en China",
        "资源中心":"Recursos",
        "发现留学项目":"Programas de estudio",
        "本科":"Grado",
        "硕士":"Máster",
        "博士":"Doctorado",
        "交换生":"Estudiante de intercambio",
        "语言进修":"Cursos de idiomas",
        "短期研学":"Programas cortos",
        "搜索项目、专业、奖学金...":"Buscar programas, especialidades, becas...",
        "硕士项目":"Programas de máster",
        "博士项目":"Programas de doctorado",
        "交换生项目":"Programas de intercambio",
        "短期研学":"Programas cortos",
        "奖学金项目":"Becas",
        "热门专业":"Especialidades populares",
        "点击进入查看详情":"Ver detalles",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plataforma integral"
    },
    de: {
        "发现项目":"Programme",
        "探索院校":"Universitäten",
        "申请指南":"Anleitung",
        "留学中国":"Studieren in China",
        "资源中心":"Ressourcen",
        "发现留学项目":"Studienprogramme",
        "本科":"Bachelor",
        "硕士":"Master",
        "博士":"Promotion",
        "交换生":"Austauschstudent",
        "语言进修":"Sprachkurse",
        "短期研学":"Kurzprogramme",
        "搜索项目、专业、奖学金...":"Suche Programme, Fachrichtungen, Stipendien...",
        "硕士项目":"Master-Programme",
        "博士项目":"Promotionsprogramme",
        "交换生项目":"Austauschprogramme",
        "短期研学":"Kurzprogramme",
        "奖学金项目":"Stipendienprogramme",
        "热门专业":"Beliebte Fachrichtungen",
        "点击进入查看详情":"Details anzeigen",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China All-in-One-Plattform"
    },
    it: {
        "发现项目":"Programmi",
        "探索院校":"Università",
        "申请指南":"Guida",
        "留学中国":"Studiare in Cina",
        "资源中心":"Risorse",
        "发现留学项目":"Programmi di studio",
        "本科":"Laurea",
        "硕士":"Laurea magistrale",
        "博士":"Dottorato",
        "交换生":"Studente di scambio",
        "语言进修":"Corsi di lingua",
        "短期研学":"Programmi brevi",
        "搜索项目、专业、奖学金...":"Cerca programmi, specializzazioni, borse...",
        "硕士项目":"Programmi di laurea magistrale",
        "博士项目":"Programmi di dottorato",
        "交换生项目":"Programmi di scambio",
        "短期研学":"Programmi brevi",
        "奖学金项目":"Borse di studio",
        "热门专业":"Specializzazioni popolari",
        "点击进入查看详情":"Vedi dettagli",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Piattaforma completa"
    },
    pt: {
        "发现项目":"Programas",
        "探索院校":"Universidades",
        "申请指南":"Guia",
        "留学中国":"Estudar na China",
        "资源中心":"Recursos",
        "发现留学项目":"Programas de estudo",
        "本科":"Licenciatura",
        "硕士":"Mestrado",
        "博士":"Doutoramento",
        "交换生":"Estudante de intercâmbio",
        "语言进修":"Cursos de línguas",
        "短期研学":"Programas curtos",
        "搜索项目、专业、奖学金...":"Pesquisar programas, especialidades, bolsas...",
        "硕士项目":"Programas de mestrado",
        "博士项目":"Programas de doutoramento",
        "交换生项目":"Programas de intercâmbio",
        "短期研学":"Programas curtos",
        "奖学金项目":"Bolsas de estudo",
        "热门专业":"Especialidades populares",
        "点击进入查看详情":"Ver detalhes",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Plataforma completa"
    },
    ar: {
        "发现项目":"البرامج",
        "探索院校":"الجامعات",
        "申请指南":"دليل",
        "留学中国":"الدراسة في الصين",
        "资源中心":"الموارد",
        "发现留学项目":"برامج الدراسة",
        "本科":"بكالوريوس",
        "硕士":"ماجستير",
        "博士":"دكتوراه",
        "交换生":"طالب تبادل",
        "语言进修":"دورات لغة",
        "短期研学":"برامج قصيرة",
        "搜索项目、专业、奖学金...":"ابحث عن البرامج والتخصصات والمنح...",
        "硕士项目":"برامج الماجستير",
        "博士项目":"برامج الدكتوراه",
        "交换生项目":"برامج التبادل",
        "短期研学":"برامج قصيرة",
        "奖学金项目":"برامج المنح",
        "热门专业":"التخصصات الشائعة",
        "点击进入查看详情":"عرض التفاصيل",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China منصة شاملة"
    },
    tr: {
        "发现项目":"Programlar",
        "探索院校":"Üniversiteler",
        "申请指南":"Kılavuz",
        "留学中国":"Çin'de Eğitim",
        "资源中心":"Kaynaklar",
        "发现留学项目":"Eğitim Programları",
        "本科":"Lisans",
        "硕士":"Yüksek Lisans",
        "博士":"Doktora",
        "交换生":"Değişim öğrencisi",
        "语言进修":"Dil kursları",
        "短期研学":"Kısa programlar",
        "搜索项目、专业、奖学金...":"Programları, bölümleri, bursları ara...",
        "硕士项目":"Yüksek Lisans Programları",
        "博士项目":"Doktora Programları",
        "交换生项目":"Değişim Programları",
        "短期研学":"Kısa Programlar",
        "奖学金项目":"Burs Programları",
        "热门专业":"Popüler Bölümler",
        "点击进入查看详情":"Detayları gör",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Tek durak platformu"
    },
    th: {
        "发现项目":"โปรแกรม",
        "探索院校":"มหาวิทยาลัย",
        "申请指南":"คู่มือ",
        "留学中国":"เรียนจีน",
        "资源中心":"ทรัพยากร",
        "发现留学项目":"โปรแกรมการศึกษา",
        "本科":"ปริญญาตรี",
        "硕士":"ปริญญาโท",
        "博士":"ปริญญาเอก",
        "交换生":"นักศึกษาแลกเปลี่ยน",
        "语言进修":"คอร์สภาษา",
        "短期研学":"โปรแกรมระยะสั้น",
        "搜索项目、专业、奖学金...":"ค้นหาโปรแกรม สาขา ทุนการศึกษา...",
        "硕士项目":"โปรแกรมปริญญาโท",
        "博士项目":"โปรแกรมปริญญาเอก",
        "交换生项目":"โปรแกรมแลกเปลี่ยน",
        "短期研学":"โปรแกรมระยะสั้น",
        "奖学金项目":"โปรแกรมทุนการศึกษา",
        "热门专业":"สาขายอดนิยม",
        "点击进入查看详情":"ดูรายละเอียด",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China แพลตฟอร์มครบวงจร"
    },
    vi: {
        "发现项目":"Chương trình",
        "探索院校":"Trường đại học",
        "申请指南":"Hướng dẫn",
        "留学中国":"Học tại Trung Quốc",
        "资源中心":"Tài nguyên",
        "发现留学项目":"Chương trình học tập",
        "本科":"Cử nhân",
        "硕士":"Thạc sĩ",
        "博士":"Tiến sĩ",
        "交换生":"Sinh viên trao đổi",
        "语言进修":"Khóa học ngôn ngữ",
        "短期研学":"Chương trình ngắn hạn",
        "搜索项目、专业、奖学金...":"Tìm kiếm chương trình, chuyên ngành, học bổng...",
        "硕士项目":"Chương trình thạc sĩ",
        "博士项目":"Chương trình tiến sĩ",
        "交换生项目":"Chương trình trao đổi",
        "短期研学":"Chương trình ngắn hạn",
        "奖学金项目":"Chương trình học bổng",
        "热门专业":"Chuyên ngành phổ biến",
        "点击进入查看详情":"Xem chi tiết",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Nền tảng toàn diện"
    },
    id: {
        "发现项目":"Program",
        "探索院校":"Universitas",
        "申请指南":"Panduan",
        "留学中国":"Belajar di Tiongkok",
        "资源中心":"Sumber Daya",
        "发现留学项目":"Program Studi",
        "本科":"Sarjana",
        "硕士":"Magister",
        "博士":"Doktor",
        "交换生":"Mahasiswa pertukaran",
        "语言进修":"Kursus bahasa",
        "短期研学":"Program singkat",
        "搜索项目、专业、奖学金...":"Cari program, jurusan, beasiswa...",
        "硕士项目":"Program Magister",
        "博士项目":"Program Doktor",
        "交换生项目":"Program Pertukaran",
        "短期研学":"Program Singkat",
        "奖学金项目":"Program Beasiswa",
        "热门专业":"Jurusan populer",
        "点击进入查看详情":"Lihat detail",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Platform terintegrasi"
    },
    ms: {
        "发现项目":"Program",
        "探索院校":"Universiti",
        "申请指南":"Panduan",
        "留学中国":"Belajar di China",
        "资源中心":"Sumber",
        "发现留学项目":"Program Pengajian",
        "本科":"Ijazah sarjana muda",
        "硕士":"Ijazah sarjana",
        "博士":"Ijazah doktor",
        "交换生":"Pelajar pertukaran",
        "语言进修":"Kursus bahasa",
        "短期研学":"Program pendek",
        "搜索项目、专业、奖学金...":"Cari program, jurusan, biasiswa...",
        "硕士项目":"Program Sarjana",
        "博士项目":"Program Doktor",
        "交换生项目":"Program Pertukaran",
        "短期研学":"Program Pendek",
        "奖学金项目":"Program Biasiswa",
        "热门专业":"Jurusan popular",
        "点击进入查看详情":"Lihat butiran",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Platform bersepadu"
    },
    fa: {
        "发现项目":"برنامه‌ها",
        "探索院校":"دانشگاه‌ها",
        "申请指南":"راهنما",
        "留学中国":"تحصیل در چین",
        "资源中心":"منابع",
        "发现留学项目":"برنامه‌های تحصیلی",
        "本科":"کارشناسی",
        "硕士":"کارشناسی ارشد",
        "博士":"دکتری",
        "交换生":"دانشجوی تبادل",
        "语言进修":"دوره‌های زبان",
        "短期研学":"برنامه‌های کوتاه",
        "搜索项目、专业、奖学金...":"جستجوی برنامه‌ها، رشته‌ها، بورس‌ها...",
        "硕士项目":"برنامه‌های کارشناسی ارشد",
        "博士项目":"برنامه‌های دکتری",
        "交换生项目":"برنامه‌های تبادل",
        "短期研学":"برنامه‌های کوتاه",
        "奖学金项目":"برنامه‌های بورسیه",
        "热门专业":"رشته‌های پرطرفدار",
        "点击进入查看详情":"مشاهده جزئیات",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China پلتفرم یکپارچه"
    }
};

// 读取保存的语言
let currentLang = localStorage.getItem('lang') || 'zh';

// 核心：无刷新、秒切换翻译函数
function translatePage(lang) {
    if (lang === 'zh') {
        // 切回中文时，直接刷新页面恢复原文（最简单的处理）
        location.reload();
        return;
    }
    const dict = langMap[lang];
    if (!dict) return;

    // 遍历所有文本节点，批量替换
    const walk = (node) => {
        if (node.nodeType === 3) { // 文本节点
            let text = node.textContent;
            for (let cn in dict) {
                if (text.includes(cn)) {
                    text = text.replaceAll(cn, dict[cn]);
                }
            }
            node.textContent = text;
        } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
            // 遍历子节点
            for (let child of node.childNodes) {
                walk(child);
            }
            // 处理输入框placeholder
            if (node.placeholder) {
                for (let cn in dict) {
                    if (node.placeholder.includes(cn)) {
                        node.placeholder = node.placeholder.replaceAll(cn, dict[cn]);
                    }
                }
            }
        }
    };
    walk(document.body);
}

// 页面加载初始化
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('langSelect');
    if (select) {
        // 设置下拉框当前值
        select.value = currentLang;
        // 切换语言时立刻翻译，不刷新
        select.onchange = function() {
            currentLang = this.value;
            localStorage.setItem('lang', currentLang);
            translatePage(currentLang);
        };
    }
    // 页面加载时自动翻译保存的语言
    translatePage(currentLang);
});
