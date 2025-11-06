
export type Company = {
  id: string;
  name: string;
  logoId: string;
  bio: string;
  location: string;
  foundedYear: number;
  website: string;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  cropType: string;
  imageId: string;
  targetAmount: number;
  amountRaised: number;
  daysLeft: number;
  targetROI: string;
  term: string;
  riskLevel: 'A' | 'B' | 'C';
  investmentType: string;
  guarantee: string;
  company: Company;
};

const fazendaSolar: Company = {
    id: "comp-001",
    name: "Fazenda Solar Orgânicos",
    logoId: "logo-fazenda-solar",
    bio: "A Fazenda Solar é uma empresa familiar com 15 anos de experiência em agricultura orgânica. Nosso foco é a produção de soja e milho orgânico certificado, utilizando práticas sustentáveis que respeitam o meio ambiente e garantem a alta qualidade dos nossos produtos. Estamos comprometidos com a inovação e a expansão de nossas operações de forma responsável.",
    location: "Paraná, Brasil",
    foundedYear: 2009,
    website: "https://www.fazendasolar.com.br"
}

const cafeDasMontanhas: Company = {
    id: "comp-002",
    name: "Café das Montanhas",
    logoId: "logo-cafe-montanhas",
    bio: "Especialistas em cafés de alta pontuação, o Café das Montanhas controla todo o processo, da colheita à torra. Nossos grãos são cultivados nas altas altitudes de Minas Gerais, resultando em uma bebida com sabor e aroma únicos, reconhecida por compradores internacionais.",
    location: "Minas Gerais, Brasil",
    foundedYear: 2015,
    website: "https://www.cafedasmontanhas.com"
}

const cacauBahia: Company = {
    id: "comp-003",
    name: "Cacau Bahia Sustentável",
    logoId: "logo-cacau-bahia",
    bio: "Somos uma startup de agronegócio focada na produção de cacau fino e sustentável no sul da Bahia. Buscamos parceiros para crescer e fornecer amêndoas de alta qualidade para o mercado de chocolates premium, gerando impacto social e ambiental positivo na região.",
    location: "Bahia, Brasil",
    foundedYear: 2020,
    website: "https://www.cacaubahia.com"
}

const agroInova: Company = {
    id: "comp-004",
    name: "AgroInova Tech",
    logoId: "logo-agro-inova",
    bio: "AgroInova Tech focuses on implementing technology in modern farming, from hydroponics to automated systems.",
    location: "São Paulo, Brasil",
    foundedYear: 2018,
    website: "https://www.agroinovatech.com.br"
}

