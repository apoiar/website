import { DEFAULT_LOCALE, type Locale, isLocale } from "@/config/i18n";

type LinkItem = {
  href: string;
  label: string;
};

type SocialLink = {
  id: "linkedin" | "instagram";
  label: string;
  href: string;
};

type ImageContent = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ContentSchema = {
  brand: {
    shortName: string;
    legalName: string;
    footerDescription: string;
  };
  contact: {
    sectionId: string;
    email: string;
    whatsappNumber: string;
    city: string;
    region: string;
    country: string;
    whatsappUrl: string;
    mailtoUrl: string;
  };
  ui: {
    navbarContactCta: string;
    openMenuAria: string;
    languageLabel: string;
    footerQuickLinksTitle: string;
    footerContactTitle: string;
    whatsappText: string;
    rightsReserved: string;
    whatsappAriaLabel: string;
    mentorImageOverlay: string;
    languageOptions: Record<Locale, string>;
  };
  navLinks: LinkItem[];
  socialLinks: SocialLink[];
  footerQuickLinks: LinkItem[];
  footerLegalLinks: LinkItem[];
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    transformedCount: string;
    transformedLabel: string;
    avatars: Array<{ src: string; alt: string }>;
    mainImage: ImageContent;
    productivityStat: {
      value: string;
      label: string;
    };
  };
  mentoria: {
    sectionId: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    mentor: {
      name: string;
      role: string;
      image: ImageContent;
    };
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  apoio: {
    sectionId: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    highlight: {
      title: string;
      description: string;
      image: ImageContent;
    };
  };
  resultados: {
    sectionId: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    beforeItems: Array<{
      title: string;
      description: string;
    }>;
    afterItems: Array<{
      title: string;
      description: string;
    }>;
    beforeImage: ImageContent;
    afterImage: ImageContent;
  };
  testimonials: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      image: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    whatsappLabel: string;
    emailLabel: string;
  };
};

const BASE_CONTACT = {
  sectionId: "contato",
  email: "ricardo@rfv.net.br",
  whatsappNumber: "5521976763797",
  city: "Sao Paulo",
  region: "SP",
  country: "Brazil",
  whatsappUrl: "https://wa.me/5521976763797",
  mailtoUrl: "mailto:ricardo@rfv.net.br",
};

const BASE_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardo-furtado-vieira/",
  },
  { id: "instagram", label: "Instagram", href: "#" },
];

const BASE_IMAGES = {
  heroMain: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    width: 800,
    height: 600,
  },
  mentor: {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face",
    width: 600,
    height: 750,
  },
  apoioHighlight: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    width: 400,
    height: 300,
  },
  resultadosBefore: {
    src: "/images/antes-operacional-frustrado.jpg",
    width: 400,
    height: 250,
  },
  resultadosAfter: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
    width: 400,
    height: 250,
  },
};

