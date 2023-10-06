// Placeholder - will have a roadmap module for displaying a product roadmap.
// This will be used by OrgmentaRoadmap.

export const currentTargets = [
  {
    id: 1,
    title: "Implement intial help module",
    assignedTo: "c",
    versions: [1],
  },
  {
    id: 2,
    title: "Stripe initial packages & integration",
    assignedTo: "l",
    versions: [2],
  },
];
export const currentVersions = [
  { id: 1, title: "Help Module v0.1", feature: 1 },
  { id: 2, title: "Stripe Module v0.1", feature: 2 },
];
export const currentFeatures = [
  { id: 1, title: "Help Module", usecases: [1] },
  { id: 2, title: "Stripe Module", usecases: [2, 3] },
];
export const currentUsecases = [
  { id: 1, title: "Be able to access help on any component in the UI" },
  { id: 2, title: "Link client stripe account" },
  { id: 3, title: "Pay customer invoice via stripe in orgmenta" },
];

// Userroles
export const user_roles = [
  {
    name: "any_user",
    description: "Any user of the orgmenta app/ecosystem",
  },
  {
    name: "orgmenta_employee",
    description:
      "A developer, contractor or other employee that works for Orgmenta",
  },
  {
    name: "client_user",
    description: "Any user that works for an Orgmenta client",
  },
  {
    name: "client_bookkeeper",
    description: "The accounts receivables employee for the client",
  },
  {
    name: "client_dispatcher",
    description: "Triager / Dispatcher / Service Delivery Manager",
  },
  {
    name: "client_administrator",
    description:
      "The person or dev team that manages the Orgmenta system for the client company",
  },
  {
    name: "client_technician",
    description:
      "An engineer, developer or other technical person that works for a client",
  },
  {
    name: "client_financialcontroller",
    description: "The Client CFO / Primary finance & accounts manager",
  },
  {
    name: "client_executive",
    description: "Any C title or division head.",
  },
  {
    name: "client_manager",
    description:
      "Any client employee responsible for managing employees / line manager",
  },
  {
    name: "client_hrmanager",
    description: "Responsible for employees and contractors",
  },
  {
    name: "client_accountmanager",
    description: "Responsible for a specific customer account.",
  },
  {
    name: "client_salesmanager",
    description: "Responsible for customers, leads, proposals and sales.",
  },
  {
    name: "client_salesperson",
    description: "Responsible for specific quotes/proposals",
  },
  {
    name: "client_procurement",
    description: "Responsible for procurement and inventory management",
  },
  {
    name: "client_marketingmanager",
    description: "Responsible for procurement and inventory management",
  },
  {
    name: "customer_user",
    description:
      "Any client customer user, e.g. a person with a broken workstation",
  },
  {
    name: "customer_bookkeeper",
    description: "The accounts receivables employee for the client's customer",
  },
  {
    name: "customer_financialcontroller",
    description: "The Client CFO / Primary finance & accounts manager",
  },
  {
    name: "client_auditor",
    description:
      "Internal compliance auditor, e.g. for OH&S Checklists/ISO:9001/27001/45001/14001 auditing",
  },
  {
    name: "external_auditor",
    description:
      "External compliance auditor, e.g. for ISO:9001/27001/45001/14001 auditing",
  },
];

export const featurePriorities = [
  {
    priority: 1,
    description: "Needs to be implemented now, hindering other development",
  },
  {
    priority: 2,
    description: "Needs to be implemented before intial go-live",
  },
  {
    priority: 3,
    description: "Future Feature",
  },
  {
    priority: 4,
    description: "Future Feature - long term",
  },
  {
    priority: 5,
    description:
      "Very long term / wishlist dependent on orgmenta long term success",
  },
];

