// https://halopsa.com/pricing/ is doing this right. 

// Get to:
// $50, per user, per month, for the whole system, with unlimited support
// (but need integrations etc. first.)
// Must include:
// Service Desk
// CRM
// Billing
// Assets
// Reporting
// Support

// Pricing promises:
// 'We will never raise our price more than inflation+5% in a year'.
// (inflation will need to be at our discretion as to which country we choose, but we won't choose countries with ridiculous runaway inflation)

export const references = [
 "https://www.reddit.com/r/msp/comments/ci0bh9/anyone_willing_to_share_their_connectwise_manage/",
 "https://www.reddit.com/r/msp/comments/o6837x/connectwise_sell_license_pricing/",
 "https://www.reddit.com/r/msp/comments/8bzvxd/connectwise_manage_pricing/",
 "https://www.reddit.com/r/msp/comments/6tul5m/anyone_willing_to_share_their_autotask_pricing/",
 "https://www.reddit.com/r/msp/comments/n5dx2a/help_with_ballpark_pricing_for_datto_rmm_autotask/",
 "https://www.reddit.com/r/msp/comments/umszw0/dattos_autotask_and_connectwises_manage_pricing/",
 "https://www.reddit.com/r/msp/comments/x0yeak/connectwise_manage_pricing/",
 "https://www.reddit.com/r/msp/comments/47lxq2/connectwise_cost/",
 "https://search.brave.com/search?q=reddit+ninja+rmm+pricing&source=desktop",
 "https://www.reddit.com/r/msp/comments/128uuhz/ninja_pricing/",
 "https://www.reddit.com/r/msp/comments/128uuhz/ninja_pricing/",
 "https://www.solarwinds.com/service-desk/pricing",
 "https://halopsa.com/pricing/"
]

const axioms = [
  'transparent pricing',
  'small businesses should not subsidize large businesses',

]
const mspPricingUNVERIFIED = [
  {
    product: "Solarwinds Service Desk",
    priceEstimate: "$39 - $99",
    url: 'https://www.solarwinds.com/service-desk/pricing'
  },
  {
    product: "Halo PSA",
    priceEstimate: "$80-100",
    url: 'https://www.solarwinds.com/service-desk/pricing'
  },
  {
    product: "ConnectWise",
    priceEstimate: "$25 - $150"
  },
  {
    product: "Autotask",
    priceEstimate: "$65 - $125"
  },
  {
    product: "Kaseya BMS",
    priceEstimate: "$25 - $45"
  },
  {
    product: "NinjaRMM",
    priceEstimate: "$1.80 - $4 per endpoint"
  },
  {
    product: "SolarWinds MSP",
    priceEstimate: "$39 - $99"
  },
  {
    product: "SolarWinds MSP",
    priceEstimate: "$39 - $99"
  },
];