export const CONTENT_BY_LOCALE: Record<Locale, ContentSchema> = {
  pt: {
    brand: {
      shortName: "APOIAR",
      legalName: "APOIAR Consultoria & BPO",
      footerDescription:
        "Vamos de maos dadas ate o seu objetivo. Transformamos a gestao do seu negocio para que voce tenha mais qualidade de vida.",
    },
    contact: BASE_CONTACT,
    ui: {
      navbarContactCta: "Fale Conosco",
      openMenuAria: "Abrir menu",
      languageLabel: "Idioma",
      footerQuickLinksTitle: "Links Rapidos",
      footerContactTitle: "Contato",
      whatsappText: "WhatsApp",
      rightsReserved: "Todos os direitos reservados.",
      whatsappAriaLabel: "Falar no WhatsApp",
      mentorImageOverlay: "Sua foto",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio", label: "Apoio no Dia a Dia" },
      { href: "#resultados", label: "Resultados" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contato" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio", label: "Apoio no Dia a Dia" },
      { href: "#resultados", label: "Resultados" },
      { href: "#", label: "Sobre Nos" },
    ],
    footerLegalLinks: [
      { href: "#", label: "Politica de Privacidade" },
      { href: "#", label: "Termos de Uso" },
    ],
    hero: {
      badge: "Consultoria & BPO",
      titlePrefix: "Trabalhamos pela sua",
      titleHighlight: "Qualidade de Vida",
      description:
        "A gestao eficiente permite que voce saia da caixa e invista tempo no que realmente importa. Voce nao precisa mais estar sozinho na gestao.",
      primaryCta: { href: "#mentoria", label: "Conheca Nossa Mentoria" },
      secondaryCta: { href: "#apoio", label: "Como Funciona" },
      transformedCount: "+150",
      transformedLabel: "empresarios transformados",
      avatars: [
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
      ],
      mainImage: {
        ...BASE_IMAGES.heroMain,
        alt: "Pessoas trabalhando em equipe",
      },
      productivityStat: {
        value: "+40%",
        label: "Produtividade media",
      },
    },
    mentoria: {
      sectionId: "mentoria",
      badge: "Mentoria Personalizada",
      titlePrefix: "Um mentor que esta sempre",
      titleHighlight: "ao seu lado",
      description:
        "Imagine ter um experiente parceiro de negocios disponivel para voce, com encontros regulares por video, linguagem acessivel e um suporte ilimitado via WhatsApp sempre que precisar.",
      mentor: {
        name: "Ricardo Furtado",
        role: "Mentor & Fundador APOIAR",
        image: {
          ...BASE_IMAGES.mentor,
          alt: "Ricardo Furtado - Mentor",
        },
      },
      points: [
        {
          title: "Encontros por Video",
          description:
            "Sessoes semanais ou quinzenais para alinhar estrategias e resolver desafios em tempo real.",
        },
        {
          title: "Suporte Ilimitado WhatsApp",
          description:
            "Uma via direta de comunicacao para tirar duvidas rapidas e receber orientacao sempre que precisar.",
        },
        {
          title: "Linguagem Acessivel",
          description:
            "Sem jargoes complicados. Conversamos na sua lingua, focando no que realmente importa para o seu negocio.",
        },
      ],
    },
    apoio: {
      sectionId: "apoio",
      badge: "Operacao Completa",
      titlePrefix: "Apoio no",
      titleHighlight: "Dia a Dia",
      description:
        "Deixe as tarefas chatas com a gente. Cuidamos de tudo para que voce nao precise se preocupar com a gestao operacional.",
      cards: [
        {
          title: "Gestao Financeira",
          description:
            "Controle de contas a pagar e receber, conciliacao bancaria, fluxo de caixa e relatorios financeiros claros e objetivos.",
        },
        {
          title: "Escalas e RH",
          description:
            "Organizacao de escalas de trabalho, controle de ponto, folha de pagamento e toda a gestao de pessoas sem complicacao.",
        },
        {
          title: "Administrativo",
          description:
            "Documentacao, compliance, compras, fornecedores e toda a burocracia que tira seu tempo do que realmente importa.",
        },
      ],
      highlight: {
        title: "Sem necessidade de gestao direta de funcionarios",
        description:
          "Voce nao precisa mais lidar com contratacoes, treinamentos, ferias ou problemas pessoais da equipe. A APOIAR cuida de tudo, permitindo que voce foque exclusivamente no crescimento estrategico do seu negocio.",
        image: {
          ...BASE_IMAGES.apoioHighlight,
          alt: "Equipe trabalhando",
        },
      },
    },
    resultados: {
      sectionId: "resultados",
      badge: "Transformacao Real",
      titlePrefix: "Saindo do",
      titleHighlight: "Operacional",
      description: "Veja como a vida do empresario muda quando comeca a trabalhar com a APOIAR.",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      beforeItems: [
        {
          title: "Sobrecarga constante",
          description: "Trabalhando 12+ horas por dia, sem tempo para familia ou lazer.",
        },
        {
          title: "Gestao de pessoas estressante",
          description: "Resolvendo problemas de equipe, faltas e conflitos diariamente.",
        },
        {
          title: "Sem visao estrategica",
          description: "Preso em tarefas operacionais, sem tempo para pensar no futuro.",
        },
      ],
      afterItems: [
        {
          title: "Horarios flexiveis",
          description: "Trabalhando de forma estrategica, com tempo para o que realmente importa.",
        },
        {
          title: "Equipe profissionalizada",
          description: "A APOIAR cuida da gestao operacional, voce foca no crescimento.",
        },
        {
          title: "Negocio escalavel",
          description: "Com processos otimizados e mentoria constante, seu negocio cresce.",
        },
      ],
      beforeImage: {
        ...BASE_IMAGES.resultadosBefore,
        alt: "Profissional frustrado no trabalho",
      },
      afterImage: {
        ...BASE_IMAGES.resultadosAfter,
        alt: "Empresario feliz",
      },
    },
    testimonials: {
      badge: "Historias de Sucesso",
      titlePrefix: "O que dizem nossos",
      titleHighlight: "parceiros",
      items: [
        {
          quote:
            "A APOIAR transformou minha relacao com o trabalho. Hoje tenho tempo para minha familia e meu negocio nunca funcionou tao bem.",
          name: "Ana Paula",
          role: "Franqueada, Sao Paulo",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "O suporte via WhatsApp e um diferencial enorme. Sempre que tenho uma duvida, recebo resposta rapida e eficiente.",
          name: "Carlos Eduardo",
          role: "Empresario, Rio de Janeiro",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "Ricardo tem uma didatica incrivel. Conseguiu organizar minha operacao de forma que eu nunca imaginei ser possivel.",
          name: "Mariana Costa",
          role: "Empresaria, Belo Horizonte",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
      ],
    },
    cta: {
      title: "Pronto para transformar seu negocio?",
      description:
        "Vamos juntos construir uma gestao eficiente que permita voce viver melhor. Seu tempo vale ouro.",
      whatsappLabel: "Falar no WhatsApp",
      emailLabel: "Enviar E-mail",
    },
  },
  en: {
    brand: {
      shortName: "APOIAR",
      legalName: "APOIAR Consulting & BPO",
      footerDescription:
        "We walk with you toward your goals. We transform your business management so you can enjoy a better quality of life.",
    },
    contact: BASE_CONTACT,
    ui: {
      navbarContactCta: "Contact Us",
      openMenuAria: "Open menu",
      languageLabel: "Language",
      footerQuickLinksTitle: "Quick Links",
      footerContactTitle: "Contact",
      whatsappText: "WhatsApp",
      rightsReserved: "All rights reserved.",
      whatsappAriaLabel: "Chat on WhatsApp",
      mentorImageOverlay: "Your photo",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      { href: "#mentoria", label: "Mentorship" },
      { href: "#apoio", label: "Daily Operations Support" },
      { href: "#resultados", label: "Results" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contact" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "#mentoria", label: "Mentorship" },
      { href: "#apoio", label: "Daily Operations Support" },
      { href: "#resultados", label: "Results" },
      { href: "#", label: "About Us" },
    ],
    footerLegalLinks: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Use" },
    ],
    hero: {
      badge: "Consulting & BPO",
      titlePrefix: "We work for your",
      titleHighlight: "Quality of Life",
      description:
        "Efficient management lets you step back from daily chaos and invest time in what truly matters. You do not have to manage everything alone anymore.",
      primaryCta: { href: "#mentoria", label: "Discover Our Mentorship" },
      secondaryCta: { href: "#apoio", label: "How It Works" },
      transformedCount: "+150",
      transformedLabel: "business owners transformed",
      avatars: [
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          alt: "Client",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
          alt: "Client",
        },
        {
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          alt: "Client",
        },
      ],
      mainImage: {
        ...BASE_IMAGES.heroMain,
        alt: "People working together",
      },
      productivityStat: {
        value: "+40%",
        label: "Average productivity",
      },
    },
    mentoria: {
      sectionId: "mentoria",
      badge: "Personalized Mentorship",
      titlePrefix: "A mentor who is always",
      titleHighlight: "by your side",
      description:
        "Imagine having an experienced business partner available to you, with regular video sessions, clear communication, and unlimited WhatsApp support whenever you need it.",
      mentor: {
        name: "Ricardo Furtado",
        role: "Mentor & APOIAR Founder",
        image: {
          ...BASE_IMAGES.mentor,
          alt: "Ricardo Furtado - Mentor",
        },
      },
      points: [
        {
          title: "Video Sessions",
          description:
            "Weekly or biweekly sessions to align strategy and solve real challenges in real time.",
        },
        {
          title: "Unlimited WhatsApp Support",
          description:
            "A direct communication channel for quick questions and guidance whenever you need it.",
        },
        {
          title: "Plain Language",
          description:
            "No unnecessary jargon. We speak your language and focus on what truly matters for your business.",
        },
      ],
    },
    apoio: {
      sectionId: "apoio",
      badge: "Full Operations",
      titlePrefix: "Support in your",
      titleHighlight: "Daily Routine",
      description:
        "Let us take care of the tedious tasks. We handle operations so you can stop worrying about day-to-day management.",
      cards: [
        {
          title: "Financial Management",
          description:
            "Control accounts payable and receivable, bank reconciliation, cash flow, and clear financial reports.",
        },
        {
          title: "Scheduling and HR",
          description:
            "Work schedules, attendance tracking, payroll, and people management without unnecessary complexity.",
        },
        {
          title: "Administrative",
          description:
            "Documentation, compliance, procurement, vendors, and all bureaucracy that takes your time away from growth.",
        },
      ],
      highlight: {
        title: "No direct staff management required",
        description:
          "You no longer need to deal with hiring, training, vacations, or personal team issues. APOIAR handles operations so you can focus on strategic growth.",
        image: {
          ...BASE_IMAGES.apoioHighlight,
          alt: "Team working",
        },
      },
    },
    resultados: {
      sectionId: "resultados",
      badge: "Real Transformation",
      titlePrefix: "Moving away from",
      titleHighlight: "Operations",
      description: "See how a business owner life changes when working with APOIAR.",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeItems: [
        {
          title: "Constant overload",
          description: "Working 12+ hours a day with no time for family or leisure.",
        },
        {
          title: "Stressful people management",
          description: "Solving team issues, absences, and conflicts every day.",
        },
        {
          title: "No strategic vision",
          description: "Stuck in operational tasks with no time to think about the future.",
        },
      ],
      afterItems: [
        {
          title: "Flexible schedule",
          description: "Working strategically with time for what matters most.",
        },
        {
          title: "Professionalized team",
          description: "APOIAR takes care of operations while you focus on growth.",
        },
        {
          title: "Scalable business",
          description: "With optimized processes and ongoing mentorship, your business grows.",
        },
      ],
      beforeImage: {
        ...BASE_IMAGES.resultadosBefore,
        alt: "Frustrated professional at work",
      },
      afterImage: {
        ...BASE_IMAGES.resultadosAfter,
        alt: "Happy business owner",
      },
    },
    testimonials: {
      badge: "Success Stories",
      titlePrefix: "What our",
      titleHighlight: "partners say",
      items: [
        {
          quote:
            "APOIAR transformed my relationship with work. I now have time for my family and my business has never run this well.",
          name: "Ana Paula",
          role: "Franchise Owner, Sao Paulo",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "WhatsApp support is a huge differentiator. Whenever I have a question, I get a quick and effective answer.",
          name: "Carlos Eduardo",
          role: "Business Owner, Rio de Janeiro",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "Ricardo has an incredible teaching style. He organized my operation in a way I never thought possible.",
          name: "Mariana Costa",
          role: "Entrepreneur, Belo Horizonte",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
      ],
    },
    cta: {
      title: "Ready to transform your business?",
      description:
        "Let us build efficient management together so you can live better. Your time is valuable.",
      whatsappLabel: "Chat on WhatsApp",
      emailLabel: "Send E-mail",
    },
  },
  es: {
    brand: {
      shortName: "APOIAR",
      legalName: "APOIAR Consultoria & BPO",
      footerDescription:
        "Vamos contigo hasta tu objetivo. Transformamos la gestion de tu negocio para que tengas mejor calidad de vida.",
    },
    contact: BASE_CONTACT,
    ui: {
      navbarContactCta: "Habla con Nosotros",
      openMenuAria: "Abrir menu",
      languageLabel: "Idioma",
      footerQuickLinksTitle: "Enlaces Rapidos",
      footerContactTitle: "Contacto",
      whatsappText: "WhatsApp",
      rightsReserved: "Todos los derechos reservados.",
      whatsappAriaLabel: "Hablar por WhatsApp",
      mentorImageOverlay: "Tu foto",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio", label: "Apoyo Diario" },
      { href: "#resultados", label: "Resultados" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contacto" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio", label: "Apoyo Diario" },
      { href: "#resultados", label: "Resultados" },
      { href: "#", label: "Sobre Nosotros" },
    ],
    footerLegalLinks: [
      { href: "#", label: "Politica de Privacidad" },
      { href: "#", label: "Terminos de Uso" },
    ],
    hero: {
      badge: "Consultoria & BPO",
      titlePrefix: "Trabajamos por tu",
      titleHighlight: "Calidad de Vida",
      description:
        "La gestion eficiente te permite salir de la rutina operativa e invertir tiempo en lo que realmente importa. Ya no tienes que gestionar todo solo.",
      primaryCta: { href: "#mentoria", label: "Conoce Nuestra Mentoria" },
      secondaryCta: { href: "#apoio", label: "Como Funciona" },
      transformedCount: "+150",
      transformedLabel: "empresarios transformados",
      avatars: [
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
        {
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          alt: "Cliente",
        },
      ],
      mainImage: {
        ...BASE_IMAGES.heroMain,
        alt: "Personas trabajando en equipo",
      },
      productivityStat: {
        value: "+40%",
        label: "Productividad media",
      },
    },
    mentoria: {
      sectionId: "mentoria",
      badge: "Mentoria Personalizada",
      titlePrefix: "Un mentor siempre",
      titleHighlight: "a tu lado",
      description:
        "Imagina tener un socio de negocios con experiencia disponible para ti, con reuniones por video, lenguaje claro y soporte ilimitado por WhatsApp cuando lo necesites.",
      mentor: {
        name: "Ricardo Furtado",
        role: "Mentor y Fundador de APOIAR",
        image: {
          ...BASE_IMAGES.mentor,
          alt: "Ricardo Furtado - Mentor",
        },
      },
      points: [
        {
          title: "Reuniones por Video",
          description:
            "Sesiones semanales o quincenales para alinear estrategias y resolver desafios en tiempo real.",
        },
        {
          title: "Soporte Ilimitado por WhatsApp",
          description:
            "Un canal directo para resolver dudas rapidas y recibir orientacion siempre que lo necesites.",
        },
        {
          title: "Lenguaje Claro",
          description:
            "Sin jerga complicada. Hablamos tu idioma y nos enfocamos en lo que realmente importa para tu negocio.",
        },
      ],
    },
    apoio: {
      sectionId: "apoio",
      badge: "Operacion Completa",
      titlePrefix: "Apoyo en el",
      titleHighlight: "Dia a Dia",
      description:
        "Deja las tareas tediosas con nosotros. Nos ocupamos de todo para que no tengas que preocuparte por la gestion operativa.",
      cards: [
        {
          title: "Gestion Financiera",
          description:
            "Control de cuentas por pagar y cobrar, conciliacion bancaria, flujo de caja e informes financieros claros.",
        },
        {
          title: "Turnos y RRHH",
          description:
            "Organizacion de turnos, control de asistencia, nomina y gestion de personas sin complicaciones.",
        },
        {
          title: "Administrativo",
          description:
            "Documentacion, compliance, compras, proveedores y toda la burocracia que te quita tiempo.",
        },
      ],
      highlight: {
        title: "Sin gestion directa de empleados",
        description:
          "Ya no necesitas ocuparte de contrataciones, capacitaciones, vacaciones o problemas personales del equipo. APOIAR se encarga de la operacion para que te enfoques en crecer.",
        image: {
          ...BASE_IMAGES.apoioHighlight,
          alt: "Equipo trabajando",
        },
      },
    },
    resultados: {
      sectionId: "resultados",
      badge: "Transformacion Real",
      titlePrefix: "Saliendo de lo",
      titleHighlight: "Operativo",
      description: "Mira como cambia la vida del empresario cuando trabaja con APOIAR.",
      beforeLabel: "Antes",
      afterLabel: "Despues",
      beforeItems: [
        {
          title: "Sobrecarga constante",
          description: "Trabajando mas de 12 horas al dia, sin tiempo para familia o ocio.",
        },
        {
          title: "Gestion de personas estresante",
          description: "Resolviendo conflictos, ausencias y problemas del equipo a diario.",
        },
        {
          title: "Sin vision estrategica",
          description: "Atrapado en tareas operativas, sin tiempo para pensar en el futuro.",
        },
      ],
      afterItems: [
        {
          title: "Horario flexible",
          description: "Trabajo estrategico con tiempo para lo que realmente importa.",
        },
        {
          title: "Equipo profesionalizado",
          description: "APOIAR cuida la operacion y tu te enfocas en crecer.",
        },
        {
          title: "Negocio escalable",
          description: "Con procesos optimizados y mentoria constante, tu negocio crece.",
        },
      ],
      beforeImage: {
        ...BASE_IMAGES.resultadosBefore,
        alt: "Profesional frustrado en el trabajo",
      },
      afterImage: {
        ...BASE_IMAGES.resultadosAfter,
        alt: "Empresario feliz",
      },
    },
    testimonials: {
      badge: "Historias de Exito",
      titlePrefix: "Lo que dicen nuestros",
      titleHighlight: "socios",
      items: [
        {
          quote:
            "APOIAR transformo mi relacion con el trabajo. Hoy tengo tiempo para mi familia y mi negocio nunca funciono tan bien.",
          name: "Ana Paula",
          role: "Franquiciada, Sao Paulo",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "El soporte por WhatsApp es un diferencial enorme. Siempre que tengo una duda, recibo respuesta rapida y eficiente.",
          name: "Carlos Eduardo",
          role: "Empresario, Rio de Janeiro",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        },
        {
          quote:
            "Ricardo tiene una didactica increible. Organizo mi operacion de una forma que nunca imagine posible.",
          name: "Mariana Costa",
          role: "Empresaria, Belo Horizonte",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        },
      ],
    },
    cta: {
      title: "Listo para transformar tu negocio?",
      description:
        "Construyamos juntos una gestion eficiente para que vivas mejor. Tu tiempo vale oro.",
      whatsappLabel: "Hablar por WhatsApp",
      emailLabel: "Enviar E-mail",
    },
  },
};

export function getContent(locale: string | Locale): ContentSchema {
  if (isLocale(locale)) {
    return CONTENT_BY_LOCALE[locale];
  }

  return CONTENT_BY_LOCALE[DEFAULT_LOCALE];
}
