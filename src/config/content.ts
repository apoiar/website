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
  id: "linkedin" | "instagram" | "facebook" | "google-business";
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
    ouvidoriaLabel: string;
    restrictedAccessLabel: string;
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
  tecnologia: {
    sectionId: string;
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    apps: Array<{
      name: string;
      description: string;
      icon: string;
      appStoreUrl: string;
      playStoreUrl: string;
    }>;
  };
  ouvidoria: {
    sectionId: string;
    badge: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    typeLabel: string;
    typePlaceholder: string;
    typeInternalLabel: string;
    typeExternalLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    errorMessage: string;
    sidebarTitle: string;
    sidebarItems: string[];
    confidentialityNote: string;
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
  whatsappNumber: "5521988415352",
  city: "Sao Paulo",
  region: "SP",
  country: "Brazil",
  whatsappUrl: "https://wa.me/5521988415352",
  mailtoUrl: "mailto:ricardo@rfv.net.br",
};

const BASE_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardo-furtado-vieira/",
  },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/apoiar.bpo/" },
  { id: "facebook", label: "Facebook", href: "#" },
  {
    id: "google-business",
    label: "Google Meu Negocio",
    href: "#",
  },
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
        "Vamos de mãos dadas até o seu objetivo. Transformamos a gestão do seu negócio para que você tenha mais qualidade de vida.",
    },
    contact: BASE_CONTACT,
    ui: {
      navbarContactCta: "Fale Conosco",
      ouvidoriaLabel: "Ouvidoria",
      restrictedAccessLabel: "Acesso clientes",
      openMenuAria: "Abrir menu",
      languageLabel: "Idioma",
      footerQuickLinksTitle: "Links Rápidos",
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
          { group: "BPO", label: "Atendimento: Recurso dedicado ou compartilhado", href: "#apoio" },
          { group: "BPO", label: "Comercial: Escale suas vendas com nossos especialistas", href: "#apoio" },
          {
            group: "BPO",
            label: "Outras áreas operacionais - em sua empresa ou na nossa estrutura.",
            href: "#apoio",
          },
          { group: "Apoio ao MEI", label: "Abertura de CNPJ", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Emissão de Notas Fiscais", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Emissão de DAS", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Declaração anual do MEI", href: "#apoio-mei" },
          { group: "Apoio ao MEI", label: "Encerramento do MEI", href: "#apoio-mei" },
          { group: "Mentoria Empresarial", label: "Mentoria Empresarial", href: "#" },
          { group: "Mentoria Empresarial", label: "\u2022 Pontual", href: "#mentoria" },
          { group: "Mentoria Empresarial", label: "\u2022 Semanal", href: "#mentoria" },
          { group: "Mentoria Empresarial", label: "\u2022 Quinzenal", href: "#mentoria" },
          { group: "Mentoria Empresarial", label: "\u2022 Mensal", href: "#mentoria" },
          { group: "Tecnologia", label: "App Atender: Central de atendimento multichip via WhatsApp", href: "#tecnologia" },
          { group: "Tecnologia", label: "App Kito: Leitura, entretenimento e estímulos", href: "#app-kito" },
        ]
      },
      { href: "#resultados", label: "Resultados" },
      { href: "/ouvidoria", label: "Ouvidoria" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contato" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "/ouvidoria", label: "Ouvidoria" },
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio-mei", label: "Apoio ao MEI" },
      { href: "#apoio", label: "Apoio no Dia a Dia" },
      { href: "#resultados", label: "Resultados" },
      { href: "#contato", label: "Contato" },
    ],
    footerLegalLinks: [
      { href: "/politica-de-privacidade", label: "Política de Privacidade" },
      { href: "/termos-de-uso", label: "Termos de Uso" },
    ],
    hero: {
      badge: "Consultoria & BPO",
      titlePrefix: "Trabalhamos pela sua",
      titleHighlight: "Qualidade de Vida",
      description:
        "A gestão eficiente permite que você saia da caixa e invista tempo no que realmente importa. Você não precisa mais estar sozinho na gestão.",
      primaryCta: { href: "#mentoria", label: "Conheça Nossa Mentoria" },
      secondaryCta: { href: "#apoio", label: "Como Funciona" },
      transformedCount: "+150",
      transformedLabel: "empresários transformados",
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
        label: "Produtividade média",
      },
    },
    mentoria: {
      sectionId: "mentoria",
      badge: "Mentoria Personalizada",
      titlePrefix: "Um mentor que está sempre",
      titleHighlight: "ao seu lado",
      description:
        "Imagine ter um experiente parceiro de negócios disponível para você, com encontros regulares por vídeo, linguagem acessível e suporte ilimitado via WhatsApp sempre que precisar.",
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
          title: "Encontros por Vídeo",
          description:
            "Sessões semanais ou quinzenais para alinhar estratégias e resolver desafios em tempo real.",
        },
        {
          title: "Suporte Ilimitado WhatsApp",
          description:
            "Uma via direta de comunicação para tirar dúvidas rápidas e receber orientação sempre que precisar.",
        },
        {
          title: "Linguagem Acessível",
          description:
            "Sem jargões complicados. Conversamos na sua língua, focando no que realmente importa para o seu negócio.",
        },
      ],
    },
    apoio: {
      sectionId: "apoio",
      badge: "Operação Completa",
      titlePrefix: "Apoio no",
      titleHighlight: "Dia a Dia",
      description:
        "Deixe as tarefas operacionais com a gente. Cuidamos de tudo para que você não precise se preocupar com a gestão operacional.",
      cards: [
        {
          title: "Administrativo",
          description:
            "Recurso dedicado ou compartilhado! Tenha um assistente administrativo para fazer as tarefas operacionais enquanto você foca no estratégico.",
        },
        {
          title: "Atendimento",
          description:
            "Documentos, contratos, escalas de trabalho, contato com clientes e fornecedores, triagem, recrutamento e seleção de novos talentos... deixe todo o operacional conosco!",
        },
        {
          title: "Comercial",
          description:
            "Escale suas vendas com nossos especialistas e converta mais leads em clientes reais.",
        },
      ],
      highlight: {
        title: "Sem necessidade de gestão direta de funcionários",
        description:
          "Você não precisa mais lidar com contratações, treinamentos, férias ou problemas pessoais da equipe. A APOIAR cuida de tudo, permitindo que você foque exclusivamente no crescimento estratégico do seu negócio.",
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
        "Centralize as demandas do MEI com o nosso time e evite retrabalho, atrasos e multas. Cuidamos da rotina burocrática enquanto você foca no crescimento.",
      services: [
        {
          title: "Abertura de CNPJ",
          description:
            "Orientação completa para abertura do MEI com enquadramento correto desde o primeiro passo.",
        },
        {
          title: "Emissão de Notas Fiscais",
          description:
            "Suporte para emissão de notas fiscais com padrão e segurança para atender clientes e órgãos fiscalizadores.",
        },
        {
          title: "Emissão de DAS",
          description:
            "Controle e emissão mensal do DAS para manter o CNPJ regular e sem sustos com vencimentos.",
        },
        {
          title: "Declaração Anual do MEI",
          description:
            "Preparação e envio da declaração anual com revisão de dados para evitar inconsistências.",
        },
        {
          title: "Encerramento do MEI",
          description:
            "Acompanhamento no processo de baixa, com orientações sobre pendências e regularização final.",
        },
      ],
      cta: {
        href: "#contato",
        label: "Quero apoio para meu MEI",
      },
    },
    resultados: {
      sectionId: "resultados",
      badge: "Transformação Real",
      titlePrefix: "Saindo do",
      titleHighlight: "Operacional",
      description: "Veja como a vida do empresário muda quando começa a trabalhar com a APOIAR.",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      beforeItems: [
        {
          title: "Sobrecarga constante",
          description: "Trabalhando 12+ horas por dia, sem tempo para família ou lazer.",
        },
        {
          title: "Gestão de pessoas estressante",
          description: "Resolvendo problemas de equipe, faltas e conflitos diariamente.",
        },
        {
          title: "Sem visão estratégica",
          description: "Preso em tarefas operacionais, sem tempo para pensar no futuro.",
        },
      ],
      afterItems: [
        {
          title: "Horários flexíveis",
          description: "Trabalhando de forma estratégica, com tempo para o que realmente importa.",
        },
        {
          title: "Equipe profissionalizada",
          description: "A APOIAR cuida da gestão operacional, você foca no crescimento.",
        },
        {
          title: "Negócio escalável",
          description: "Com processos otimizados e mentoria constante, seu negócio cresce.",
        },
      ],
      beforeImage: {
        ...BASE_IMAGES.resultadosBefore,
        alt: "Profissional frustrado no trabalho",
      },
      afterImage: {
        ...BASE_IMAGES.resultadosAfter,
        alt: "Empresário feliz",
      },
    },
    testimonials: {
      badge: "Histórias de Sucesso",
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
          name: "Arthur Costa - Empresário",
          role: "Maricá - RJ",
          image: "/assets/testimonials/ArthurCosta.jpeg",
        },
        {
          quote: "Profissionalismo e competência. Uma empresa que pensou e se preparou para apoiar empresários em seus principais gaps.",
          name: "Wellington Neto - Empresário",
          role: "Ponta Grossa - PR",
        },
        {
          quote: "Com a Apoiar, pude otimizar meu tempo para exercer as atividades de gestora, pois os profissionais treinados e qualificados da Apoiar assumiram as atividades administrativas e de atendimento, com total eficiência!",
          name: "Eliana Abdalla - Empresária",
          role: "São Luís - MA",
          image: "/assets/testimonials/ElianaAbdalla.jpeg",
        },
        {
          quote: "A Apoiar profissionalizou nossa operação. Superamos os desafios da gestão e caminhamos para um modelo de negócio seguro, escalável e focado na excelência do cuidado domiciliar.",
          name: "Jeanice Lasta - Empresária",
          role: "Torres - RS",
          image: "/assets/testimonials/JeaniceLasta.jpeg",
        },
        {
          quote: "Sou cliente da APOIAR e digo com toda certeza: é aquele parceiro que a gente confia de verdade! 👏✨ Uso o setor comercial que é feito com dedicação, responsabilidade e muito comprometimento. Com cuidado, atenção e vontade real de ajudar o cliente a crescer. Mais do que um excelente prestador de serviço, é um parceiro que caminha junto. Parabéns pelo trabalho sério e pela amizade construída ao longo dessa parceria! 🌟",
          name: "Rita De Cássia Audickas - Enfermeira",
          role: "São Caetano do Sul - SP",
        }
      ],
    },
    tecnologia: {
      sectionId: "tecnologia",
      badge: "Tecnologia APOIAR",
      titlePrefix: "Soluções que simplificam sua",
      titleHighlight: "Operação Digital",
      description:
        "Conheça nossos apps para atendimento e experiência do cliente. Ferramentas práticas para ganhar velocidade e padronizar a rotina.",
      apps: [
        {
          name: "App Atender",
          description:
            "Plataforma multichip de atendimento via WhatsApp. Conecte quantos chips quiser e tenha quantos departamentos e usuários desejar! Profissionalize seu atendimento com agendamento de mensagens, Kanban, bloco de notas, chat interno, respostas rápidas e muito mais!",
          icon: "placeholder-app-atender",
          appStoreUrl: "https://atenderapp.rfv.net.br/",
          playStoreUrl: "https://atenderapp.rfv.net.br/",
        },
        {
          name: "App Kito",
          description:
            "Livros, mini livros, jogos e muito estímulo para deixar sua mente ativa!",
          icon: "/assets/appsIcons/Kito_app_icon.webp",
          appStoreUrl: "https://apps.apple.com/br/app/kito/id6749103511",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.acl.kitomobileapp&hl=pt_BR",
        },
      ],
    },
    ouvidoria: {
      sectionId: "ouvidoria",
      badge: "Canal de Ética e Transparência",
      title: "Ouvidoria APOIAR",
      description:
        "Use este canal para registrar denúncias internas ou externas com sigilo e tratamento responsável.",
      formTitle: "Envie sua denúncia",
      formDescription:
        "Os campos de identificação são opcionais. Sua mensagem será enviada diretamente para o responsável.",
      nameLabel: "Nome (opcional)",
      namePlaceholder: "Seu nome",
      emailLabel: "Email (opcional)",
      emailPlaceholder: "voce@exemplo.com",
      phoneLabel: "Telefone (opcional)",
      phonePlaceholder: "(00) 00000-0000",
      typeLabel: "Tipo de denúncia",
      typePlaceholder: "Selecione o tipo",
      typeInternalLabel: "Interna",
      typeExternalLabel: "Externa",
      messageLabel: "Texto da denúncia",
      messagePlaceholder: "Descreva o ocorrido com o máximo de detalhes.",
      submitLabel: "Enviar denúncia",
      submittingLabel: "Enviando...",
      successMessage: "Denúncia enviada com sucesso.",
      errorMessage: "Não foi possível enviar agora. Tente novamente em instantes.",
      sidebarTitle: "Como funciona",
      sidebarItems: [
        "Sua denúncia chega diretamente ao canal de ouvidoria.",
        "A triagem inicial é feita com confidencialidade.",
        "Os dados são tratados em conformidade com nossa política de privacidade.",
      ],
      confidentialityNote:
        "Ao enviar, você declara que as informações são verdadeiras e autoriza o tratamento para apuração.",
    },
    cta: {
      title: "Pronto para transformar seu negócio?",
      description:
        "Vamos juntos construir uma gestão eficiente que permita que você viva melhor. Seu tempo vale ouro.",
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
      ouvidoriaLabel: "Ombudsman",
      restrictedAccessLabel: "Restricted access",
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
          {
            group: "BPO",
            label: "Other operational areas - in your company or in our structure.",
            href: "#apoio",
          },
          { group: "MEI Support", label: "Company Opening", href: "#apoio-mei" },
          { group: "MEI Support", label: "Invoice Issuance", href: "#apoio-mei" },
          { group: "MEI Support", label: "DAS Issuance", href: "#apoio-mei" },
          { group: "MEI Support", label: "Annual Declaration", href: "#apoio-mei" },
          { group: "MEI Support", label: "Company Closure", href: "#apoio-mei" },
          { group: "Mentorship", label: "Business Mentorship", href: "#" },
          { group: "Mentorship", label: "\u2022 One-time", href: "#mentoria" },
          { group: "Mentorship", label: "\u2022 Weekly", href: "#mentoria" },
          { group: "Mentorship", label: "\u2022 Biweekly", href: "#mentoria" },
          { group: "Mentorship", label: "\u2022 Monthly", href: "#mentoria" },
          { group: "Technology", label: "App Atender", href: "#tecnologia" },
          { group: "Technology", label: "App Kito", href: "#app-kito" },
        ]
      },
      { href: "#resultados", label: "Results" },
      { href: "/ouvidoria", label: "Ombudsman" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contact" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "/ouvidoria", label: "Ombudsman" },
      { href: "#mentoria", label: "Mentorship" },
      { href: "#apoio-mei", label: "MEI Support" },
      { href: "#apoio", label: "Daily Operations Support" },
      { href: "#resultados", label: "Results" },
      { href: "#contato", label: "Contact" },
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
    tecnologia: {
      sectionId: "tecnologia",
      badge: "APOIAR Technology",
      titlePrefix: "Tools that simplify your",
      titleHighlight: "Digital Operations",
      description:
        "Discover our apps for customer communication and engagement. Practical tools to increase speed and standardize routine execution.",
      apps: [
        {
          name: "App Atender",
          description:
            "Multi-chip customer service hub to organize conversations, route requests, and reply faster.",
          icon: "placeholder-app-atender",
          appStoreUrl: "#",
          playStoreUrl: "#",
        },
        {
          name: "App Kito",
          description:
            "Reading, entertainment, and stimulation platform to improve customer relationship and retention.",
          icon: "/assets/appsIcons/Kito_app_icon.webp",
          appStoreUrl: "https://apps.apple.com/br/app/kito/id6749103511",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.acl.kitomobileapp&hl=pt_BR",
        },
      ],
    },
    ouvidoria: {
      sectionId: "ouvidoria",
      badge: "Ethics and Integrity Channel",
      title: "APOIAR Ombudsman",
      description:
        "Use this channel to submit internal or external reports with confidentiality and responsible handling.",
      formTitle: "Submit your report",
      formDescription:
        "Identification fields are optional. Your message will be sent directly to the responsible contact.",
      nameLabel: "Name (optional)",
      namePlaceholder: "Your name",
      emailLabel: "Email (optional)",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+55 (00) 00000-0000",
      typeLabel: "Report type",
      typePlaceholder: "Select a type",
      typeInternalLabel: "Internal",
      typeExternalLabel: "External",
      messageLabel: "Report details",
      messagePlaceholder: "Describe what happened with as much detail as possible.",
      submitLabel: "Send report",
      submittingLabel: "Sending...",
      successMessage: "Report sent successfully.",
      errorMessage: "Could not send right now. Please try again shortly.",
      sidebarTitle: "How it works",
      sidebarItems: [
        "Your report is delivered directly to the ombudsman channel.",
        "Initial triage is conducted with confidentiality.",
        "Data is handled according to our privacy policy.",
      ],
      confidentialityNote:
        "By submitting, you confirm the information is truthful and authorize processing for investigation.",
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
        "Vamos contigo hasta tu objetivo. Transformamos la gestión de tu negocio para que tengas mejor calidad de vida.",
    },
    contact: BASE_CONTACT,
    ui: {
      navbarContactCta: "Habla con Nosotros",
      ouvidoriaLabel: "Ouvidoria",
      restrictedAccessLabel: "Acceso restringido",
      openMenuAria: "Abrir menú",
      languageLabel: "Idioma",
      footerQuickLinksTitle: "Enlaces Rápidos",
      footerContactTitle: "Contacto",
      footerLocationLabel: "Rio de Janeiro, RJ - Brasil",
      footerCoverageLabel: "Sede en Río de Janeiro con atención en todo Brasil (en línea).",
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
          {
            group: "BPO",
            label: "Otras areas operativas - en su empresa o en nuestra estructura.",
            href: "#apoio",
          },
          { group: "Apoyo MEI", label: "Apertura de Empresa", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Emisión de Facturas", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Emisión de DAS", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Declaración Anual", href: "#apoio-mei" },
          { group: "Apoyo MEI", label: "Cierre de Empresa", href: "#apoio-mei" },
          { group: "Mentoria", label: "Mentoria Empresarial", href: "#" },
          { group: "Mentoria", label: "\u2022 Puntual", href: "#mentoria" },
          { group: "Mentoria", label: "\u2022 Semanal", href: "#mentoria" },
          { group: "Mentoria", label: "\u2022 Quincenal", href: "#mentoria" },
          { group: "Mentoria", label: "\u2022 Mensual", href: "#mentoria" },
          { group: "Tecnología", label: "App Atender", href: "#tecnologia" },
          { group: "Tecnología", label: "App Kito", href: "#app-kito" },
        ]
      },
      { href: "#resultados", label: "Resultados" },
      { href: "/ouvidoria", label: "Ouvidoria" },
      { href: `#${BASE_CONTACT.sectionId}`, label: "Contacto" },
    ],
    socialLinks: BASE_SOCIAL_LINKS,
    footerQuickLinks: [
      { href: "/ouvidoria", label: "Ouvidoria" },
      { href: "#mentoria", label: "Mentoria" },
      { href: "#apoio-mei", label: "Apoyo MEI" },
      { href: "#apoio", label: "Apoyo Diario" },
      { href: "#resultados", label: "Resultados" },
      { href: "#contato", label: "Contacto" },
    ],
    footerLegalLinks: [
      { href: "/politica-de-privacidade", label: "Política de Privacidad" },
      { href: "/termos-de-uso", label: "Términos de Uso" },
    ],
    hero: {
      badge: "Consultoria & BPO",
      titlePrefix: "Trabajamos por tu",
      titleHighlight: "Calidad de Vida",
      description:
        "La gestión eficiente te permite salir de la rutina operativa e invertir tiempo en lo que realmente importa. Ya no tienes que gestionar todo solo.",
      primaryCta: { href: "#mentoria", label: "Conoce Nuestra Mentoría" },
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
      badge: "Mentoría Personalizada",
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
      badge: "Operación Completa",
      titlePrefix: "Apoyo en el",
      titleHighlight: "Día a Día",
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
        title: "Sin gestión directa de empleados",
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
      titleHighlight: "MEI al día",
      description:
        "Centraliza la rutina de tu MEI con nuestro equipo y evita atrasos, retrabajo y multas. Nosotros gestionamos la burocracia y tu te enfocas en crecer.",
      services: [
        {
          title: "Apertura de Empresa",
          description:
            "Acompañamiento completo para abrir tu MEI con el encuadre correcto desde el inicio.",
        },
        {
          title: "Emisión de Facturas",
          description:
            "Soporte para emitir facturas correctamente y mantener tu operacion segura y confiable.",
        },
        {
          title: "Emisión de DAS",
          description:
            "Control y emision mensual del DAS para mantener tu registro regularizado.",
        },
        {
          title: "Declaración Anual",
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
      afterLabel: "Después",
      beforeItems: [
        {
          title: "Sobrecarga constante",
          description: "Trabajando mas de 12 horas al dia, sin tiempo para familia o ocio.",
        },
        {
          title: "Gestión de personas estresante",
          description: "Resolviendo conflictos, ausencias y problemas del equipo a diario.",
        },
        {
          title: "Sin visión estratégica",
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
      badge: "Historias de Éxito",
      titlePrefix: "Lo que dicen nuestros",
      titleHighlight: "socios",
      items: [
        {
          quote: "Atención rápida y eficaz. Profesionales extremadamente calificados.",
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
    tecnologia: {
      sectionId: "tecnologia",
      badge: "Tecnología APOIAR",
      titlePrefix: "Soluciones para simplificar tu",
      titleHighlight: "Operacion Digital",
      description:
        "Conoce nuestras apps para atencion y experiencia del cliente. Herramientas practicas para ganar velocidad y estandarizar la operacion.",
      apps: [
        {
          name: "App Atender",
          description:
            "Central multichip para organizar conversaciones, distribuir solicitudes y responder con mas rapidez.",
          icon: "placeholder-app-atender",
          appStoreUrl: "#",
          playStoreUrl: "#",
        },
        {
          name: "App Kito",
          description:
            "Plataforma de lectura, entretenimiento y estimulos para fortalecer la relacion con clientes y aumentar recurrencia.",
          icon: "/assets/appsIcons/Kito_app_icon.webp",
          appStoreUrl: "https://apps.apple.com/br/app/kito/id6749103511",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.acl.kitomobileapp&hl=pt_BR",
        },
      ],
    },
    ouvidoria: {
      sectionId: "ouvidoria",
      badge: "Canal de Ética y Transparencia",
      title: "Ouvidoria APOIAR",
      description:
        "Utiliza este canal para registrar denuncias internas o externas con confidencialidad y tratamiento responsable.",
      formTitle: "Envía tu denuncia",
      formDescription:
        "Los campos de identificacion son opcionales. Tu mensaje se enviara directamente al responsable.",
      nameLabel: "Nombre (opcional)",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email (opcional)",
      emailPlaceholder: "tu@ejemplo.com",
      phoneLabel: "Teléfono (opcional)",
      phonePlaceholder: "+55 (00) 00000-0000",
      typeLabel: "Tipo de denuncia",
      typePlaceholder: "Selecciona el tipo",
      typeInternalLabel: "Interna",
      typeExternalLabel: "Externa",
      messageLabel: "Texto de la denuncia",
      messagePlaceholder: "Describe lo ocurrido con la mayor cantidad de detalles posible.",
      submitLabel: "Enviar denuncia",
      submittingLabel: "Enviando...",
      successMessage: "Denuncia enviada con éxito.",
      errorMessage: "No fue posible enviar ahora. Intenta nuevamente en instantes.",
      sidebarTitle: "Cómo funciona",
      sidebarItems: [
        "Tu denuncia llega directamente al canal de ouvidoria.",
        "La clasificacion inicial se realiza con confidencialidad.",
        "Los datos se tratan de acuerdo con nuestra politica de privacidad.",
      ],
      confidentialityNote:
        "Al enviar, declaras que la informacion es verdadera y autorizas el tratamiento para investigacion.",
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