// Features
// 'Features' for orgmenta are like 'Real-Time Analytics', 'Data Encryption' and others of same scope and target.
// They are not 'Invoicing' etc. (this is fullfilled by 'modules' (see static.js and bookmarks.tsx for their temporary location while they are static) in this circumstance Accounts > Receivables > Invoicing)
// specific features for the system. userstories can be constructed with:
// const exampleUserstory  = 'As a' + 'Dispatcher' + 'I want to '+ features[0].userstories.dispatcher;
// User stories will be split out into being separate entities (which can then be linked to requirements, features, user_roles etc.
export const features = [
  {
    title: "Undo/Redo",
    version: 0.0,
    status: "0. New",
    description: "Undo (and redo) to any point in entity-relationship histories",
    priority: 2,
    notes: "Chris to design this"
  },
  {
    title: "URL Parameters",
    version: 0.0,
    status: "0. New",
    description: "Email (and other communication channels) Connectors",
    notes:
      "see autotask live formulas, may be useful reference: https://ww1.autotask.net/help/content/4_admin/2featuressettings/livereports/addlivereport/Calculations/LRFormulas.htm",
    priority: 2,
    userstories: {
      any_user: [
        "use a url with 'action' parameters in it, in order to prepopulate an action form. For example, add/title=example&type=Event should prepopulate a form.This means that the action tabs must be accessible via url.",
        "streamline my workflow, add bookmarks etc.",
        "be able to put formulas in my url params, e.g. 'start=[today+3]', 'budget=[sum(childevents)+1]' etc.",
      ],
      customer_user: [
        "submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
      ],
      orgmenta_employee: [
        "guide users to a specific screen/display/state very easily",
      ],
    },
  },
  {
    title: "Commschannel Detectors",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_dispatcher: [
        "I want client enquiries to automatically create a ticket or update a relevant existing ticket.",
      ],
      customer_user: [
        "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
      ],
    },
  },
  {
    title: "Ticket Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_administrator: [
        "have incoming tickets automatically categorized based on keywords, so they can be triaged effectively.",
      ],
      client_dispatcher: [
        "Have all support tickets created on a single pane of glass for me to triage and assign",
      ],
      client_technician: [
        "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
      ],
      customer_user: [
        "submit tickets through multiple channels (email, chat, phone), so that I can reach support through my preferred method",
      ],
    },
  },
  {
    title: "Asset (Configuration) Management",
    version: 0.0,
    status: "0. New",
    description:
      "Manage client and internal workstations, servers, licenses, networks and any other tangible/intangible, physical/digital asset",
    priority: 1,
    userstories: {
      client_administrator: [
        "perform automatic scans on client networks to populate asset data. (low priority, RMMs cover this)",
      ],
      client_technician: [
        "link assets to tickets to better understand the scope of issues and easily click through to them for further information",
      ],
      client_manager: [
        "see a utilization report for all managed assets, to understand overall performance.",
      ],
    },
  },
  {
    title: "Billing & Invoicing to Customers",
    version: 0.0,
    status: "0. New",
    description: "Clients issue invoices to their customers",
    priority: 1,
    userstories: {
      client_administrator: [
        "automate the conversion of billable hours into invoices",
        "have items suggested automatically for 'cover letter' emails (e.g. if there is a price increase imminent, there should be a suggestion to alert customers 2 months before.",
        "design invoice layouts and content",
        "design cover letter layouts and content",
      ],
      customer_bookkeeper: [
        "automatically receive invoices on time to the commschannel of my choosing",
        "see a breakdown of charges in my invoices for transparency",
      ],
      client_financialcontroller: [
        "integrate the PSA with accounting software for efficient reconciliation",
        "set wording on invoices including payment details and terms, ",
        "have 'cover letter' emails for the invoice pdfs",
        "set price increases and add these notes to the email cover letters",
      ],
      client_bookkeeper: [
        "Easily verify & validate synced charges for invoices",
        "Automatically generate invoices",
        "Ask for invoice approval from the client_financialcontroller",
      ],
    },
  },
  {
    title: "Reporting & Analytics",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_administrator: [
        "view KPI dashboards to make data-driven decisions",
      ],
      client_technician: [
        "insights into common ticket issues for a given period, to improve service.",
      ],
      client_manager: [
        "review revenue and expense reports to gauge profitability",
      ],
    },
  },
  {
    title: "Workflow Automations",
    version: 0.0,
    status: "0. New",
    description:
      "Conditional logic,  rule running and template generations. If [a, b, c] then [x, y, z]",
    priority: 2,
    userstories: {
      client_administrator: [
        "define workflows for custom setups and common service requests",
      ],
      client_technician: ["repetitive tasks to be automated to save time"],
      client_manager: ["workflow analytics to identify bottlenecks"],
    },
  },
  {
    title: "Time Tracking",
    version: 0.0,
    status: "0. New",
    description: "Time Entries & Timesheets",
    priority: 1,
    userstories: {
      client_administrator: [
        "define workflows for custom setups and common service requests",
      ],
      client_technician: ["repetitive tasks to be automated to save time"],
      customer_manager: [
        "view the time logged against my projects for accountability",
      ],
    },
  },
  {
    title: "Knowledge Base",
    version: 0.0,
    status: "0. New",
    description: "A store of procedures and other information",
    priority: 2,
    userstories: {
      client_administrator: [
        "the knowledgebase to be automatically updated with new resolutions",
      ],
      client_technician: [
        "refer to the internal knowledge base for resolution steps",
      ],
      customer_user: ["access to a public-facing FAQ for common issues"],
    },
  },
  {
    title: "Lead Management",
    version: 0.0,
    status: "0. New",
    description:
      "Lead, Quote, Prospect, Proposal management of potential customers",
    priority: 2,
    userstories: {
      client_salesmanager: [
        "Assign (automatically or manually) primary and secondary (etc.) salespeople to a lead/quote/proposal/opportunity",
      ],
      client_salesperson: [
        "track leads and convert them into clients within the PSA",
      ],
      customer_user: ["access to a public-facing FAQ for common issues"],
    },
  },
  {
    title: "Customer Relationship Management",
    version: 0.0,
    status: "0. New",
    description: "Customer lifecycles",
    priority: 2,
    userstories: {
      client_manager: ["Assign a team to a customer"],
      client_customerteam: [
        "have access to the client's relationship status & information",
      ],
      customer_user: [
        "have a dedicated account manager I can reach out to for non-technical issues",
      ],
    },
  },
  {
    title: "Service Level Agreements",
    version: 0.0,
    status: "0. New",
    description: "SLAs and SLOs",
    priority: 2,
    userstories: {
      client_manager: ["define SLA rules and ensure compliance"],
      client_technician: ["notifications for approaching SLA deadlines"],
      customer_manager: [
        "a report on SLA compliance for the services rendered.",
      ],
    },
  },
  {
    title: "Compliance, Auditing& Security Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_administrator: [
        "robust security features like 2FA and data encryption",
      ],
      client_manager: [
        "compliance features & reports that allow us to adhere to standards such as GDPR, HIPAA, etc",
      ],
      customer_manager: [
        "assurance that my company's data is being handled securely",
      ],
      client_auditor: [
        "provide evidence to myself and external auditors that standards are being upheld.",
      ],
      external_auditor: ["see evidence that standards are being upheld."],
    },
  },
  {
    title: "VOIP Integration",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 4,
    userstories: {
      any_user: [
        "the PSA to integrate with VoIP systems so that communications can be logged and tracked within tickets.",
        "everything integrated into a single pane of glass (but only if it does not compromise on features or UX)",
      ],
    },
  },
  {
    title: "Internal Tool Creation",
    version: 0.0,
    status: "0. New",
    description:
      "Allow client users to create their own tools & reports, instead of relying on their admin/dev team which has a longer, more costly dev cycle",
    priority: 4,
    userstories: {
      client_administrator: [
        "empower employees to transform and display data themselves.",
      ],
      client_user: [
        "spin up a quick internal app (a la Retool) rather than spending months with the IT department /dev team",
      ],
    },
  },
  {
    title: "Status Page",
    version: 0.0,
    status: "0. New",
    description: "(like statuspage or updown.io)",
    priority: 4,
    userstories: {
      client_administrator: [
        "see the status of all their services in a single pane.",
      ],
      client_user: ["see the status of all our services in a single pane."],
    },
  },
  {
    title: "Link Page",
    version: 0.0,
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
    userstories: {
      client_marketingmanager: [
        "have a collated contact page or landing page.",
      ],
    },
  },
  {
    title: "Link Shortener",
    version: 0.0,
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
    userstories: {
      client_administrator: [
        "a bespoke url shortener that we and our customers can use.",
      ],
    },
  },
  {
    title: "Corporate Website",
    version: 0.0,
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
    userstories: {
      client_administrator: [
        "be able to single-click publish our corporate website and not worry about hosting, domains or pricing.",
      ],
      client_marketingmanager: [
        "make entities 'published' and public facing, and automatically go onto the correct page of our website (e.g. news, roadmap)",
      ],
    },
  },
  {
    title: "Multi-Tenancy and Account Segmentation",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_administrator: [
        "manage multiple tenant environments within a single PSA instance",
      ],
      client_manager: [
        "segment client accounts based on specific criteria (industry, size, location)",
      ],
    },
  },
  {
    title: "Notifications and Alerts",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_manager: [
        "set up customized alerts for specific events, like SLA violations or system outages",
      ],
      client_technician: [
        "real-time notifications for ticket updates or comments",
      ],
    },
  },
  {
    title: "Calendar and Scheduling",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 1,
    userstories: {
      client_dispatcher: [
        "view all technicians' availability in one centralized calendar",
      ],
      client_technician: [
        "synchronize my PSA calendar with external calendars (Google Calendar, Outlook)",
      ],
    },
  },
  {
    title: "Customer Contract Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 1,
    userstories: {
      client_accountmanager: [
        "set automated reminders for upcoming contract renewals",
        "manage and renew client contracts within the PSA",
      ],
    },
  },
  {
    title: "Mobile Accessibility",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 1,
    userstories: {
      client_technician: [
        "mobile-friendly interface or app to update tickets while in the field",
      ],
      customer_user: [
        "access ticket status and updates via a mobile application",
      ],
    },
  },
  {
    title: "Customer Satisfaction Surveys",
    version: 0.0,
    status: "0. New",
    description:
      "CSAT, Net Promotor Score (NPS), Customer Effort Score (CES), Customer Loyalty Index (CLI),	Customer Satisfaction Index (CSI) etc.",
    notes: [
      `
			Net Promoter Score (NPS): NPS measures customer loyalty by asking customers how likely they are to recommend a product or service to others. Responses are typically on a scale of 0 to 10.
			Customer Effort Score (CES): CES assesses the ease with which customers can achieve their goals when interacting with a product or service. It typically uses a scale to measure effort, with lower scores indicating less effort required.
			Customer Loyalty Index (CLI): CLI combines various metrics to evaluate customer loyalty. It considers factors like repeat purchases, customer lifetime value, and advocacy.
			Customer Satisfaction Index (CSI): CSI is a broad measure of overall satisfaction with a company's products or services. It often includes multiple survey questions to assess different aspects of the customer experience.
			Overall Satisfaction (OSAT): OSAT is a straightforward measure of overall customer satisfaction with a specific interaction, product, or service.
			Customer Churn Rate: This metric measures the percentage of customers who stop using a product or service over a specific period, indicating dissatisfaction.
			Customer Retention Rate: The opposite of churn rate, this measures the percentage of customers who continue using a product or service over time.
			Social Media Sentiment Analysis: This involves analyzing social media comments, reviews, and mentions to gauge public sentiment and customer satisfaction.
			Customer Feedback Forms: These can be custom surveys designed by companies to gather feedback on specific aspects of their products or services.
			Online Reviews and Ratings: Monitoring and analyzing online reviews and ratings on platforms like Yelp, Google, or Amazon can provide insights into customer satisfaction.`,
    ],
    priority: 1,
    userstories: {
      client_manager: [
        "automatically send CSAT surveys upon ticket resolution",
      ],
      client_executive: [
        "see customer satisfaction metrics in my KPI dashboard",
      ],
    },
  },
  {
    title: "Internal Communications Tool",
    version: 0.0,
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
    userstories: {
      client_user: [
        "an internal chat function to collaborate with team members",
      ],
      client_manager: ["track internal discussions related to tickets"],
    },
  },
  {
    title: "Business Continuity and Disaster Recovery",
    version: 0.0,
    status: "0. New",
    description: "Built-in backup and recovery options",
    priority: 1,
    userstories: {
      client_administrator: [
        "back up and restore the entire PSA system to a specific timestamp",
        "roll back granular changes to entities/relationships",
      ],
      client_manager: [
        "contingency plan feature that documents the steps to take in case of system failure",
      ],
    },
  },
  {
    title: "Resource Allocation and Capacity Planning",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 1,
    userstories: {
      client_manager: [
        "allocate resources based on skill sets and availability.",
      ],
      client_executive: [
        "plan for capacity based on trends in ticket volume and resource utilization",
      ],
    },
  },
  {
    title: "Change Management",
    version: 0.0,
    status: "0. New",
    description:
      "Change Requests, Change Approvals, Implementation Feebback, Rollback Options, Lessons Learned",
    priority: 3,
    userstories: {
      client_manager: ["approve major changes before they are implemented"],
      client_technician: ["log changes made during the resolution process"],
    },
  },
  {
    title: "Quality Control",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {},
  },
  {
    title: "Quality Assurance",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {},
  },
  {
    title: "Email Design",
    version: 0.0,
    status: "0. New",
    description:
      "design email templates from within the PSA. (see https://news.ycombinator.com/item?id=37596253 loops and similar)",
    priority: 3,
    userstories: {},
  },
  {
    title: "White-Labeling and Customization",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_administrator: [
        "the ability to white-label the PSA tool to maintain brand consistency. This includes custom domain / dns records to have the psa available under our corporate domain.",
        "extensive UI/UX customization capabilities to match our specific workflow needs.",
      ],
    },
  },
  {
    title: "Shared Inbox",
    version: 0.0,
    status: "0. New",
    description:
      "'One space for email, marketing, and customer relationships' (e.g. https://helpmonks.com/) and for employees to be able to view shared folders/inboxes",
    priority: 2,
    userstories: {},
  },
  {
    title: "Keyboard shortcuts",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      any_user: [
        "use keyboard shortcuts to navigate the app (on web or desktop)",
      ],
    },
  },
  {
    title: "Inventory Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_procurement: [
        "real-time inventory tracking within the PSA for hardware and software assets.",
      ],
      client_technician: [
        "See what stock we have on hand in order to provision a device for a customer.",
      ],
    },
  },
  {
    title: "Stock Take",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_procurement: [
        "barcode scanning and other features to make stock take easy",
      ],
    },
  },
  {
    title: "Signatures/Signoff & Document Management",
    version: 0.0,
    status: "0. New",
    description: "E-Signature and Document Management",
    priority: 3,
    userstories: {
      any_user: [
        "be able to sign off / give my blessing on a proposal, ticket or other entity",
      ],
      client_manager: [
        "have evidence of a signed agreement with the customer",
        "collate all client-related documents in one centralized repository.",
      ],
      client_salesperson: [
        "send, receive, and store e-signed contracts within the PSA.",
      ],
    },
  },
  {
    title: "Social Media Integration",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {
      client_technician: [
        "manage customer inquiries from social media channels within the PSA.",
      ],
      client_manager: ["social media analytics in my reporting dashboard"],
      client_marketingmanager: [
        "manage campaigns and promotions within the PSA.",
      ],
    },
  },
  {
    title: "Gamification",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 4,
    userstories: {
      any_user: [
        "I [MAY] want [THE OPTION] to earn rewards or recognition for achieving performance milestones [THAT IS NON-MANDATORY AND DOES NOT AFFECT PERFORMANCE ASSESSMENTS]. <-- CONTENTIOUS. (Or just make it a pleasant app to use!)",
      ],
      client_manager: [
        "incorporate gamification elements to motivate and engage technicians.",
      ],
    },
  },
  {
    title: "Real-time Collaboration",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      any_user: [
        "collaborate in real-time with team members on complex issues.",
      ],
      client_manager: [
        "a live feed of ticket status updates for dynamic resource allocation.",
      ],
    },
  },
  {
    title: "Payment Processing",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {
      client_administrator: [
        "integrate payment gateways for direct billing through the PSA.",
      ],
      customer_financialcontroller: [
        "pay invoices within the PSA portal itself for convenience.",
      ],
    },
  },
  {
    title: "Client Portal",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {
      client_accountmanager: [
        "allow customers to log tickets in their customer portal",
        "allow customers to access information themselves rather than having to come through me",
      ],
      customer_user: [
        "log into my MSPs portal and see all open tickets, discussions, configurations, proposals etc.",
      ],
    },
  },
  {
    title: "Rosters, availability, On call and Time-Off Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 3,
    userstories: {
      client_hrmanager: [
        "manage leave, holidays, and time-off within the same PSA system where work is being tracked.",
        "forecast and coordinate on-call teams, holidays, after hours coverage and emergency coverage",
      ],
      client_user: ["request time off in the easiest way possible."],
      client_dispatcher: [
        "see employee availability on a single pane of glass.",
      ],
    },
  },
  {
    title: "Sales Proposals and Quoting",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_salesperson: [
        "create, send, and track sales proposals within the PSA system to streamline the sales process.",
      ],
      client_salesmanager: [
        "maintain a repository of proposal templates for different services and contract types.",
      ],
      client_administrator: [
        "integrate proposal software with the PSA to ensure that pricing and asset lists are up-to-date.",
      ],
      cusotomer_financialcontroller: [
        "view, comment on, and e-sign proposals through a client portal.",
      ],
    },
  },
  {
    title: "Natural Language & Rich Text Notes with Links",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      any_user: [
        "write notes/descriptions in the entities that are references/relationships (to other entities, with their attribute/relationship type) in them.",
        "Paste images and other media directly into notes",
        "Have anything I add into an entity's notes auto-added as relationships to the entity.",
      ],
    },
  },
  {
    title: "Globalization and Localization",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_financialcontroller: [
        "add varying tax rules to invoice templates, territories, customers and other billing areas",
      ],
      client_administrator: [
        "multi-language and multi-currency support for international operations.",
      ],
      client_manager: [
        "set region-specific settings, like date formats and compliance standards.",
      ],
    },
  },
  {
    title: "Vendor Management",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {
      client_manager: [
        "track vendor performance metrics.",
        "record contracts and terms with vendors.",
      ],
      client_administrator: [
        "multi-language and multi-currency support for international operations.",
      ],
      client_financialcontroller: [
        "manage payments and renewals with vendors.",
      ],
      client_procurement: [
        "track and manage all vendor interactions, including quotations, lead times, and service quality, within the PSA system.",
      ],
    },
  },
  {
    title: "Training and Documentation",
    version: 0.0,
    status: "0. New",
    description: "Training, Learning & Development, and associated Resources",
    priority: 2,
    userstories: {
      client_manager: [
        "robust documentation and training modules within the PSA.",
        "assign and track training courses for new hires.",
        "view the expertise at my disposal",
      ],
      client_user: [
        "manage my skills & certifications within the same pane of glass",
      ],
      client_dispatcher: [
        "filter expertise and assign an engineer with the skills commensurate to the project/service required.",
      ],
    },
  },
  {
    title: "Business Intelligence and Advanced Analytics",
    version: 0.0,
    status: "0. New",
    description: "Training, Learning & Development, and associated Resources",
    priority: 2,
    userstories: {
      client_manager: [
        "predictive analytics capabilities to forecast resource needs, revenue, and other key metrics.",
        "view the expertise at my disposal",
      ],
      client_user: [
        "spin up charts/reports/dashboards (with the data available and related to me)",
      ],
    },
  },
  {
    title: "Tax Settings and Region-based tax rules",
    version: 0.0,
    status: "0. New",
    description: "",
    priority: 2,
    userstories: {},
  },
  {
    title: "Audit Trail",
    version: 0.0,
    status: "0. New",
    description: "Entity Logs",
    priority: 1,
    userstories: {
      client_administrator: ["see all changes and edits made in the system"],
      client_technician: [
        "see a timeline of what I and my colleagues have done",
      ],
    },
  },
  {
    title: "Signup Functionality",
    version: 0.0,
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Signup Functionality",
    version: 0.0,
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Change Password Functionality",
    version: 0.0,
    status: "0. New",
    description:
      "Implement a function that allows users to change their passwords after signing in.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Password Recovery (Forgot Password) Functionality",
    version: 0.0,
    status: "0. New",
    description:
      "Provide a function for users to recover their passwords through a password reset process. This involves sending password reset emails and allowing users to set a new password.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Social Authentication",
    version: 0.0,
    status: "0. New",
    description:
      "Include functions for authenticating users using popular social media platforms like Google, Facebook, Twitter, etc.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    version: 0.0,
    status: "0. New",
    description:
      "Implement support for multi-factor authentication to enhance security by adding an extra layer of verification.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Account Deactivation and Removal",
    version: 0.0,
    status: "0. New",
    description:
      "Provide functions to allow users to deactivate or delete their accounts.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Account Verification and Email Confirmation",
    version: 0.0,
    status: "0. New",
    description:
      "Implement functions to send verification emails and confirm user email addresses.",
    priority: 1,
    userstories: {},
  },
  {
    title: "User Profile Management",
    version: 0.0,
    status: "0. New",
    description:
      "Include functions to update user profile information, such as profile picture, display name, and other relevant details.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Session Management",
    version: 0.0,
    status: "0. New",
    description:
      "Enhance session management by adding functions to check and refresh authentication tokens.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Role-Based Access Control (RBAC)",
    version: 0.0,
    status: "0. New",
    description:
      "If applicable, include functions to manage user roles and permissions for different parts of the application.",
    priority: 1,
    userstories: {
      client_administrator: [
        "define user roles and permissions based on job function",
      ],
      client_user: ["have role-specific access to modules and data"],
      customer_user: [
        "different levels of access based on my agreement with the MSP",
      ],
      customer_manager: [
        "only allow a certain team access to information (i.e. a select few client employees",
      ],
    },
  },
  {
    title: "Security Enhancements",
    version: 0.0,
    status: "0. New",
    description:
      "Implement security features like brute-force protection, account lockout mechanisms, and IP blocking.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Event Hooks and Customization",
    version: 0.0,
    status: "0. New",
    description:
      "Provide hooks and customization options to allow developers to integrate the authentication package seamlessly into their applications.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Localization and Internationalization",
    version: 0.0,
    status: "0. New",
    description:
      "Support different languages and regions by including features for localization and internationalization.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Account Linking",
    version: 0.0,
    status: "0. New",
    description:
      "Allow users to link multiple authentication methods to their account, such as email and social media accounts.",
    priority: 1,
    userstories: {},
  },
  {
    title: "OAuth and OpenID Connect Integration",
    version: 0.0,
    status: "0. New",
    description:
      "Integrate with OAuth and OpenID Connect providers for broader authentication options.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Analytics and Monitoring",
    version: 0.0,
    status: "0. New",
    description:
      "Include features to track authentication-related events and provide monitoring capabilities.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Password Complexity and Policies",
    version: 0.0,
    status: "0. New",
    description:
      "Provide options for setting and enforcing password complexity rules and policies.",
    priority: 1,
    userstories: {},
  },
  {
    title: "OAuth2 / OIDC Server (for Advanced Use Cases)",
    version: 0.0,
    status: "0. New",
    description:
      "If your package aims to cover advanced use cases, consider offering OAuth2 or OpenID Connect server capabilities.",
    priority: 1,
    userstories: {},
  },
  {
    title: "Downtime detector",
    version: 0.0,
    status: "0. New",
    description:
      "a la https://downdetector.com.au/ / https://www.pingdom.com/solution/website-down-detector/ / https://uptimerobot.com/",
    priority: 5,
    userstories: {},
  },
  {
    title: "StatusPage",
    version: 0.0,
    status: "0. New",
    description: "a la https://status.io/",
    priority: 4,
    userstories: {},
  },
  {
    title: "DNS Manager",
    version: 0.0,
    status: "0. New",
    description:
      "Create a dns manager system for engineers to update from the PSA instead of logging into separate hosting instances.",
    priority: 5,
    userstories: {},
  },
  {
    title:
      "Extra rich text functionality: Ability to paste tables, screenshots (etc.) into rich text",
    version: 0.0,
    status: "0. New",
    description:
      "CW etc. does not allow you to paste csv or xlsx cells/tables into time entries with formatting. We should be able to retain the formatting when pasted in.",
    priority: 5,
    userstories: {},
  },
  {
    title: "Password Manager",
    version: 0.0,
    status: "0. New",
    description:
      "A la Bitwarden etc. Depends on appropriate securitty & security audit.",
    priority: 3,
    userstories: {},
  },
  {
    title: "Payments System",
    version: 0.0,
    status: "0. New",
    description:
      "Allow customers to pay our clients' invoices, downpayments etc. through Orgmenta. Via stripe if possible (allow clients to configure Stripe integration and accept payments, add products/sync products from Orgmenta etc.",
    priority: 3,
    userstories: {},
  },
];

