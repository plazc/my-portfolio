import { FaLinux, FaDocker, FaPython } from "react-icons/fa";
import { SiKubernetes, SiAnsible, SiTerraform, SiGnubash, SiGit, SiJenkins, SiPrometheus } from "react-icons/si";

export type ResumeData = typeof resumeEn;

const resumeEn = {
    name: "Ahmet Zekeriya Devran",
    title: "Electrical and Electronics Eng. Student",
    contact: {
        location: "Maltepe, Istanbul",
        email: "ahmetzdevran@gmail.com",
        linkedin: "https://linkedin.com/in/adevran",
        github: "https://github.com/azdevran",
        avatarUrl: "/me.jpg"
    },
    about: "Self-host enjoyer, optimization addict. Oriented to software integration and Linux, improving team skills for all-out works. Learning Devops fundamentals and prepares himself for this area.",
    expertise: [
        { name: "Linux", icon: FaLinux },
        { name: "Orchestration", icon: SiKubernetes },
        { name: "Automation", icon: SiAnsible },
        { name: "Team work", icon: null }, // General skill
        { name: "Server systems", icon: FaDocker }, // Using Docker as proxy for systems
        { name: "FinOps", icon: null },
    ],
    techStack: [
        { name: "Linux", icon: FaLinux },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Python", icon: FaPython },
        { name: "Bash", icon: SiGnubash },
        { name: "Git", icon: SiGit },
        { name: "Terraform", icon: SiTerraform },
        { name: "Prometheus", icon: SiPrometheus },
    ],
    keyAchievements: [
        "Self-Learning: Linux, AI Server Automation with Python, Docker, Orchestration practices with minikube.",
        "Internships at some official companies such as ALARKO and TÜBİTAK.",
        "University communities: Joined IEEE Marmara as a board member and set organizations for 300+ students."
    ],
    experience: [
        {
            title: "Basics of Open Source, Server, Network, Docker etc. (Self-Learn)",
            period: "Feb 2024 - Present",
            description: [
                "Installed my own personal blog for a year named \"zdevran.com\", ran it in my old pc without server costs. Then I closed it and now setting up new one, named \"ahmet.se\".",
                "Still trying to create some minimal media to learn orchestration with minikube."
            ]
        },
        {
            title: "Community Activities Organizing",
            period: "Oct 2022 - Present",
            description: [
                "Planned main event and organized team as a Community Leader.",
                "Met with guests and reorganized event for their availability.",
                "Implementing the plan correctly and helped participants to benefit from guests as much as they can."
            ]
        },
        {
            title: "Project-based Teams and Competition Participation",
            period: "Feb 2021 - May 2023",
            description: [
                "Joined project-based teams in university. Such as UAV Drone Design Comp. and Hyperloop Design Comp.",
                "Saw hard part of the team working and learned how to set up the psychology and mental health for healthy procession."
            ]
        },
    ],
    education: {
        degree: "Bachelor of Electrical and Electronics Engineering",
        school: "Marmara University",
        period: "Oct 2021 - Jun 2026",
        details: [
            "Relevant coursework in Electrical and Electronics Engineering"
        ]
    },
    nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        education: "Education",
        connect: "Connect",
        photos: "Photos"
    },
    ui: {
        expertise: "Expertise",
        techStack: "Tech Stack",
        experience: "Experience",
        education: "Education",
        keyAchievements: "Key Achievements",
        footer: "Built with Next.js & Tailwind"
    }
};