const novaTerra: Company = {
    id: "comp-005",
    name: "Nova Terra Investimentos",
    logoId: "logo-nova-terra",
    bio: "Nova Terra is an investment group focused on high-potential, high-risk agricultural ventures with a focus on new markets and experimental crops.",
    location: "Rio de Janeiro, Brasil",
    foundedYear: 2021,
    website: "https://www.novaterrainvest.com"
}

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "Organic Soybean Expansion",
    shortDescription: "Financing for the expansion of a certified organic soybean farm in Paraná.",
    longDescription: "This project aims to fund the acquisition of 50 hectares of adjacent land to expand our existing organic soybean operation. Funds will be used for land purchase, soil preparation, and purchasing certified organic seeds and equipment. The producer has over 15 years of experience in organic farming and a strong track record of profitability.",
    cropType: "Soybean",
    imageId: "project-soybean",
    targetAmount: 750000,
    amountRaised: 560000,
    daysLeft: 25,
    targetROI: "14.5% p.a.",
    term: "24 Months",
    riskLevel: "B",
    investmentType: "P2P Lending",
    guarantee: "CPR Física",
    company: fazendaSolar,
  },
  {
    id: "proj-002",
    title: "Specialty Coffee Harvest",
    shortDescription: "Working capital for the harvest and processing of a specialty coffee batch in Minas Gerais.",
    longDescription: "Funding required to hire seasonal workers, rent specialized harvesting equipment, and cover processing costs for a high-value batch of specialty coffee. This coffee scored 88+ points and has pre-orders from international buyers. The investment is secured by the sale contracts.",
    cropType: "Coffee",
    imageId: "project-coffee",
    targetAmount: 300000,
    amountRaised: 150000,
    daysLeft: 40,
    targetROI: "18.0% p.a.",
    term: "12 Months",
    riskLevel: "A",
    investmentType: "P2P Lending",
    guarantee: "Harvest Alienation",
    company: cafeDasMontanhas,
  },
  {
    id: "proj-003",
    title: "Sustainable Cocoa Farming",
    shortDescription: "Equity investment in a sustainable cocoa farm in Bahia.",
    longDescription: "Seeking equity partners for a state-of-the-art sustainable cocoa farm to supply high-quality beans to premium chocolate makers. This is an equity crowdfunding opportunity, offering a share in the company's future profits.",
    cropType: "Cocoa",
    imageId: "project-cocoa",
    targetAmount: 1200000,
    amountRaised: 450000,
    daysLeft: 58,
    targetROI: "22.0% (proj.)",
    term: "36+ Months",
    riskLevel: "C",
    investmentType: "Equity Crowdfunding",
    guarantee: "Company Shares",
    company: cacauBahia,
  },
  {
    id: "proj-004",
    title: "Corn Silage Production",
    shortDescription: "Funds for producing high-quality corn silage for the local dairy market.",
    longDescription: "This project will finance the planting, harvesting, and storage of corn to be sold as silage to local dairy farms. The producer has established contracts with three large dairy operations, ensuring demand for the entire production. The investment cycle is short and the risk is mitigated by the off-take agreements.",
    cropType: "Corn",
    imageId: "project-corn",
    targetAmount: 400000,
    amountRaised: 380000,
    daysLeft: 10,
    targetROI: "13.0% p.a.",
    term: "10 Months",
    riskLevel: "B",
    investmentType: "P2P Lending",
    guarantee: "CPR Física",
    company: fazendaSolar,
  },
  {
    id: "proj-005",
    title: "Avocado Orchard Modernization",
    shortDescription: "Capital to implement modern irrigation and pest control systems in an avocado orchard.",
    longDescription: "The producer seeks to upgrade an existing 20-hectare avocado orchard with a drip irrigation system and integrated pest management. These improvements are projected to increase yield by 30% and reduce water consumption by 50%. The farm has a strong history of production and supplies major national distributors.",
    cropType: "Avocado",
    imageId: "project-avocado",
    targetAmount: 650000,
    amountRaised: 210000,
    daysLeft: 45,
    targetROI: "16.5% p.a.",
    term: "30 Months",
    riskLevel: "B",
    investmentType: "P2P Lending",
    guarantee: "Land Mortgage",
    company: cafeDasMontanhas, 
  },
  {
    id: "proj-006",
    title: "Fine Wine Vineyard - New Varietal",
    shortDescription: "Investment to plant a new, high-value grape varietal for a boutique winery.",
    longDescription: "This project funds the planting of 5 hectares of a promising new grape varietal (e.g., Marselan) in a well-established wine region. While the return is long-term, this equity investment offers a stake in a potentially highly profitable boutique wine label. The lead winemaker is renowned and has won several international awards.",
    cropType: "Grapes",
    imageId: "project-grapes",
    targetAmount: 900000,
    amountRaised: 150000,
    daysLeft: 80,
    targetROI: "25.0% (proj.)",
    term: "48+ Months",
    riskLevel: "C",
    investmentType: "Equity Crowdfunding",
    guarantee: "Company Shares",
    company: cacauBahia,
  },
  {
    id: "proj-007",
    title: "Organic Honey Production",
    shortDescription: "Capital for scaling up an organic honey production operation.",
    longDescription: "Funds will be used to purchase new beehives, extraction equipment, and for organic certification. The producer has a waiting list of local stores.",
    cropType: "Honey",
    imageId: "project-coffee",
    targetAmount: 80000,
    amountRaised: 25000,
    daysLeft: 60,
    targetROI: "19.5% p.a.",
    term: "12 Months",
    riskLevel: "A",
    investmentType: "P2P Lending",
    guarantee: "Harvest Alienation",
    company: cafeDasMontanhas,
  },
  {
    id: "proj-008",
    title: "Free-Range Chicken Eggs",
    shortDescription: "Working capital to expand a free-range egg production facility.",
    longDescription: "Investment to increase flock size and automate the egg collection and packaging process. Strong local demand from restaurants and supermarkets.",
    cropType: "Eggs",
    imageId: "project-corn",
    targetAmount: 120000,
    amountRaised: 90000,
    daysLeft: 30,
    targetROI: "17.0% p.a.",
    term: "18 Months",
    riskLevel: "A",
    investmentType: "P2P Lending",
    guarantee: "CPR Física",
    company: fazendaSolar,
  },
  {
    id: "proj-009",
    title: "Hydroponic Lettuce Farm",
    shortDescription: "Funding to establish a new hydroponic lettuce farm near a major urban center.",
    longDescription: "This project will build a new facility to grow lettuce hydroponically, providing fresh, local produce year-round. Off-take agreements with local grocery chains are already in negotiation.",
    cropType: "Lettuce",
    imageId: "project-soybean",
    targetAmount: 250000,
    amountRaised: 100000,
    daysLeft: 50,
    targetROI: "18.5% p.a.",
    term: "20 Months",
    riskLevel: "A",
    investmentType: "P2P Lending",
    guarantee: "Land Mortgage",
    company: agroInova,
  },
  {
    id: "proj-010",
    title: "Mango Orchard Expansion",
    shortDescription: "Financing to expand an existing mango orchard and improve packing facilities.",
    longDescription: "The producer aims to plant 30 more hectares of the 'Tommy Atkins' mango variety and upgrade the packing house to meet export standards. The farm has been exporting successfully for 5 years.",
    cropType: "Mango",
    imageId: "project-avocado",
    targetAmount: 500000,
    amountRaised: 150000,
    daysLeft: 70,
    targetROI: "15.0% p.a.",
    term: "28 Months",
    riskLevel: "B",
    investmentType: "P2P Lending",
    guarantee: "CPR Física",
    company: fazendaSolar,
  },
  {
    id: "proj-011",
    title: "Tropical Vanilla Cultivation",
    shortDescription: "Equity investment in a startup cultivating high-value vanilla in a controlled environment.",
    longDescription: "This is an equity crowdfunding opportunity to invest in a high-tech project growing vanilla in a greenhouse, a high-value spice with huge market demand. The team includes agronomists specialized in vanilla.",
    cropType: "Vanilla",
    imageId: "project-grapes",
    targetAmount: 1500000,
    amountRaised: 300000,
    daysLeft: 90,
    targetROI: "28.0% (proj.)",
    term: "50+ Months",
    riskLevel: "C",
    investmentType: "Equity Crowdfunding",
    guarantee: "Company Shares",
    company: novaTerra,
  },
  {
    id: "proj-012",
    title: "Aquaponic Tilapia Farm",
    shortDescription: "Investment to build a large-scale commercial aquaponic system for tilapia and vegetable production.",
    longDescription: "Seeking partners for a large-scale aquaponic farm. This is a high-risk, high-reward project aiming to create a sustainable and highly productive food system. The business plan is solid, but the technology is new to the region.",
    cropType: "Tilapia",
    imageId: "project-cocoa",
    targetAmount: 2000000,
    amountRaised: 250000,
    daysLeft: 120,
    targetROI: "30.0% (proj.)",
    term: "60+ Months",
    riskLevel: "C",
    investmentType: "Equity Crowdfunding",
    guarantee: "Company Shares",
    company: novaTerra,
  }
];

