// This is the (Business) 'Framework'.
// An item in here is a 'Module' in the framework, which is a type of 'Solution'
// A 'Solution' has Versions, which are development rollouts of compiled Constituents that meet Requirements in order to fulfil Usecases, which are stacked (as procedures/workflows) to make Fetaures.
// (See 'Product' module for more information.)

// We will develop the above by picking the lowest level 'Module', creating a Version, and ensuring that they are linked to Requirements, Consituents etc.

// E.g. solution: Accounts > Recievables > Invoicing > Generate;
// - Filfils usecase "as an AR worker I want to generate invoices with charges"
// - Has requirements: "Need to generate invoice from existing charges or add new charges on the fly"
// - Has constituents "run Template called createInvoice, run Template called assignInvoice"

export type TypeFrameworkBusiness = {
  id: number;
  parent: number | null;
  status: string;
  name_singular: string;
  display_singular: string;
  description: string;
  summary: string;
  nickname: string;
  notes?: any;
  integration?: any;
  icon_name?: string;
  icon_source?: string;
};

export const arrayFrameworkBusiness: TypeFrameworkBusiness[] = [
  {
    id: 1,
    parent: null,
    status: "3. Active",
    name_singular: "business",
    display_singular: "Business",
    description:
      "The BOS (Business Operating System) / ERP (Enterprise Resource Planning) / PSA (Professional Services Automation) / BMS (Business Management System)",
    summary:
      "Build, automate and manage your [IT Company] from a single pane of glass.",
    notes: `
      summary: "Your Business in a Box. End-to-end data and services in one intuitive, unified platform",
      body: "<-- Select a service for more information or to sign up",
      description:
        "Collate and manage all areas of your business in simplified, powerful modules",
      subheading2:
        "Orgmenta's expert staff will package, automate and augment each area of your business",
      subheading3: "Business In a Box",
      calltoaction:
        "More comprehensive, expert, understandable and neater solutions than if you did it inhouse"`,
    nickname: "business",
  },
  {
    id: 11,
    parent: 1,
    status: "5. Hold",
    name_singular: "governance",
    display_singular: "Governance",
    summary: "Management & Business Planning",
    description: "Overarching command and decision making for the business",
    nickname: "governance",
    icon_name: "finance",
    icon_source: "MaterialCommunityIcons",
  },
  {
    id: 110,
    parent: 11,
    status: "5. Hold",
    name_singular: "model",
    display_singular: "Model",
    description: "Your business model and plan",
    summary:
      "End-to-end business planning, from intitial idea through to implementation plans",
    notes: `[
      "Business plan etc.",
      "This summarises things from other modules",
      " - e.g. it provides a summary of finances/investment etc. from the Accounts area",
      "- e.g. it provides a summary of the market and the company's positioning from the Market area",
    ]`,
    nickname: "governance-model",
  },
  {
    id: 1100,
    parent: 110,
    status: "5. Hold",
    name_singular: "plan",
    display_singular: "Plan",
    description:
      "Create your business plan and use it to keep the business aiming in the right direction",
    summary:
      "End-to-end business planning, from intitial idea through to implementation plans",
    notes: `"Business Plan"
    Choosing the business offering
    Red blue ocean
    Something that won't burn you out, won't make you hate it, dont mind hobby being no longer a hobby, sustainable <--https://old.reddit.com/r/smallbusiness/comments/171myh4/why_do_people_keep_trying_to_open_restaurants/
    if lifestyle biz, know that it is.
    something without a dead-end
    something without unnecessary risk
    no unnecessary dependency on platforms, current environment, political upheaval etc.
    something expandable to the size you want and need
    long term survival
    something you gave the ability to learn /grow into (yourself, or able to engage necessary skills and rssources from others)
    something that adds value to the world, does not
    something where if you ikebana all of your externalities, it will still be sustainable
`,
    nickname: "governance-model-plan",
  },
  {
    id: 11000,
    parent: 1100,
    status: "5. Hold",
    name_singular: "mission",
    display_singular: "Mission",
    description:
      "Manage your mission statement by setting a clear summary for the purpose of the business",
    summary: "Mission statement / Vision",
    notes: "Analygous to a peer reviewed scientific paper having an 'abstract'",
    nickname: "governance-model-plan-mission",
  },
  {
    id: 11001,
    parent: 1100,
    status: "5. Hold",
    name_singular: "values",
    display_singular: "Values",
    summary: "Core values / Company principles",
    description: `Set 'Corporate ethos / guiding principles' for your company, and use them as a compass.`,
    notes: `
      https://search.brave.com/search?q=company+values&source=desktop
      "What are your Brand values? Consider these to be products, as you are essentially selling 'trust' or other company values to all of your stakeholders.",
    `,
    nickname: "governance-model-plan-values",
  },
  {
    id: 11002,
    parent: 1100,
    status: "5. Hold",
    name_singular: "goals",
    display_singular: "Goals",
    description:
      "Set organizational goals to ensure all business activity is pointedly targeted",
    summary: "Top level business objectives",
    nickname: "governance-model-plan-goals",
  },
  {
    id: 11003,
    parent: 1100,
    status: "5. Hold",
    name_singular: "justification",
    display_singular: "Justification",
    description: "Easily derive research into guidelines for operation",
    summary:
      "Summary of market research and other proofs of business viability",
    nickname: "governance-model-plan-justification",
  },
  {
    id: 11004,
    parent: 1100,
    status: "5. Hold",
    name_singular: "capital",
    display_singular: "Capital",
    summary: "Summary of the financial model and other resources",
    description:
      "Summarise financial resources or assets employed to start, operate, and grow your business.",
    nickname: "governance-model-plan-justification",
    notes: `
      Financial Capital: Money used to fund a business, including initial capital, working capital, and growth capital.
      Human Capital: The skills, knowledge, experience, and abilities of employees.
      Social Capital: The value derived from an individual's or business's network of relationships, which can be used to gain resources or advantages.
      Intellectual Capital: Intangible assets like patents, trademarks, and copyrights that contribute to a business's competitive advantage.
      Natural Capital: Natural resources that can be used to produce goods or services.
      Physical Capital: Tangible assets like machinery, buildings, and infrastructure used in the production of goods or services.
      Venture Capital: Funding provided by investors to startups and small businesses expected to have long-term growth potential.
      Debt Capital: Money borrowed through various means, including loans and bonds, to run the business.
      Equity Capital: Funds raised by a business in exchange for shares of ownership in the company.
      Working Capital: Short-term assets minus short-term liabilities, used for day-to-day operations.
  `,
  },
  {
    id: 1101,
    parent: 110,
    status: "5. Hold",
    name_singular: "structure",
    display_singular: "Structure",
    description: "Automatically map your Business Structure",
    summary: "Organisational Chart and Structure",
    nickname: "governance-model-structure",
  },
  {
    id: 11010,
    parent: 1101,
    status: "5. Hold",
    name_singular: "ownership",
    display_singular: "Ownership",
    description: "Business ownership structures",
    summary:
      "C-Corp / LLC / Sole Trader or Proprietorship / Partnership Cooperative / Umbrella & holding corps / Franchise / Non-profit / Charity / etc.",
    nickname: "governance-model-structure-ownership",
    notes: `[
      "LLC",
      "S-Corp",
      "C-Corp",
      "Sole Trader / Proprietorship",
      "Umbrella",
      "Holding",
      "Franchise",
      "Unlimited Company - UK, ROI and others",
      "Società a responsabilità limitata (SRL) - Italy",
      "Proprietary Limited Company (Pty Ltd) - Australia",
      "Aktiebolag (AB) - Sweden",
      "Kabushiki Kaisha (KK) - Japan",
      "Société Anonyme (SA) - France",
      "Gesellschaft mit beschränkter Haftung (GmbH) - Germany",
      "Public Limited Company (PLC) - UK",
      "Joint Venture",
      "Professional LLC (PLLC)",
      "Professional Corporation (PC)",
      "B-Corporation",
      "Non Profit",
      "Charity",
    ]`,
  },
  {
    id: 11011,
    parent: 1101,
    status: "5. Hold",
    name_singular: "orgchart",
    display_singular: "Org Chart",
    summary: "Organisational Chart / Business Topology",
    description: "Automatically compile your Org Chart",
    nickname: "governance-model-structure-orgchart",
  },
  {
    id: 1102,
    parent: 110,
    status: "5. Hold",
    name_singular: "jurisdictions",
    display_singular: "Jurisdictions",
    summary: "Where you are operating",
    description: "Manage countries, states, counties and markets",
    nickname: "governance-model-jurisdictions",
  },
  {
    id: 11020,
    parent: 1102,
    status: "5. Hold",
    name_singular: "locations",
    display_singular: "Locations",
    summary: "Physical jurisdictions you are or intend on trading within",
    description: "",
    nickname: "governance-model-jurisdictions-locations",
  },
  {
    id: 11021,
    parent: 1102,
    status: "5. Hold",
    name_singular: "regulatory",
    display_singular: "Regulatory",
    summary: "Regulatory jurisdictions you are or intend on trading within",
    description: "Manage your intended verticals & horizontals",
    nickname: "governance-model-jurisdictions-regulatory",
  },
  {
    id: 11022,
    parent: 1102,
    status: "5. Hold",
    name_singular: "markets",
    display_singular: "Markets",
    summary: "Industry jurisdictions you are or intend on trading within",
    description: "Manage your intended verticals & horizontals",
    nickname: "governance-model-jurisdictions-markets",
  },
  {
    id: 11023,
    parent: 1102,
    status: "5. Hold",
    name_singular: "cultural",
    display_singular: "Cultural",
    summary:
      "Cultural jurisdictions & languages you are or intend on trading with",
    description: "Plan the cultures that you intend on trading with.",
    nickname: "governance-model-jurisdictions-cultural",
  },
  {
    id: 11024,
    parent: 1102,
    status: "5. Hold",
    name_singular: "functional",
    display_singular: "Functional",
    summary: "Functional jurisdictions you are or intend on trading within",
    description:
      "Plan the functional areas (such as R&D, manufacturing and distribution) that you plan to operate in.",
    nickname: "governance-model-jurisdictions-functional",
  },
  {
    id: 1103,
    parent: 110,
    status: "5. Hold",
    name_singular: "roadmap",
    display_singular: "Roadmap",
    description: "Compile a clear roadmap for the business and your offerings",
    summary: "Your company roadmap and timeline",
    nickname: "governance-model-roadmap",
  },
  {
    id: 1104,
    parent: 110,
    status: "5. Hold",
    name_singular: "growth",
    display_singular: "Growth",
    summary: "Organisational expansion strategy",
    description:
      "Describe and manage your scaling model, penetration plan and growth tactics",
    nickname: "governance-model-growth",
    notes: `
    Market Expansion: Focused on entering new markets or expanding market share in existing ones.
    Product Development: Centered around the creation of new products or enhancement of existing ones.
    Mergers and Acquisitions: Strategy for growth through the acquisition of or merger with other companies.
    Partnership and Alliances: Developing strategic partnerships to accelerate growth.
    Financial Leveraging: Utilizing various financial instruments to facilitate growth.
    Talent Acquisition: Plans related to the recruitment and retention of key personnel.
    Operational Efficiency: Focused on streamlining operations for cost savings that enable growth.
    Customer Retention: Strategies aimed at maintaining and growing the existing customer base.
    Digital Transformation: Leveraging technology to improve performance and growth.
    Sustainability: Growth plans that are economically, socially, and environmentally sustainable.
    Brand Development: Focused on brand equity and recognition as a medium for growth.
    Vertical Integration: Acquiring businesses in the same value chain to control more aspects of production and distribution.
    Horizontal Diversification: Entering adjacent markets or industries with existing competencies.
    Geographic Diversification: Expanding operations to multiple geographic locations.
    Competitive Positioning: Strategies to outmaneuver competition, including pricing, service, and differentiation.
    Risk Management: Developing plans to mitigate risks that could hamper growth.
    Supply Chain Optimization: Strategies to streamline procurement, manufacturing, and distribution.
    Innovation Management: Fostering a culture and processes that encourage innovation.
    Regulatory Compliance: Ensuring the business adapts to new or existing regulations that could influence growth.
    Exit Strategy: Planning for scenarios where divestment or liquidation facilitates a pivot or other forms of growth.
    Internationalization: Scaling the business across international borders, considering language, culture, and regulatory factors.
    Customer Experience: Plans focused on improving customer satisfaction and loyalty.
    Market Penetration: Deepening market share in existing markets through aggressive marketing or competitive pricing.
    Organizational Restructuring: Modifying internal structures and hierarchies to facilitate growth.
    Quality Management: Strategies for maintaining or improving product or service quality.
    Intellectual Property: Acquiring or licensing patents, trademarks, and copyrights as part of a growth strategy.
    Technology Adoption: Implementing new technologies that facilitate operational improvement and market reach.
    Channel Expansion: Growing through new sales channels like online, retail partnerships, or direct-to-consumer models.
    Capacity Expansion: Scaling the operational capabilities of the business to meet increased demand.
    Franchising: Licensing the business model to third-party operators as a form of expansion.
    Social Responsibility: Focused on sustainable and socially responsible growth, which can also improve brand image.
    Business Intelligence: Leveraging data analytics for informed decision-making in scaling efforts.
    Talent Development: Investing in the training and development of existing staff to meet the challenges of expansion.
    Ecosystem Development: Building a network of partners, suppliers, and customers to create a business ecosystem.
    Business Model Innovation: Reimagining the existing business model to uncover new revenue streams or efficiencies.
    Government and Public Relations: Strategies for improving relationships with government bodies to facilitate expansion or enter new markets.
    Community Engagement: Building strong ties with local communities as a part of corporate social responsibility and brand building.
    Value Proposition Refinement: Fine-tuning the company's unique selling proposition for different markets or customer segments.
    Funding and Investment: Securing external funding or investment as a means to facilitate growth.
    Market Research: Ongoing efforts to understand market trends, customer needs, and competitive landscape.
    Other: Any other specialized or industry-specific approaches
    `,
  },
  {
    id: 11041,
    parent: 1104,
    status: "5. Hold",
    name_singular: "penetration",
    display_singular: "Penetration",
    summary: null,
    description: null,
    nickname: "governance-model-growth-penetration",
  },
  {
    id: 111,
    parent: 11,
    status: "5. Hold",
    name_singular: "counsel",
    display_singular: "Counsel",
    description:
      "Obtain relevant input from inside and/or outside the business",
    summary: "Advice and consultation from specialist areas",
    nickname: "governance-counsel",
  },
  {
    id: 1110,
    parent: 111,
    status: "5. Hold",
    name_singular: "legal",
    display_singular: "Legal",
    description: "Obtain legal advice & consultation",
    summary: "The CLO role (Chief Legal Officer)",
    nickname: "governance-counsel-legal",
  },
  {
    id: 1111,
    parent: 111,
    status: "5. Hold",
    name_singular: "financial",
    display_singular: "Financial",
    description: "Obtain finance advice & consultation",
    summary: "The CFO role (Chief Financial Officer)",
    nickname: "governance-counsel-financial",
  },
  {
    id: 1112,
    parent: 111,
    status: "5. Hold",
    name_singular: "technological",
    display_singular: "Technological",
    description: "Obtain technical advice & consultation",
    summary: "The CIO/CTO role (Chief Information/Technology Officer)",
    nickname: "governance-counsel-technological",
  },
  {
    id: 1113,
    parent: 111,
    status: "5. Hold",
    name_singular: "niche",
    display_singular: "Niche",
    description:
      "Consultation with industry experts / Knowledge in specific domains",
    summary: "Bring in expert consultation for specialist advice",
    notes: `(e.g. data center employees for a server move project)`,
    nickname: "governance-counsel-niche",
  },
  {
    id: 1114,
    parent: 111,
    status: "5. Hold",
    name_singular: "strategy",
    display_singular: "Strategy",
    description: "Industry, business and marketing experts",
    summary: "Consultation with business & strategic experts",
    nickname: "governance-counsel-strategy",
  },
  {
    id: 112,
    parent: 11,
    status: "5. Hold",
    name_singular: "regulation",
    display_singular: "Regulation",
    description:
      "A central repository for managing Permits, Auditing, Accreditations, Compliance and Regulations",
    summary:
      "Simplify all incorporatation, certification and regulation requirements",
    nickname: "governance-regulation",
  },
  {
    id: 1120,
    parent: 112,
    status: "5. Hold",
    name_singular: "incorporation",
    display_singular: "Incorporation",
    summary:
      "Forming corporate entities/companies, associated licensing & liability protections",
    description:
      "Incorporation and/or getting permission/permits to operate. Form a business if needed, in order to provide services to a certain jurisdiction.",
    nickname: "governance-regulation-incorporation",
  },
  {
    id: 11200,
    parent: 1120,
    status: "5. Hold",
    name_singular: "general-licensing",
    display_singular: "General Licensing",
    summary: null,
    description: null,
    nickname: "regulation-incorporation-general-licensing",
  },
  {
    id: 112000,
    parent: 11200,
    status: "5. Hold",
    name_singular: "license",
    display_singular: "Business License",
    summary: "General business license",
    description:
      "Obtain permission for your company to operate within a country/state",
    nickname: "incorporation-general-licensing-license",
  },
  {
    id: 112001,
    parent: 11200,
    status: "5. Hold",
    name_singular: "trading-name-license",
    display_singular: "Trading Name License",
    summary: "Permission to trade as a specific name",
    description: "License to trade as a name other than the legal entity name",
    nickname: "incorporation-general-licensing-trading-name-license",
  },
  {
    id: 112002,
    parent: 11200,
    status: "5. Hold",
    name_singular: "employer-identification",
    display_singular: "Employer Identification",
    summary: "Permission to employ personnel",
    description:
      "A number (e.g. EIN in the USA) required for businesses with employees, certain types of legal structures, or other specific criteria",
    nickname: "incorporation-general-licensing-employer-identification",
  },
  {
    id: 11201,
    parent: 1120,
    status: "5. Hold",
    name_singular: "tax-licenses",
    display_singular: "Tax Licenses",
    summary: null,
    description: null,
    nickname: "regulation-incorporation-tax-licenses",
  },
  {
    id: 112010,
    parent: 11201,
    status: "5. Hold",
    name_singular: "sales-license",
    display_singular: "Sales License",
    summary: null,
    description:
      "Sales tax permit/license in order to collect/remit sales taxes to state or local government.",
    nickname: "incorporation-tax-licenses-sales-license",
  },
  {
    id: 11202,
    parent: 1120,
    status: "5. Hold",
    name_singular: "labor-licensing",
    display_singular: "Labor Licensing",
    summary: null,
    description: null,
    nickname: "regulation-incorporation-labor-licensing",
  },
  {
    id: 112021,
    parent: 11202,
    status: "5. Hold",
    name_singular: "unemployment-insurance",
    display_singular: "Unemployment Insurance",
    summary: null,
    description:
      "Some local/federal governments require business with employees to register and pay into the state/federal unemployment insurance fund.",
    nickname: "incorporation-labor-licensing-unemployment-insurance",
  },
  {
    id: 112022,
    parent: 11202,
    status: "5. Hold",
    name_singular: "workers-compensation-insurance",
    display_singular: "Workers Compensation Insurance",
    summary: null,
    description:
      "Businesses with employees are usually required to carry workers' compensation insurance to cover work-related injuries or illnesses.",
    nickname: "incorporation-labor-licensing-workers-compensation-insurance",
  },
  {
    id: 112023,
    parent: 11202,
    status: "5. Hold",
    name_singular: "workers-compensation-insurance",
    display_singular: "Workers Compensation Insurance",
    summary: null,
    description:
      "Businesses with employees are usually required to carry workers' compensation insurance to cover work-related injuries or illnesses.",
    nickname: "incorporation-labor-licensing-workers-compensation-insurance",
  },
  {
    id: 11203,
    parent: 1120,
    status: "5. Hold",
    name_singular: "operating-licensing",
    display_singular: "Operating Licensing",
    summary: null,
    description: null,
    nickname: "regulation-incorporation-operating-licensing",
  },
  {
    id: 112030,
    parent: 11203,
    status: "5. Hold",
    name_singular: "health-licensing",
    display_singular: "Health Licensing",
    summary: null,
    description:
      "health and safety, e.g. food regulations, for personnel, customers and other stakeholders interacting with the organisation",
    nickname: "incorporation-operating-licensing-health-licensing",
  },
  {
    id: 112030,
    parent: 11203,
    status: "5. Hold",
    name_singular: "health-licensing",
    display_singular: "Health Licensing",
    summary: "Health and safety, e.g. food regulations, safety",
    description: null,
    nickname: "incorporation-operating-licensing-health-licensing",
  },
  {
    id: 11204,
    parent: 1120,
    status: "5. Hold",
    name_singular: "industry-licensing",
    display_singular: "Industry Licensing",
    description: null,
    summary:
      "Licenses and permits required to provide specific goods/services or to operate in a specific industry",
    nickname: "regulation-incorporation-industry-licensing",
  },
  {
    id: 112040,
    parent: 11204,
    status: "5. Hold",
    name_singular: "occupational-licensing",
    display_singular: "Occupational Licensing",
    summary: null,
    description:
      "Certain professions, such as accountants, doctors, lawyers, architects, and electricians, may require professional or occupational licenses to operate legally.",
    nickname: "incorporation-industry-licensing-occupational-licensing",
  },
  {
    id: 1121,
    parent: 112,
    status: "5. Hold",
    name_singular: "legislation",
    display_singular: "Legislation",
    summary: "Rules, information and instruction from regulatory bodies",
    description: "Receive, collate, review and adhere to regulations",
    nickname: "governance-regulation-legislation",
  },
  {
    id: 1122,
    parent: 112,
    status: "5. Hold",
    name_singular: "auditing",
    display_singular: "Auditing",
    description: null,
    summary: "Internal and external auditing",
    nickname: "governance-regulation-auditing",
  },
  {
    id: 1123,
    parent: 112,
    status: "5. Hold",
    name_singular: "accreditation",
    display_singular: "Accreditation",
    description:
      "Obtain proof of adherance for standards, certifications and regulations",
    summary: "Licenses, Awards, Certification and Standards",
    nickname: "governance-regulation-accreditation",
  },
  {
    id: 1124,
    parent: 112,
    status: "5. Hold",
    name_singular: "submissions",
    display_singular: "Submissions",
    summary: "Filing information to regulatory bodies",
    description:
      "Submitting reports / data as directed by governmental departments and other bodies",
    nickname: "governance-regulation-submissions",
  },
  {
    id: 113,
    parent: 11,
    status: "5. Hold",
    name_singular: "metrics",
    display_singular: "Metrics",
    description: null,
    summary: "Your company roadmap and timeline",
    nickname: "governance-metrics-scorecards",
  },
  {
    id: 1130,
    parent: 113,
    status: "5. Hold",
    name_singular: "targets",
    display_singular: "Targets",
    description: "The OKRs/KPIs",
    summary: "The OKRs/KPIs",
    nickname: "governance-metrics-targets",
  },
  {
    id: 1131,
    parent: 113,
    status: "5. Hold",
    name_singular: "benchmarks",
    display_singular: "Benchmarks",
    description: null,
    summary: "The thresholds you want to reach with your metrics",
    nickname: "governance-metrics-benchmarks",
  },
  {
    id: 1132,
    parent: 113,
    status: "5. Hold",
    name_singular: "measurements",
    display_singular: "Measurements",
    description: null,
    summary: "Recording of actual business data against metrics",
    nickname: "governance-metrics-measurements",
  },
  {
    id: 1133,
    parent: 113,
    status: "5. Hold",
    name_singular: "scorecards",
    display_singular: "Scorecards",
    description: null,
    summary: "Scorecards from different areas of the business",
    nickname: "governance-metrics-scorecards",
  },
  {
    id: 1134,
    parent: 113,
    status: "5. Hold",
    name_singular: "inspection",
    display_singular: "Inspection",
    description:
      "Review and derive actions from metrics that will improve future achievement of metrics",
    summary: "Review of metrics & measurements",
    nickname: "governance-metrics-inspection",
  },
  {
    id: 114,
    parent: 11,
    status: "5. Hold",
    name_singular: "executive",
    display_singular: "Executive",
    summary: "Management and Executive decision making",
    description:
      "Standardise and supercharge your decision making throughout the business",
    notes: ` [
      "Includes executive meeting setup, task management setup (e.g. Traction Tools, L10 meetings, etc.)",
    ]`,
    nickname: "governance-executive",
  },
  {
    id: 1140,
    parent: 114,
    status: "5. Hold",
    name_singular: "board",
    display_singular: "Board",
    description: null,
    summary: "Board of directors and shareholder management",
    nickname: "governance-executive-board",
  },
  {
    id: 1141,
    parent: 114,
    status: "5. Hold",
    name_singular: "management",
    display_singular: "Management",
    summary: "Handling of manager responsibilities",
    description:
      "Manage your teams, responsibilities, stakeholders and deliverables",
    nickname: "governance-executive-management",
  },
  {
    id: 11410,
    parent: 1141,
    status: "5. Hold",
    name_singular: "stakeholder_management",
    display_singular: "Stakeholder Management",
    summary: null,
    description: null,
    nickname: "governance-executive-management-stakeholder_management",
  },
  {
    id: 1142,
    parent: 114,
    status: "5. Hold",
    name_singular: "accountability",
    display_singular: "Accountability",
    summary: "Mechanisms for assigning and tracking responsibilities",
    description:
      "Ensure everything has an owner: Assign responsibilities to managers and other employees",
    nickname: "governance-executive-accountability",
  },
  {
    id: 1143,
    parent: 114,
    status: "5. Hold",
    name_singular: "reports",
    display_singular: "Reports",
    description: "Report creations for the business's decision making",
    summary: "Your hub for automated & manual reports",
    nickname: "governance-executive-reports",
  },
  {
    id: 1144,
    parent: 114,
    status: "5. Hold",
    name_singular: "decisions",
    display_singular: "Decisions",
    description: null,
    summary: "Coordination & tools for decision making",
    nickname: "governance-executive-decisions",
  },
  {
    id: 12,
    parent: 1,
    status: "0. New",
    name_singular: "accounts",
    display_singular: "Accounts",
    summary: "Invoices, Bills & Finance",
    description: "Organise your business finances",
    nickname: "accounts",
    icon_name: "dollar",
    icon_source: "FontAwesome",
  },
  {
    id: 120,
    parent: 12,
    status: "5. Hold",
    name_singular: "ledger",
    display_singular: "Ledger",
    description: "Chart of accounts, bookkeeping and reporting",
    summary: "Simplify and supercharge your chart of accounts & reports",
    nickname: "accounts-ledger",
  },
  {
    id: 1200,
    parent: 120,
    status: "0. New",
    name_singular: "chart",
    display_singular: "Chart",
    summary:
      "Chart of Accounts, Budgets and other layouts, including the P&L and balance sheet",
    description: "Manage your general ledger and related reports",
    notes: `
      guides: [
        "Chart of Accounts Setup: COGs & Revenue P&L Accounts",
        "Chart of Accounts Setup: Prepayments, Downpayments and Deposit Balance Sheet accounts, and triggers+transactions to move them to the P&L",
        "",
      ],
      [
        features: [
          "Report Setup & Maintenance, Balance Sheet, P&L layouts, custom reports",
          "Budgeting and KPI management",
          "Monthly Reports: P&L, Balance Sheet, Cash Flow Statement",
        ],
        "Ensure COGs accounts have corresponding revenue accounts, and that items are all onbilled to customers",
        "Set up deposit/prepayment/downpayment accounts",
        "Set up suspense / catch-all accounts",
        "Set up fixed asset & inventory registers/accounts, with depreciation schedules where appropriate",
        "Set up tax & government accounts, including provisions accounts for expected taxes",
        "Set up supplier prepayment and other provisions accounts",
        "Set up a Balance Sheet layout",
        "Set up a P&L layout",
        "Set up a Cash Flow Forecast layout",
        "Set up a custom report for Transactions/Accounts",
        {
          types_of_revenue_accounts: {
            "Product Resale":
              "Buying products from manufacturers or distributors, and reselling them (with added value, even if just providing access to the product to consumers)",
            "Licensing Revenue": "Selling the right to do something",
            "Recurring Services": "Providing a recurring service to the customer",
            "Adhoc Services":
              "Providing a one off service to the customer (Time & Materials)",
            "Dividend Revenue":
              "Receiving dividend payments if your business owns stocks in other companies that issue dividends",
            "Interest Revenue": "From investments that earn interest",
            "Contra Revenue":
              "Discounts, Returns and other deductions from other revenue accounts",
            "Commissions and Agency Revenue":
              "Fees and commissions you receive from third party vendors providing products or services to your clients.",
          },
        },
      ]`,
    nickname: "accounts-ledger-chart",
  },
  {
    id: 12000,
    parent: 1200,
    status: "0. New",
    name_singular: "accounts",
    display_singular: "Accounts",
    description: "Manage your general ledger",
    summary: "Individual accounts in the Chart of Accounts",
    nickname: "accounts-ledger-budgets-accounts",
  },
  {
    id: 12001,
    parent: 1200,
    status: "0. New",
    name_singular: "groupings",
    display_singular: "Grouping",
    description: "Group accounts into groups for different contexts & uses",
    summary: "Buckets for your chart of accounts",
    nickname: "accounts-ledger-budgets-groupings",
  },
  {
    id: 12002,
    parent: 1200,
    status: "0. New",
    name_singular: "schedules",
    display_singular: "Schedules",
    description: null,
    summary: "Depreciation and amortization schedules",
    nickname: "accounts-ledger-budgets-schedules",
  },
  {
    id: 1201,
    parent: 120,
    status: "0. New",
    name_singular: "budgets",
    display_singular: "Budgets",
    description:
      "Easily create and assign budgets to departments, people and the business",
    summary: "Creation and allocation of financial resources",
    notes: `
      process: [
        "Set up P&L layout",
        "Set up Balance sheet layout",
        "Set up cash flow forecast layout",
        "Set up equity layout (shareholder equity report)",
      ],
    `,
    nickname: "accounts-ledger-budgets",
  },
  {
    id: 1202,
    parent: 120,
    status: "0. New",
    name_singular: "bookkeeping",
    display_singular: "Bookkeeping",
    summary: "Daily accural based bookkeeping",
    description:
      "Reconciliations, coding and journalling of your accounts & transactions",
    notes: `[
      "Reconciliations & Coding of Transactions, including bank statement reconciliation",
      "Manual & Recurring Journalling to allocate lines between the Balance Sheet and P&L accounts",
      "Management of Suspense, Prepayment, Downpayment, Inventory, Clearing and other aseet & liability accounts",
      "Management of revenue and expense accounts",
      "End of Month finalisation and reporting",
      "Manual journalling",
    ]`,
    nickname: "accounts-ledger-bookkeeping",
  },
  {
    id: 12030,
    parent: 1202,
    status: "0. New",
    name_singular: "mapping",
    display_singular: "Mapping",
    summary:
      "Routing any areas of the business into the correct financial area",
    description:
      "Map your products, revenue streams, expenditure types, inventory categories and payroll items to the correct places in your Chart of Accounts",
    notes: `[
      "Map revenue streams",
      "Map product categories/types and inventory adjustments",
      "Map expenditure types",
      "Map payroll items (reimbursements, expenses, commissions, overtime)",
    ]`,
    nickname: "ledger-bookkeeping-mapping",
  },
  {
    id: 12031,
    parent: 1202,
    status: "0. New",
    name_singular: "bank-reconciliation",
    display_singular: "Bank Reconciliation",
    summary: "Transaction connections to Bank feed items",
    description: "Match & code your transactions to bank statement lines",
    nickname: "ledger-bookkeeping-bank-reconciliation",
  },
  {
    id: 12031,
    parent: 1202,
    status: "0. New",
    name_singular: "adjustments",
    display_singular: "Adjustments",
    summary: "Acrruals, deferrals, depreciation and amortisation.",
    description: null,
    notes: `,
      references: [
        "match/code transactionshttps://www.nerdwallet.com/article/small-business/adjusting-entries-accounting#:~:text=An%20adjusting%20entry%20is%20simply,the%20end%20of%20the%20year. to bank statement lines",
      ],`,
    nickname: "ledger-bookkeeping-adjustments",
  },
  {
    id: 1203,
    parent: 120,
    status: "0. New",
    name_singular: "statements",
    display_singular: "Statements",
    description: null,
    summary:
      "Financial modelling: P&L, balance sheet, CFF and other ledger reporting",
    nickname: "accounts-ledger-statements",
    notes: `
    "IPO layout (Initial public offering model)", //https://the-cfo.io/2019/11/06/what-are-the-different-financial-models/
    "Discounted Cash Flow (DCF) and LBO Models", // https://www.investopedia.com/terms/d/dcf.asp, https://www.google.com/search?rlz=1C1CHBF_en-GBAU966AU967&q=LBO+Model+vs+dcf&spell=1&sa=X&ved=2ahUKEwjwzKrts6n4AhU_-jgGHeBJAOYQirwEKAB6BAgBEDI&biw=1229&bih=576&dpr=1.56
    "M&A Model"
    // "Review asset accounts",
    // "Review liability accounts",
    // "Review revenue accounts",
    // "Review expense accounts",
    process: [
      "Trial balance report",
      "profit & loss layout (P&L report)",
      "Balance sheet layout (balance sheet report)",
      "CFF layout (cash flow forecast report)",
      "equity layout (shareholder equity report)",
      "IPO layout (Initial public offering model)",
      "Discounted Cash Flow (DCF) and LBO Models",
      "M&A Model",
    ],
    `,
  },
  {
    id: 1204,
    parent: 120,
    status: "5. Hold",
    name_singular: "finalisations",
    display_singular: "Finalisations",
    description: null,
    summary:
      "Closing the books: End of month, rollovers for the next month, period locks",
    nickname: "accounts-ledger-finalisations",
  },
  {
    id: 121,
    parent: 12,
    status: "0. New",
    name_singular: "receivables",
    display_singular: "Receivables",
    summary: "Get your invoices issued and paid on time.",
    description: "End-to-end revenue operations",
    notes: `
    benefits:
      "Save $1,000s on missed revenue. Have an expert on hand to manage everything for you. Avoid costly in house staff",
    process: {
      onboarding: [
        {
          title: "automate receivables tasks",
          description:
            "set up repeating schedules for AR, including when to issue invoices, fire payment reminders and contact debtors",
          steps: [
            "When to process line items",
            "When to issue invoices",
            "When to send due date reminders",
            "When to accept and reconcile remittances",
            "When to contact debtors and send customer statements",
          ],
        },
        {
          title: "design & deploy line-item templating",
          description:
            "Decide how to process billing items (including supplier bill oncharging, approval requirements, quality checks, price calculations and line-item descriptions)",
          steps: [
            "What supplier charges to onbill",
            "What approval steps/requirements are required",
            "What quality checks to conduct",
            "What price calculations are needed (including discounts and special offers)",
            "What line item descriptions should be used",
          ],
        },
        {
          title: "design & deploy line-item templating",
          description:
            "Decide how to process billing items (including supplier bill oncharging, approval requirements, quality checks, price calculations and line-item descriptions)",
          steps: [
            "What supplier charges to onbill",
            "What approval steps/requirements are required",
            "What quality checks to conduct",
            "What price calculations are needed (including discounts and special offers)",
            "What line item descriptions should be used",
          ],
        },
      ],
      operations: [{}],
      management: [{}],
    },
    features: [
      "Revenue Pipeline Management: Prediction, sanitisation and preparation of all queued invoicing",
      "Invoicing: Draft invoices according to rules/contracts/quotes, send approved invoices and sync them to your accounting package",
      "",
    ],
    industries: [],
    pricing: {
      options: {
        pipeline: "line items processed",
        invoicing: "invoices issued",
        collections: "arrears controlled",
        remittance: "payments collected",
        debtors: "customers managed",
      },
      startup: {
        price: "500",
        pipeline: "50",
        invoicing: "10",
        collections: "10",
        remittance: "20",
        debtors: "10",
      },
      business: {
        price: "1000",
      },
      enterprise: {
        price: "Custom",
      },
    },
    platforms: [],
    guides: {
      onboarding: [{}],
    },
    `,
    nickname: "accounts-receivables",
  },
  {
    id: 1210,
    parent: 121,
    status: "0. New",
    name_singular: "debtors",
    display_singular: "Debtors",
    summary:
      "Monitor and manage debtors, billing setups, payment plans and customer credit risk",
    description:
      "Customer statements, payment plans and other debtor details. Collate and update your debtor details, help customers set up billing methods, and manage customer statements and plans",
    notes: `price_unit: "debtor",
    process: [
      "Setup: Set up billing for debtors, obtain direct debit authority, assist with payment method configuration",
      "Statements: Send monthly statements to customers (after ensuring all payments are reconciled and credits applied",
      "Liaise: Liaise with customers to establish payment dates (manual followup of ignored invoice reminders)",
      "Plans: Organise and maintain payment plans with debtors",
      "Expectations: Set expected payment dates on open invoices",
      "Maintenance: Update any changes to customer billing information",
      "Risk: Manage customer credit risk using historic internal data and your credit bureau subscription (adding the debtor to your customer watchlist where necessary)",
      "Reporting: Maintain debtor information on the Receivables report",
    ],
    features: {},
    industries: {},
    overview: [
      "Issue customer statements (monthly or as required)",
      "Contact and organise payment plans with debtors",
      "Provide a debtors report with recommended actions",
    ],
    billing: {
      startup: {
        title: "Startup",
        price_month: 200,
        priceyear: 2000,
        priceaddition: "$4 per additional debtor",
        included: [
          "Setup of your purchase requests process",
          "Management of up to 10 debtors",
          "Monthly collections report",
          "Keep documentation updated with changes",
        ],
      },
      business: {
        title: "Business",
        price_month: 600,
        priceyear: 6000,
        priceaddition: "$3 per additional debtor",
        included: [
          "Everything from the Startup package, and...",
          "Management of up to 400 debtors",
          "Weekly collections report",
          "Keep documentation updated with changes",
        ],
      },
      corporation: {
        title: "Corporation",
        price_month: 1000,
        priceyear: 10000,
        priceaddition: "$2 per additional debtor",
        included: [
          "Everything from the Business package, and...",
          "Management of up to 1000 debtors",
          "Daily collections report",
        ],
      },
      enterprise: {
        title: "Enterprise",
        price_month: 10000,
        priceyear: 100000,
        priceaddition: "$1 per additional debtor",
        included: [
          "Everything from the Corporation package, and...",
          "Enterprise level support",
          "Custom integrations",
        ],
      },
    },`,
    nickname: "accounts-receivables-debtors",
  },
  {
    id: 12100,
    parent: 1210,
    status: "0. New",
    name_singular: "debtor_setup",
    display_singular: "Debtor Setup",
    summary: null,
    description: "Set up / registration of the debtor's details in the system",
    notes: ` [
      "Set up any customers (and other companies that may owe you money) as debtors",
      "Reconcile all debtors across applications/systems/",
      "Categorise debtors (by revenue stream, market etc.)",
      "Set up and maintain debtor information",
      "Monthly report summarises the debtor list",
      "Any need for discussion is derived and put on the meeting agenda",
    ]`,
    nickname: "receivables-debtors-debtor_setup",
  },
  {
    id: 121000,
    parent: 12100,
    status: "0. New",
    name_singular: "debtor_details",
    display_singular: "Debtor Details",
    summary: null,
    description:
      "Ensure all debtors are entered. Reconcile debtors between your platforms to ensure all exist & match",
    nickname: "debtors-debtor_setup-debtor_details",
  },
  {
    id: 121001,
    parent: 12100,
    status: "0. New",
    name_singular: "debtor_status",
    display_singular: "Debtor Status",
    summary: null,
    description:
      "Move the debtor to 'Approved' status to allow items to be billed to it / add items to the approved billings list",
    nickname: "debtors-debtor_setup-debtor_status",
  },
  {
    id: 121002,
    parent: 12100,
    status: "0. New",
    name_singular: "debtor_approvals",
    display_singular: "Debtor Approvals",
    summary: null,
    description: null,
    nickname: "debtors-debtor_setup-debtor_approvals",
  },
  {
    id: 12101,
    parent: 1210,
    status: "0. New",
    name_singular: "terms",
    display_singular: "Terms",
    summary:
      "Organise and maintain payment terms (including short term payment plans) with debtors",
    description: "A managed list of terms & payment plans for all debtors",
    nickname: "receivables-debtors-terms",
  },
  {
    id: 12102,
    parent: 1210,
    status: "0. New",
    name_singular: "risk",
    display_singular: "Risk",
    summary: null,
    description: null,
    nickname: "receivables-debtors-risk",
  },
  {
    id: 121024,
    parent: 12102,
    status: "0. New",
    name_singular: "payment-plans",
    display_singular: "Payment Plans",
    summary: null,
    description: null,
    nickname: "debtors-risk-payment-plans",
  },
  {
    id: 12103,
    parent: 1210,
    status: "0. New",
    name_singular: "billing_setup",
    display_singular: "Billing Setup",
    summary: null,
    description: "Set up / maintain billing methods for the debtor",
    nickname: "receivables-debtors-billing_setup",
  },
  {
    id: 121030,
    parent: 12103,
    status: "0. New",
    name_singular: "billing_methods",
    display_singular: "Billing Methods",
    summary: null,
    description:
      "Make payment methods available to the customer (with use of Systems>Applications)",
    nickname: "debtors-billing_setup-billing_methods",
  },
  {
    id: 121031,
    parent: 12103,
    status: "0. New",
    name_singular: "billing_authority",
    display_singular: "Billing Authority",
    summary: null,
    description:
      "Getting direct debit / payment authority signoff from debtors if needed",
    nickname: "debtors-billing_setup-billing_authority",
  },
  {
    id: 121032,
    parent: 12103,
    status: "0. New",
    name_singular: "billing_automation",
    display_singular: "Billing Automation",
    summary: null,
    description:
      "If approved by the debtor, configure auto debit for invoice types/conditions",
    nickname: "debtors-billing_setup-billing_automation",
  },
  {
    id: 12104,
    parent: 1210,
    status: "0. New",
    name_singular: "queries",
    display_singular: "Queries",
    summary:
      "Sent statements to debtors with current balance, monies owed and recent transactions",
    description:
      "After ensuring all payments are reconciled and credits applied, statements can be sent to debtors showing their current balance, recent transactions, open invoices etc.",
    nickname: "receivables-debtors-queries",
  },
  {
    id: 1211,
    parent: 121,
    status: "0. New",
    name_singular: "charges",
    display_singular: "Charges",
    summary: "Automatic queuing of billable items",
    description:
      "Contracts and recurring billables, ad hoc labour/charges and other products/expenses to bill",
    nickname: "accounts-receivables-charges",
  },
  {
    id: 12120,
    parent: 1211,
    status: "0. New",
    name_singular: "pipeline",
    display_singular: "Pipeline",
    summary: "Identify and maximise all of your potential & missing revenue",
    description:
      "Prediction, sanitisation and preparation of all queued invoicing",
    notes: ` 
    summary2: "We predict, sanitize and prepare all of your queued invoicing",
      price_unit: "line item",
      process: [
        "Identification: Maintain your invoicing pipeline in a clear, collated queue, with forecasted revenue figures",
        "Reconciliations: Update agreements and billing items according to customer usage, quantity changes and new charges.",
        "Preparation: Process items ready for invoicing according to conditions",
        "Sanitization: Adjust / tidy items according to rules, and push items back to the owner as necessary",
        "Matching: Match items to quotes and conditions, apply charges and ensure everything is captured for onbilling",
      ],[
      "If you charge ad hoc labour, in what increments? (e.g. round up to the nearest 15 minutes)",
      "If you charge ad hoc labour, what are standard working hours (e.g. after hours rates before 8am and after 5pm",
      "For hardware, what shipping do you charge (e.g. onbill any vendor shipping at cost, standard margin applied, or standard flat rates per weight class)",
    ]`,
    nickname: "receivables-charges-pipeline",
  },
  {
    id: 1212,
    parent: 121,
    status: "0. New",
    name_singular: "invoicing",
    display_singular: "Invoicing",
    summary:
      "Bill your customers on time and with comprehensive, correct line items",
    description: "Issuing invoices to customers",
    notes: `
      summary2:
        "Line items (Deposits/downpayments + products + charges + adjustments + discounts + tax + credits) are generated, processed, approved and invoiced to the customer",
      subheading2: "We issue all of your invoices, downpayments, deposits and prepayments",
      price_unit: "invoice",
      overview: [
        "Line item processing and extras",
        "Invoice generation",
        "Invoice approval",
        "Invoice syncing to necessary platforms",
        "Apply any open credits/adjustments before sending invoices",
        "Check all open accounts communications with customers before sending invoices",
        "Send invoices with appropriate cover emails",
      ],
      process: [
        "Templates: Maintain invoice & email templates, and other invoice attributes",
        "Prepayments: Draft deposits, down payments and other advance payments",
        "Invoices: Draft invoices according to rules/contracts/quotes",
        "Preparation: Apply invoicing rules and templates, shipping charges and other line items",
        "Credits: Apply any credit that  the customer has on file",
        "Approvals: Submit invoices to you for approval (optional)",
        "Issue: Send approved invoices",
      ],
      types: [
        "Prepayments (deposits, downpayments)",
        "Charges (products, services, shipping, fees, additions)",
        "Adjustments (discounts, special offers, pricing rules)",
        "Tax (sales tax)",
        "Credits (credit notes / refunds)",
      ],`,
    nickname: "accounts-receivables-invoicing",
  },
  {
    id: 12121,
    parent: 1212,
    status: "0. New",
    name_singular: "template",
    display_singular: "Template",
    description:
      "Create templats for invoices, credit notes, down payments and deposits",
    summary: "Invoice and Billing templates",
    nickname: "receivables-invoicing-template",
  },
  {
    id: 12122,
    parent: 1212,
    status: "0. New",
    name_singular: "generate",
    display_singular: "Generate",
    summary: "Convert billable charges into invoices",
    description: "Generate invoices",
    nickname: "receivables-invoicing-generate",
  },
  {
    id: 12123,
    parent: 1212,
    status: "0. New",
    name_singular: "verify",
    display_singular: "Verify",
    summary: "Invoice approvals",
    description:
      "Match the invoice against quotes (and other X-way matches), to validate it as correct",
    nickname: "receivables-invoicing-verify",
  },
  {
    id: 12124,
    parent: 1212,
    status: "0. New",
    name_singular: "ammendment",
    display_singular: "Ammendment",
    notes: {
      display_plural: "Ammendments",
      name_verb: "ammend",
      display_verb: "Ammend",
      name_plural: "ammendments",
    },
    summary: "Invoice adjustment items",
    description:
      "Add adjustment items to invoices (discounts, credits, write-offs, no-charge items etc.)",
    nickname: "receivables-invoicing-ammendment",
  },
  {
    id: 12125,
    parent: 1212,
    status: "0. New",
    name_singular: "issue",
    display_singular: "Issue",
    summary: "Sending the invoice to the customer",
    description:
      "Issue the invoice by sending it to the 'attention to' contact / bill-to organisation",
    nickname: "receivables-invoicing-issue",
  },
  {
    id: 1213,
    parent: 121,
    status: "0. New",
    name_singular: "collections",
    display_singular: "Collections",
    summary: "Management and collection of owed revenue",
    description: null,
    notes: `
      summary2:
        "We issue invoice reminders, handle invoice queries and manage debtor communications",
      price_unit: "invoice",
      features: {},
      industries: {},
      process: [
        "Queries: Resolve and answer any customer invoice queries (response: <1 business day)",
        "Credits: Ensure all open credits/adjustments are applied to open invoices",
        "Reminders: Maintain and trigger customer reminders (automatic and manual)",
        "Followups: Action any unresponded reminders and overdue invoices",
        "Reporting: Maintain collections information on the Receivables report",
      ],
      overview: [
        "Set expected payment dates on open invoices",
        "Maintain overdue payment templates",
        "Issue overdue payment templates",
        "Provide a collections report with recommended actions",
      ],
      billing: {
        startup: {
          title: "Startup",
          price_month: 200,
          priceyear: 2000,
          priceaddition: "$1 per additional invoice",
          included: [
            "Setup of your purchase requests process",
            "Processing & sanitisation of up to 100 invoices",
            "Monthly collections report",
            "Keep documentation updated with changes",
          ],
        },
        business: {
          title: "Business",
          price_month: 1000,
          priceyear: 10000,
          priceaddition: "$1 per additional invoice",
          included: [
            "Everything from the Startup package, and...",
            "Processing & sanitisation of up to 200 invoices",
            "Weekly collections report",
            "Keep documentation updated with changes",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 5000,
          priceyear: 50000,
          priceaddition: "$1 per additional invoice",
          included: [
            "Everything from the Business package, and...",
            "Processing & sanitisation of up to 200 invoices",
            null,
            "Daily collections report",
            "Keep documentation updated with changes",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 10000,
          priceyear: 100000,
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
            "Keep documentation updated with changes",
          ],
        },
      },
      types: [
        "Reminders (auto emails, requests for payment)",
        "Warnings (overdue advice)",
        "Notices (service cutoffs, credit hold)",
        "Demands (Demand for payment, payment deadline)",
        "Escalation (Bad Debt, Debt Collection Agency engagement",
      ],`,
    nickname: "accounts-receivables-collections",
  },
  {
    id: 12130,
    parent: 1213,
    status: "0. New",
    name_singular: "statements-or-debtor-balances",
    display_singular: "Statements",
    summary:
      "Sent statements to debtors with current balance, monies owed and recent transactions",
    description:
      "After ensuring all payments are reconciled and credits applied, statements can be sent to debtors showing their current balance, recent transactions, open invoices etc.",
    nickname: "receivables-collections-statements-or-debtor-balances",
  },
  {
    id: 121300,
    parent: 12130,
    status: "0. New",
    name_singular: "statement-preferences",
    display_singular: "Statement Preferences",
    summary: null,
    description:
      "Confirmed statement preference (whether and when to send, what statement template and branding to use, cover letter, etc.) for debtors/ a specific debtor - this might be automated / blanket rule anyway",
    nickname: "collections-statements-or-debtor-balances-statement-preferences",
  },
  {
    id: 121301,
    parent: 12130,
    status: "0. New",
    name_singular: "statement-enable",
    display_singular: "Statement Enable",
    summary: null,
    description: "Enable/disable statements for debtors or a specific debtor",
    nickname: "collections-statements-or-debtor-balances-statement-enable",
  },
  {
    id: 121302,
    parent: 12130,
    status: "0. New",
    name_singular: "statements-issue",
    display_singular: "Statements Issue",
    summary: null,
    description: "Send statements at the prescribed time",
    nickname: "collections-statements-or-debtor-balances-statements-issue",
  },
  {
    id: 1214,
    parent: 121,
    status: "0. New",
    name_singular: "settlements",
    display_singular: "Settlements",
    summary: "Receive and reconcile customer payments",
    description:
      "Manage receiving of payments, and reconcile them to the correct invoices",
    notes: `[
      "Payment: Help customers to make payment (over the phone or via email / billing platform)",
      "Remittances: Process remittance advices / match to bank statements",
      "Reconcilations: Reconcile payments to the relevant invoices, and ensure line items are reconciled in the P&L correctly",
      "Followups: deposit/downpayment received (or any invoice payment) - alert/trigger any work that was on hold waiting for payment (e.g. product orders or jobs that required 50% downpayment/deposit)",
      "Reporting: Maintain remittance information on the receivables report",
    ]`,
    nickname: "accounts-receivables-settlements",
  },
  {
    id: 12140,
    parent: 1214,
    status: "0. New",
    name_singular: "overpayments",
    display_singular: "Overpayments",
    summary: null,
    description: null,
    notes: `[
      "Record any overpayments (reconcile bank statement lines to overpayments if the customer has no balance due).",
      "Contact the customer if needed advising that we will keep it on file and apply it to next invoices (preferred) or refund it to the customer",
      "Go through the overpayments list each week/month. Discuss any unresolved ones. Any action needed? Progress being made / it's being used up?",
    ]`,
    nickname: "receivables-settlements-overpayments",
  },
  {
    id: 122,
    parent: 12,
    status: "0. New",
    name_singular: "payables",
    display_singular: "Payables",
    description: "Bills from your suppliers",
    summary: "Get your bills entered and paid on time. Stress Free.",
    notes: `
      "Orgmenta handles your supplier billing, repeating bills, bill entering and payment preparation.",
    process: [
      "No more late notices and fees",
      "No more fretting about late payments",
      "All of your bills collated into a simple, stress-free view",
      "Payment calendar management & bill scheduling handled for you",
      "Payments prepared and handed off to you for authorisation",
      "We work with your current accounting package & platforms",
    ],
    features: [],
    included: [
      "Vendors: Supplier portal & billing setup and management",
      "Templates: Suppliers & bill templates collated and maintained with payment groups",
      "Bills: bills verified (3 way match + ensuring COGs charges are onsold to the customer) and entered (with relevant attachments and coding)",
      "Scheduling: payment calendar management & bill scheduling handled for you",
      "Payments prepared and handed off to you for authorisation",
    ],
    industries: [],
    platforms: [],
    guides: [],
    [
      "Weekly Report & Meeting",
      "AP Rollover: Ensure that any followups from the previous AP run are actioned in this run",
    ],
    process: [
      "Supplier Audit",
      {
        name: "Supplier Audit",
        description: "",
        why: [],
        process: [
          "Enter all your suppliers into a single repository",
          "Archive any no longer used (in the last FY)",
          "Update all current supplier details",
        ],
        defaults: [],
      },
      {
        name: "Mapping to your COA",
        description:
          "Map all of your products, revenue streams, inventory categories, expenditures and payroll items to the correct place in your Chart of Accounts",
        why: [
          "To make your AP run a breeze by paying in batches per payment method",
          "To easily transition between payment method - E.g. if you want to move all payments to a new credit card",
          "To know where to expect bank statement lines to come from, when reconciling expentiture transactions",
          "To run reports on supplier types / payment methods",
        ],
      },
      {
        name: "Creditor Contact Groups",
        description:
          "Set up groups for payment methods and supplier types, and add all creditors to relevant groups",
        why: [
          "Make your AP run a breeze by paying in batches per payment method",
          "Run reports on supplier types / payment methods",
          "Easily transition between payment method - E.g. if you want to move all payments to a new credit card",
          "Know where to expect bank statement lines to come from, when reconciling expentiture transactions",
          "Miss fewer payment deadlines, e.g. by knowing which ones need to be paid manually",
        ],
        defaults: [
          "[Credit/debit card] Auto",
          "[Credit/debit card] Manual",
          "International / Wire Transfer",
          "BPay / B2BPay",
          "[Bank Account] EFT Manual",
          "[Bank Account] EFT Auto",
          "Already Paid",
        ],
      },
      {
        name: "Repeating bills setup",
        description: "",
        why: [],
        defaults: [],
      },
    ],
    pricing: {
      startup: {
        price: 500,
        desc: "",
        included: ["Monthly AP Run"],
      },
      business: {
        price: 1000,
        desc: "",
        included: [],
      },
      enterprise: {
        price: 500,
        desc: "",
        included: [],
      },
    },`,
    nickname: "accounts-payables",
  },
  {
    id: 1220,
    parent: 122,
    status: "0. New",
    name_singular: "creditors",
    display_singular: "Creditors",
    summary: "Creditor setup and management",
    description:
      "Manage all suppliers that you owe money to, in a single pane of glass",
    notes: ` [
      "Collate, audit and categorise your list of suppliers",
      "Configure and manage vendor billing portals",
      "Lines of credit / financing / payment plans applied for and maintained",
      "Establish payment methods (including automatic direct debit)",
      "-",
    ],
    process: [
      "Configure and maintain your vendor information repository (e.g. Xero as the 'source of truth')",
      "Collate all of your vendors into a single known list",
      "Archive any no longer in use",
      "Audit all of these vendors and ensure all information is up to date in your system",
      "Assign all suppliers to payment method groups and bill approval requirements",
      "Liaise with vendors to set up supplier billing portals, bill recipients, remittance recipients, direct debit etc.",
      "Monthly reconciliation of supplier statements",
    ]`,
    nickname: "accounts-payables-creditors",
  },
  {
    id: 12200,
    parent: 1220,
    status: "0. New",
    name_singular: "repository-management",
    display_singular: "Repository Management",
    summary: null,
    description:
      "Configure and maintain your creditor information repository (e.g. Xero as the 'source of truth'). Takes vendor information from the Supplier Vendor list.",
    nickname: "payables-creditors-repository-management",
  },
  {
    id: 12201,
    parent: 1220,
    status: "0. New",
    name_singular: "payment-methods",
    display_singular: "Payment Methods",
    summary: null,
    description:
      "Assign all suppliers to payment method groups and bill approval requirements",
    nickname: "payables-creditors-payment-methods",
  },
  {
    id: 12202,
    parent: 1220,
    status: "0. New",
    name_singular: "credit-lines",
    display_singular: "Credit Lines",
    summary: null,
    description: null,
    nickname: "payables-creditors-credit-lines",
  },
  {
    id: 12203,
    parent: 1220,
    status: "0. New",
    name_singular: "integrations",
    display_singular: "Integrations",
    summary: null,
    description:
      "Liaise with vendors to set up supplier billing portals, bill recipients, remittance recipients, direct debit etc.",
    nickname: "payables-creditors-integrations",
  },
  {
    id: 12204,
    parent: 1220,
    status: "0. New",
    name_singular: "reconciliations",
    display_singular: "Reconciliations",
    summary: null,
    description: "(Monthly/[timeframe]) reconciliation of supplier statements",
    nickname: "payables-creditors-reconciliations",
  },
  {
    id: 1221,
    parent: 122,
    status: "0. New",
    name_singular: "forecast",
    display_singular: "Forecast",
    description: "Payables templating, repeating bills and planning",
    summary: "Automatic queuing of billable items",
    notes: `[
      "Set up bill templates",
      "Set up bank rules",
      "Set up approval routing",
      "Set up and maintain repeating bills and payment bank rules",
    ]`,
    nickname: "accounts-payables-forecast",
  },
  {
    id: 1222,
    parent: 122,
    status: "0. New",
    name_singular: "bills",
    display_singular: "Bills",
    summary: "Bills issued from suppliers to your business",
    description: "Verify and enter supplier charges",
    notes: `
      price_unit: "line item",
      process: [
        "Verify incoming supplier bills as genuine (inc. three-way match)",
        "Enter bills into your accounting package",
        "Code each line item to the correct location in the Chart of Accounts",
        "Maintain bill & charges data on the live payables report",
      ],
      billing: {
        startup: {
          title: "Startup",
          price_month: 200,
          priceyear: 2000,
          priceaddition: "$5 per additional line item",
          included: [
            "Setup of your purchase requests process",
            "Processing & sanitisation of up to 100 line items",
            "Monthly bills report",
          ],
        },
        business: {
          title: "Business",
          price_month: 1000,
          priceyear: 10000,
          priceaddition: "$5 per additional line item",
          included: [
            "Everything from the Startup package, and...",
            "Processing & sanitisation of up to 200 line items",
            "Weekly bills report",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 5000,
          priceyear: 50000,
          priceaddition: "$5 per additional line item",
          included: [
            "Everything from the Business package, and...",
            "Processing & sanitisation of up to 200 line items",
            null,
            "Daily bills report",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 10000,
          priceyear: 100000,
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
          ],
        },
      },`,
    nickname: "accounts-payables-bills",
  },
  {
    id: 12220,
    parent: 1222,
    status: "0. New",
    name_singular: "template",
    display_singular: "Template",
    summary: "Recurring and one-off bill templates",
    description:
      "Template recurring / expected bills, e.g. from a purchase order or recurring subscription",
    nickname: "payables-bills-template",
  },
  {
    id: 12221,
    parent: 1222,
    status: "0. New",
    name_singular: "obtain",
    display_singular: "Obtain",
    summary: "Receiving supplier bills",
    description: "Obtain a bill from a supplier",
    notes:
      "receive the bill automatically (preferred) via system (preferred) or by email. Else retreive the bill from a vendor portal. Else request the bill from the supplier",
    nickname: "payables-bills-obtain",
  },
  {
    id: 12222,
    parent: 1222,
    status: "0. New",
    name_singular: "enter",
    display_singular: "Enter",
    summary: "Entering supplier bills",
    description: "Enter bill into the system",
    notes:
      "enter the bill into the system (update the template that has been generated for it",
    nickname: "payables-bills-enter",
  },
  {
    id: 12223,
    parent: 1222,
    status: "0. New",
    name_singular: "verify",
    display_singular: "Verify",
    summary: "Checks and approvals of supplier bills",
    description: "Validate the bill, payment details and other attributes",
    notes:
      "Compare the bill (three/X-way match), ensure payment details and other items are genuine, then approve it",
    nickname: "payables-bills-verify",
  },
  {
    id: 1223,
    parent: 122,
    status: "0. New",
    name_singular: "payments",
    display_singular: "Payments",
    summary: "Paying supplier bills",
    description:
      "Obtaining approval for bills, and maintaining a payment timetable, make payments",
    notes: `
      price_unit: "bill",
      features: {},
      industries: {},
      process: [
        "Confirm payment methods for each bill/supplier",
        "Preapprove bills depending on conditions set by yourself",
        "Obtain your approval on any necessary bills",
        "Schedule payments based on payment method and cash flow",
        "Maintain bill schedules & approvals information on your Payables report",
      ],
      billing: {
        startup: {
          title: "Startup",
          price_month: 100,
          priceyear: 1000,
          priceaddition: "$2 per additional bill",
          included: [
            "Setup of your Payables Scheduling process",
            "Approvals and scheduling of up to 20 bills",
            "Monthly AP report provided, and payment approvals obtained from you",
          ],
        },
        business: {
          title: "Business",
          price_month: 500,
          priceyear: 5000,
          priceaddition: "$2 per additional bill",
          included: [
            "Everything from the Startup package, and...",
            "Approvals and scheduling of up to 100 bills",
            "Weekly AP report provided, and payment approvals obtained from you",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 2000,
          priceyear: 20000,
          priceaddition: "$2 per additional bill",
          included: [
            "Everything from the Business package, and...",
            "Approvals and scheduling of up to 200 bills",
            "Daily AP report provided, and payment approvals obtained from you",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 50000,
          priceyear: 50000,
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
          ],
        },
      },`,
    nickname: "accounts-payables-payments",
  },
  {
    id: 1224,
    parent: 122,
    status: "0. New",
    name_singular: "receipt",
    display_singular: "Receipt",
    description:
      "Reconcile the payment (bank statement line) against the transaction (bill line item) and close off the bill if there is no remaining balance",
    summary: "Reconcile supplier bills",
    notes: `
      price_unit: "payment",
      overview: {},
      features: {},
      industries: {},
      process: [
        "Check that autodebited payments have gone through. Follow up with vendors for any issues",
        "Ensure supplier codes / invoice numbers / other bill references are set correctly",
        "Batch EFT/ACH payments, upload to bank (or provide to you to upload) - Dependent on bank features",
        "Make payments according to payment group (Wire/International transfer, CC payment, Bank/online transfers, etc.",
        "Maintain payments information in your Payables report",
      ],
      billing: {
        startup: {
          title: "Startup",
          price_month: 200,
          priceyear: 2000,
          priceaddition: "$1 per additional request",
          included: [
            "Setup of your purchase requests process",
            "Processing & sanitisation of up to 100 bills",
            "Monthly payments report",
          ],
        },
        business: {
          title: "Business",
          price_month: 1000,
          priceyear: 10000,
          priceaddition: "$1 per additional request",
          included: [
            "Everything from the Startup package, and...",
            "Processing & sanitisation of up to 200 bills",
            "Weekly payments report",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 5000,
          priceyear: 50000,
          priceaddition: "$1 per additional request",
          included: [
            "Everything from the Business package, and...",
            "Processing & sanitisation of up to 200 bills",
            null,
            "Daily payments report",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 10000,
          priceyear: 100000,
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
          ],
        },
      },`,
    nickname: "accounts-payables-receipt",
  },
  {
    id: 123,
    parent: 12,
    status: "5. Hold",
    name_singular: "finance",
    display_singular: "Finance",
    description: null,
    summary: "Management of cash, assets and liabilities",
    nickname: "accounts-finance",
  },
  {
    id: 1230,
    parent: 123,
    status: "5. Hold",
    name_singular: "investment",
    display_singular: "Investment",
    summary: null,
    description:
      "Issuing securities and providing advice on mergers and acquisitions.",
    nickname: "accounts-finance-investment",
  },
  {
    id: 1231,
    parent: 123,
    status: "5. Hold",
    name_singular: "treasury",
    display_singular: "Treasury",
    summary: null,
    description: null,
    nickname: "accounts-finance-treasury",
  },
  {
    id: 1232,
    parent: 123,
    status: "5. Hold",
    name_singular: "financing",
    display_singular: "Financing",
    summary: null,
    description: "Loans and other forms of financing",
    nickname: "accounts-finance-financing",
  },
  {
    id: 1233,
    parent: 123,
    status: "5. Hold",
    name_singular: "banking",
    display_singular: "Banking",
    summary: null,
    description: null,
    nickname: "accounts-finance-banking",
  },
  {
    id: 1234,
    parent: 123,
    status: "5. Hold",
    name_singular: "assets_liabilities",
    display_singular: "Assets & Liabilities",
    summary: null,
    description: null,
    nickname: "accounts-finance-assets_liabilities",
  },
  {
    id: 124,
    parent: 12,
    status: "5. Hold",
    name_singular: "compliance",
    display_singular: "Compliance",
    summary: "Conformance to legislation and regulations",
    description:
      "Handle end of month/year rollovers, P&Ls, Balance Sheets, Accounting compliance and tax submissions",
    nickname: "accounts-compliance",
  },
  {
    id: 1240,
    parent: 124,
    status: "5. Hold",
    name_singular: "conformance",
    display_singular: "Conformance",
    description:
      "Accounts & Finance Compliance (legally, to GAAP priciples, tax compliance, etc.)",
    summary:
      "End of month/year closures, P&L, Balance Sheet, Accounting compliance, tax submissions",
    nickname: "accounts-conformance",
  },
  {
    id: 1241,
    parent: 124,
    status: "5. Hold",
    name_singular: "tax",
    display_singular: "Tax",
    summary: null,
    description: null,
    nickname: "accounts-compliance-tax",
  },
  {
    id: 12400,
    parent: 1240,
    status: "5. Hold",
    name_singular: "registration",
    display_singular: "Registration",
    summary: null,
    description: "Registration for GST/VAT/Payroll tax etc.",
    nickname: "compliance-tax-registration",
  },
  {
    id: 12401,
    parent: 1240,
    status: "5. Hold",
    name_singular: "filing",
    display_singular: "Filing",
    summary: null,
    description:
      "Tax Returns (tax reporting) - BAS/IAS (Australia), Form 941 / Employer's Quarterly Federal Tax Return (USA), Pay As You Earn (PAYE) / Employer Annual Return (form P35) and VAT Return (UK) etc.",
    nickname: "compliance-tax-filing",
  },
  {
    id: 1241,
    parent: 124,
    status: "5. Hold",
    name_singular: "regulation",
    display_singular: "Regulation",
    summary: "Complying with legislation",
    description: null,
    nickname: "accounts-compliance-regulation",
  },
  {
    id: 1242,
    parent: 124,
    status: "5. Hold",
    name_singular: "auditing",
    display_singular: "Auditing",
    summary: null,
    description: null,
    nickname: "accounts-compliance-auditing",
  },
  {
    id: 13,
    parent: 1,
    status: "0. New",
    name_singular: "product",
    display_singular: "Product",
    summary: "Catalog, Inventory & Deployments",
    description:
      "Procure components, assemble them and deliver them to your customer",
    nickname: "product",
    icon_name: "package",
    icon_source: "Feather",
  },
  {
    id: 130,
    parent: 13,
    status: "0. New",
    name_singular: "catalog",
    display_singular: "Catalog",
    description: "Maintaining and categorising the Product Catalog",
    summary: "Internal and synced Product Lists",
    nickname: "product-catalog",
  },
  {
    id: 1300,
    parent: 130,
    status: "0. New",
    name_singular: "patterns",
    display_singular: "Patterns",
    summary: "Templating the catalog",
    description:
      "Create templates, fields and automation for yoru product catalog",
    nickname: "product-catalog-patterns",
  },
  {
    id: 13000,
    parent: 1300,
    status: "0. New",
    name_singular: "classification",
    display_singular: "Classification",
    description: null,
    summary: "Product types, categories and classes",
    nickname: "product-catalog-patterns-classification",
  },
  {
    id: 13001,
    parent: 1300,
    status: "0. New",
    name_singular: "blueprints",
    display_singular: "Blueprints",
    summary:
      "Configuration of descriptions, serialisation, price, cost and other product fields",
    description: "Configure your product templates",
    nickname: "product-catalog-patterns-blueprints",
  },
  {
    id: 13002,
    parent: 1300,
    status: "0. New",
    name_singular: "mapping",
    display_singular: "Mapping",
    description: "Map your product attributes to any other business module",
    summary:
      "Link product categories to other modules (components to accounts>payable, produce to accounts>receivable etc.",
    nickname: "product-catalog-patterns-mapping",
  },
  {
    id: 1301,
    parent: 130,
    status: "0. New",
    name_singular: "solutions",
    display_singular: "Solutions",
    summary: "The endproduct for the customer or internal use",
    description: "An assembly of components",
    nickname: "product-catalog-solutions",
  },
  {
    id: 13010,
    parent: 1301,
    status: "0. New",
    name_singular: "usecases",
    display_singular: "Use Cases",
    description: "Description of how users will perform tasks",
    summary: "Specific situations in which a product or service can be used",
    nickname: "product-catalog-solutions-usecases",
  },
  {
    id: 130100,
    parent: 13010,
    status: "0. New",
    name_singular: "sequences",
    display_singular: "Sequences",
    description: "Workflows in the product.",
    summary: "Use Case Flows / User paths that are bundles of user stories",
    nickname: "product-catalog-solutions-usecases-sequences",
  },
  {
    id: 130101,
    parent: 13010,
    status: "0. New",
    name_singular: "userstories",
    display_singular: "User Stories",
    description:
      "General explanations of feature written from the perspective of the end user",
    summary:
      "List what the user/system intends to do, at a high level (manual or automatic steps)",
    nickname: "product-catalog-solutions-usecases-userstories",
  },
  {
    id: 130102,
    parent: 13010,
    status: "0. New",
    name_singular: "user_roles",
    display_singular: "User Roles",
    description:
      "Compile all of the roles involved in user stories / that have requested features / that have requirements",
    summary: "Affected Stakeholder Groups",
    nickname: "product-catalog-solutions-usecases-user_roles",
  },
  {
    id: 13011,
    parent: 1301,
    status: "0. New",
    name_singular: "requirements",
    display_singular: "Requirements",
    description: "What needs do stakeholders have for the product?",
    summary: "Needs that are required to fulfil use cases appropriately",
    nickname: "product-catalog-solutions-requirements",
    notes: `Requirements can be determined in a Project>Control>Requirements`,
  },
  {
    id: 13012,
    parent: 1301,
    status: "0. New",
    name_singular: "features",
    display_singular: "Features",
    summary:
      "The features (compilations of constituents) that the product needs/has",
    description: "Plan and track features for implementation",
    notes: "Features can be determined in a Project>Planning>Functionality",
    nickname: "product-catalog-solutions-features",
  },
  {
    id: 13013,
    parent: 1301,
    status: "0. New",
    name_singular: "constituents",
    display_singular: "Constituents",
    description: "Define which components make up the product, and how",
    summary: "Which parts fit together to make a feature?",
    nickname: "product-catalog-solutions-constituents",
    notes: `This maps the Product>Catalog>Components to the end product`,
  },
  {
    id: 13014,
    parent: 1301,
    status: "0. New",
    name_singular: "versions",
    display_singular: "Versions",
    description: "Versioning/roadmap/version control of the offering",
    summary:
      "What development and new versions/subfeatures are planned for this offering",
    nickname: "product-catalog-solutions-versions",
    notes: `This links Projects with Product>Catalog>Solutions>Features`,
  },
  {
    id: 1302,
    parent: 130,
    status: "0. New",
    name_singular: "parts",
    display_singular: "Parts",
    description: "Atomic components",
    summary: "Parts that comprise a product's solution",
    nickname: "product-catalog-parts",
  },
  {
    id: 13020,
    parent: 1302,
    status: "0. New",
    name_singular: "pieces",
    display_singular: "Pieces",
    description: "The consituent parts/components",
    summary: null,
    nickname: "product-catalog-parts-pieces",
  },
  {
    id: 13021,
    parent: 1302,
    status: "0. New",
    name_singular: "materials",
    display_singular: "Materials",
    description:
      "What 'materials' is required of the component (physical or intangible)",
    summary: "Materials can be determined in a Project>Plan>Resourcing",
    nickname: "product-catalog-parts-materials",
  },
  {
    id: 13022,
    parent: 1302,
    status: "0. New",
    name_singular: "qualities",
    display_singular: "Qualities",
    description:
      "What 'qualities' / 'attributes' are required of the component",
    summary: "Qualities can be determined in a Project>Plan>Designs",
    nickname: "product-catalog-parts-qualities",
  },
  {
    id: 13023,
    parent: 1302,
    status: "0. New",
    name_singular: "couplings",
    display_singular: "Couplings",
    description:
      "Link components and dependencies to other parts of the catalog & the business at large",
    summary:
      "Joins/interfaces that a component has, that allows it to interface or join another component",
    nickname: "product-catalog-parts-couplings",
  },
  {
    id: 1303,
    parent: 130,
    status: "0. New",
    name_singular: "entries",
    display_singular: "Entries",
    description: "Enter and manage products that you stock or use",
    summary: "Instances of products added into the catalog and fields filled",
    nickname: "product-catalog-entries",
  },
  {
    id: 1304,
    parent: 130,
    status: "0. New",
    name_singular: "retirals",
    display_singular: "Retirals",
    description:
      "Product end of life, obsolescence, unavailability, upgrade paths and deactivation.",
    summary:
      "Manage product decommissions, and track the need for catalog products to be cycled/changed",
    nickname: "product-catalog-retirals",
    notes: `This may trigger the procuct>decommissioning procedure (e.g. retrievals of deployed customer equipment)`,
  },
  {
    id: 131,
    parent: 13,
    status: "0. New",
    name_singular: "procurement",
    display_singular: "Procurement",
    description: "Purchase requests & Purchase orders",
    summary: "Procure products from suppliers",
    nickname: "product-procurement",
  },
  {
    id: 1310,
    parent: 131,
    status: "0. New",
    name_singular: "requests",
    display_singular: "Requests",
    summary: "Purchasing request management and approvals",
    description:
      "Process and sanitise the purchase requests queue. Purchase preapprovals based on conditions you set. Request other approvals from you.",
    notes: `[
      "Verify purchase requests as necessary and with required attributes",
      "Reject requests / request further information where required",
      "Approve purchase requests for procurement",
    ]`,
    nickname: "product-procurement-requests",
  },
  {
    id: 13100,
    parent: 1310,
    status: "0. New",
    name_singular: "recognition",
    display_singular: "Recognition",
    description: "Product Needs Recognition",
    summary: "Automatically list any products that may be needed",
    nickname: "procurement-requests-recognition",
  },
  {
    id: 13101,
    parent: 1310,
    status: "0. New",
    name_singular: "requisition",
    display_singular: "Requisition",
    description: "Purchase Requisitions confirmations",
    summary:
      "Confirm the need to purchase the items being requested by your team",
    nickname: "procurement-requests-requisition",
  },
  {
    id: 13102,
    parent: 1310,
    status: "0. New",
    name_singular: "review",
    display_singular: "Review",
    summary: "Reviews and approvals of product requests",
    description: "Inspect request and approve or deny as necessary",
    notes:
      "Inspection can be undertaken by multiple interested parties, e.g. the Finance team for budgetary reasons, the Procurement team for supply & logistics, etc.",
    nickname: "procurement-requests-review",
  },
  {
    id: 13103,
    parent: 1310,
    status: "0. New",
    name_singular: "tenders",
    display_singular: "Tenders",
    summary: "Announce the need for products to (potential) suppliers",
    description:
      "Requests for quotes from suppliers, or selection from the suppliers that you already have terms with.",
    nickname: "procurement-requests-tenders",
  },
  {
    id: 1311,
    parent: 131,
    status: "0. New",
    name_singular: "purchase",
    display_singular: "Purchase",
    summary: "Price/Product matching between vendors, placing orders",
    description:
      "Manage purchase orders and backorders, maintain your procurement/backorder report with ETAs and track info.",
    notes: `[
      "Batch Purchase Requests & create Purchase Orders",
      "Compare pricing between suppliers",
      "Check stock availability",
      "Place orders with suppliers",
      "Populate and maintain order & tracking information on the Purchase Orders",
    ]`,
    nickname: "product-procurement-purchase",
  },
  {
    id: 13110,
    parent: 1311,
    status: "0. New",
    name_singular: "orders",
    display_singular: "Orders",
    summary: "Purchase order creation and submission to suppliers",
    description:
      "Creation of the Product Purchase Order (PO). This is converted from the approved Product Requests Requisition (with the vendor that had their Request for Quote - RFQ - chosen.",
    notes:
      "A) (Preferred): integration between your and your vendor's system. B) submit on vendor platform. C) email the request to the vendor. D) Verbally place order with vendor",
    nickname: "procurement-purchase-orders",
  },
  {
    id: 13111,
    parent: 1311,
    status: "0. New",
    name_singular: "placement",
    display_singular: "Placement",
    summary: "Submission of the order to the supplier",
    description:
      "Submit the PO to the vendor, bid on an auction, etc., i.e. officially request/submit the purchase to go ahead.",
    notes:
      "A) (Preferred): integration between your and your vendor's system. B) submit on vendor platform. C) email the request to the vendor. D) Verbally place order with vendor",
    nickname: "procurement-purchase-placement",
  },
  {
    id: 13112,
    parent: 1311,
    status: "0. New",
    name_singular: "confirmation",
    display_singular: "Confirmation",
    summary: "Receiving confirmation of orders from the supplier",
    description:
      "Receive Vendor acceptance / rejection / suggested changes to the purchase order",
    notes:
      "A) (Preferred): integration between your and your vendor's system. B) submit on vendor platform. C) email the request to the vendor. D) Verbally place order with vendor",
    nickname: "procurement-purchase-confirmation",
  },
  {
    id: 13113,
    parent: 1311,
    status: "0. New",
    name_singular: "backorders",
    display_singular: "Backorders",
    summary: "The items that have not been dispatched",
    description: "Manage items that the vendor has not yet shipped",
    nickname: "procurement-purchase-backorders",
  },
  {
    id: 13114,
    parent: 1311,
    status: "0. New",
    name_singular: "dispatch",
    display_singular: "Dispatch",
    summary:
      "Out-for-Delivery Notices / Freight Confirmations from the supplier",
    description:
      "Get confirmation from the supplier that items have been dispatched",
    nickname: "procurement-purchase-dispatch",
  },
  {
    id: 1312,
    parent: 131,
    status: "0. New",
    name_singular: "delivery",
    display_singular: "Delivery",
    summary: "The items that have been dispatched but have not yet arrived",
    description:
      "Track the items that have been dispatched and are in transit, i.e. on board for delivery. Tracked on a digital map, with audit logs and status updates.",
    nickname: "procurement-delivery",
  },
  {
    id: 13120,
    parent: 1312,
    status: "0. New",
    name_singular: "transit",
    display_singular: "Transit",
    summary: "Track items that are on their way to you",
    description:
      "Track the items that have been dispatched and are in transit, i.e. on board for delivery. Tracked on a digital map, with audit logs and status updates.",
    nickname: "procurement-delivery-transit",
  },
  {
    id: 13120,
    parent: 1312,
    status: "0. New",
    name_singular: "customs",
    display_singular: "Customs",
    summary: "Clearing items through borders & paying customs taxes",
    description: null,
    nickname: "procurement-delivery-customs",
  },
  {
    id: 13120,
    parent: 1312,
    status: "0. New",
    name_singular: "arrival_notice",
    display_singular: "Arrival Notice",
    summary: "ETA / Schedule for delivery / Estimated Delivery Date (EDD)",
    description: "Obtain an ETA for when a product will arrive",
    nickname: "procurement-delivery-arrival_notice",
  },
  {
    id: 1313,
    parent: 131,
    status: "0. New",
    name_singular: "receiving",
    display_singular: "Receiving",
    summary: "Accepting delivery of shipped items",
    description:
      "Verify and accept delivery of stock, and trigger supplier bills for payment and onbilling to customers",
    notes: `[
      "Obtain delivery dockets from you and confirm receipt",
      "Validate and accept stock into inventory with serial numnbers and other attributes",
      "Trigger supplier bill matching & approvals as ready to be paid",
    ]`,
    nickname: "product-procurement-receiving",
  },
  {
    id: 13130,
    parent: 1313,
    status: "0. New",
    name_singular: "collect",
    display_singular: "Collect",
    summary: "The items reach your business",
    description:
      "Meet the package. If a physical delivery, then the courier (mailworker, transit company etc.) may or may not need to be in attendance of the package at the same time as the receiver.",
    nickname: "procurement-receiving-collect",
  },
  {
    id: 13131,
    parent: 1313,
    status: "0. New",
    name_singular: "inspect",
    display_singular: "Inspect",
    summary:
      "Confirmation that the items are as requested and as per needs / required quality",
    description:
      "The delivery must match the delivery docket (packing slip). and the items on the order. They must also match the standards / quality expected. If the delivery doesn't pass the inspection, they can be refused (do not accept) or accepted but with return to supplier queued.",
    nickname: "procurement-receiving-inspect",
  },
  {
    id: 13132,
    parent: 1313,
    status: "0. New",
    name_singular: "accept",
    display_singular: "Accept",
    summary: "Signing off on deliveries if acceptable",
    description:
      "If the items are acceptable, sign for and take posession of the delivery",
    nickname: "procurement-receiving-accept",
  },
  {
    id: 13133,
    parent: 1313,
    status: "0. New",
    name_singular: "stow",
    display_singular: "Stow",
    description:
      "Log/Chronicle/File the delivery details and add the stock to the warehouse",
    summary: "Adding items to the warehouse inventory",
    nickname: "procurement-receiving-stow",
  },
  {
    id: 13134,
    parent: 1313,
    status: "0. New",
    name_singular: "stocking",
    display_singular: "Stocking",
    description:
      "(Automatically or manually) Make the products available for use",
    summary: "Stock physically or metaphorically 'placed on shop shelves'",
    nickname: "procurement-receiving-stocking",
  },
  {
    id: 1314,
    parent: 131,
    status: "0. New",
    name_singular: "finalizing",
    display_singular: "Finalizing",
    description:
      "Close off purchase orders, advise all stakeholders and trigger projects & payments",
    summary: "Purchase order completion and greenlighting next steps",
    nickname: "procurement-finalizing",
  },
  {
    id: 132,
    parent: 13,
    status: "0. New",
    name_singular: "warehousing",
    display_singular: "Warehousing",
    summary: "Inventory Management",
    description: "Manage of Warehouses, warehouse areas and stock",
    nickname: "product-warehousing",
  },
  {
    id: 1320,
    parent: 132,
    status: "0. New",
    name_singular: "warehouses",
    display_singular: "Warehouses",
    description: "Manage stock locations",
    summary: "Warehouses, warehouse bins, shelves and virtual buckets",
    nickname: "product-warehousing-warehouses",
  },
  {
    id: 1321,
    parent: 132,
    status: "0. New",
    name_singular: "inventory",
    display_singular: "Inventory",
    summary: "Management of held stock",
    description: "Manage, move and audit your currently held items",
    nickname: "product-warehousing-inventory",
  },
  {
    id: 1322,
    parent: 132,
    status: "0. New",
    name_singular: "transfers",
    display_singular: "Transfers",
    summary: "Movement of stock between warehouse areas",
    description: "Transfer items in, out and between warehouse areas",
    nickname: "product-warehousing-transfers",
  },
  {
    id: 1323,
    parent: 132,
    status: "0. New",
    name_singular: "stocktake",
    display_singular: "Stocktake",
    summary: "Auditing of held stock",
    description: "Inventory count and reconciliation management",
    nickname: "product-warehousing-stocktake",
  },
  {
    id: 13230,
    parent: 1323,
    status: "0. New",
    name_singular: "counts",
    display_singular: "Counts",
    summary: "Reconciliation of inventory item quantities",
    description:
      "Undertake a reconciliation of held stock (compare database against actuals)",
    nickname: "warehousing-stocktake-counts",
  },
  {
    id: 13231,
    parent: 1323,
    status: "0. New",
    name_singular: "inspections",
    display_singular: "Inspections",
    summary: "Inspection of stored items",
    description:
      "Ensure items are properly stored, not degrading, and are secure.",
    nickname: "warehousing-stocktake-inspections",
  },
  {
    id: 1324,
    parent: 132,
    status: "0. New",
    name_singular: "adjustments",
    display_singular: "Adjustments",
    description:
      "Adjust stock quantities up or down to reflect reality, e.g. when dealing with damaged or lost products",
    summary: "Changes to product item counts",
    nickname: "product-warehousing-adjustments",
  },
  {
    id: 133,
    parent: 13,
    status: "5. Hold",
    name_singular: "deployment",
    display_singular: "Deployment",
    summary: "Deploying items from stock into production",
    description:
      "Handover of the the product, and usage/consumption by the user",
    nickname: "product-deployment",
  },
  {
    id: 1330,
    parent: 133,
    status: "0. New",
    name_singular: "picking",
    display_singular: "Picking",
    summary: "Claiming items from inventory for specific purposes",
    description: "Take items from inventory (picking or adjusting stock)",
    nickname: "product-deployment-picking",
  },
  {
    id: 13301,
    parent: 1330,
    status: "0. New",
    name_singular: "withdraw",
    display_singular: "Withdraw",
    summary: "Actual removal of the product from the warehouse",
    description:
      "physically pick the item (if physical) from the warehouse and mark it as picked/taken from the digital warehouse.",
    nickname: "deployment-picking-withdraw",
  },
  {
    id: 1331,
    parent: 133,
    status: "0. New",
    name_singular: "assembly",
    display_singular: "Assembly",
    summary: "Construction and configuration of the picked items",
    description:
      "assembling and configuring components / preparation of the product before being provided to the consumer",
    nickname: "product-deployment-assembly",
  },
  {
    id: 1332,
    parent: 133,
    status: "0. New",
    name_singular: "shipping",
    display_singular: "Shipping",
    summary: "Movement of items from the business to the end user location",
    description:
      "transfering the item (physically, virtually and in terms of ownership) to the consumer",
    nickname: "product-deployment-shipping",
  },
  {
    id: 1333,
    parent: 133,
    status: "0. New",
    name_singular: "installation",
    display_singular: "Installation",
    summary: "Go-live of the product",
    description:
      "Recording/activating the configuration, transfer of product ownership and responsibility",
    nickname: "product-deployment-installation",
  },
  {
    id: 1334,
    parent: 133,
    status: "0. New",
    name_singular: "usage",
    display_singular: "Usage",
    description: "Deployed, in-use products ('configurations')",
    summary:
      "Management and monitoring of the product while it's in an active deployed state being used by the customer",
    nickname: "product-deployment-usage",
  },
  {
    id: 13340,
    parent: 1334,
    status: "0. New",
    name_singular: "function",
    display_singular: "Function",
    summary: "Usage of the product in production",
    description:
      "Intended usage of the product by the end user/ consumer, and any necessary support for it",
    nickname: "deployment-usage-function",
  },
  {
    id: 13341,
    parent: 1334,
    status: "0. New",
    name_singular: "monitoring",
    display_singular: "Monitoring",
    description: "monitoring deployed products",
    summary:
      "Automatic and manual monitoring, alerting to threshold triggers, and provide feedback and information to internal & external stakeholders.",
    nickname: "deployment-usage-monitoring",
  },
  {
    id: 13341,
    parent: 13341,
    status: "0. New",
    name_singular: "thresholds",
    display_singular: "Thresholds",
    description: "Maintaining appropriate triggers for alerts",
    summary:
      "Set thresholds to alert you of multi-user outages, single user issues, changes to environments, external news, or anything that is related to the operation of the deployed product.",
    nickname: "deployment-usage-monitoring-thresholds",
  },
  {
    id: 133410,
    parent: 13341,
    status: "0. New",
    name_singular: "alerts",
    display_singular: "Alerts",
    description: "Receive and disseminate alerts",
    summary:
      "get alerts, and pass them onto stakeholders as appropriate. For example, wide scale outages. Log as a fault automatically or manually where needed.",
    nickname: "deployment-usage-monitoring-alerts",
  },
  {
    id: 13342,
    parent: 1334,
    status: "0. New",
    name_singular: "maintenance",
    display_singular: "Maintenance",
    summary: "Planned changes to items in production",
    description:
      "Performing maintenance (at schedule times, upon request of the user, or when there is a product alert",
    nickname: "deployment-usage-maintenance",
  },
  {
    id: 13343,
    parent: 1334,
    status: "0. New",
    name_singular: "faults",
    display_singular: "Faults",
    summary: "Unplanned issues with items in production",
    description:
      "Acknowledge, assist with and resolve any unintended issues with the product",
    nickname: "deployment-usage-faults",
  },
  {
    id: 134,
    parent: 13,
    status: "5. Hold",
    name_singular: "decommission",
    display_singular: "Decommission",
    summary: "Removing items from production",
    description:
      "Manage RMAs, Replacements, Recalls, EOLs, Retreivals and Disposals",
    nickname: "product-decommission",
  },
  {
    id: 1340,
    parent: 134,
    status: "0. New",
    name_singular: "returns",
    display_singular: "Returns",
    description:
      "Manage customer returns and link to RMAs if involving the supplier & warranties",
    summary: "Products returned by the customer to or via your company",
    nickname: "product-decommission-returns",
  },
  {
    id: 1341,
    parent: 134,
    status: "0. New",
    name_singular: "deactivations",
    display_singular: "Deactivations",
    description: "Announcing product end of life, turning off functionality",
    summary: "Switch-off of items in production",
    nickname: "product-decommission-deactivations",
  },
  {
    id: 1342,
    parent: 134,
    status: "0. New",
    name_singular: "replacements",
    display_singular: "Replacements",
    description: "Upgrade Paths & Product Replacements",
    summary: "Organising and deploying an upgrade path for the old product",
    nickname: "product-decommission-replacements",
  },
  {
    id: 1343,
    parent: 134,
    status: "0. New",
    name_singular: "retrievals",
    display_singular: "Retrievals",
    description:
      "Reappropriate items from production back to full ownership by the business",
    summary: "Getting products back from the customer where necessary",
    nickname: "product-decommission-retrievals",
  },
  {
    id: 1344,
    parent: 134,
    status: "0. New",
    name_singular: "disposals",
    display_singular: "Disposals",
    description: null,
    summary:
      "Purging/archiving old products, and organising physical disposal/destruction where necessary",
    notes: {
      included: [
        "Organisation of physical disposals (e.g. e-waste collection, skips, standard garabage collection calendar)",
        "Sensitive information destruction",
        "Archiving / deleting old information",
        "Scheduling deletion of information according to retention regulations",
      ],
    },
    nickname: "product-decommission-disposals",
  },
  {
    id: 14,
    parent: 1,
    status: "0. New",
    name_singular: "customer",
    display_singular: "Customer",
    summary: "CRM, Onboarding, Sales & Portal",
    description: "Management of your clients / consumers / users",
    nickname: "customer",
    icon_name: "customerservice",
    icon_source: "AntDesign",
  },
  {
    id: 140,
    parent: 14,
    status: "0. New",
    name_singular: "lifecycle",
    display_singular: "Lifecycle",
    description:
      "Manage customer relationships through onboarding to offboarding",
    summary:
      "Prospective, Onboarding, Active, Watchlist and Offboarding client relationships",
    nickname: "customer-lifecycle",
  },
  {
    id: 1400,
    parent: 140,
    status: "0. New",
    name_singular: "prospects",
    display_singular: "Prospects",
    description: "Manage potential customers, clients and users/consumers",
    summary: "Potential Customers",
    notes: `[
      "Capture all prospects and leads through all channels, forms etc.",
      "Enter prospects into the CRM as soon as they become known",
      "",
    ]`,
    nickname: "customer-lifecycle-prospects",
  },
  {
    id: 1401,
    parent: 140,
    status: "0. New",
    name_singular: "onboarding",
    display_singular: "Onboarding",
    summary: "Customers officially joining the business",
    description:
      "Manage onboarding checklists and fully integrate with your new customer",
    notes: `[
      "Maintain the customer onboarding process",
      "Move Prospective customers into Onboarding status as soon as proposals are successfully signed off",
      "Capture all necessary customer information",
      "Liaise with customers for any needed onboarding assistance",
      "https://www.zendesk.com/au/blog/customer-onboarding/#:~:text=is%20customer%20onboarding%3F-,Customer%20onboarding%20is%20the%20process%20of%20teaching%20new%20customers%20the,looks%20different%20for%20each%20customer.",
      "https://blog.hubspot.com/service/customer-onboarding",
      "https://www.helpscout.com/blog/customer-onboarding/",
      "https://www.google.com/search?q=customer+onboarding+process&rlz=1C1CHBF_en-GBAU966AU967&oq=customer+onboarding+process&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDMzNDhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
      
      "https://www.reddit.com/r/msp/comments/17awhjw/client_onboarding_do_you_deal_with_outgoing_msp/"

      In a new email (not forwarding an existing email chain) to the client decision makers (not direct to the Outgoing Provider):

      Hi [NewClientName_DecisionMakersEmails],
      
      As discussed, attached is the handover request for the outgoing provider [OutgoingProviderName].
      
      Please review, and if approved forward to: [OutgoingProviderName_ContactEmails].
      
      As agreed, your approval will:
      1) Grant us permission to [X,Y,Z],
      and
      2) Request that the information be provided by [DATE] in order for us to begin [PROJECTS A,B,C] on [DATE].
      This provides [DURATION] for [OutgoingProviderName] to provide the handover pack, as we appreciate that it could take some time to collate the requested information.
      
      [Handover pack request goes here, + stakeholder list, + any other relevant information that all CCed parties are privy to].
      
      [Signoff]
      
      This way:
      
      - You are doing everything you can for the client and avoiding miscommunication, but still getting signoff from them.
      
      - The official request is still coming from the client. (If the outgoing provider is security conscious, they will then call the client to verify the email as genuine and not spoofed).
      
      - It gives clear but polite deadlines to the outgoing provider, and makes it a little harder for 'dragging feet' (and provides something to hook into later: 'We specifically asked for the information by this date, and gave an extra grace period. We now urgently need this pack before our project is further impacted').
      
      - It also does right by the outgoing provider, by giving them an appropriate timeframe (+ buffer) to provide the pack.
      
      - It ensures transparency and that all decision makers and key stakeholders have agreed on the plan, necessary information, and the permissions granted.


      PROCESS (But see the Operations module for the fundamental structure).
      "Signup and welcome",
      "Induction (providing info TO the customer)",
      "Requirements analysis and compilation of necessary resources. This uses any pre-collected information obtained during the sales process"
      "Handover (from previous provider and client themselves) and info collation/entering into the system (getting info from the customer). ".
      "Integrations, invitations, and data imports (part of this is verifying the handover / requirements from the previous step)"
      "

      https://www.connectwise.com/en-au/blog/managed-services/msp-onboarding-checklist
      https://www.ninjaone.com/blog/it-client-onboarding-checklist-for-msps/
      https://www.manageengine.com/products/service-desk-msp/msp-onboarding-checklist.html
      https://www.zomentum.com/blog/client-onboarding-checklist-for-an-msp
      https://www.google.com/search?q=msp+onboarding+checklist&rlz=1C1CHBF_en-GBAU966AU967&oq=msp+onboarding+checklist&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM2NTJqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8

      MSP Customer Onboarding:

      Closure of Sales Project:
      (The 'handover' submodule of the Operations module will then handover to the Onboarding project)
      Onboarding Project setup:
      (automatically) create a project in Operations module.
      Customer Information Gathering:
      Collect essential customer information, including business details, contacts, and existing IT infrastructure.
      Needs Assessment:
      Identify the customer's specific IT needs and requirements.
      Conduct an initial assessment of their current IT environment.
      Service Selection:
      Present a catalog of managed services offered by the MSP.
      Help the customer choose services tailored to their needs.
      Customized Onboarding Plan:
      Create a customized onboarding plan based on the selected services and customer requirements.
      Define milestones and timelines for the onboarding process.
      Data Migration & Integration:
      Assist with data migration if necessary, ensuring a seamless transition to the MSP's systems.
      Integrate the MSP's tools and services with the customer's existing infrastructure.
      User Training:
      Provide training sessions or resources to educate the customer's staff on using the MSP's services effectively.
      Security Assessment:
      Conduct a security assessment to identify vulnerabilities and establish security protocols.
      Implement necessary security measures to protect the customer's data.
      Documentation & SLAs:
      Provide detailed documentation on service agreements, SLAs, and support processes.
      Ensure that the customer is aware of service level commitments.
      Monitoring & Reporting:
      Set up monitoring tools to continuously track the performance and health of the customer's IT systems.
      Generate regular reports for the customer to review.
      Support & Escalation:
      Establish a support mechanism with defined escalation procedures.
      Offer a helpdesk or support portal for issue reporting and resolution.
      Billing & Invoicing:
      Set up billing processes and invoicing for the services rendered.
      Ensure transparency in billing practices.
      Feedback & Review:
      Gather feedback from the customer on the onboarding experience and service quality.
      Conduct regular reviews to assess the effectiveness of the services.
      Compliance & Documentation:
      Ensure that all regulatory and compliance requirements are met, especially in industries with specific regulations (e.g., healthcare, finance).
      Maintain thorough documentation for audit purposes.
      Scalability Planning:
      Discuss future growth plans with the customer and prepare for scalability.
      Ensure that the MSP's services can accommodate the customer's evolving needs.
      Communication & Relationship Management:
      Maintain open and transparent communication with the customer.
      Assign an account manager or customer success manager to foster a strong relationship.
      Disaster Recovery & Business Continuity:
      Develop a disaster recovery and business continuity plan to minimize downtime in case of disruptions.
      Service Level Agreements (SLAs):
      Clearly define SLAs that specify the expected response times, resolution times, and service availability.
      Ensure SLAs align with the customer's business objectives.
      Data Backup & Recovery:
      Implement robust data backup solutions to protect the customer's data.
      Create data recovery procedures in case of data loss or disasters.
      Asset Inventory:
      Maintain an accurate inventory of the customer's IT assets, including hardware and software.
      Use asset management tools to track and manage assets efficiently.
      Network Assessment:
      Conduct a comprehensive assessment of the customer's network infrastructure to identify potential vulnerabilities and performance bottlenecks.
      Make necessary improvements or recommendations.
      Change Management:
      Establish a change management process to ensure that any modifications to the IT environment are well-planned, documented, and communicated to the customer.
      Security Awareness Training:
      Offer security awareness training to the customer's employees to reduce the risk of security breaches.
      Educate users about best practices for maintaining a secure IT environment.
      Disaster Recovery Testing:
      Regularly test the disaster recovery and business continuity plan to verify its effectiveness.
      Conduct mock drills to prepare for potential disruptions.
      Vendor Management:
      If the MSP relies on third-party vendors or suppliers for services or components, manage vendor relationships effectively to ensure service continuity.
      Documentation Repository:
      Maintain a centralized repository for all documentation, including configurations, policies, and procedures.
      Ensure easy access for both the MSP and the customer.
      Continuous Improvement:
      Continuously assess and improve the quality of services provided.
      Proactively identify areas for optimization and innovation.
      Compliance Audits:
      Regularly conduct compliance audits to ensure adherence to industry-specific regulations and standards.
      Address any compliance issues promptly.
      Client Education Hub:
      Create a client education hub or portal where customers can access resources, articles, and training materials related to their managed services.
      Regular Health Checks:
      Periodically perform health checks on the customer's IT systems to identify potential issues and address them proactively.
      Cost Optimization:
      Assist the customer in optimizing their IT costs, ensuring that they get the best value from their investments in managed services.
     
      Performance Monitoring & Reporting:
      Implement continuous performance monitoring of the customer's IT systems and services.
      Provide regular performance reports that highlight areas of improvement and optimization.
    ]`,
    nickname: "customer-lifecycle-onboarding",
  },
  {
    id: 1402,
    parent: 140,
    status: "0. New",
    name_singular: "retention",
    display_singular: "Retention",
    description: "Maintain healthy business relationships with customers",
    summary: "Management of your active customers",
    notes: `[
      "Move Onboarding customers into Retention/active status as soon as the onboarding process is complete",
      "Maintain the customer management procedures",
    ]`,
    nickname: "customer-lifecycle-retention",
  },
  {
    id: 1403,
    parent: 140,
    status: "0. New",
    name_singular: "watchlist",
    display_singular: "Watchlist",
    description:
      "Manage customer threats and mitigate any issues or risk of offboarding",
    summary: "Tracking customers that are not receiving the service they want",
    notes: `[
      "Set up and maintain the Watchlist triggers and procedures",
      "Move customers onto the Watchlist (from active status) if any red flags are triggered",
      "Assist to resolve watchlist issues, with the aim of improving the health of the customer relationship",
      "Move customers to 'Active' if the relationship is deemed repaired and the customer deemed not to be a risk",
    ]`,
    nickname: "customer-lifecycle-watchlist",
  },
  {
    id: 1404,
    parent: 140,
    status: "0. New",
    name_singular: "offboarding",
    display_singular: "Offboarding",
    summary: "Customers that leaving / not extending the business relationship",
    description: "Help handover of customer relationships that are ending",
    notes: `[
      "Set up and maintain the Watchlist triggers and procedures",
      "Move the customer to Offboarding status when it becomes known that the relationship will be terminated",
      "Undertake offboarding steps",
      "Finalise contracts/agreements/billing",
      "Assist with handover of information to the customer and third parties",
      "Archive the customer when fully offboarded",
    ]`,
    nickname: "customer-lifecycle-offboarding",
  },
  {
    id: 141,
    parent: 14,
    status: "0. New",
    name_singular: "sales",
    display_singular: "Sales",
    summary: "Leads, Quoting, Proposals and Commitment",
    description:
      "Create opportunities from Leads, and use proposals to make deals with your customers",
    nickname: "customer-sales",
  },
  {
    id: 1410,
    parent: 141,
    status: "0. New",
    name_singular: "leads",
    display_singular: "Leads",
    summary: "Track prospective sales",
    description:
      "Process potential customer deals and derive quotes/proposals from them",
    nickname: "customer-sales-leads",
  },
  {
    id: 1411,
    parent: 141,
    status: "0. New",
    name_singular: "quotes",
    display_singular: "Quotes",
    summary: "Manage offers to the customer",
    description: "Issue price & scope quotes to customers",
    nickname: "customer-sales-quotes",
  },
  {
    id: 1412,
    parent: 141,
    status: "0. New",
    name_singular: "proposals",
    display_singular: "Proposals",
    description: "Manage solution proposals with the customer",
    summary: null,
    nickname: "customer-sales-proposals",
  },
  {
    id: 1413,
    parent: 141,
    status: "0. New",
    name_singular: "commitment",
    display_singular: "Commitment",
    description: "Customer go-ahead on quotes",
    summary: "Getting confirmation and signoff on deals",
    nickname: "customer-sales-commitment",
  },
  {
    id: 142,
    parent: 14,
    status: "0. New",
    name_singular: "relationships",
    display_singular: "Relationships",
    summary: "Delivery, Support, Service, Disputes and Help",
    description:
      "Manage customer relationships, agreements/contracts and services rendered",
    nickname: "customer-relationships",
  },
  {
    id: 1420,
    parent: 142,
    status: "0. New",
    name_singular: "agreements",
    display_singular: "Agreements",
    summary: "Customer contracts",
    description:
      "Manage agreements, agreement items and other commitments to the customer",
    nickname: "customer-relationships",
  },
  {
    id: 1421,
    parent: 142,
    status: "0. New",
    name_singular: "support",
    display_singular: "Support",
    summary: "Customer support assistance",
    description: "Provide services and support to your customers",
    nickname: "customer-relationships-support",
  },
  {
    id: 1422,
    parent: 142,
    status: "0. New",
    name_singular: "information",
    display_singular: "Information",
    summary: "Manage customer information",
    description: "Keep client data comprehensive and maintained",
    notes: `included: [
      "site management (address and location changes)",
      "contact management (people, roles and contact methods)",
      "preferences management (notes, instructions and special information)",
      "agreements (service level agreements, KPIs and rules)",
    ]`,
    nickname: "customer-relationships-information",
  },
  {
    id: 1423,
    parent: 142,
    status: "0. New",
    name_singular: "disputes",
    display_singular: "Disputes",
    summary:
      "Pre-empting, Avoiding, Acknowledging and Mitigating disagreements with the customer",
    description:
      "managing customer queries and issues. This may trigger the customer being moved to the 'watchlist' queue.",
    nickname: "customer-relationships-disputes",
  },
  {
    id: 143,
    parent: 14,
    status: "5. Hold",
    name_singular: "success",
    display_singular: "Success",
    description:
      "Making sure that your services are adding appropriate value and enabling the customer",
    summary: "Customer Experience, Pulse and Development",
    nickname: "customer-success",
  },
  {
    id: 1430,
    parent: 143,
    status: "5. Hold",
    name_singular: "reviews",
    display_singular: "Reviews",
    description:
      "Undertake reviews of the customer and your relationshp with them",
    summary: "QBRs (Quarterly business reviews), and other assessments",
    nickname: "customer-success",
  },
  {
    id: 1431,
    parent: 143,
    status: "5. Hold",
    name_singular: "satisfaction",
    display_singular: "Satisfaction",
    description:null,
    summary: "CSAT, NPS, PMF, CES and other surveys",
    nickname: "customer-success-satisfaction",
  },
  {
    id: 144,
    parent: 14,
    status: "5. Hold",
    name_singular: "programs",
    display_singular: "Programs",
    summary:
      "Loyalty, Rewards and Incentives for sales, referrals and other customer interactions",
    description: "Manage customer programs, incentives and initiatives",
    nickname: "customer-programs",
  },
  {
    id: 15,
    parent: 1,
    status: "0. New",
    name_singular: "supplier",
    display_singular: "Supplier",
    summary: "Vendors & Supply Chain",
    description: "Management of partners / suppliers / vendors / manufacturers",
    nickname: "supplier",
    icon_name: "factory",
    icon_source: "MaterialCommunityIcons",
  },
  {
    id: 150,
    parent: 15,
    status: "0. New",
    name_singular: "chain",
    display_singular: "Chain",
    summary: "Supply chain managment",
    description: "Map the supply chain",
    nickname: "supplier-chain",
  },
  {
    id: 151,
    parent: 15,
    status: "0. New",
    name_singular: "affiliations",
    display_singular: "Affiliations",
    summary: "Supplier Relationships",
    description:
      "Credit applications with vendors, supplier payment methods/verifications and portals/integrations",
    nickname: "supplier-affiliations",
  },
  {
    id: 1510,
    parent: 150,
    status: "5. Hold",
    name_singular: "partnership",
    display_singular: "Partnership",
    summary: "Supplier Relationship contracts",
    description:
      "Apply for vendor accounts and lines of credit, establish partner relationships",
    notes: `
      billing: {
        startup: {
          title: "Startup",
          price_month: 200,
          priceyear: 2000,
          priceaddition: "$5 per additional bill",
          included: [
            "Setup of your purchase requests process",
            "Processing & sanitisation of up to 100 bills",
            "Monthly invoicing report",
          ],
        },
        business: {
          title: "Business",
          price_month: 1000,
          priceyear: 10000,
          priceaddition: "$5 per additional bill",
          included: [
            "Everything from the Startup package, and...",
            "Processing & sanitisation of up to 200 bills",
            "Weekly invoicing report",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 5000,
          priceyear: 50000,
          priceaddition: "$5 per additional bill",
          included: [
            "Everything from the Business package, and...",
            "Processing & sanitisation of up to 200 bills",
            null,
            "Daily invoicing report",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 10000,
          priceyear: 100000,
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
          ],
        },
      }
    `,
    nickname: "supplier-affiliations-partnership",
  },
  {
    id: 152,
    parent: 15,
    status: "0. New",
    name_singular: "purchases",
    display_singular: "Purchases",
    summary: "Management of orders placed with the supplier",
    description:
      "Purchasing products/services/subscriptions/licenses from vendors",
    nickname: "supplier-purchases",
  },
  {
    id: 153,
    parent: 15,
    status: "5. Hold",
    name_singular: "support",
    display_singular: "Support",
    summary: "Obtaining assistance from suppliers",
    description:
      "RMAs, supplier services engagement, vendor help and other assistance",
    nickname: "supplier-support",
  },
  {
    id: 1530,
    parent: 153,
    status: "5. Hold",
    name_singular: "assistance",
    display_singular: "Assistance",
    summary: "Ways in which the supplier assists your business",
    description:
      "Partner programs & engagement initiatives, collaborations and other supplier alliances",
    nickname: "supplier-support-assistance",
  },
  {
    id: 1531,
    parent: 153,
    status: "5. Hold",
    name_singular: "warranty",
    display_singular: "Warranty",
    summary: null,
    description: null,
    nickname: "supplier-support-warranty",
  },
  {
    id: 1532,
    parent: 153,
    status: "5. Hold",
    name_singular: "rmas",
    display_singular: "RMAs",
    summary:
      "Return Merchandise Authorization (Return of products to suppliers)",
    description: "Organise and track product returns",
    nickname: "supplier-support-rmas",
  },
  {
    id: 1533,
    parent: 153,
    status: "5. Hold",
    name_singular: "programs",
    display_singular: "Programs",
    summary: "Partner/Supplier programs",
    description:
      "Partner programs & engagement initiatives, collaborations and other supplier alliances",
    nickname: "supplier-programs",
  },
  {
    id: 154,
    parent: 15,
    status: "5. Hold",
    name_singular: "performance",
    display_singular: "Performance",
    summary: "Partner/Supplier performance",
    description: "Supplier SLAs and analysis",
    nickname: "supplier-performance",
  },
  {
    id: 16,
    parent: 1,
    status: "0. New",
    name_singular: "personnel",
    display_singular: "Personnel",
    summary: "Timesheets, HR & Payroll",
    description: "Employee tools & Human Resources",
    nickname: "personnel",
    icon_name: "people",
    icon_source: "OctIcons",
  },
  {
    id: 160,
    parent: 16,
    status: "0. New",
    name_singular: "employment",
    display_singular: "Employment",
    description: null,
    summary: "Human Resource Planning and recruitment",
    nickname: "personnel-employment",
  },
  {
    id: 1600,
    parent: 160,
    status: "0. New",
    name_singular: "roles",
    display_singular: "Roles",
    description: "Forecast and plan for employment needs",
    summary:
      "Employment Appraisal: Determine all responsibilities and demand, and allocate them to roles",
    nickname: "personnel-employment-roles",
  },
  {
    id: 16000,
    parent: 1600,
    status: "0. New",
    name_singular: "forecasting",
    display_singular: "Forecasting",
    summary: "Personnel requirements forecasting",
    description: "Forecasting labor needs and budgeting for personnel",
    nickname: "employment-roles-forecasting",
  },
  {
    id: 16001,
    parent: 1600,
    status: "0. New",
    name_singular: "talent",
    display_singular: "Talent",
    summary: "Talent Management",
    description:
      "Identifying, developing, and retaining top talent in the organization. It includes processes such as talent acquisition, performance management and leadership development",
    nickname: "employment-roles-talent",
  },
  {
    id: 16002,
    parent: 1600,
    status: "0. New",
    name_singular: "succession",
    display_singular: "Succession",
    summary: "Succession Planning",
    description:
      "Identifying and developing employees who have the potential to fill key leadership positions in the organization when the current leaders retire or move on.",
    nickname: "employment-roles-succession",
  },
  {
    id: 16003,
    parent: 1600,
    status: "0. New",
    name_singular: "linemanagers",
    display_singular: "Line Managers",
    summary: "Line Managers / Reports-To",
    description: "Company hierarchy / chain of command / report-to",
    nickname: "employment-roles-structure-linemanager",
  },
  {
    id: 1601,
    parent: 160,
    status: "0. New",
    name_singular: "recruitment",
    display_singular: "Recruitment",
    description: null,
    summary: "Advertise, shortlist and hire for roles",
    nickname: "personnel-employment-recruitment",
  },
  {
    id: 16010,
    parent: 1601,
    status: "0. New",
    name_singular: "joblisting",
    display_singular: "Joblisting",
    description: null,
    summary: "Advertising for the position",
    nickname: "personnel-employment-recruitment-joblisting",
  },
  {
    id: 16011,
    parent: 1601,
    status: "0. New",
    name_singular: "shortlisting",
    display_singular: "Shortlisting",
    description: "Review resumes/CVs for appropriate candidates",
    summary: null,
    nickname: "personnel-employment-recruitment-shortlisting",
  },
  {
    id: 16012,
    parent: 1601,
    status: "0. New",
    name_singular: "interviews",
    display_singular: "Interviews",
    description: null,
    summary: "Conducting interview rounds",
    nickname: "personnel-employment-recruitment-interviews",
  },
  {
    id: 16013,
    parent: 1601,
    status: "0. New",
    name_singular: "background_checks",
    display_singular: "Background Checks",
    description: null,
    summary: null,
    nickname: "personnel-employment-recruitment-background_checks",
  },
  {
    id: 16014,
    parent: 1601,
    status: "0. New",
    name_singular: "offers",
    display_singular: "Offers",
    description:
      "Manage letters of offer and acceptance/counter-offers from prospective candidates",
    summary: "Letters of Offer & Negotiation",
    nickname: "personnel-employment-recruitment-make_offer",
  },
  {
    id: 1602,
    parent: 160,
    status: "0. New",
    name_singular: "placements",
    display_singular: "Placements",
    description: null,
    summary: "Appointments to positions: Promotions, transfers etc.",
    nickname: "personnel-employment-placements",
  },
  {
    id: 16020,
    parent: 1602,
    status: "0. New",
    name_singular: "preferments",
    display_singular: "Preferments",
    description: null,
    summary: "Promotions and appointments to positions",
    nickname: "employment-placements-preferments",
  },
  {
    id: 16021,
    parent: 1602,
    status: "0. New",
    name_singular: "transfers",
    display_singular: "Transfers",
    description: null,
    summary: "Location/responsibility transfers, changes to responsibilities",
    nickname: "employment-placements-transfers",
  },
  {
    id: 16022,
    parent: 1602,
    status: "0. New",
    name_singular: "secondments",
    display_singular: "Secondments",
    description: null,
    summary: "Temporary changes to responsibilities",
    nickname: "employment-placements-secondments",
  },
  {
    id: 16023,
    parent: 1602,
    status: "0. New",
    name_singular: "onboard",
    display_singular: "Onboard",
    description: null,
    summary: "Personnel onboarding & induction",
    nickname: "personnel-employment-placements-onboard",
    notes: `
      https://www.blaze.tech/post/unraveling-the-true-cost-of-onboarding-a-new-employee
    `,
  },
  {
    id: 160230,
    parent: 16023,
    status: "0. New",
    name_singular: "orientation",
    display_singular: "Orientation",
    description: null,
    summary: null,
    nickname: "personnel-employment-placements-onboard-orientation",
  },
  {
    id: 160231,
    parent: 16023,
    status: "0. New",
    name_singular: "induction",
    display_singular: "Induction",
    description: null,
    summary: null,
    nickname: "personnel-employment-placements-onboard-induction",
  },
  {
    id: 160232,
    parent: 16023,
    status: "0. New",
    name_singular: "systemsaccess",
    display_singular: "Systems Access",
    description: null,
    summary: null,
    nickname: "personnel-employment-placements-onboard-systemsaccess",
  },
  {
    id: 160233,
    parent: 16023,
    status: "0. New",
    name_singular: "assigntraining",
    display_singular: "Assign Training",
    description: null,
    summary: null,
    nickname: "personnel-employment-placements-onboard-assigntraining",
  },
  {
    id: 160234,
    parent: 16023,
    status: "0. New",
    name_singular: "shadowing",
    display_singular: "Shadowing",
    description: null,
    summary: "Shadow other roles/personnel",
    nickname: "personnel-employment-placements-onboard-shadowing",
  },
  {
    id: 1603,
    parent: 160,
    status: "5. Hold",
    name_singular: "progression",
    display_singular: "Progression",
    description: null,
    summary: "Employee training, development and progression opportunities",
    nickname: "personnel-employment-progression",
  },
  {
    id: 16030,
    parent: 1603,
    status: "5. Hold",
    name_singular: "performance",
    display_singular: "Performance",
    description: "Performance management",
    summary:
      "performance tracking, management and reviews (both ways, not just employer->employee",
    nickname: "personnel-employment-progression-performance",
  },
  {
    id: 160300,
    parent: 16030,
    status: "5. Hold",
    name_singular: "tracking",
    display_singular: "Tracking",
    description: null,
    summary: "Performance tracking",
    nickname: "personnel-employment-progression-performance-tracking",
  },
  {
    id: 160301,
    parent: 16030,
    status: "5. Hold",
    name_singular: "coaching",
    display_singular: "Coaching",
    description:
      "Ethical, helpful performance management and mentorship to assist employees' performance",
    summary: "Performance management and improvement",
    nickname: "personnel-employment-progression-performance-coaching",
  },
  {
    id: 160302,
    parent: 16030,
    status: "5. Hold",
    name_singular: "reviews",
    display_singular: "Reviews",
    description: null,
    summary: "Performance reviews",
    nickname: "personnel-employment-progression-performance-reviews",
  },
  {
    id: 160303,
    parent: 16030,
    status: "5. Hold",
    name_singular: "feedback",
    display_singular: "Feedback",
    description:
      "Two way feedback (the employee should also be able to openly provide feedback to the company",
    summary:
      "To be ethical, there must be an option for the feedback to be anonymous - Else data should be considered inaccurate and compromised.",
    nickname: "personnel-employment-progression-performance-x",
  },
  {
    id: 160304,
    parent: 16030,
    status: "5. Hold",
    name_singular: "y",
    display_singular: "y",
    summary: null,
    description: null,
    nickname: "personnel-employment-progression-performance-y",
  },
  {
    id: 16031,
    parent: 1603,
    status: "5. Hold",
    name_singular: "training",
    display_singular: "Training",
    summary: "Training & Development",
    description:
      "Setting goals, assessing performance, and providing feedback to employees to improve their productivity and contributions to the organization.",
    nickname: "personnel-employment-progression-training",
  },
  {
    id: 16032,
    parent: 1603,
    status: "5. Hold",
    name_singular: "engagement",
    display_singular: "Engagement",
    description: "Employee engagement",
    summary:
      "Strategies and initiatives aimed at promoting a positive workplace culture and improving employee satisfaction, motivation, and commitment.",
    nickname: "personnel-employment-progression-engagement",
  },
  {
    id: 16033,
    parent: 1603,
    status: "5. Hold",
    name_singular: "skills",
    display_singular: "Skills",
    description:  "Foster personnel skills and maintain a directory for resource planning",
    summary: "Skills & Certifications Management",
    nickname: "personnel-employment-progression-skills",
  },
  {
    id: 16034,
    parent: 1603,
    status: "5. Hold",
    name_singular: "pathways",
    display_singular: "Pathways",
    description: "A module to manage Career Pathways",
    summary: "Explore and outline potential career progressions",
    nickname: "personnel-employment-progression-skills",
  },
  {
    id: 1604,
    parent: 160,
    status: "0. New",
    name_singular: "retirements",
    display_singular: "Retirements",
    summary: "Personnel leaving the business",
    description:
      "Firing, resignations, redundancies, layoffs and other classes of employee termination",
    nickname: "personnel-employment-retirements",
  },
  {
    id: 161,
    parent: 16,
    status: "0. New",
    name_singular: "attendance",
    display_singular: "Attendance",
    summary: "Employee availability, attendance and timesheets",
    description: null,
    notes: [
      "Set up and maintain rosters",
      "Process and approve employee timesheets",
      "Manage leave requests and balances",
    ],
    nickname: "personnel-attendance",
  },
  {
    id: 1610,
    parent: 161,
    status: "0. New",
    name_singular: "rosters",
    display_singular: "Rosters",
    description: "Calendar your rosters and shifts",
    summary:
      "Shifts / Rotas / rosters / calendars / timetables / schedules / On-call rotations",
    nickname: "personnel-attendance-rosters",
  },
  {
    id: 1611,
    parent: 161,
    status: "0. New",
    name_singular: "leave",
    display_singular: "Leave",
    summary: "Personnel time off",
    description:
      "Time off in Lieu (TOIL), Bank/Public Holidays, Personal/Sick, Annual, Carers, Compassionate, Gardening Leave, Parental, Unpaid, Sabbatical, Suspensions and other types of Leave",
    nickname: "personnel-attendance-leave",
  },
  {
    id: 1612,
    parent: 161,
    status: "0. New",
    name_singular: "overtime",
    display_singular: "Overtime",
    description: "Manage on-call rosters or unplanned overtime",
    summary: "overtime and on-call",
    nickname: "personnel-attendance-overtime",
  },
  {
    id: 1613,
    parent: 161,
    status: "0. New",
    name_singular: "timesheets",
    display_singular: "Timesheets",
    description: null,
    summary: "Tracing, Submissions and Approvals of Timesheets",
    nickname: "personnel-attendance-timesheets",
  },
  {
    id: 16130,
    parent: 1613,
    status: "0. New",
    name_singular: "timeentries",
    display_singular: "Time Entries",
    summary: "Logs of undertaken work",
    description: "Enter records of work done by personnel",
    nickname: "personnel-attendance-timesheets-timeentries",
    notes: `
    We see this (and other complaints) often, and deal with it via:
      Adjusting their Process:

      - You can write more succinctly if you wish, don't worry. Time entries aren't micro managing, we aren't challenging you on your time spent.

      - Feel free to use the '1 line per 15 minutes' rule of thumb.

      - Do it live as-you-go, not at the end of a ticket/workday. It should be a running commentary for yourself.

      - It only takes 20 seconds to alt-tab to your time entry screen and add in a line, which should be open while you are working on the ticket.

      - You can use this template / standard note which will save you time (i.e., writing your notes against a pasted-in troubleshooting checklist)

      - Etc.


      Justifying the Process:

      They are doing all of the following, all at once (it's actually very efficient):

      - A journal for you to refer back to

      - A journal for others to refer to.

      - Billing to the customer

      - Justifying time spent to the customer

      - Reducing invoice query overhead. 1 minute here is saving 5 minutes later.

      - A list to cross-check against your troubleshooting/resolution checklist before closing a ticket

      - Communication to stakeholders (assuming you are using a combined time entry screen as per CWM/Autotask/etc.)

      - Rubber-ducking.

      - CYA / A way for us to reduce likelihood of our company being scapegoated.
      `,
  },
  {
    id: 16131,
    parent: 1613,
    status: "0. New",
    name_singular: "timesheetsubmissions",
    display_singular: "Timesheet Submissions",
    summary: null,
    description: null,
    nickname: "personnel-attendance-timesheets-timesheetsubmissions",
  },
  {
    id: 16132,
    parent: 1613,
    status: "0. New",
    name_singular: "timesheetapprovals",
    display_singular: "Timesheet Approvals",
    description: null,
    summary: "Timesheet approvals from line manager(s)",
    notes:
      "Often the line manager will evaluate from an employee performance perspective, and the billing manager will review from a billing suitability perspective",
    nickname: "personnel-attendance-timesheets-timesheetapprovals",
  },
  {
    id: 162,
    parent: 16,
    status: "0. New",
    name_singular: "payroll",
    display_singular: "Payroll",
    description: null,
    summary:
      "Payroll, commissions, incentive schemes, salary packaging, bonuses, backpays, expenses, pensions/superannuation/401ks, reimbursements, allowances and other forms of compensation",
    nickname: "personnel-payroll",
  },
  {
    id: 1620,
    parent: 162,
    status: "5. Hold",
    name_singular: "compensation",
    display_singular: "Compensation",
    summary: null,
    description:
      "Employee packages. Wages, salary, allowances, commissions, bonuses and other (performance based or otherwise) compensation",
    nickname: "personnel-payroll-compensation",
  },
  {
    id: 1621,
    parent: 162,
    status: "5. Hold",
    name_singular: "annuities",
    display_singular: "Annuities",
    summary: null,
    description:
      "Employee retirement and investment plans/contributions (Workplace Pension Plan: Pensions / 401ks / Superannuation), Personal Pension Plans: 403(b) and other employee investments, etc.",
    nickname: "personnel-payroll-annuities",
  },
  {
    id: 1622,
    parent: 162,
    status: "5. Hold",
    name_singular: "garnishments",
    display_singular: "Garnishments",
    summary: null,
    description:
      "personal tax repayments, levies, liens, loan repayments and other garnishments",
    nickname: "personnel-payroll-garnishments",
  },
  {
    id: 1623,
    parent: 162,
    status: "5. Hold",
    name_singular: "taxes",
    display_singular: "Taxes",
    summary: "Personnel Taxation",
    description:
      "Deductions that are made from an employee's pay to fund federal, state, and local government programs. These deductions include income tax, FICA (Social Security and Medicare) taxes, and any other taxes required by law.",
    nickname: "personnel-payroll-taxes",
  },
  {
    id: 1624,
    parent: 162,
    status: "0. New",
    name_singular: "payrun",
    display_singular: "Payrun",
    summary: "Paying your employees",
    description: null,
    notes: `
      price_unit: "employee",
      billing: {
        startup: {
          title: "Startup",
          price_month: 100,
          priceyear: 1000,
          priceaddition: "$10 per additional employee",
          included: [
            "Setup of your Payroll > Payrun process",
            "Approvals and scheduling of up to 10 employees",
            "Monthly AP report provided, and payment approvals obtained from you",
          ],
        },
        business: {
          title: "Business",
          price_month: 500,
          priceyear: 5000,
          priceaddition: "$8 per additional employee",
          included: [
            "Everything from the Startup package, and...",
            "Approvals and scheduling of up to 60 employees",
            "Weekly AP report provided, and payment approvals obtained from you",
          ],
        },
        corporation: {
          title: "Corporation",
          price_month: 2000,
          priceyear: 20000,
          priceaddition: "$6 per additional employee",
          included: [
            "Everything from the Business package, and...",
            "Approvals and scheduling of up to 200 bills",
            "Daily AP report provided, and payment approvals obtained from you",
          ],
        },
        enterprise: {
          title: "Enterprise",
          price_month: 50000,
          priceyear: 50000,
          priceaddition: "$4 per additional employee",
          included: [
            "Everything from the Corporation package, and...",
            "Enterprise level support",
            "Custom integrations",
          ],
        },
      }
    `,
    nickname: "personnel-payroll-payrun",
  },
  {
    id: 16240,
    parent: 1624,
    status: "5. Hold",
    name_singular: "wages",
    display_singular: "Wages",
    summary: null,
    description:
      "Calculation of gross pay, including hourly/time based wages, salary, salary packaging, overtime wages, on-call fees",
    nickname: "payroll-payrun-wages",
  },
  {
    id: 16241,
    parent: 1624,
    status: "5. Hold",
    name_singular: "benefits",
    display_singular: "Benefits",
    summary: null,
    description:
      "Any non-wage form of compensation that an employer provides to its employees, in addition to their base salary",
    notes:
      "Any non-wage form of compensation that an employer provides to its employees, in addition to their base salary.\nThese can include things like health insurance, retirement plans, vacation time, transportation allowances, and reimbursements for certain expenses, such as continuing education or business travel.\nBenefits packages can also include things such as Performance bonus, Stock options, and other incentives that are intended to attract and retain employees by providing a comprehensive set of benefits and compensation that meets their financial and non-financial needs.\nBenefits can be an important part of an employee's overall compensation package and can help to attract and retain top talent. Employers typically offer a variety of benefits to appeal to different employee needs, and to stay competitive in the job market.",
    nickname: "payroll-payrun-benefits",
  },
  {
    id: 16242,
    parent: 1624,
    status: "5. Hold",
    name_singular: "deductions",
    display_singular: "Deductions",
    summary: null,
    description:
      "Deductions for taxes, benefits, and other items are subtracted from gross pay",
    nickname: "payroll-payrun-deductions",
  },
  {
    id: 16243,
    parent: 1624,
    status: "5. Hold",
    name_singular: "payslips",
    display_singular: "Payslips",
    description: null,
    summary: "Pay slips / pay stubs",
    nickname: "payroll-payrun-payslips",
  },
  {
    id: 16244,
    parent: 1624,
    status: "5. Hold",
    name_singular: "distributions",
    display_singular: "Distributions",
    description: null,
    summary:
      "Distribution of pay: Disbursements to employees, and allocations for setting aside pay",
    notes:
      "Disbursement is a term that generally refers to the process of paying out or distributing funds, typically from an organization or business, to its employees, suppliers or other parties. In the context of a pay run, disbursement refers to the distribution of the calculated net pay or any other forms of compensation such as bonuses, reimbursements or benefits, to the employees.\nIt can also encompass the distribution of funds to other parties such as vendors, banks, and government agencies for taxes, loans, and other obligations.\nIt can be used to refer to the physical act of distributing funds, as well as the transfer of funds from the employer's accounts to the employee's account through direct deposit, wire transfer, paper checks or other means of payment.\nIt's worth noting that, 'disbursement' usually refers to money being paid out, while 'allocation' or 'distribution' refers to money being set aside. Although it's not always the case and it depends on the context.",
    nickname: "payroll-payrun-distributions",
  },
  {
    id: 163,
    parent: 16,
    status: "5. Hold",
    name_singular: "welfare",
    display_singular: "Welfare",
    description: "Employee wellbeing",
    summary:
      "Assisting personnel, unions, employee support organisations, other third parties",
    nickname: "personnel-welfare",
  },
  {
    id: 164,
    parent: 16,
    status: "5. Hold",
    name_singular: "assignments",
    display_singular: "Assignments",
    description: "Manage team and individual assignments",
    summary: "Employee responsibilities and deliverables",
    nickname: "personnel-assignments",
  },
  {
    id: 1640,
    parent: 164,
    status: "5. Hold",
    name_singular: "teams",
    display_singular: "Teams",
    description: null,
    summary: null,
    nickname: "personnel-assignments-teams",
  },
  {
    id: 1640,
    parent: 164,
    status: "5. Hold",
    name_singular: "managers",
    display_singular: "Managers",
    description: null,
    summary: "Mentors, function-managers and line-managers",
    nickname: "personnel-assignments-managers",
  },
  {
    id: 1642,
    parent: 164,
    status: "5. Hold",
    name_singular: "meetings",
    display_singular: "Meetings",
    description: null,
    summary: null,
    nickname: "personnel-assignments-meetings",
  },
  {
    id: 1643,
    parent: 164,
    status: "5. Hold",
    name_singular: "deliverables",
    display_singular: "Deliverables",
    description: null,
    summary: "Events / Tasks / Deliverables / Work",
    nickname: "personnel-assignments-deliverables",
  },
  {
    id: 1644,
    parent: 164,
    status: "5. Hold",
    name_singular: "functions",
    display_singular: "Functions",
    description: "responsibilities and jobs to fulfil",
    summary:
      "Track and manage the things that make one successful in their role",
    nickname: "personnel-assignments-functions",
  },
  {
    id: 1630,
    parent: 163,
    status: "5. Hold",
    name_singular: "safety",
    display_singular: "Safety",
    summary: "Health & Safety",
    description: null,
    nickname: "personnel-welfare-safety",
    notes: `also referred to as OHS, OH&S, OSH, H&S and other formats depending on the country.
      scope is an issue here, because it's not just Personnel that is affected - Other stakeholders are too. This would make more sense in Systems.`,
  },
  {
    id: 16300,
    parent: 1630,
    status: "5. Hold",
    name_singular: "emergencies",
    display_singular: "Emergencies",
    description: null,
    summary: "Emergency procedures",
    nickname: "personnel-welfare-safety-emergencies",
  },
  {
    id: 16301,
    parent: 1630,
    status: "5. Hold",
    name_singular: "checks",
    display_singular: "Checks",
    description: null,
    summary: "Routine inspections and OHS checklists",
    nickname: "personnel-welfare-safety-checks",
  },
  {
    id: 16302,
    parent: 1630,
    status: "5. Hold",
    name_singular: "incidents",
    display_singular: "Incidents",
    description: null,
    summary: "Incident reporting",
    nickname: "personnel-welfare-safety-incidents",
  },
  {
    id: 16303,
    parent: 1630,
    status: "5. Hold",
    name_singular: "x",
    display_singular: "x",
    description: null,
    summary: null,
    nickname: "personnel-welfare-safety-x",
  },
  {
    id: 16304,
    parent: 1630,
    status: "5. Hold",
    name_singular: "y",
    display_singular: "y",
    description: null,
    summary: null,
    nickname: "personnel-welfare-safety-y",
  },
  {
    id: 1631,
    parent: 163,
    status: "5. Hold",
    name_singular: "wellness",
    display_singular: "Wellness",
    summary: "Employee Wellness programs",
    description:
      "Creating and implementing initiatives and programs that support the physical, mental, and emotional well-being of employees. This can include things like on-site fitness facilities, wellness challenges, and mental health resources.",
    nickname: "personnel-welfare-wellness",
  },
  {
    id: 1632,
    parent: 163,
    status: "5. Hold",
    name_singular: "relations",
    display_singular: "Relations",
    summary: "Labor relations",
    description:
      "Managing the relationship between the organization and its employees, particularly with regard to issues related to collective bargaining, union negotiations, and labor disputes.",
    nickname: "personnel-welfare-relations",
  },
  {
    id: 1633,
    parent: 163,
    status: "5. Hold",
    name_singular: "inclusion",
    display_singular: "Inclusion",
    summary: "Diversity and Inclusion",
    description:
      "Creating and maintaining a workplace culture that values and promotes diversity, equity, and inclusion. It includes initiatives such as recruiting and retaining a diverse workforce, creating policies that promote equity and inclusion, and providing training to raise awareness and reduce bias.",
    nickname: "personnel-welfare-inclusion",
  },
  {
    id: 1634,
    parent: 163,
    status: "5. Hold",
    name_singular: "conflicts",
    display_singular: "Conflicts",
    summary: "Conflict Resolution",
    description:
      "Identifying and resolving conflicts in the workplace, such as mediation, conflict coaching, and conflict management training.",
    nickname: "personnel-welfare-conflicts",
  },
  {
    id: 17,
    parent: 1,
    status: "0. New",
    name_singular: "market",
    display_singular: "Market",
    summary: "Research, Campaigns, Engagement and Branding",
    description: "Marketing, branding and community engagement",
    nickname: "market",
    icon_name: "campaign",
    icon_source: "MaterialIcons",
  },
  {
    id: 170,
    parent: 17,
    status: "0. New",
    name_singular: "brands",
    display_singular: "Brands",
    description: null,
    summary: "Your company brand, USP, image, logo and design guidelines",
    nickname: "market-brands",
  },
  {
    id: 1700,
    parent: 170,
    status: "0. New",
    name_singular: "graphics",
    display_singular: "Graphics",
    summary: "Logos and other design assets",
    description: null,
    nickname: "market-brands-graphics",
  },
  {
    id: 1701,
    parent: 170,
    status: "0. New",
    name_singular: "assets",
    display_singular: "Assets",
    summary: "Domains and other assets",
    description: null,
    nickname: "market-brands-assets",
  },
  {
    id: 170,
    parent: 17,
    status: "0. New",
    name_singular: "reputation",
    display_singular: "Reputation",
    description: null,
    summary: null,
    nickname: "market-brands-reputation",
  },
  {
    id: 1702,
    parent: 170,
    status: "0. New",
    name_singular: "usp",
    display_singular: "USP",
    summary: "Unique Selling Points",
    description: null,
    nickname: "market-brands-usp",
  },
  {
    id: 171,
    parent: 17,
    status: "5. Hold",
    name_singular: "industry",
    display_singular: "Industry",
    summary: "Partner, competitor and other industry analysis",
    description:
      "Manage and research relevant entities and stakeholders within the market",
    nickname: "market-industry",
  },
  {
    id: 1710,
    parent: 171,
    status: "5. Hold",
    name_singular: "landscape",
    display_singular: "Landscape",
    description: null,
    summary:
      "A map/list of the competitors and other industry players to be aware of",
    references: ["link to governance > model", "link to market > research"],
    nickname: "market-industry-landscape",
  },
  {
    id: 172,
    parent: 17,
    status: "5. Hold",
    name_singular: "promotions",
    display_singular: "Promotions",
    description: null,
    summary: "Market campaign management, advertising and lead funnelling",
    nickname: "market-promotions",
    notes:
      "Leads generated here will link to the Customer > Sales > Lead process",
  },
  {
    id: 1720,
    parent: 172,
    status: "5. Hold",
    name_singular: "campaigns",
    display_singular: "Campaigns",
    summary: null,
    description: null,
    nickname: "market-promotions-campaigns",
  },
  {
    id: 173,
    parent: 17,
    status: "5. Hold",
    name_singular: "research",
    display_singular: "Research",
    description: null,
    summary:
      "Data collection and analysis of your company reputation, markets and competitors",
    nickname: "market-research",
  },
  {
    id: 174,
    parent: 17,
    status: "0. New",
    name_singular: "engagement",
    display_singular: "Engagement",
    description: null,
    summary:
      "Content Marketing: Media, event management and community engagement",
    notes: `
      PROCESS:
        "Create and maintain social media profiles",
        "Create and maintain social media calendar",
        "Design social media posts",
        "Obtain approval on posts",
        "Schedule posts",
        "Publish posts (manually or automatically)",
        "Provide live report on posts and analytics",
      OTHER NOTES:
        "Tiktok video posts (see *here* for how we do this, and *here* if you want media creation too)
        "Facebook text/video posts (see *here* for how we do this, and *here* if you want media creation too)
        "Twitter text/video posts (see *here* for how we do this, and *here* if you want media creation too)
        "Instagram text/video posts (see *here* for how we do this, and *here* if you want media creation too)
        "Youtube video posts (see *here* for how we do this, and *here* if you want media creation too)
    `,
    nickname: "market-engagement",
  },
  {
    id: 1740,
    parent: 174,
    status: "0. New",
    name_singular: "channels",
    display_singular: "Channels",
    summary: null,
    description: null,
    nickname: "market-engagement-channels",
  },
  {
    id: 1741,
    parent: 174,
    status: "0. New",
    name_singular: "posts",
    display_singular: "Posts",
    summary: null,
    description: null,
    nickname: "market-engagement-posts",
  },
  {
    id: 1742,
    parent: 174,
    status: "0. New",
    name_singular: "calendar",
    display_singular: "Calendar",
    summary: null,
    description: null,
    nickname: "market-engagement-calendar",
  },
  {
    id: 1743,
    parent: 174,
    status: "0. New",
    name_singular: "engagement",
    display_singular: "Engagement",
    summary: "Engaging with the community, replying to posts comments etc.",
    description: null,
    nickname: "market-engagement-engagement",
  },
  {
    id: 18,
    parent: 1,
    status: "0. New",
    name_singular: "operations",
    display_singular: "Operations",
    summary: "Service Desk & Projects",
    description:
      "Management of all the production (all work/tasks) that is undertaken in the business.\nTrack all of your projects & service tickets, with optional best practice libraries (ITIL, PMBOK, Prince2, ISO:9001, etc.)",
    nickname: "operations",
    icon_name: "ticket",
    icon_source: "Entypo",
  },
  {
    id: 180,
    parent: 18,
    status: "0. New",
    name_singular: "control",
    display_singular: "Control",
    description: null,
    summary: "Project control, quality and change management",
    nickname: "operations-control",
  },
  {
    id: 1800,
    parent: 180,
    status: "0. New",
    name_singular: "quality",
    display_singular: "Quality",
    description: null,
    summary: "Quality Assurance and Control",
    nickname: "operations-control-quality",
  },
  {
    id: 18000,
    parent: 1800,
    status: "0. New",
    name_singular: "qualitycontrol",
    display_singular: "Quality Control",
    description: null,
    summary: null,
    nickname: "operations-control-quality-qualitycontrol",
  },
  {
    id: 18001,
    parent: 1800,
    status: "0. New",
    name_singular: "qualityassurance",
    display_singular: "Quality Assurance",
    description: null,
    summary: null,
    nickname: "operations-control-quality-qualityassurance",
  },
  {
    id: 1801,
    parent: 180,
    status: "0. New",
    name_singular: "changes",
    display_singular: "Changes",
    description: null,
    summary: "Change Requests and Management",
    nickname: "operations-control-changes",
  },
  {
    id: 1802,
    parent: 180,
    status: "0. New",
    name_singular: "progress",
    display_singular: "Progress",
    summary:
      "Project progress monitoring, using data from operations-planning-schedule and other modules",
    description: "Project monitoring, progress & status management / plotting",
    notes: `[
      "https://prince2.wiki/theme/progress/",
      "https://www.pmi.org/learning/library/anatomy-highly-effective-status-report-2198",
    ]`,
    nickname: "operations-control-progress",
  },
  {
    id: 1803,
    parent: 180,
    status: "0. New",
    name_singular: "projection",
    display_singular: "Projection",
    description: null,
    summary: "Project forecasting",
    nickname: "operations-control-projection",
  },
  {
    id: 1804,
    parent: 180,
    status: "0. New",
    name_singular: "risk",
    display_singular: "Risk",
    description: null,
    summary: "Risk assessment and mitigation",
    nickname: "operations-control-risk",
  },
  {
    id: 181,
    parent: 18,
    status: "0. New",
    name_singular: "response",
    display_singular: "Response",
    description: "Log and process incoming tickets / tasks",
    summary:
      "Triage, stakeholder management, requirements analysis and communications",
    notes: ` [
      "Triage requests (internally or externally created), set up projects and bundle tasks",
      "Process incoming communications and reply to stakeholders",
      "Maintain stakeholder lists for all tasks",
      "Maintain production coordination report",
    ]`,
    nickname: "operations-response",
  },
  {
    id: 1810,
    parent: 181,
    status: "0. New",
    name_singular: "initiation",
    display_singular: "Initiation",
    description: null,
    summary: "project/ticket initialisation (auto or manual)",
    references: [
      "see pmbok planning stage part 1, and other libraries/standards",
    ],
    nickname: "operations-response-initiation",
  },
  {
    id: 18101,
    parent: 1810,
    status: "0. New",
    name_singular: "templating",
    display_singular: "Templating",
    summary: "Templates for recurring tickets or pattern matching",
    description: null,
    notes:
      "The aim is to preemptively capture all expected incoming tickets, via templating",
    nickname: "response-initiation-templating",
  },
  {
    id: 1811,
    parent: 181,
    status: "0. New",
    name_singular: "triage",
    display_singular: "Triage",
    summary: "urgency and impact evaluation + queuing",
    description: null,
    notes: `[
      "Review an item",
      "Create/ List entities/link entities and relationships from it (e.g. derive new contacts, tasks etc.)",
      "Undertake any immediate tasks",
      "Update any stakeholders / reply where appropriate",
    ]`,
    nickname: "operations-response-triage",
  },
  {
    id: 18110,
    parent: 1811,
    status: "0. New",
    name_singular: "ticket-companies",
    display_singular: "Companies",
    summary:
      "select relevant groups/organisations/companies. Create them if they don't exist",
    description: null,
    nickname: "response-triage-ticket-companies",
  },
  {
    id: 18111,
    parent: 1811,
    status: "0. New",
    name_singular: "ticket-categorisation",
    display_singular: "Categorisation",
    description: null,
    summary:
      "Categorise the issue with types (request, incident, change, problem), subtypes etc.",
    nickname: "response-triage-ticket-categorisation",
  },
  {
    id: 18112,
    parent: 1811,
    status: "0. New",
    name_singular: "ticket-prioritization",
    display_singular: "Prioritization",
    description: "Set the impact and urgency to determine the priority",
    summary:
      "Apply The SLA/SLO (Service Level Agreement / Objectives) for response goals",
    nickname: "response-triage-ticket-prioritization",
  },
  {
    id: 1812,
    parent: 181,
    status: "0. New",
    name_singular: "stakeholders",
    display_singular: "Stakeholders",
    description: null,
    summary: null,
    nickname: "operations-response-stakeholders",
  },
  {
    id: 18120,
    parent: 1812,
    status: "0. New",
    description: null,
    name_singular: "stakeholderidentification",
    display_singular: "Stakeholder Identification",
    summary: "Add any relevant stakeholders to the ticket",
    nickname: "operations-response-stakeholders-stakeholderidentification",
  },
  {
    id: 18120,
    parent: 1812,
    status: "0. New",
    name_singular: "stakeholderlist",
    display_singular: "Stakeholderlist",
    description: null,
    summary: "Maintain the stakeholder list",
    nickname: "operations-response-stakeholders-stakeholderlist",
  },
  {
    id: 1813,
    parent: 181,
    status: "0. New",
    name_singular: "requirements",
    display_singular: "Requirements",
    description:
      "A list of requirements is maintained throughout the project lifespan, and stakeholders are consulted to ensure accuracy and alignment",
    summary:
      "Maintain a requirements list for use in Project > Planning and other modules",
    nickname: "operations-response-requirements",
  },
  {
    id: 18130,
    parent: 1813,
    status: "0. New",
    name_singular: "assignprocesses",
    display_singular: "Assign Processes",
    description: "Attach documentation to the ticket.",
    summary: null,
    notes:
      "Attach customer-specific documentation (this should be followed first) and general documentation (used as a fallback for tasks if there is no customer-specific process for a task",
    nickname: "operations-response-requirements-assignprocesses",
  },
  {
    id: 18131,
    parent: 1813,
    status: "0. New",
    name_singular: "establishrequirements",
    display_singular: "Establish Requirements",
    description: "List the necessary requirements",
    summary: null,
    nickname: "operations-response-requirements-establishrequirements",
  },
  {
    id: 1814,
    parent: 181,
    status: "0. New",
    name_singular: "communications",
    display_singular: "Communications",
    summary: null,
    description: null,
    nickname: "operations-response-communications",
  },
  {
    id: 182,
    parent: 18,
    status: "0. New",
    name_singular: "planning",
    display_singular: "Planning",
    description: null,
    summary: "Designing, resource allocation and scheduling",
    nickname: "operations-planning",
  },
  {
    id: 1820,
    parent: 182,
    status: "0. New",
    name_singular: "investigations",
    display_singular: "Investigations",
    description: "Research into the problem and requirements",
    summary:
      "Initial troubleshooting, first call resolution attempts, investigation into the problem, verifying and deriving from requirements",
    nickname: "operations-planning-investigations",
  },
  {
    id: 18200,
    parent: 1820,
    status: "0. New",
    name_singular: "gather",
    display_singular: "Gather",
    description: "Collect all needs/requirements/information",
    summary: "Collate all of the things that need to be solved",
    nickname: "operations-planning-investigations-gather",
  },
  {
    id: 18201,
    parent: 1820,
    status: "0. New",
    name_singular: "scope",
    display_singular: "Scope",
    description: "Define the scope of the project",
    summary: "Analygous to PMBOK scope management",
    nickname: "operations-planning-investigations-scope",
  },
  {
    id: 18202,
    parent: 1820,
    status: "0. New",
    name_singular: "logic",
    display_singular: "Logic",
    description:
      "Use cognitive tools to clarify, verify or validate requirements",
    summary:
      "Elements of Critical Thinking / Concepts in Argumentation and Reasoning.",
    nickname: "operations-planning-investigations-logic",
  },
  {
    id: 182020,
    parent: 18202,
    status: "0. New",
    name_singular: "heuristics",
    display_singular: "Heuristics ",
    description: "Guiding principles intended to simplify reasoning",
    summary: "Anchoring, Representativeness, Availability and other heuristics",
    nickname: "operations-planning-investigations-logic-heuristics",
    notes: `[
      "Anchoring: The tendency to rely too heavily on the first piece of information encountered when making decisions. Often seen in negotiations, where the first offer sets the stage for the rest of the discussion. ",
      "Reciprocity Norm: A social heuristic that encourages people to respond to a positive action with another positive action, encouraging mutual benefit. Often used in social engineering and sales tactics.",
      "Representativeness Heuristic: Judges probabilities based on how similar an outcome is to a known stereotype or representative case, often ignoring base rates or statistical information.",
      "Availability Heuristic: Relies on immediate examples that come to mind when evaluating a specific topic, concept, or decision. Leads to overestimation of the likelihood of events based on their availability in memory. e.g.After hearing multiple news stories about car thefts in your city, you might estimate that the likelihood of your own car being stolen is higher than it actually is",
      "Axioms",
      "Laws (e.g., Law of Non-Contradiction, Law of Excluded Middle)",
      "etc.",
    ]`,
  },
  {
    id: 182021,
    parent: 18202,
    status: "0. New",
    name_singular: "axioms",
    display_singular: "Axioms",
    description: "Rules",
    summary: null,
    nickname: "operations-planning-investigations-logic-axioms",
  },
  {
    id: 182022,
    parent: 18202,
    status: "0. New",
    name_singular: "fallacies",
    display_singular: "Fallacies",
    description:
      "Fallacies, biases and other errors in reasoning, misleading or deceptive arguments.",
    summary:
      "Also includes paradoxes, tautologies, Dilemmas, Conundrums, Antinomies, Anomalies, Enigmas",
    nickname: "operations-planning-investigations-logic-fallacies",
  },
  {
    id: 182023,
    parent: 18202,
    status: "0. New",
    name_singular: "inferrences",
    display_singular: "Inferrences",
    description: "Conclusions reached on the basis of evidence and reasoning",
    summary: "Formal Systems, Rules of Inferrence, syllogisms etc.",
    nickname: "operations-planning-investigations-logic-inferrences",
  },
  {
    id: 182024,
    parent: 18202,
    status: "0. New",
    name_singular: "proofs",
    display_singular: "Proofs",
    description:
      "Proof techniques, Arguments and other justifications/validations",
    summary: null,
    nickname: "operations-planning-investigations-logic-proofs",
  },
  {
    id: 1821,
    parent: 182,
    status: "0. New",
    name_singular: "functionality",
    display_singular: "Functionality",
    description: null,
    summary: "Lay out the necessary user stories / use cases / features",
    nickname: "operations-planning-functionality",
  },
  {
    id: 1822,
    parent: 182,
    status: "0. New",
    name_singular: "designs",
    display_singular: "Designs",
    description: null,
    summary: "Proposals for a solution consisting of deliverables",
    nickname: "operations-planning-designs",
  },
  {
    id: 1823,
    parent: 182,
    status: "0. New",
    name_singular: "resourcing",
    display_singular: "Resourcing",
    summary: null,
    description: "Request & allocate resources for the project/ticket",
    nickname: "operations-planning-resourcing",
  },
  {
    id: 1824,
    parent: 182,
    status: "0. New",
    name_singular: "scheduling",
    display_singular: "Scheduling",
    description: "Calendaring all resources (Plotting resources against time)",
    summary: "Allocate resources in order to schedule the Project>Execution",
    nickname: "operations-planning-scheduling",
  },
  {
    id: 183,
    parent: 18,
    status: "0. New",
    name_singular: "execution",
    display_singular: "Execution",
    description: null,
    summary: "Implementation & installations",
    nickname: "operations-execution",
  },
  {
    id: 1830,
    parent: 183,
    status: "0. New",
    name_singular: "fulfilment",
    display_singular: "Fulfilment",
    description: null,
    summary: "Delivering the resources as stated in the design phase",
    nickname: "operations-execution-fulfilment",
  },
  {
    id: 1831,
    parent: 183,
    status: "0. New",
    name_singular: "implementation",
    display_singular: "Implementation",
    description: "Undertake any approved change requests",
    summary: "Implementation & installation of the deliverable",
    notes:
      "With change approval where necessary (Project>Control>Change), undertake the installation/deployment of the product.",
    nickname: "operations-execution-implementation",
  },
  {
    id: 1832,
    parent: 183,
    status: "0. New",
    description: null,
    summary: "Deployment, transfer and integration into the new system",
    name_singular: "migration",
    display_singular: "Migration",
    nickname: "operations-execution-documentation-integration",
  },
  {
    id: 1833,
    parent: 183,
    status: "0. New",
    description: null,
    summary: "Instructions, Specifications and Handbooks for the new system",
    name_singular: "documentation",
    display_singular: "Documentation",
    nickname: "operations-execution-documentation",
  },
  {
    id: 1833,
    parent: 183,
    status: "0. New",
    name_singular: "testing",
    display_singular: "Testing",
    description: "Tests and validation for the solution/deliverable",
    summary:
      "Tests and validation, rollbacks for failed tests, monitoring periods to confirm fixes",
    nickname: "operations-execution-testing",
  },
  {
    id: 18340,
    parent: 1834,
    status: "0. New",
    name_singular: "tests",
    display_singular: "Tests",
    description: "Undertake testing and validation",
    summary: ``,
    notes: `
      Performance Testing
        Stress Testing: This aims to evaluate how a system performs under extreme conditions. The system is pushed beyond its normal operational capacity to see how it handles high or peak loads. The goal is to identify the breaking point of the system.
        Load Testing: This is more focused on simulating real-world load conditions for the system. It aims to determine how the system behaves under expected load conditions and to identify bottlenecks that could affect its performance.
      Functional Testing
        Unit Testing: Validates individual components or units of a software.
        Integration Testing: Validates interactions between integrated components.
        System Testing: Validates the entire system as a whole.
        Regression Testing: Ensures that new changes don't break existing functionalities.
        Smoke Testing: Quick, preliminary tests to show that the critical functionalities work.
        Sanity Testing: Narrow scope testing, conducted when a minor change occurs in the code.
        Acceptance Testing: Validates that the system meets business requirements.
      Non-Functional Testing
        Performance Testing: Assesses system performance under various conditions.
          Stress Testing: This aims to evaluate how a system performs under extreme conditions. The system is pushed beyond its normal operational capacity to see how it handles high or peak loads. The goal is to identify the breaking point of the system.
          Load Testing: This is more focused on simulating real-world load conditions for the system. It aims to determine how the system behaves under expected load conditions and to identify bottlenecks that could affect its performance.
        Usability Testing: Evaluates the user interface and overall user experience.
        Security Testing: Checks for vulnerabilities, risks, and threats in the application.
        Compatibility Testing: Ensures that the software runs on different combinations of hardware, OS, and networks.
        Reliability Testing: Assesses how fault-tolerant a system is.
        Scalability Testing: Determines if the system can handle increased load.
      Specialized Testing
        Exploratory Testing: Unscripted testing to explore the application's functionality.
        End-to-End Testing: Validates the flow of an application from start to finish.
        Beta Testing: Performed by real users of the software application in a real environment.
        Database Testing: Validates databases and their data integrity.
        Localization Testing: Checks the quality of a product's localization for a particular culture/locale.
        Accessibility Testing: Ensures that the application can be used by people with disabilities.
      Automated Testing
        API Testing: Validates the application programming interfaces (APIs).
        GUI Testing: Tests the graphical user interface of the application.
      Platform Testing
        Installation Testing: Validates the installation process and behavior of the application.
        Operational Testing: Validates backup and recovery procedures.
        Hardware-Software Integration Testing
      Lifecycle and Methodology Testing
        Continuous Testing: Ongoing testing in a CI/CD environment.
        A/B Testing: Compares two versions of a webpage or app against each other.
        Agile Testing: Testing practices designed to fit Agile development methodologies.
          Iterative Testing
          User Story Validation
        DevOps Testing: Testing integrated into the DevOps pipeline.
          Continuous Testing
          Infrastructure as Code Testing
        Waterfall Testing: Traditional testing in a sequential development environment.
          Phase-specific Testing (e.g., Requirements, Design, Implementation)
        TDD/BDD: Test-Driven Development and Behavior-Driven Development.
          Red-Green-Refactor
          Scenario Testing
        V-Model Testing: Validation and Verification model.
          Parallel Development and Testing Phases
      `,
    nickname: "operations-execution-testing-tests",
  },
  {
    id: 18341,
    parent: 1834,
    status: "0. New",
    name_singular: "rollbacks",
    display_singular: "Rollbacks",
    description: null,
    summary: null,
    nickname: "operations-execution-testing-rollbacks",
  },
  {
    id: 184,
    parent: 18,
    status: "0. New",
    name_singular: "evaluation",
    display_singular: "Evaluation",
    description: null,
    summary: "Reporting, Analysis, Handover, Documentation, Training, Closure",
    references: ["See pmbok project closure (and other libraries)"],
    nickname: "operations-evaluation",
  },
  {
    id: 1840,
    parent: 184,
    status: "0. New",
    name_singular: "handover",
    display_singular: "Handover",
    description: null,
    summary:
      "Transfer of responsibility to new teams / companies / the end user",
    nickname: "operations-evaluation-handover",
  },
  {
    id: 18400,
    parent: 1840,
    status: "0. New",
    name_singular: "package",
    display_singular: "Package",
    summary: "Final pack of materials provided to the successor team",
    description:
      "All materials collated and handed over to the BAU team / end user / third party / other successor",
    nickname: "operations-evaluation-handover-package",
  },
  {
    id: 18401,
    parent: 1840,
    status: "0. New",
    name_singular: "induction",
    display_singular: "Induction",
    description: null,
    summary:
      "Training users/teams that are inheriting or using the project deliverables",
    nickname: "operations-evaluation-handover-training",
  },
  {
    id: 1841,
    parent: 184,
    status: "0. New",
    name_singular: "analysis",
    display_singular: "Analysis",
    description: null,
    summary: "Reporting and analysis of work done, including lessons learned",
    nickname: "operations-evaluation-analysis",
  },
  {
    id: 1842,
    parent: 184,
    status: "0. New",
    name_singular: "documentation",
    display_singular: "Documentation",
    summary: null,
    description: null,
    nickname: "operations-evaluation-documentation",
  },
  {
    id: 1843,
    parent: 184,
    status: "0. New",
    name_singular: "training",
    display_singular: "Training",
    summary: null,
    description: null,
    nickname: "operations-evaluation-training",
  },
  {
    id: 1844,
    parent: 184,
    status: "0. New",
    name_singular: "closure",
    display_singular: "Closure",
    description: null,
    summary: "Acceptance and closure of the work done (by all stakeholders)",
    nickname: "operations-evaluation-closure",
  },
  {
    id: 18440,
    parent: 1844,
    status: "0. New",
    name_singular: "release",
    display_singular: "Release",
    summary: "Release of resources from the project/ticket",
    description:
      "Formally release resources from the project, including suppliers, team members, tools and unused consumables.",
    nickname: "operations-evaluation-closure-release",
  },
  {
    id: 18441,
    parent: 1844,
    status: "0. New",
    name_singular: "archiving",
    display_singular: "Archiving",
    description: "File away any completed entities",
    summary:
      "Storing all operations-related documents, codes, and other deliverables in a systematic manner for future reference.",
    nickname: "operations-evaluation-closure-archiving",
  },
  {
    id: 18442,
    parent: 1844,
    status: "0. New",
    name_singular: "checklist",
    display_singular: "Checklist",
    description: null,
    summary: "Completion and compliance checklist",
    nickname: "operations-evaluation-closure-checklist",
  },
  {
    id: 18443,
    parent: 1844,
    status: "0. New",
    name_singular: "signoff",
    display_singular: "Signoff",
    description: null,
    summary: "Acceptance and signoff from all stakeholders",
    nickname: "operations-evaluation-closure-signoff",
  },
  {
    id: 18444,
    parent: 1844,
    status: "0. New",
    name_singular: "completion",
    display_singular: "Completion",
    description:
      "Close remaining entities and move the project from Evaluate to Complete",
    summary:
      "Ensure all tickets, phases and the project itself are closed with no necessary followup",
    nickname: "operations-evaluation-closure-completion",
  },
  {
    id: 19,
    parent: 1,
    status: "5. Hold",
    name_singular: "system",
    display_singular: "System",
    summary: "Technology, Process and Facilities",
    description:
      "The system that the organisation runs on (IT, Site Management, Office Administration)",
    nickname: "system",
    icon_name: "gears",
    icon_source: "FontAwesome",
  },
  {
    id: 115,
    parent: 11,
    status: "5. Hold",
    name_singular: "offerings",
    display_singular: "Offerings",
    description: "Management of your company offerings (products / services)",
    summary: null,
    notes: `[
      "Work with you to establish and maintain core offerings (products & services)",
      "Set and maintain rates, and schedule pricing reviews annually or more frequently",
      "Maintain customer/marketing facing offerings & pricing materials",
      "Provide reporting on core offerings and their successes/issues",
    ]`,
    nickname: "governance-offerings",
  },
  {
    id: 1900,
    parent: 115,
    status: "5. Hold",
    name_singular: "products_and_services",
    display_singular: "Products & Services",
    description: "Determine what your company offers",
    summary:
      "Compilation of the Product > Catalog (and dictates what products/components are designed and obtained in Product>Catalog",
    nickname: "governance-offerings-products_and_services",
  },
  {
    id: 1150,
    parent: 115,
    status: "5. Hold",
    name_singular: "prices",
    display_singular: "Prices",
    description: "Set prices for products and services you are selling",
    summary:
      "Either manual price changes or automatic contract increases (e.g. contracts that stipulate that prices will be increased by inflation+3% YoY.)",
    nickname: "governance-offerings-prices",
    notes: `Factors that should be catered for in pricing:
      Inflation. 5-10% YoY is common. For 22/23/24 10% should be considered due to unprescedented inflation. Some other countries with runaway inflation need to cater for this more often.

      Discount Strategy: Policies and rules for when and how to offer discounts, be it seasonal, bulk, or targeted to certain customer segments.
      Cost Structure: An understanding of how the various costs (fixed, variable, direct, and indirect) affect the pricing strategy.
      Price Localization: Adjusting pricing strategy for different geographic locations or markets.
      Revenue Stream Identification: Analysis of various ways the product or service could be monetized, beyond straightforward sales.
      Psychological Pricing: Implementing pricing techniques that take advantage of psychological triggers (e.g., $9.99 instead of $10.00).
      Value-Based Pricing: Establishing price points based on the perceived value to the customer rather than solely on cost or market conditions.
      Dynamic Pricing: Real-time price adjustments based on current market demand, time, or other variables.
      Price Testing: A/B or multivariate tests to understand how different price points affect customer behavior and sales.
      Customer Lifetime Value (CLV) Analysis: Factoring in the net profit attributable to the entire future relationship with a customer.
      Regulatory Compliance: Ensuring that pricing models and changes comply with local, state, or federal laws.
      Channel Pricing: Adjusting pricing based on the sales channel (e.g., online vs. physical store).
      Bundling and Unbundling: Offering groups of products or services together at a reduced price, or selling previously bundled items separately.
      Price Skimming: Starting with a high price and lowering it over time to maximize profits from different consumer segments.
      Price Discrimination: Offering different prices to different customer groups based on elasticity or other factors.
      Peer and Industry Benchmarking: Regularly comparing your prices and strategies to industry averages or similar businesses.
      Ancillary Revenue: Identifying and capitalizing on secondary revenue streams that may be related to the primary product/service (e.g., extended warranties).
      Trade Terms: Conditions under which a product will be sold to intermediaries like wholesalers, including pricing and discounts.
      Payment Plans and Financing: Offering various methods for customers to finance their purchase, which can also affect the overall price perception.
      Pricing Audits: Regular internal or external reviews to ensure that the pricing strategy is being effectively implemented and is achieving desired results.
      Price Anchoring: Utilizing a reference price around which other prices can be compared, affecting customer perception of value.
      Cross-Channel Consistency: Ensuring prices are consistent across all sales channels to prevent channel conflict.
      Penetration Pricing: Strategies to gain market share by initially setting lower prices.
      Exit Pricing: Policies for how to price products that are about to be phased out or discontinued.
      Loss Leader Strategy: Offering products at a loss to attract customers who will then purchase more profitable items.
      Seasonal Pricing: Adjusting prices according to seasonal demand fluctuations.
      Event-Based Pricing: Special pricing around events (holidays, sales events, etc.)
      Tactical Pricing: Short-term pricing adjustments in response to immediate market conditions or actions by competitors.
      Loyalty and Rewards Pricing: Pricing benefits for customers who participate in loyalty programs.
      Multi-currency Pricing: Setting prices in different currencies for international markets.
      Differential Pricing: Different pricing structures for various editions or versions of the product.
      Freemium Pricing: Offering basic features for free while charging for premium features.
      Cost-Plus Pricing: Simply adding a markup to the cost of goods sold.
      Decoy Pricing: Using a third pricing option to make one of the other two options more attractive.
      Two-Part Tariff: A pricing model that includes a fixed fee plus a variable consumption rate.
      Rate Cards: Formal documentation outlining standard prices for products or services, typically for B2B.
      Index-Based Pricing: Linking prices to a published index such as inflation rates or commodity prices.
      SaaS Tiering: Specific to SaaS products, pricing based on service tiers with different feature sets.
      Custom Pricing: Tailoring pricing for individual clients or situations, often in a B2B context.
      Scarcity Pricing: Creating a sense of urgency or exclusivity to encourage immediate purchase at the given price.
      Hedging Strategies: Using financial instruments to offset potential losses from price volatility, often in commodities.
      `,
  },
  {
    id: 19010,
    parent: 1150,
    status: "5. Hold",
    name_singular: "elasticity",
    display_singular: "Elasticity",
    description:
      "Price Elasticity Modeling / Revenue Optimization - planning for how changes in price will impact demand (and consequently, revenue)",
    summary:
      "The act of planning for prices and how they will relate to revenue (e.g. if we raise prices from x to y what will the impact on demand be?). In economics and business, this is often related to the concept of 'price elasticity of demand', which quantifies how sensitive the quantity demanded of a good is to a change in price",
    nickname: "governance-offerings-prices-elasticity",
  },
  {
    id: 19011,
    parent: 1150,
    status: "5. Hold",
    name_singular: "discretion",
    display_singular: "Discretion",
    description: "Discount Strategy",
    summary:
      "Leeway and allowed fluctuations on RRP/ Gross Profit. For example, a salesperson might be allowed to reduce GP to 10% to get a deal over the line",
    nickname: "governance-offerings-prices-discretion",
  },
  {
    id: 19012,
    parent: 1150,
    status: "5. Hold",
    name_singular: "banding",
    display_singular: "Banding",
    description:
      "Grouping various price points under specific categories for easier management or customer understanding.",
    summary: `This might then be used in determining the price (e.g. whether a product should be fit into a certain band). This helps to compare products and make sure all products are appropriately valued in relation to each other.`,
    notes: ` Examples:
              Electronics Store: Laptops may be grouped by price ranges such as $500-$699, $700-$999, and $1000-$1500, offering a band within which various models fall.
              Clothing Retailer: T-shirts could be banded into price categories like $20-$30, $31-$40, and $41-$50.
              Grocery Store: Organic fruits might be banded into ranges like $1-$3 per pound, $4-$6 per pound, and $7-$9 per pound.
              SaaS Products: Software as a Service (SaaS) subscriptions may offer three bands - Basic, Pro, and Enterprise, each having a specific price range.
              Hotels: Room rates may be banded into ranges like Economy ($100-$150), Standard ($151-$200), and Premium ($201-$300).
              Car Dealership: Used cars could be grouped into bands like $5000-$10000, $10001-$15000, and $15001-$20000.
              Online Marketplace: On platforms like eBay or Amazon, sellers might use price banding to categorize products by price range to help buyers quickly find what they're looking for.
          `,
    nickname: "governance-offerings-prices-banding",
  },
  {
    id: 19013,
    parent: 1150,
    status: "5. Hold",
    name_singular: "modifications",
    display_singular: "Modifications",
    description:
      "Implement a price change/adjustment (with a date set for when it will come into effect).",
    summary: `After the change is applied to your product catalog, there should be a rule/check to ensure that prices haven't gone down uninentionally, or risen by >X% depending on requirements.
        How to cater for inflation if trading internationally:
        Weighted Average Inflation: This approach is often used when costs are incurred in multiple currencies. The inflation rates are weighted according to the proportion of costs in each currency.
        Higher of the Two: Some businesses opt for this conservative approach to ensure they are covered for increases in costs. This is more common when there is high volatility in either inflation rates or exchange rates.
        Currency of Major Expenditure: If the majority of expenses are in one currency, companies may use the inflation rate of that currency as the basis for price adjustments.
        Peg to a third party (unrelated) currency, e.g. USD.
        `,
    nickname: "governance-offerings-prices-modifications",
  },
  {
    id: 19014,
    parent: 1150,
    status: "5. Hold",
    name_singular: "awareness",
    display_singular: "Awareness OR DATE OF EFFECT",
    description: "Alert any affected stakeholders",
    summary: `
        Primarily, customers (especially current subscribers) should be made aware of the impending price change, with appropriate notice period.
        When to apply a price increase:
        - Immediate / as of next billing date (+appropriate notice buffer) - For significant increase in costs.
        - CY
        - FY
        - Contract anniversary date (most common)
        Add Value
        When you increase your prices, impart the value / justify the increase. think of a free gift or service you can add to increase the value. Clients will be less likely to feel uneasy about the increase in price.
     `,
    nickname: "governance-offerings-prices-awareness",
  },
  {
    id: 190,
    parent: 19,
    status: "5. Hold",
    name_singular: "facilities",
    display_singular: "Facilities",
    description: null,
    summary: "Management of all sites and infrastructure",
    nickname: "system-resources-facilities",
  },
  {
    id: 1900,
    parent: 190,
    status: "5. Hold",
    name_singular: "sites",
    display_singular: "Sites",
    summary: "Manage all of your sites/addresses/locations",
    description: null,
    nickname: "system-resources-facilities-sites",
  },
  {
    id: 19010,
    parent: 1900,
    status: "5. Hold",
    name_singular: "furnishings",
    display_singular: "Furnishings",
    summary: null,
    description: null,
    nickname: "system-resources-facilities-furnishings",
  },
  {
    id: 19011,
    parent: 1900,
    status: "5. Hold",
    name_singular: "features",
    display_singular: "Features",
    summary: null,
    description:
      "Manage the features available to your sites (e.g conference rooms)",
    nickname: "system-resources-facilities-features",
  },
  {
    id: 1901,
    parent: 190,
    status: "5. Hold",
    name_singular: "office",
    display_singular: "Office",
    summary: "Office management & office admin",
    description: null,
    nickname: "system-resources-facilities-office",
  },
  {
    id: 1902,
    parent: 190,
    status: "5. Hold",
    name_singular: "vehicles",
    display_singular: "Vehicles",
    summary: "Transport and vehicles",
    description: "Manage availability of transport for people and items",
    nickname: "system-resources-facilities-vehicles",
  },
  {
    id: 1903,
    parent: 190,
    status: "5. Hold",
    name_singular: "utilities",
    display_singular: "Utilities",
    summary:
      "Energy, Gas, Internet, Electricity, Water and any other utility services",
    description: null,
    nickname: "system-resources-facilities-utilities",
  },
  {
    id: 1904,
    parent: 190,
    status: "5. Hold",
    name_singular: "maintenance",
    display_singular: "Maintenance",
    summary:
      "Cleaning, Maintenance, Refurbishment, Waste management and other facility management services",
    description: null,
    nickname: "system-resources-facilities-maintenance",
  },
  {
    id: 191,
    parent: 19,
    status: "5. Hold",
    name_singular: "process",
    display_singular: "Process",
    description:
      "Your business manual and official source of truth for all operations",
    summary:
      "Data, Processes, the Business Manual, and associated automation & improvements",
    notes: `
      summary: [
        "Create and maintain a company manual, compiling all business processes into a single source of truth",
        "Maintain business processes, submit change requests, obtain approval for procedure changes",
        "Maintain company dictionary/language https://howtoprofessionallysay.akashrajpurohit.com/",
      ],
      process: ["procedures", "knowledgebase", "changes", "training"],`,
    nickname: "system-process",
  },
  {
    id: 1910,
    parent: 191,
    status: "5. Hold",
    name_singular: "data",
    display_singular: "Data",
    summary: "Data, information, knowledge and wisdom",
    description: null,
    nickname: "system-process-data",
    notes: `[
      "sync (ensure data is synchronising between applications / repositories)",
      "audit (data should be reviewed annually - Items not used in the last FY can be archived. Items not used within 7/10/as-per-legislation years can be destroyed)",
      "maintenance (BAU process of updating items as the need becomes known. includes tagging/categorising where useful",
    ]`,
  },
  {
    id: 19100,
    parent: 1910,
    status: "5. Hold",
    name_singular: "records",
    display_singular: "Records",
    summary: "Raw data - Facts and figures without context",
    description: null,
    nickname: "system-process-data-records",
    notes: `
    https://mitpress.mit.edu/9780262040631/ - Knowledge and the Flow of Information
    https://philpapers.org/rec/FLOIAV - Information: a very short introduction
    https://onlinelibrary.wiley.com/doi/abs/10.1002/asi.20369 - Fundamental forms of information
    `,
  },
  {
    id: 19101,
    parent: 1910,
    status: "5. Hold",
    name_singular: "information",
    display_singular: "Information",
    summary: "Processed or organized data that holds meaning or value",
    description: null,
    nickname: "system-process-data-information",
  },
  {
    id: 19102,
    parent: 1910,
    status: "5. Hold",
    name_singular: "knowledge",
    display_singular: "Knowledge",
    summary: "Understanding and awareness derived from Information",
    description: null,
    nickname: "system-process-data-knowledge",
  },
  {
    id: 19103,
    parent: 1910,
    status: "5. Hold",
    name_singular: "wisdom",
    display_singular: "Wisdom",
    summary: "Ability to make and decisions derived from knowledge",
    description: "Make sound judgments and decisions based on knowledge",
    nickname: "system-process-data-wisdom",
  },
  {
    id: 19104,
    parent: 1910,
    status: "5. Hold",
    name_singular: "insight",
    display_singular: "Insight",
    summary: "Insight derived from data/information/knowledge/wisdom",
    description: null,
    nickname: "system-process-data-insight",
  },
  {
    id: 1911,
    parent: 191,
    status: "5. Hold",
    name_singular: "manual",
    display_singular: "Manual",
    description:
      "The collation of all your company processes into a single reference point for all stakeholders",
    summary: "The Business Manual: Guides, Processes, Policies, Instructions",
    nickname: "system-process-manual",
    notes: `(stakeholder types are authorised to view specific docs or parts of the business manual. e.g. a customer would not be privy to the same information that your software developers do)`,
  },
  {
    id: 19110,
    parent: 1911,
    status: "5. Hold",
    name_singular: "steps",
    display_singular: "Steps",
    description: null,
    summary: "Individual actions that can be taken",
    nickname: "system-process-manual-steps",
  },
  {
    id: 19111,
    parent: 1911,
    status: "5. Hold",
    name_singular: "instructions",
    display_singular: "Instructions",
    description:
      "Collate and apply conditional logic to steps, into step-by-step guides",
    summary: "Compilations of Steps into 'Work instructions'",
    nickname: "system-process-manual-instructions",
  },
  {
    id: 19112,
    parent: 1911,
    status: "5. Hold",
    name_singular: "procedures",
    display_singular: "Procedures",
    summary: "Compilations of work instructions",
    description: null,
    nickname: "system-process-manual-procedures",
  },
  {
    id: 19113,
    parent: 1911,
    status: "5. Hold",
    name_singular: "processes",
    display_singular: "Processes",
    summary: "Compilations of procedures",
    description: null,
    nickname: "system-process-manual-processes",
  },
  {
    id: 19114,
    parent: 1911,
    status: "5. Hold",
    name_singular: "policies",
    display_singular: "Policies",
    summary: "Overarching summaries of processes and what must be followed",
    description: null,
    nickname: "system-process-manual-policies",
  },
  {
    id: 1912,
    parent: 191,
    status: "5. Hold",
    name_singular: "automation",
    display_singular: "Automation",
    summary: "Workflow rules, integrations and automation of steps",
    description: null,
    nickname: "system-process-automation",
  },
  {
    id: 1913,
    parent: 191,
    status: "5. Hold",
    name_singular: "execution",
    display_singular: "Execution",
    summary: "Actual usage of processes in business operations",
    description: null,
    nickname: "system-process-execution",
  },
  {
    id: 19130,
    parent: 1913,
    status: "5. Hold",
    name_singular: "permissions",
    display_singular: "Permissions",
    summary: "Access Control over system processes and data",
    description: null,
    nickname: "system-process-execution-permissions",
  },
  {
    id: 19131,
    parent: 1913,
    status: "5. Hold",
    name_singular: "queue",
    display_singular: "Queue",
    summary: "Queued up processes that require execution",
    description: null,
    nickname: "system-process-execution-queue",
  },
  {
    id: 19132,
    parent: 1913,
    status: "5. Hold",
    name_singular: "undertaking",
    display_singular: "Undertaking",
    summary: "Usage of the business's processes",
    description: null,
    nickname: "system-process-execution-undertaking",
  },
  {
    id: 19133,
    parent: 1913,
    status: "5. Hold",
    name_singular: "logging",
    display_singular: "Logging",
    summary: "Audit trail of processes undertaken",
    description: null,
    nickname: "system-process-execution-logging",
  },
  {
    id: 19134,
    parent: 1913,
    status: "5. Hold",
    name_singular: "errors",
    display_singular: "Errors",
    summary:
      "Execution error handling for interuption to normal processes & reliability",
    description: null,
    nickname: "system-process-execution-logging",
  },
  {
    id: 1914,
    parent: 191,
    status: "5. Hold",
    name_singular: "improvement",
    display_singular: "Improvement",
    summary:
      "Continuous Improvement - Analysis of the current system and associated changes",
    description: null,
    nickname: "system-process-improvement",
  },
  {
    id: 192,
    parent: 19,
    status: "5. Hold",
    name_singular: "technology",
    display_singular: "Technology",
    summary: "Your business software, hardware and infrastructure stack",
    description: null,
    notes: `Your business software, hardware and infrastructure stack. 
    ADD 'DOWNTIME' TO A SUBMODULE HERE OR IN PRODUCT:
    If we become aware of (external but also internal) product with current downtime (from outage detectors - see product>deployment>usage>monitoring) or impending downtime (via alerts, emails or banners on websites), it should be added in (automatically where possible).
    Then it should automatically (via templates, if enabled) create tasks to inform stakeholders (internal or otherwise)
    We should also be able to track uptime % of internal and external services.
    `,
    nickname: "system-technology",
  },
  {
    id: 1920,
    parent: 192,
    status: "5. Hold",
    name_singular: "applications",
    display_singular: "Applications",
    description: null,
    summary: "Programs, apps and other tools",
    nickname: "system-technology-applications",
  },
  {
    id: 19200,
    parent: 1920,
    status: "5. Hold",
    name_singular: "productivity",
    display_singular: "Productivity",
    nickname: "system-technology-applications-productivity",
    description: "Office software",
    summary: "Word Processors, Spreadsheets, etc.",
  },
  {
    id: 19201,
    parent: 1920,
    status: "5. Hold",
    name_singular: "utility",
    display_singular: "Utility",
    nickname: "system-technology-applications-utility",
    summary: "System and Performance Tools",
    description: null,
  },
  {
    id: 19202,
    parent: 1920,
    status: "5. Hold",
    name_singular: "collaboration",
    display_singular: "Collaboration",
    nickname: "system-technology-applications-collaboration",
    description: "Communication Tools",
    summary: "Messaging, Meetings and other comms tools",
  },
  {
    id: 19204,
    parent: 1920,
    status: "5. Hold",
    name_singular: "lineofbusiness",
    display_singular: "Line Of Business",
    description: null,
    nickname: "system-technology-applications-lineofbusiness",
    summary: "LOB & industry specific software",
  },
  {
    id: 1921,
    parent: 192,
    status: "5. Hold",
    name_singular: "hosting",
    display_singular: "Hosting",
    summary: "Storage of and access to computing resources",
    description: null,
    nickname: "system-technology-hosting",
  },
  {
    id: 19210,
    parent: 1921,
    status: "5. Hold",
    name_singular: "storage",
    display_singular: "Storage",
    summary: null,
    description: null,
    nickname: "system-technology-hosting-storage",
  },
  {
    id: 19211,
    parent: 1921,
    status: "5. Hold",
    name_singular: "websites",
    display_singular: "Websites",
    summary: null,
    description: null,
    nickname: "system-technology-hosting-websites",
  },
  {
    id: 192110,
    parent: 19211,
    status: "5. Hold",
    name_singular: "ecommerce",
    display_singular: "Ecommerce",
    description: null,
    nickname: "system-technology-hosting-websites-ecommerce",
    summary: "Online stores",
  },
  {
    id: 192111,
    parent: 19211,
    status: "5. Hold",
    name_singular: "corporate",
    display_singular: "Corporate",
    nickname: "system-technology-hosting-websites-corporate",
    description: null,
    summary: "Landing pages, company information and general online presence",
  },
  {
    id: 1921112,
    parent: 19211,
    status: "5. Hold",
    name_singular: "blog",
    display_singular: "Blog",
    description: null,
    nickname: "system-technology-hosting-websites-blog",
    summary: "Posts, news, magazines and other content",
  },
  {
    id: 1921113,
    parent: 19211,
    status: "5. Hold",
    name_singular: "forum",
    display_singular: "Forum",
    description: null,
    nickname: "system-technology-hosting-websites-forum",
    summary:
      "discussions, user generated content and other community engagement",
  },
  {
    id: 1921114,
    parent: 19211,
    status: "5. Hold",
    name_singular: "repository",
    display_singular: "Repository",
    description: null,
    nickname: "system-technology-hosting-websites-repository",
    summary: "media, data and other accessible content storage",
  },
  {
    id: 19212,
    parent: 1921,
    status: "5. Hold",
    name_singular: "access",
    display_singular: "Access",
    description: null,
    summary: null,
    nickname: "system-technology-hosting-access",
  },
  {
    id: 192120,
    parent: 19212,
    status: "5. Hold",
    name_singular: "authentication",
    display_singular: "Authentication",
    description: null,
    summary: null,
    nickname: "system-technology-hosting-access-authentication",
  },
  {
    id: 1922,
    parent: 192,
    status: "5. Hold",
    name_singular: "network",
    display_singular: "Network",
    summary:
      "Linked Systems for sharing resources, exchanging files and allowing electronic communications",
    description: null,
    nickname: "system-technology-network",
  },
  {
    id: 19220,
    parent: 1922,
    status: "5. Hold",
    name_singular: "servers",
    display_singular: "Servers",
    nickname: "system-technology-network-servers",
    summary: "onsite, remote or co-lo servers",
    description: null,
  },
  {
    id: 19221,
    parent: 1922,
    status: "5. Hold",
    name_singular: "lan",
    display_singular: "LAN",
    nickname: "system-technology-network-lan",
    summary: "local area networks",
    description: null,
  },
  {
    id: 19222,
    parent: 1922,
    status: "5. Hold",
    name_singular: "wan",
    display_singular: "WAN",
    description: null,
    nickname: "system-technology-network-wan",
    summary: "wide area network access, routers, internet links, 5G failovers",
  },
  {
    id: 19223,
    parent: 1922,
    status: "5. Hold",
    description: null,
    summary: null,
    name_singular: "cabling&wireless&switching",
    display_singular: "Cabling & Wireless & Switching",
    nickname: "system-technology-network-cabling&wireless&switching",
  },
  {
    id: 1923,
    parent: 192,
    status: "5. Hold",
    name_singular: "continuation",
    display_singular: "Continuation",
    description:
      "Disaster Recovery and preventuion of interruptions to operations",
    summary:
      "Disaster prevention, fire protection, backups, test restores, live recovery, snapshots and file retrieval",
    notes: `[
      "Accounting package backup: Xero/Control C (https://www.control-c.com/), Quickbooks (https://quickbooks.intuit.com/ca/resources/finance-accounting/how-to-back-up-quickbooks-for-your-small-business/), myob (https://help.myob.com/wiki/display/ar/Back+up+your+company+file) etc.",
    ]`,
    nickname: "system-technology-continuation",
  },
  {
    id: 19230,
    parent: 1923,
    status: "5. Hold",
    name_singular: "backups",
    description: null,
    summary: null,
    display_singular: "Backups",
    nickname: "system-technology-continuation-backups",
  },
  {
    id: 19231,
    parent: 1923,
    status: "5. Hold",
    name_singular: "recovery",
    display_singular: "Recovery",
    description: "Snapshot or granular restoration for business continuity",
    summary: "Disaster Recovery",
    nickname: "system-technology-continuation-recovery",
  },
  {
    id: 1924,
    parent: 192,
    status: "5. Hold",
    name_singular: "protection",
    display_singular: "Protection",
    nickname: "system-technology-protection",
    description: "Protection, Privacy and Security",
    summary:
      "Firewalling, security policies, SPAM/scam/phishing protection, employee & user awareness, Antivirus and anti-malware",
  },
  {
    id: 193,
    parent: 19,
    status: "5. Hold",
    name_singular: "resources",
    display_singular: "Resources",
    description: null,
    summary: "Tools, consumables, roles and other resources",
    nickname: "system-resources",
  },
  {
    id: 1930,
    parent: 193,
    status: "5. Hold",
    name_singular: "packages",
    display_singular: "Packages",
    summary:
      "Components, functions and other atomic declarations that you can compile into tools",
    description: null,
    nickname: "system-resources-packages",
  },
  {
    id: 19301,
    parent: 1930,
    status: "5. Hold",
    name_singular: "importer",
    display_singular: "Importer",
    summary: "Finding and importing packages for use by the business",
    description: null,
    nickname: "system-resources-packages-importer",
  },
  {
    id: 19301,
    parent: 1930,
    status: "5. Hold",
    name_singular: "library",
    display_singular: "Library",
    summary: "View and manage existing package declarations",
    description: null,
    nickname: "system-resources-packages-library",
  },
  {
    id: 19302,
    parent: 1930,
    status: "5. Hold",
    name_singular: "builder",
    display_singular: "Builder",
    summary:
      "Configuration of declarations into new package components and other declarations",
    description:
      "Pass config settings / props / arguments into package declarations to create custom components",
    nickname: "system-resources-packages-builder",
  },
  {
    id: 19303,
    parent: 1930,
    status: "5. Hold",
    name_singular: "compiler",
    display_singular: "Compiler",
    summary: "Compile package declarations into tools, apps and websites",
    description: null,
    nickname: "system-resources-packages-compiler",
  },
  {
    id: 19304,
    parent: 1930,
    status: "5. Hold",
    name_singular: "publisher",
    display_singular: "Publisher",
    summary: "Launching of compiled tools",
    description: "Publish your compilations to System-Technology-Applications",
    nickname: "system-resources-packages-publisher",
  },
  {
    id: 1931,
    parent: 193,
    status: "5. Hold",
    name_singular: "consumables",
    display_singular: "Consumables",
    summary: "Commodities that you obtain and use up",
    description: null,
    nickname: "system-resources-consumables",
  },
  {
    id: 1932,
    parent: 193,
    status: "5. Hold",
    name_singular: "tools",
    display_singular: "Tools",
    description: "Compile tools & equipment into your systems",
    summary: "Hardware, Software and other equipment",
    nickname: "system-resources-tools",
  },
  {
    id: 1933,
    parent: 193,
    status: "5. Hold",
    name_singular: "functions",
    display_singular: "Functions",
    description:
      "Use & compile atomic skills/certifications needed to construct your systems",
    summary:
      "Management and usage of the skills and roles that you have at your disposal",
    nickname: "system-functions-functions",
  },
  {
    id: 194,
    parent: 19,
    status: "5. Hold",
    name_singular: "develop",
    display_singular: "Develop",
    description: null,
    summary:
      "Digital transformation, site setups, technology deployments, software development and other systems creations",
    nickname: "system-functions-develop",
  },
];