export const reducedSeatPriceAtScaleUNVERIFIED = [
  {
    category: 'Pros',
    stakeholder: 'Cater for increased efficiency / lower overhead per customer for larger customers',
    point: '',
    description: 'Let us acknowledge that it is easier to handle a 100pax account compared to 100 sole trader accounts. Pricing should arguably cater for effort expenditure from our employees'
  },
  {
    category: 'Pros',
    stakeholder: 'Try to subsidise /assist smaller customers to grow',
    point: '',
    description: ''
  },
  {
    category: 'Pros',
    stakeholder: 'Customers (Large Enterprises)',
    point: 'Cost-Effective',
    description: 'Greater seat counts result in per-seat cost reductions.'
  },
  {
    category: 'Pros',
    stakeholder: 'Customers (Large Enterprises)',
    point: 'Budget Predictability',
    description: 'Fixed and declining costs make budgeting easier.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'High-Value Contracts',
    description: 'Larger upfront revenue from bulk seat purchases.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'Client Stickiness',
    description: 'The allure of decreasing per-seat costs can make it more likely to retain large clients, reducing customer churn.'
  },
  {
    category: 'Pros',
    stakeholder: 'Market Investors',
    point: 'Stock Stability',
    description: 'High-value, long-term contracts can stabilize a company\'s stock price.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'Operational Efficiencies',
    description: 'Serving a large number of seats to a few clients might streamline operational costs such as marketing and billing.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'Economies of Scope',
    description: 'Larger clients are more likely to adopt multiple product lines if they exist, generating more revenue streams for the SaaS company.'
  },
  {
    category: 'Pros',
    stakeholder: 'Environmental Concerns',
    point: 'Energy Efficiency',
    description: 'Consolidating many users into a single large contract might result in more efficient energy use per customer.'
  },
  {
    category: 'Cons',
    stakeholder: 'Customers (Small Enterprises)',
    point: 'Discriminatory Pricing',
    description: 'Higher per-seat costs compared to large enterprises.'
  },
  {
    category: 'Cons',
    stakeholder: 'SaaS Company',
    point: 'Margin Pressure',
    description: 'Steeper discounts for large clients can erode profit margins.'
  },
  {
    category: 'Cons',
    stakeholder: 'Market Investors',
    point: 'Limited Growth Signals',
    description: 'Focus on large contracts could conceal lack of broad-based demand.'
  },
  {
    category: 'Cons',
    stakeholder: 'Environmental Concerns',
    point: 'E-Waste',
    description: 'Larger contracts may encourage hardware redundancy and quicker hardware turnover, leading to more e-waste.'
  },
  {
    category: 'Cons',
    stakeholder: 'SaaS Company',
    point: 'Long-term Revenue Lock-in',
    description: 'The scaled pricing structure could lock the company into low per-seat rates, limiting revenue growth from existing large clients.'
  },
  {
    category: 'Ethical',
    stakeholder: 'Market/Competition',
    point: 'Predatory Pricing Risks',
    description: 'The SaaS company could manipulate scaled pricing to knock smaller competitors out of business.'
  },
  {
    category: 'Ethical',
    stakeholder: 'Regulators',
    point: 'Antitrust Concerns',
    description: 'If large enterprises get too much pricing leverage, regulators might scrutinize the SaaS companies for potential antitrust violations.'
  },
  {
    category: 'Ethical',
    stakeholder: 'General Public',
    point: 'Consumer Welfare',
    description: 'The concentration of discounted services among large clients could limit the general public’s access to increasingly essential SaaS tools.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'Customer Acquisition Cost Dilution',
    description: 'Higher lifetime value from large clients compensates for the customer acquisition costs.'
  },
  {
    category: 'Pros',
    stakeholder: 'SaaS Company',
    point: 'Easier Account Management',
    description: 'Managing fewer large accounts is administratively simpler than managing many small accounts.'
  },
  {
    category: 'Pros',
    stakeholder: 'Customers (Large Enterprises)',
    point: 'Customization Leverage',
    description: 'Higher buying power may grant large enterprises the leverage to request feature customizations.'
  },
  {
    category: 'Cons',
    stakeholder: 'Customers (Small Enterprises)',
    point: 'Limited Customization',
    description: 'Less buying power means fewer opportunities for feature customization.'
  },
  {
    category: 'Cons',
    stakeholder: 'SaaS Company',
    point: 'Risk of Price Wars',
    description: 'The pressure to offer competitive bulk discounts might initiate a price war, harming profitability across the sector.'
  },
  {
    category: 'Cons',
    stakeholder: 'Market/Competition',
    point: 'Reduced Innovation',
    description: 'SaaS companies could become complacent, focusing less on innovation due to stable high-value contracts.'
  },
  {
    category: 'Pros',
    stakeholder: 'Third-party Vendors',
    point: 'Bulk Procurement',
    description: 'Large contracts may require additional third-party services or products, generating more business for vendors.'
  },
  {
    category: 'Pros',
    stakeholder: 'Society',
    point: 'Job Creation',
    description: 'Larger contracts could potentially lead to job creation to manage and fulfill those contracts.'
  },
  {
    category: 'Cons',
    stakeholder: 'Third-party Vendors',
    point: 'Reduced Margins',
    description: 'Pressure to offer bulk discounts may cascade to third-party vendors, squeezing their profit margins.'
  },
  {
    category: 'Cons',
    stakeholder: 'Society',
    point: 'Wealth Inequality',
    description: 'Concentration of discounted services among large enterprises could exacerbate economic disparities.'
  },
  {
    category: 'Cons',
    stakeholder: 'Society',
    point: 'Job Instability',
    description: 'If large contracts dominate the revenue stream, job security may become dependent on the stability of those few contracts.'
  },
  {
    category: 'Cons',
    stakeholder: 'Third-party Distributors',
    point: 'Commission Pressure',
    description: 'Distributors working on commission may see reduced earnings due to bulk discounting.'
  },
  {
    category: 'Pros',
    stakeholder: 'Environment',
    point: 'Resource Optimization',
    description: 'Larger contracts can lead to optimized utilization of server and data center resources, potentially lowering the environmental impact per user.'
  },  
  {
    category: 'Cons',
    stakeholder: 'Market/Competition',
    point: 'Data Monopoly Risks',
    description: 'Consolidation of large clients could lead to data monopolies, affecting market competition.'
  },
  {
    category: 'Cons',
    stakeholder: 'International Markets',
    point: 'Regional Disparities',
    description: 'Focus on large enterprises, which are often situated in developed markets, could lead to neglect of emerging markets, exacerbating regional economic disparities.'
  },
  {
    category: 'Cons',
    stakeholder: 'Regulatory Bodies',
    point: 'Anti-Trust Scrutiny',
    description: 'The emphasis on large contracts could attract regulatory scrutiny for potential anti-competitive practices.'
  },
  {
    category: 'Cons',
    stakeholder: 'Pricing complexity',
    point: 'Per-seat discounts add another dimension to pricing, increasing complexity and thus reducing transparency/ ease of understanding',
    description: 'Simplicity should be aimed for. This goes against that.',
  }
];
