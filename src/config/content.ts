export const BRAND = {
  shortName: "APOIAR",
  legalName: "APOIAR Consultoria & BPO",
  footerDescription:
    "Vamos de maos dadas ate o seu objetivo. Transformamos a gestao do seu negocio para que voce tenha mais qualidade de vida.",
};

export const CONTACT = {
  sectionId: "contato",
  email: "ricardo@rfv.net.br",
  whatsappNumber: "5521976763797",
  city: "Sao Paulo",
  region: "SP",
  country: "Brasil",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get mailtoUrl() {
    return `mailto:${this.email}`;
  },
};

export const NAV_LINKS = [
  { href: "#mentoria", label: "Mentoria" },
  { href: "#apoio", label: "Apoio no Dia a Dia" },
  { href: "#resultados", label: "Resultados" },
  { href: `#${CONTACT.sectionId}`, label: "Contato" },
];

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardo-furtado-vieira/",
  },
  { id: "instagram", label: "Instagram", href: "#" },
] as const;

export const FOOTER_QUICK_LINKS = [
  ...NAV_LINKS.slice(0, 3),
  { href: "#", label: "Sobre Nos" },
];

export const FOOTER_LEGAL_LINKS = [
  { href: "#", label: "Politica de Privacidade" },
  { href: "#", label: "Termos de Uso" },
];

export const HERO_CONTENT = {
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
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    alt: "Pessoas trabalhando em equipe",
    width: 800,
    height: 600,
  },
  productivityStat: {
    value: "+40%",
    label: "Produtividade media",
  },
};

export const MENTORIA_CONTENT = {
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
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face",
      alt: "Ricardo Furtado - Mentor",
      width: 600,
      height: 750,
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
};

export const APOIO_CONTENT = {
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
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      alt: "Equipe trabalhando",
      width: 400,
      height: 300,
    },
  },
};

export const RESULTADOS_CONTENT = {
  sectionId: "resultados",
  badge: "Transformacao Real",
  titlePrefix: "Saindo do",
  titleHighlight: "Operacional",
  description:
    "Veja como a vida do empresario muda quando comeca a trabalhar com a APOIAR.",
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
      description:
        "Trabalhando de forma estrategica, com tempo para o que realmente importa.",
    },
    {
      title: "Equipe profissionalizada",
      description: "A APOIAR cuida da gestao operacional, voce foca no crescimento.",
    },
    {
      title: "Negocio escalavel",
      description:
        "Com processos otimizados e mentoria constante, seu negocio cresce.",
    },
  ],
  beforeImage: {
    src: "/images/antes-operacional-frustrado.jpg",
    alt: "Profissional frustrado no trabalho",
    width: 400,
    height: 250,
  },
  afterImage: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop",
    alt: "Empresario feliz",
    width: 400,
    height: 250,
  },
};

export const TESTIMONIALS_CONTENT = {
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
};

export const CTA_CONTENT = {
  title: "Pronto para transformar seu negocio?",
  description:
    "Vamos juntos construir uma gestao eficiente que permita voce viver melhor. Seu tempo vale ouro.",
  whatsappLabel: "Falar no WhatsApp",
  emailLabel: "Enviar E-mail",
};
