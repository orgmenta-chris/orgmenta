export const data: {
  id: number;
  parent: number | null;
  status: string;
  name_singular: string;
  display_singular: string;
  description: string;
  summary: string;
  nickname: string;
  notes?: string;
}[] = [
  {
    id: 1,
    parent: null,
    status: "3. Active",
    name_singular: "business",
    display_singular: "Business",
    summary: "Your Business in a Box. End-to-end data and services in one intuitive, unified platform",
    body: "<-- Select a service for more information or to sign up",
    description:
      "Collate and manage all areas of your business in simplified, powerful modules",
    subheading2:
      "Orgmenta's expert staff will package, automate and augment each area of your business",
    subheading3: "Business In a Box",
    calltoaction:
      "More comprehensive, expert, understandable and neater solutions than if you did it inhouse",
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
    description: "Create your business plan and use it to keep the business aiming in the right direction",
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
    id: 11001,
    parent: 1100,
    status: "5. Hold",
    name_singular: "mission",
    display_singular: "Mission",
    description:
      "Manage your mission statement / a clear summary of the purpose of the business",
    summary:
      "Analygous to a peer reviewed scientific paper having an 'abstract'",
    nickname: "governance-model-plan-mission",
  },
  {
    id: 11001,
    parent: 1100,
    status: "5. Hold",
    name_singular: "values",
    display_singular: "Values",
    description: "Company/Organizational Values",
    summary:
      "What are your Brand values? Consider these to be products, as you are essentially selling 'trust' or other company values to all of your stakeholders.",
    nickname: "governance-model-plan-values",
  },
  {
    id: 11002,
    parent: 1100,
    status: "5. Hold",
    name_singular: "goals",
    display_singular: "Goals",
    description: "Company/Organizational Goals",
    summary: "Top level objectives / goals",
    nickname: "governance-model-plan-goals",
  },
  {
    id: 11003,
    parent: 1100,
    status: "5. Hold",
    name_singular: "justification",
    display_singular: "Justification",
    description:
      "Summary of market research and other proofs of viability/reasons for operating",
    summary: "",
    nickname: "governance-model-plan-justification",
  },
  {
    id: 11004,
    parent: 1100,
    status: "5. Hold",
    name_singular: "capital",
    display_singular: "Capital",
    description: "Summary of Accounts/Finance and other resources",
    summary:
      "Financial resources or assets employed to start, operate, and grow your business.",
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
    description: "Business structure / hierarchy",
    summary: null,
    nickname: "governance-model-structure",
  },
  {
    id: 11010,
    parent: 1101,
    status: "5. Hold",
    name_singular: "ownership",
    display_singular: "ownership",
    description: "Business ownership structures",
    summary:
      "C-Corp / LLC / Sole Trader or Proprietorship / Partnership Cooperative / Umbrella & holding corps / Franchise / Non-profit / Charity / etc.",
    nickname: "governance-model-structure-ownership",
    types: [
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
    ],
  },
  {
    id: 1102,
    parent: 110,
    status: "5. Hold",
    name_singular: "jurisdictions",
    display_singular: "Jurisdictions",
    summary:
      "Where you are operating (unions, countries, states, counties, markets)",
    description: null,
    nickname: "governance-model-jurisdictions",
  },
  {
    id: 1103,
    parent: 110,
    status: "5. Hold",
    name_singular: "roadmap",
    display_singular: "Roadmap",
    description: null,
    summary: "Your company roadmap and timeline",
    nickname: "governance-model-roadmap",
  },
  {
    id: 1104,
    parent: 110,
    status: "5. Hold",
    name_singular: "growth",
    display_singular: "Growth",
    summary: null,
    description: null,
    nickname: "governance-model-growth",
  },
  {
    id: 111,
    parent: 11,
    status: "5. Hold",
    name_singular: "counsel",
    display_singular: "Counsel",
    description: null,
    summary: "Advice and consultation from specialist areas",
    nickname: "governance-counsel",
  },
  {
    id: 1110,
    parent: 111,
    status: "5. Hold",
    name_singular: "legal",
    display_singular: "Legal",
    description: "",
    summary: "",
    nickname: "governance-counsel-legal",
  },
  {
    id: 1111,
    parent: 111,
    status: "5. Hold",
    name_singular: "finance",
    display_singular: "Finance",
    description: "",
    summary: "The CFO role (Chief Financial Officer)",
    nickname: "governance-counsel-finance",
  },
  {
    id: 1112,
    parent: 111,
    status: "5. Hold",
    name_singular: "technology",
    display_singular: "Technology",
    description: "",
    summary:
      "The CIO role (Chief Information Officer) / CTO (Chief Technology Officer)",
    nickname: "governance-counsel-technology",
  },
  {
    id: 1113,
    parent: 111,
    status: "5. Hold",
    name_singular: "domain",
    display_singular:
      "Domain (or expertise, if we need the domain keyword reserved for domain purchases",
    description: "Consultation with industry experts",
    summary:
      "Bring expert consultation in for specialist advice (e.g. data center employees for a server move project)",
    nickname: "governance-counsel-domain",
  },
  {
    id: 1114,
    parent: 111,
    status: "5. Hold",
    name_singular: "strategy",
    display_singular: "Strategy",
    description: "Industry, business and marketing experts",
    summary: "",
    nickname: "governance-counsel-strategy",
  },
  {
    id: 112,
    parent: 11,
    status: "5. Hold",
    name_singular: "regulation",
    display_singular: "Regulation",
    description:
      "Permits, Auditing, accreditation, compliance and adhering to regulations",
    summary:
      "A central repository and manager to simplify all incorporatation, certification and regulation requirements",
    nickname: "governance-regulation",
  },
  {
    id: 1120,
    parent: 112,
    status: "5. Hold",
    name_singular: "incorporation",
    display_singular: "Incorporation",
    summary: null,
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
    description: null,
    nickname: "incorporation-general-licensing-license",
  },
  {
    id: 112001,
    parent: 11200,
    status: "5. Hold",
    name_singular: "trading-name-license",
    display_singular: "Trading Name License",
    summary: null,
    description: "License to trade as a name other than the legal entity name",
    nickname: "incorporation-general-licensing-trading-name-license",
  },
  {
    id: 112002,
    parent: 11200,
    status: "5. Hold",
    name_singular: "employer-identification",
    display_singular: "Employer Identification",
    summary: null,
    description:
      "E.g. EIN (US) - a number required for businesses with employees, certain types of legal structures, or other specific criteria",
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
    name_singular: "auditing",
    display_singular: "Auditing",
    description: null,
    summary: "Internal and external auditing",
    nickname: "governance-regulation-auditing",
  },
  {
    id: 1122,
    parent: 112,
    status: "5. Hold",
    name_singular: "accreditation",
    display_singular: "Accreditation",
    description: null,
    summary: "Licenses, Awards, Certification and Standards",
    nickname: "governance-regulation-accreditation",
  },
  {
    id: 1123,
    parent: 112,
    status: "5. Hold",
    name_singular: "submissions",
    display_singular: "Submissions",
    summary: null,
    description:
      "Submitting reports / data as directed by governmental departments and other bodies",
    nickname: "governance-regulation-submissions",
  },
  {
    id: 1124,
    parent: 112,
    status: "5. Hold",
    name_singular: "z",
    display_singular: "z",
    summary: null,
    description: null,
    nickname: "governance-regulation-z",
  },
  {
    id: 113,
    parent: 11,
    status: "5. Hold",
    name_singular: "metrics",
    display_singular: "Metrics",
    description: null,
    summary: "Your company roadmap and timeline",
    nickname: "governance-metrics",
  },
  {
    id: 1130,
    parent: 113,
    status: "5. Hold",
    name_singular: "scorecards",
    display_singular: "Scorecards",
    description: "Scorecards from different areas of the business",
    summary: "",
    nickname: "governance-metrics",
  },
  {
    id: 114,
    parent: 11,
    status: "5. Hold",
    name_singular: "executive",
    display_singular: "Executive",
    description: "Management and Executive decision making",
    summary:
      "Standardise and supercharge your decision making throughout the business",
    notes:` [
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
    summary: null,
    description: null,
    nickname: "governance-executive-management",
  },
  {
    id: 11410,
    parent: 1141,
    status: "5. Hold",
    name_singular: "stakeholdermanagement",
    display_singular: "Stakeholder Management",
    summary: null,
    description: null,
    nickname: "governance-executive-management-stakeholdermanagement",
  },
  {
    id: 1142,
    parent: 114,
    status: "5. Hold",
    name_singular: "accountability",
    display_singular: "Accountability",
    summary: null,
    description: "Mechanisms for assigning and tracking responsibilities",
    nickname: "governance-executive-accountability",
  },
  {
    id: 1143,
    parent: 114,
    status: "5. Hold",
    name_singular: "reports",
    display_singular: "Reports",
    description: "Report creations for the business's decision making",
    summary: null,
    nickname: "governance-executive-reports",
  },
  {
    id: 1144,
    parent: 114,
    status: "5. Hold",
    name_singular: "decisions",
    display_singular: "Decisions",
    description: "Decision Making",
    summary: null,
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
  },
  {
    id: 120,
    parent: 12,
    status: "5. Hold",
    name_singular: "ledger",
    display_singular: "Ledger",
    description: "Chart of accounts, bookkeeping and reporting",
    summary:
      "Simplify, manage and supercharge your chart of accounts and reporting",
    nickname: "accounts-ledger",
  },
  {
    id: 1200,
    parent: 120,
    status: "0. New",
    name_singular: "chart",
    display_singular: "Chart",
    summary: null,
    description:
      "Chart of Accounts, Budgets and other layouts, including the P&L and balance sheet",
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
    description:null,
    summary: "Individual accounts in the Chart of Accounts",
    nickname: "accounts-ledger-budgets-accounts",
  },
  {
    id: 12001,
    parent: 1200,
    status: "0. New",
    name_singular: "groupings",
    display_singular: "Grouping",
    description:null,
    summary: "Buckets for your chart of accounts",
    nickname: "accounts-ledger-budgets-groupings",
  },
  {
    id: 12002,
    parent: 1200,
    status: "0. New",
    name_singular: "schedules",
    display_singular: "Schedules",
    description:null,
    summary: "Depreciation and amortization schedules",
    nickname: "accounts-ledger-budgets-schedules",
  },
  {
    id: 1201,
    parent: 120,
    status: "0. New",
    name_singular: "budgets",
    display_singular: "Budgets",
    description: "",
    process: [
      "Set up P&L layout",
      "Set up Balance sheet layout",
      "Set up cash flow forecast layout",
      "Set up equity layout (shareholder equity report)",
    ],
    nickname: "accounts-ledger-budgets",
  },
  {
    id: 1202,
    parent: 120,
    status: "0. New",
    name_singular: "bookkeeping",
    display_singular: "Bookkeeping",
    summary:null,
    description: "Daily accural based bookkeeping",
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
    summary:null,
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
    summary:null,
    description:null,
    notes: "match/code transactions to bank statement lines",
    nickname: "ledger-bookkeeping-bank-reconciliation",
  },
  {
    id: 12031,
    parent: 1202,
    status: "0. New",
    name_singular: "adjustments",
    display_singular: "Adjustments",
    notes: "Acrruals, deferrals, depreciation, amortisation.",
    references: [
      "match/code transactionshttps://www.nerdwallet.com/article/small-business/adjusting-entries-accounting#:~:text=An%20adjusting%20entry%20is%20simply,the%20end%20of%20the%20year. to bank statement lines",
    ],
    nickname: "ledger-bookkeeping-adjustments",
  },
  {
    id: 1203,
    parent: 120,
    status: "0. New",
    name_singular: "statements",
    display_singular: "Statements",
    description:
      "Financial modelling: P&L, balance sheet, CFF and other ledger reporting",
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
    nickname: "accounts-ledger-statements",
    notes: `
              "IPO layout (Initial public offering model)", //https://the-cfo.io/2019/11/06/what-are-the-different-financial-models/
              "Discounted Cash Flow (DCF) and LBO Models", // https://www.investopedia.com/terms/d/dcf.asp, https://www.google.com/search?rlz=1C1CHBF_en-GBAU966AU967&q=LBO+Model+vs+dcf&spell=1&sa=X&ved=2ahUKEwjwzKrts6n4AhU_-jgGHeBJAOYQirwEKAB6BAgBEDI&biw=1229&bih=576&dpr=1.56
              "M&A Model"
              // "Review asset accounts",
              // "Review liability accounts",
              // "Review revenue accounts",
              // "Review expense accounts",`,
  },
  {
    id: 1204,
    parent: 120,
    status: "5. Hold",
    name_singular: "finalisations",
    display_singular: "Finalisations",
    description:
      "Closing the books: End of month, rollovers for the next month, period locks",
    process: [],
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
    notes: {},
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
    summary:
      "We collate and update your debtor details, help customers set up billing methods, and manage customer statements and plans",
    description: "Customer statements, payment plan templates, debtor details",
    price_unit: "debtor",
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
    },
    nickname: "accounts-receivables-debtors",
  },
  {
    id: 12100,
    parent: 1210,
    status: "0. New",
    name_singular: "debtor_setup",
    display_singular: "Debtor Setup",
    summary:null,
    description: "Set up / registration of the debtor's details in the system",
    notes:` [
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
    summary:null,
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
    summary:null,
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
    summary:null,
    description:null,
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
    summary: "",
    description: "",
    nickname: "receivables-debtors-risk",
  },
  {
    id: 121024,
    parent: 12102,
    status: "0. New",
    name_singular: "payment-plans",
    display_singular: "Payment Plans",
    summary: "",
    description: "",
    nickname: "debtors-risk-payment-plans",
  },
  {
    id: 12103,
    parent: 1210,
    status: "0. New",
    name_singular: "billing_setup",
    display_singular: "Billing Setup",
    summary:null,
    description: "Set up / maintain billing methods for the debtor",
    nickname: "receivables-debtors-billing_setup",
  },
  {
    id: 121030,
    parent: 12103,
    status: "0. New",
    name_singular: "billing_methods",
    display_singular: "Billing Methods",
    summary:null,
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
    summary:null,
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
    summary:null,
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
    summary:null,
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
    price_unit: "line item",
    summary: "Identify and maximise all of your potential & missing revenue",
    summary: "We predict, sanitize and prepare all of your queued invoicing",
    description:
      "Prediction, sanitisation and preparation of all queued invoicing",
    process: [
      "Identification: Maintain your invoicing pipeline in a clear, collated queue, with forecasted revenue figures",
      "Reconciliations: Update agreements and billing items according to customer usage, quantity changes and new charges.",
      "Preparation: Process items ready for invoicing according to conditions",
      "Sanitization: Adjust / tidy items according to rules, and push items back to the owner as necessary",
      "Matching: Match items to quotes and conditions, apply charges and ensure everything is captured for onbilling",
    ],
    notes: [
      "If you charge ad hoc labour, in what increments? (e.g. round up to the nearest 15 minutes)",
      "If you charge ad hoc labour, what are standard working hours (e.g. after hours rates before 8am and after 5pm",
      "For hardware, what shipping do you charge (e.g. onbill any vendor shipping at cost, standard margin applied, or standard flat rates per weight class)",
    ],
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
    subheading2:
      "We issue all of your invoices, downpayments, deposits and prepayments",
    description: "Issuing invoices to customers",
    summary:
      "Line items (Deposits/downpayments + products + charges + adjustments + discounts + tax + credits) are generated, processed, approved and invoiced to the customer",
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
    ],
    nickname: "accounts-receivables-invoicing",
  },
  {
    id: 12121,
    parent: 1212,
    status: "0. New",
    name_singular: "template",
    display_singular: "Template",
    description: "Template recurring / expected invoices",
    summary:null,
    notes: "create invoice templates etc.",
    nickname: "receivables-invoicing-template",
  },
  {
    id: 12122,
    parent: 1212,
    status: "0. New",
    name_singular: "generate",
    display_singular: "Generate",
    summary:null,
    description: "Generate invoices",
    nickname: "receivables-invoicing-generate",
  },
  {
    id: 12123,
    parent: 1212,
    status: "0. New",
    name_singular: "verify",
    display_singular: "Verify",
    summary:null,
    description:
      "Match the invoice against quotes etc. to validate it as correct. Get approval on it.",
    nickname: "receivables-invoicing-verify",
  },
  {
    id: 12124,
    parent: 1212,
    status: "0. New",
    name_singular: "ammendment",
    display_singular: "Ammendment",
    name_plural: "ammendments",
    display_plural: "Ammendments",
    name_verb: "ammend",
    display_verb: "Ammend",
    description:
      "Issue the invoice by sending it to the 'attention to' contact / bill-to organisation",
    nickname: "receivables-invoicing-ammendment",
  },
  {
    id: 12125,
    parent: 1212,
    status: "0. New",
    name_singular: "issue",
    display_singular: "Issue",
    summary:null,
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
    summary:
      "We issue invoice reminders, handle invoice queries and manage debtor communications",
    description: "",
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
    ],
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
    summary:null,
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
    summary:null,
    description: "Enable/disable statements for debtors or a specific debtor",
    nickname: "collections-statements-or-debtor-balances-statement-enable",
  },
  {
    id: 121302,
    parent: 12130,
    status: "0. New",
    name_singular: "statements-issue",
    display_singular: "Statements Issue",
    summary:null,
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
    process: [
      "Payment: Help customers to make payment (over the phone or via email / billing platform)",
      "Remittances: Process remittance advices / match to bank statements",
      "Reconcilations: Reconcile payments to the relevant invoices, and ensure line items are reconciled in the P&L correctly",
      "Followups: deposit/downpayment received (or any invoice payment) - alert/trigger any work that was on hold waiting for payment (e.g. product orders or jobs that required 50% downpayment/deposit)",
      "Reporting: Maintain remittance information on the receivables report",
    ],
    nickname: "accounts-receivables-settlements",
  },
  {
    id: 12140,
    parent: 1214,
    status: "0. New",
    name_singular: "overpayments",
    display_singular: "Overpayments",
    process: [
      "Record any overpaymnets (reconcile bank statement lines to overpayments if the customer has no balance due).",
      "Contact the customer if needed advising that we will kepe it on file and apply it to next invoices (preferred) or refund it to the customer",
      "Go through the overpayments list each week/month. Discuss any unresolved ones. Any action needed? Progress being made / it's being used up?",
    ],
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
    subheading2:
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
    notes: `[
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
    description: null,
    notes:` [
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
    summary:null,
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
    summary:null,
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
    summary:null,
    description:null,
    nickname: "payables-creditors-credit-lines",
  },
  {
    id: 12203,
    parent: 1220,
    status: "0. New",
    name_singular: "integrations",
    display_singular: "Integrations",
    summary:null,
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
    summary:null,
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
    process: [
      "Set up bill templates",
      "Set up bank rules",
      "Set up approval routing",
      "Set up and maintain repeating bills and payment bank rules",
    ],
    nickname: "accounts-payables-forecast",
  },
  {
    id: 1222,
    parent: 122,
    status: "0. New",
    name_singular: "bills",
    display_singular: "Bills",
    description: "Verifying and entering supplier charges",
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
    },
    nickname: "accounts-payables-bills",
  },
  {
    id: 12220,
    parent: 1222,
    status: "0. New",
    name_singular: "template",
    display_singular: "Template",
    summary:null,
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
    summary:null,
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
    summary:null,
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
    summary:null,
    description: "Validate the bill and its attributes",
    notes: "Compare the bill (three way match) and then approve it",
    nickname: "payables-bills-verify",
  },
  {
    id: 1223,
    parent: 122,
    status: "0. New",
    name_singular: "payments",
    display_singular: "Payments",
    description:
      "Obtaining approval for bills, and maintaining a payment timetable, make payments",
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
    },
    nickname: "accounts-payables-payments",
  },
  {
    id: 1224,
    parent: 122,
    status: "0. New",
    name_singular: "receipt",
    display_singular: "Receipt",
    description:
      "Reconcile the payment (bank statement line) against the transaction (bill line item) and close off the bill if paid",
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
    },
    nickname: "accounts-payables-receipt",
  },
  {
    id: 123,
    parent: 12,
    status: "5. Hold",
    name_singular: "finance",
    display_singular: "Finance",
    description:null,
    summary: "Management of cash, assets and liabilities",
    nickname: "accounts-finance",
  },
  {
    id: 1230,
    parent: 123,
    status: "5. Hold",
    name_singular: "investment",
    display_singular: "Investment",
    summary:null,
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
    summary:null,
    description:null,
    nickname: "accounts-finance-treasury",
  },
  {
    id: 1232,
    parent: 123,
    status: "5. Hold",
    name_singular: "financing",
    display_singular: "Financing",
    summary:null,
    description: "Loans and other forms of financing",
    nickname: "accounts-finance-financing",
  },
  {
    id: 1233,
    parent: 123,
    status: "5. Hold",
    name_singular: "banking",
    display_singular: "Banking",
    summary:null,
    description:null,
    nickname: "accounts-finance-banking",
  },
  {
    id: 124,
    parent: 12,
    status: "5. Hold",
    name_singular: "compliance",
    display_singular: "Compliance",
    summary:null,
    description:
      "End of month/year closures, P&L, Balance Sheet, Accounting compliance, tax submissions",
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
    summary:null,
    description:null,
    nickname: "accounts-compliance-tax",
  },
  {
    id: 12400,
    parent: 1240,
    status: "5. Hold",
    name_singular: "registration",
    display_singular: "Registration",
    summary:null,
    description: "Registration for GST/VAT/Payroll tax etc.",
    nickname: "compliance-tax-registration",
  },
  {
    id: 12401,
    parent: 1240,
    status: "5. Hold",
    name_singular: "filing",
    display_singular: "Filing",
    summary:null,
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
    summary:null,
    description:null,
    nickname: "accounts-compliance-regulation",
  },
  {
    id: 1242,
    parent: 124,
    status: "5. Hold",
    name_singular: "auditing",
    display_singular: "Auditing",
    summary:null,
    description:null,
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
    benefits: "",
    nickname: "product",
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
    description: "Create templates, fields and automation for yoru product catalog",
    nickname: "product-catalog-patterns",
  },
  {
    id: 13000,
    parent: 1300,
    status: "0. New",
    name_singular: "classification",
    display_singular: "Classification",
    description:null,
    summary: "Product types, categories and classes",
    // description: "",
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
    name_singular: "userroles",
    display_singular: "User Roles",
    description:
      "Stakeholder Groups that are affected. These compile all of the roles involved in user stories/ that have requested features / that have requirements",
    summary: "",
    nickname: "product-catalog-solutions-usecases-userroles",
  },
  {
    id: 13011,
    parent: 1301,
    status: "0. New",
    name_singular: "requirements",
    display_singular: "Requirements",
    description: "What requirements/needs the end user has for the product",
    summary: "Requirements can be determined in a Project>Control>Requirements",
    nickname: "product-catalog-solutions-requirements",
  },
  {
    id: 13012,
    parent: 1301,
    status: "0. New",
    name_singular: "features",
    display_singular: "Features",
    description: "What features the product has",
    summary: "features can be determined in a Project>Planning>Functionality",
    nickname: "product-catalog-solutions-features",
  },
  {
    id: 13013,
    parent: 1301,
    status: "0. New",
    name_singular: "constituents",
    display_singular: "Constituents",
    description: "Which components make up the product, and how",
    summary:
      "This maps the Product>Catalog>Components to the end product, i.e. 'how the parts fit together",
    nickname: "product-catalog-solutions-constituents",
  },
  {
    id: 13014,
    parent: 1301,
    status: "0. New",
    name_singular: "versions",
    display_singular: "Versions",
    description: "Versioning/roadmap/version control of the offering",
    summary:
      "This links Projects with Product>Catalog>Solutions>Features, i.e. what development and new versions/subfeatures are planned for this offering",
    nickname: "product-catalog-solutions-versions",
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
    summary: "",
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
    description: "Link components and dependencies to other parts of the catalog, and the business at large",
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
    summary:
      "Instances of products added into the catalog and fields filled",
    nickname: "product-catalog-entries",
  },
  {
    id: 1304,
    parent: 130,
    status: "0. New",
    name_singular: "retirals",
    display_singular: "Retirals",
    description: "Product end of life, upgrade paths and deactivation.",
    summary:
      "Manage product decommisions -Track the need for catalog products to be cycled/changed (e.g. obsolescense or unavailability). This may trigger the procuct>decomissioning procedure (e.g. retrievals of deployed customer equipment)",
    nickname: "product-catalog-retirals",
  },
  {
    id: 131,
    parent: 13,
    status: "0. New",
    name_singular: "procurement",
    display_singular: "Procurement",
    description: "Purchase requests & Purchase orders",
    summary: 'Procure products from suppliers',
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
    process: [
      "Verify purchase requests as necessary and with required attributes",
      "Reject requests / request further information where required",
      "Approve purchase requests for procurement",
    ],
    nickname: "product-procurement-requests",
  },
  {
    id: 13100,
    parent: 1310,
    status: "0. New",
    name_singular: "recognition",
    display_singular: "Recognition",
    description: "Product Needs Recognition",
    summary: 'Automatically list any products that may be needed',
    nickname: "procurement-requests-recognition",
  },
  {
    id: 13101,
    parent: 1310,
    status: "0. New",
    name_singular: "requisition",
    display_singular: "Requisition",
    description: "Purchase Requisitions confirmations",
    summary: 'Confirm the need to purchase the items being requested by your team',
    nickname: "procurement-requests-requisition",
  },
  {
    id: 13102,
    parent: 1310,
    status: "0. New",
    name_singular: "review",
    display_singular: "Review",
    summary: 'Reviews and approvals of product requests',
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
    summary: 'Announce the need for products to (potential) suppliers',
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
    process: [
      "Batch Purchase Requests & create Purchase Orders",
      "Compare pricing between suppliers",
      "Check stock availability",
      "Place orders with suppliers",
      "Populate and maintain order & tracking information on the Purchase Orders",
    ],
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
    summary: "Receiving confirmation of orders fromt the supplier",
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
    name_singular: "transit",
    display_singular: "Transit",
    summary: "The items that have been dispatched but have not yet arrived",
    description:
      "Track the items that have been dispatched and are in transit, i.e. on board for delivery. Tracked on a digital map, with audit logs and status updates.",
    nickname: "procurement-purchase-transit",
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
    process: [
      "Obtain delivery dockets from you and confirm receipt",
      "Validate and accept stock into inventory with serial numnbers and other attributes",
      "Trigger supplier bill matching & approvals as ready to be paid",
    ],
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
    summary: "Confirmation that the items are as requested and as per needs / required quality",
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
    description: "If the items are acceptable, sign for and take posession of the delivery",
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
    summary:"Management of held stock",
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
    id: 1324,
    parent: 132,
    status: "0. New",
    name_singular: "adjustments",
    display_singular: "Adjustments",
    description: "Adjust stock quantities up or down to reflect reality, e.g. when dealing with damaged or lost products",
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
    description: "Manage RMAs, Replacements, Recalls, EOLs, Retreivals and Disposals",
    nickname: "product-decommission",
  },
  {
    id: 1340,
    parent: 134,
    status: "0. New",
    name_singular: "deactivations",
    display_singular: "Deactivations",
    description:"Announcing product end of life, turning off functionality",
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
    description: "Reappropriate items from production back to full ownership by the business",
    summary: "Getting products back from the customer where necessary",
    nickname: "product-decommission-retrievals",
  },
  {
    id: 1344,
    parent: 134,
    status: "0. New",
    name_singular: "disposals",
    display_singular: "Disposals",
    summary:
      "Purging/archiving old products, and organising physical disposal/destruction where necessary",
    included: [
      "Organisation of physical disposals (e.g. e-waste collection, skips, standard garabage collection calendar)",
      "Sensitive information destruction",
      "Archiving / deleting old information",
      "Scheduling deletion of information according to retention regulations",
    ],
    nickname: "product-decommission-disposals",
  },
  {
    id: 14,
    parent: 1,
    status: "0. New",
    name_singular: "customer",
    display_singular: "Customer",
    summary: "Onboarding, Sales & Portal",
    description: "Management of your clients / consumers / users",
    nickname: "customer",
  },
  {
    id: 140,
    parent: 14,
    status: "0. New",
    name_singular: "lifecycle",
    display_singular: "Lifecycle",
    description: "Manage customer relationships through onboarding to offboarding",
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
    process: [
      "Capture all prospects and leads through all channels, forms etc.",
      "Enter prospects into the CRM as soon as they become known",
      "",
    ],
    nickname: "customer-lifecycle-prospects",
  },
  {
    id: 1401,
    parent: 140,
    status: "0. New",
    name_singular: "onboarding",
    display_singular: "Onboarding",
    summary: "Customers officially joining the business",
    description: "Manage onboarding checklists and fully integrate with your new customer",
    process: [
      "Maintain the customer onboarding process",
      "Move Prospective customers into Onboarding status as soon as proposals are successfully signed off",
      "Capture all necessary customer information",
      "Liaise with customers for any needed onboarding assistance",
    ],
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
    process: [
      "Move Onboarding customers into Retention/active status as soon as the onboarding process is complete",
      "Maintain the customer management procedures",
    ],
    nickname: "customer-lifecycle-retention",
  },
  {
    id: 1403,
    parent: 140,
    status: "0. New",
    name_singular: "watchlist",
    display_singular: "Watchlist",
    description: "Manage customer threats and mitigate any issues or risk of offboarding",
    summary: "Tracking customers that are not receiving the service they want",
    process: [
      "Set up and maintain the Watchlist triggers and procedures",
      "Move customers onto the Watchlist (from active status) if any red flags are triggered",
      "Assist to resolve watchlist issues, with the aim of improving the health of the customer relationship",
      "Move customers to 'Active' if the relationship is deemed repaired and the customer deemed not to be a risk",
    ],
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
    process: [
      "Set up and maintain the Watchlist triggers and procedures",
      "Move the customer to Offboarding status when it becomes known that the relationship will be terminated",
      "Undertake offboarding steps",
      "Finalise contracts/agreements/billing",
      "Assist with handover of information to the customer and third parties",
      "Archive the customer when fully offboarded",
    ],
    nickname: "customer-lifecycle-offboarding",
  },
  {
    id: 141,
    parent: 14,
    status: "0. New",
    name_singular: "sales",
    display_singular: "Sales",
    summary: "Leads, Quoting, Proposals and Commitment",
    description: "Create opportunities from Leads, and use proposals to make deals with your customers",
    nickname: "customer-sales",
  },
  {
    id: 1410,
    parent: 141,
    status: "0. New",
    name_singular: "leads",
    display_singular: "Leads",
    summary: "Track prospective sales",
    description: "Process potential customer deals and derive quotes/proposals from them",
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
    description: null,
    summary: 'Getting confirmation and signoff on deals',
    nickname: "customer-sales-commitment",
  },
  {
    id: 142,
    parent: 14,
    status: "0. New",
    name_singular: "relationships",
    display_singular: "Relationships",
    summary: 'Delivery, Support, Service, Disputes and Help',
    description: "Manage customer relationships, agreements/contracts and services rendered",
    nickname: "customer-relationships",
  },
  {
    id: 1420,
    parent: 142,
    status: "0. New",
    name_singular: "agreements",
    display_singular: "Agreements",
    summary:"Customer contracts",
    description: "Manage agreements, agreement items and other commitments to the customer",
    nickname: "customer-relationships",
  },
  {
    id: 1421,
    parent: 142,
    status: "0. New",
    name_singular: "support",
    display_singular: "Support",
    summary:"Customer support assistance",
    description:"Provide services and support to your customers",
    nickname: "customer-relationships-support",
  },
  {
    id: 1422,
    parent: 142,
    status: "0. New",
    name_singular: "information",
    display_singular: "Information",
    summary:"Manage customer information",
    description:"Keep client data comprehensive and maintained",
    included: [
      "site management (address and location changes)",
      "contact management (people, roles and contact methods)",
      "preferences management (notes, instructions and special information)",
      "agreements (service level agreements, KPIs and rules)",
    ],
    nickname: "customer-relationships-information",
  },
  {
    id: 1423,
    parent: 142,
    status: "0. New",
    name_singular: "disputes",
    display_singular: "Disputes",
    summary:"Pre-empting, Avoiding, Acknowledging and Mitigating disagreements with the customer",
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
    description:"Making sure that your services are adding appropriate value and enabling the customer",
    summary: "Customer Experience, Pulse and Development",
    nickname: "customer-success",
  },
  {
    id: 1430,
    parent: 143,
    status: "5. Hold",
    name_singular: "reviews",
    display_singular: "Reviews",
    description:"Undertake reviews of the customer and your relationshp with them",
    summary: "QBRs (Quarterly business reviews), and other assessments",
    nickname: "customer-success",
  },
  {
    id: 144,
    parent: 14,
    status: "5. Hold",
    name_singular: "programs",
    display_singular: "Programs",
    summary: null,
    description:
      "Loyalty, Rewards and Incentives for sales, referrals and other customer interactions",
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
  },
  {
    id: 150,
    parent: 15,
    status: "0. New",
    name_singular: "chain",
    display_singular: "Chain",
    summary: 'Supply chain managment',
    description: "Map the supply chain",
    nickname: "supplier-chain",
  },
  {
    id: 151,
    parent: 15,
    status: "0. New",
    name_singular: "affiliations",
    display_singular: "Affiliations",
    summary: 'Supplier Relationships',
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
    summary: 'Supplier Relationship contracts',
    description:
      "Apply for vendor accounts and lines of credit, establish partner relationships",
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
    },
    nickname: "supplier-affiliations-partnership",
  },
  {
    id: 152,
    parent: 15,
    status: "0. New",
    name_singular: "purchases",
    display_singular: "Purchases",
    summary: 'Management of orders placed with the supplier',
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
    summary: 'Obtaining assistance from suppliers',
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
    summary: 'Ways in which the supplier assists your business',
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
    name_singular: "returns",
    display_singular: "Returns",
    summary: 'Return of products to suppliers',
    description: 'Organise and track product returns',
    nickname: "supplier-support-returns",
  },
  {
    id: 1533,
    parent: 153,
    status: "5. Hold",
    name_singular: "programs",
    display_singular: "Programs",
    summary: 'Partner/Supplier programs',
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
    summary: 'Partner/Supplier performance',
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
    name_singular: "structure",
    display_singular: "Structure",
    summary: "Organizational Structure",
    description: "Company hierarchy / chain of command / report-to",
    nickname: "employment-roles-structure",
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
    summary:
      "Location/responsibility transfers, changes to responsibilities",
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
    id: 1603,
    parent: 160,
    status: "5. Hold",
    name_singular: "development",
    display_singular: "Development",
    description: null,
    summary: "Employee training, development and progression opportunities",
    nickname: "personnel-development",
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
    nickname: "personnel-development-performance",
  },
  {
    id: 160300,
    parent: 16030,
    status: "5. Hold",
    name_singular: "tracking",
    display_singular: "Tracking",
    description: null,
    summary: "Performance tracking",
    nickname: "personnel-development-performance-tracking",
  },
  {
    id: 160301,
    parent: 16030,
    status: "5. Hold",
    name_singular: "management",
    display_singular: "Management",
    description: null,
    summary: "Performance management and improvement",
    nickname: "personnel-development-performance-management",
  },
  {
    id: 160302,
    parent: 16030,
    status: "5. Hold",
    name_singular: "reviews",
    display_singular: "Reviews",
    description: null,
    summary: "Performance reviews",
    nickname: "personnel-development-performance-reviews",
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
    nickname: "personnel-development-performance-x",
  },
  {
    id: 160304,
    parent: 16030,
    status: "5. Hold",
    name_singular: "y",
    display_singular: "y",
    summary: null,
    description: null,
    nickname: "personnel-development-performance-y",
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
    nickname: "personnel-development-training",
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
    nickname: "personnel-development-engagement",
  },
  {
    id: 16030,
    parent: 1603,
    status: "5. Hold",
    name_singular: "skills",
    display_singular: "Skills",
    description: "Career Pathways",
    summary: "A module to explore and outline potential career progressions.",
    nickname: "personnel-development-skills",
  },
  {
    id: 16030,
    parent: 1603,
    status: "5. Hold",
    name_singular: "pathways",
    display_singular: "Pathways",
    description: "Foster personnel skills and maintain a directory for resource planning",
    summary: "Skills & Certifications",
    nickname: "personnel-development-skills",
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
    description: "Employee availability, attendance and timesheets",
    summary: null,
    features: [
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
    summary: null,
    description: 'Tracing, Submissions and Approvals of Timesheets',
    nickname: "personnel-attendance-timesheets",
  },
  {
    id: 16130,
    parent: 1613,
    status: "0. New",
    name_singular: "timeentries",
    display_singular: "Time Entries",
    summary: null,
    description: 'Enter records of work done',
    nickname: "personnel-attendance-timesheets-timeentries",
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
    summary: 'Personnel Taxation',
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
    summary: 'Paying your employees',
    description: null,
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
    },
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
    description: null,
    summary:
      "Employee wellbeing and assisting unions/employee support organisations/other third parties",
    nickname: "personnel-welfare",
  },
  {
    id: 164,
    parent: 16,
    status: "5. Hold",
    name_singular: "assignments",
    display_singular: "Assignments",
    description: null,
    summary: null,
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
    id: 1641,
    parent: 164,
    status: "5. Hold",
    name_singular: "meetings",
    display_singular: "Meetings",
    description: null,
    summary: null,
    nickname: "personnel-assignments-meetings",
  },
  {
    id: 1642,
    parent: 164,
    status: "5. Hold",
    name_singular: "deliverables",
    display_singular: "Deliverables",
    description: null,
    summary: "Events / Tasks / Deliverables / Work",
    nickname: "personnel-assignments-deliverables",
  },
  {
    id: 1643,
    parent: 164,
    status: "5. Hold",
    name_singular: "functions",
    display_singular: "Functions",
    description: "responsibilities and jobs to fulfil",
    summary:
      "track and manage the things that make one successful in their role",
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
      scope is an issue here, because it's not just Personnel that is affected - Other stakeholders are too. This would make more sense in Systems.`
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
    summary: "Campaigns, Engagement and Branding",
    description: "Marketing, branding and community engagement",
    nickname: "market",
  },
  {
    id: 170,
    parent: 17,
    status: "0. New",
    name_singular: "brands",
    display_singular: "Brands",
    summary: null,
    description: "Your company brand, USP, image, logo and design guidelines",
    nickname: "market-brands",
  },
  {
    id: 1700,
    parent: 170,
    status: "0. New",
    name_singular: "graphics",
    display_singular: "Graphics",
    summary: 'Logos and other design assets',
    description: null,
    nickname: "market-brands-graphics",
  },
  {
    id: 1701,
    parent: 170,
    status: "0. New",
    name_singular: "assets",
    display_singular: "Assets",
    summary: 'Domains and other assets',
    description: null,
    nickname: "market-brands-assets",
  },
  {
    id: 171,
    parent: 17,
    status: "5. Hold",
    name_singular: "industry",
    display_singular: "Industry",
    summary: null,
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
    notes:`
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
    process: [1, 2, 3],
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
    name_singular: "project",
    display_singular: "Project",
    summary: "Service Desk & Projects",
    description:
      "Management of all the production (all work/tasks) that is undertaken in the business.\nTrack all of your projects & service tickets, with optional best practice libraries (ITIL, PMBOK, Prince2, ISO:9001, etc.)",
    nickname: "project",
  },
  {
    id: 180,
    parent: 18,
    status: "0. New",
    name_singular: "control",
    display_singular: "Control",
    description: null,
    summary: "Project control, quality and change management",
    nickname: "project-control",
  },
  {
    id: 1800,
    parent: 180,
    status: "0. New",
    name_singular: "quality",
    display_singular: "Quality",
    description: null,
    summary: "Quality Assurance and Control",
    nickname: "project-control-quality",
  },
  {
    id: 18000,
    parent: 1800,
    status: "0. New",
    name_singular: "qualitycontrol",
    display_singular: "Quality Control",
    description: null,
    summary: null,
    nickname: "project-control-quality-qualitycontrol",
  },
  {
    id: 18001,
    parent: 1800,
    status: "0. New",
    name_singular: "qualityassurance",
    display_singular: "Quality Assurance",
    description: null,
    summary: null,
    nickname: "project-control-quality-qualityassurance",
  },
  {
    id: 1801,
    parent: 180,
    status: "0. New",
    name_singular: "changes",
    display_singular: "Changes",
    description: null,
    summary: "Change Requests and Management",
    nickname: "project-control-changes",
  },
  {
    id: 1802,
    parent: 180,
    status: "0. New",
    name_singular: "progress",
    display_singular: "Progress",
    summary:
      "Project progress monitoring, using data from project-planning-schedule and other modules",
    description: "Project monitoring, progress & status management / plotting",
    notes: `[
      "https://prince2.wiki/theme/progress/",
      "https://www.pmi.org/learning/library/anatomy-highly-effective-status-report-2198",
    ]`,
    nickname: "project-control-progress",
  },
  {
    id: 1803,
    parent: 180,
    status: "0. New",
    name_singular: "projection",
    display_singular: "Projection",
    description: null,
    summary: "Project forecasting",
    nickname: "project-control-projection",
  },
  {
    id: 1804,
    parent: 180,
    status: "0. New",
    name_singular: "risk",
    display_singular: "Risk",
    description: null,
    summary: null,
    nickname: "project-control-risk",
  },
  {
    id: 181,
    parent: 18,
    status: "0. New",
    name_singular: "response",
    display_singular: "Response",
    summary: null,
    description:
      "Project stakeholder management, requirements analysis and communications",
    notes:` [
      "Triage requests (internally or externally created), set up projects and bundle tasks",
      "Process incoming communications and reply to stakeholders",
      "Maintain stakeholder lists for all tasks",
      "Maintain production coordination report",
    ]`,
    nickname: "project-response",
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
    nickname: "project-response-initiation",
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
    process: [
      "Review an item",
      "Create/ List entities/link entities and relationships from it (e.g. derive new contacts, tasks etc.)",
      "Undertake any immediate tasks",
      "Update any stakeholders / reply where appropriate",
    ],
    nickname: "project-response-triage",
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
    description: null,
    summary:
      "Set the impact and urgency. The SLA/SLO (Service Level Agreement / Objectives - Response times) should ideally be set automatically from the prioritization, else set manually.",
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
    nickname: "project-response-stakeholders",
  },
  {
    id: 18120,
    parent: 1812,
    status: "0. New",
    description: null,
    name_singular: "stakeholderidentification",
    display_singular: "Stakeholder Identification",
    summary: "Add any relevant stakeholders to the ticket",
    nickname: "project-response-stakeholders-stakeholderidentification",
  },
  {
    id: 18120,
    parent: 1812,
    status: "0. New",
    name_singular: "stakeholderlist",
    display_singular: "Stakeholderlist",
    description: null,
    summary: "Maintain the stakeholder list",
    nickname: "project-response-stakeholders-stakeholderlist",
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
    nickname: "project-response-requirements",
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
    nickname: "project-response-requirements-assignprocesses",
  },
  {
    id: 18131,
    parent: 1813,
    status: "0. New",
    name_singular: "establishrequirements",
    display_singular: "Establish Requirements",
    description: "List the necessary requirements",
    summary: null,
    nickname: "project-response-requirements-establishrequirements",
  },
  {
    id: 1814,
    parent: 181,
    status: "0. New",
    name_singular: "communications",
    display_singular: "Communications",
    summary: null,
    description: null,
    nickname: "project-response-communications",
  },
  {
    id: 182,
    parent: 18,
    status: "0. New",
    name_singular: "planning",
    display_singular: "Planning",
    description: null,
    summary: "Project designing, resource allocation and scheduling",
    nickname: "project-planning",
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
    nickname: "project-planning-investigations",
  },
  {
    id: 18200,
    parent: 1820,
    status: "0. New",
    name_singular: "gather",
    display_singular: "Gather",
    description: "Collect all needs/requirements/information",
    summary: "Collate all of the things that need to be solved",
    nickname: "project-planning-investigations-gather",
  },
  {
    id: 18201,
    parent: 1820,
    status: "0. New",
    name_singular: "scope",
    display_singular: "Scope",
    description: "Define the scope of the project",
    summary: "Analygous to PMBOK scope management",
    nickname: "project-planning-investigations-scope",
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
    nickname: "project-planning-investigations-logic",
  },
  {
    id: 182020,
    parent: 18202,
    status: "0. New",
    name_singular: "heuristics",
    display_singular: "Heuristics ",
    description: "Guiding principles intended to simplify reasoning",
    summary: "Anchoring, Representativeness, Availability and other heuristics",
    nickname: "project-planning-investigations-logic-heuristics",
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
    nickname: "project-planning-investigations-logic-axioms",
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
    nickname: "project-planning-investigations-logic-fallacies",
  },
  {
    id: 182023,
    parent: 18202,
    status: "0. New",
    name_singular: "inferrences",
    display_singular: "Inferrences",
    description: "Conclusions reached on the basis of evidence and reasoning",
    summary: "Formal Systems, Rules of Inferrence, syllogisms etc.",
    nickname: "project-planning-investigations-logic-inferrences",
  },
  {
    id: 182024,
    parent: 18202,
    status: "0. New",
    name_singular: "proofs",
    display_singular: "Proofs",
    description:
      "Proof techniques, Arguments and other justifications/validations",
    summary: "",
    nickname: "project-planning-investigations-logic-proofs",
  },
  {
    id: 1821,
    parent: 182,
    status: "0. New",
    name_singular: "functionality",
    display_singular: "Functionality",
    description:null,
    summary: "Lay out the necessary user stories / use cases / features",
    nickname: "project-planning-functionality",
  },
  {
    id: 1822,
    parent: 182,
    status: "0. New",
    name_singular: "designs",
    display_singular: "Designs",
    description:null,
    summary: "Proposals for a solution consisting of deliverables",
    nickname: "project-planning-designs",
  },
  {
    id: 1823,
    parent: 182,
    status: "0. New",
    name_singular: "resourcing",
    display_singular: "Resourcing",
    summary:null,
    description: "Request & allocate resources for the project/ticket",
    nickname: "project-planning-resourcing",
  },
  {
    id: 1824,
    parent: 182,
    status: "0. New",
    name_singular: "schedule",
    display_singular: "Schedule",
    description: "Calendaring all resources (Plotting resources against time)",
    summary: "Allocate resources in order to schedule the Project>Execution",
    nickname: "project-planning-schedule",
  },
  {
    id: 183,
    parent: 18,
    status: "0. New",
    name_singular: "execution",
    display_singular: "Execution",
    description:null,
    summary: "Project implementation & installations",
    nickname: "project-execution",
  },
  {
    id: 1830,
    parent: 183,
    status: "0. New",
    name_singular: "fulfilment",
    display_singular: "Fulfilment",
    description:null,
    summary: "delivering the resources as stated in the design phase",
    nickname: "project-execution-fulfilment",
  },
  {
    id: 1831,
    parent: 183,
    status: "0. New",
    name_singular: "x",
    display_singular: "x",
    description:null,
    summary:null,
    nickname: "project-execution-x",
  },
  {
    id: 1832,
    parent: 183,
    status: "0. New",
    description:null,
    summary:null,
    name_singular: "documentation",
    display_singular: "Documentation",
    nickname: "project-execution-documentation",
  },
  {
    id: 1833,
    parent: 183,
    status: "0. New",
    name_singular: "implementation",
    display_singular: "Implementation",
    description: "Implement the deliverable",
    summary:
      "With change approval where necessary (Project>Control>Change), undertake the installation/deployment of the product.",
    nickname: "project-execution-implementation",
  },
  {
    id: 1834,
    parent: 183,
    status: "0. New",
    name_singular: "testing",
    display_singular: "Testing",
    description: "Tests and validation for the solution/deliverable",
    summary:
      "Tests and validation, rollbacks for failed tests, monitoring periods to confirm fixes",
    nickname: "project-execution-testing",
  },
  {
    id: 18340,
    parent: 1834,
    status: "0. New",
    name_singular: "tests",
    display_singular: "Tests",
    description: "Undertake testing and validation",
    summary: `
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
    nickname: "project-execution-testing-tests",
  },
  {
    id: 18341,
    parent: 1834,
    status: "0. New",
    name_singular: "rollbacks",
    display_singular: "Rollbacks",
    description:null,
    summary:null,
    nickname: "project-execution-testing-rollbacks",
  },
  {
    id: 184,
    parent: 18,
    status: "0. New",
    name_singular: "evaluation",
    display_singular: "Evaluation",
    description:null,
    summary: "Reporting, Analysis, Handover, Documentation, Training",
    references: ["See pmbok project closure (and other libraries)"],
    nickname: "project-evaluation",
  },
  {
    id: 1840,
    parent: 184,
    status: "0. New",
    name_singular: "handover",
    display_singular: "Handover",
    summary:null,
    description:
      "Project documentation, training, handover, acceptance, evaluation and closure",
    nickname: "project-evaluation-handover",
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
    nickname: "project-evaluation-handover-package",
  },
  {
    id: 18401,
    parent: 1840,
    status: "0. New",
    name_singular: "induction",
    display_singular: "Induction",
    description:null,
    summary:
      "Training users/teams that are inheriting or using the project deliverables",
    nickname: "project-evaluation-handover-training",
  },
  {
    id: 1841,
    parent: 184,
    status: "0. New",
    name_singular: "analysis",
    display_singular: "Analysis",
    description:null,
    summary:
      "Reporting and analysis of work done, including lessons learned",
    nickname: "project-evaluation-analysis",
  },
  {
    id: 1842,
    parent: 184,
    status: "0. New",
    name_singular: "x",
    display_singular: "x",
    summary:null,
    description:null,
    nickname: "project-evaluation-x",
  },
  {
    id: 1843,
    parent: 184,
    status: "0. New",
    name_singular: "y",
    display_singular: "y",
    summary:null,
    description:null,
    nickname: "project-evaluation-y",
  },
  {
    id: 1844,
    parent: 184,
    status: "0. New",
    name_singular: "closure",
    display_singular: "Closure",
    description:null,
    summary:
      "Acceptance and closure of the work done (by all stakeholders)",
    nickname: "project-evaluation-closure",
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
    nickname: "project-evaluation-closure-release",
  },
  {
    id: 18441,
    parent: 1844,
    status: "0. New",
    name_singular: "archiving",
    display_singular: "Archiving",
    description: "File away any completed entities",
    summary:
      "Storing all project-related documents, codes, and other deliverables in a systematic manner for future reference.",
    nickname: "project-evaluation-closure-archiving",
  },
  {
    id: 18442,
    parent: 1844,
    status: "0. New",
    name_singular: "checklist",
    display_singular: "Checklist",
    description:null,
    summary: "Completion and compliance checklist",
    nickname: "project-evaluation-closure-checklist",
  },
  {
    id: 18443,
    parent: 1844,
    status: "0. New",
    name_singular: "signoff",
    display_singular: "Signoff",
    description:null,
    summary: "Acceptance and signoff from all stakeholders",
    nickname: "project-evaluation-closure-signoff",
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
    nickname: "project-evaluation-closure-completion",
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
  },
  {
    id: 190,
    parent: 19,
    status: "5. Hold",
    name_singular: "AUTOMATION+WORKFLOWS",
    display_singular: "AUTOMATION+WORKFLOWS",
    summary:null,
    description: "Add in automation and workflows (to be confirmed where)",
    nickname: "system-AUTOMATION+WORKFLOWS",
  },
  {
    id: 190,
    parent: 19,
    status: "5. Hold",
    name_singular: "OFFERINGS-MOVETOGOVERNANCEORACCOUNTS?",
    display_singular: "OFFERINGS-MOVETOGOVERNANCEORACCOUNTS?",
    description: "Management of your company offerings (products / services)",
    summary:null,
    notes: `[
      "Work with you to establish and maintain core offerings (products & services)",
      "Set and maintain rates, and schedule pricing reviews annually or more frequently",
      "Maintain customer/marketing facing offerings & pricing materials",
      "Provide reporting on core offerings and their successes/issues",
    ]`,
    nickname: "system-offerings",
  },
  {
    id: 1900,
    parent: 190,
    status: "5. Hold",
    name_singular: "products_and_services",
    display_singular: "Products & Services",
    description: "Determine what your company offers",
    summary:
      "Compilation of the Product > Catalog (and dictates what products/components are designed and obtained in Product>Catalog",
    nickname: "system-offerings-products_and_services",
  },
  {
    id: 1901,
    parent: 190,
    status: "5. Hold",
    name_singular: "prices",
    display_singular: "Prices",
    description: "Set prices for products and services you are selling",
    summary:
      "Either manual price changes or automatic contract increases (e.g. contracts that stipulate that prices will be increased by inflation+3% YoY.)",
    nickname: "system-offerings-prices",
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
    parent: 1901,
    status: "5. Hold",
    name_singular: "elasticity",
    display_singular: "Elasticity",
    description:
      "Price Elasticity Modeling / Revenue Optimization - planning for how changes in price will impact demand (and consequently, revenue)",
    summary:
      "The act of planning for prices and how they will relate to revenue (e.g. if we raise prices from x to y what will the impact on demand be?). In economics and business, this is often related to the concept of 'price elasticity of demand', which quantifies how sensitive the quantity demanded of a good is to a change in price",
    nickname: "system-offerings-prices-elasticity",
  },
  {
    id: 19011,
    parent: 1901,
    status: "5. Hold",
    name_singular: "discretion",
    display_singular: "Discretion",
    description: "Discount Strategy",
    summary:
      "Leeway and allowed fluctuations on RRP/ Gross Profit. For example, a salesperson might be allowed to reduce GP to 10% to get a deal over the line",
    nickname: "system-offerings-prices-discretion",
  },
  {
    id: 19012,
    parent: 1901,
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
    nickname: "system-offerings-prices-banding",
  },
  {
    id: 19013,
    parent: 1901,
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
    nickname: "system-offerings-prices-modifications",
  },
  {
    id: 19014,
    parent: 1901,
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
    nickname: "system-offerings-prices-awareness",
  },
  {
    id: 191,
    parent: 19,
    status: "5. Hold",
    name_singular: "process",
    display_singular: "Process",
    description:
      "Your business manual and official source of truth for all operations",
    summary: [
      "Create and maintain a company manual, compiling all business processes into a single source of truth",
      "Maintain business processes, submit change requests, obtain approval for procedure changes",
      "Maintain company dictionary/language https://howtoprofessionallysay.akashrajpurohit.com/",
    ],
    process: ["procedures", "knowledgebase", "changes", "training"],
    nickname: "system-process",
  },
  {
    id: 1910,
    parent: 191,
    status: "5. Hold",
    name_singular: "instructions",
    display_singular: "Instructions",
    description:null,
    summary: "work instructions for step by step guides",
    nickname: "system-process-instructions",
  },
  {
    id: 1911,
    parent: 191,
    status: "5. Hold",
    name_singular: "procedures",
    display_singular: "Procedures",
    summary:null,
    description:null,
    nickname: "system-process-procedures",
  },
  {
    id: 1912,
    parent: 191,
    status: "5. Hold",
    name_singular: "procedures",
    display_singular: "Procedures",
    summary:null,
    description:null,
    nickname: "system-process-processes",
  },
  {
    id: 1913,
    parent: 191,
    status: "5. Hold",
    name_singular: "policies",
    display_singular: "Policies",
    summary:null,
    description:null,
    nickname: "system-process-policies",
  },
  {
    id: 1914,
    parent: 191,
    status: "5. Hold",
    name_singular: "manual",
    display_singular: "Manual",
    description:
      "the collation of all processes into a single reference point for all stakeholders (stakeholder types are authorised to view specific docs or parts of docs)",
    summary:null,
    nickname: "system-process-manual",
  },
  {
    id: 192,
    parent: 19,
    status: "5. Hold",
    name_singular: "technology",
    display_singular: "Technology",
    summary:null,
    description:null,
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
    summary:null,
    description:null,
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
    description: "System and Performance Tools",
    summary: "",
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
    description:null,
    nickname: "system-technology-applications-lineofbusiness",
    summary: "LOB & industry specific software",
  },
  {
    id: 1921,
    parent: 192,
    status: "5. Hold",
    name_singular: "hosting",
    display_singular: "Hosting",
    summary:null,
    description:null,
    nickname: "system-technology-hosting",
  },
  {
    id: 19210,
    parent: 1921,
    status: "5. Hold",
    name_singular: "storage",
    display_singular: "Storage",
    summary:null,
    description:null,
    nickname: "system-technology-hosting-storage",
  },
  {
    id: 19211,
    parent: 1921,
    status: "5. Hold",
    name_singular: "websites",
    display_singular: "Websites",
    summary:null,
    description:null,
    nickname: "system-technology-hosting-websites",
  },
  {
    id: 192110,
    parent: 19211,
    status: "5. Hold",
    name_singular: "ecommerce",
    display_singular: "Ecommerce",
    description:null,
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
    description:null,
    summary:
      "Landing pages, company information and general online presence",
  },
  {
    id: 1921112,
    parent: 19211,
    status: "5. Hold",
    name_singular: "blog",
    display_singular: "Blog",
    description:null,
    nickname: "system-technology-hosting-websites-blog",
    summary: "Posts, news, magazines and other content",
  },
  {
    id: 1921113,
    parent: 19211,
    status: "5. Hold",
    name_singular: "forum",
    display_singular: "Forum",
    description:null,
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
    description:null,
    nickname: "system-technology-hosting-websites-repository",
    summary: "media, data and other accessible content storage",
  },
  {
    id: 19212,
    parent: 1921,
    status: "5. Hold",
    name_singular: "access",
    display_singular: "Access",
    description:null,
    summary:null,
    nickname: "system-technology-hosting-access",
  },
  {
    id: 192120,
    parent: 19212,
    status: "5. Hold",
    name_singular: "authentication",
    display_singular: "Authentication",
    description:null,
    summary:null,
    nickname: "system-technology-hosting-access-authentication",
  },
  {
    id: 1922,
    parent: 192,
    status: "5. Hold",
    name_singular: "network",
    display_singular: "Network",
    description:null,
    summary:null,
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
    description:null,
  },
  {
    id: 19221,
    parent: 1922,
    status: "5. Hold",
    name_singular: "lan",
    display_singular: "LAN",
    nickname: "system-technology-network-lan",
    summary: "local area networks",
    description:null,
  },
  {
    id: 19222,
    parent: 1922,
    status: "5. Hold",
    name_singular: "wan",
    display_singular: "WAN",
    description:null,
    nickname: "system-technology-network-wan",
    summary: "wide area network access, routers, internet links, 5G failovers",
  },
  {
    id: 19223,
    parent: 1922,
    status: "5. Hold",
    description:null,
    summary:null,
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
    description:null,
    summary:null,
    display_singular: "Backups",
    nickname: "system-technology-continuation-backups",
  },
  {
    id: 19231,
    parent: 1923,
    status: "5. Hold",
    name_singular: "recovery",
    display_singular: "Recovery",
    description:'Snapshot or granular restoration for business continuity',
    summary:'Disaster Recovery',
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
    description:null,
    summary: "Facilities, consumables, roles and other resources",
    nickname: "system-resources",
  },
  {
    id: 1930,
    parent: 193,
    status: "5. Hold",
    name_singular: "facilities",
    display_singular: "Facilities",
    description:null,
    summary: "Management of all sites, infrastructure and internal tools",
    nickname: "system-resources-facilities",
  },
  {
    id: 19300,
    parent: 1930,
    status: "5. Hold",
    name_singular: "sites",
    display_singular: "Sites",
    summary:null,
    description: "Manage all of your sites/addresses",
    nickname: "system-resources-facilities-sites",
  },
  {
    id: 19301,
    parent: 1930,
    status: "5. Hold",
    name_singular: "furnishings",
    display_singular: "Furnishings",
    summary:null,
    description:null,
    nickname: "system-resources-facilities-furnishings",
  },
  {
    id: 19302,
    parent: 1930,
    status: "5. Hold",
    name_singular: "features",
    display_singular: "Features",
    summary:null,
    description:
      "Manage the features available to your sites (e.g conference rooms)",
    nickname: "system-resources-facilities-features",
  },
  {
    id: 1931,
    parent: 193,
    status: "5. Hold",
    name_singular: "consumables",
    display_singular: "Consumables",
    summary:null,
    description:null,
    nickname: "system-resources-consumables",
  },
  {
    id: 1932,
    parent: 193,
    status: "5. Hold",
    name_singular: "tools",
    display_singular: "Tools",
    description: "Tools & equipment",
    summary: "hardware",
    nickname: "system-resources-consumables",
  },
  {
    id: 1933,
    parent: 193,
    status: "5. Hold",
    name_singular: "functions",
    display_singular: "Functions",
    description: "Management of all the jobs/roles that your business requires",
    summary: "The skills and roles that you have at your disposal",
    nickname: "system-functions",
  },
  {
    id: 194,
    parent: 19,
    status: "5. Hold",
    name_singular: "data",
    display_singular: "DATA_MOVEINTOPROCESS?",
    summary:null,
    description:null,
    nickname: "system-data",
    notes: `[
      "sync (ensure data is synchronising between applications / repositories)",
      "audit (data should be reviewed annually - Items not used in the last FY can be archived. Items not used within 7/10/as-per-legislation years can be destroyed)",
      "maintenance (BAU process of updating items as the need becomes known. includes tagging/categorising where useful",
    ]`,
  },
  {
    id: 1940,
    parent: 194,
    status: "5. Hold",
    name_singular: "data",
    display_singular: "Data",
    summary:null,
    description:null,
    nickname: "system-data-data",
  },
  {
    id: 1941,
    parent: 194,
    status: "5. Hold",
    name_singular: "information",
    display_singular: "Information",
    summary:null,
    description:null,
    nickname: "system-data-information",
  },
  {
    id: 1942,
    parent: 194,
    status: "5. Hold",
    name_singular: "knowledge",
    display_singular: "Knowledge",
    summary:null,
    description:null,
    nickname: "system-data-knowledge",
  },
  {
    id: 1943,
    parent: 194,
    status: "5. Hold",
    name_singular: "wisdom",
    display_singular: "Wisdom",
    summary:null,
    description:null,
    nickname: "system-data-wisdom",
  },
  {
    id: 2,
    parent: null,
    status: "3. Active",
    name_singular: "personal",
    display_singular: "Personal",
    summary: "Yourself",
    description: "Manage personal items & coordination",
    nickname: "personal",
  },
  {
    id: 20,
    parent: 2,
    status: "3. Active",
    name_singular: "wellbeing",
    display_singular: "Wellbeing",
    summary: "Self / Personal welfare and care",
    description:null,
    nickname: "wellbeing",
  },
  {
    id: 200,
    parent: 20,
    status: "3. Active",
    name_singular: "health",
    display_singular: "Health",
    summary: "Healthcare & Medical",
    description:null,
    nickname: "wellbeing-health",
  },
  {
    id: 2000,
    parent: 200,
    status: "3. Active",
    name_singular: "hygiene",
    display_singular: "Hygiene",
    summary: "Personal care",
    description:null,
    nickname: "wellbeing-health-hygiene",
  },
  {
    id: 2001,
    parent: 200,
    status: "3. Active",
    name_singular: "medical",
    display_singular: "Medical",
    summary:null,
    description:null,
    nickname: "wellbeing-health-medical",
  },
  {
    id: 2002,
    parent: 200,
    status: "3. Active",
    name_singular: "rest",
    display_singular: "Rest",
    summary:null,
    description:null,
    nickname: "wellbeing-health-rest",
  },
  {
    id: 2003,
    parent: 200,
    status: "3. Active",
    name_singular: "sexual",
    display_singular: "Sexual",
    summary:null,
    description:null,
    nickname: "wellbeing-health-sexual",
  },
  {
    id: 2004,
    parent: 200,
    status: "3. Active",
    name_singular: "vices",
    display_singular: "Vices",
    summary:null,
    description:null,
    nickname: "wellbeing-health-vices",
  },
  {
    id: 201,
    parent: 20,
    status: "3. Active",
    name_singular: "fitness",
    display_singular: "Fitness",
    summary: "Personal training, body fitness, exercise",
    description:null,
    nickname: "wellbeing-fitness",
  },
  {
    id: 202,
    parent: 20,
    status: "3. Active",
    name_singular: "mental",
    display_singular: "Mental",
    summary: "mind",
    description:null,
    nickname: "wellbeing-mental",
  },
  {
    id: 203,
    parent: 20,
    status: "3. Active",
    name_singular: "nutrition",
    display_singular: "Nutrition",
    description: "Food & Drink",
    summary:null,
    nickname: "wellbeing-nutrition",
  },
  {
    id: 204,
    parent: 20,
    status: "3. Active",
    name_singular: "style",
    display_singular: "Style",
    summary:null,
    description: "Fashion, clothing and accessories",
    nickname: "wellbeing-style",
  },
  {
    id: 21,
    parent: 2,
    status: "3. Active",
    name_singular: "estate",
    display_singular: "Estate",
    summary:null,
    description: "Property & Inventory",
    nickname: "estate",
  },
  {
    id: 210,
    parent: 21,
    status: "3. Active",
    name_singular: "possessions",
    display_singular: "Possessions",
    summary:null,
    description:null,
    nickname: "estate-possessions",
  },
  {
    id: 211,
    parent: 21,
    status: "3. Active",
    name_singular: "finance",
    display_singular: "Finance",
    summary:null,
    description:null,
    nickname: "estate-finance",
  },
  {
    id: 22,
    parent: 2,
    status: "3. Active",
    name_singular: "organisation",
    display_singular: "Organisation",
    summary:null,
    description:
      "Administration, planning, structure, data processing and other coordination",
    nickname: "organisation",
  },
  {
    id: 220,
    parent: 22,
    status: "3. Active",
    name_singular: "system",
    display_singular: "System",
    summary:null,
    description:null,
    nickname: "organisation-system",
  },
  {
    id: 221,
    parent: 22,
    status: "3. Active",
    name_singular: "tax",
    display_singular: "Tax",
    summary:null,
    description:null,
    nickname: "organisation-tax",
  },
  {
    id: 222,
    parent: 22,
    status: "3. Active",
    name_singular: "livingadmin",
    display_singular: "livingadmin",
    summary:null,
    description:null,
    nickname: "organisation-livingadmin",
  },
  {
    id: 2220,
    parent: 222,
    status: "3. Active",
    name_singular: "acommodation",
    display_singular: "Acommodation",
    summary:null,
    description:null,
    nickname: "organisation-acommodation",
  },
  {
    id: 2221,
    parent: 222,
    status: "3. Active",
    name_singular: "travel",
    display_singular: "Travel",
    summary:null,
    description:null,
    nickname: "organisation-travel",
  },
  {
    id: 223,
    parent: 22,
    status: "3. Active",
    name_singular: "admin",
    display_singular: "Admin",
    summary:null,
    description:null,
    nickname: "organisation-admin",
  },
  {
    id: 224,
    parent: 22,
    status: "3. Active",
    name_singular: "journal",
    display_singular: "Journal",
    summary:null,
    description:null,
    nickname: "organisation-journal",
  },
  {
    id: 23,
    parent: 2,
    status: "3. Active",
    name_singular: "relationships",
    display_singular: "Relationships",
    summary: "Social",
    description:null,
    nickname: "relationships",
  },
  {
    id: 230,
    parent: 23,
    status: "3. Active",
    name_singular: "communications",
    display_singular: "Communications",
    summary:null,
    description:null,
    nickname: "relationships-communications",
  },
  {
    id: 24,
    parent: 2,
    status: "3. Active",
    name_singular: "world",
    display_singular: "World",
    description:null,
    summary: "Community, charity, government",
    nickname: "world",
  },
  {
    id: 25,
    parent: 2,
    status: "3. Active",
    name_singular: "leisure",
    display_singular: "Leisure",
    description:null,
    summary: "Recreation, hobbies, interests, pastimes, activites",
    nickname: "leisure",
  },
  {
    id: 251,
    parent: 25,
    status: "3. Active",
    name_singular: "media",
    display_singular: "Media",
    summary: "Music, film etc.",
    description:null,
    nickname: "leisure-media",
  },
  {
    id: 252,
    parent: 25,
    status: "3. Active",
    name_singular: "activities",
    display_singular: "Activities",
    summary: "Sport and activities",
    description:null,
    nickname: "leisure-activities",
  },
  {
    id: 26,
    parent: 2,
    status: "3. Active",
    name_singular: "learning",
    display_singular: "Learning",
    summary: "Education",
    description:null,
    nickname: "learning",
  },
  {
    id: 27,
    parent: 2,
    status: "3. Active",
    name_singular: "work",
    display_singular: "Work",
    description:null,
    summary: "Business & Income",
    nickname: "work",
  },
  {
    id: 270,
    parent: 27,
    status: "3. Active",
    name_singular: "jobseeking",
    display_singular: "Jobseeking",
    summary:null,
    description:null,
    nickname: "work-jobseeking",
  },
  {
    id: 2700,
    parent: 270,
    status: "3. Active",
    name_singular: "resume",
    display_singular: "Resume",
    summary:null,
    description:null,
    nickname: "work-jobseeking-resume",
  },
  {
    id: 27000,
    parent: 2700,
    status: "3. Active",
    name_singular: "referees",
    display_singular: "Referees",
    summary:null,
    description:null,
    nickname: "work-jobseeking-resume-referees",
  },
  {
    id: 2701,
    parent: 270,
    status: "3. Active",
    name_singular: "submissions",
    display_singular: "Submissions",
    summary:null,
    description:null,
    nickname: "work-jobseeking-submissions",
  },
  {
    id: 2702,
    parent: 270,
    status: "3. Active",
    name_singular: "interviews",
    display_singular: "Interviews",
    summary:null,
    description:null,
    nickname: "work-jobseeking-interviews",
  },
  {
    id: 2703,
    parent: 270,
    status: "3. Active",
    name_singular: "offers",
    display_singular: "Offers",
    summary:null,
    description:
      "Employment contract offered, reviewed and accepted/rejected/negotiated",
    nickname: "work-jobseeking-offers",
  },
  {
    id: 271,
    parent: 27,
    status: "3. Active",
    name_singular: "employers",
    display_singular: "Employers",
    summary:null,
    description:null,
    nickname: "work-employers",
  },
  {
    id: 272,
    parent: 27,
    status: "3. Active",
    name_singular: "jobs",
    display_singular: "Jobs",
    summary:null,
    description:null,
    nickname: "work-jobs",
  },
  {
    id: 273,
    parent: 27,
    status: "3. Active",
    name_singular: "income",
    display_singular: "Income",
    summary:null,
    description:null,
    nickname: "work-income",
  },
  {
    id: 274,
    parent: 27,
    status: "3. Hold",
    name_singular: "progression",
    display_singular: "Progression",
    description:null,
    summary: "career opportuniies and development",
    nickname: "work-progression",
  },
  {
    id: 28,
    parent: 2,
    status: "3. Active",
    name_singular: "objectives",
    display_singular: "Objectives",
    description:null,
    summary: "Goals/Aims/Targets and their substeps",
    nickname: "objectives",
  },
  {
    id: 280,
    parent: 28,
    status: "3. Active",
    name_singular: "purpose",
    display_singular: "Purpose",
    description:null,
    summary: "Spirituality, purpose, desires",
    nickname: "objectives-purpose",
  },
  {
    id: 281,
    parent: 28,
    status: "3. Active",
    name_singular: "aims",
    display_singular: "Aims",
    summary: "How to achieve purposes",
    description:null,
    nickname: "objectives-aims",
  },
  {
    id: 282,
    parent: 28,
    status: "3. Active",
    name_singular: "projects",
    display_singular: "Projects",
    summary: "how to achieve aims",
    description:null,
    nickname: "objectives-projects",
  },
  {
    id: 283,
    parent: 28,
    status: "3. Active",
    name_singular: "assessment",
    display_singular: "Assessment",
    description:null,
    summary:
      "how to reflect on / interpret projects and how successful / on track they are",
    nickname: "objectives-assessment",
  },
  {
    id: 0,
    parent: 3,
    status: "3. Active",
    name_singular: "overview",
    display_singular: "Overview",
    description:null,
    summary:
      "how to reflect on / interpret projects and how successful / on track they are",
    nickname: "overview",
  },
  {
    id: 3,
    parent: null,
    status: "3. Active",
    name_singular: "world",
    display_singular: "World",
    summary: "World, environment and universe",
    description: "Manage interaction with the earth & environment",
    nickname: "world",
  },
  {
    id: 4,
    parent: null,
    status: "3. Active",
    name_singular: "state",
    display_singular: "State",
    summary: "Goverment and the commons",
    description: "Manage Governmental and Community issues & interactions",
    nickname: "state",
  },
];

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