export const portfolioSummary = {
    totalInvested: "R$ 15.000,00",
    projectedReturns: "R$ 2.475,00",
    averageROI: "16.5% p.a."
}

export const myInvestments = [
    {
        id: "inv-001",
        projectId: "proj-001",
        projectName: "Organic Soybean Expansion",
        amountInvested: "R$ 10.000,00",
        status: "Active",
        targetROI: "14.5% p.a.",
        maturityDate: new Date("2025-11-01"),
    },
    {
        id: "inv-002",
        projectId: "proj-002",
        projectName: "Specialty Coffee Harvest",
        amountInvested: "R$ 5.000,00",
        status: "Active",
        targetROI: "18.0% p.a.",
        maturityDate: new Date("2024-12-15"),
    },
     {
        id: "inv-003",
        projectId: "past-proj-01",
        projectName: "Previous Wheat Harvest",
        amountInvested: "R$ 7.500,00",
        status: "Completed",
        targetROI: "12.0% p.a.",
        maturityDate: new Date("2023-08-20"),
    }
]

// Function to get a company by its ID
export function getCompanyById(id: string) {
    const allCompanies = [fazendaSolar, cafeDasMontanhas, cacauBahia, agroInova, novaTerra];
    return allCompanies.find(c => c.id === id);
}