// TRANSFORMATIONS

// console.info('data',data.filter(x=>!x.display_singular))
// const newData = data.map((x,i)=>x={
//     ...x,
//     type: 'Area',
//     class: 'Category',
//     categoryid:
// })
// console.info('newData',newData)

// function prepCategoriesForEntryIntoDatabase(){
//     let dataWithNewIds = []
//     data.forEach((x)=>{
//         let item = x;
//         item.type='Area';
//         item.class='Category';
//         item.title = x.display_singular;
//         item.oldid = x.id;
//         item.oldparent = x.parent;
//         delete item.parent; delete item.id;
//         item.id = createUuid4();
//         dataWithNewIds.push(item)
//     })
//     let dataWithNewParents = []
//     dataWithNewIds.forEach((y)=>{
//         let item = y;
//         item.parent = dataWithNewIds.find(z=>z.oldid===item.oldparent)?.id
//         dataWithNewParents.push(item)
//     })
//     let entitiesToCreate = dataWithNewParents.map(z=>z={
//         title: z.title,
//         status: z.status,
//         type: z.type,
//         class: z.class

//     })
//     let relationshipsToCreate = []
//     console.info('dataWithNewParents',dataWithNewParents)
//     console.info('entitiesToCreate',entitiesToCreate)
//     console.info('relationshipsToCreate',relationshipsToCreate)
// }
// prepCategoriesForEntryIntoDatabase()