const resumeTr: ResumeData = {
    ...resumeEn,
    title: "Elektrik ve Elektronik Müh. Öğrencisi",
    contact: {
        ...resumeEn.contact,
        location: "Maltepe, İstanbul"
    },
    about: "Self-host meraklısı, optimizasyon tutkunu. Yazılım entegrasyonu ve Linux odaklı, takım çalışması becerilerini geliştiren bir mühendis adayı. DevOps temellerini öğreniyor ve kendini bu alana hazırlıyor.",
    expertise: [
        { name: "Linux", icon: FaLinux },
        { name: "Orkestrasyon", icon: SiKubernetes },
        { name: "Otomasyon", icon: SiAnsible },
        { name: "Takım Çalışması", icon: null },
        { name: "Sunucu Sistemleri", icon: FaDocker },
        { name: "FinOps", icon: null },
    ],
    keyAchievements: [
        "Kendi Kendine Öğrenme: Linux, Python ile Yapay Zeka Sunucu Otomasyonu, Docker, minikube ile orkestrasyon pratikleri yaptım.",
        "ALARKO ve TÜBİTAK gibi kurumsal şirketlerde staj yapma fırsatı buldum.",
        "Üniversite toplulukları: IEEE Marmara yönetim kurulu üyesi olarak 300+ öğrenci için organizasyonlar düzenledim."
    ],
    experience: [
        {
            title: "Açık Kaynak, Sunucu, Ağ, Docker Temelleri (Kendi Kendine)",
            period: "Şub 2024 - Günümüz",
            description: [
                "\"zdevran.com\" adında kişisel blogumu kurdum, bir yıl boyunca eski bilgisayarımda sunucu maliyeti olmadan çalıştırdım. Sonra kapattım ve şimdi \"ahmet.se\" adında yenisini kuruyorum.",
                "Minikube ile orkestrasyon öğrenmek için minimal ortamlar oluşturmaya çalışıyorum."
            ]
        },
        {
            title: "Topluluk Aktiviteleri Organizasyonu",
            period: "Ekim 2022 - Günümüz",
            description: [
                "Topluluk Lideri olarak ana etkinliği planladım ve ekibi organize ettim.",
                "Konuklarla görüşüp etkinliği onların uygunluğuna göre yeniden düzenledim.",
                "Planı doğru bir şekilde uyguladım ve katılımcıların konuklardan en iyi şekilde yararlanmasına yardımcı oldum."
            ]
        },
        {
            title: "Proje Tabanlı Takımlar ve Yarışma Katılımı",
            period: "Şub 2021 - May 2023",
            description: [
                "Üniversitede İHA Tasarım Yarışması ve Hyperloop Tasarım Yarışması gibi proje tabanlı takımlara katıldım.",
                "Takım çalışmasının zorlu yanlarını gördüm ve sağlıklı bir süreç için psikolojiyi nasıl yöneteceğimi öğrendim. Ekiplerarası iletişimin önemini gördüm."
            ]
        },
    ],
    education: {
        degree: "Elektrik ve Elektronik Mühendisliği Lisans",
        school: "Marmara Üniversitesi",
        period: "Ekim 2021 - Haz 2026",
        details: [
            "Elektrik-Elektronik Mühendisliğine ait temelleri öğrendim."
        ]
    },
    nav: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        experience: "Deneyim",
        education: "Eğitim",
        connect: "İletişim",
        photos: "Fotoğraflar"
    },
    ui: {
        expertise: "Uzmanlıklar",
        techStack: "Teknolojiler",
        experience: "Deneyim",
        education: "Eğitim",
        keyAchievements: "Başarılar",
        footer: "Next.js & Tailwind ile geliştirildi"
    }
};

const resumeRu: ResumeData = {
    ...resumeEn,
    title: "Студент электротехники и электроники",
    contact: {
        ...resumeEn.contact,
        location: "Малтепе, Стамбул"
    },
    about: "Любитель self-hosting, фанат оптимизации. Ориентирован на интеграцию ПО и Linux, улучшаю командные навыки для масштабных работ. Изучаю основы DevOps и готовлюсь к этой сфере.",
    expertise: [
        { name: "Linux", icon: FaLinux },
        { name: "Оркестрация", icon: SiKubernetes },
        { name: "Автоматизация", icon: SiAnsible },
        { name: "Командная работа", icon: null },
        { name: "Серверные системы", icon: FaDocker },
        { name: "FinOps", icon: null },
    ],
    keyAchievements: [
        "Самообучение: Linux, автоматизация AI серверов на Python, Docker, практики оркестрации с minikube.",
        "Стажировки в официальных компаниях, таких как ALARKO и TÜBİTAK.",
        "Университетские сообщества: Член правления IEEE Marmara, организация мероприятий для 300+ студентов."
    ],
    experience: [
        {
            title: "Основы Open Source, Серверов, Сетей, Docker (Самообучение)",
            period: "Фев 2024 - Наст. время",
            description: [
                "Установил личный блог \"zdevran.com\", год держал его на старом ПК без затрат на сервер. Сейчас настраиваю новый \"ahmet.se\".",
                "Пытаюсь создать минимальную среду для изучения оркестрации с minikube."
            ]
        },
        {
            title: "Организация деятельности сообщества",
            period: "Окт 2022 - Наст. время",
            description: [
                "Планировал главное событие и организовывал команду как лидер сообщества.",
                "Встречался с гостями и перестраивал мероприятие под их график.",
                "Корректно реализовал план и помог участникам получить максимум пользы от гостей."
            ]
        },
        {
            title: "Проектные команды и участие в соревнованиях",
            period: "Фев 2021 - Май 2023",
            description: [
                "Участвовал в проектных командах университета: конкурс дизайна БПЛА и Hyperloop.",
                "Увидел сложности командной работы и научился настраивать психологию для здорового процесса."
            ]
        },
    ],
    education: {
        degree: "Бакалавр электротехники и электроники",
        school: "Университет Мармара",
        period: "Окт 2021 - Июн 2026",
        details: [
            "Пройдены базовые курсы электронной инженерии."
        ]
    },
    nav: {
        home: "Главная",
        about: "Обо мне",
        experience: "Опыт",
        education: "Образование",
        connect: "Контакты",
        photos: "Фотографии"
    },
    ui: {
        expertise: "Экспертиза",
        techStack: "Стек технологий",
        experience: "Опыт работы",
        education: "Образование",
        keyAchievements: "Достижения",
        footer: "Создано на Next.js & Tailwind"
    }
};