// Requirements
//
export const requirements= [
  {
    category: "User Satisfaction",
    title: 'UI satisfaction',
    description:
      "The interface must be intuitive enough for new users to perform basic tasks without training.",
  },
  {
    category: "Functional",
    title: 'CRUD',
    description:
      "The system must support the entry, modification, and deletion of customer records.",
  },
  {
    category: "Performance",
    description:
      "The system must support up to 10,000 concurrent users without degrading performance below acceptable levels.",
  },
  {
    category: "Security",
    description:
      "All customer data must be encrypted using at least AES-256 encryption.",
  },
  {
    category: "Reliability",
    description:
      "The system must have a Mean Time Between Failures (MTBF) of 500 hours or more.",
  },
  {
    category: "Input/Output",
    description:
      "The software must allow for the export of customer data in both CSV and XML formats.",
  },
  {
    category: "Data Integrity",
    description:
      "The software must validate all customer email addresses before saving.",
  },
  {
    category: "Usability",
    description:
      "Users must be able to complete the data entry for a new customer record within three minutes.",
  },
];


// General 'needs' for the system
export const needs = [
  {
    title: `No Data Loss / No impact from data loss`,
    description: `
		- Never lose information. Time entries shouldn't lose or jumble text. As an employee I want to feel secure in typing directly into the app, such that if I lost internet or accidentally closed it, it would still be there upon return.
		- Feedback on changes - If I make a change, I want to see that change immediately with its status (indicators/spinners, loading messages etc.)
		- An intuitive interface where buttons and other components are where I expect them to be, and not bounce around on the screen.
		`,
  },
  {
    title: `Support from Orgmenta`,
    description: `
		- An available account manager and support system that is responsive and valuable.
		- No bargaining with account managers or sales. No unrequested sales calls. no spam messages.
		`,
  },
  {
    title: `Relationship w/ Orgmenta /Orgmenta Ethics`,
    description: `
		- No theft of my clients by my PSA company.
		- I want to believe in my PSA company, and not feel weird about their behavior or ethics.
		- No chance of the PSA company being compromised or selling out to VCs that have 'pump n dump' priorities. <-- Add canaries to promises/features/roadmaps, to burn chances of this happening without compromising investment possibilities?
		`,
  },
  {
    title: `Community`,
    description: `
		- Get advice - 'what do other MSPs do?". PSA companies are in a good position for a high level view of the industry.
		`,
  },
  {
    title: `Uptime`,
    description: `
		As a user, I want as close to 100% uptime as is reasonably possible.
		`,
  },
  {
    title: `Speed`,
    description: `
		As a user, I want as close to instant data retrieval as is reasonably possible. (and instant UI changes).
		Immediate Response: 0-100 milliseconds - Perceived as instant, maintaining a feeling of direct manipulation.
		Fast Response: 100-300 milliseconds - Still perceived as reactive, but not as instantaneous.
		Noticeable Delay: 300-1000 milliseconds - Users notice a delay and may become slightly annoyed.
		Task Interruption: 1000+ milliseconds - The user's flow is interrupted, and they become increasingly frustrated.
		- A quick application that loads within 3 seconds, and each page in under a second.
		`,
  },
  {
    title: `Transparency and Honesty`,
    description: `
		As a client purchaser/billing approver, I want to see the Orgmenta roadmap and business plan.
		As a customer of a client, I want to see that Orgmenta is a trustworthy platform.
		`,
  },
  {
    title: `Orgmenta Pricing& Billing: Clear, Transparent, Cheap Billing`,
    description: ` 
		- Simple transparent billing with no unexpected charges
		- Simple licensing - by adding a user, automatically add a license. 
		- No multi-year lock in, tricksy contracts, unethical fine print, unanncounced contract renewals.
		`,
  },
  {
    title: `Dependable, intuitive UI`,
    description: ` 
		As a user, I want buttons where I expect them to be. I don't want marketing popups from Orgmenta. I don't want nag screens. I don't want buttons or other UI elements to jump around the page.
		- No popups or other forced overlays/components that prevent my usual flow. No cluttered interfaces with information that I don't need.
		`,
  },
  {
    title: `API and Integrations`,
    description: `
		As an administrator, I want a well-documented API to integrate third-party solutions.
		As a manager, I want to integrate with existing CRM, ERP, and other systems to centralize data.
		`,
  },
  {
    title: `Value /ROI / Enable me / Be an exoskeleton`,
    description: `                   
		As a user, the app should empower me to do my job better than with any other tool or if I was not using a tool. 
		`,
  },
];