// const newData = data;
// export {newData}

// console.info(data.filter(x=>x.id>99999))?.length();

// import { createUuid4, typeUuid4, validateUuid4 } from './uuid' // note that we generate the id for tables here on the client / edge side (not the cloud db side), so that we can make immediate/optimistic changes to the ui & cache.

// console.info(createUuid4())
// function processdatum (inputid){
//     let datum = data.find(x=>x.id===inputid)
//     let item = inputid+'//';delete datum?.id
//     item = item+(datum?.parent||'')+'//'; delete datum?.parent
//     item = item+(datum?.title||'')+'//'; delete datum?.title
//     item = item+(datum?.status||'')+'//'; delete datum?.status
//     item = item+(datum?.description||'')+'//'; delete datum?.description
//     item = item+(datum?.name_singular||'')+'//'; delete datum?.name_singular
//     item = item+(datum?.name_plural||'')+'//'; delete datum?.name_plural
//     item = item+(datum?.display_singular||'')+'//'; delete datum?.display_singular
//     item = item+(datum?.display_plural||'')+'//'; delete datum?.display_plural
//     item = item+(JSON.stringify(datum)||'')
//     return item
// }

// let entities = []
// for(var org=1;org<5;org++){
//     // var datum = data.find(x=>x.id===org)
//     // var item = org+'//'
//     // item = item+(datum?.parent||'')+'//'; delete datum?.parent
//     // item = item+(datum?.title||'')+'//'; delete datum?.title
//     // item = item+(datum?.status||'')+'//'; delete datum?.status
//     // item = item+(datum?.description||'')+'//'; delete datum?.description
//     // item = item+(datum?.name_singular||'')+'//'; delete datum?.name_singular
//     // item = item+(datum?.name_plural||'')+'//'; delete datum?.name_plural
//     // item = item+(datum?.display_singular||'')+'//'; delete datum?.display_singular
//     // item = item+(datum?.display_plural||'')+'//'; delete datum?.display_plural
//     // item = item+(JSON.stringify(datum)||'')
//     // entities.push(item)
//     entities.push(processdatum(org))
//     for(var area=1;area<9;area++){
//         // ids.push(Number(''+org+area));
//         entities.push(processdatum(area))

