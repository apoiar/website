import { DEFAULT_LOCALE, type Locale, isLocale } from "@/config/i18n";

type LinkItem = {
  href: string;
  label: string;
  subItems?: Array<{
    label: string;
    href: string;
    group?: string;
  }>;
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
    footerLocationLabel: string;
    footerCoverageLabel: string;
    whatsappText: string;
    rightsReserved: string;
    whatsappAriaLabel: string;
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
  apoioMei: {
    sectionId: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    services: Array<{
      title: string;
      description: string;
    }>;
    cta: {
      href: string;
      label: string;
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
      image?: string;
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
    src: "/assets/RicardoFurtado.jpeg",
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
      footerLocationLabel: "Rio de Janeiro, RJ - Brasil",
      footerCoverageLabel: "Sede no Rio de Janeiro com atendimento em todo o Brasil (online).",
      whatsappText: "WhatsApp",
      rightsReserved: "Todos os direitos reservados.",
      whatsappAriaLabel: "Falar no WhatsApp",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      {
        href: "/",
        label: "Portfólio",
        subItems: [
          { group: "BPO", label: "Apoio: Um assistente administrativo para chamar de seu", href: "#apoio" },
          { group: "BPO", label: "Atendimento: Central de relacionamento online", href: "#apoio" },
          { group: "BPO", label: "Comercial: Escale suas vendas com nossos especialistas", href: "#apoio" },
          { group: "Apoio ao MEI", label: "Abertura de CNPJ", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Emissão de Notas Fiscais", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Emissão de DAS", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Declaração anual do MEI", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Encerramento do MEI", href: "#apoio-mei" },
          { group: "Mentoria Empresarial", label: "Mentoria Empresarial", href: "#mentoria" },
          { group: "Tecnologia", label: "App Atender: Central de atendimento multichip via WhatsApp", href: "#" },
          { group: "Tecnologia", label: "App Kito: Leitura, entretenimento e estímulos", href: "#" },
        ]
      },
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
      { href: "/politica-de-privacidade", label: "Politica de Privacidade" },
      { href: "/termos-de-uso", label: "Termos de Uso" },
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
        "Deixe as tarefas operacionais com a gente. Cuidamos de tudo para que voce nao precise se preocupar com a gestao operacional.",
      cards: [
        {
          title: "Escalas de trabalho",
          description:
            "Organizacao de escalas de trabalho e controle de ponto para que voce nao precise se preocupar com atrasos e faltas.",
        },
        {
          title: "Administrativo",
          description:
            "Documentacao, compliance, compras, fornecedores e toda a burocracia que tira seu tempo do que realmente importa.",
        },
        {
          title: "Atendimento",
          description:
            "Central de relacionamento online todos os dias para garantir que seus clientes sejam sempre bem atendidos.",
        },
        {
          title: "Comercial",
          description:
            "Escale suas vendas com nossos especialistas e converta mais leads em clientes reais.",
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
    apoioMei: {
      sectionId: "apoio-mei",
      badge: "Apoio ao MEI",
      titlePrefix: "Tudo para o",
      titleHighlight: "MEI em Dia",
      description:
        "Centralize as demandas do MEI com o nosso time e evite retrabalho, atrasos e multas. Cuidamos da rotina burocratica enquanto voce foca no crescimento.",
      services: [
        {
          title: "Abertura de CNPJ",
          description:
            "Orientacao completa para abertura do MEI com enquadramento correto desde o primeiro passo.",
        },
        {
          title: "Emissao de Notas Fiscais",
          description:
            "Suporte para emissao de notas fiscais com padrao e seguranca para atender clientes e orgaos fiscalizadores.",
        },
        {
          title: "Emissao de DAS",
          description:
            "Controle e emissao mensal do DAS para manter o CNPJ regular e sem sustos com vencimentos.",
        },
        {
          title: "Declaracao Anual do MEI",
          description:
            "Preparacao e envio da declaracao anual com revisao de dados para evitar inconsistencias.",
        },
        {
          title: "Encerramento do MEI",
          description:
            "Acompanhamento no processo de baixa com orientacoes sobre pendencias e regularizacao final.",
        },
      ],
      cta: {
        href: "#contato",
        label: "Quero apoio para meu MEI",
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
          quote: "Atendimento rápido e eficaz. Profissionais extremamente qualificados 🙏",
          name: "Wesley Alcântara Gaiola",
          role: "Ribeirão Preto - SP",
        },
        {
          quote: "Empresa séria, que visa ajudar na organização e no crescimento sustentável dos seus clientes! Ter a Apoiar como parceira de negócios, nos ajuda muito em nosso dia a dia. Altamente recomendado!",
          name: "Ademir Morgado - Empresário",
          role: "Santo André - SP",
        },
        {
          quote: "Precisei dos serviços da Apoiar e os profissionais foram muito qualificados e só tenho elogios para esta empresa 🙌🏻🙏🏼",
          name: "Kelly Ceccon - Empresária",
          role: "São Paulo - SP",
        },
        {
          quote: "Mais do que um apoio, o time da Apoiar chegou para agregar valor ao meu negócio. Cuidam com o mesmo carinho e atenção que eu. Parceria apertadíssima e muito competente!",
          name: "Simone Morgado - Administradora",
          role: "São Paulo - SP",
        },
        {
          quote: "A Apoiar é excelente, ela entrega o que promete! É satisfatório trabalhar com a empresa e com a equipe da Apoiar, super recomendo!!",
          name: "Tainah Bento - Psicóloga e Empresária",
          role: "Cascavel - PR",
        },
        {
          quote: "Ricardo chegou no momento mais desafiador da minha trajetória empresarial e esteve presente em cada passo da reconstrução. A mentoria virou uma chave: trouxe direção quando faltava clareza, e a APOIAR organizou minha operação a ponto de eu voltar a crescer com estratégia e qualidade de vida.",
          name: "Priscilla Filgueiras - Empresária",
          role: "Londrina - PR",
        },
        {
          quote: "A consultoria que recebi da Apoiar foi fundamental para aprimorar estratégias operacionais, comerciais e de marketing para a minha unidade. Com o apoio deles, consegui expandir significativamente o alcance e a aquisição de novos clientes. É um parceiro indispensável para o sucesso e crescimento do nosso negócio.",
          name: "Artur Costa - Empresária",
          role: "Maricá - RJ",
        },
        {
          quote: "Profissionalismo e competência. Uma empresa que pensou e se preparou para apoiar empresários em seus principais gaps.",
          name: "Wellington Neto - Empresário",
          role: "Ponta Grossa - PR",
        }
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
      footerLocationLabel: "Rio de Janeiro, RJ - Brazil",
      footerCoverageLabel: "Headquartered in Rio de Janeiro serving all Brazil (online).",
      whatsappText: "WhatsApp",
      rightsReserved: "All rights reserved.",
      whatsappAriaLabel: "Chat on WhatsApp",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      {
        href: "/",
        label: "Portfolio",
        subItems: [
          { group: "BPO", label: "Support: Your administrative assistant", href: "#apoio" },
          { group: "BPO", label: "Customer Service: Online relationship center", href: "#apoio" },
          { group: "BPO", label: "Commercial: Scale sales with our experts", href: "#apoio" },
          { group: "MEI Support", label: "Company Opening", href: "#apoio-mei" },
          { group: "MEI Support", label: "Invoice Issuance", href: "#apoio-mei" },
          { group: "MEI Support", label: "DAS Issuance", href: "#apoio-mei" },
          { group: "MEI Support", label: "Annual Declaration", href: "#apoio-mei" },
          { group: "MEI Support", label: "Company Closure", href: "#apoio-mei" },
          { group: "Mentorship", label: "Business Mentorship", href: "#mentoria" },
          { group: "Technology", label: "App Atender", href: "#" },
          { group: "Technology", label: "App Kito", href: "#" },
        ]
      },
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
      { href: "/politica-de-privacidade", label: "Privacy Policy" },
      { href: "/termos-de-uso", label: "Terms of Use" },
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
        "Let us take care of the operational tasks. We handle operations so you can stop worrying about day-to-day management.",
      cards: [
        {
          title: "Work Schedules",
          description:
            "Work schedules and attendance tracking so you do not have to worry about delays and absences.",
        },
        {
          title: "Administrative",
          description:
            "Documentation, compliance, procurement, vendors, and all bureaucracy that takes your time away from growth.",
        },
        {
          title: "Customer Service",
          description:
            "Online relationship center every day to ensure your customers are always well taken care of.",
        },
        {
          title: "Commercial",
          description:
            "Scale your sales with our experts and convert more leads into real customers.",
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
    apoioMei: {
      sectionId: "apoio-mei",
      badge: "MEI Support",
      titlePrefix: "Everything your",
      titleHighlight: "MEI Needs",
      description:
        "Centralize your MEI routines with our team and avoid delays, rework, and penalties. We handle bureaucracy while you focus on growth.",
      services: [
        {
          title: "Company Opening",
          description:
            "Complete guidance to open your MEI with the right setup from day one.",
        },
        {
          title: "Invoice Issuance",
          description:
            "Practical support to issue invoices correctly and keep your operation reliable.",
        },
        {
          title: "DAS Issuance",
          description:
            "Monthly DAS control and issuance to keep your registration regular and up to date.",
        },
        {
          title: "Annual Declaration",
          description:
            "Preparation and submission of your annual declaration with data checks to prevent inconsistencies.",
        },
        {
          title: "Company Closure",
          description:
            "Support through the closure process, including pending items and final regularization steps.",
        },
      ],
      cta: {
        href: "#contato",
        label: "Get MEI support now",
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
          quote: "Fast and effective service. Extremely qualified professionals.",
          name: "Wesley Alcântara Gaiola",
          role: "Business Owner - Ribeirao Preto, SP",
        },
        {
          quote: "A serious company focused on helping clients with organization and sustainable growth. Having Apoiar as a business partner helps us a lot in our day-to-day operation. Highly recommended.",
          name: "Ademir Morgado - Business Owner",
          role: "Santo Andre, SP",
        },
        {
          quote: "I needed Apoiar's services and the professionals were highly qualified. I only have positive feedback about this company.",
          name: "Kelly Ceccon - Business Owner",
          role: "Sao Paulo, SP",
        },
        {
          quote: "More than support, Apoiar's team added real value to my business. They care with the same attention and dedication I do. A close and highly competent partnership.",
          name: "Simone Morgado - Administrator",
          role: "Sao Paulo, SP",
        },
        {
          quote: "Apoiar is excellent and delivers what it promises. It is very satisfying to work with the company and team. I strongly recommend it.",
          name: "Tainah Bento - Psychologist and Business Owner",
          role: "Cascavel, PR",
        },
        {
          quote: "Ricardo arrived at the most challenging moment of my entrepreneurial journey and was present at every step of rebuilding. Mentorship changed everything: it brought direction when I lacked clarity, and APOIAR organized my operation so I could grow again with strategy and quality of life.",
          name: "Priscilla Filgueiras - Business Owner",
          role: "Londrina, PR",
        },
        {
          quote: "The consulting I received from Apoiar was essential to improve operational, commercial, and marketing strategies for my unit. With their support, I significantly expanded reach and new client acquisition. They are an indispensable partner for business success and growth.",
          name: "Artur Costa - Business Owner",
          role: "Marica, RJ",
        },
        {
          quote: "Professionalism and competence. A company that prepared itself to support business owners in their main gaps.",
          name: "Wellington Neto - Business Owner",
          role: "Ponta Grossa, PR",
        }

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
      footerLocationLabel: "Rio de Janeiro, RJ - Brasil",
      footerCoverageLabel: "Sede en Rio de Janeiro con atencion en todo Brasil (en linea).",
      whatsappText: "WhatsApp",
      rightsReserved: "Todos los derechos reservados.",
      whatsappAriaLabel: "Hablar por WhatsApp",
      languageOptions: {
        pt: "PT",
        en: "EN",
        es: "ES",
      },
    },
    navLinks: [
      {
        href: "/",
        label: "Portafolio",
        subItems: [
          { group: "BPO", label: "Apoyo: Tu asistente administrativo", href: "#apoio" },
          { group: "BPO", label: "Atención: Central de relacionamiento online", href: "#apoio" },
          { group: "BPO", label: "Comercial: Escala tus ventas con nuestros especialistas", href: "#apoio" },
          { group: "Apoyo MEI", label: "Apertura de Empresa", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Emisión de Facturas", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Emisión de DAS", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Declaración Anual", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Cierre de Empresa", href: "#apoio-mei" },
          { group: "Mentoría", label: "Mentoría Empresarial", href: "#mentoria" },
          { group: "Tecnología", label: "App Atender", href: "#" },
          { group: "Tecnología", label: "App Kito", href: "#" },
        ]
      },
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
      { href: "/politica-de-privacidade", label: "Politica de Privacidad" },
      { href: "/termos-de-uso", label: "Terminos de Uso" },
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
        "Deja las tareas operativas con nosotros. Nos ocupamos de todo para que no tengas que preocuparte por la gestion operativa.",
      cards: [
        {
          title: "Horarios de Trabajo",
          description:
            "Organizacion de horarios y control de asistencia para que no tengas que preocuparte por retrasos y ausencias.",
        },
        {
          title: "Administrativo",
          description:
            "Documentacion, compliance, compras, proveedores y toda la burocracia que te quita tiempo.",
        },
        {
          title: "Atención al Cliente",
          description:
            "Centro de relaciones online todos los días para garantizar que sus clientes siempre estén bien atendidos.",
        },
        {
          title: "Comercial",
          description:
            "Escale sus ventas con nuestros especialistas y convierta más clientes potenciales en clientes reales.",
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
    apoioMei: {
      sectionId: "apoio-mei",
      badge: "Apoyo MEI",
      titlePrefix: "Todo para tu",
      titleHighlight: "MEI al dia",
      description:
        "Centraliza la rutina de tu MEI con nuestro equipo y evita atrasos, retrabajo y multas. Nosotros gestionamos la burocracia y tu te enfocas en crecer.",
      services: [
        {
          title: "Apertura de Empresa",
          description:
            "Acompañamiento completo para abrir tu MEI con el encuadre correcto desde el inicio.",
        },
        {
          title: "Emision de Facturas",
          description:
            "Soporte para emitir facturas correctamente y mantener tu operacion segura y confiable.",
        },
        {
          title: "Emision de DAS",
          description:
            "Control y emision mensual del DAS para mantener tu registro regularizado.",
        },
        {
          title: "Declaracion Anual",
          description:
            "Preparacion y envio de la declaracion anual con revision de datos para evitar inconsistencias.",
        },
        {
          title: "Cierre de Empresa",
          description:
            "Acompañamiento en el cierre del MEI con orientacion sobre pendientes y regularizacion final.",
        },
      ],
      cta: {
        href: "#contato",
        label: "Quiero apoyo para mi MEI",
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
          quote: "Atencion rapida y eficaz. Profesionales extremadamente calificados.",
          name: "Wesley Alcântara Gaiola",
          role: "Empresario - Ribeirao Preto, SP",
        },
        {
          quote: "Empresa seria que ayuda en la organizacion y el crecimiento sostenible de sus clientes. Tener a Apoiar como socio de negocios nos ayuda mucho en el dia a dia. Altamente recomendado.",
          name: "Ademir Morgado - Empresario",
          role: "Santo Andre, SP",
        },
        {
          quote: "Necesite los servicios de Apoiar y los profesionales fueron muy calificados. Solo tengo elogios para esta empresa.",
          name: "Kelly Ceccon - Empresaria",
          role: "Sao Paulo, SP",
        },
        {
          quote: "Mas que apoyo, el equipo de Apoiar agrego valor real a mi negocio. Cuidan con la misma atencion y dedicacion que yo. Una alianza cercana y muy competente.",
          name: "Simone Morgado - Administradora",
          role: "Sao Paulo, SP",
        },
        {
          quote: "Apoiar es excelente y cumple lo que promete. Es muy satisfactorio trabajar con la empresa y su equipo. La recomiendo totalmente.",
          name: "Tainah Bento - Psicologa y Empresaria",
          role: "Cascavel, PR",
        },
        {
          quote: "Ricardo llego en el momento mas desafiante de mi trayectoria empresarial y estuvo presente en cada paso de la reconstruccion. La mentoria fue un punto de cambio: trajo direccion cuando faltaba claridad, y APOIAR organizo mi operacion para volver a crecer con estrategia y calidad de vida.",
          name: "Priscilla Filgueiras - Empresaria",
          role: "Londrina, PR",
        },
        {
          quote: "La consultoria que recibi de Apoiar fue clave para mejorar estrategias operativas, comerciales y de marketing de mi unidad. Con su apoyo, amplie significativamente el alcance y la adquisicion de nuevos clientes. Es un socio indispensable para el exito y crecimiento del negocio.",
          name: "Artur Costa - Empresaria",
          role: "Marica, RJ",
        },
        {
          quote: "Profesionalismo y competencia. Una empresa que se preparo para apoyar a empresarios en sus principales brechas.",
          name: "Wellington Neto - Empresario",
          role: "Ponta Grossa, PR",
        }
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
