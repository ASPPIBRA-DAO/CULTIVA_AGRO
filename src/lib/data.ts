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
  marketPrice: string;
};

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
    marketPrice: "R$ 150,00/sc"
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
    marketPrice: "R$ 1.200,00/sc"
  },
  {
    id: "proj-003",
    title: "Urban Hydroponics Farm",
    shortDescription: "Equity investment in a new vertical hydroponics farm in São Paulo.",
    longDescription: "Seeking equity partners for a state-of-the-art hydroponics farm to supply fresh greens to restaurants and retailers in São Paulo. This is a high-tech project with experienced agronomists and a solid business plan targeting a premium market. This is an equity crowdfunding opportunity, offering a share in the company's future profits.",
    cropType: "Hydroponics",
    imageId: "project-hydroponics",
    targetAmount: 1200000,
    amountRaised: 450000,
    daysLeft: 58,
    targetROI: "22.0% (proj.)",
    term: "36+ Months",
    riskLevel: "C",
    investmentType: "Equity Crowdfunding",
    guarantee: "Company Shares",
    marketPrice: "N/A"
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
    marketPrice: "R$ 60,00/sc"
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
    marketPrice: "R$ 8,00/kg"
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
    marketPrice: "N/A"
  },
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
