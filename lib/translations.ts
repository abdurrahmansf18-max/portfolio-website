export type Language = "tr" | "en" | "ar"

export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      projects: "Referanslar",
      about: "Hakkımda",
      contact: "İletişim",
      whatsappBtn: "WhatsApp",
    },
    hero: {
      badge: "Ankara Merkezli · Birebir Destek & Yüz Yüze Görüşme",
      greeting: "Merhaba, Ben Abdurrahman Rıdvan",
      title: "İşletmenize Müşteri Kazandıran Web Siteleri ve Yazılım Çözümleri",
      description:
        "Google’da sizi arayan müşterilerin tek tıkla telefonunuza ve WhatsApp’ınıza ulaşmasını sağlayan hızlı, modern web siteleri kuruyorum. Peşin ödeme riski olmadan, önce taslağınızı görüyorsunuz; beğenirseniz yayına alıyoruz.",
      whatsappCta: "WhatsApp’tan Yaz",
      callCta: "Hemen Ara: 0539 738 94 76",
      viewProjects: "Yaptığım İşleri Gör",
      typingTexts: [
        "İşletmeler İçin Mobil Web Sitesi",
        "Hemen Ara & WhatsApp Teklif Sistemi",
        "Kendi Sunucumda Hızlı Barındırma",
        "İşletmenize Özel Yazılım & Teknik Destek",
      ],
      trustPoints: [
        {
          title: "Önce Gör, Beğenince Öde",
          desc: "Önce firmanıza özel örneği görür, yayında test ettikten sonra ödeme yaparsınız.",
        },
        {
          title: "Canlı Müşteri Referansı",
          desc: "Ergun Nakliyat’ın web sitesini ve teknik bakımını 1 yıldır aktif olarak yürütüyorum.",
        },
        {
          title: "Tek Muhatap · Ankara İçi",
          desc: "Ajans karmaşası yok; telefonla ya da yüz yüze doğrudan benimle görüşürsünüz.",
        },
      ],
    },
    services: {
      title: "İşletmeniz İçin Neler Yapıyorum?",
      subtitle:
        "Karmaşık teknik terimler yok; dükkanınıza veya firmanıza doğrudan müşteri ve kolaylık getiren pratik çözümler sunuyorum.",
      items: [
        {
          key: "website",
          title: "Müşteri Getiren Mobil Web Sitesi",
          desc: "Telefonundan Google’da hizmet arayan müşteriler sitenize girdiğinde tek tıkla sizi arayabilir veya WhatsApp’tan doğrudan fiyat isteyebilir.",
        },
        {
          key: "hosting",
          title: "Alan Adı, Kendi Sunucumda Barındırma & SSL",
          desc: "Teknik ayarlarla uğraşmazsınız. Firmanıza özel .com.tr alan adınızı, güvenli SSL kilidinizi ve kendi VPS sunucumda hızlı barındırmanızı hazır teslim ederim.",
        },
        {
          key: "maintenance",
          title: "1 Yıl Birebir Bakım ve Güncelleme",
          desc: "Telefon numaranız, adresiniz, fotoğrafınız veya hizmet metniniz değiştiğinde tek WhatsApp mesajıyla hemen güncellerim; muhatap aramazsınız.",
        },
        {
          key: "software",
          title: "Özel Yazılım ve Sürekli Teknoloji Desteği",
          desc: "İleride iş takibi, müşteri kayıt paneli, randevu sistemi veya bilgisayar/dijital bir ihtiyacınız olduğunda yine kendi yazılımcınız olarak yanınızdayım.",
        },
      ],
      processTitle: "Nasıl Çalışıyorum? (3 Basit Adımda Sıfır Risk)",
      processSteps: [
        {
          step: "01",
          title: "Örnek Taslağı Hazırlıyorum",
          desc: "İşletmenizin gerçek adı, adresi ve hizmetleriyle telefonunuzdan bakabileceğiniz örnek sayfanızı hazırlayıp gösteriyorum.",
        },
        {
          step: "02",
          title: "Onayınızla Yayına Alıyorum",
          desc: "İstediğiniz düzenlemeleri yapıp alan adınıza bağlıyor, kendi sunucumda güvenli ve hızlı şekilde yayına alıyorum.",
        },
        {
          step: "03",
          title: "Çalışır Halde Teslim & Ödeme",
          desc: "Telefonunuzdan sitenizin sorunsuz çalıştığını gördüğünüzde ödemeyi yapıyorsunuz; tüm erişimler şeffaf biçimde sizde kalıyor.",
        },
      ],
      techToggleLabel: "Teknik Altyapı & Kullandığım Teknolojiler (Merak Edenler İçin)",
      spokenTitle: "İletişim Dilleri",
      spokenLevels: ["Türkçe (Çok İyi)", "Arapça (Çok İyi)", "İngilizce (A2)"],
    },
    projects: {
      title: "Canlı Referans ve Yaptığım İşler",
      subtitle:
        "Sadece söz değil, aktif olarak yayında olan gerçek müşteri projem ve geliştirdiğim yazılım sistemleri:",
      featuredBadge: "Aktif Müşteri · 1 Yıldır Kendi Sunucumda Yayında",
      viewProject: "Canlı Siteyi Aç",
      viewCode: "Teknik İnceleme (GitHub)",
      technologies: "Altyapı:",
      keyFeatures: "Neler Kazandırıyor?",
      gallery: "Ekran Görüntüleri",
      swipeHint: "Diğer görseller için kaydırın",
      liveBadge: "Canlı Site",
      screenshotsLabel: "görsel",
      copyLink: "Bağlantıyı Kopyala",
      copied: "Kopyalandı!",
      closePreview: "Kapat",
      closeHint: "Kapatmak için dışarı veya Kapat butonuna tıklayın",
    },
    about: {
      title: "Ben Kimim?",
      subtitle: "Ankara’da İşletmeniz İçin Ulaşılabilir, Dürüst ve Uzun Vadeli Yazılım Ortağınız",
      cardRole: "Yazılım Mühendisi · Bağımsız Web & Yazılım Uzmanı",
      bio: `Merhaba, ben Abdurrahman Rıdvan. Ankara’da yaşayan, Ostim Teknik Üniversitesi Yazılım Mühendisliği eğitimi almış bağımsız bir yazılımcıyım.

Amacım tek seferlik site yapıp kaybolmak değil; Ankara’daki esnaf ve işletmelerle uzun yıllar sürecek güvene dayalı bir çalışma ilişkisi kurmak. Örneğin Ergun Nakliyat’ın web sitesini 1 yıldır kendi sunucumda barındırıyor ve her ihtiyaçlarında birebir destek veriyorum.

Büyük ajansların yüksek maliyetleri ve ulaşılamayan santralleri yerine; tek telefonla ulaşabileceğiniz, gerektiğinde Ankara içi yüz yüze görüşebileceğiniz ve işinizi kendi işi gibi takip eden bir çözüm ortağı olarak çalışıyorum.`,
      location: "Ankara, Türkiye (Yüz Yüze Görüşme)",
      education: "Ostim Teknik Üniversitesi · Yazılım Müh.",
      experience: "Rakort · 1 Yıl Kurumsal Yazılım Deneyimi",
      vpsHighlight: "Kendi VPS Sunucum · Kesintisiz Barındırma",
      internship: {
        title: "Kurumsal Yazılım Deneyimi",
        company: "Rakort — Yazılım Mühendisliği (1 Yıl)",
        summary:
          "Profesyonel ekip ortamında modern web uygulamaları, veritabanı sistemleri ve sunucu dağıtım süreçlerinde aktif görev aldım.",
        websiteLabel: "Rakort’u İncele",
      },
      downloadCV: "Özgeçmiş (CV) İndir",
    },
    contact: {
      title: "Hemen İletişime Geçin",
      subtitle: "İşletmeniz için ücretsiz örnek taslak konuşalım",
      description:
        "Web sitesi, yenileme veya işletmenize özel bir yazılım ihtiyacınız varsa bana doğrudan WhatsApp’tan yazabilir ya da arayabilirsiniz. Ankara içindeyseniz yüz yüze de görüşebiliriz.",
      whatsappTitle: "WhatsApp (En Hızlı Yol)",
      whatsappDesc: "Tek tıkla yazın, aynı gün dönüş yapayım",
      whatsappAction: "WhatsApp Sohbetini Başlat",
      callTitle: "Telefonla Ara",
      callDesc: "Doğrudan benimle görüşün",
      formTitle: "Veya Buradan Mesaj Bırakın",
      form: {
        name: "Adınız / Firma Adınız",
        email: "E-posta Adresiniz",
        message: "İhtiyacınız Nedir?",
        send: "Mesaj Gönder",
        namePlaceholder: "Örn: Mehmet Güneş - Cebeci Nakliyat",
        emailPlaceholder: "ornek@mail.com",
        messagePlaceholder: "İşletmenizden ve nasıl bir site/çözüm istediğinizden kısaca bahsedin...",
      },
      info: {
        phone: "Telefon & WhatsApp",
        email: "E-posta",
        location: "Konum",
      },
      status: {
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağım.",
        error: "Mesaj gönderilirken bir hata oluştu. Lütfen WhatsApp veya telefon üzerinden ulaşın.",
        configError: "E-posta servisi şu an aktif değil; lütfen doğrudan WhatsApp veya telefonla ulaşın.",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır",
      developer: "Ankara · İşletmeler İçin Web Sitesi ve Yazılım Çözümleri",
      mobileCall: "Hemen Ara",
      mobileWhatsapp: "WhatsApp’tan Yaz",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "References",
      about: "About",
      contact: "Contact",
      whatsappBtn: "WhatsApp",
    },
    hero: {
      badge: "Based in Ankara · Direct Support & Face-to-Face Meetings",
      greeting: "Hi, I’m Abdurrahman Ridvan",
      title: "Websites and Software Solutions That Bring Real Customers",
      description:
        "I build fast, mobile-first websites that turn local Google searches into direct phone calls and WhatsApp inquiries. See a live preview tailored to your business first — pay only when you approve.",
      whatsappCta: "Message on WhatsApp",
      callCta: "Call: +90 539 738 94 76",
      viewProjects: "See Live Work",
      typingTexts: [
        "Mobile-First Business Websites",
        "Direct Call & WhatsApp Quote Flows",
        "Fast Hosting on My Own VPS",
        "Custom Software & Ongoing Support",
      ],
      trustPoints: [
        {
          title: "Preview First, Pay on Delivery",
          desc: "Review a draft tailored to your business and pay only when it is live and working.",
        },
        {
          title: "Active Client Reference",
          desc: "Built, hosted, and maintained Ergun Nakliyat’s live website for over a year.",
        },
        {
          title: "Single Point of Contact",
          desc: "No agency middlemen — talk directly with me by phone, WhatsApp, or in person in Ankara.",
        },
      ],
    },
    services: {
      title: "How I Help Your Business",
      subtitle:
        "Clear, practical digital solutions designed to bring new customers and save time — without confusing tech jargon.",
      items: [
        {
          key: "website",
          title: "Customer-Focused Mobile Websites",
          desc: "Fast, clean sites built so visitors on mobile can call you or request a quote on WhatsApp with a single tap.",
        },
        {
          key: "hosting",
          title: "Domain, VPS Hosting & SSL Included",
          desc: "No technical headaches. I set up your domain, SSL security, and reliable hosting on my own VPS server.",
        },
        {
          key: "maintenance",
          title: "1-Year Direct Support & Updates",
          desc: "Need to change a phone number, photo, or service text? Send one WhatsApp message and I handle it quickly.",
        },
        {
          key: "software",
          title: "Custom Software & Tech Partnership",
          desc: "Beyond your website, I stay available as your long-term developer for tracking panels, automation, or custom tools.",
        },
      ],
      processTitle: "How It Works (3 Risk-Free Steps)",
      processSteps: [
        {
          step: "01",
          title: "Custom Preview Draft",
          desc: "I prepare a mobile preview using your real business name, services, and contact info.",
        },
        {
          step: "02",
          title: "Refinement & Launch",
          desc: "Once you approve, I connect your domain and launch the site with SSL on fast hosting.",
        },
        {
          step: "03",
          title: "Delivery & Payment",
          desc: "You test everything live on your phone and pay upon delivery, with full ownership of your domain.",
        },
      ],
      techToggleLabel: "Technical Stack & Infrastructure (For Tech Visitors)",
      spokenTitle: "Spoken Languages",
      spokenLevels: ["Turkish (Fluent)", "Arabic (Fluent)", "English (A2)"],
    },
    projects: {
      title: "Live Client Reference & Projects",
      subtitle: "Real production client website and custom software systems I built:",
      featuredBadge: "Active Client · 1 Year Live on My VPS",
      viewProject: "Open Live Site",
      viewCode: "Source Code (GitHub)",
      technologies: "Stack:",
      keyFeatures: "Key Benefits:",
      gallery: "Screenshots",
      swipeHint: "Swipe to see more",
      liveBadge: "Live Site",
      screenshotsLabel: "screenshots",
      copyLink: "Copy Link",
      copied: "Copied!",
      closePreview: "Close",
      closeHint: "Click outside or press Close",
    },
    about: {
      title: "About Me",
      subtitle: "Your Reliable, Long-Term Local Software Partner in Ankara",
      cardRole: "Software Engineer · Independent Web & Software Developer",
      bio: `Hi, I’m Abdurrahman Ridvan — an independent Software Engineering developer based in Ankara (Ostim Technical University).

My goal isn’t to build a one-off website and disappear; I build lasting partnerships with local businesses. For example, I built and have hosted Ergun Nakliyat’s website on my own VPS for the past year with ongoing support.

Instead of expensive agencies and slow ticket queues, you get one reliable developer you can reach directly on WhatsApp, by phone, or in person in Ankara.`,
      location: "Ankara, Türkiye (In-Person Available)",
      education: "Ostim Technical University · Software Eng.",
      experience: "Rakort · 1 Year Software Experience",
      vpsHighlight: "Own VPS Infrastructure · Fast Hosting",
      internship: {
        title: "Industry Experience",
        company: "Rakort — Software Engineering Intern (1 Year)",
        summary:
          "Worked on full-stack web applications, databases, and production deployment workflows in a professional engineering team.",
        websiteLabel: "Visit Rakort",
      },
      downloadCV: "Download CV",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let’s discuss a free preview for your business",
      description:
        "Message me on WhatsApp or call directly to talk about your website or custom software needs. Available for face-to-face meetings in Ankara.",
      whatsappTitle: "WhatsApp (Fastest)",
      whatsappDesc: "Tap to message — same-day response",
      whatsappAction: "Start WhatsApp Chat",
      callTitle: "Call Directly",
      callDesc: "Speak directly with me",
      formTitle: "Or Send a Message Here",
      form: {
        name: "Your Name / Business",
        email: "Email",
        message: "How can I help?",
        send: "Send Message",
        namePlaceholder: "Your name or company",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Briefly describe your business and what you need...",
      },
      info: {
        phone: "Phone & WhatsApp",
        email: "Email",
        location: "Location",
      },
      status: {
        sending: "Sending...",
        success: "Your message has been sent. I will get back to you shortly.",
        error: "Something went wrong. Please reach out directly via WhatsApp or phone.",
        configError: "Email service is not configured right now; please contact me via WhatsApp or phone.",
      },
    },
    footer: {
      rights: "All rights reserved",
      developer: "Ankara · Websites & Software Solutions for Businesses",
      mobileCall: "Call Now",
      mobileWhatsapp: "WhatsApp",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "الأعمال",
      about: "عني",
      contact: "التواصل",
      whatsappBtn: "واتساب",
    },
    hero: {
      badge: "مقيم في أنقرة · دعم مباشر وإمكانية اللقاء وجهاً لوجه",
      greeting: "مرحباً، أنا عبد الرحمن رضوان",
      title: "مواقع ويب وحلول برمجية تجلب عملاء حقيقيين لعملك",
      description:
        "أصمم مواقع سريعة ومتوافقة مع الجوال تتيح لعملائك الاتصال بك أو طلب عرض سعر عبر واتساب بضغطة زر. ترى النموذج الخاص بعملك أولاً، وتدفع فقط عند الموافقة والتشغيل.",
      whatsappCta: "تواصل عبر واتساب",
      callCta: "اتصل الآن: 0539 738 94 76",
      viewProjects: "شاهد أعمالي",
      typingTexts: [
        "مواقع احترافية للشركات والأعمال",
        "ربط مباشر بالاتصال وواتساب",
        "استضافة سريعة على خادمي الخاص VPS",
        "برمجيات مخصصة ودعم فني مستمر",
      ],
      trustPoints: [
        {
          title: "شاهد أولاً وادفع عند التسليم",
          desc: "تعاين نموذجاً مخصصاً لعملك ولا تدفع إلا بعد التأكد من تشغيل الموقع بنجاح.",
        },
        {
          title: "عميل حقيقي ومستمر",
          desc: "صممت وأدير موقع شركة Ergun Nakliyat على خادمي الخاص منذ عام كامل.",
        },
        {
          title: "تواصل مباشر في أنقرة",
          desc: "بدون وسطاء أو تعقيد الوكالات؛ تتواصل معي مباشرة عبر الهاتف أو وجهاً لوجه.",
        },
      ],
    },
    services: {
      title: "كيف أساعد عملك؟",
      subtitle: "حلول رقمية واضحة وعملية بدون مصطلحات تقنية معقدة، مصممة لجلب العملاء وتسهيل عملك.",
      items: [
        {
          key: "website",
          title: "موقع جوال يجلب العملاء",
          desc: "موقع سريع وواضح يمكّن الباحثين في جوجل من الاتصال بك أو مراسلتك على واتساب فوراً.",
        },
        {
          key: "hosting",
          title: "نطاق واستضافة على VPS وشهادة أمان",
          desc: "أجهز لك كل شيء بالكامل: النطاق الرسمي، الحماية SSL، والاستضافة السريعة على خادمي الخاص.",
        },
        {
          key: "maintenance",
          title: "سنة كاملة من الدعم والتحديثات",
          desc: "تحتاج لتعديل رقم هاتف أو صورة أو نص؟ رسالة واحدة على واتساب وأقوم بالتحديث فوراً.",
        },
        {
          key: "software",
          title: "برمجيات خاصة وشراكة تقنية مستمرة",
          desc: "لا نقتصر على الموقع فقط؛ أبقى معك لأي برنامج متابعة أو لوحة إدارة أو دعم تقني مستقبلاً.",
        },
      ],
      processTitle: "كيف نعمل معاً؟ (3 خطوات بدون أي مخاطرة)",
      processSteps: [
        {
          step: "01",
          title: "إعداد نموذج أولي",
          desc: "أجهز معاينة خاصة باسم شركتك وخدماتك لتراها مباشرة على هاتفك.",
        },
        {
          step: "02",
          title: "التعديل والإطلاق",
          desc: "بعد موافقتك أربط الموقع بنطاقك الرسمي وأطلقه بأمان وسرعة.",
        },
        {
          step: "03",
          title: "التسليم ثم الدفع",
          desc: "تتأكد من عمل كل شيء على هاتفك ثم يتم الدفع مع حفظ كافة صلاحياتك.",
        },
      ],
      techToggleLabel: "التقنيات والبنية التحتية المستخدمة (للمهتمين بالتفاصيل التقنية)",
      spokenTitle: "لغات التواصل",
      spokenLevels: ["التركية (ممتاز)", "العربية (ممتاز)", "الإنجليزية (A2)"],
    },
    projects: {
      title: "أعمال حقيقية ومشاريع منفذة",
      subtitle: "موقعي المباشر لعميل فعلي وأنظمة برمجية متكاملة قمت بتطويرها:",
      featuredBadge: "عميل فعلي · يعمل على خادمي منذ عام",
      viewProject: "افتح الموقع المباشر",
      viewCode: "الكود المصدري (GitHub)",
      technologies: "التقنيات:",
      keyFeatures: "أبرز المزايا:",
      gallery: "صور المشروع",
      swipeHint: "اسحب لمشاهدة المزيد",
      liveBadge: "موقع مباشر",
      screenshotsLabel: "صور",
      copyLink: "نسخ الرابط",
      copied: "تم النسخ!",
      closePreview: "إغلاق",
      closeHint: "اضغط بالخارج أو على زر الإغلاق",
    },
    about: {
      title: "من أنا؟",
      subtitle: "شريكك التقني الموثوق في أنقرة لعمل طويل الأمد",
      cardRole: "مهندس برمجيات · مطور مواقع وحلول رقمية مستقل",
      bio: `مرحباً، أنا عبد الرحمن رضوان، مهندس برمجيات مستقل مقيم في أنقرة (جامعة أوستيم التقنية).

هدفي ليس تسليم موقع والاختفاء، بل بناء علاقة عمل طويلة الأمد قائمة على الثقة مع أصحاب الأعمال في أنقرة. على سبيل المثال، أدير وأستضيف موقع شركة Ergun Nakliyat منذ عام كامل مع متابعة مستمرة.

بدلاً من تكاليف الوكالات المرتفعة وصعوبة التواصل، تحصل على مطور مباشر يمكنك الاتصال به أو مقابلته وجهاً لوجه في أنقرة متى احتجت.`,
      location: "أنقرة، تركيا (إمكانية اللقاء المباشر)",
      education: "جامعة أوستيم التقنية · هندسة البرمجيات",
      experience: "Rakort · خبرة عملية لمدة عام",
      vpsHighlight: "خادم VPS خاص · استضافة مستقرة وسريعة",
      internship: {
        title: "الخبرة العملية",
        company: "Rakort — هندسة البرمجيات (سنة واحدة)",
        summary: "شاركت في تطوير تطبيقات ويب وقواعد بيانات وإدارة النشر ضمن فريق هندسي محترف.",
        websiteLabel: "زيارة Rakort",
      },
      downloadCV: "تحميل السيرة الذاتية (CV)",
    },
    contact: {
      title: "تواصل معي الآن",
      subtitle: "لنتحدث عن نموذج مخصص لعملك",
      description:
        "يمكنك مراسلتي مباشرة على واتساب أو الاتصال بي لمناقشة موقعك أو أي برنامج تحتاجه. كما يمكننا اللقاء وجهاً لوجه داخل أنقرة.",
      whatsappTitle: "واتساب (الأسرع)",
      whatsappDesc: "راسلني بضغطة زر وأرد عليك في نفس اليوم",
      whatsappAction: "ابدأ محادثة واتساب",
      callTitle: "اتصال هاتفي مباشر",
      callDesc: "تحدث معي مباشرة",
      formTitle: "أو اترك رسالة هنا",
      form: {
        name: "الاسم / اسم الشركة",
        email: "البريد الإلكتروني",
        message: "كيف يمكنني مساعدتك؟",
        send: "إرسال الرسالة",
        namePlaceholder: "اسمك أو اسم مؤسستك",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "اكتب نبذة قصيرة عن عملك وما تحتاجه...",
      },
      info: {
        phone: "الهاتف وواتساب",
        email: "البريد الإلكتروني",
        location: "الموقع",
      },
      status: {
        sending: "جارٍ الإرسال...",
        success: "تم إرسال رسالتك بنجاح. سأتواصل معك في أقرب وقت.",
        error: "حدث خطأ أثناء الإرسال. يرجى التواصل مباشرة عبر واتساب أو الهاتف.",
        configError: "خدمة البريد غير مفعلة حالياً؛ يرجى التواصل عبر واتساب أو الهاتف.",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      developer: "أنقرة · مواقع ويب وحلول برمجية للشركات",
      mobileCall: "اتصل الآن",
      mobileWhatsapp: "واتساب",
    },
  },
} as const

export type TranslationKey = keyof typeof translations.tr
