// 三重保险版：谷歌+百度+离线 全覆盖 秒切换
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
        "点击进入维护内容":"Click to maintain content",
        "点击查看详情":"Click to view details",
        "资源中心":"Resource Center",
        "官方直达 | 表格模板 | 工具合集 | 政策数据 | 紧急联系":"Official Links | Templates | Tools | Policies | Contacts",
        "官方网站直达":"Official Website Links",
        "常用表格模板":"Common Form Templates",
        "学习生活工具":"Study & Life Tools",
        "政策数据查询":"Policy & Data Query",
        "紧急联系方式":"Emergency Contacts",
        "留学生活指南":"Student Life Guide",
        "住宿 | 出行 | 饮食 | 购物 | 通讯支付 | 社交文化 | 医疗健康 | 校园活动":"Accommodation | Transport | Food | Shopping | Payment | Culture | Health | Campus",
        "住宿指南":"Accommodation Guide",
        "出行交通":"Transportation Guide",
        "饮食美食":"Food & Dining",
        "购物指南":"Shopping Guide",
        "通讯支付":"Communication & Payment",
        "社交文化":"Social & Culture",
        "医疗健康":"Healthcare Guide",
        "校园活动":"Campus Activities",
        "来华留学申请指南":"Study in China Application Guide",
        "免费咨询":"Free Consultation",
        "搜索申请相关内容, 如: 材料、签证、奖学金...":"Search for application info: materials, visas, scholarships...",
        "一、选校选专业":"1. Choose University & Major",
        "二、申请时间线":"2. Application Timeline",
        "三、在线申请操作":"3. Online Application",
        "四、申请材料准备":"4. Prepare Documents",
        "五、材料翻译公证":"5. Document Translation & Notarization",
        "六、文书写作指南":"6. Essay Writing Guide",
        "七、奖学金申请":"7. Scholarship Application",
        "八、入学面试准备":"8. Admission Interview Prep",
        "九、录取后续手续":"9. Post-Admission Procedures",
        "十、签证办理流程":"10. Visa Application Process",
        "十一、行前入境指南":"11. Pre-Departure Guide",
        "十二、常见问题FAQ":"12. FAQ",
        "探索国内院校":"Explore Chinese Universities",
        "双一流 | 公办本科 | 特色院校 | 财经理工 | 医药艺术 | 师范":"Double First-Class | Public | Finance & Tech | Medical & Art | Normal",
        "搜索大学、院校类型、地区...":"Search universities, types, regions...",
        "双一流大学":"Double First-Class Universities",
        "公办本科院校":"Public Undergraduate Universities",
        "理工类院校":"Science & Engineering Universities",
        "财经类院校":"Finance & Economics Universities",
        "医药类院校":"Medical Universities",
        "艺术类院校":"Art Universities",
        "师范类院校":"Normal Universities",
        "按地区选校":"Find Universities by Region",
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
        "点击进入维护内容":"Подробнее",
        "点击查看详情":"Подробнее",
        "资源中心":"Ресурсы",
        "官方直达 | 表格模板 | 工具合集 | 政策数据 | 紧急联系":"Официальные ссылки | Шаблоны | Инструменты | Данные | Контакты",
        "官方网站直达":"Официальные сайты",
        "常用表格模板":"Шаблоны форм",
        "学习生活工具":"Инструменты для учебы и жизни",
        "政策数据查询":"Поиск политики и данных",
        "紧急联系方式":"Экстренные контакты",
        "留学生活指南":"Гид по жизни студента",
        "住宿 | 出行 | 饮食 | 购物 | 通讯支付 | 社交文化 | 医疗健康 | 校园活动":"Проживание | Транспорт | Еда | Покупки | Оплата | Культура | Здоровье | Мероприятия",
        "住宿指南":"Гид по проживанию",
        "出行交通":"Транспорт",
        "饮食美食":"Еда и напитки",
        "购物指南":"Покупки",
        "通讯支付":"Связь и оплата",
        "社交文化":"Культура и общение",
        "医疗健康":"Здоровье",
        "校园活动":"Мероприятия в кампусе",
        "来华留学申请指南":"Инструкция по поступлению в Китай",
        "免费咨询":"Бесплатная консультация",
        "搜索申请相关内容, 如: 材料、签证、奖学金...":"Поиск информации о заявке: документы, визы, стипендии...",
        "一、选校选专业":"1. Выбор университета и специальности",
        "二、申请时间线":"2. Временная линия заявки",
        "三、在线申请操作":"3. Онлайн-заявка",
        "四、申请材料准备":"4. Подготовка документов",
        "五、材料翻译公证":"5. Перевод и нотариальное заверение",
        "六、文书写作指南":"6. Гид по написанию эссе",
        "七、奖学金申请":"7. Заявка на стипендию",
        "八、入学面试准备":"8. Подготовка к собеседованию",
        "九、录取后续手续":"9. Процедуры после зачисления",
        "十、签证办理流程":"10. Процесс получения визы",
        "十一、行前入境指南":"11. Гид перед отъездом",
        "十二、常见问题FAQ":"12. Часто задаваемые вопросы",
        "探索国内院校":"Китайские университеты",
        "双一流 | 公办本科 | 特色院校 | 财经理工 | 医药艺术 | 师范":"Двойной класс | Государственные вузы | Финансы и техника | Медицина и искусство | Педагогические вузы",
        "搜索大学、院校类型、地区...":"Поиск вузов, типов, регионов...",
        "双一流大学":"Вузы двойного класса",
        "公办本科院校":"Государственные вузы",
        "理工类院校":"Технические вузы",
        "财经类院校":"Экономические вузы",
        "医药类院校":"Медицинские вузы",
        "艺术类院校":"Художественные вузы",
        "师范类院校":"Педагогические вузы",
        "按地区选校":"Выбор вуза по региону",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China Платформа для иностранных студентов"
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
        "点击进入维护内容":"관리 내용으로 이동",
        "点击查看详情":"자세히 보기",
        "资源中心":"자료 센터",
        "官方直达 | 表格模板 | 工具合集 | 政策数据 | 紧急联系":"공식 링크 | 템플릿 | 도구 | 정책 데이터 | 연락처",
        "官方网站直达":"공식 웹사이트 링크",
        "常用表格模板":"자주 쓰는 양식 템플릿",
        "学习生活工具":"학습 및 생활 도구",
        "政策数据查询":"정책 및 데이터 조회",
        "紧急联系方式":"긴급 연락처",
        "留学生活指南":"유학생 생활 가이드",
        "住宿 | 出行 | 饮食 | 购物 | 通讯支付 | 社交文化 | 医疗健康 | 校园活动":"숙소 | 교통 | 음식 | 쇼핑 | 결제 | 문화 | 건강 | 캠퍼스 활동",
        "住宿指南":"숙소 가이드",
        "出行交通":"교통 안내",
        "饮食美食":"음식 및 식당",
        "购物指南":"쇼핑 가이드",
        "通讯支付":"통신 및 결제",
        "社交文化":"사회 및 문화",
        "医疗健康":"건강 및 의료",
        "校园活动":"캠퍼스 활동",
        "来华留学申请指南":"중국 유학 신청 가이드",
        "免费咨询":"무료 상담",
        "搜索申请相关内容, 如: 材料、签证、奖学金...":"신청 정보 검색: 서류, 비자, 장학금...",
        "一、选校选专业":"1. 대학 및 전공 선택",
        "二、申请时间线":"2. 신청 타임라인",
        "三、在线申请操作":"3. 온라인 신청",
        "四、申请材料准备":"4. 서류 준비",
        "五、材料翻译公证":"5. 서류 번역 및 공증",
        "六、文书写作指南":"6. 에세이 작성 가이드",
        "七、奖学金申请":"7. 장학금 신청",
        "八、入学面试准备":"8. 입학 면접 준비",
        "九、录取后续手续":"9. 합격 후 절차",
        "十、签证办理流程":"10. 비자 발급 절차",
        "十一、行前入境指南":"11. 출국 전 가이드",
        "十二、常见问题FAQ":"12. 자주 묻는 질문",
        "探索国内院校":"중국 대학 탐색",
        "双一流 | 公办本科 | 特色院校 | 财经理工 | 医药艺术 | 师范":"쌍일류 | 공립 대학 | 특성화 대학 | 경제공과 | 의예예술 | 사범대학",
        "搜索大学、院校类型、地区...":"대학, 유형, 지역 검색...",
        "双一流大学":"쌍일류 대학",
        "公办本科院校":"공립 대학",
        "理工类院校":"이공계 대학",
        "财经类院校":"경제대학",
        "医药类院校":"의과대학",
        "艺术类院校":"예술대학",
        "师范类院校":"사범대학",
        "按地区选校":"지역별 대학 찾기",
        "© 2026 Study in China 来华留学一站式平台":"© 2026 Study in China 유학생 원스톱 플랫폼"
    }
};

// 读取保存的语言
let currentLang = localStorage.getItem('lang') || 'zh';

// 核心：无刷新、秒切换翻译函数
function translatePage(lang) {
    if (lang === 'zh') {
        // 切回中文时，直接刷新页面恢复原文
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