//         for(var process=1;process<5;process++){
//             // ids.push(Number(''+org+area+process));
//             entities.push(processdatum(process))

//             for(var procedure=1;procedure<5;procedure++){
//                 // ids.push(Number(''+org+area+process+procedure));
//                 entities.push(processdatum(procedure))

//                 for(var step=1;step<5;step++){
//                     // ids.push(Number(''+org+area+process+procedure+step));
//                     entities.push(processdatum(step))

//                     for(var instruction=1;instruction<5;instruction++){
//                         // ids.push(Number(''+org+area+process+procedure+step+instruction));
//                         entities.push(processdatum(instruction))

//                     }

//                 }

//             }

//         }

//     }

// }
// console.info(entities.join(','))
// console.info(data);
// let dataTable = {
//     'other':[],
//     'id':[],
//     'parent':[],
//     'status':[],
//     'name_singular':[],
//     'name_plural':[],
//     'display_singular':[],
//     'display_plural':[],
//     'description':[]
// }
// let keys = Object.keys(dataTable)

// for(var i=0;i<data.length;i++){

//     let d = data[i]; // the item from the array that we will get the data from

//     for(var j=0;j<keys.length;j++){ // for each property (id, parent etc.)
//         dataTable[keys[j]].push(d[keys[j]] || null);    // add
//         delete d[keys[j]];
//     }