const resumeSv: ResumeData = {
    ...resumeEn,
    title: "Student inom Elektroteknik och Elektronik",
    contact: {
        ...resumeEn.contact,
        location: "Maltepe, Istanbul"
    },
    about: "Entusiast av self-hosting, beroende av optimering. Inriktad på mjukvaruintegration och Linux, förbättrar teamfärdigheter för omfattande arbeten. Lär sig DevOps-grunder och förbereder sig för detta område.",
    expertise: [
        { name: "Linux", icon: FaLinux },
        { name: "Orkestrering", icon: SiKubernetes },
        { name: "Automation", icon: SiAnsible },
        { name: "Lagarbete", icon: null },
        { name: "Serversystem", icon: FaDocker },
        { name: "FinOps", icon: null },
    ],
    keyAchievements: [
        "Självlärande: Linux, AI-serverautomation med Python, Docker, orkestreringsövningar med minikube.",
        "Praktikplatser på officiella företag som ALARKO och TÜBİTAK.",
        "Universitetsföreningar: Gick med i IEEE Marmara som styrelseledamot och organiserade evenemang för 300+ studenter."
    ],
    experience: [
        {
            title: "Grunder inom Open Source, Server, Nätverk, Docker etc. (Självlärd)",
            period: "Feb 2024 - Nuvarande",
            description: [
                "Installerade min egen personliga blogg i ett år med namnet \"zdevran.com\", körde den på min gamla dator utan serverkostnader. Sedan stängde jag den och sätter nu upp en ny vid namn \"ahmet.se\".",
                "Försöker fortfarande skapa minimala miljöer för att lära mig orkestrering med minikube."
            ]
        },
        {
            title: "Organisering av Gemenskapsaktiviteter",
            period: "Okt 2022 - Nuvarande",
            description: [
                "Planerade huvudevenemanget och organiserade teamet som gemenskapsledare.",
                "Träffade gäster och omorganiserade evenemanget efter deras tillgänglighet.",
                "Implementerade planen korrekt och hjälpte deltagarna att dra nytta av gästerna så mycket som möjligt."
            ]
        },
        {
            title: "Projektbaserade Team och Tävlingsdeltagande",
            period: "Feb 2021 - Maj 2023",
            description: [
                "Gick med i projektbaserade team på universitetet. Såsom UAV Drone Design Comp. och Hyperloop Design Comp.",
                "Såg den svåra delen av teamarbetet och lärde mig hur man hanterar psykologi och mental hälsa för en hälsosam process. Såg vikten av kommunikation mellan team."
            ]
        },
    ],
    education: {
        degree: "Kandidatexamen i Elektroteknik och Elektronik",
        school: "Marmara University",
        period: "Okt 2021 - Jun 2026",
        details: [
            "Relevanta kurser inom Elektroteknik och Elektronik"
        ]
    },
    nav: {
        home: "Hem",
        about: "Om mig",
        experience: "Erfarenhet",
        education: "Utbildning",
        connect: "Kontakt",
        photos: "Foton"
    },
    ui: {
        expertise: "Expertis",
        techStack: "Teknikstack",
        experience: "Erfarenhet",
        education: "Utbildning",
        keyAchievements: "Nyckelprestationer",
        footer: "Byggd med Next.js & Tailwind"
    }
};

export const dictionaries = {
    en: resumeEn,
    tr: resumeTr,
    ru: resumeRu,
    sv: resumeSv
};