// Procedures
// url_params are NOT finalised yet
export const procedures = [
  {
    title: "Create an invoice from scratch",
    description:
      "Create a blank invoice, rather than generating it with existing charges",
    steps: ["Go to Accounts > Receivables > Invoicing", "Click 'Add"],
    url_param:
      "orgmenta.com/entity/accounts-receivables-invoicing/pods/add/class=invoice",
  },
  {
    title: "Create an invoice from charges",
    description:
      "Create a blank invoice, rather than generating it with existing charges",
    steps: [
      "Go to Accounts > Receivable > Charges",
      "Select the checkboxes next to the charges you want to bill",
      "Click 'Run",
      "Select 'Generate Invoices",
      "(add configuration steps here e.g. override the invoice template if diff. to default",
    ],
    url_param:
      "orgmenta.com/entity/accounts-receivables-charges/pods/run/rule=generateinvoice",
  },
  {
    title: "Create a Marketing Campaign",
    description: "",
    steps: [
      "Go to Market > Promotions > Campaigns",
      "Click 'Add",
      "Select a template or 'create a blank campaign'",
      "(add configuration steps here e.g. override the invoice template if diff. to default",
    ],
    url_param:
      "orgmenta.com/entity/market-promotions-campaigns/pods/run/rule=generatecampaign",
  },
  {
    title: "Create a Time Entry",
    description: "",
    steps: [
      "Go to Personnel > Attendance > Timesheets",
      "Click 'Add",
      "Select a template or 'create a blank timesheet'",
      "(add configuration steps here e.g. override the invoice template if diff. to default",
    ],
    url_param:
      "orgmenta.com/entity/personnel-attendance-timesheets/pods/add/type=Event&class=TimeEntry&Status=1.New",
  },
];