//     dataTable.other.push(JSON.stringify(d) || null);
// }
// // console.info('dataTable',dataTable.id.join());

// let ids = []

// for(var org=1;org<5;org++){
//     var datum = data.find(x=>x.id===org)
//     var item = org+'//'
//     item = item+(datum?.parent||'')+'//'; delete datum?.parent
//     item = item+(datum?.title||'')+'//'; delete datum?.title
//     item = item+(datum?.status||'')+'//'; delete datum?.status
//     item = item+(datum?.description||'')+'//'; delete datum?.description
//     item = item+(datum?.name_singular||'')+'//'; delete datum?.name_singular
//     item = item+(datum?.name_plural||'')+'//'; delete datum?.name_plural
//     item = item+(datum?.display_singular||'')+'//'; delete datum?.display_singular
//     item = item+(datum?.display_plural||'')+'//'; delete datum?.display_plural
//     item = item+(JSON.stringify(datum)||'')
//     ids.push(item)
//     // ids.push(org+'//'+(org.parent+'//'+org.title+'//'+org.description);

//     // for(var area=1;area<9;area++){
//     //     ids.push(Number(''+org+area));

//     //     for(var process=1;process<5;process++){
//     //         ids.push(Number(''+org+area+process));

//     //         for(var procedure=1;procedure<5;procedure++){
//     //             ids.push(Number(''+org+area+process+procedure));

