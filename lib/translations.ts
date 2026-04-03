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
      typingTexts: ["Full Stack Engineer", "Scalable System Builder", "Secure API Architect", "Product-Focused Problem Solver"],
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
      bio: `Software Engineering graduate focused on full-stack web development. I build modern and scalable applications with a practical, project-driven mindset.

I have hands-on experience with FastAPI, .NET Core, React, PostgreSQL, Docker, and VPS deployment. I enjoy designing clean APIs, building maintainable systems, and delivering complete solutions from backend to frontend.

I work effectively both independently and in teams, with strong problem-solving skills and a focus on turning real client requirements into production-ready products.`,
      internship: {
        title: "Internship Experience",
        company: "Rakort - Software Engineering Intern (2024-07-01 - 2025-07-01)",
        summary:
          "Completed a long-term internship at a technology-focused company delivering software and digital solutions.",
        whatWeDoTitle: "What They Do",
        whatWeDo:
          "Contributed to full-stack development tasks using FastAPI, .NET Core, React, and PostgreSQL within a professional team environment.",
        productsTitle: "Product Vision",
        products:
          "Gained practical experience in scalable architecture, modern development workflows, and deployment strategies.",
        websiteLabel: "Visit Rakort",
      },
      location: "Ankara, Turkiye",
      education: "Ostim Technical University (Graduate)",
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
      gallery: "Project Screenshots",
      swipeHint: "Swipe right to view more screenshots",
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
      typingTexts: ["Full Stack Yazılım Mühendisi", "Ölçeklenebilir Sistem Geliştirici", "Güvenli API Mimarisi Uzmanı", "Ürün Odaklı Problem Çözücü"],
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
      bio: `Web tabanlı full-stack geliştirmeye odaklanan motive bir Yazılım Mühendisliği mezunuyum. Modern ve ölçeklenebilir uygulamalar geliştirirken gerçek proje deneyimini merkeze alıyorum.

FastAPI, .NET Core, React, PostgreSQL, Docker ve VPS dağıtımı konularında uygulamalı deneyime sahibim. Temiz API tasarımı, sürdürülebilir mimari ve uçtan uca çözüm üretimi benim temel çalışma yaklaşımımdır.

Hem bireysel hem ekip çalışmalarında etkili şekilde görev alır, güçlü problem çözme becerileriyle müşteri ihtiyaçlarını üretime hazır ürünlere dönüştürürüm.`,
      internship: {
        title: "Staj Deneyimi",
        company: "Rakort - Yazılım Mühendisliği Stajyeri (2024-07-01 - 2025-07-01)",
        summary:
          "Yazılım geliştirme ve dijital çözümler üreten teknoloji odaklı bir şirkette uzun dönem staj deneyimi edindim.",
        whatWeDoTitle: "Neler Yapıyor",
        whatWeDo:
          "FastAPI, .NET Core, React ve PostgreSQL kullanarak full-stack geliştirme görevlerinde aktif rol aldım ve profesyonel ekip sürecine katkı sundum.",
        productsTitle: "Ürün Vizyonu",
        products:
          "Ölçeklenebilir mimari, modern geliştirme akışları ve dağıtım süreçlerinde pratik tecrübe kazandım.",
        websiteLabel: "Rakort'u Ziyaret Et",
      },
      location: "Ankara, Türkiye",
      education: "Ostim Teknik Üniversitesi (Mezun)",
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
      gallery: "Proje Görselleri",
      swipeHint: "Daha fazla görsel için sağa kaydırın",
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
      typingTexts: ["مهندس برمجيات Full Stack", "مطور أنظمة قابلة للتوسع", "مهندس واجهات برمجة آمنة", "حلّال مشاكل يركز على المنتج"],
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
      bio: `خريج هندسة برمجيات ومتخصص في تطوير تطبيقات الويب Full Stack. أعمل على بناء تطبيقات حديثة وقابلة للتوسع مع تركيز قوي على المشاريع الواقعية.

أمتلك خبرة عملية في FastAPI و .NET Core و React و PostgreSQL و Docker وإدارة النشر على VPS. أهتم بتصميم واجهات API نظيفة وبناء أنظمة قابلة للصيانة من الواجهة الخلفية إلى الأمامية.

أعمل بكفاءة بشكل مستقل وضمن فريق، مع مهارات قوية في حل المشكلات وتحويل متطلبات العملاء إلى حلول جاهزة للإنتاج.`,
      internship: {
        title: "خبرة التدريب",
        company: "Rakort - متدرب هندسة برمجيات (2024-07-01 - 2025-07-01)",
        summary:
          "أكملت تدريباً طويل المدى في شركة تقنية تقدم حلولاً برمجية ورقمية لعملاء فعليين.",
        whatWeDoTitle: "ماذا يفعلون",
        whatWeDo:
          "ساهمت في مهام تطوير Full Stack باستخدام FastAPI و .NET Core و React و PostgreSQL ضمن بيئة عمل احترافية.",
        productsTitle: "رؤية المنتجات",
        products:
          "اكتسبت خبرة عملية في المعمارية القابلة للتوسع، وسير العمل الحديثة، واستراتيجيات النشر والصيانة.",
        websiteLabel: "زيارة Rakort",
      },
      location: "أنقرة، تركيا",
      education: "جامعة أوستيم التقنية (خريج)",
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
      gallery: "صور المشروع",
      swipeHint: "اسحب إلى اليمين لمشاهدة المزيد من الصور",
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