// Paradigms
// General models / structures that Orgmenta is using.
// These are exposed to the client side to some extent - If trials indicate that this does not work for the UX, then these paradigms can be made backend only (i.e. not expose the user to them as necessary).
// These may be non-performant - If trials indicate that this does not work, then they can be mitigated (see query speed in readme for example)
type Paradigm = {
  description: string;
};
export const paradigms: Paradigm[] = [
  {
    description:
      "Data structure: Node-Edge, 2-table paradigm instead of statically defined tables",
  },
  {
    description:
      "Displays: Data displays that the user can toggle between at will (to be restricted as necessary if users say they have 'TOO MUCH choice'/causes confusion)",
  },
  {
    description: "Categories/Modules/Business Framework",
  },
  {
    description: "Dynamic attributes",
  },
  {
    description: "TechStack (react native stack)",
  },
  {
    description:
      "'ViewRouterLink anything to anything' (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)",
  },
  {
    description:
      "Custom attributes/properties on entities (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)",
  },
  {
    description:
      "Many-many relationships (at the moment, everything is attached to everything, e.g. an item may be linked to a category, the category's parent, the category's grandparent etc.. But this will balloon out, so we may need to do recursive joins in postgresql.)",
  },
  {
    description:
      "short term memory layout: Business Framework: 9 Top level modules (condensing further would compromise functionality), 5 submodules max for each subsequent sublevel. ~9 Main entity types.",
  },
  {
    description: "Opinionated Definitions, Types, Statuses, Displays",
  },
  {
    description:
      "Permissions and access: The entityrel structure allows us to be granular and only share some things inter-spacetable. but could the graph itself have a pattern that could have info inferred from? and will there be a problem with a single entity being entirely shared (do we need to lock specific fields from being shared?)",
  },
  {
    description:
      "Framework module SCOPE. Need to ensure that all submodules are comparable in size/scope",
  },
  {
    description:
      "Framework module FUNCTIONAL PARITY(?). Need to ensure that all submodules are comparable in function TYPE.(?) e.g. we don't want one set of submodules describing statuses that the parent travels through, while another describes features of the parent. (?)And we don't want one set to be nouns and the other verbs(?). Can someone describe this better than my awful attempt?",
  },
  {
    description:
      "Scope limitations: Target Industries, a hold on expansion vertically & horizontally, physical/brick&mortar, feature scope",
  },
  {
    description:
      "Scope limitation: Codebase-to-library / natural language & quick dev / LLM access to code & use components for solution to prompt",
  },
];

// Checklist
// This is a list of things for us to undertake before a module can be considered ready.
export const checklist = [
  {
    title: "Client/Local/Edge/Server/Remote functionality",
    description:
      "Make sure that functionality across all necessary platforms are developed.",
  },
  {
    title: "Add Documentation and Comments",
    description:
      "1. Provide comprehensive inline comments to explain the purpose and functionality of each function, interface, and component in the module. This will make it easier for users to understand how to use your library.\n2. Add a high-level overview comment at the top of the module to describe its purpose, usage, and any prerequisites.",
  },
  {
    title: "Unit Tests",
    description:
      "Write comprehensive unit tests for each function and component within the module:\n1. Test different scenarios and edge cases to ensure the reliability and correctness of your library.",
  },
  {
    title: "Error Handling",
    description:
      "Enhance error handling:\n1. Add detailed error messages and handle different error scenarios that might arise during authentication, signing in, or signing out.",
  },
  {
    title: "Consistent Styling",
    description:
      "Ensure consistent coding style and formatting:\n1. Adhere to a consistent coding style and formatting to improve code readability and maintainability.",
  },
  {
    title: "API Documentation",
    description:
      "Create clear and comprehensive API documentation:\n1. Include usage examples, explanations of function parameters, return values, and usage patterns.",
  },
  {
    title: "Type Annotations",
    description:
      "Add TypeScript type annotations:\n1. Ensure type safety and improved developer experience by adding TypeScript type annotations to your module's code.",
  },
  {
    title: "Versioning and Changelog",
    description:
      "Implement versioning and maintain a changelog:\n1. Use tools like Semantic Versioning (SemVer) for versioning.\n2. Keep a changelog highlighting changes and updates made in each release.",
  },
  {
    title: "Publishing Considerations",
    description:
      "Considerations for publishing your library:\n1. Ensure the package name adheres to npm's naming guidelines and is available.\n2. Double-check package metadata like package.json for author, description, license, and repository.",
  },
  {
    title: "Webpack Configuration (if applicable)",
    description:
      "Configure webpack for multi-platform support:\n1. If publishing for both react-native and react-native-web, set up the build process to target both platforms using conditional imports or platform-specific code.",
  },
  {
    title: "License",
    description:
      "Choose an appropriate open-source license for your library and include the license information in your package.",
  },
  {
    title: "Publish to documentation Website",
    description: "",
  },
  {
    title: "Continuous Integration (CI) and Automated Testing",
    description:
      "Set up a CI/CD pipeline to automate testing and deployment processes. This ensures that your library is continuously tested against different scenarios and platforms.",
  },
  {
    title: "Code Coverage",
    description:
      "Monitor and maintain code coverage metrics to ensure that your unit tests effectively cover your codebase.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize the performance of your library by identifying and addressing bottlenecks, reducing unnecessary operations, and improving efficiency.",
  },
  {
    title: "Accessibility",
    description:
      "Ensure that your library's components and user interfaces are accessible to users with disabilities by following best practices for accessibility.",
  },
  {
    title: "Dependency Management",
    description:
      "Carefully manage dependencies and keep them up-to-date. Regularly review and update dependencies to ensure security and compatibility.",
  },
  {
    title: "Contributor Guidelines",
    description:
      "Provide clear guidelines for potential contributors on how to contribute to your project. This includes coding standards, pull request guidelines, and contribution workflows.",
  },
  {
    title: "Security Review",
    description:
      "Conduct a security review of your codebase to identify and address potential security vulnerabilities.",
  },
  {
    title: "Performance Benchmarking",
    description:
      "Benchmark your library's performance against common usage scenarios to ensure that it meets acceptable performance standards.",
  },
  {
    title: "Module Integrations",
    description:
      "Make sure it works with other modules as necessary, e.g. allow it to be themed with the Theme module.",
  },
];

// Devworkflow temp
// (merge this into checklist? and rename Checklist to Methodology? or something like 'deliverable' (single step) and deliverables (the whole checklist)
export const devworkflow = `Workflow for implementing a feature
	requirements
	- break down into subtasks until you reach an achievable deliverable
	- list all of the 'user actions' /'user stories', along with how many maximum clicks (and other requirements) are needed
	- prioritise all tasks

	planning
	- design/collaborate on what is needed for each of the below categories (e.g. what client side functions are needed, what attributes, etc.)

	Db table / view changes
	- (as few as possible - keep it dynamic)

	Db row level security changes
	- (as few as possible - keep it dynamic)

	supabase / postgresql function changes
	- e.g. for space creation v2, we want to create unique entities/rel/attribute tables for each space (then add appropriate row level security policies) (and then v3 would allow self hosting / separate supabase dbs / etc.

	supabase edge / server functions

	chron jobs etc.

	integrations
	- third party integration changes/additions
	- associated functions to save/replicate/sync the data

	client side functions

	client side ui

	attributes (/properties/schema)
	- any new relationships/attributes/properties that will be needed (e.g. if implementing invoicing, need a 'line item of invoice' relationship

	entities+rels
	- create an area (and link it to anything relevant) if needed (e.g. 'invoicing')
	- create templates/rules and link it to the area
	- create any reference items (information, guides etc.)
	- create items (tools etc.)
	-... etc.
`;

export const competitorFeatures = {
  connectwisemanage: [
    [
      {
        id: "todo",
        theirfeature: "E.g. Time entry",
        ourfeature: "idgoeshere",
      },
    ],
  ],
  autotask: [
    [
      {
        id: "todo",
        theirfeature: "E.g. Time entry",
        ourfeature: "idgoeshere",
      },
    ],
    [
      {
        id: "todo",
        theirfeature: "e.g. approve & posts",
        ourfeature: "idgoeshere",
      },
    ],
  ],
};