//     //             for(var step=1;step<5;step++){
//     //                 ids.push(Number(''+org+area+process+procedure+step));

//     //                 for(var instruction=1;instruction<5;instruction++){
//     //                     ids.push(Number(''+org+area+process+procedure+step+instruction));

//     //                 }

//     //             }

//     //         }

//     //     }

//     // }

// }
// // console.info(ids.join(','))

// const properties = ["id","name_singular","name_plural","display_singular","display_plural","parent","status","description"]

// // function to loop through all the objects and find all properties
// function miscProperties() {
//     for(var i=0;i<data.length;i++){
//         const oldObj = data[i];
//         // Object.keys(oldObj)
//     }
//     return data
// }

// console.info('miscProperties',miscProperties())

// //
// function getUniqueTopLevelProperties(objectsArray) {
//     const propertiesSet = new Set();

//     objectsArray.forEach((obj) => {
//       Object.keys(obj).forEach((property) => {
//         if(!properties.includes(property)) {propertiesSet.add(property);}
//       });
//     });

//     return Array.from(propertiesSet);
//   }

// console.info('getUniqueTopLevelProperties',getUniqueTopLevelProperties(data))

// // show any items that are missing properties
// function getMissingPropertyItems(objectsArray) {
//     let newArr = []
//     objectsArray.forEach((obj) => {
//         // if(!obj['subheading'] && obj.id <100){newArr.push(obj.id)}
//         if(!obj['display_singular']){newArr.push(obj.id)}
//         // properties.forEach((property)=>{if(!obj[property]){newArr.push(obj.id)}})
//     });
//     return newArr
//   }

