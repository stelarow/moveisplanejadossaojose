export type ServicePage = {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  image: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "cozinhas-planejadas-sao-jose",
    title: "Cozinhas Planejadas em São José SC",
    heroTitle: "Cozinhas Planejadas em São José SC sob medida",
    heroSubtitle:
      "Cozinha planejada com projeto 3D gratuito, ferragens premium e instalação profissional em São José e Grande Florianópolis.",
    metaTitle: "Cozinhas Planejadas em São José SC | Sob Medida com Projeto 3D",
    metaDescription:
      "Cozinhas planejadas sob medida em São José/SC. Bancadas em quartzo, ferragens Blum e projeto 3D gratuito. Peça orçamento sem compromisso.",
    keyword: "cozinhas planejadas são josé",
    image: "/images/projects/cozinha-ilha.jpg",
    intro:
      "Projetamos cozinhas planejadas em São José, SC, que unem funcionalidade, estética e aproveitamento total do espaço. Cada projeto é desenvolvido sob medida para o seu ambiente, com projeto 3D gratuito antes da execução e ferragens premium que garantem durabilidade por anos.",
    sections: [
      {
        heading: "Por que escolher nossa cozinha planejada em São José",
        body:
          "Trabalhamos com MDF e MDP de alta resistência, acabamentos em BP, laminado, acrílico e vidro. As bancadas podem ser em granito, quartzo ou materiais premium. Cada detalhe é pensado para facilitar sua rotina, da disposição dos armários à iluminação embutida.",
        bullets: [
          "Armários sob medida com aproveitamento total do espaço",
          "Gavetas com amortecimento e corrediças telescópicas Blum",
          "Bancadas em granito, quartzo ou superfícies premium",
          "Iluminação LED integrada em nichos e gabinetes",
          "Ferragens de alta qualidade com garantia",
          "Projeto 3D realista antes da fabricação",
        ],
      },
      {
        heading: "Processo do projeto de cozinha planejada",
        body:
          "Do briefing à instalação, acompanhamos cada etapa. Começamos com a visita técnica gratuita para medição e entendimento do seu uso, depois elaboramos o projeto 3D com os materiais e acabamentos escolhidos. Após a aprovação, produzimos os móveis e fazemos a montagem no prazo combinado.",
      },
    ],
    faqs: [
      {
        question: "Quanto custa uma cozinha planejada em São José?",
        answer:
          "O valor varia de R$ 8.000 a R$ 25.000 conforme metragem, materiais e acabamentos. Cozinhas com ilha, bancada em quartzo e ferragens premium ficam na faixa alta. Fazemos orçamento personalizado e gratuito após a visita técnica.",
      },
      {
        question: "Qual o prazo de entrega de uma cozinha planejada?",
        answer:
          "Produção e instalação em 30 a 45 dias após a aprovação do projeto e confirmação do pagamento. Prazos podem variar conforme a complexidade e a disponibilidade de materiais.",
      },
      {
        question: "Vocês fazem projeto 3D de cozinha planejada?",
        answer:
          "Sim. O projeto 3D é gratuito e sem compromisso. Você visualiza a cozinha pronta antes de aprovar o orçamento, podendo ajustar cores, texturas e layout.",
      },
    ],
  },
  {
    slug: "closets-sao-jose",
    title: "Closets sob Medida em São José SC",
    heroTitle: "Closets sob Medida em São José SC com projeto personalizado",
    heroSubtitle:
      "Closets planejados com araras em aço inox, iluminação LED e organizadores inteligentes em São José e região.",
    metaTitle: "Closets sob Medida em São José SC | Projeto 3D Grátis",
    metaDescription:
      "Closets planejados sob medida em São José/SC. Araras inox, gaveteiros, sapateiras modulares e iluminação LED. Projeto 3D gratuito. Peça orçamento.",
    keyword: "closets são josé",
    image: "/images/projects/closet-luxo.jpg",
    intro:
      "Criamos closets sob medida em São José, SC, que organizam roupas, sapatos, bolsas e acessórios com sofisticação e praticidade. Cada projeto é único, desenhado para o seu estilo de vida, com soluções inteligentes de armazenamento e iluminação que valorizam o ambiente.",
    sections: [
      {
        heading: "Diferenciais dos nossos closets em São José",
        body:
          "Trabalhamos com materiais premium e ferragens reconhecidas. A iluminação LED e os espelhos amplos completam a experiência premium do seu closet.",
        bullets: [
          "Projeto personalizado com medidas exatas do espaço",
          "Araras em aço inox ou alumínio para cabides",
          "Prateleiras reguláveis para máxima flexibilidade",
          "Gaveteiros com divisórias para acessórios",
          "Sapateiras modulares e nichos para bolsas",
          "Iluminação LED de alta qualidade e espelhos amplos",
        ],
      },
      {
        heading: "Closet pequeno ou grande — sempre sob medida",
        body:
          "Mesmo em espaços compactos, o closet sob medida aproveita cada centímetro. Para closets grandes, criamos zonas distintas para vestuário, calçados, acessórios e até ilha central com gavetas. A solução acompanha seu volume de roupas e a rotina do casal ou da família.",
      },
    ],
    faqs: [
      {
        question: "Quanto custa um closet sob medida em São José?",
        answer:
          "O investimento varia conforme o tamanho, materiais e número de módulos. Closets compactos partem de R$ 5.000, enquanto closets premium com ilha central e iluminação completa podem chegar a R$ 30.000+. Orçamento gratuito após visita técnica.",
      },
      {
        question: "Closet sob medida serve para quarto pequeno?",
        answer:
          "Sim. O closet sob medida é ideal justamente para espaços pequenos, pois aproveita cantos, pé-direito e nichos que móveis prontos não preenchem. Projetamos soluções para qualquer metragem.",
      },
      {
        question: "Vocês fazem closet para casal?",
        answer:
          "Sim. Projetamos closets compartilhados com zonas individuais, divisórias inteligentes e organizadores que respeitam o espaço de cada um.",
      },
    ],
  },
  {
    slug: "dormitorios-planejados-sao-jose",
    title: "Dormitórios Planejados em São José SC",
    heroTitle: "Dormitórios Planejados em São José SC com projeto 3D grátis",
    heroSubtitle:
      "Quartos planejados sob medida com guarda-roupas, camas, cabeceiras e bancadas em São José e Grande Florianópolis.",
    metaTitle: "Dormitórios Planejados em São José SC | Quarto Sob Medida",
    metaDescription:
      "Dormitórios planejados sob medida em São José/SC. Guarda-roupas, camas com cabeceira, criados-mudos e home office integrado. Projeto 3D gratuito.",
    keyword: "dormitórios planejados são josé",
    image: "/images/projects/dormitorio.jpg",
    intro:
      "Desenvolvemos dormitórios planejados em São José, SC, que unem conforto, organização e estilo. Cada projeto é desenhado sob medida, aproveitando cada espaço do quarto com guarda-roupas, camas, criados-mudos, bancadas e painéis decorativos que refletem sua personalidade.",
    sections: [
      {
        heading: "O que inclui um dormitório planejado",
        body:
          "Projetos completos para quartos de casal, solteiro, infantil e teen. Cada ambiente é único e aproveita inteligentemente o espaço disponível para descanso, organização e lazer.",
        bullets: [
          "Guarda-roupas planejados com divisórias personalizadas",
          "Camas com cabeceiras integradas e nichos decorativos",
          "Criados-mudos com gavetas e prateleiras funcionais",
          "Bancadas para penteadeira ou home office",
          "Painéis decorativos e iluminação embutida",
          "Espelhos, sapateiras e organizadores internos",
        ],
      },
      {
        heading: "Dormitórios planejados para cada fase da vida",
        body:
          "Projetamos quartos para recém-casados, famílias com filhos pequenos, adolescentes ou para quem mora sozinho. O dormitório planejado acompanha suas necessidades atuais e futuras, com soluções modulares que podem ser adaptadas conforme a rotina muda.",
      },
    ],
    faqs: [
      {
        question: "Quanto custa um dormitório planejado em São José?",
        answer:
          "O valor varia conforme o número de peças e os materiais. Um dormitório de casal completo (guarda-roupa, cama e criados-mudos) parte de R$ 10.000. Orçamento gratuito com projeto 3D.",
      },
      {
        question: "Vocês fazem dormitório planejado infantil?",
        answer:
          "Sim. Projetamos quartos infantis e teen com soluções seguras, duráveis e adaptáveis, que acompanham o crescimento da criança.",
      },
      {
        question: "Quanto tempo leva para entregar um dormitório planejado?",
        answer:
          "O prazo padrão de produção e instalação é de 30 a 45 dias após a aprovação do projeto. Projetos muito complexos podem levar um pouco mais.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