export const arrayCompetitors: {
  id: number;
  name: string;
  industry: string;
  url: string;
}[] = [
  {
    id: 1,
    name: "ServiceNow",
    industry: "IT",
    url: "https://www.servicenow.com",
  },
  {
    id: 2,
    name: "ConnectWise Manage/PSA",
    industry: "IT",
    url: "https://www.connectwise.com",
  },
  { id: 3, name: "Autotask", industry: "IT", url: "https://www.autotask.com" },
  { id: 4, name: "SAP", industry: "agnostic", url: "https://www.sap.com" },
  {
    id: 5,
    name: "Salesforce",
    industry: "agnostic",
    url: "https://www.salesforce.com",
  },
  {
    id: 6,
    name: "Halo PSA",
    industry: "IT",
    url: "https://www.haloservicemanagement.com",
  },
  {
    id: 7,
    name: "Ninja RMM / NinjaOne",
    industry: "IT",
    url: "https://www.ninjarmm.com",
  },
  {
    id: 8,
    name: "FreshWorks / FreshDesk / FreshService",
    industry: "agnostic",
    url: "https://www.freshworks.com",
  },
  {
    id: 9,
    name: "Jira Service Management",
    industry: "IT",
    url: "https://www.atlassian.com/software/jira/service-management",
  },
  {
    id: 10,
    name: "Synchro MSP",
    industry: "IT",
    url: "https://www.synchromsp.com",
  },
  {
    id: 11,
    name: "RepairShoppr",
    industry: "IT",
    url: "https://www.repairshoppr.com",
  },
  {
    id: 12,
    name: "Ivanti Service Manager",
    industry: "IT",
    url: "https://www.ivanti.com",
  },
  {
    id: 13,
    name: "ManageEngine ServiceDesk Plus",
    industry: "IT",
    url: "https://www.manageengine.com",
  },
  {
    id: 14,
    name: "SysAid",
    industry: "agnostic",
    url: "https://www.sysaid.com",
  },
  {
    id: 15,
    name: "Cherwell ITSM",
    industry: "IT",
    url: "https://www.cherwell.com",
  },
  {
    id: 16,
    name: "BMC Remedy ITSM",
    industry: "IT",
    url: "https://www.bmc.com",
  },
  { id: 17, name: "Odoo", industry: "agnostic", url: "https://www.odoo.com" },
  {
    id: 18,
    name: "Thread (https://www.getthread.com/)",
    industry: "IT",
    url: "https://www.getthread.com/",
  },
  {
    id: 19,
    name: "Microsoft Dynamics",
    industry: "agnostic",
    url: "https://www.microsoft.com/en-us/dynamics365",
  },
];

