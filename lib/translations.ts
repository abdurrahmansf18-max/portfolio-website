export type Language = "en" | "tr" | "ar"

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      title: "Abdurrahman El Savvaf",
      subtitle: "Full Stack Developer",
      description:
        "Building scalable web applications with Python, .NET, React and Next.js. Passionate about creating modern and user-focused solutions.",
      contactMe: "Get In Touch",
      downloadCV: "Download CV",
      viewProjects: "View My Work",
      typingTexts: ["Full Stack Developer", "Backend Engineer", "Frontend Developer", "Problem Solver"],
    },
    // Stats
    stats: {
      experience: "Year Experience",
      projects: "Projects Completed",
      clients: "Happy Clients",
    },
    // About Section
    about: {
      title: "About Me",
      bio: `I'm a passionate Software Engineer and Full Stack Developer currently living in Ankara, Turkiye. Originally from Syria, I graduated with a degree in Software Engineering from Ostim Technical University.

Throughout my career, I have worked as a Full Stack Developer, gaining hands-on experience in both backend and frontend development, as well as server management. I completed a 1-year internship at Rakort company, where I honed my skills in real-world projects.

I have also developed and sold a professional website for a real client: ergunnakliyatevdeneve.com, demonstrating my ability to deliver production-ready solutions.

When I'm not coding, I enjoy learning new technologies and working on freelance projects that challenge me to grow.`,
      location: "Ankara, Turkiye",
      education: "Ostim Technical University",
      experience: "Rakort (1 Year Internship)",
      realProject: "Real Client Project",
      realProjectDesc: "Developed and sold a professional website for a real client",
    },
    // Skills Section
    skills: {
      title: "Technical Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & Hosting",
        databases: "Database",
        tools: "Tools & Others",
        languages: "Additional Languages",
        spoken: "Spoken Languages",
      },
      spokenLevels: {
        turkish: "Turkish (Very Good)",
        arabic: "Arabic (Very Good)",
        english: "English (A2)",
      },
    },
    // Projects Section
    projects: {
      title: "Featured Projects",
      viewProject: "Live Demo",
      viewCode: "Source Code",
      technologies: "Technologies:",
      keyFeatures: "Key Features:",
    },
    // Contact Section
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Your message...",
      },
      info: {
        phone: "Phone",
        email: "Email",
        location: "Location",
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved",
      developer: "Full Stack Developer",
    },
  },
  tr: {
    // Navbar
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim",
    },
    // Hero Section
    hero: {
      greeting: "Merhaba, Ben",
      title: "Abdurrahman El Savvaf",
      subtitle: "Full Stack Geliştirici",
      description:
        "Python, .NET, React ve Next.js ile ölçeklenebilir web uygulamaları geliştiriyorum. Modern ve kullanıcı odaklı çözümler oluşturmaya tutkulu.",
      contactMe: "İletişime Geç",
      downloadCV: "CV İndir",
      viewProjects: "Çalışmalarımı Gör",
      typingTexts: ["Full Stack Geliştirici", "Backend Mühendisi", "Frontend Geliştirici", "Problem Çözücü"],
    },
    // Stats
    stats: {
      experience: "Yıl Deneyim",
      projects: "Tamamlanan Proje",
      clients: "Mutlu Müşteri",
    },
    // About Section
    about: {
      title: "Hakkımda",
      bio: `Şu anda Ankara, Türkiye'de yaşayan tutkulu bir Yazılım Mühendisi ve Full Stack Geliştiriciyim. Suriye kökenli olup, Ostim Teknik Üniversitesi'nden Yazılım Mühendisliği diploması ile mezun oldum.

Kariyerim boyunca Full Stack Geliştirici olarak çalışarak hem backend hem de frontend geliştirme ile sunucu yönetimi konularında uygulamalı deneyim kazandım. Rakort şirketinde 1 yıllık staj programını tamamladım ve gerçek dünya projelerinde becerilerimi geliştirdim.

Ayrıca gerçek bir müşteri için profesyonel bir web sitesi geliştirdim ve sattım: ergunnakliyatevdeneve.com, bu da üretime hazır çözümler sunma yeteneğimi göstermektedir.

Kod yazmadığım zamanlarda, yeni teknolojiler öğrenmekten ve beni geliştiren freelance projeler üzerinde çalışmaktan keyif alıyorum.`,
      location: "Ankara, Türkiye",
      education: "Ostim Teknik Üniversitesi",
      experience: "Rakort (1 Yıllık Staj)",
      realProject: "Gerçek Müşteri Projesi",
      realProjectDesc: "Gerçek bir müşteri için profesyonel bir web sitesi geliştirdim ve sattım",
    },
    // Skills Section
    skills: {
      title: "Teknik Yetenekler",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & Hosting",
        databases: "Veritabanı",
        tools: "Araçlar & Diğer",
        languages: "Ek Diller",
        spoken: "Konuşulan Diller",
      },
      spokenLevels: {
        turkish: "Türkçe (Çok İyi)",
        arabic: "Arapça (Çok İyi)",
        english: "İngilizce (A2)",
      },
    },
    // Projects Section
    projects: {
      title: "Öne Çıkan Projeler",
      viewProject: "Canlı Demo",
      viewCode: "Kaynak Kod",
      technologies: "Teknolojiler:",
      keyFeatures: "Temel Özellikler:",
    },
    // Contact Section
    contact: {
      title: "İletişime Geçin",
      subtitle: "Birlikte çalışalım",
      description:
        "Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma fırsatları hakkında konuşmaya her zaman açığım. İletişime geçmekten çekinmeyin!",
      form: {
        name: "Ad",
        email: "E-posta",
        message: "Mesaj",
        send: "Mesaj Gönder",
        namePlaceholder: "Adınız",
        emailPlaceholder: "email@adresiniz.com",
        messagePlaceholder: "Mesajınız...",
      },
      info: {
        phone: "Telefon",
        email: "E-posta",
        location: "Konum",
      },
    },
    // Footer
    footer: {
      rights: "Tüm hakları saklıdır",
      developer: "Full Stack Geliştirici",
    },
  },
  ar: {
    // Navbar
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "التواصل",
    },
    // Hero Section
    hero: {
      greeting: "مرحباً، أنا",
      title: "عبد الرحمن الشواف",
      subtitle: "مطور Full Stack",
      description:
        "أقوم ببناء تطبيقات ويب قابلة للتوسع باستخدام Python و .NET و React و Next.js. شغوف بإنشاء حلول حديثة تركز على المستخدم.",
      contactMe: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      viewProjects: "عرض أعمالي",
      typingTexts: ["مطور Full Stack", "مهندس Backend", "مطور Frontend", "حلّال مشاكل"],
    },
    // Stats
    stats: {
      experience: "سنة خبرة",
      projects: "مشروع مكتمل",
      clients: "عميل سعيد",
    },
    // About Section
    about: {
      title: "عني",
      bio: `أنا مهندس برمجيات ومطور Full Stack شغوف أعيش حالياً في أنقرة، تركيا. سوري الأصل، تخرجت بدرجة في هندسة البرمجيات من جامعة أوستيم التقنية.

طوال مسيرتي المهنية، عملت كمطور Full Stack، واكتسبت خبرة عملية في تطوير الواجهة الخلفية والأمامية، بالإضافة إلى إدارة الخوادم. أكملت تدريباً لمدة عام في شركة Rakort، حيث صقلت مهاراتي في المشاريع الحقيقية.

كما قمت بتطوير وبيع موقع ويب احترافي لعميل حقيقي: ergunnakliyatevdeneve.com، مما يدل على قدرتي على تقديم حلول جاهزة للإنتاج.

عندما لا أكتب الكود، أستمتع بتعلم التقنيات الجديدة والعمل على مشاريع حرة تتحداني للنمو.`,
      location: "أنقرة، تركيا",
      education: "جامعة أوستيم التقنية",
      experience: "Rakort (تدريب 1 سنة)",
      realProject: "مشروع عميل حقيقي",
      realProjectDesc: "قمت بتطوير وبيع موقع ويب احترافي لعميل حقيقي",
    },
    // Skills Section
    skills: {
      title: "المهارات التقنية",
      categories: {
        backend: "الواجهة الخلفية",
        frontend: "الواجهة الأمامية",
        devops: "DevOps والاستضافة",
        databases: "قواعد البيانات",
        tools: "الأدوات والمزيد",
        languages: "لغات إضافية",
        spoken: "اللغات المحكية",
      },
      spokenLevels: {
        turkish: "التركية (جيد جداً)",
        arabic: "العربية (جيد جداً)",
        english: "الإنجليزية (A2)",
      },
    },
    // Projects Section
    projects: {
      title: "المشاريع المميزة",
      viewProject: "عرض مباشر",
      viewCode: "الكود المصدري",
      technologies: "التقنيات:",
      keyFeatures: "الميزات الرئيسية:",
    },
    // Contact Section
    contact: {
      title: "تواصل معي",
      subtitle: "لنعمل معاً",
      description:
        "أنا دائماً منفتح لمناقشة المشاريع الجديدة والأفكار الإبداعية أو فرص المشاركة في رؤيتك. لا تتردد في التواصل!",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك@الإلكتروني.com",
        messagePlaceholder: "رسالتك...",
      },
      info: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        location: "الموقع",
      },
    },
    // Footer
    footer: {
      rights: "جميع الحقوق محفوظة",
      developer: "مطور Full Stack",
    },
  },
} as const

export type TranslationKey = keyof typeof translations.en