// console.info('getMissingPropertyItems',getMissingPropertyItems(data))

// const nicknamed = ()=> {
//     let newData = []
//     data.forEach((x)=>{
//         const parent = data.find(y=>y.id===x.parent)
//         const pnick =  x.id > 99 && parent.name_singular
//         const grandparent = data.find(z=>z.id===parent?.parent)
//         const gnick =  x.id > 999 && grandparent.name_singular
//         newData.push({
//             ...x,
//             nickname: (gnick ? gnick +'-' :'') + (pnick ? pnick +'-' :'') + x.name_singular

//         })
//     })
//     return newData
//         // const nicknames = data.map(x=>x={
//         //     ...x,
//         //     nickname:
//         //         (x?.grandparentobj?.name_singular ? (x?.grandparentobj?.name_singular + '-'):'')
//         //         + (x?.parentobj?.name_singular ? (x?.parentobj?.name_singular + '-'):'')
//         //         + x.name_singular,

//         // })
//         // return nicknames
// }
// console.info(nicknamed())

// console.log(arrayFrameworkBusiness.filter(x=>x.id.toString().charAt(0)==='1'))

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// MISSING OR NEEDING CLARIFICATION/EXPLICT WORDING:
// Legal Compliance: Although governance is included, specific modules for different types of legal compliance (e.g., GDPR, HIPAA) are not present.
// Disaster Recovery: There is no mention of a plan or module to handle disasters, either natural or man-made.
// Sustainability: No module for sustainability and corporate social responsibility (CSR).
// Mergers & Acquisitions: Strategy and integration planning for mergers and acquisitions.
// Supply Chain: Detailed modules for managing the supply chain are not visible.
// Quality Assurance: Not just in software but in all business processes.
// Ethics: A module focusing on ethical considerations in various business aspects.
// Corporate Social Responsibility (CSR): Ethical and societal responsibilities of the business.
// Intellectual Property Management: Handling patents, trademarks, and copyrights.
// Business Continuity Planning: Ensuring that business processes can continue during a time of emergency or disaster.
// Sustainability Initiatives: Detailed modules for environmental sustainability could be added.
// Global Expansion Strategy: If applicable, strategies and considerations for global market expansion.
// Internal Communications: While "communications" might cover external communications, an internal focus could be beneficial.
// Data Governance: Management and security of company data.
// Employee Wellness Programs: Beyond just benefits and HR considerations.
// Cybersecurity: Specifics on threat detection, mitigation, and response strategies.
// Investor Relations: Managing and communicating with the shareholder community.
// Ethics and Compliance Training: Specific training modules for employees on ethical behavior and compliance.
// Market Research: Explicit modules for conducting and analyzing market research.
// Customer Experience Management: Beyond customer service, a focus on the entire customer journey.
// Digital Transformation: Strategy and execution of digitizing traditional business operations.
// Competitive Analysis: Detailed analysis of competitors, their products, and market positioning.
// Crisis Management
// Digital Transformation: Strategy and execution for digitizing traditional business aspects.
// R&D Management: Management of research and development activities.
// Government Relations: Managing interactions with government
// Mergers & Acquisitions Strategy: Planning and execution of M&As.
// Social Media Management: A separate module dedicated to handling various social media channels.
// Crisis Communications: Detailed procedures for external and internal communication during a crisis.
// Lobbying Activities: For businesses that require influencing public policy.
// Whistleblower Policies: Processes for safely reporting unethical or illegal activities.
// Sustainable Sourcing: For businesses focusing on sustainable or ethical sourcing.
// Knowledge Management: Systems to maintain and utilize institutional knowledge.
// AI and Automation Strategy: Given the increasing role of AI, a focused module may be necessary.
// Change Management: Detailed strategies for managing organizational change.
// Fraud Detection and Prevention: Procedures to detect and prevent fraudulent activities.
// Multi-Channel Marketing: Strategies for managing various marketing channels in unison.
// Export and Import Compliance: Necessary if business involves international trade.
// Fraud Detection and Prevention: Specifics on identifying and combating fraudulent activities.
// Multi-Channel Marketing: Comprehensive strategies for utilizing various marketing channels.
// Export and Import Compliance: If the business engages in international trade, compliance aspects could be detailed.
// Cross-Departmental Collaboration
// Export and Import Compliance: Regulations and requirements for international trade.
// Cross-Departmental Collaboration: Mechanisms to enhance inter-departmental collaboration.
// Public Relations Strategy: More focused than general communications, specifically for public image.
// Conflict Resolution Mechanisms: Internal procedures to resolve conflicts between staff or departments.
// Remote Work Policies: Guidelines and strategies for remote work.
// Data Privacy: Specific focus on customer and employee data privacy issues.
// Community Engagement: How the business interacts with the local or global community.
// Language and Localization Strategy: Guidelines for localizing products/services in different regions.
// Intellectual Property Audits: Regular assessments of intellectual property assets.
// Geo-Political Risk Assessment: Evaluating risks associated with operating in specific geographic or political areas.
// Economic Forecasting: Projections and preparatory actions based on economic indicators.
// Accessibility Standards: Ensuring all products or services meet accessibility guidelines.
// Patent Strategy: Specific focus on the strategy for obtaining and maintaining patents.
// Talent Pipelining: Proactive strategy for future hiring needs.
// Cultural Sensitivity Training: Specific training modules for global business dealings.
// Zero-Based Budgeting: A budgeting method that starts from zero each period.
// Influencer Partnerships: Strategies for collaborating with social media influencers.
// Carbon Footprint Reduction: Specific plans and goals for reducing the company's carbon footprint.
// Open Source Compliance: Guidelines for using and contributing to open source software.
// Anti-Corruption Policies: Detailed internal policies to prevent corruption and bribery.
// Scenario Planning: Comprehensive planning for different future business scenarios.
// Sovereign and Political Risks: Considerations for international businesses.
// Workplace Safety Guidelines: Beyond insurance and legal requirement
// Energy Management: Strategies for energy usage and efficiency.
// Post-Merger Integration: Strategies for the period following a merger or acquisition.