export const arrayIndustryProducts: {
  title: string;
  categories: any[];
  integrations: any[];
  priority: number;
}[] = [
  {
    title: "RapidAPI",
    categories: ["Apis"],
    integrations: ["Apis"],
    priority: 2,
  },
  {
    title: "LinkedIn",
    categories: ["Office Software"],
    integrations: ["ArticlePosting", "SocialSharing"],
    priority: 4,
  },
  {
    title: "Microsoft Office",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "LibreOffice",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Adobe Acrobat",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Smartsheet",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "WPS Office",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Zoho Docs",
    categories: ["Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Google Docs/Sheets/Slides",
    categories: ["Office Software"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Microsoft Graph/365/Office",
    categories: ["Productivity", "Office Software"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Google Workspace / Gsuite /Docs/Sheets/Slides ",
    categories: ["Productivity", "Office Software"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Zapier",
    categories: ["Productivity"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Slack",
    categories: ["Productivity"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Asana",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Trello",
    categories: ["Productivity"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Jira",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Notion",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Monday.com",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Airtable",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ClickUp",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Todoist",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Evernote",
    categories: ["Productivity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ConnectWise PSA (Manage)",
    categories: ["PSA"],
    integrations: ["Import / Export"],
    priority: 2,
  },
  {
    title: "Autotask (Datto PSA)",
    categories: ["PSA"],
    integrations: ["Import / Export"],
    priority: 2,
  },
  {
    title: "Kaseya VSA",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Webroot",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Sophos",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "N-able",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Auvik",
    categories: ["Network Management"],
    integrations: [],
    priority: 4,
  },
  {
    title: "IT Glue",
    categories: ["Documentation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Continuum",
    categories: ["IT Management"],
    integrations: [],
    priority: 4,
  },
  {
    title: "TeamViewer",
    categories: ["Remote Access"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Malwarebytes",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ConnectWise Control",
    categories: ["Remote Access"],
    integrations: [],
    priority: 4,
  },
  {
    title: "NinjaRMM",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Bitdefender",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "PagerDuty",
    categories: ["Incident Management"],
    integrations: [],
    priority: 4,
  },
  { title: "Salesforce", categories: ["CRM"], integrations: [], priority: 4 },
  { title: "HubSpot", categories: ["CRM"], integrations: [], priority: 4 },
  {
    title: "Zendesk",
    categories: ["Customer Support"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "ServiceNow",
    categories: ["IT Service Management"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Acronis",
    categories: ["Backup and Recovery"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Trend Micro",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },

  {
    title: "ConnectWise Automate (LabTech)",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Datto RMM (Kaseya)",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SolarWinds N-Central",
    categories: ["Remote Monitoring Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Pax8",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Datto Commerce",
    categories: ["Vendors", "Quotes"],
    integrations: [
      "Contract/Agreement Sync",
      "Product Catalog sync",
      "Quote/Proposal/Opportunity Sync",
    ],
    priority: 2,
  },
  {
    title: "ConnectWise Sell",
    categories: ["Quotes"],
    integrations: [
      "Contract/Agreement Sync",
      "Product Catalog sync",
      "Quote/Proposal/Opportunity Sync",
    ],
    priority: 2,
  },
  {
    title: "ITQuoter",
    categories: ["Quotes"],
    integrations: [
      "Contract/Agreement Sync",
      "Product Catalog sync",
      "Quote/Proposal/Opportunity Sync",
    ],
    priority: 2,
  },
  {
    title: "Ingram Micro",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Dicker Data",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Tech Data",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Rhipe",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Sherweb",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Synnex",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Arrow Electronics",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Avnet",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "ScanSource",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Westcon-Comstor",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "SHI International",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "CDW",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Softchoice",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Insight Enterprises",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Connection (https://www.connection.com/)",
    categories: ["Vendors"],
    integrations: [],
    priority: 4,
  },
  { title: "Anixter", categories: ["Vendors"], integrations: [], priority: 4 },
  {
    title: "SYNNEX Corporation",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Tech Data Corporation",
    categories: ["Vendors"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Ingram Micro Inc.",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 2,
  },
  {
    title: "Sonepar",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "WESCO International",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  {
    title: "Grainger",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },

  {
    title: "PCM",
    categories: ["Vendors"],
    integrations: ["Contract/Agreement Sync", "Product Catalog sync"],
    priority: 4,
  },
  { title: "Xero", categories: ["Finance"], integrations: [], priority: 2 },
  {
    title: "QuickBooks (Online etc.",
    categories: ["Finance"],
    integrations: [],
    priority: 2,
  },
  { title: "Myob", categories: ["Finance"], integrations: [], priority: 2 },
  { title: "WaveApps", categories: ["Finance"], integrations: [], priority: 3 },
  {
    title: "FreshBooks",
    categories: ["Finance"],
    integrations: [],
    priority: 3,
  },
  { title: "Sage", categories: ["Finance"], integrations: [], priority: 3 },
  {
    title: "Zoho",
    categories: ["Finance", "Office Software"],
    integrations: [],
    priority: 3,
  },
  { title: "KashFlow", categories: ["Finance"], integrations: [], priority: 4 },
  { title: "NetSuite", categories: ["Finance"], integrations: [], priority: 4 },
  {
    title: "SAP Business One",
    categories: ["Finance"],
    integrations: [],
    priority: 4,
  },
  {
    title: "FreeAgent",
    categories: ["Finance"],
    integrations: [],
    priority: 4,
  },
  { title: "Quicken", categories: ["Finance"], integrations: [], priority: 3 },
  {
    title: "CSV",
    categories: ["File Formats"],
    integrations: ["Import / Export"],
    priority: 1,
  },
  {
    title: "Xlsx / xls",
    categories: ["File Formats"],
    integrations: ["Import / Export"],
    priority: 2,
  },
  {
    title: "xml / RSS",
    categories: ["File Formats"],
    integrations: ["Import / Export"],
    priority: 2,
  },
  {
    title: "SQL/Postgres/SQLite",
    categories: ["File Formats"],
    integrations: ["Import / Export"],
    priority: 2,
  },
  {
    title: "PayPal",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Square (Block)",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Adyen",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Braintree",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Authorize.Net",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Worldpay",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Skrill",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Neteller",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "2Checkout",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "CyberSource",
    categories: ["Payment Systems"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Wix",
    categories: ["Website Builders"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Squarespace",
    categories: ["Website Builders"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Weebly",
    categories: ["Website Builders"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Shopify",
    categories: ["Website Builders"],
    integrations: [],
    priority: 3,
  },
  {
    title: "WordPress",
    categories: ["Website Builders"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Webflow",
    categories: ["Website Builders"],
    integrations: [],
    priority: 4,
  },
  {
    title: "BigCommerce",
    categories: ["Website Builders"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Joomla",
    categories: ["Website Builders"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Drupal",
    categories: ["Website Builders"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Magento",
    categories: ["Website Builders"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Wise-Pay",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 2,
  },
  {
    title: "ConnectBooster",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Datagate",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Invoice Ninja",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ChargeOver",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "BlueSnap",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Cloud Depot",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "GoCardless",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "PaySimple",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Recurly",
    categories: ["Payment Facilitators"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Paddle",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "FastSpring",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Gumroad",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SendOwl",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ThriveCart",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SamCart",
    categories: ["Payment Platforms"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Veeam",
    categories: ["Backup and Recovery"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Barracuda",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Fortinet",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Cisco Meraki",
    categories: ["Network Management"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Ubiquiti Networks",
    categories: ["Network Management"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Freshdesk",
    categories: ["Customer Support"],
    integrations: [],
    priority: 4,
  },
  {
    title: "LogMeIn",
    categories: ["Remote Access"],
    integrations: [],
    priority: 4,
  },
  {
    title: "AnyDesk",
    categories: ["Remote Access"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Splashtop",
    categories: ["Remote Access"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Kaspersky",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "McAfee",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Norton",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ESET",
    categories: ["Cybersecurity"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Mailchimp",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 3,
  },
  {
    title: "ActiveCampaign",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Infusionsoft",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "GetResponse",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Drip",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ConvertKit",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Moosend",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SendinBlue",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "AWS",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Azure",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 2,
  },
  {
    title: "Google Cloud",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 2,
  },
  {
    title: "IBM Cloud",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Oracle Cloud",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Alibaba Cloud",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "DigitalOcean",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Vultr",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Linode",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Rackspace",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Heroku",
    categories: ["Cloud Services"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Cloudflare",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Fastly",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Akamai",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "KeyCDN",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "StackPath",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Sucuri",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Incapsula",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "MaxCDN",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "BunnyCDN",
    categories: ["CDN and Security"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Zendesk Sell",
    categories: ["CRM"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Pipedrive",
    categories: ["CRM"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Freshsales",
    categories: ["CRM"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Nimble",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Agile CRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Streak",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Close",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Nutshell",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Less Annoying CRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Capsule",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Insightly",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Copper",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "OnePageCRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "amoCRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "PipelineDeals",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Highrise",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Redtail CRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "GreenRope",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Salesflare",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "ProsperWorks",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Salesmate",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Bitrix24",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "Teamgate",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "SugarCRM",
    categories: ["CRM"],
    integrations: ["Import / Export"],
    priority: 4,
  },
  {
    title: "SharpSpring",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Ontraport",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Keap",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Marketo",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Eloqua",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Pardot",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "HubSpot",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Act-On",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Wishpond",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "LeadSquared",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Thryv",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "EngageBay",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SALESmanago",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "GreenRope",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Net-Results",
    categories: ["Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Outreach",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SalesLoft",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Groove",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "InsideSales.com",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Yesware",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "ToutApp",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Mixmax",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Reply",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Cirrus Insight",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "PersistIQ",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Apollo",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "VanillaSoft",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "FrontSpin",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Klenty",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Mailshake",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Sendbloom",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "QuickMail.io",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Woodpecker.co",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Autoklose",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Nimble",
    categories: ["Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "SendGrid",
    categories: ["Email Marketing"],
    integrations: [],
    priority: 3,
  },
  {
    title: "3CX",
    categories: ["VoIP", "Customer Support"],
    integrations: [],
    priority: 3,
  },
  {
    title: "CW Control",
    categories: ["Remote Management"],
    integrations: [],
    priority: 3,
  },
  {
    title: "Twilio",
    categories: ["Communication APIs"],
    integrations: [],
    priority: 3,
  },
  {
    title: "ActiveCampaign",
    categories: ["Email Marketing", "Marketing Automation"],
    integrations: [],
    priority: 4,
  },
  {
    title: "Intercom",
    categories: ["Customer Support", "Sales Engagement"],
    integrations: [],
    priority: 4,
  },
  {
    title: "RingCentral",
    categories: ["VoIP", "Customer Support"],
    integrations: [],
    priority: 4,
  },
  {
    title: "TeamViewer",
    categories: ["Remote Management"],
    integrations: [],
    priority: 4,
  },
];

export const arrayCompetitorCompanies = {
  connectwise: {
    employees: 3100,
  },
  kaseya: {
    employees: 3500,
  },
};

export const orgmentaTerritories = [
  {
    region: "North America & Caribbean",
    population: 650,
    language_primary: "English",
    language_secondary: "Spanish",
    language_tertiary: "French",
    remaining: "<5m",
  },
  {
    region: "Latin America",
    population: 650,
    language_primary: "Spanish",
    language_secondary: "Portuguese",
    language_tertiary: "English",
    remaining: "<5m",
  },
  {
    region: "Western, Central & South Europe",
    population: 450,
    language_primary: "English",
    language_secondary: "French",
    language_tertiary: "German",
    remaining: "?m",
  },
  {
    region: "Africa",
    population: 1000,
    language_primary: "Arabic",
    language_secondary: "Swahili",
    language_tertiary: "English",
    remaining: "?m",
  },
  {
    region: "Russian & Eastern Europe / Slavic and Central Asia",
    population: 350,
    language_primary: "Russian",
    language_secondary: "English",
    language_tertiary: "n/a",
    remaining: "?m",
  },
  {
    region: "India and South Asia",
    population: 1400,
    language_primary: "Hindi",
    language_secondary: "Bengali",
    language_tertiary: "English",
    language_quaternary: "",
    remaining: "?m",
  },
  {
    region: "China & Friends",
    population: 2000,
    language_primary: "Standard/Mandarin",
    language_secondary: "English",
    language_tertiary: "n/a",
    remaining: "?m",
  },
  {
    region: "Middle East & Western Asia",
    population: 300,
    language_primary: "",
    language_secondary: "Turkish",
    language_tertiary: "English",
    remaining: "?m",
  },
  {
    region: "Indonesia & SE Asia",
    population: 1000,
    language_primary: "Indonesian",
    language_secondary: "English",
    language_tertiary: "n/a",
    remaining: "?m",
  },
];

export const languagesByTotalSpeakers = [
  {
    priority: 1,
    language: "English",
    speakers_primary: 380,
    speakers_secondary: 1077,
    speakers_total: 1456,
  },
  {
    priority: 2,
    language: "Standard/Mandarin",
    speakers_primary: 939,
    speakers_secondary: 199,
    speakers_total: 1138,
  },
  {
    priority: 2,
    language: "Hindi",
    speakers_primary: 345,
    speakers_secondary: 266,
    speakers_total: 609,
  },
  {
    priority: 2,
    language: "Spanish",
    speakers_primary: 485,
    speakers_secondary: 74,
    speakers_total: 559,
  },
  {
    priority: 2,
    language: "French",
    speakers_primary: 81,
    speakers_secondary: 229,
    speakers_total: 310,
  },
  {
    priority: 3,
    language: "Modern Standard Arabic",
    speakers_primary: 0,
    speakers_secondary: 274,
    speakers_total: 274,
  },
  {
    priority: 3,
    language: "Bengali",
    speakers_primary: 234,
    speakers_secondary: 39,
    speakers_total: 273,
  },
  {
    priority: 3,
    language: "Portuguese",
    speakers_primary: 236,
    speakers_secondary: 27,
    speakers_total: 264,
  },
  {
    priority: 3,
    language: "Russian",
    speakers_primary: 147,
    speakers_secondary: 108,
    speakers_total: 255,
  },
  {
    priority: 3,
    language: "Urdu",
    speakers_primary: 71,
    speakers_secondary: 161,
    speakers_total: 232,
  },
  {
    priority: 3,
    language: "Indonesian",
    speakers_primary: 44,
    speakers_secondary: 155,
    speakers_total: 199,
  },
  {
    priority: 3,
    language: "German",
    speakers_primary: 75,
    speakers_secondary: 58,
    speakers_total: 133,
  },
  {
    priority: 4,
    language: "Japanese",
    speakers_primary: 123,
    speakers_secondary: 0.2,
    speakers_total: 123,
  },
  {
    priority: 4,
    language: "Egyptian Arabic",
    speakers_primary: 77,
    speakers_secondary: 25,
    speakers_total: 102,
  },
  {
    priority: 4,
    language: "Marathi",
    speakers_primary: 83,
    speakers_secondary: 16,
    speakers_total: 99,
  },
  {
    priority: 4,
    language: "Telugu",
    speakers_primary: 83,
    speakers_secondary: 13,
    speakers_total: 96,
  },
  {
    priority: 4,
    language: "Turkish",
    speakers_primary: 84,
    speakers_secondary: 6,
    speakers_total: 90,
  },
  {
    priority: 4,
    language: "Tamil",
    speakers_primary: 79,
    speakers_secondary: 8,
    speakers_total: 87,
  },
  {
    priority: 4,
    language: "Yue Chinese",
    speakers_primary: 86,
    speakers_secondary: 1,
    speakers_total: 87,
  },
  {
    priority: 4,
    language: "Vietnamese",
    speakers_primary: 85,
    speakers_secondary: 1,
    speakers_total: 86,
  },
  {
    priority: 4,
    language: "Wu Chinese",
    speakers_primary: 83,
    speakers_secondary: 0.1,
    speakers_total: 83,
  },
  {
    priority: 4,
    language: "Tagalog",
    speakers_primary: 29,
    speakers_secondary: 54,
    speakers_total: 83,
  },
  {
    priority: 4,
    language: "Korean",
    speakers_primary: 82,
    speakers_secondary: 0,
    speakers_total: 82,
  },
  {
    priority: 4,
    language: "Iranian Persian",
    speakers_primary: 57,
    speakers_secondary: 21,
    speakers_total: 79,
  },
  {
    priority: 4,
    language: "Hausa",
    speakers_primary: 52,
    speakers_secondary: 27,
    speakers_total: 79,
  },
  {
    priority: 4,
    language: "Swahili",
    speakers_primary: 16,
    speakers_secondary: 55,
    speakers_total: 72,
  },
  {
    priority: 4,
    language: "Javanese",
    speakers_primary: 0,
    speakers_secondary: 68,
    speakers_total: 68,
  },
  {
    priority: 4,
    language: "Italian",
    speakers_primary: 65,
    speakers_secondary: 3,
    speakers_total: 68,
  },
  {
    priority: 5,
    language: "Western Punjabi",
    speakers_primary: 0,
    speakers_secondary: 67,
    speakers_total: 67,
  },
  {
    priority: 5,
    language: "Gujarati",
    speakers_primary: 57,
    speakers_secondary: 5,
    speakers_total: 62,
  },
  {
    priority: 5,
    language: "Thai",
    speakers_primary: 21,
    speakers_secondary: 40,
    speakers_total: 61,
  },
];

export const ethicsQuestions = [
  "Is it wrong to be implementing Microsoft et al first, and further strengthening their monolopoly? Or should be use that as a spring board to get power before we help break the monopoly?",
  "is it wrong to be concentrating on the wealthier territories? Should we be lifting up the rest first, even if it's counter to our success? Or is our success a way to then enable the lifting?",
  "Should we be charging more per seat to smaller companies, and giving larger companies economies of scale? Is this necessary to get the bigger companies as customers?",
];

// Axioms serve as the non-derivable, foundational beliefs.
export const axioms = [
  {
    id: 1,
    title: "Sanctity of free will",
    description:
      "The belief that individual autonomy is paramount and should never be compromised.",
  },
  {
    id: 2,
    title: "Sanctity of no obligation",
    description:
      "The belief that individuals should never be coerced or obligated into actions against their will.",
  },
  {
    id: 3,
    title: "Sanctity of privacy",
    description: "",
  },
  {
    id: 4,
    title: "Transparency",
    description:
      "The belief that openness and honesty are mandatory in all interactions.",
  },
  {
    id: 5,
    title: "Sustainability",
    description:
      "The belief that actions today must not compromise future generations.",
  },
  {
    id: 6,
    title: "Stability and Survivability",
    description:
      "Stability in the product and the company. Aim to build a business that will last a millenium (as long as it is valuable and does not hinder the world)",
  },
  {
    id: 7,
    title: "Internalise Externalities",
    description: "",
  },
];

// Tenets are principles or policies derived from axioms, which guide decision-making.
export const tenets = [
  {
    id: 1,
    axioms: [1, 2],
    title:
      "Never have people entered into contracts without full understanding and want",
    description:
      "All contractual engagements must be made with full transparency, ensuring parties are both knowledgeable and willing.",
  },
  {
    id: 2,
    axioms: [3],
    title: "Respect for individual data privacy",
    description:
      "A commitment to the respectful treatment of personal data, in line with the principle of free will.",
  },
  {
    id: 3,
    axioms: [4],
    title: "Transparent business operations",
    description:
      "All business operations should be transparent to all stakeholders to the fullest extent possible. This raises discussions about whether too much transparency would hurt the company and undermine the goal (i.e. is a consequentialist view of level-of-transparency appropriate?",
  },
  {
    id: 4,
    axioms: [5],
    title: "Commitment to environmental responsibility",
    description:
      "Adherence to sustainable practices in all aspects of business.",
  },
  {
    id: 5,
    axioms: [6],
    title: "Stable, scalable, restorable, mirrored databases",
    description: "",
  },
  {
    id: 6,
    axioms: [6],
    title: "Stable, scalable, restorable, mirrored databases",
    description: "",
  },
];

// Imperatives are actionable rules or guidelines that stem from tenets.
export const imperatives = [
  {
    id: 1,
    tenets: [1],
    title:
      "Contracts, terms & conditions must be as explicit and understandable as possible",
    description:
      "The language and terms used in contracts must be clear, unambiguous, and easily comprehensible to all parties involved.",
  },
  {
    id: 2,
    tenets: [2],
    title: "Ensure stringent data protection measures",
    description:
      "Enforce robust security measures to guarantee the integrity and confidentiality of individual data.",
  },
  {
    id: 3,
    tenets: [3],
    title: "Regularly disclose financial and operational data",
    description:
      "Transparently share key performance indicators, financial metrics, and other relevant data at regular intervals.",
  },
  {
    id: 4,
    tenets: [4],
    title: "Adopt and promote eco-friendly practices",
    description:
      "Integrate sustainable practices into business operations and encourage stakeholders to do the same.",
  },
  {
    id: 5,
    tenets: [5],
    title: "Never expose real tables to an application",
    description:
      " Create and maintain an 'API' schema which contains only views, functions, procedures, and only allow applications to use this schema. This gives you a layer of indirection on the DB side such that you can nearly eliminate the dance of coordinating application changes and database migrations.",
  },
];
// Business proccesses must then adhere to imperitives.

export const articlesTemp = [
  {
    topic: "LLMs",
    notes: `
      At the very least, LLMs should be considered as comparable to the productivity/ability increase that search engines offered, and directories before that.
      - 'Fuzzy' questions are now possible (TipOfTheTongue, general inquiry, etc.)
      - Data analysis now possible that wasn't before (e.g. 'Check my spotify account and see what the average #listens is for songs. Then you can see how niche your taste is.')
      - Speed increases (faster to get info and analyse data)
      - LLMs are good when you speak at a high level, regarding high level topics (or where training data was from academics etc.). But not when it's using quora and reddit posts for training.
    `,
  },
  {
    topic: "Email - DMarc etc.",
    notes: `
      BIMI (Brand Indicators for Message Identification) is a standard that allows domain owners to associate their brand logo with their email messages. By linking a verified SVG logo to DNS records, email providers who support BIMI can display the logo next to the email in the recipient's inbox. This enhances brand recognition and can help in combating phishing attacks. The process typically involves setting up a BIMI text record in your DNS, associating an SVG image, and passing DMARC authentication. BIMI aims to create a more secure and brand-centric email ecosystem.
      This not only helps brand identity, but neatly packages your email security.
      DMARC: https://news.ycombinator.com/item?id=37729964
      DKIM: https://news.ycombinator.com/item?id=37723688
      BIMI: https://www.litmus.com/blog/what-is-bimi-and-why-should-email-marketers-care
      DMARC, SPF, and DKIM: https://news.ycombinator.com/item?id=29869266
      `,
  },
  {
    topic: "(One article per business framework submodule)",
    notes: `
      E.g. see the 'prices' module and submodules - when to implement price increases, how to calculate them, what to cater for e.g. inflation
    `,
  },
  {
    topic: "Choosing an offering / What product/service to provide",
    notes: `(this should be from Governance > Model)`,
  },
  {
    topic: "Renegade data schema - Either not viable or everyone is missing the wood for the trees",
    notes: `schema is dynamic, and modern dbs should be able to handle table views on the fly for truly customisable platform`,
  },
  {
    topic: "(Related to the 'renegade data schema' article) - 'A truly custom business platform",
    notes: `Standard complaints about Odoo et al: Hitting limitations, not being able to customise it etc.
    But our one is different - The modules can be tweaked in any way you want.
    (Examples)`,
  },
];

export const pricingTemp   = {
  sole: {
    sizecap: 'x number of entities, $x afterwards',// is this sustainable? Check how usage would impact the supabase costs.
    spaces: 1,
    members: 1,
    price: '$0 - FREE', // is this sustainable? Check how usage would impact the supabase costs.
  },
  grow: {
    sizecap: 'y number of entities, $x afterwards',
    spaces: 1,
    members: 'unlimited',
    price: '$Y per member',
  },
  business : {
    sizecap: 'z number of entities, $x afterwards',
    spaces:'unlimited',
    members: 'unlimited',
    price: '$Z per member',
  }
}

// We need 'steps' - granular actions that can occur within the app. 
// - These combine into workflows/userflows.
// - The business modules are 'manifested from' workflows + template Entities.
export const stepsTemp = [
  {
    title: "Click button/link or 'navigate to x/y/z'",
  },
  {
    title: "Call Webhook/Endpoint",
  },
  {
    title: "Db function or edge function",
  },
  {
    title: "Db trigger",
  },
  {
    title: "Sync occurs / entity created / relationship created",
  },
]

export const questionsTools = [ // fundamental heuristics needed?
  "What is the nature of the set relationship between A and B? Are they identical, subsets, or do they intersect?",
  "Is this necessary? Does it solve the problem?"
]