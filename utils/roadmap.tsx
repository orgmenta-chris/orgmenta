// Placeholder - will have a roadmap module for displaying a product roadmap.
// This will be used by OrgmentaRoadmap.

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

// Features
// specific features for the system. userstories can be constructed with:
// const exampleUserstory  = 'As a' + 'Dispatcher' + 'I want to '+ features[0].userstories.dispatcher;
// User stories will be split out into being separate entities (which can then be linked to requirements, features, user_roles etc.
export const features = [
  {
    title: "URL Parameters",
    version: 0.0,
    status: "0. New",
    description: "Email (and other communication channels) Connectors",
    priority: 2,
    userstories: {
      any_user: [
        "use a url with 'action' parameters in it, in order to prepopulate an action form. For example, add/title=example&type=Event should prepopulate a form.This means that the action tabs must be accessible via url.",
        "streamline my workflow, add bookmarks etc.",
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
];

// Requirements
// General 'needs' for the system
export const requirements = [
  {
    title: `Data Loss`,
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
export const paradigms = [
  "Data structure: Node-Edge, 2-table paradigm instead of statically defined tables",
  "Displays: Data displays that the user can toggle between at will (to be restricted as necessary if users say they have 'TOO MUCH choice'/causes confusion)",
  "Categories/Modules/Business Framework",
  "Dynamic attributes",
  "TechStack (react native stack)",
  "'ViewRouterLink anything to anything' (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)",
  "Custom attributes/properties on entities (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)",
  "Many-many relationships (at the moment, everything is attached to everything, e.g. an item may be linked to a category, the category's parent, the category's grandparent etc.. But this will balloon out, so we may need to do recursive joins in postgresql.)",
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

export const arrayCompetitors: { id: number; name: string; industry: string, url: string }[] = [
  { id: 1, name: "ServiceNow", industry: 'IT', url: "https://www.servicenow.com" },
  { id: 2, name: "ConnectWise Manage/PSA", industry: 'IT', url: "https://www.connectwise.com" },
  { id: 3, name: "Autotask", industry: 'IT', url: "https://www.autotask.com" },
  { id: 4, name: "SAP", industry: 'agnostic', url: "https://www.sap.com" },
  { id: 5, name: "Salesforce", industry: 'agnostic', url: "https://www.salesforce.com" },
  { id: 6, name: "Halo PSA", industry: 'IT', url: "https://www.haloservicemanagement.com" },
  { id: 7, name: "Ninja RMM / NinjaOne", industry: 'IT', url: "https://www.ninjarmm.com" },
  { id: 8, name: "FreshWorks / FreshDesk / FreshService", industry: 'agnostic', url: "https://www.freshworks.com" },
  { id: 9, name: "Jira Service Management", industry: 'IT', url: "https://www.atlassian.com/software/jira/service-management" },
  { id: 10, name: "Synchro MSP", industry: 'IT', url: "https://www.synchromsp.com" },
  { id: 11, name: "RepairShoppr", industry: 'IT', url: "https://www.repairshoppr.com" },
  { id: 12, name: "Ivanti Service Manager", industry: 'IT', url: "https://www.ivanti.com" },
  { id: 13, name: "ManageEngine ServiceDesk Plus", industry: 'IT', url: "https://www.manageengine.com" },
  { id: 14, name: "SysAid", industry: 'agnostic', url: "https://www.sysaid.com" },
  { id: 15, name: "Cherwell ITSM", industry: 'IT', url: "https://www.cherwell.com" },
  { id: 16, name: "BMC Remedy ITSM", industry: 'IT', url: "https://www.bmc.com" },
  { id: 17, name: "Odoo", industry: 'agnostic', url: "https://www.odoo.com" },
  { id: 18, name: "Thread (https://www.getthread.com/)", industry: 'IT', url: "https://www.getthread.com/" },
  { id: 19, name: "Microsoft Dynamics", industry: 'agnostic', url: "https://www.microsoft.com/en-us/dynamics365" }
];