// CORRECTIONS
// OFFERINGS-MOVETOGOVERNANCEORACCOUNTS?: The name itself suggests it might be in the wrong place.
// Modules under personnel-employment-progression-skills and personnel-employment-progression-pathways appear twice. These could be a data issue, but if not, they should be consolidated.
// procurement-delivery-customs and procurement-delivery-arrival_notice appear to be duplicates and might need consolidation.

// SYSTEM STRUCTURE
// sites
// -sites/locations/renting/space planning/layouts/rooms/subletting/addresses
// -access, security, people.
// -furnishing
// -maintenance , cleaning & waste management
// -energy usage, utilities
// tools&consumables
// technology
// process&data&automation

// sites
// tools&consumables
// technology
// process&data&automation

// sites/space planning/layouts/rooms/subletting/addresses
// access, security
// furnishing
// maintenance , cleaning & waste management
// energy usage, utilities'

// Sites
// Security/Privacy/Safety
// - OHS, safety checklists, fire etc., emergencies
// - Access
// - Privacy
// - Security
// - CCTV/Montioring
// - Disaster Recovery, Safety plans
// Applications
// -
// Communications
// Resources
// - vehicles and transport.
// - furnishings
// - tools & equipment
// -- Office Supplies
// -- Specialized Equipment
// -- Computing equipment, workstations, servers, disks, peripherals, etc.
// - consumables
// Utilities
// - Energy/Gas/Power/Electricity
// -- generators, transformers, power,
// - Water
// - internet
// -
// Productivity
// - LOB softwrae
// - Office software
// -
// Information
// - data, info, knowledge, wisdom
// - manuals, policies, process, procedures, instructions
// - automation and workflows

// FACILITIES
// Facilities refer to the physical spaces, amenities, and services that support the operations and activities of an organization. This includes buildings, equipment, utilities, infrastructure, and various other tangible assets and resources that enable an organization to function effectively. Facilities are often managed to ensure they meet the requirements for maintenance, safety, and operations.

// Consult
// Quarterly Business Review (inc. ‘Quarterly network health review’) and Roadmap
// Project Management*
// Network Design (‘Plan, design and implement computer networks’)*
// Site establishment and relocations*
// Website Development* and Website maintenance
// Support
// Phone, Email and Chat availability with response times as per your SOW
// Remote Monitoring & Management using N-central suite
// Network & Firewalling management (proactive and on demand)
// Rapid Remote Support through Solarwinds RMM
// Onsite Support* as per MSA
// After Hours Support* as per MSA
// Training services*
// Technical Advice for end users
// Vendor management
// Continue
// Integrated Backup Deployment of a Best Practice Solution & Process
// Round-the-clock Backup Management and Monitoring
// Business Continuity Reports (Capacity / Status / Trajectory)
// Disaster Recovery Testing (Qtrly/Monthly backup test restores)
// Verification Testing (e.g. daily integrity checks of the data)
// Offsite / Onsite storage mirroring to Secure Data Centre
// Rapid high priority restoration for minimal downtime in the event of an emergency
// Protect
// Round-the-clock AntiVirus & Malware Monitoring (‘Cyber Security Solution’)
// Patch Management and scheduled / priority based security updates
// Scheduled security reports
// Managed Audit (Monthly Vulnerability and PCI/Compliance Scans & Report)
// Security Process/Policy (Including Data Breach Process)
// Pen testing, external auditing
// Host
// Colocation*
// Cloud Hosting*
// Website Hosting*
// Email Hosting*
// Domain Name Services*
// Connect
// Communications & Internet Links
// Telephony, VOIP & Unified Communications solutions
// Exchange / O365 mail / Gmail for Business
// Email encryption
// Slack / MS Teams / other synchronous chat
// Videoconferencing, Skype et al
// Create
// Office Suite
// O365 Suite (Word, Excel) [or Google Suite?]
// LOB (Line of Business) Applications / Industry Specific Applications*
// Business Operations Applications (Accounts, Personnel, Product/Inventory/Procurement etc.)
// Equip
// Internal Network
// Printing and consumables
// Refurbishment and enhancement of your existing hardware fleet*
// Competitive purchase and rental of new hardware using official partnerships*
// Mobile and Workstation monitoring and proactive maintenance (mobile / workstation / updates etc.)
// Licensing*

// HOSTING AS A TOP/2ND LEVEL SYSTEM MODULE

// SOLUTIONS INTO GOVERNANCE, MOVE OTHER INTO SUBMODULE
