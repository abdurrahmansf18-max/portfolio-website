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
      title: "Abdurrahman El Savvaf",
      subtitle: "Full Stack Developer",
      description:
        "I develop modern, scalable and user-focused web applications using backend, frontend and server technologies.",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
    },
    // About Section
    about: {
      title: "About Me",
      bio: `I am a Full Stack Developer currently living in Ankara, Türkiye. Originally from Syria, I graduated with a degree in Software Engineering from Ostim Technical University.

Throughout my career, I have worked as a Full Stack Developer, gaining hands-on experience in both backend and frontend development, as well as server management. I completed a 1-year internship at Rakort company, where I honed my skills in real-world projects.

I have also developed and sold a professional website for a real client: ergunnakliyatevdeneve.com, demonstrating my ability to deliver production-ready solutions.

I am a motivated, disciplined, and solution-oriented developer who is continuously improving my technical skills and staying up-to-date with the latest technologies.`,
    },
    // Skills Section
    skills: {
      title: "Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps / Hosting",
        databases: "Databases",
        tools: "Tools",
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
      title: "Projects",
      placeholder: "Projects will be added soon",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    // Contact Section
    contact: {
      title: "Contact",
      subtitle: "Get in touch",
      description:
        "Feel free to reach out to me for any inquiries or collaboration opportunities.",
      form: {
        name: "Full Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        messagePlaceholder: "Write your message here...",
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
      title: "Abdurrahman El Savvaf",
      subtitle: "Full Stack Geliştirici",
      description:
        "Backend, frontend ve sunucu teknolojilerini kullanarak modern, ölçeklenebilir ve kullanıcı odaklı web uygulamaları geliştiriyorum.",
      contactMe: "İletişime Geç",
      downloadCV: "CV İndir",
      viewProjects: "Projeleri Gör",
    },
    // About Section
    about: {
      title: "Hakkımda",
      bio: `Şu anda Ankara, Türkiye'de yaşayan bir Full Stack Geliştiriciyim. Suriye kökenli olup, Ostim Teknik Üniversitesi'nden Yazılım Mühendisliği diploması ile mezun oldum.

Kariyerim boyunca Full Stack Geliştirici olarak çalışarak hem backend hem de frontend geliştirme ile sunucu yönetimi konularında uygulamalı deneyim kazandım. Rakort şirketinde 1 yıllık staj programını tamamladım ve gerçek dünya projelerinde becerilerimi geliştirdim.

Ayrıca gerçek bir müşteri için profesyonel bir web sitesi geliştirdim ve sattım: ergunnakliyatevdeneve.com, bu da üretime hazır çözümler sunma yeteneğimi göstermektedir.

Teknik becerilerimi sürekli geliştiren ve en son teknolojilerle güncel kalan, motive, disiplinli ve çözüm odaklı bir geliştiriciyim.`,
    },
    // Skills Section
    skills: {
      title: "Yetenekler",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps / Hosting",
        databases: "Veritabanları",
        tools: "Araçlar",
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
      title: "Projeler",
      placeholder: "Projeler yakında eklenecek",
      viewProject: "Projeyi Gör",
      viewCode: "Kodu Gör",
    },
    // Contact Section
    contact: {
      title: "İletişim",
      subtitle: "İletişime geçin",
      description:
        "Herhangi bir soru veya işbirliği fırsatı için benimle iletişime geçmekten çekinmeyin.",
      form: {
        name: "Ad Soyad",
        email: "E-posta",
        message: "Mesaj",
        send: "Mesaj Gönder",
        namePlaceholder: "Adınızı girin",
        emailPlaceholder: "E-posta adresinizi girin",
        messagePlaceholder: "Mesajınızı buraya yazın...",
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
      title: "عبدالرحمن الصواف",
      subtitle: "مطور Full Stack",
      description:
        "أقوم بتطوير تطبيقات ويب حديثة وقابلة للتوسع ومركزة على المستخدم باستخدام تقنيات الواجهة الخلفية والأمامية والخوادم.",
      contactMe: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      viewProjects: "عرض المشاريع",
    },
    // About Section
    about: {
      title: "عني",
      bio: `أنا مطور Full Stack أعيش حالياً في أنقرة، تركيا. سوري الأصل، تخرجت بدرجة في هندسة البرمجيات من جامعة أوستيم التقنية.

طوال مسيرتي المهنية، عملت كمطور Full Stack، واكتسبت خبرة عملية في تطوير الواجهة الخلفية والأمامية، بالإضافة إلى إدارة الخوادم. أكملت تدريباً لمدة عام في شركة Rakort، حيث صقلت مهاراتي في المشاريع الحقيقية.

كما قمت بتطوير وبيع موقع ويب احترافي لعميل حقيقي: ergunnakliyatevdeneve.com، مما يدل على قدرتي على تقديم حلول جاهزة للإنتاج.

أنا مطور متحمس ومنضبط وموجه نحو الحلول، أعمل باستمرار على تحسين مهاراتي التقنية والبقاء على اطلاع بأحدث التقنيات.`,
    },
    // Skills Section
    skills: {
      title: "المهارات",
      categories: {
        backend: "الواجهة الخلفية",
        frontend: "الواجهة الأمامية",
        devops: "DevOps / الاستضافة",
        databases: "قواعد البيانات",
        tools: "الأدوات",
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
      title: "المشاريع",
      placeholder: "سيتم إضافة المشاريع قريباً",
      viewProject: "عرض المشروع",
      viewCode: "عرض الكود",
    },
    // Contact Section
    contact: {
      title: "التواصل",
      subtitle: "تواصل معنا",
      description: "لا تتردد في التواصل معي لأي استفسارات أو فرص تعاون.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
        namePlaceholder: "أدخل اسمك",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        messagePlaceholder: "اكتب رسالتك هنا...",
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
