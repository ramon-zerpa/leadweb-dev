export type Locale = "en" | "es";

export const locales = {
  en: {
    html: "en",
    name: "English",
    hreflang: "en-US",
    path: "/",
    altPath: "/es/",
    privacyPath: "/privacy/",
    altPrivacyPath: "/es/privacidad/",
  },
  es: {
    html: "es",
    name: "Español",
    hreflang: "es-US",
    path: "/es/",
    altPath: "/",
    privacyPath: "/es/privacidad/",
    altPrivacyPath: "/privacy/",
  },
} as const;

export const copy = {
  en: {
    meta: {
      title: "Lead Web Developers | Distinctive websites for Florida businesses",
      description:
        "Custom websites by Ramón Zerpa. Astro front-end development, performance and technical SEO for Florida businesses. 13+ years of experience.",
      ogTitle: "Stand out. Stay fast. Win trust.",
    },
    skip: "Skip to content",
    brand: "Lead Web",
    brandSignature: "</Dev_>",
    brandFull: "Lead Web Developers",
    nav: {
      label: "Main navigation",
      mobileLabel: "Mobile navigation",
      languageLabel: "Language",
      mobileLanguageLabel: "Language selector in mobile menu",
      fallbackLabel: "Navigation without JavaScript",
      home: "Home",
      contactLabel: "Contact",
      work: "Work",
      expertise: "Expertise",
      about: "About",
      reviews: "Reviews",
      contact: "Let’s talk",
      langCurrent: "EN",
      langOther: "ES",
      menu: "Open menu",
      close: "Close menu",
    },
    stickyWhatsapp: {
      kicker: "DIRECT LINE",
      label: "Chat on WhatsApp",
      ariaLabel: "Chat with Ramón on WhatsApp",
    },
    hero: {
      kicker: "WEBSITES ENGINEERED FOR FLORIDA BUSINESSES",
      lines: ["Stand out.", "Stay fast.", "Win trust."],
      rotatingLines: ["Win trust.", "Get leads.", "Sell more."],
      body: {
        intro: "Distinctive websites for Florida businesses.",
        detail: "13+ years of experience, modern front-end and AI-powered execution.",
        ending: "Built to perform, not just impress.",
      },
      cta: "Discuss your project",
      secondary: "Explore my work",
      sceneMiniKicker: "Ideas, engineered.",
      sceneMiniTitle: "Beyond ordinary.",
      sceneStructureTitle: "Form follows intention.",
      pauseMotion: "Pause motion",
      resumeMotion: "Resume motion",
      sceneMiniAction: "Explore the idea",
      badge: "Human-led. AI-powered.",
      sceneCaption: "An illustration of geometric layers forming a web interface.",
    },
    statsTitle: "Lead Web experience",
    stats: [
      {
        value: "13+",
        label: "Years building code",
        compactLabel: "Years of experience",
      },
      {
        value: "Since 2015",
        label: "U.S. collaboration",
        compactLabel: "U.S. collaboration",
      },
      {
        value: "VE / FL",
        label: "Experienced. Connected.",
        compactLabel: "Collaboration",
      },
    ],
    work: {
      kicker: "01 / Selected work",
      title: "Built for purpose.\nMade to be noticed.",
      projectKicker: "Engineering & construction",
      projectName: "DISOCA",
      summary: "A digital presence with the precision of the work behind it.",
      description:
        "An editorial website for an engineering and construction company. Clear services, a distinctive visual system and a focused path to contact.",
      tags: ["Design", "Development", "Astro"],
      link: "Explore the project",
      href: "https://disoca.com/",
      previewUrl: "disoca.com",
      previewAlt: "Homepage of DISOCA, an engineering and construction website",
      noteLabel: "Selected project",
      note:
        "A tailored digital presence for a construction company operating across Latin America.",
    },
    expertise: {
      kicker: "02 / What I bring",
      title: "More than\na website.\nA business tool.",
      body: "Design, development and performance working together from the first decision.",
      items: [
        {
          num: "01",
          title: "Custom websites",
          body: "Corporate sites and landing pages with a distinctive visual identity. Built with Astro.",
        },
        {
          num: "02",
          title: "Performance & technical SEO",
          body: "Fast, accessible foundations. Structure, loading and discoverability considered together.",
        },
        {
          num: "03",
          title: "E-commerce experiences",
          body: "Clear product journeys and useful functionality, with the right technology for the business.",
        },
        {
          num: "04",
          title: "Front-end for agencies",
          body: "An experienced development partner for ambitious client work.",
        },
      ],
    },
    founder: {
      kicker: "03 / The person behind the pixels",
      title: "Experience is human.\nPossibility is expanding.",
      name: "Ramón Zerpa",
      location: "Mérida, Venezuela",
      portraitAlt: "Portrait of Ramón Zerpa, founder of Lead Web Developers",
      intro:
        "I’m Ramón, a front-end developer, computer engineer and founder of Lead Web. Since 2013, I’ve built websites for businesses and agencies, with a strong connection to Florida.",
      ai: "Today, I combine that experience with Astro and AI-powered workflows. Tools accelerate the process. The judgment, attention to detail and responsibility stay with me.",
      experience:
        "Experience with\nTrue Webmaster LLC · VP System Developers",
      education: "Computer engineering / UPTM Kleber Ramírez",
      linkedin: "Explore my experience",
      linkedinHref: "https://www.linkedin.com/in/raymond-zerpa/",
    },
    process: {
      kicker: "04 / How we get there",
      title: "A clear process. No black box.",
      steps: [
        {
          num: "01",
          title: "Understand",
          body: "Your business, your audience and what the website needs to accomplish.",
        },
        {
          num: "02",
          title: "Design & build",
          body: "Explore the direction, refine the experience and bring it to life.",
        },
        {
          num: "03",
          title: "Test & launch",
          body: "Check the details, measure performance and prepare a confident launch.",
        },
      ],
    },
    testimonials: {
      kicker: "05 / Client stories",
      title: "Trust, earned in the work.",
      carouselLabel: "Client testimonials",
      carouselRole: "carousel",
      ratingValue: "5 / 5",
      ratingLabel: "5 out of 5 stars",
      previousLabel: "Show previous testimonials",
      nextLabel: "Show next testimonials",
      pageLabel: "Show testimonial group",
      statusLabel: "Testimonial group",
      items: [
        {
          quote:
            "Ramón quickly understood my brand’s vision and turned it into a website that is much clearer, more professional and more enjoyable to navigate. His attention to design, speed and technical details made the entire process flow smoothly.",
          name: "Yuruari",
          location: "Miami",
          website: "yuruherrera.com",
          href: "https://yuruherrera.com/",
        },
        {
          quote:
            "Working with Ramón was an excellent experience. He not only solved the site’s technical challenges, but also brought the judgment needed to improve its structure, performance and user experience. You can trust him to take a web project to the next level.",
          name: "Yan",
          location: "Tampa",
          website: "truewebmaster.com",
          href: "https://truewebmaster.com/",
        },
        {
          quote:
            "Raymond combined solid technical execution with excellent communication throughout the project. He built a modern, fast digital presence aligned with what we needed to communicate to our clients in Aruba.",
          name: "Manuel",
          location: "Aruba",
          website: "lumiaruba.com",
          href: "https://lumiaruba.com/",
        },
        {
          quote:
            "What I value most about Ramón is his ability to turn ideas into a functional, polished and easy-to-manage website. He has a great eye for detail and always makes sure the result not only looks good, but truly works for the business.",
          name: "Gabriel",
          location: "Mexico City",
          website: "dukeanddon.com",
          href: "https://dukeanddon.com/",
        },
        {
          quote:
            "Ramón helped us strengthen our online presence with a clear, professional solution focused on results. His experience in development, optimization and website structure shows in every part of the work.",
          name: "Gustavo",
          location: "Venezuela",
          website: "disoca.com",
          href: "https://disoca.com/",
        },
        {
          quote:
            "From the start, Ramón showed commitment, organization and a real willingness to understand the project’s needs. The result was a modern, thoughtful website prepared to communicate our value proposition more effectively.",
          name: "Adriana",
          location: "Venezuela",
          website: "mopane.io",
          href: "https://mopane.io/",
        },
      ],
    },
    contact: {
      kicker: "06 / Let’s build something that matters",
      title: "Your next\nwebsite should\nraise the bar.",
      body: "Tell me what you’re building, what isn’t working or what you want to do differently.",
      email: "info@leadweb.dev",
      whatsappLabel: "WhatsApp  +58 424 706 7872",
      whatsappHref: "https://wa.me/584247067872",
      socialsLabel: "Lead Web social profiles",
      linkedinLabel: "LinkedIn",
      instagramLabel: "Instagram",
      location: "Based in Venezuela. Working with Florida.",
      name: "Your name",
      namePlaceholder: "How should I address you?",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "Your preferred contact number",
      service: "What do you have in mind?",
      services: [
        { value: "New website", label: "New website" },
        { value: "Redesign", label: "Redesign" },
        { value: "Performance", label: "Performance" },
      ],
      message: "A little about your project",
      messagePlaceholder: "Your goals, your current website, your next big idea…",
      submit: "Send project inquiry",
      sending: "Sending your inquiry…",
      privacy: "Your details are used to respond to your inquiry.",
      successTitle: "Your inquiry was submitted.",
      success:
        "Thank you for sharing your project. I’ll get back to you as soon as I can.",
      errorTitle: "We couldn’t send your message.",
      error:
        "Your details are still here. Try again or email info@leadweb.dev.",
      invalidEmail: "Enter a valid email address.",
    },
    footer: {
      copyright: "© 2026 Lead Web Developers",
      tagline: "With love from VE to USA.",
      linkedin: "LinkedIn",
      privacy: "Privacy",
      instagram: "Instagram",
      instagramHref: "https://www.instagram.com/leadweb.dev",
    },
    privacy: {
      title: "Privacy policy",
      metaTitle: "Privacy policy | Lead Web Developers",
      updated: "Last updated: September 6, 2026",
      intro:
        "This policy describes how Lead Web Developers, operated by Ramón Zerpa, uses the information you send through this website.",
      sections: [
        {
          title: "Who is responsible",
          body: "Lead Web Developers is a professional practice based in Mérida, Venezuela. Contact: info@leadweb.dev.",
        },
        {
          title: "What we collect",
          body: "The contact form collects your name, email, optional phone number, selected services and message. If you write by email or WhatsApp, we receive the information you choose to send.",
        },
        {
          title: "How it is used",
          body: "We use this information only to respond to your inquiry and, if we work together, to continue the conversation about your project. We do not sell your data.",
        },
        {
          title: "Formspree",
          body: "Form submissions are processed by Formspree so the message can reach info@leadweb.dev. Formspree’s acceptance of a submission is not the same as confirmed delivery to the inbox.",
        },
        {
          title: "Analytics",
          body: "This site does not currently include a third-party analytics script. If that changes, this policy will be updated first.",
        },
        {
          title: "Retention",
          body: "Inquiry details are kept as long as needed to handle your request and any related professional records.",
        },
        {
          title: "Your choices",
          body: "You can email info@leadweb.dev to ask what information we hold about an inquiry or to request that it be updated or deleted, subject to any legal obligation to keep records.",
        },
      ],
    },
    notFound: {
      title: "Page not found",
      body: "That address is not part of this site.",
      home: "Back to the homepage",
    },
  },
  es: {
    meta: {
      title: "Lead Web Developers | Sitios web para negocios de Florida",
      description:
        "Sitios a medida de Ramón Zerpa. Front-end con Astro, rendimiento y SEO técnico para negocios de Florida. Más de 13 años de experiencia.",
      ogTitle: "Impacta. Carga rápido. Inspira confianza.",
    },
    skip: "Saltar al contenido",
    brand: "Lead Web",
    brandSignature: "</Dev_>",
    brandFull: "Lead Web Developers",
    nav: {
      label: "Navegación principal",
      mobileLabel: "Navegación móvil",
      languageLabel: "Idioma",
      mobileLanguageLabel: "Selector de idioma en el menú móvil",
      fallbackLabel: "Navegación sin JavaScript",
      home: "Inicio",
      contactLabel: "Contacto",
      work: "Proyectos",
      expertise: "Servicios",
      about: "Sobre mí",
      reviews: "Reseñas",
      contact: "Hablemos",
      langCurrent: "ES",
      langOther: "EN",
      menu: "Abrir menú",
      close: "Cerrar menú",
    },
    stickyWhatsapp: {
      kicker: "LÍNEA DIRECTA",
      label: "Hablemos por WhatsApp",
      ariaLabel: "Hablar con Ramón por WhatsApp",
    },
    hero: {
      kicker: "Web a medida para negocios de Florida",
      lines: ["Impacta.", "Carga rápido.", "Inspira confianza."],
      rotatingLines: ["Inspira confianza.", "Genera contactos.", "Impulsa ventas."],
      body: {
        intro: "Sitios web con identidad para negocios de Florida.",
        detail: "13+ años de experiencia, front-end moderno e IA aplicada al desarrollo.",
        ending: "Rendimiento, no solo apariencia.",
      },
      cta: "Hablemos de tu proyecto",
      secondary: "Explora mi trabajo",
      sceneMiniKicker: "Ideas, bien construidas.",
      sceneMiniTitle: "Más que una web.",
      sceneStructureTitle: "La forma sigue la intención.",
      pauseMotion: "Pausar movimiento",
      resumeMotion: "Reanudar movimiento",
      sceneMiniAction: "Explora la idea",
      badge: "Criterio humano. Potencia IA.",
      sceneCaption: "Una ilustración de planos geométricos que forman una interfaz web.",
    },
    statsTitle: "La experiencia de Lead Web",
    stats: [
      {
        value: "13+",
        label: "Años creando código",
        compactLabel: "Años de experiencia",
      },
      {
        value: "Desde 2015",
        label: "colaboración con EE. UU.",
        compactLabel: "colaboración con EE. UU.",
      },
      {
        value: "VE / FL",
        label: "Experiencia real.",
        compactLabel: "Colaboración",
      },
    ],
    work: {
      kicker: "01 / Trabajo seleccionado",
      title: "Hecho con propósito.\nHecho para verse.",
      projectKicker: "Ingeniería y construcción",
      projectName: "DISOCA",
      summary: "Una presencia digital con la precisión del trabajo que hay detrás.",
      description:
        "Un sitio editorial para una empresa de ingeniería y construcción. Servicios claros, un sistema visual propio y un camino directo al contacto.",
      tags: ["Diseño", "Desarrollo", "Astro"],
      link: "Ver el proyecto",
      href: "https://disoca.com/",
      previewUrl: "disoca.com",
      previewAlt: "Página de inicio de DISOCA, sitio de ingeniería y construcción",
      noteLabel: "Proyecto seleccionado",
      note:
        "Una presencia digital a medida para una constructora con operaciones en América Latina.",
    },
    expertise: {
      kicker: "02 / Lo que aporto",
      title: "Más que\nun sitio.\nUna herramienta.",
      body: "Diseño, desarrollo y rendimiento trabajando juntos desde la primera decisión.",
      items: [
        {
          num: "01",
          title: "Sitios a medida",
          body: "Sitios corporativos y landing pages con identidad visual propia. Construidos con Astro.",
        },
        {
          num: "02",
          title: "Rendimiento y SEO técnico",
          body: "Bases rápidas y accesibles. Estructura, carga y visibilidad pensadas al mismo tiempo.",
        },
        {
          num: "03",
          title: "Experiencias de ecommerce",
          body: "Recorridos de producto claros y funciones útiles, con la tecnología adecuada para el negocio.",
        },
        {
          num: "04",
          title: "Front-end para agencias",
          body: "Un socio de desarrollo con experiencia para encargos exigentes.",
        },
      ],
    },
    founder: {
      kicker: "03 / La persona detrás de los píxeles",
      title: "La experiencia es humana.\nLo posible se amplía.",
      name: "Ramón Zerpa",
      location: "Mérida, Venezuela",
      portraitAlt: "Retrato de Ramón Zerpa, fundador de Lead Web Developers",
      intro:
        "Soy Ramón, desarrollador front-end, ingeniero en informática y fundador de Lead Web. Desde 2013 construyo sitios para empresas y agencias, con una trayectoria especialmente vinculada a Florida.",
      ai: "Hoy combino esa experiencia con Astro y un flujo de trabajo potenciado por IA. Las herramientas aceleran el proceso. El criterio, el detalle y la responsabilidad siguen siendo míos.",
      experience:
        "Experiencia con\nTrue Webmaster LLC · VP System Developers",
      education: "Ingeniería informática / UPTM Kleber Ramírez",
      linkedin: "Ver mi experiencia",
      linkedinHref: "https://www.linkedin.com/in/raymond-zerpa/",
    },
    process: {
      kicker: "04 / Cómo llegamos ahí",
      title: "Un proceso claro. Sin caja negra.",
      steps: [
        {
          num: "01",
          title: "Entender",
          body: "Tu negocio, tu audiencia y lo que el sitio necesita lograr.",
        },
        {
          num: "02",
          title: "Diseñar y construir",
          body: "Explorar la dirección, refinar la experiencia y llevarla a producción.",
        },
        {
          num: "03",
          title: "Probar y publicar",
          body: "Revisar los detalles, medir el rendimiento y preparar un lanzamiento seguro.",
        },
      ],
    },
    testimonials: {
      kicker: "05 / Voces de clientes",
      title: "La confianza se gana en el trabajo.",
      carouselLabel: "Testimonios de clientes",
      carouselRole: "carrusel",
      ratingValue: "5 / 5",
      ratingLabel: "5 de 5 estrellas",
      previousLabel: "Mostrar testimonios anteriores",
      nextLabel: "Mostrar testimonios siguientes",
      pageLabel: "Mostrar grupo de testimonios",
      statusLabel: "Grupo de testimonios",
      items: [
        {
          quote:
            "Ramón entendió rápidamente la visión de mi marca y la convirtió en un sitio web mucho más claro, profesional y agradable de navegar. Su atención al diseño, la velocidad y los detalles técnicos hicieron que todo el proceso fuera muy fluido.",
          name: "Yuruari",
          location: "Miami",
          website: "yuruherrera.com",
          href: "https://yuruherrera.com/",
        },
        {
          quote:
            "Trabajar con Ramón fue una excelente experiencia. No solo resolvió la parte técnica del sitio, sino que también aportó criterio para mejorar la estructura, el rendimiento y la experiencia de usuario. Es alguien en quien puedes confiar para llevar un proyecto web a un nivel superior.",
          name: "Yan",
          location: "Tampa",
          website: "truewebmaster.com",
          href: "https://truewebmaster.com/",
        },
        {
          quote:
            "Raymond combinó una ejecución técnica sólida con muy buena comunicación durante todo el proyecto. Logró construir una presencia digital moderna, rápida y alineada con lo que necesitábamos mostrar a nuestros clientes en Aruba.",
          name: "Manuel",
          location: "Aruba",
          website: "lumiaruba.com",
          href: "https://lumiaruba.com/",
        },
        {
          quote:
            "Lo que más valoro de Ramón es su capacidad de convertir ideas en una web funcional, cuidada y fácil de administrar. Tiene un gran ojo para los detalles y siempre busca que el resultado no solo se vea bien, sino que realmente funcione para el negocio.",
          name: "Gabriel",
          location: "CDMX",
          website: "dukeanddon.com",
          href: "https://dukeanddon.com/",
        },
        {
          quote:
            "Ramón nos ayudó a mejorar nuestra presencia online con una solución clara, profesional y enfocada en resultados. Su experiencia en desarrollo, optimización y estructura web se nota en cada parte del trabajo.",
          name: "Gustavo",
          location: "Venezuela",
          website: "disoca.com",
          href: "https://disoca.com/",
        },
        {
          quote:
            "Desde el inicio, Ramón mostró compromiso, organización y mucha disposición para entender las necesidades del proyecto. El resultado fue un sitio moderno, bien pensado y preparado para comunicar mejor nuestra propuesta de valor.",
          name: "Adriana",
          location: "Venezuela",
          website: "mopane.io",
          href: "https://mopane.io/",
        },
      ],
    },
    contact: {
      kicker: "06 / Construyamos algo que importe",
      title: "Tu próximo\nsitio debería\nsubir el nivel.",
      body: "Cuéntame qué estás construyendo, qué no está funcionando o qué quieres hacer distinto.",
      email: "info@leadweb.dev",
      whatsappLabel: "WhatsApp  +58 424 706 7872",
      whatsappHref: "https://wa.me/584247067872",
      socialsLabel: "Redes sociales de Lead Web",
      linkedinLabel: "LinkedIn",
      instagramLabel: "Instagram",
      location: "Desde Venezuela. Trabajando con Florida.",
      name: "Tu nombre",
      namePlaceholder: "¿Cómo te llamo?",
      emailLabel: "Email",
      emailPlaceholder: "tu@empresa.com",
      phone: "Teléfono (opcional)",
      phonePlaceholder: "Tu número de contacto",
      service: "¿Qué tienes en mente?",
      services: [
        { value: "New website", label: "Sitio nuevo" },
        { value: "Redesign", label: "Rediseño" },
        { value: "Performance", label: "Rendimiento" },
      ],
      message: "Un poco sobre tu proyecto",
      messagePlaceholder: "Tus objetivos, tu sitio actual, tu siguiente idea…",
      submit: "Enviar consulta",
      sending: "Enviando tu consulta…",
      privacy: "Tus datos se usan para responder a tu consulta.",
      successTitle: "Tu consulta fue enviada.",
      success:
        "Gracias por compartir tu proyecto. Te responderé lo antes posible.",
      errorTitle: "No pudimos enviar tu mensaje.",
      error:
        "Tus datos siguen aquí. Inténtalo de nuevo o escribe a info@leadweb.dev.",
      invalidEmail: "Introduce un correo válido.",
    },
    footer: {
      copyright: "© 2026 Lead Web Developers",
      tagline: "Con cariño desde VE hasta EE. UU.",
      linkedin: "LinkedIn",
      privacy: "Privacidad",
      instagram: "Instagram",
      instagramHref: "https://www.instagram.com/leadweb.dev",
    },
    privacy: {
      title: "Política de privacidad",
      metaTitle: "Política de privacidad | Lead Web Developers",
      updated: "Última actualización: 6 de septiembre de 2026",
      intro:
        "Esta política describe cómo Lead Web Developers, dirigido por Ramón Zerpa, usa la información que envías a través de este sitio.",
      sections: [
        {
          title: "Quién es responsable",
          body: "Lead Web Developers es una práctica profesional con base en Mérida, Venezuela. Contacto: info@leadweb.dev.",
        },
        {
          title: "Qué recopilamos",
          body: "El formulario de contacto recoge tu nombre, correo, teléfono opcional, servicios seleccionados y mensaje. Si escribes por correo o WhatsApp, recibimos la información que elijas enviar.",
        },
        {
          title: "Para qué se usa",
          body: "Usamos esta información solo para responder a tu consulta y, si trabajamos juntos, para continuar la conversación sobre tu proyecto. No vendemos tus datos.",
        },
        {
          title: "Formspree",
          body: "Los envíos se procesan con Formspree para que el mensaje llegue a info@leadweb.dev. La aceptación de Formspree no equivale a una entrega confirmada en el buzón.",
        },
        {
          title: "Analítica",
          body: "Este sitio no incluye actualmente un script de analítica de terceros. Si eso cambia, esta política se actualizará antes.",
        },
        {
          title: "Conservación",
          body: "Los datos de una consulta se conservan el tiempo necesario para atenderla y para cualquier registro profesional relacionado.",
        },
        {
          title: "Tus opciones",
          body: "Puedes escribir a info@leadweb.dev para preguntar qué información tenemos de una consulta o para pedir que se actualice o elimine, salvo obligación legal de conservarla.",
        },
      ],
    },
    notFound: {
      title: "Página no encontrada",
      body: "Esa dirección no forma parte de este sitio.",
      home: "Volver al inicio",
    },
  },
} as const;

export type Copy = (typeof copy)[Locale];
