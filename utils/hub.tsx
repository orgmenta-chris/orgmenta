// Placeholder.
// Chris is trying not to touch this, for simplicitly and keep scope as small as possible for now.
// But to be discussed before go-live, for branding purposes.

// TEMP

export const arrayHubTargetsTemp: {
  id: number;
  title: string;
  assignedTo: string;
  versions: number[];
}[] = [
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

export const arrayHubVersionsTemp: {
  id: number;
  title: string;
  feature: number;
}[] = [
  { id: 1, title: "Help Module v0.1", feature: 1 },
  { id: 2, title: "Stripe Module v0.1", feature: 2 },
];

export const arrayHubFeaturesTemp: {
  id: number;
  title: string;
  usecases: number[];
}[] = [
  { id: 1, title: "Help Module", usecases: [1] },
  { id: 2, title: "Stripe Module", usecases: [2, 3] },
];

export const mapHubUsecasesTemp: {
  id: number;
  title: string;
}[] = [
  { id: 1, title: "Be able to access help on any component in the UI" },
  { id: 2, title: "Link client stripe account" },
  { id: 3, title: "Pay customer invoice via stripe in orgmenta" },
];

export const arrayHubPrioritiesTemp: {
  priority: number;
  description: string;
}[] = [
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

// Requirements

export const arrayHubRequirementsTemp: {
  category: string;
  title: string;
  description: string;
}[] = [
  {
    category: "User Satisfaction",
    title: "UI satisfaction",
    description:
      "The interface must be intuitive enough for new users to perform basic tasks without training.",
  },
  {
    category: "Functional",
    title: "CRUD",
    description:
      "The system must support the entry, modification, and deletion of customer records.",
  },
  {
    category: "Performance",
    title: "",
    description:
      "The system must support up to 10,000 concurrent users without degrading performance below acceptable levels.",
  },
  {
    title: "Encrypted Data",
    category: "Security",
    description:
      "All customer data must be encrypted using at least AES-256 encryption.",
  },
  {
    title: "Failure Rate",
    category: "Reliability",
    description:
      "The system must have a Mean Time Between Failures (MTBF) of 500 hours or more.",
  },
  {
    title: "Exports",
    category: "Input/Output",
    description:
      "The software must allow for the export of customer data in both CSV and XML formats.",
  },
  {
    title: "Field validation",
    category: "Data Integrity",
    description: "The software must validate all fields (live) before saving.",
  },
  {
    title: "Rapid Entry",
    category: "Usability",
    description:
      "Users must be able to complete the data entry for a new entity (e.g. a new customer record) within three minutes.",
  },
];

// General 'needs' for the system

export const needs: {
  title: string;
  description: string;
}[] = [
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
export const procedures: {
  title: string;
  description: string;
  steps: string[];
  url_param: string;
}[] = [
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
      "Avoid dark patterns, anti-patterns, anti-consumer behaviour. https://theconversation.com/dark-patterns-how-online-companies-strive-to-keep-your-money-and-data-when-you-try-to-leave-201620",
  },
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
      "Any entity can be viewed with any POV (all displays, all types, all statuses, etc.). If this is too confusing, we can add an attribute called 'functionalities' which locks down exactly what each category/module/other_entities has shown in the UI. E.g., you might hide 'messages' and 'maps' from invoicing module",
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
export const checklist: {
  title: string;
  description: string;
}[] = [
  {
    title: "Take backups",
    description:
      "Export/backup any data/systems before making any changes. (e.g. supabase sql editor > run query > export to csv) (But build this functionality into backup.tsx so it can be done programatically from the dev area of the Orgmenta app",
  },
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
  title: string;
  industry: string;
  url: string;
}[] = [
  {
    id: 1,
    title: "ServiceNow",
    industry: "IT",
    url: "https://www.servicenow.com",
  },
  {
    id: 2,
    title: "ConnectWise Manage/PSA",
    industry: "IT",
    url: "https://www.connectwise.com",
  },
  { id: 3, title: "Autotask", industry: "IT", url: "https://www.autotask.com" },
  { id: 4, title: "SAP", industry: "agnostic", url: "https://www.sap.com" },
  {
    id: 5,
    title: "Salesforce",
    industry: "agnostic",
    url: "https://www.salesforce.com",
  },
  {
    id: 6,
    title: "Halo PSA",
    industry: "IT",
    url: "https://www.haloservicemanagement.com",
  },
  {
    id: 7,
    title: "Ninja RMM / NinjaOne",
    industry: "IT",
    url: "https://www.ninjarmm.com",
  },
  {
    id: 8,
    title: "FreshWorks / FreshDesk / FreshService",
    industry: "agnostic",
    url: "https://www.freshworks.com",
  },
  {
    id: 9,
    title: "Jira Service Management",
    industry: "IT",
    url: "https://www.atlassian.com/software/jira/service-management",
  },
  {
    id: 10,
    title: "Synchro MSP",
    industry: "IT",
    url: "https://www.synchromsp.com",
  },
  {
    id: 11,
    title: "RepairShoppr",
    industry: "IT",
    url: "https://www.repairshoppr.com",
  },
  {
    id: 12,
    title: "Ivanti Service Manager",
    industry: "IT",
    url: "https://www.ivanti.com",
  },
  {
    id: 13,
    title: "ManageEngine ServiceDesk Plus",
    industry: "IT",
    url: "https://www.manageengine.com",
  },
  {
    id: 14,
    title: "SysAid",
    industry: "agnostic",
    url: "https://www.sysaid.com",
  },
  {
    id: 15,
    title: "Cherwell ITSM",
    industry: "IT",
    url: "https://www.cherwell.com",
  },
  {
    id: 16,
    title: "BMC Remedy ITSM",
    industry: "IT",
    url: "https://www.bmc.com",
  },
  { id: 17, title: "Odoo", industry: "agnostic", url: "https://www.odoo.com" },
  {
    id: 18,
    title: "Thread (https://www.getthread.com/)",
    industry: "IT",
    url: "https://www.getthread.com/",
  },
  {
    id: 19,
    title: "Microsoft Dynamics",
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
    title: "email, sms etc",
    categories: [],
    integrations: [],
    priority: 2,
  },
  {
    title: "PagerDuty",
    categories: [],
    integrations: [],
    priority: 3,
  },
  {
    title: "UptimeRobot",
    categories: [],
    integrations: [],
    priority: 2,
  },
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
    title: "Rewst",
    categories: ["MSP Automation"],
    integrations: [],
    priority: 2,
    references: ["rewst.io"],
  },
  {
    title: "ConnectWise PSA (Manage) / Asio",
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
    references: ["https://github.com/itglue"],
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
    title: "ConnectWise Control / Screenconnect",
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
    title: "https://equals.com/",
    categories: ["Spreadsheets, Productivity"],
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
  { title: "HubSpot", categories: ["CRM"], integrations: [], priority: 3 },
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
    references: [
      "https://n-able.com/partnerships/TAP",
      "https://www.n-able.com/partnerships/technology-alliance-program",
    ],
  },
  {
    title: "Naverisk",
    categories: ["RMM"],
    integrations: [""],
    priority: 4,
    references: [
      "http://kb.naverisk.com/en/articles/6123225-api-reference-guide",
    ],
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
    title:
      "https://www.kimai.org/ - just for comparison. see https://www.kimai.org/store/",
    categories: ["Finance, TimeTracking"],
    integrations: [],
    priority: 10,
  },
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

export const orgmentaTerritories: {
  region: string;
  population: number;
  language_primary: string;
  language_secondary: string;
  language_tertiary: string;
  remaining: string;
}[] = [
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

export const languagesByTotalSpeakers: {
  priority: number;
  language: string;
  speakers_primary: number;
  speakers_secondary: number;
  speakers_total: number;
}[] = [
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

export const ethicsQuestions: string[] = [
  "Is it wrong to be implementing Microsoft et al first, and further strengthening their monolopoly? Or should be use that as a spring board to get power before we help break the monopoly?",
  "is it wrong to be concentrating on the wealthier territories? Should we be lifting up the rest first, even if it's counter to our success? Or is our success a way to then enable the lifting?",
  "Should we be charging more per seat to smaller companies, and giving larger companies economies of scale? Is this necessary to get the bigger companies as customers?",
];

// Axioms serve as the non-derivable, foundational beliefs.

export const axioms: {
  id: number;
  title: string;
  description: string;
}[] = [
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
  {
    id: 8,
    title: "Lawfulness",
    description:
      "Abiding by laws is mandatory and ethical. Unlawfulness undermines the state: Regardless of alleigance or agreement with a state, disruption is a consequentalist move that cannot and should not be taken.",
  },
  {
    id: 9,
    title: "Data Ownership",
    description:
      "An obligation that companies of a certain size must offer. See the article on this.",
  },
];

// Tenets are principles or policies derived from axioms, which guide decision-making.

export const tenets: {
  id: number;
  axioms: number[];
  title: string;
  description: string;
}[] = [
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
  {
    id: 7,
    axioms: [9],
    title: "Data import and export",
    description:
      "The export part of this is an obligation that companies of a certain size must offer. See the axiom.",
  },
];

// Imperatives are actionable rules or guidelines that stem from tenets.
export const imperatives: {
  id: number;
  tenets: number[];
  title: string;
  description: string;
}[] = [
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

export const heuristics: any = {
  agreeing: {
    description:
      "Do you agree / align with common thought or not - And what does this mean / should it be challenged",
    notes: [
      `Where you you stand in the 'overton window' on this topic?`,
      `Are you being a sheep, if you agree?`,
      `Are you just being contrarian, if you don't agree?`,
      `If you are on an extreme of the scale, then why don't you align with common thought?`,
      `If you are on the extreme, then this is a red flag to examine.`,
      `Usually, 'correctness' should be expected to be someone on the bell curve of common thought.`,
      `This is analygous to the 'jelly bean theory', where a larger group of people should converge on a more accurate estimate.`,
      `However - If the entire group is biased or is missing some information, then the bell curve may be skewed in a direction.`,
      `So, the challenge is to discover any missing arguments. If none are found, then perhaps it is an indication that the bell curve is roughly accurate`,
    ],
  },
  control: {
    description: "Is something actually within your control or not?",
    notes: [
      `If something is genuinely out of your control, then employ stoicism and focus on what actually is within your control.`,
      `But examine if it really is outside of your control or not.`,
      `And if it is outside of your control, are its effects so great? Many people let the wind knock them off their feet.`,
      `Employ personnel agency and awareness.`,
    ],
  },
};
// Business proccesses must then adhere to imperitives.

export const pricingTemp = {
  sole: {
    sizecap: "x number of entities, $x afterwards", // is this sustainable? Check how usage would impact the supabase costs.
    spaces: 1,
    members: 1,
    price: "$0 - FREE", // is this sustainable? Check how usage would impact the supabase costs.
  },
  grow: {
    sizecap: "y number of entities, $x afterwards",
    spaces: 1,
    members: "unlimited",
    price: "$Y per member",
  },
  business: {
    sizecap: "z number of entities, $x afterwards",
    spaces: "unlimited",
    members: "unlimited",
    price: "$Z per member",
  },
};

// We need 'steps' or 'actions' - granular actions that can occur within the app.
// - These combine into workflows/userflows.
// - The business modules are 'manifested from' workflows + template Entities.
export const stepsTemp: {
  // id: number;
  title: string;
}[] = [
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
];

export const stepTypesTemp: {
  id?: number;
  title: string;
  description?: string;
}[] = [
  {
    id:0,
    title: "Link",
    description: "Navigate To",
  },
  {
    id:1,
    title: "Button",
    description: "Click",
  },
  {
    id:2,
    title: "View",
    description: "Show a component",
  },
  {
    id:3,
    title: "Create Entity",
  },
  {
    id:4,
    title: "Create Relationship",
  },
  {
    id:5,
    title: "Search Entities",
  },
  {
    id:6,
    title: "Search Relationships",
  },
  {
    id:7,
    title: "Conditional",
    description: "If/Then/Else",
  },
  {
    id:8,
    title: "Run Function",
  },
];

export const questionsTools: string[] = [
  // fundamental heuristics needed?
  "What is the nature of the set relationship between A and B? Are they identical, subsets, or do they intersect?",
  "Is this necessary? Does it solve the problem?",
];

export const userRoles = [
  {
    title: "any_user",
    description: "Any user of the Orgmenta app/ecosystem",
    id: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "orgmenta_employee",
    description:
      "A developer, contractor or other employee that works for Orgmenta",
    id: "63adb211-6ade-4bcc-a997-558865f43439",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_user",
    description: "Any user that works for an Orgmenta client",
    id: "2d63eb0f-ab03-485d-b621-b6f503248028",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_bookkeeper",
    description: "The accounts receivables employee for the client",
    id: "1e16aea0-5a25-4abc-803c-25ac57d7deab",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_dispatcher",
    description: "Triager / Dispatcher / Service Delivery Manager",
    id: "27255e4c-a308-475b-89fd-65c7737495da",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_administrator",
    description:
      "The person or dev team that manages the Orgmenta system for the client company",
    id: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_technician",
    description:
      "An engineer, developer or other technical person that works for a client",
    id: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_financialcontroller",
    description: "The Client CFO / Primary finance & accounts manager",
    id: "734de3a3-7812-4c95-99d0-9fb72242899e",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_executive",
    description: "Any C title or division head.",
    id: "8a939b3e-7e9d-4f05-84de-a042dacd53bc",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_manager",
    description:
      "Any client employee responsible for managing employees / line manager",
    id: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_hrmanager",
    description: "Responsible for employees and contractors",
    id: "b05b65f6-dd77-4571-b2e3-e1b2612803a8",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_accountmanager",
    description: "Responsible for a specific customer account.",
    id: "122dffb8-6150-4015-b6c3-40baa22d69fc",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_salesmanager",
    description: "Responsible for customers, leads, proposals and sales.",
    id: "ce3e3a0f-d671-4bd3-bfe7-d72b7e8877d2",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_salesperson",
    description: "Responsible for specific quotes/proposals",
    id: "b650a457-5718-457c-a749-e23661b15409",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_procurement",
    description: "Responsible for procurement and inventory management",
    id: "a6adbc54-db95-4165-b590-9b366ee2c387",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_marketingmanager",
    description: "Responsible for procurement and inventory management",
    id: "7984c943-25ed-4800-a68d-3ba6491c29ba",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "customer_user",
    description:
      "Any client customer user, e.g. a person with a broken workstation",
    id: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "customer_bookkeeper",
    description: "The accounts receivables employee for the client's customer",
    id: "e0c68ec6-1d26-46a6-bece-386492884d58",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "customer_financialcontroller",
    description: "The Client CFO / Primary finance & accounts manager",
    id: "351a34bc-6e7d-40dc-b570-66db06950978",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_auditor",
    description:
      "Internal compliance auditor, e.g. for OH&S Checklists/ISO:9001/27001/45001/14001 auditing",
    id: "4d223c32-a7e3-42c0-9565-d758b6ba2f5f",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "external_auditor",
    description:
      "External compliance auditor, e.g. for ISO:9001/27001/45001/14001 auditing",
    id: "f708e13f-16f1-4473-9443-178af6a1fd99",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "customer_manager",
    description: "A decision maker at the client's customer company",
    id: "58d426c0-d3ef-400e-9bfd-dab194d7ada0",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "client_customerteam",
    description: "A team / any employee at the client's customer company",
    id: "58d426c0-d3ef-400e-9bfd-dab194d7adb0",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
  {
    title: "cusotomer_financialcontroller",
    description: "The financial decision maker for the client's customer",
    id: "58d426c0-d3ef-400e-9bfd-dab194d7adc0",
    type: "Contact",
    class: "Group",
    categories: [
      "product-catalog-solutions-usecases-userroles",
      "project-response-stakeholders-stakeholderlist",
    ],
  },
];

export const features = [
  {
    id: "c070b927-7497-4dcf-ae44-f7d4f0326af7",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Update",
    status: "0. New",
    description:
      "App updates - either via app store, expo updates, github>pullrequest>autodeplyNetlify, or other",
    priority: 2,
  },
  {
    id: "47361276-19d3-4c1b-a6cb-2c7a2a071dde",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "History/Undo/Redo",
    status: "0. New",
    description:
      "Undo (and redo) to any point in entity-relationship histories Chris to design this",
    priority: 2,
  },
  {
    id: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "URL Parameters",
    status: "0. New",
    description:
      "Email (and other communication channels) Connectors see autotask live formulas, may be useful reference: https://ww1.autotask.net/help/content/4_admin/2featuressettings/livereports/addlivereport/Calculations/LRFormulas.htm",
    priority: 2,
  },
  {
    id: "a99df5b7-b11c-4b7c-813b-d9ee00b11c73",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Commschannel Detectors",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "d47f5312-e25a-432a-b2d5-0458ca13e10a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Ticket Management",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "22ef8bdd-e50f-4de9-a080-2db0f7ab3f1a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Asset (Configuration) Management",
    status: "0. New",
    description:
      "Manage client and internal workstations, servers, licenses, networks and any other tangible/intangible, physical/digital asset",
    priority: 1,
  },
  {
    id: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Billing & Invoicing to Customers",
    status: "0. New",
    description: "Clients issue invoices to their customers",
    priority: 1,
  },
  {
    id: "ce31d4d5-0396-4328-b6b8-494028c1c09e",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Reporting & Analytics",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "e4fb42dc-72df-4a6a-8f30-b84293ad1cdb",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Workflow Automations",
    status: "0. New",
    description:
      "Conditional logic,  rule running and template generations. If [a, b, c] then [x, y, z]",
    priority: 2,
  },
  {
    id: "f4ce4eb2-eafc-467e-a98f-63c8ab7c21db",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Time Tracking",
    status: "0. New",
    description: "Time Entries & Timesheets",
    priority: 1,
  },
  {
    id: "99cf12ac-e26d-4fe9-a085-6648e88afda6",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Knowledge Base",
    status: "0. New",
    description: "A store of procedures and other information",
    priority: 2,
  },
  {
    id: "bc82de47-3462-4f41-846f-95008453ca02",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Lead Management",
    status: "0. New",
    description:
      "Lead, Quote, Prospect, Proposal management of potential customers",
    priority: 2,
  },
  {
    id: "428fbfe3-0ad4-47b0-9e95-d10ca151bf13",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Customer Relationship Management",
    status: "0. New",
    description: "Customer lifecycles",
    priority: 2,
  },
  {
    id: "cd47c650-768d-43c9-8304-04320bffb546",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Service Level Agreements",
    status: "0. New",
    description: "SLAs and SLOs",
    priority: 2,
  },
  {
    id: "41225811-5b04-4039-9ff3-be235b0fbcba",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Compliance, Auditing& Security Management",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "5b5722d1-c379-4f89-a734-94cd3b0c4b0a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "VOIP Integration",
    status: "0. New",
    description: "",
    priority: 4,
  },
  {
    id: "f1be07dc-09d7-4c5f-bd51-a65cc3aabdd7",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Internal Tool Creation",
    status: "0. New",
    description:
      "Allow client users to create their own tools & reports, instead of relying on their admin/dev team which has a longer, more costly dev cycle",
    priority: 4,
  },
  {
    id: "9f7aba60-33f7-4f25-853d-8898b1a8f2f9",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Status Page",
    status: "0. New",
    description: "(like statuspage or updown.io)",
    priority: 4,
  },
  {
    id: "80fd1a58-1c54-44a4-832b-762194822555",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Link Page",
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
  },
  {
    id: "000252c1-783a-4798-8206-6b8c8888f791",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Link Shortener",
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
  },
  {
    id: "d5bd0a8d-0f56-4824-935a-eef4f0eb4581",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Corporate Website",
    status: "0. New",
    description: "(like link tree or leaf page)",
    priority: 4,
  },
  {
    id: "777ee434-ea29-48fd-80a1-6239c119b853",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Multi-Tenancy and Account Segmentation",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "325ecc88-80ff-41f6-8ba2-b97a27fd405d",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Notifications and Alerts",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "ccfe3a8d-9ff6-4284-9b9e-27d9a2706def",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Calendar and Scheduling",
    status: "0. New",
    description: "",
    priority: 1,
  },
  {
    id: "e0eb58a6-52aa-42ea-bae1-37718a745a7a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Customer Contract Management",
    status: "0. New",
    description: "",
    priority: 1,
  },
  {
    id: "be04e541-31ea-4780-b12b-b04cd7df474b",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Mobile Accessibility",
    status: "0. New",
    description: "",
    priority: 1,
  },
  {
    id: "e7cbe818-e819-4467-9617-c9cba13056c6",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Customer Satisfaction Surveys",
    status: "0. New",
    description:
      "CSAT, Net Promotor Score (NPS), Customer Effort Score (CES), Customer Loyalty Index (CLI),\tCustomer Satisfaction Index (CSI) etc. \n\t\t\tNet Promoter Score (NPS): NPS measures customer loyalty by asking customers how likely they are to recommend a product or service to others. Responses are typically on a scale of 0 to 10.\n\t\t\tCustomer Effort Score (CES): CES assesses the ease with which customers can achieve their goals when interacting with a product or service. It typically uses a scale to measure effort, with lower scores indicating less effort required.\n\t\t\tCustomer Loyalty Index (CLI): CLI combines various metrics to evaluate customer loyalty. It considers factors like repeat purchases, customer lifetime value, and advocacy.\n\t\t\tCustomer Satisfaction Index (CSI): CSI is a broad measure of overall satisfaction with a company's products or services. It often includes multiple survey questions to assess different aspects of the customer experience.\n\t\t\tOverall Satisfaction (OSAT): OSAT is a straightforward measure of overall customer satisfaction with a specific interaction, product, or service.\n\t\t\tCustomer Churn Rate: This metric measures the percentage of customers who stop using a product or service over a specific period, indicating dissatisfaction.\n\t\t\tCustomer Retention Rate: The opposite of churn rate, this measures the percentage of customers who continue using a product or service over time.\n\t\t\tSocial Media Sentiment Analysis: This involves analyzing social media comments, reviews, and mentions to gauge public sentiment and customer satisfaction.\n\t\t\tCustomer Feedback Forms: These can be custom surveys designed by companies to gather feedback on specific aspects of their products or services.\n\t\t\tOnline Reviews and Ratings: Monitoring and analyzing online reviews and ratings on platforms like Yelp, Google, or Amazon can provide insights into customer satisfaction.",
    priority: 1,
  },
  {
    id: "dbd0f48c-30e7-4f35-8a7b-5d7e2c0ebe3c",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Internal Communications Tool",
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
  },
  {
    id: "8da463b3-6db6-4a50-85c5-12018325c275",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Business Continuity and Disaster Recovery",
    status: "0. New",
    description: "Built-in backup and recovery options",
    priority: 1,
  },
  {
    id: "af25beb4-abd5-4c39-81db-883c652e9093",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Resource Allocation and Capacity Planning",
    status: "0. New",
    description: "",
    priority: 1,
  },
  {
    id: "b523f578-99a3-4ce3-8347-77645f830da3",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Change Management",
    status: "0. New",
    description:
      "Change Requests, Change Approvals, Implementation Feebback, Rollback Options, Lessons Learned",
    priority: 3,
  },
  {
    id: "bb1029aa-6bea-4b7e-a596-ffe026a2c2ea",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Quality Control",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "dfcd7b0d-e71f-4b07-9834-3358b4c781c0",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Quality Assurance",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "90116b55-0076-44d1-b5f6-7654739f41bd",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Email Design",
    status: "0. New",
    description:
      "design email templates from within the PSA. (see https://news.ycombinator.com/item?id=37596253 loops and similar)",
    priority: 3,
  },
  {
    id: "36f5d043-aa67-4c3a-baf2-f09d4218385f",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "White-Labeling and Customization",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "c21d5325-f0de-4c1a-98b0-6e694b29035d",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Shared Inbox",
    status: "0. New",
    description:
      "'One space for email, marketing, and customer relationships' (e.g. https://helpmonks.com/) and for employees to be able to view shared folders/inboxes",
    priority: 2,
  },
  {
    id: "bddee75a-38d9-4fae-b506-22e5dd9ac5d6",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Keyboard shortcuts",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "a38f29fc-fe89-4361-b60d-b77a7ee63cdb",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Inventory Management",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "096e781a-4a49-4cee-a6a4-2d1eecf486d7",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Stock Take",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "db7fa71c-5737-4fdc-a467-3bf65762084c",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Signatures/Signoff & Document Management",
    status: "0. New",
    description: "E-Signature and Document Management",
    priority: 3,
  },
  {
    id: "4d9355bf-5a90-4258-80e6-6328a774f2ff",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Social Media Integration",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "96ccca93-0257-4251-bac9-310a46c17068",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Gamification",
    status: "0. New",
    description: "",
    priority: 4,
  },
  {
    id: "43f40f77-37b5-4f8a-95bd-8fdf8cfb967a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Real-time Collaboration",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "3d0d460d-be1c-44f6-9b8c-bdb961e2dbd5",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Payment Processing",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "948500cf-e225-4b82-8712-e76fc678790a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Client Portal",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "70c0d3dc-c095-46c2-bd74-820009f5b43b",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Rosters, availability, On call and Time-Off Management",
    status: "0. New",
    description: "",
    priority: 3,
  },
  {
    id: "6f12c8ff-98d9-498d-93bd-3eff7fd7cc88",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Sales Proposals and Quoting",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "49a9702f-fe2a-40ac-88a5-56c9a7e61d07",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Natural Language & Rich Text Notes with Links",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "e0850e25-a4ef-4932-9dd5-6ecbcbf752ee",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Globalization and Localization",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "f7900be6-d16a-4152-a994-6beedb0132ad",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Vendor Management",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "abe10ac7-3448-4448-98af-8f76898691df",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Training and Documentation",
    status: "0. New",
    description: "Training, Learning & Development, and associated Resources",
    priority: 2,
  },
  {
    id: "b5632457-ca88-4db8-9017-26a7b0bbff7a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Business Intelligence and Advanced Analytics",
    status: "0. New",
    description: "Training, Learning & Development, and associated Resources",
    priority: 2,
  },
  {
    id: "54be5bd9-4769-483f-ab13-5abf97506083",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Tax Settings and Region-based tax rules",
    status: "0. New",
    description: "",
    priority: 2,
  },
  {
    id: "924eee43-5714-4c13-aa9d-b2d51114ae58",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Audit Trail",
    status: "0. New",
    description: "Entity Logs",
    priority: 1,
  },
  {
    id: "7af3135a-f611-4c70-8064-43ad4a83cb96",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Signup Functionality",
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
  },
  {
    id: "976f0a15-e7f6-4b92-878c-e0d405e746db",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Signup Functionality",
    status: "0. New",
    description:
      "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
    priority: 1,
  },
  {
    id: "dc693c6d-3f45-43f8-9f91-df249911d191",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Change Password Functionality",
    status: "0. New",
    description:
      "Implement a function that allows users to change their passwords after signing in.",
    priority: 1,
  },
  {
    id: "a27eb1ec-3b06-48a7-a38c-f2feddc22829",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Password Recovery (Forgot Password) Functionality",
    status: "0. New",
    description:
      "Provide a function for users to recover their passwords through a password reset process. This involves sending password reset emails and allowing users to set a new password.",
    priority: 1,
  },
  {
    id: "c9a7dcfe-9b21-465e-b1b8-6f49b86e7f80",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Social Authentication",
    status: "0. New",
    description:
      "Include functions for authenticating users using popular social media platforms like Google, Facebook, Twitter, etc.",
    priority: 1,
  },
  {
    id: "b726065c-cb19-48ea-b066-9760c8d485f7",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Multi-Factor Authentication (MFA)",
    status: "0. New",
    description:
      "Implement support for multi-factor authentication to enhance security by adding an extra layer of verification.",
    priority: 1,
  },
  {
    id: "f86dd2b4-8389-43ac-a5f4-d632ddc1d658",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Account Deactivation and Removal",
    status: "0. New",
    description:
      "Provide functions to allow users to deactivate or delete their accounts.",
    priority: 1,
  },
  {
    id: "1d158192-aecb-4937-bb46-4ff7f229949c",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Account Verification and Email Confirmation",
    status: "0. New",
    description:
      "Implement functions to send verification emails and confirm user email addresses.",
    priority: 1,
  },
  {
    id: "71d4c518-eb69-44d2-8eab-d214dd9a0c22",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "User Profile Management",
    status: "0. New",
    description:
      "Include functions to update user profile information, such as profile picture, display name, and other relevant details.",
    priority: 1,
  },
  {
    id: "1543870a-ba48-4ded-aaa2-3ea99b23360d",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Session Management",
    status: "0. New",
    description:
      "Enhance session management by adding functions to check and refresh authentication tokens.",
    priority: 1,
  },
  {
    id: "64e92f13-e9c0-4a6b-8ed1-c19d3477caed",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Role-Based Access Control (RBAC)",
    status: "0. New",
    description:
      "If applicable, include functions to manage user roles and permissions for different parts of the application.",
    priority: 1,
  },
  {
    id: "852f5713-fa24-4d78-900f-a2f82bc30c0a",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Security Enhancements",
    status: "0. New",
    description:
      "Implement security features like brute-force protection, account lockout mechanisms, and IP blocking.",
    priority: 1,
  },
  {
    id: "dc0026d8-db0c-4713-abc5-8ed3bf40844e",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Event Hooks and Customization",
    status: "0. New",
    description:
      "Provide hooks and customization options to allow developers to integrate the authentication package seamlessly into their applications.",
    priority: 1,
  },
  {
    id: "17cacc4c-88e3-45cb-9ce0-f1c60b3e8591",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Localization and Internationalization",
    status: "0. New",
    description:
      "Support different languages and regions by including features for localization and internationalization.",
    priority: 1,
  },
  {
    id: "7969a15d-5e2f-4df1-8b7c-ae9aa233f0ae",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Account Linking",
    status: "0. New",
    description:
      "Allow users to link multiple authentication methods to their account, such as email and social media accounts.",
    priority: 1,
  },
  {
    id: "ad31b44a-61cf-4998-a030-5e622c3356a6",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "OAuth and OpenID Connect Integration",
    status: "0. New",
    description:
      "Integrate with OAuth and OpenID Connect providers for broader authentication options.",
    priority: 1,
  },
  {
    id: "f80724f1-86cb-41b9-b638-ded560ca35fe",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Analytics and Monitoring",
    status: "0. New",
    description:
      "Include features to track authentication-related events and provide monitoring capabilities.",
    priority: 1,
  },
  {
    id: "f456bbcd-09ba-4095-b963-b7cd12b4f9b0",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Password Complexity and Policies",
    status: "0. New",
    description:
      "Provide options for setting and enforcing password complexity rules and policies.",
    priority: 1,
  },
  {
    id: "122e4871-0349-40c1-8839-62e340916eea",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "OAuth2 / OIDC Server (for Advanced Use Cases)",
    status: "0. New",
    description:
      "If your package aims to cover advanced use cases, consider offering OAuth2 or OpenID Connect server capabilities.",
    priority: 1,
  },
  {
    id: "3d6c0b12-9983-4293-80d1-a8231292996f",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Downtime detector",
    status: "0. New",
    description:
      "a la https://downdetector.com.au/ / https://www.pingdom.com/solution/website-down-detector/ / https://uptimerobot.com/",
    priority: 5,
  },
  {
    id: "a4319684-c42e-4845-a904-d12feeeecf2f",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "StatusPage",
    status: "0. New",
    description: "a la https://status.io/",
    priority: 4,
  },
  {
    id: "736032f4-4c12-4727-8b3c-6fe013e1c039",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "DNS Manager",
    status: "0. New",
    description:
      "Create a dns manager system for engineers to update from the PSA instead of logging into separate hosting instances.",
    priority: 5,
  },
  {
    id: "39163810-2398-443d-9180-be8d96720582",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title:
      "Extra rich text functionality: Ability to paste tables, screenshots (etc.) into rich text",
    status: "0. New",
    description:
      "CW etc. does not allow you to paste csv or xlsx cells/tables into time entries with formatting. We should be able to retain the formatting when pasted in.",
    priority: 5,
  },
  {
    id: "39367e23-ad1c-4295-8388-acf7dba8f924",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Password Manager",
    status: "0. New",
    description:
      "A la Bitwarden etc. Depends on appropriate securitty & security audit.",
    priority: 3,
  },
  {
    id: "70da35f7-4fb4-4b54-b0ad-24f56fe31c46",
    type: "Item",
    class: "Feature",
    categories: ["product-catalog-solutions-features"],
    title: "Payments System",
    status: "0. New",
    description:
      "Allow customers to pay our clients' invoices, downpayments etc. through Orgmenta. Via stripe if possible (allow clients to configure Stripe integration and accept payments, add products/sync products from Orgmenta etc.",
    priority: 3,
  },
];
export const usecases = [
  {
    id: "e75cb5ef-d32c-44cf-b0af-fcf615e62d8c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "use a url with 'action' parameters in it, in order to prepopulate an action form. For example, add/title=example&type=Event should prepopulate a form.This means that the action tabs must be accessible via url.",
  },
  {
    id: "83aa79c3-0f28-4716-88b5-a8bae1aed63a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "streamline my workflow, add bookmarks etc.",
  },
  {
    id: "2000924c-3c10-467e-97fc-1c8a25bc1c27",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "be able to put formulas in my url params, e.g. 'start=[today+3]', 'budget=[sum(childevents)+1]' etc.",
  },
  {
    id: "ae60e932-95aa-4254-a1a3-d819928a65db",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
  },
  {
    id: "279ae352-0525-4f45-b210-23cd9328102a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "guide users to a specific screen/display/state very easily",
  },
  {
    id: "907ed22d-dc1c-4646-b831-d49d7b6b8ae7",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "I want client enquiries to automatically create a ticket or update a relevant existing ticket.",
  },
  {
    id: "294dd3f3-443a-42a9-8b74-eaec93f6ed34",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
  },
  {
    id: "2114a8ec-4550-4731-821a-ea7f9eb53f60",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "have incoming tickets automatically categorized based on keywords, so they can be triaged effectively.",
  },
  {
    id: "1c67fee9-2106-4790-8edd-260f04148a89",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "Have all support tickets created on a single pane of glass for me to triage and assign",
  },
  {
    id: "b1091fd6-9fe1-41e0-8850-3008524cc90c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
  },
  {
    id: "4cbed7d4-7497-4f3b-a70a-95d486f4f7ef",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "submit tickets through multiple channels (email, chat, phone), so that I can reach support through my preferred method",
  },
  {
    id: "ac023fae-d31e-487e-a840-6741d5428cc1",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "perform automatic scans on client networks to populate asset data. (low priority, RMMs cover this)",
  },
  {
    id: "8241d97e-03b5-4c39-b21a-fde8bc531a6b",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "link assets to tickets to better understand the scope of issues and easily click through to them for further information",
  },
  {
    id: "4b09e5bc-976a-464e-8177-be11f8c16fef",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "see a utilization report for all managed assets, to understand overall performance.",
  },
  {
    id: "4e0ebc1c-7279-4e96-9847-2eae372e260a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "automate the conversion of billable hours into invoices",
  },
  {
    id: "0d85ba74-d972-4465-b728-0eae30fa73c9",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "have items suggested automatically for 'cover letter' emails (e.g. if there is a price increase imminent, there should be a suggestion to alert customers 2 months before.",
  },
  {
    id: "3fcc8841-2612-4889-8011-4706069bfd9a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "design invoice layouts and content",
  },
  {
    id: "c5b6f8e5-1f53-4cf3-b40f-0bf7bf0eb819",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "design cover letter layouts and content",
  },
  {
    id: "b4cc1ec5-c264-481a-b856-ac772ae2ac78",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "automatically receive invoices on time to the commschannel of my choosing",
  },
  {
    id: "8f1b4ff5-d462-47f9-8c84-469b99a67fb2",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see a breakdown of charges in my invoices for transparency",
  },
  {
    id: "e93fb507-795b-4294-9f99-21913a4052f8",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "integrate the PSA with accounting software for efficient reconciliation",
  },
  {
    id: "3f3f61c1-3b5b-4db0-93ec-83ff5984d86c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "set wording on invoices including payment details and terms, ",
  },
  {
    id: "35344c82-89cf-4a89-88c6-444802f71a0d",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "have 'cover letter' emails for the invoice pdfs",
  },
  {
    id: "01b7200c-5183-4739-bf05-0d68edf480fc",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "set price increases and add these notes to the email cover letters",
  },
  {
    id: "c9c37363-c862-4b94-b44b-ff448d5f7f3f",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "Easily verify & validate synced charges for invoices",
  },
  {
    id: "fbf1c8be-16ec-474d-bfbf-d5d7662e52e9",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "Automatically generate invoices",
  },
  {
    id: "9b7b0e20-75f7-4d11-abf5-bb2b0cdbd223",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "Ask for invoice approval from the client_financialcontroller",
  },
  {
    id: "d0cd2e6f-0a2f-4077-8798-4c0f6c1cb729",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view KPI dashboards to make data-driven decisions",
  },
  {
    id: "8724a981-3359-471d-87af-234026dea2cf",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "insights into common ticket issues for a given period, to improve service.",
  },
  {
    id: "298be306-2463-4ea1-af81-5c0f1aaf81cf",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "review revenue and expense reports to gauge profitability",
  },
  {
    id: "c2d3a296-7be0-497e-b700-74c0c9ed2b93",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "define workflows for custom setups and common service requests",
  },
  {
    id: "bc865489-0ca9-40df-b5b4-13c525cd7aaa",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "repetitive tasks to be automated to save time",
  },
  {
    id: "c98c6cc9-1e85-4dd4-8e1d-99dc403fd290",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "workflow analytics to identify bottlenecks",
  },
  {
    id: "297d23ab-bf26-489c-be0b-782fd4e50be9",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "define workflows for custom setups and common service requests",
  },
  {
    id: "aee00761-428b-4c9a-abb2-8ba1e798a78c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "repetitive tasks to be automated to save time",
  },
  {
    id: "40a7fa3e-5a83-4505-8ca9-8b3ed1bf286c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view the time logged against my projects for accountability",
  },
  {
    id: "5782f9d8-6897-4834-85fc-c4d8bdfbf4a9",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "the knowledgebase to be automatically updated with new resolutions",
  },
  {
    id: "d1da9730-3d34-4d6d-b333-a9489f425455",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "refer to the internal knowledge base for resolution steps",
  },
  {
    id: "4105ac36-b046-4501-9532-c00ed7221e72",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "access to a public-facing FAQ for common issues",
  },
  {
    id: "47afc41d-acbb-4a0d-9ebc-1d11ebd50054",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "Assign (automatically or manually) primary and secondary (etc.) salespeople to a lead/quote/proposal/opportunity",
  },
  {
    id: "0f98e590-73cb-4a18-8434-ed4b9a86fba4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "track leads and convert them into clients within the PSA",
  },
  {
    id: "d4a79774-c49f-4738-bc86-3ab5c79d62d0",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "access to a public-facing FAQ for common issues",
  },
  {
    id: "c66381f2-dc09-4751-be03-5d4d5ab28692",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "Assign a team to a customer",
  },
  {
    id: "d3f402ba-8c08-4a32-a54e-1b6dffff0852",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "have access to the client's relationship status & information",
  },
  {
    id: "5f185495-24c9-4ea6-a3d5-60df422ac5d6",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "have a dedicated account manager I can reach out to for non-technical issues",
  },
  {
    id: "6a680150-4ebb-48d9-b0e3-f97b97d5fa59",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "define SLA rules and ensure compliance",
  },
  {
    id: "94c16ae0-de6a-4f76-8212-e8cbf31c4318",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "notifications for approaching SLA deadlines",
  },
  {
    id: "d54bd81c-739c-4c4b-8e69-f928f850686a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "a report on SLA compliance for the services rendered.",
  },
  {
    id: "3f3ecf27-fb9c-494c-908d-8aa473eeb9a0",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "robust security features like 2FA and data encryption",
  },
  {
    id: "5f27f4d7-9052-4ac3-bac8-1c30bd346a3c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "compliance features & reports that allow us to adhere to standards such as GDPR, HIPAA, etc",
  },
  {
    id: "0436628c-fafa-4e16-9da5-52aa757833f6",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "assurance that my company's data is being handled securely",
  },
  {
    id: "a88bbf08-069b-4f94-a8ca-e9ee535c46a8",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "provide evidence to myself and external auditors that standards are being upheld.",
  },
  {
    id: "21e1202d-08a3-4eaf-bfb4-5996088acc4a",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see evidence that standards are being upheld.",
  },
  {
    id: "e4823dd6-f6b0-4cfe-af09-ba41ece13f26",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "the PSA to integrate with VoIP systems so that communications can be logged and tracked within tickets.",
  },
  {
    id: "e041607c-6d91-4851-9e54-a8a18d29424c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "everything integrated into a single pane of glass (but only if it does not compromise on features or UX)",
  },
  {
    id: "d5a75fd8-4a71-4efb-933d-87cadf1dfbb1",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "empower employees to transform and display data themselves.",
  },
  {
    id: "93b06661-f155-4278-92b1-5da9d6f68fae",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "spin up a quick internal app (a la Retool) rather than spending months with the IT department /dev team",
  },
  {
    id: "55459390-c8cc-4ea1-929d-a191b435d374",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see the status of all their services in a single pane.",
  },
  {
    id: "b4919bc2-d1d1-4b40-af75-dea259e29508",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see the status of all our services in a single pane.",
  },
  {
    id: "82c87f5f-6c1f-4128-8248-76b0cbc5c885",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "have a collated contact page or landing page.",
  },
  {
    id: "e9d86205-b089-4687-b636-08994d64f9f2",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "a bespoke url shortener that we and our customers can use.",
  },
  {
    id: "5cf32edd-c510-4d7b-8583-9cf88547acb9",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "be able to single-click publish our corporate website and not worry about hosting, domains or pricing.",
  },
  {
    id: "e3523ac1-5f7c-4719-8182-5b4483a161c7",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "make entities 'published' and public facing, and automatically go onto the correct page of our website (e.g. news, roadmap)",
  },
  {
    id: "bf45e819-ab72-462b-ad34-d33e117d6612",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "manage multiple tenant environments within a single PSA instance",
  },
  {
    id: "009eda9f-4ab0-4aef-aa9b-18df1b14c634",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "segment client accounts based on specific criteria (industry, size, location)",
  },
  {
    id: "3a1e7568-b019-4919-b19f-a3c5db8ee6ff",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "set up customized alerts for specific events, like SLA violations or system outages",
  },
  {
    id: "5716f155-94dc-4c41-9331-1ee889d2a5eb",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "real-time notifications for ticket updates or comments",
  },
  {
    id: "0b78d610-149a-4d30-bc82-a3aac0aa5056",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view all technicians' availability in one centralized calendar",
  },
  {
    id: "c994f258-8fdc-428e-b582-ce9a4cd57b3e",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "synchronize my PSA calendar with external calendars (Google Calendar, Outlook)",
  },
  {
    id: "3d257ac6-fbdc-4ee3-bb92-e80a2ff40206",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "set automated reminders for upcoming contract renewals",
  },
  {
    id: "dee8c4a3-8d55-4446-bd74-614fd714bbd4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "manage and renew client contracts within the PSA",
  },
  {
    id: "fd597d1e-e409-47a5-b4ba-f179b8bc42fb",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "mobile-friendly interface or app to update tickets while in the field",
  },
  {
    id: "c3686e9f-c532-40bf-b8e4-538e5021dd26",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "access ticket status and updates via a mobile application",
  },
  {
    id: "d7b9dd97-a747-4b0c-81cb-22a445a3fefc",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "automatically send CSAT surveys upon ticket resolution",
  },
  {
    id: "75fb64b9-cc84-46ed-abb4-d0f6e73d00ed",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see customer satisfaction metrics in my KPI dashboard",
  },
  {
    id: "2580a69e-61a9-4966-b862-ed4bffc1beb1",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "an internal chat function to collaborate with team members",
  },
  {
    id: "d3af2279-a7e5-49a8-ada8-96df81c51bfe",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "track internal discussions related to tickets",
  },
  {
    id: "1f504264-bf8b-4bce-9e15-1ac00cce02e8",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "back up and restore the entire PSA system to a specific timestamp",
  },
  {
    id: "426e596d-02c4-472f-bcd3-53ce1b3e4719",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "roll back granular changes to entities/relationships",
  },
  {
    id: "03a5f35d-3f04-49ff-be3b-d68a443c25d4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "contingency plan feature that documents the steps to take in case of system failure",
  },
  {
    id: "8ad146f1-a02c-4d75-8e11-0df481730eff",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "allocate resources based on skill sets and availability.",
  },
  {
    id: "30313957-2fee-43c7-b6b6-d43a23da73b7",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "plan for capacity based on trends in ticket volume and resource utilization",
  },
  {
    id: "165b2777-5581-448e-b905-fd0a557d0212",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "approve major changes before they are implemented",
  },
  {
    id: "df29c76d-db80-45e1-9067-597ab2bb2bab",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "log changes made during the resolution process",
  },
  {
    id: "aaad990f-d210-459a-bb7f-479787aea50f",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "the ability to white-label the PSA tool to maintain brand consistency. This includes custom domain / dns records to have the psa available under our corporate domain.",
  },
  {
    id: "d6c3d781-1547-4a04-8042-d9a8965c4e34",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "extensive UI/UX customization capabilities to match our specific workflow needs.",
  },
  {
    id: "0f35cafe-7de7-4bf9-a1f9-74a5560692b3",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "use keyboard shortcuts to navigate the app (on web or desktop)",
  },
  {
    id: "9b441c38-052b-4159-a726-5815f0ce1919",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "real-time inventory tracking within the PSA for hardware and software assets.",
  },
  {
    id: "50fe7c34-08d1-488c-9d0f-aaa9ea0d5ae4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "See what stock we have on hand in order to provision a device for a customer.",
  },
  {
    id: "04364f74-8cce-44c0-a534-51c05661280d",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "barcode scanning and other features to make stock take easy",
  },
  {
    id: "b991e53e-59b5-4cbb-b460-30232acfef43",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "be able to sign off / give my blessing on a proposal, ticket or other entity",
  },
  {
    id: "2e1b9b0e-83bc-4463-9808-2f9d41c93980",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "have evidence of a signed agreement with the customer",
  },
  {
    id: "fba19ec4-53b0-4b6f-bd76-f16e4db10903",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "collate all client-related documents in one centralized repository.",
  },
  {
    id: "d249125d-5c00-477b-a570-02457c4b636e",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "send, receive, and store e-signed contracts within the PSA.",
  },
  {
    id: "dbc0cd5d-cf2e-4480-9ca7-7b3b8dbe318b",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "manage customer inquiries from social media channels within the PSA.",
  },
  {
    id: "cd1bed14-1a59-4634-bf1d-3a37a9ae8585",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "social media analytics in my reporting dashboard",
  },
  {
    id: "b7ed0023-7ee1-4659-85eb-2dcc44b32c7d",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "manage campaigns and promotions within the PSA.",
  },
  {
    id: "e5673a69-44dd-499e-b92b-64d29f788533",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "I [MAY] want [THE OPTION] to earn rewards or recognition for achieving performance milestones [THAT IS NON-MANDATORY AND DOES NOT AFFECT PERFORMANCE ASSESSMENTS]. <-- CONTENTIOUS. (Or just make it a pleasant app to use!)",
  },
  {
    id: "758890bf-4bf2-40c9-8a2c-f89921aa6fe5",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "incorporate gamification elements to motivate and engage technicians.",
  },
  {
    id: "e9bafd45-633b-44e5-8591-901b2fc48ac4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "collaborate in real-time with team members on complex issues.",
  },
  {
    id: "f8e838c6-1a25-4d38-aa33-eca263e2a674",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "a live feed of ticket status updates for dynamic resource allocation.",
  },
  {
    id: "5bfc0bd3-b47a-49fb-bb26-874a5134c2b3",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "integrate payment gateways for direct billing through the PSA.",
  },
  {
    id: "9fd2c682-2533-4039-8932-d578e9ed3070",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "pay invoices within the PSA portal itself for convenience.",
  },
  {
    id: "f743b918-45fa-415c-bb6e-3417a56fe462",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "allow customers to log tickets in their customer portal",
  },
  {
    id: "8e70552c-890b-4a37-9371-0bd2046596e8",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "allow customers to access information themselves rather than having to come through me",
  },
  {
    id: "aa53c986-60c8-4fde-8a8e-9d496cfa1180",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "log into my MSPs portal and see all open tickets, discussions, configurations, proposals etc.",
  },
  {
    id: "29583eee-57f6-4771-a48c-fcb7a4df1880",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "manage leave, holidays, and time-off within the same PSA system where work is being tracked.",
  },
  {
    id: "2a9063ba-62b1-49ae-a06c-4a70dcdae4e2",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "forecast and coordinate on-call teams, holidays, after hours coverage and emergency coverage",
  },
  {
    id: "b14a825e-1a61-40db-8607-d04dfad17fe2",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "request time off in the easiest way possible.",
  },
  {
    id: "7d203bdf-1de3-4a93-89c4-6acdb54bdfd5",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see employee availability on a single pane of glass.",
  },
  {
    id: "0aa7b7c8-eeb3-44bb-966b-db2bb91fc518",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "create, send, and track sales proposals within the PSA system to streamline the sales process.",
  },
  {
    id: "15dbb3bd-08fe-4e5b-bfa6-3f1de4bffd9b",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "maintain a repository of proposal templates for different services and contract types.",
  },
  {
    id: "dfd3205b-233a-4658-a4c3-49b9f7c1bee3",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "integrate proposal software with the PSA to ensure that pricing and asset lists are up-to-date.",
  },
  {
    id: "b5d5e359-47da-40a5-ad62-e8a4a188ffc5",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view, comment on, and e-sign proposals through a client portal.",
  },
  {
    id: "d579ee1f-104f-4465-b1ae-e82ff65ea493",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "write notes/descriptions in the entities that are references/relationships (to other entities, with their attribute/relationship type) in them.",
  },
  {
    id: "d4e7a20f-47f5-4aec-996c-28c9402f657e",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "Paste images and other media directly into notes",
  },
  {
    id: "4d57904f-d81c-4b04-8fe4-65e53feac613",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "Have anything I add into an entity's notes auto-added as relationships to the entity.",
  },
  {
    id: "a08aa59a-65e3-497d-9ce5-4f03198b1c20",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "add varying tax rules to invoice templates, territories, customers and other billing areas",
  },
  {
    id: "b25a1b7f-1198-4421-a2fa-750a450661ff",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "multi-language and multi-currency support for international operations.",
  },
  {
    id: "c4621f75-87b1-4ff4-9fc4-9ded2994c50b",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "set region-specific settings, like date formats and compliance standards.",
  },
  {
    id: "07674621-20a1-4858-9b05-edc863e02285",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "track vendor performance metrics.",
  },
  {
    id: "1e70d3a6-4885-4643-8cb4-74e26e293b01",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "record contracts and terms with vendors.",
  },
  {
    id: "b24df92b-4939-4727-8eb2-0d0dfd4985a7",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "multi-language and multi-currency support for international operations.",
  },
  {
    id: "0bef650c-9222-40f1-a8f1-969e67637181",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "manage payments and renewals with vendors.",
  },
  {
    id: "6359a9db-882b-4f13-94a6-06daa85180cc",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "track and manage all vendor interactions, including quotations, lead times, and service quality, within the PSA system.",
  },
  {
    id: "d413a3de-359a-41ef-a4c5-b5f45c244964",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "robust documentation and training modules within the PSA.",
  },
  {
    id: "b8891177-5dab-4ab3-b88f-083b77831e72",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "assign and track training courses for new hires.",
  },
  {
    id: "eb222d8c-bcda-404b-8d20-66ef4a10b697",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view the expertise at my disposal",
  },
  {
    id: "2918ae28-e477-4286-9177-b3f006538eaa",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "manage my skills & certifications within the same pane of glass",
  },
  {
    id: "ed48c93a-d0b7-4f55-b7e6-dad74f7f589c",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "filter expertise and assign an engineer with the skills commensurate to the project/service required.",
  },
  {
    id: "672fcd44-8dc9-4d00-a822-e1d6ce397e28",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "predictive analytics capabilities to forecast resource needs, revenue, and other key metrics.",
  },
  {
    id: "8e66ec88-27d4-4c5d-9760-401c6b0aa470",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "view the expertise at my disposal",
  },
  {
    id: "d3867d25-b200-4a5e-9beb-0b94ffb639f3",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "spin up charts/reports/dashboards (with the data available and related to me)",
  },
  {
    id: "b9da4ad2-a0ec-4ad2-bdba-0d924b8524e4",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see all changes and edits made in the system",
  },
  {
    id: "de3c7a7c-31b1-4d84-86e7-35c1f0224280",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "see a timeline of what I and my colleagues have done",
  },
  {
    id: "805ecff7-29c2-490b-9c83-b06622909c13",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "define user roles and permissions based on job function",
  },
  {
    id: "e8ccd951-5250-49c6-9fa7-e08ee3427447",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "have role-specific access to modules and data",
  },
  {
    id: "03616af5-4204-42dd-9ec8-e6642d30ab43",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title: "different levels of access based on my agreement with the MSP",
  },
  {
    id: "bf042c8c-50e2-4ddf-86bd-7cd340246379",
    type: "Item",
    class: "Usecase",
    categories: ["product-catalog-solutions-usecases"],
    title:
      "only allow a certain team access to information (i.e. a select few client employees",
  },
];
export const feature_usecase_userrole_rels = [
  {
    id: "2fc76140-a5a9-4bcd-854d-7452f9bbad4c",
    e1: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    e2: "e75cb5ef-d32c-44cf-b0af-fcf615e62d8c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bf1a82f4-489a-44fa-8fad-2775798188a0",
    e1: "e75cb5ef-d32c-44cf-b0af-fcf615e62d8c",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "176a33fa-36c1-4dc6-8a31-8de56032a51c",
    e1: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    e2: "83aa79c3-0f28-4716-88b5-a8bae1aed63a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "39041c57-22e3-401b-841e-bee2be2ba680",
    e1: "83aa79c3-0f28-4716-88b5-a8bae1aed63a",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bb761fb1-2c34-4b02-ac61-3bf4cd8f7ca5",
    e1: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    e2: "2000924c-3c10-467e-97fc-1c8a25bc1c27",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e4f85c5a-674e-4682-9647-695525f9579a",
    e1: "2000924c-3c10-467e-97fc-1c8a25bc1c27",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c0062611-752e-4bc0-98b9-8b8cda9df5c1",
    e1: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    e2: "ae60e932-95aa-4254-a1a3-d819928a65db",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d8092105-5236-405d-973d-69b0896ee13e",
    e1: "ae60e932-95aa-4254-a1a3-d819928a65db",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1d78c8e2-e091-4a5e-afbb-b636f6f304e7",
    e1: "97f48d4d-d38b-4ed1-afd4-e477839f3247",
    e2: "279ae352-0525-4f45-b210-23cd9328102a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5ffbf62e-3a31-4215-8c78-cf00b6082631",
    e1: "279ae352-0525-4f45-b210-23cd9328102a",
    e2: "63adb211-6ade-4bcc-a997-558865f43439",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "11703550-0a24-41bf-b856-2bba94b5be3d",
    e1: "a99df5b7-b11c-4b7c-813b-d9ee00b11c73",
    e2: "907ed22d-dc1c-4646-b831-d49d7b6b8ae7",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4b3cd157-0934-4348-92e6-816493eb4db2",
    e1: "907ed22d-dc1c-4646-b831-d49d7b6b8ae7",
    e2: "27255e4c-a308-475b-89fd-65c7737495da",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5c9968df-245c-4a9d-8bd1-f8603ac6b917",
    e1: "a99df5b7-b11c-4b7c-813b-d9ee00b11c73",
    e2: "294dd3f3-443a-42a9-8b74-eaec93f6ed34",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a3428239-ac21-4c69-b098-d11d2bb6f9f8",
    e1: "294dd3f3-443a-42a9-8b74-eaec93f6ed34",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "96259723-d818-4401-8a15-eed106725e4e",
    e1: "d47f5312-e25a-432a-b2d5-0458ca13e10a",
    e2: "2114a8ec-4550-4731-821a-ea7f9eb53f60",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c71899d6-f568-4bbb-866d-f0dc6e92fa44",
    e1: "2114a8ec-4550-4731-821a-ea7f9eb53f60",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "16af5fd4-59a8-4bdf-bf6c-1c0ae1fe1b91",
    e1: "d47f5312-e25a-432a-b2d5-0458ca13e10a",
    e2: "1c67fee9-2106-4790-8edd-260f04148a89",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f2043733-cd30-4f8a-ae86-c06499c59a9d",
    e1: "1c67fee9-2106-4790-8edd-260f04148a89",
    e2: "27255e4c-a308-475b-89fd-65c7737495da",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5f65f963-e030-4dfe-bd3f-e0530cd28a02",
    e1: "d47f5312-e25a-432a-b2d5-0458ca13e10a",
    e2: "b1091fd6-9fe1-41e0-8850-3008524cc90c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c33267d8-e005-4c9d-bc44-ee02a3887f1e",
    e1: "b1091fd6-9fe1-41e0-8850-3008524cc90c",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "cbadeb6a-1144-4eb3-bb38-fa625d0f5396",
    e1: "d47f5312-e25a-432a-b2d5-0458ca13e10a",
    e2: "4cbed7d4-7497-4f3b-a70a-95d486f4f7ef",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1bf9e76d-dad4-4746-8e23-941884bf7212",
    e1: "4cbed7d4-7497-4f3b-a70a-95d486f4f7ef",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b2b2f489-f398-4b91-9257-7004acf6b363",
    e1: "22ef8bdd-e50f-4de9-a080-2db0f7ab3f1a",
    e2: "ac023fae-d31e-487e-a840-6741d5428cc1",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "9aa9c90e-0c46-4208-b5ed-46d41407d7c0",
    e1: "ac023fae-d31e-487e-a840-6741d5428cc1",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ca201bdf-e595-4f63-9818-ae95fd9475f3",
    e1: "22ef8bdd-e50f-4de9-a080-2db0f7ab3f1a",
    e2: "8241d97e-03b5-4c39-b21a-fde8bc531a6b",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f5396dc3-b4f3-419a-93b7-6a475eff5827",
    e1: "8241d97e-03b5-4c39-b21a-fde8bc531a6b",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "456e2cb3-8444-4455-836f-05d9fd6870b7",
    e1: "22ef8bdd-e50f-4de9-a080-2db0f7ab3f1a",
    e2: "4b09e5bc-976a-464e-8177-be11f8c16fef",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5f800adf-70ce-4170-805a-2e7373516c87",
    e1: "4b09e5bc-976a-464e-8177-be11f8c16fef",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "de353b3b-0c99-4e50-9aea-562b974d6b6c",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "4e0ebc1c-7279-4e96-9847-2eae372e260a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ed3022fa-7c35-4549-b579-2c7d2073fcec",
    e1: "4e0ebc1c-7279-4e96-9847-2eae372e260a",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "89b29a5f-f8e2-4f39-8b01-765bda77ef4f",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "0d85ba74-d972-4465-b728-0eae30fa73c9",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5aafa019-337c-4190-9746-13f2d389092d",
    e1: "0d85ba74-d972-4465-b728-0eae30fa73c9",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f1fc3747-cfc3-4104-b448-fa9960a734ef",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "3fcc8841-2612-4889-8011-4706069bfd9a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "022c4400-1600-4b8a-92fc-0e100fb83d15",
    e1: "3fcc8841-2612-4889-8011-4706069bfd9a",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "3a5ab38e-cc27-44a8-9e9f-3ca57661e65f",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "c5b6f8e5-1f53-4cf3-b40f-0bf7bf0eb819",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "165dacdb-9b1f-4513-8791-a7869d52540c",
    e1: "c5b6f8e5-1f53-4cf3-b40f-0bf7bf0eb819",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "05964a02-4dba-4cd2-800f-e9a201ea760f",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "b4cc1ec5-c264-481a-b856-ac772ae2ac78",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "94209211-e9c7-488c-88a1-23d8842e9491",
    e1: "b4cc1ec5-c264-481a-b856-ac772ae2ac78",
    e2: "e0c68ec6-1d26-46a6-bece-386492884d58",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a12899a9-9b1f-4771-b149-3f02ab918796",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "8f1b4ff5-d462-47f9-8c84-469b99a67fb2",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "75fe5498-07b2-45a6-9954-b496faf79a7b",
    e1: "8f1b4ff5-d462-47f9-8c84-469b99a67fb2",
    e2: "e0c68ec6-1d26-46a6-bece-386492884d58",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "06602f32-58e0-4763-a662-c0ea59f7c7f5",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "e93fb507-795b-4294-9f99-21913a4052f8",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "66d97c90-3092-4de8-8b57-659ffc0a77fb",
    e1: "e93fb507-795b-4294-9f99-21913a4052f8",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b3f865c8-96ee-445a-94dd-2bfee5e4ea1f",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "3f3f61c1-3b5b-4db0-93ec-83ff5984d86c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1a3e2719-c434-4a41-ae25-72d8514f991d",
    e1: "3f3f61c1-3b5b-4db0-93ec-83ff5984d86c",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "025f0489-3c26-47b9-96dc-aced3dd46550",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "35344c82-89cf-4a89-88c6-444802f71a0d",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "46b91ad0-b13c-4258-a482-4cdabd9815ae",
    e1: "35344c82-89cf-4a89-88c6-444802f71a0d",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c019471d-7279-4a86-852c-2c115313d263",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "01b7200c-5183-4739-bf05-0d68edf480fc",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1dbff1f6-1c6d-4d1f-8592-82428bbdc559",
    e1: "01b7200c-5183-4739-bf05-0d68edf480fc",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4f04e8ee-20fb-4440-85e0-65c6c1c0ba9f",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "c9c37363-c862-4b94-b44b-ff448d5f7f3f",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4f74e1c2-2898-4aad-80c4-7a04e8e08532",
    e1: "c9c37363-c862-4b94-b44b-ff448d5f7f3f",
    e2: "1e16aea0-5a25-4abc-803c-25ac57d7deab",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5eca9330-c9cc-4371-9195-a904b33f4ad7",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "fbf1c8be-16ec-474d-bfbf-d5d7662e52e9",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "39cbea89-39fd-45ba-9eb9-5296fbd60dc2",
    e1: "fbf1c8be-16ec-474d-bfbf-d5d7662e52e9",
    e2: "1e16aea0-5a25-4abc-803c-25ac57d7deab",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6f142573-b157-4553-9c81-1207952ba3cd",
    e1: "17f5dbbd-ab14-40fb-bf08-3a8eec09fbfc",
    e2: "9b7b0e20-75f7-4d11-abf5-bb2b0cdbd223",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bde9ff4f-aaa7-4a46-886a-0d8239065838",
    e1: "9b7b0e20-75f7-4d11-abf5-bb2b0cdbd223",
    e2: "1e16aea0-5a25-4abc-803c-25ac57d7deab",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "73a8bd26-f8f6-4678-8697-7ce700f3c9c2",
    e1: "ce31d4d5-0396-4328-b6b8-494028c1c09e",
    e2: "d0cd2e6f-0a2f-4077-8798-4c0f6c1cb729",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b8ef9aba-4621-4ca9-95fb-ce7bad66aa57",
    e1: "d0cd2e6f-0a2f-4077-8798-4c0f6c1cb729",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "76629fbd-ce21-4686-be62-c3682e4a2f64",
    e1: "ce31d4d5-0396-4328-b6b8-494028c1c09e",
    e2: "8724a981-3359-471d-87af-234026dea2cf",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "0fa6f2df-1a54-43e2-a0c4-2ffd49cee43b",
    e1: "8724a981-3359-471d-87af-234026dea2cf",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "275aafd9-2026-4994-9fd5-8c06ab02bd7e",
    e1: "ce31d4d5-0396-4328-b6b8-494028c1c09e",
    e2: "298be306-2463-4ea1-af81-5c0f1aaf81cf",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "991f889d-6ca5-424f-a34a-7b2921ffbf1f",
    e1: "298be306-2463-4ea1-af81-5c0f1aaf81cf",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "45ff2c46-ffb4-4ba8-ab37-e1ac2f788a5b",
    e1: "e4fb42dc-72df-4a6a-8f30-b84293ad1cdb",
    e2: "c2d3a296-7be0-497e-b700-74c0c9ed2b93",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d5de769d-dbf7-424f-930e-9901de04b1af",
    e1: "c2d3a296-7be0-497e-b700-74c0c9ed2b93",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "593673e8-0247-4644-8cc6-e4c8be6b5088",
    e1: "e4fb42dc-72df-4a6a-8f30-b84293ad1cdb",
    e2: "bc865489-0ca9-40df-b5b4-13c525cd7aaa",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "61250065-2b3f-4ea1-970a-775d61136ea0",
    e1: "bc865489-0ca9-40df-b5b4-13c525cd7aaa",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8bb767ee-f0ea-44cd-af13-a170b11547dc",
    e1: "e4fb42dc-72df-4a6a-8f30-b84293ad1cdb",
    e2: "c98c6cc9-1e85-4dd4-8e1d-99dc403fd290",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "de16da18-b6a6-4eb6-9b2a-53af9ef77154",
    e1: "c98c6cc9-1e85-4dd4-8e1d-99dc403fd290",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8450da4d-8816-4e86-af8c-e8b645edf4dc",
    e1: "f4ce4eb2-eafc-467e-a98f-63c8ab7c21db",
    e2: "297d23ab-bf26-489c-be0b-782fd4e50be9",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "174cf8dd-ea59-40c9-9a33-b8b41c60c020",
    e1: "297d23ab-bf26-489c-be0b-782fd4e50be9",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5949fc3c-e0df-4322-be6e-dc0e95c737d9",
    e1: "f4ce4eb2-eafc-467e-a98f-63c8ab7c21db",
    e2: "aee00761-428b-4c9a-abb2-8ba1e798a78c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "709a558e-bb45-4d36-8f14-cffaea5f0727",
    e1: "aee00761-428b-4c9a-abb2-8ba1e798a78c",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "16ffeead-2bae-43fe-8176-b57fb78148e7",
    e1: "f4ce4eb2-eafc-467e-a98f-63c8ab7c21db",
    e2: "40a7fa3e-5a83-4505-8ca9-8b3ed1bf286c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b312ebfd-6cff-4ef7-8343-579321995a07",
    e1: "40a7fa3e-5a83-4505-8ca9-8b3ed1bf286c",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7ada0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "9721747c-6899-45fa-8ac8-e63400d14fec",
    e1: "99cf12ac-e26d-4fe9-a085-6648e88afda6",
    e2: "5782f9d8-6897-4834-85fc-c4d8bdfbf4a9",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "daa7f18b-5d1f-4d21-a710-8a47bc1c996f",
    e1: "5782f9d8-6897-4834-85fc-c4d8bdfbf4a9",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "9aac073d-4be1-48f7-90d6-ec855faf73ee",
    e1: "99cf12ac-e26d-4fe9-a085-6648e88afda6",
    e2: "d1da9730-3d34-4d6d-b333-a9489f425455",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "3a65d346-c15b-4ef6-b581-2f89f634815e",
    e1: "d1da9730-3d34-4d6d-b333-a9489f425455",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7bcdb004-e675-4fbb-a467-8ce8259ed9bf",
    e1: "99cf12ac-e26d-4fe9-a085-6648e88afda6",
    e2: "4105ac36-b046-4501-9532-c00ed7221e72",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b40ac42a-fc0a-4c89-ae65-15da96e6edcc",
    e1: "4105ac36-b046-4501-9532-c00ed7221e72",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "702fef63-5599-4573-9566-7413f98cf7c5",
    e1: "bc82de47-3462-4f41-846f-95008453ca02",
    e2: "47afc41d-acbb-4a0d-9ebc-1d11ebd50054",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "41fc7378-6b84-48eb-82fa-13a56a8253ba",
    e1: "47afc41d-acbb-4a0d-9ebc-1d11ebd50054",
    e2: "ce3e3a0f-d671-4bd3-bfe7-d72b7e8877d2",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "2c5d088a-c99d-4c8d-aedc-bc314d0f37e3",
    e1: "bc82de47-3462-4f41-846f-95008453ca02",
    e2: "0f98e590-73cb-4a18-8434-ed4b9a86fba4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a171c037-10c0-4599-968d-280e3fe5bcf5",
    e1: "0f98e590-73cb-4a18-8434-ed4b9a86fba4",
    e2: "b650a457-5718-457c-a749-e23661b15409",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1b5bcd68-8301-4784-99c9-5633e590e175",
    e1: "bc82de47-3462-4f41-846f-95008453ca02",
    e2: "d4a79774-c49f-4738-bc86-3ab5c79d62d0",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7e8ca1ae-29c1-4db8-8620-1d1dc94b1f06",
    e1: "d4a79774-c49f-4738-bc86-3ab5c79d62d0",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6e85eceb-9f76-4825-ad54-9cf5659ee8b6",
    e1: "428fbfe3-0ad4-47b0-9e95-d10ca151bf13",
    e2: "c66381f2-dc09-4751-be03-5d4d5ab28692",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bf61070e-0426-4cda-acf1-6120998fc74c",
    e1: "c66381f2-dc09-4751-be03-5d4d5ab28692",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "cb29d32b-5c6e-498f-82f9-a2042d22f066",
    e1: "428fbfe3-0ad4-47b0-9e95-d10ca151bf13",
    e2: "d3f402ba-8c08-4a32-a54e-1b6dffff0852",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "129aa853-0267-4832-8697-d6b5aeb295fa",
    e1: "d3f402ba-8c08-4a32-a54e-1b6dffff0852",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adb0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c4353ded-6f75-4d41-a5db-e132e12a9ec0",
    e1: "428fbfe3-0ad4-47b0-9e95-d10ca151bf13",
    e2: "5f185495-24c9-4ea6-a3d5-60df422ac5d6",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "580bf827-8f52-4155-8e54-e9d444f67e25",
    e1: "5f185495-24c9-4ea6-a3d5-60df422ac5d6",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ce068ccb-75a2-4f9d-8461-eeb240be8684",
    e1: "cd47c650-768d-43c9-8304-04320bffb546",
    e2: "6a680150-4ebb-48d9-b0e3-f97b97d5fa59",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d5ce4f59-6d8c-4f14-8eaf-75d68c4b23df",
    e1: "6a680150-4ebb-48d9-b0e3-f97b97d5fa59",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8e9ce665-6990-40df-9cda-1912c1ee278a",
    e1: "cd47c650-768d-43c9-8304-04320bffb546",
    e2: "94c16ae0-de6a-4f76-8212-e8cbf31c4318",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f2a3b2d3-30f5-4349-886d-c901f49235e9",
    e1: "94c16ae0-de6a-4f76-8212-e8cbf31c4318",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "07746ea0-49e4-4e5a-bf59-88caf7dd9fa5",
    e1: "cd47c650-768d-43c9-8304-04320bffb546",
    e2: "d54bd81c-739c-4c4b-8e69-f928f850686a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e08a3758-b60b-469d-8e6a-33bc86125f68",
    e1: "d54bd81c-739c-4c4b-8e69-f928f850686a",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7ada0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6a07eb65-9735-4191-abf0-392d9bd64598",
    e1: "41225811-5b04-4039-9ff3-be235b0fbcba",
    e2: "3f3ecf27-fb9c-494c-908d-8aa473eeb9a0",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e2676d1b-78b3-4633-915f-9dcd914a5b15",
    e1: "3f3ecf27-fb9c-494c-908d-8aa473eeb9a0",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "9f310472-1ba2-4fd7-bc31-7f8f3dbca4a5",
    e1: "41225811-5b04-4039-9ff3-be235b0fbcba",
    e2: "5f27f4d7-9052-4ac3-bac8-1c30bd346a3c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "13654f78-f707-4da5-b032-82b137513c3c",
    e1: "5f27f4d7-9052-4ac3-bac8-1c30bd346a3c",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7d258e01-cf49-4889-844b-07c51e6f670d",
    e1: "41225811-5b04-4039-9ff3-be235b0fbcba",
    e2: "0436628c-fafa-4e16-9da5-52aa757833f6",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "347ce90a-87a7-4fbb-892d-641510b1051b",
    e1: "0436628c-fafa-4e16-9da5-52aa757833f6",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7ada0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5485def2-f110-435e-a5d0-c446b4929393",
    e1: "41225811-5b04-4039-9ff3-be235b0fbcba",
    e2: "a88bbf08-069b-4f94-a8ca-e9ee535c46a8",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5dc04027-e8ac-4427-aaa1-ae68b0af1b93",
    e1: "a88bbf08-069b-4f94-a8ca-e9ee535c46a8",
    e2: "4d223c32-a7e3-42c0-9565-d758b6ba2f5f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "43301d3c-ec2b-46e3-aa6f-aac8d1af4b2d",
    e1: "41225811-5b04-4039-9ff3-be235b0fbcba",
    e2: "21e1202d-08a3-4eaf-bfb4-5996088acc4a",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "87823720-3328-4182-a070-8dccd3e54b40",
    e1: "21e1202d-08a3-4eaf-bfb4-5996088acc4a",
    e2: "f708e13f-16f1-4473-9443-178af6a1fd99",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4ef2236e-b913-443d-afe0-baa051117eed",
    e1: "5b5722d1-c379-4f89-a734-94cd3b0c4b0a",
    e2: "e4823dd6-f6b0-4cfe-af09-ba41ece13f26",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "48567d12-0153-409f-b3af-9d395c028d6f",
    e1: "e4823dd6-f6b0-4cfe-af09-ba41ece13f26",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e168cda9-535e-4a6a-8015-7361bfc80f87",
    e1: "5b5722d1-c379-4f89-a734-94cd3b0c4b0a",
    e2: "e041607c-6d91-4851-9e54-a8a18d29424c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8cd5cda7-8c61-44ff-b36d-5ef3980b4a96",
    e1: "e041607c-6d91-4851-9e54-a8a18d29424c",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e52d9118-1e26-4740-b09f-feadf47655b0",
    e1: "f1be07dc-09d7-4c5f-bd51-a65cc3aabdd7",
    e2: "d5a75fd8-4a71-4efb-933d-87cadf1dfbb1",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f66a6c01-3eea-450a-b216-f4dcbaef8588",
    e1: "d5a75fd8-4a71-4efb-933d-87cadf1dfbb1",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8bf7c622-a7ce-4cc4-9189-a4d9a60f2ea9",
    e1: "f1be07dc-09d7-4c5f-bd51-a65cc3aabdd7",
    e2: "93b06661-f155-4278-92b1-5da9d6f68fae",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c4034e9a-4787-4d56-8a34-d276ba24eb9d",
    e1: "93b06661-f155-4278-92b1-5da9d6f68fae",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d8fcd6fc-1fd9-4878-894c-66446be55027",
    e1: "9f7aba60-33f7-4f25-853d-8898b1a8f2f9",
    e2: "55459390-c8cc-4ea1-929d-a191b435d374",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "204c0139-0d32-4cd0-8736-7719ecc0d025",
    e1: "55459390-c8cc-4ea1-929d-a191b435d374",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "90c19a88-256f-4815-a3d2-5a4bbc81ea5e",
    e1: "9f7aba60-33f7-4f25-853d-8898b1a8f2f9",
    e2: "b4919bc2-d1d1-4b40-af75-dea259e29508",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d71bc3c8-a718-4951-a923-66ebb4cd3632",
    e1: "b4919bc2-d1d1-4b40-af75-dea259e29508",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8b101c16-1d73-4ad7-9765-a97497e8636a",
    e1: "80fd1a58-1c54-44a4-832b-762194822555",
    e2: "82c87f5f-6c1f-4128-8248-76b0cbc5c885",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e20166b2-e674-47d5-a2db-33d139ac414b",
    e1: "82c87f5f-6c1f-4128-8248-76b0cbc5c885",
    e2: "7984c943-25ed-4800-a68d-3ba6491c29ba",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "79fde185-fd14-441a-9579-01f1d7f7bc5d",
    e1: "000252c1-783a-4798-8206-6b8c8888f791",
    e2: "e9d86205-b089-4687-b636-08994d64f9f2",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "823e3281-023d-4e02-a87a-23bfdf38b753",
    e1: "e9d86205-b089-4687-b636-08994d64f9f2",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e5d23ab8-9d89-4e24-8159-9f7653f5e27d",
    e1: "d5bd0a8d-0f56-4824-935a-eef4f0eb4581",
    e2: "5cf32edd-c510-4d7b-8583-9cf88547acb9",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1e1d9306-5bbb-458b-bbd7-c751bcf0b8c0",
    e1: "5cf32edd-c510-4d7b-8583-9cf88547acb9",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b81ebec5-baab-4547-9648-5b9e30fef874",
    e1: "d5bd0a8d-0f56-4824-935a-eef4f0eb4581",
    e2: "e3523ac1-5f7c-4719-8182-5b4483a161c7",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "aed9c75b-71b9-4020-9272-a09cfc228732",
    e1: "e3523ac1-5f7c-4719-8182-5b4483a161c7",
    e2: "7984c943-25ed-4800-a68d-3ba6491c29ba",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "07f523eb-cbb4-47c5-89c9-ffaf5f767dd3",
    e1: "777ee434-ea29-48fd-80a1-6239c119b853",
    e2: "bf45e819-ab72-462b-ad34-d33e117d6612",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "86b8c23f-1ef3-4a0f-9483-3ec2e2691423",
    e1: "bf45e819-ab72-462b-ad34-d33e117d6612",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5a7d24e7-a88c-4b48-912b-488ba7909691",
    e1: "777ee434-ea29-48fd-80a1-6239c119b853",
    e2: "009eda9f-4ab0-4aef-aa9b-18df1b14c634",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5e113331-0d5c-46ca-aa0f-c953238ca5d6",
    e1: "009eda9f-4ab0-4aef-aa9b-18df1b14c634",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b283772b-be2e-41e8-b542-678aba14e2c2",
    e1: "325ecc88-80ff-41f6-8ba2-b97a27fd405d",
    e2: "3a1e7568-b019-4919-b19f-a3c5db8ee6ff",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "10a79ea7-9555-4996-a6ee-c3559d978acd",
    e1: "3a1e7568-b019-4919-b19f-a3c5db8ee6ff",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "dc12a925-9b3c-4882-a870-f287bcef572d",
    e1: "325ecc88-80ff-41f6-8ba2-b97a27fd405d",
    e2: "5716f155-94dc-4c41-9331-1ee889d2a5eb",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e3b19e4f-2742-458b-a9a1-57de96e9a66a",
    e1: "5716f155-94dc-4c41-9331-1ee889d2a5eb",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "87b7977c-75ea-4ad2-8ce4-343bf3421af4",
    e1: "ccfe3a8d-9ff6-4284-9b9e-27d9a2706def",
    e2: "0b78d610-149a-4d30-bc82-a3aac0aa5056",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "75b61a8f-f3ea-472a-85a8-ede6b40fef13",
    e1: "0b78d610-149a-4d30-bc82-a3aac0aa5056",
    e2: "27255e4c-a308-475b-89fd-65c7737495da",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "47376407-c5c1-4620-97a5-9d3928163046",
    e1: "ccfe3a8d-9ff6-4284-9b9e-27d9a2706def",
    e2: "c994f258-8fdc-428e-b582-ce9a4cd57b3e",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f99abecc-76e5-4d7b-baa9-90fb0142e93c",
    e1: "c994f258-8fdc-428e-b582-ce9a4cd57b3e",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1979d9ea-fa0d-4acb-bac9-fca34a7634a2",
    e1: "e0eb58a6-52aa-42ea-bae1-37718a745a7a",
    e2: "3d257ac6-fbdc-4ee3-bb92-e80a2ff40206",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a34ff47c-437a-46a8-8801-8e7547ebc8fc",
    e1: "3d257ac6-fbdc-4ee3-bb92-e80a2ff40206",
    e2: "122dffb8-6150-4015-b6c3-40baa22d69fc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "04720bca-7543-4bf8-aaee-72e66c2b7d8d",
    e1: "e0eb58a6-52aa-42ea-bae1-37718a745a7a",
    e2: "dee8c4a3-8d55-4446-bd74-614fd714bbd4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5d4c7a84-4d0b-49a3-b65c-7b3ff850ecc1",
    e1: "dee8c4a3-8d55-4446-bd74-614fd714bbd4",
    e2: "122dffb8-6150-4015-b6c3-40baa22d69fc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5381a8c9-9c58-4041-8ca0-f302fb22a260",
    e1: "be04e541-31ea-4780-b12b-b04cd7df474b",
    e2: "fd597d1e-e409-47a5-b4ba-f179b8bc42fb",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8ea71114-fcb6-499b-a6da-42d83fafe831",
    e1: "fd597d1e-e409-47a5-b4ba-f179b8bc42fb",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "486dbf3e-eb29-4815-a613-a8141947969d",
    e1: "be04e541-31ea-4780-b12b-b04cd7df474b",
    e2: "c3686e9f-c532-40bf-b8e4-538e5021dd26",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4521446c-62dc-4908-aef9-ef5e9d4622fa",
    e1: "c3686e9f-c532-40bf-b8e4-538e5021dd26",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "525d365f-9145-4be7-8a9f-55df648a7353",
    e1: "e7cbe818-e819-4467-9617-c9cba13056c6",
    e2: "d7b9dd97-a747-4b0c-81cb-22a445a3fefc",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f0654c33-2729-412a-a1ec-cf3e87f6ee3e",
    e1: "d7b9dd97-a747-4b0c-81cb-22a445a3fefc",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f77196af-7b50-449b-9cff-a4ba5a628b8e",
    e1: "e7cbe818-e819-4467-9617-c9cba13056c6",
    e2: "75fb64b9-cc84-46ed-abb4-d0f6e73d00ed",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "2f0d4446-ee6f-4160-a071-c615aa54a23b",
    e1: "75fb64b9-cc84-46ed-abb4-d0f6e73d00ed",
    e2: "8a939b3e-7e9d-4f05-84de-a042dacd53bc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "fc82136f-33a2-4a5b-a6ed-1b0c087b3d05",
    e1: "dbd0f48c-30e7-4f35-8a7b-5d7e2c0ebe3c",
    e2: "2580a69e-61a9-4966-b862-ed4bffc1beb1",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b9f0406d-72a6-4a25-b065-2db2c4c52264",
    e1: "2580a69e-61a9-4966-b862-ed4bffc1beb1",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "610ac10a-5804-44cd-a09e-e3160feedbbd",
    e1: "dbd0f48c-30e7-4f35-8a7b-5d7e2c0ebe3c",
    e2: "d3af2279-a7e5-49a8-ada8-96df81c51bfe",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "db21af82-b773-4df9-b61c-da544181cadf",
    e1: "d3af2279-a7e5-49a8-ada8-96df81c51bfe",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "994ce558-4da1-4a01-9113-48d7d2c27e32",
    e1: "8da463b3-6db6-4a50-85c5-12018325c275",
    e2: "1f504264-bf8b-4bce-9e15-1ac00cce02e8",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "82c3e5a2-8688-40a4-89b2-8579c1bd685e",
    e1: "1f504264-bf8b-4bce-9e15-1ac00cce02e8",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "176c3162-baea-4873-ac99-472e8763ebdc",
    e1: "8da463b3-6db6-4a50-85c5-12018325c275",
    e2: "426e596d-02c4-472f-bcd3-53ce1b3e4719",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "324fab36-f39f-41c2-ab2e-9253496f20f4",
    e1: "426e596d-02c4-472f-bcd3-53ce1b3e4719",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a05ec0f8-d4e9-4942-8bde-cb84d3deff44",
    e1: "8da463b3-6db6-4a50-85c5-12018325c275",
    e2: "03a5f35d-3f04-49ff-be3b-d68a443c25d4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c73e79b4-788f-450a-a64f-96d8f3f12dde",
    e1: "03a5f35d-3f04-49ff-be3b-d68a443c25d4",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ed3a1c39-6135-4e07-8c1b-58a831961d8d",
    e1: "af25beb4-abd5-4c39-81db-883c652e9093",
    e2: "8ad146f1-a02c-4d75-8e11-0df481730eff",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "92ee8fd7-0d5f-4b8a-878f-c80ff5437e9a",
    e1: "8ad146f1-a02c-4d75-8e11-0df481730eff",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1b5b8877-7064-4bc4-ba5a-c6b65e50a99d",
    e1: "af25beb4-abd5-4c39-81db-883c652e9093",
    e2: "30313957-2fee-43c7-b6b6-d43a23da73b7",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4b4773ef-d785-428f-81cc-df7b00ba2f24",
    e1: "30313957-2fee-43c7-b6b6-d43a23da73b7",
    e2: "8a939b3e-7e9d-4f05-84de-a042dacd53bc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "515675f2-cc39-4867-b6bb-e420f0ff753b",
    e1: "b523f578-99a3-4ce3-8347-77645f830da3",
    e2: "165b2777-5581-448e-b905-fd0a557d0212",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "974393a2-7128-4e61-a275-d1b412be8ac6",
    e1: "165b2777-5581-448e-b905-fd0a557d0212",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6e31ea76-ec1e-4eb1-a23f-34c5f9b84195",
    e1: "b523f578-99a3-4ce3-8347-77645f830da3",
    e2: "df29c76d-db80-45e1-9067-597ab2bb2bab",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "45a17445-e09a-4b58-a5ab-522fc34e0411",
    e1: "df29c76d-db80-45e1-9067-597ab2bb2bab",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "408a9f3d-2d52-4942-ae5d-af3d888728d9",
    e1: "36f5d043-aa67-4c3a-baf2-f09d4218385f",
    e2: "aaad990f-d210-459a-bb7f-479787aea50f",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f6ba47da-c8c3-4af5-9b58-45bad3ba1af0",
    e1: "aaad990f-d210-459a-bb7f-479787aea50f",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f3d071e7-3d96-4cca-b836-90303a9307bb",
    e1: "36f5d043-aa67-4c3a-baf2-f09d4218385f",
    e2: "d6c3d781-1547-4a04-8042-d9a8965c4e34",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "60d2063f-b366-4270-924e-f7b206217eb3",
    e1: "d6c3d781-1547-4a04-8042-d9a8965c4e34",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "799a9607-c8b5-4497-a58b-daece3d4acd6",
    e1: "bddee75a-38d9-4fae-b506-22e5dd9ac5d6",
    e2: "0f35cafe-7de7-4bf9-a1f9-74a5560692b3",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "eeea1a75-6892-4ddd-9068-3c219dd6f116",
    e1: "0f35cafe-7de7-4bf9-a1f9-74a5560692b3",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "35c588b9-ccbc-4d16-9b87-bad65ed737f7",
    e1: "a38f29fc-fe89-4361-b60d-b77a7ee63cdb",
    e2: "9b441c38-052b-4159-a726-5815f0ce1919",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7a43a10a-2ae5-4c22-a59f-ce6278dd3a75",
    e1: "9b441c38-052b-4159-a726-5815f0ce1919",
    e2: "a6adbc54-db95-4165-b590-9b366ee2c387",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "16313d6e-62a1-496d-9789-dd1229af3140",
    e1: "a38f29fc-fe89-4361-b60d-b77a7ee63cdb",
    e2: "50fe7c34-08d1-488c-9d0f-aaa9ea0d5ae4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "897a5a9b-58c4-4513-9f27-eab1f0caf4cb",
    e1: "50fe7c34-08d1-488c-9d0f-aaa9ea0d5ae4",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "84b20c00-4017-46c6-a1ab-834775a74370",
    e1: "096e781a-4a49-4cee-a6a4-2d1eecf486d7",
    e2: "04364f74-8cce-44c0-a534-51c05661280d",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "dbc1e0cd-83de-452d-9fa4-ecead5114053",
    e1: "04364f74-8cce-44c0-a534-51c05661280d",
    e2: "a6adbc54-db95-4165-b590-9b366ee2c387",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1870fdc6-45f2-4b6b-9f5e-11d6880f5c57",
    e1: "db7fa71c-5737-4fdc-a467-3bf65762084c",
    e2: "b991e53e-59b5-4cbb-b460-30232acfef43",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "90e5e7de-ef44-4359-ada2-2c1650270ac3",
    e1: "b991e53e-59b5-4cbb-b460-30232acfef43",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5ebed09e-cfb4-42a9-95a3-63b96e8554dc",
    e1: "db7fa71c-5737-4fdc-a467-3bf65762084c",
    e2: "2e1b9b0e-83bc-4463-9808-2f9d41c93980",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d2b6a5b5-beaf-4227-a11e-23096d276faf",
    e1: "2e1b9b0e-83bc-4463-9808-2f9d41c93980",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d59924bb-b06e-40c8-9f2e-877c82d3545f",
    e1: "db7fa71c-5737-4fdc-a467-3bf65762084c",
    e2: "fba19ec4-53b0-4b6f-bd76-f16e4db10903",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8e559549-9511-4a0a-b131-9b38b9faa98c",
    e1: "fba19ec4-53b0-4b6f-bd76-f16e4db10903",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "5239afa2-7107-491a-b468-f28bb52c99cd",
    e1: "db7fa71c-5737-4fdc-a467-3bf65762084c",
    e2: "d249125d-5c00-477b-a570-02457c4b636e",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4183d561-5ad0-4c0c-998d-6c68acab1e8e",
    e1: "d249125d-5c00-477b-a570-02457c4b636e",
    e2: "b650a457-5718-457c-a749-e23661b15409",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a75f3264-7c76-4459-9db2-bcd6f0597f1d",
    e1: "4d9355bf-5a90-4258-80e6-6328a774f2ff",
    e2: "dbc0cd5d-cf2e-4480-9ca7-7b3b8dbe318b",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "20fd263c-ea0d-439d-8569-b3220fdf5a40",
    e1: "dbc0cd5d-cf2e-4480-9ca7-7b3b8dbe318b",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "dd80a8d1-e148-40e2-b89a-7ccffc1de110",
    e1: "4d9355bf-5a90-4258-80e6-6328a774f2ff",
    e2: "cd1bed14-1a59-4634-bf1d-3a37a9ae8585",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "94d383d4-017c-4f90-a7d9-45398d47edc0",
    e1: "cd1bed14-1a59-4634-bf1d-3a37a9ae8585",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "26a77772-8afb-4326-8ef4-672ca8bd8f19",
    e1: "4d9355bf-5a90-4258-80e6-6328a774f2ff",
    e2: "b7ed0023-7ee1-4659-85eb-2dcc44b32c7d",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "4fd082cf-6d89-42be-838e-d3813c194910",
    e1: "b7ed0023-7ee1-4659-85eb-2dcc44b32c7d",
    e2: "7984c943-25ed-4800-a68d-3ba6491c29ba",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "249b4ff5-99fc-438c-b37c-d0b5e9ced300",
    e1: "96ccca93-0257-4251-bac9-310a46c17068",
    e2: "e5673a69-44dd-499e-b92b-64d29f788533",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "eaaa7b04-55aa-41ee-b2cd-0dd1a6b56f48",
    e1: "e5673a69-44dd-499e-b92b-64d29f788533",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e771ddfb-6f69-4f0f-a400-53db44a88045",
    e1: "96ccca93-0257-4251-bac9-310a46c17068",
    e2: "758890bf-4bf2-40c9-8a2c-f89921aa6fe5",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8a046b4e-fcb3-4c80-a7ab-709775949d4d",
    e1: "758890bf-4bf2-40c9-8a2c-f89921aa6fe5",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "2432e846-ce9a-45c8-9ed7-81a5bf1b1be2",
    e1: "43f40f77-37b5-4f8a-95bd-8fdf8cfb967a",
    e2: "e9bafd45-633b-44e5-8591-901b2fc48ac4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "de3fafd1-e0af-49bf-a240-80e037e450a9",
    e1: "e9bafd45-633b-44e5-8591-901b2fc48ac4",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8a04e4c1-957c-44dc-87fe-c118875ab8a8",
    e1: "43f40f77-37b5-4f8a-95bd-8fdf8cfb967a",
    e2: "f8e838c6-1a25-4d38-aa33-eca263e2a674",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "fabccca6-7822-4bda-aaee-ba51da3c85cf",
    e1: "f8e838c6-1a25-4d38-aa33-eca263e2a674",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6884e6cc-705e-4dcb-bed7-9a33552705fb",
    e1: "3d0d460d-be1c-44f6-9b8c-bdb961e2dbd5",
    e2: "5bfc0bd3-b47a-49fb-bb26-874a5134c2b3",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "25369a5d-fc33-4cba-b5eb-acf8816410d3",
    e1: "5bfc0bd3-b47a-49fb-bb26-874a5134c2b3",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "591af01b-5c04-4cfb-af5b-7be835e2d0da",
    e1: "3d0d460d-be1c-44f6-9b8c-bdb961e2dbd5",
    e2: "9fd2c682-2533-4039-8932-d578e9ed3070",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7bce9cb4-74c4-4ff8-ab74-3f2b44ecce5e",
    e1: "9fd2c682-2533-4039-8932-d578e9ed3070",
    e2: "351a34bc-6e7d-40dc-b570-66db06950978",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f5b959b5-8492-43e8-91dd-86aa50b9f1c3",
    e1: "948500cf-e225-4b82-8712-e76fc678790a",
    e2: "f743b918-45fa-415c-bb6e-3417a56fe462",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "916df294-c269-4c87-aa1c-57e1b09375d9",
    e1: "f743b918-45fa-415c-bb6e-3417a56fe462",
    e2: "122dffb8-6150-4015-b6c3-40baa22d69fc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f97091d9-7b8f-4705-a226-8a715c3b2351",
    e1: "948500cf-e225-4b82-8712-e76fc678790a",
    e2: "8e70552c-890b-4a37-9371-0bd2046596e8",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a8b2febb-99cd-4ddb-ba30-e6ca74f8395d",
    e1: "8e70552c-890b-4a37-9371-0bd2046596e8",
    e2: "122dffb8-6150-4015-b6c3-40baa22d69fc",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "29be1bc6-0441-4ade-8e9a-2f20efeaaa0b",
    e1: "948500cf-e225-4b82-8712-e76fc678790a",
    e2: "aa53c986-60c8-4fde-8a8e-9d496cfa1180",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "0bcc5292-87eb-41b8-842c-f9258aab963a",
    e1: "aa53c986-60c8-4fde-8a8e-9d496cfa1180",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bdbe0cda-ae92-4462-8657-c837f922ec1d",
    e1: "70c0d3dc-c095-46c2-bd74-820009f5b43b",
    e2: "29583eee-57f6-4771-a48c-fcb7a4df1880",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "800875fd-6603-4333-addc-cb959d58abb5",
    e1: "29583eee-57f6-4771-a48c-fcb7a4df1880",
    e2: "b05b65f6-dd77-4571-b2e3-e1b2612803a8",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "49d0edcf-39a1-434d-b895-21cd5d31a335",
    e1: "70c0d3dc-c095-46c2-bd74-820009f5b43b",
    e2: "2a9063ba-62b1-49ae-a06c-4a70dcdae4e2",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "540abffb-196c-4ec1-b370-7dbe53f3529b",
    e1: "2a9063ba-62b1-49ae-a06c-4a70dcdae4e2",
    e2: "b05b65f6-dd77-4571-b2e3-e1b2612803a8",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "81f806ea-70e5-4ad0-86fc-f065a0d22bec",
    e1: "70c0d3dc-c095-46c2-bd74-820009f5b43b",
    e2: "b14a825e-1a61-40db-8607-d04dfad17fe2",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "75c30607-a3bc-4652-96a7-981e2e282c4b",
    e1: "b14a825e-1a61-40db-8607-d04dfad17fe2",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7431cb0d-477b-4737-aa9f-ff91fb6cfcb5",
    e1: "70c0d3dc-c095-46c2-bd74-820009f5b43b",
    e2: "7d203bdf-1de3-4a93-89c4-6acdb54bdfd5",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ed8564df-2bb3-4504-82cc-7553ddb2745a",
    e1: "7d203bdf-1de3-4a93-89c4-6acdb54bdfd5",
    e2: "27255e4c-a308-475b-89fd-65c7737495da",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "20885f01-d0f7-481b-b612-55187131f163",
    e1: "6f12c8ff-98d9-498d-93bd-3eff7fd7cc88",
    e2: "0aa7b7c8-eeb3-44bb-966b-db2bb91fc518",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "3d856ea8-d13b-45f4-b0ac-e86f7916e13a",
    e1: "0aa7b7c8-eeb3-44bb-966b-db2bb91fc518",
    e2: "b650a457-5718-457c-a749-e23661b15409",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f45d456d-8ce8-4240-8f2e-a26b39fcbba8",
    e1: "6f12c8ff-98d9-498d-93bd-3eff7fd7cc88",
    e2: "15dbb3bd-08fe-4e5b-bfa6-3f1de4bffd9b",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7729e56b-1dd6-436f-82bc-fb48abc9ff05",
    e1: "15dbb3bd-08fe-4e5b-bfa6-3f1de4bffd9b",
    e2: "ce3e3a0f-d671-4bd3-bfe7-d72b7e8877d2",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7b8d3e79-6d3d-4210-9e4c-5ed4d5095a46",
    e1: "6f12c8ff-98d9-498d-93bd-3eff7fd7cc88",
    e2: "dfd3205b-233a-4658-a4c3-49b9f7c1bee3",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e7e106ed-47e6-44e8-8af0-b04f842376c0",
    e1: "dfd3205b-233a-4658-a4c3-49b9f7c1bee3",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c1bb0a42-3154-4100-9003-3853ea5de88f",
    e1: "6f12c8ff-98d9-498d-93bd-3eff7fd7cc88",
    e2: "b5d5e359-47da-40a5-ad62-e8a4a188ffc5",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6f32b34e-564b-40ac-8d6d-6d1775702922",
    e1: "b5d5e359-47da-40a5-ad62-e8a4a188ffc5",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adc0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "fe04373a-6bf9-441c-8528-6dbce558e444",
    e1: "49a9702f-fe2a-40ac-88a5-56c9a7e61d07",
    e2: "d579ee1f-104f-4465-b1ae-e82ff65ea493",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f7c3b510-9037-419b-901c-36f1afb4494c",
    e1: "d579ee1f-104f-4465-b1ae-e82ff65ea493",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f87bad19-77c0-47ca-9949-f044b14c8612",
    e1: "49a9702f-fe2a-40ac-88a5-56c9a7e61d07",
    e2: "d4e7a20f-47f5-4aec-996c-28c9402f657e",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "824ab1aa-21b5-41f9-b1da-6c2c97edb7b9",
    e1: "d4e7a20f-47f5-4aec-996c-28c9402f657e",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "2ed0848f-94c8-4ca7-8a51-0a2374e1e566",
    e1: "49a9702f-fe2a-40ac-88a5-56c9a7e61d07",
    e2: "4d57904f-d81c-4b04-8fe4-65e53feac613",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "6e436cde-2792-406a-8c37-bae17e2b8278",
    e1: "4d57904f-d81c-4b04-8fe4-65e53feac613",
    e2: "548a799f-95e1-46cf-8a3c-61d452f6480f",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1d510f6a-61dc-465b-9c87-ef45fbddb50f",
    e1: "e0850e25-a4ef-4932-9dd5-6ecbcbf752ee",
    e2: "a08aa59a-65e3-497d-9ce5-4f03198b1c20",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "41516eb4-af26-44e9-8b70-26c525855e1d",
    e1: "a08aa59a-65e3-497d-9ce5-4f03198b1c20",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "934a7897-31b5-41d2-b218-06055def625e",
    e1: "e0850e25-a4ef-4932-9dd5-6ecbcbf752ee",
    e2: "b25a1b7f-1198-4421-a2fa-750a450661ff",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f7608a16-e845-445a-9496-b45a0e0d5e77",
    e1: "b25a1b7f-1198-4421-a2fa-750a450661ff",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "68ed9325-c7bd-446a-a7cc-1c8694aff256",
    e1: "e0850e25-a4ef-4932-9dd5-6ecbcbf752ee",
    e2: "c4621f75-87b1-4ff4-9fc4-9ded2994c50b",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e31cfa61-1fa2-4008-91aa-a53a6df71f41",
    e1: "c4621f75-87b1-4ff4-9fc4-9ded2994c50b",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "17b1fe86-9f1d-4099-a63c-119adbfd9a43",
    e1: "f7900be6-d16a-4152-a994-6beedb0132ad",
    e2: "07674621-20a1-4858-9b05-edc863e02285",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "98c36d54-433b-459c-bb61-cf414c35dd09",
    e1: "07674621-20a1-4858-9b05-edc863e02285",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "bf9d5aa7-d7f5-4d9f-a164-3e95d3432df6",
    e1: "f7900be6-d16a-4152-a994-6beedb0132ad",
    e2: "1e70d3a6-4885-4643-8cb4-74e26e293b01",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b024b293-7479-4eaf-9045-592e23bf2ee4",
    e1: "1e70d3a6-4885-4643-8cb4-74e26e293b01",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "81b4e242-31dc-4c92-acd1-e83f119fef52",
    e1: "f7900be6-d16a-4152-a994-6beedb0132ad",
    e2: "b24df92b-4939-4727-8eb2-0d0dfd4985a7",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c74f07b6-f33e-42fb-982f-5685d5e23305",
    e1: "b24df92b-4939-4727-8eb2-0d0dfd4985a7",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "a854905d-e56b-45e6-9d5a-b4a09dad318f",
    e1: "f7900be6-d16a-4152-a994-6beedb0132ad",
    e2: "0bef650c-9222-40f1-a8f1-969e67637181",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "01be31cb-cc41-4c7f-919b-66ab94312197",
    e1: "0bef650c-9222-40f1-a8f1-969e67637181",
    e2: "734de3a3-7812-4c95-99d0-9fb72242899e",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "15279f1b-d025-4b9b-9c4c-027eb12ca5bc",
    e1: "f7900be6-d16a-4152-a994-6beedb0132ad",
    e2: "6359a9db-882b-4f13-94a6-06daa85180cc",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "507be68f-f3d0-4022-a4e7-a10459faae30",
    e1: "6359a9db-882b-4f13-94a6-06daa85180cc",
    e2: "a6adbc54-db95-4165-b590-9b366ee2c387",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "90fe3e65-b4bd-4c69-a47e-88c9eabcec17",
    e1: "abe10ac7-3448-4448-98af-8f76898691df",
    e2: "d413a3de-359a-41ef-a4c5-b5f45c244964",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "1e9def5a-c7a6-4f3e-8f32-ae7572b87c4d",
    e1: "d413a3de-359a-41ef-a4c5-b5f45c244964",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "0389a1c5-f4f6-4260-be61-70c9bf44d77c",
    e1: "abe10ac7-3448-4448-98af-8f76898691df",
    e2: "b8891177-5dab-4ab3-b88f-083b77831e72",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "3b4e0972-d9a8-4d79-9523-a15b2d506f0b",
    e1: "b8891177-5dab-4ab3-b88f-083b77831e72",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "aa30fbc4-8e22-40b1-80a6-45a15b9dcbf6",
    e1: "abe10ac7-3448-4448-98af-8f76898691df",
    e2: "eb222d8c-bcda-404b-8d20-66ef4a10b697",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "72b1f757-b1cc-42c7-9712-a953051d58dc",
    e1: "eb222d8c-bcda-404b-8d20-66ef4a10b697",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d25c29bd-b219-4ef7-9d6e-bddd4351c3dc",
    e1: "abe10ac7-3448-4448-98af-8f76898691df",
    e2: "2918ae28-e477-4286-9177-b3f006538eaa",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "ffd36433-afde-4271-bcfd-b1ffd0e19ed6",
    e1: "2918ae28-e477-4286-9177-b3f006538eaa",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "8bc7cfbc-94ed-4885-ae63-91c726281bbd",
    e1: "abe10ac7-3448-4448-98af-8f76898691df",
    e2: "ed48c93a-d0b7-4f55-b7e6-dad74f7f589c",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "0cbf8bd3-0a6e-4b00-9a75-5d3511d4b34f",
    e1: "ed48c93a-d0b7-4f55-b7e6-dad74f7f589c",
    e2: "27255e4c-a308-475b-89fd-65c7737495da",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "959bf242-67c8-4be8-9869-7ecd3be9f749",
    e1: "b5632457-ca88-4db8-9017-26a7b0bbff7a",
    e2: "672fcd44-8dc9-4d00-a822-e1d6ce397e28",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f17eed5b-057b-46c3-a1b3-37bb48dca13f",
    e1: "672fcd44-8dc9-4d00-a822-e1d6ce397e28",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "278b293c-6c90-4330-8250-98405f92484d",
    e1: "b5632457-ca88-4db8-9017-26a7b0bbff7a",
    e2: "8e66ec88-27d4-4c5d-9760-401c6b0aa470",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "55abc056-1316-45fe-af7f-2cdc19819fde",
    e1: "8e66ec88-27d4-4c5d-9760-401c6b0aa470",
    e2: "a179a1d1-e42b-4661-8afb-4cb61977e244",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "444333c8-0c6e-431b-b1eb-388395d2050e",
    e1: "b5632457-ca88-4db8-9017-26a7b0bbff7a",
    e2: "d3867d25-b200-4a5e-9beb-0b94ffb639f3",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "189fda7b-bc1e-4373-bc50-370554446c30",
    e1: "d3867d25-b200-4a5e-9beb-0b94ffb639f3",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "66034ac8-de30-4917-aa86-7614ff5317e2",
    e1: "924eee43-5714-4c13-aa9d-b2d51114ae58",
    e2: "b9da4ad2-a0ec-4ad2-bdba-0d924b8524e4",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "d7e53310-e4ae-4eef-8119-7b4140113629",
    e1: "b9da4ad2-a0ec-4ad2-bdba-0d924b8524e4",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f31e92b7-5cb5-442f-8a98-88b854274c59",
    e1: "924eee43-5714-4c13-aa9d-b2d51114ae58",
    e2: "de3c7a7c-31b1-4d84-86e7-35c1f0224280",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e6cfabd0-b4e4-41f2-a1b7-55667caff912",
    e1: "de3c7a7c-31b1-4d84-86e7-35c1f0224280",
    e2: "22980727-11d7-4cf2-bcca-f90155fbd85a",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "50e9d04c-fa9c-48fd-a3c0-34d870797a46",
    e1: "64e92f13-e9c0-4a6b-8ed1-c19d3477caed",
    e2: "805ecff7-29c2-490b-9c83-b06622909c13",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "e3a9d334-1b04-4aec-b334-dc383fbb5d56",
    e1: "805ecff7-29c2-490b-9c83-b06622909c13",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7adf0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "363d4830-476f-4400-8605-e78788d5f7f3",
    e1: "64e92f13-e9c0-4a6b-8ed1-c19d3477caed",
    e2: "e8ccd951-5250-49c6-9fa7-e08ee3427447",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "0e5c743a-b6a1-4beb-8dd3-3c28b9247b39",
    e1: "e8ccd951-5250-49c6-9fa7-e08ee3427447",
    e2: "2d63eb0f-ab03-485d-b621-b6f503248028",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "b2d2f9da-2960-4820-bc9a-5cc8864da203",
    e1: "64e92f13-e9c0-4a6b-8ed1-c19d3477caed",
    e2: "03616af5-4204-42dd-9ec8-e6642d30ab43",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "c1d2a113-7f0b-421c-9509-351a153879f5",
    e1: "03616af5-4204-42dd-9ec8-e6642d30ab43",
    e2: "9e5b410c-6fa3-445c-95c9-5c81980f7578",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "7166c049-08dc-4755-bf69-302038c5b8a5",
    e1: "64e92f13-e9c0-4a6b-8ed1-c19d3477caed",
    e2: "bf042c8c-50e2-4ddf-86bd-7cd340246379",
    description: "Feature has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
  {
    id: "f01f2b08-b1d5-40c0-a0db-7d7a85973957",
    e1: "bf042c8c-50e2-4ddf-86bd-7cd340246379",
    e2: "58d426c0-d3ef-400e-9bfd-dab194d7ada0",
    description: "Stakeholder Group has User Story",
    a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
  },
];

// USER ROLES Static - NOW IN SUPABASE (AND SEE STATIC NEWUSERROLES ARRAY)
// export const user_roles: {
//   title: string;
//   description: string;
// }[] = [
//   {
//     title: "any_user",
//     description: "Any user of the Orgmenta app/ecosystem",
//   },
//   {
//     title: "orgmenta_employee",
//     description:
//       "A developer, contractor or other employee that works for Orgmenta",
//   },
//   {
//     title: "client_user",
//     description: "Any user that works for an Orgmenta client",
//   },
//   {
//     title: "client_bookkeeper",
//     description: "The accounts receivables employee for the client",
//   },
//   {
//     title: "client_dispatcher",
//     description: "Triager / Dispatcher / Service Delivery Manager",
//   },
//   {
//     title: "client_administrator",
//     description:
//       "The person or dev team that manages the Orgmenta system for the client company",
//   },
//   {
//     title: "client_technician",
//     description:
//       "An engineer, developer or other technical person that works for a client",
//   },
//   {
//     title: "client_financialcontroller",
//     description: "The Client CFO / Primary finance & accounts manager",
//   },
//   {
//     title: "client_executive",
//     description: "Any C title or division head.",
//   },
//   {
//     title: "client_manager",
//     description:
//       "Any client employee responsible for managing employees / line manager",
//   },
//   {
//     title: "client_hrmanager",
//     description: "Responsible for employees and contractors",
//   },
//   {
//     title: "client_accountmanager",
//     description: "Responsible for a specific customer account.",
//   },
//   {
//     title: "client_salesmanager",
//     description: "Responsible for customers, leads, proposals and sales.",
//   },
//   {
//     title: "client_salesperson",
//     description: "Responsible for specific quotes/proposals",
//   },
//   {
//     title: "client_procurement",
//     description: "Responsible for procurement and inventory management",
//   },
//   {
//     title: "client_marketingmanager",
//     description: "Responsible for procurement and inventory management",
//   },
//   {
//     title: "customer_user",
//     description:
//       "Any client customer user, e.g. a person with a broken workstation",
//   },
//   {
//     title: "customer_bookkeeper",
//     description: "The accounts receivables employee for the client's customer",
//   },
//   {
//     title: "customer_financialcontroller",
//     description: "The Client CFO / Primary finance & accounts manager",
//   },
//   {
//     title: "client_auditor",
//     description:
//       "Internal compliance auditor, e.g. for OH&S Checklists/ISO:9001/27001/45001/14001 auditing",
//   },
//   {
//     title: "external_auditor",
//     description:
//       "External compliance auditor, e.g. for ISO:9001/27001/45001/14001 auditing",
//   },
// ];

// Features static (NOW IN SUPABASE)
// 'Features' for orgmenta are like 'Real-Time Analytics', 'Data Encryption' and others of same scope and target.
// They are not 'Invoicing' etc. (this is fullfilled by 'modules' (see static.js and bookmarks.tsx for their temporary location while they are static) in this circumstance Accounts > Receivables > Invoicing)
// specific features for the system. userstories can be constructed with:
// const exampleUserstory  = 'As a' + 'Dispatcher' + 'I want to '+ features[0].userstories.dispatcher;
// User stories will be split out into being separate entities (which can then be linked to requirements, features, user_roles etc.

// export const features: {
//   title: string;
//   version: number;
//   status: string;
//   description: string;
//   priority: number;
//   notes: string;
// }[] = [
//   {
//     title: "Update",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "App updates - either via app store, expo updates, github>pullrequest>autodeplyNetlify, or other",
//     priority: 2,
//     notes: "",
//   },
//   {
//     title: "History/Undo/Redo",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Undo (and redo) to any point in entity-relationship histories",
//     priority: 2,
//     notes: "Chris to design this",
//   },
//   {
//     title: "URL Parameters",
//     version: 0.0,
//     status: "0. New",
//     description: "Email (and other communication channels) Connectors",
//     notes:
//       "see autotask live formulas, may be useful reference: https://ww1.autotask.net/help/content/4_admin/2featuressettings/livereports/addlivereport/Calculations/LRFormulas.htm",
//     priority: 2,
//     userstories: {
//       any_user: [
//         "use a url with 'action' parameters in it, in order to prepopulate an action form. For example, add/title=example&type=Event should prepopulate a form.This means that the action tabs must be accessible via url.",
//         "streamline my workflow, add bookmarks etc.",
//         "be able to put formulas in my url params, e.g. 'start=[today+3]', 'budget=[sum(childevents)+1]' etc.",
//       ],
//       customer_user: [
//         "submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
//       ],
//       orgmenta_employee: [
//         "guide users to a specific screen/display/state very easily",
//       ],
//     },
//   },
//   {
//     title: "Commschannel Detectors",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_dispatcher: [
//         "I want client enquiries to automatically create a ticket or update a relevant existing ticket.",
//       ],
//       customer_user: [
//         "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
//       ],
//     },
//   },
//   {
//     title: "Ticket Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "have incoming tickets automatically categorized based on keywords, so they can be triaged effectively.",
//       ],
//       client_dispatcher: [
//         "Have all support tickets created on a single pane of glass for me to triage and assign",
//       ],
//       client_technician: [
//         "I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.",
//       ],
//       customer_user: [
//         "submit tickets through multiple channels (email, chat, phone), so that I can reach support through my preferred method",
//       ],
//     },
//   },
//   {
//     title: "Asset (Configuration) Management",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Manage client and internal workstations, servers, licenses, networks and any other tangible/intangible, physical/digital asset",
//     priority: 1,
//     userstories: {
//       client_administrator: [
//         "perform automatic scans on client networks to populate asset data. (low priority, RMMs cover this)",
//       ],
//       client_technician: [
//         "link assets to tickets to better understand the scope of issues and easily click through to them for further information",
//       ],
//       client_manager: [
//         "see a utilization report for all managed assets, to understand overall performance.",
//       ],
//     },
//   },
//   {
//     title: "Billing & Invoicing to Customers",
//     version: 0.0,
//     status: "0. New",
//     description: "Clients issue invoices to their customers",
//     priority: 1,
//     userstories: {
//       client_administrator: [
//         "automate the conversion of billable hours into invoices",
//         "have items suggested automatically for 'cover letter' emails (e.g. if there is a price increase imminent, there should be a suggestion to alert customers 2 months before.",
//         "design invoice layouts and content",
//         "design cover letter layouts and content",
//       ],
//       customer_bookkeeper: [
//         "automatically receive invoices on time to the commschannel of my choosing",
//         "see a breakdown of charges in my invoices for transparency",
//       ],
//       client_financialcontroller: [
//         "integrate the PSA with accounting software for efficient reconciliation",
//         "set wording on invoices including payment details and terms, ",
//         "have 'cover letter' emails for the invoice pdfs",
//         "set price increases and add these notes to the email cover letters",
//       ],
//       client_bookkeeper: [
//         "Easily verify & validate synced charges for invoices",
//         "Automatically generate invoices",
//         "Ask for invoice approval from the client_financialcontroller",
//       ],
//     },
//   },
//   {
//     title: "Reporting & Analytics",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "view KPI dashboards to make data-driven decisions",
//       ],
//       client_technician: [
//         "insights into common ticket issues for a given period, to improve service.",
//       ],
//       client_manager: [
//         "review revenue and expense reports to gauge profitability",
//       ],
//     },
//   },
//   {
//     title: "Workflow Automations",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Conditional logic,  rule running and template generations. If [a, b, c] then [x, y, z]",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "define workflows for custom setups and common service requests",
//       ],
//       client_technician: ["repetitive tasks to be automated to save time"],
//       client_manager: ["workflow analytics to identify bottlenecks"],
//     },
//   },
//   {
//     title: "Time Tracking",
//     version: 0.0,
//     status: "0. New",
//     description: "Time Entries & Timesheets",
//     priority: 1,
//     userstories: {
//       client_administrator: [
//         "define workflows for custom setups and common service requests",
//       ],
//       client_technician: ["repetitive tasks to be automated to save time"],
//       customer_manager: [
//         "view the time logged against my projects for accountability",
//       ],
//     },
//   },
//   {
//     title: "Knowledge Base",
//     version: 0.0,
//     status: "0. New",
//     description: "A store of procedures and other information",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "the knowledgebase to be automatically updated with new resolutions",
//       ],
//       client_technician: [
//         "refer to the internal knowledge base for resolution steps",
//       ],
//       customer_user: ["access to a public-facing FAQ for common issues"],
//     },
//   },
//   {
//     title: "Lead Management",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Lead, Quote, Prospect, Proposal management of potential customers",
//     priority: 2,
//     userstories: {
//       client_salesmanager: [
//         "Assign (automatically or manually) primary and secondary (etc.) salespeople to a lead/quote/proposal/opportunity",
//       ],
//       client_salesperson: [
//         "track leads and convert them into clients within the PSA",
//       ],
//       customer_user: ["access to a public-facing FAQ for common issues"],
//     },
//   },
//   {
//     title: "Customer Relationship Management",
//     version: 0.0,
//     status: "0. New",
//     description: "Customer lifecycles",
//     priority: 2,
//     userstories: {
//       client_manager: ["Assign a team to a customer"],
//       client_customerteam: [
//         "have access to the client's relationship status & information",
//       ],
//       customer_user: [
//         "have a dedicated account manager I can reach out to for non-technical issues",
//       ],
//     },
//   },
//   {
//     title: "Service Level Agreements",
//     version: 0.0,
//     status: "0. New",
//     description: "SLAs and SLOs",
//     priority: 2,
//     userstories: {
//       client_manager: ["define SLA rules and ensure compliance"],
//       client_technician: ["notifications for approaching SLA deadlines"],
//       customer_manager: [
//         "a report on SLA compliance for the services rendered.",
//       ],
//     },
//   },
//   {
//     title: "Compliance, Auditing& Security Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "robust security features like 2FA and data encryption",
//       ],
//       client_manager: [
//         "compliance features & reports that allow us to adhere to standards such as GDPR, HIPAA, etc",
//       ],
//       customer_manager: [
//         "assurance that my company's data is being handled securely",
//       ],
//       client_auditor: [
//         "provide evidence to myself and external auditors that standards are being upheld.",
//       ],
//       external_auditor: ["see evidence that standards are being upheld."],
//     },
//   },
//   {
//     title: "VOIP Integration",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 4,
//     userstories: {
//       any_user: [
//         "the PSA to integrate with VoIP systems so that communications can be logged and tracked within tickets.",
//         "everything integrated into a single pane of glass (but only if it does not compromise on features or UX)",
//       ],
//     },
//   },
//   {
//     title: "Internal Tool Creation",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Allow client users to create their own tools & reports, instead of relying on their admin/dev team which has a longer, more costly dev cycle",
//     priority: 4,
//     userstories: {
//       client_administrator: [
//         "empower employees to transform and display data themselves.",
//       ],
//       client_user: [
//         "spin up a quick internal app (a la Retool) rather than spending months with the IT department /dev team",
//       ],
//     },
//   },
//   {
//     title: "Status Page",
//     version: 0.0,
//     status: "0. New",
//     description: "(like statuspage or updown.io)",
//     priority: 4,
//     userstories: {
//       client_administrator: [
//         "see the status of all their services in a single pane.",
//       ],
//       client_user: ["see the status of all our services in a single pane."],
//     },
//   },
//   {
//     title: "Link Page",
//     version: 0.0,
//     status: "0. New",
//     description: "(like link tree or leaf page)",
//     priority: 4,
//     userstories: {
//       client_marketingmanager: [
//         "have a collated contact page or landing page.",
//       ],
//     },
//   },
//   {
//     title: "Link Shortener",
//     version: 0.0,
//     status: "0. New",
//     description: "(like link tree or leaf page)",
//     priority: 4,
//     userstories: {
//       client_administrator: [
//         "a bespoke url shortener that we and our customers can use.",
//       ],
//     },
//   },
//   {
//     title: "Corporate Website",
//     version: 0.0,
//     status: "0. New",
//     description: "(like link tree or leaf page)",
//     priority: 4,
//     userstories: {
//       client_administrator: [
//         "be able to single-click publish our corporate website and not worry about hosting, domains or pricing.",
//       ],
//       client_marketingmanager: [
//         "make entities 'published' and public facing, and automatically go onto the correct page of our website (e.g. news, roadmap)",
//       ],
//     },
//   },
//   {
//     title: "Multi-Tenancy and Account Segmentation",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "manage multiple tenant environments within a single PSA instance",
//       ],
//       client_manager: [
//         "segment client accounts based on specific criteria (industry, size, location)",
//       ],
//     },
//   },
//   {
//     title: "Notifications and Alerts",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_manager: [
//         "set up customized alerts for specific events, like SLA violations or system outages",
//       ],
//       client_technician: [
//         "real-time notifications for ticket updates or comments",
//       ],
//     },
//   },
//   {
//     title: "Calendar and Scheduling",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 1,
//     userstories: {
//       client_dispatcher: [
//         "view all technicians' availability in one centralized calendar",
//       ],
//       client_technician: [
//         "synchronize my PSA calendar with external calendars (Google Calendar, Outlook)",
//       ],
//     },
//   },
//   {
//     title: "Customer Contract Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 1,
//     userstories: {
//       client_accountmanager: [
//         "set automated reminders for upcoming contract renewals",
//         "manage and renew client contracts within the PSA",
//       ],
//     },
//   },
//   {
//     title: "Mobile Accessibility",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 1,
//     userstories: {
//       client_technician: [
//         "mobile-friendly interface or app to update tickets while in the field",
//       ],
//       customer_user: [
//         "access ticket status and updates via a mobile application",
//       ],
//     },
//   },
//   {
//     title: "Customer Satisfaction Surveys",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "CSAT, Net Promotor Score (NPS), Customer Effort Score (CES), Customer Loyalty Index (CLI),	Customer Satisfaction Index (CSI) etc.",
//     notes: [
//       `
// 			Net Promoter Score (NPS): NPS measures customer loyalty by asking customers how likely they are to recommend a product or service to others. Responses are typically on a scale of 0 to 10.
// 			Customer Effort Score (CES): CES assesses the ease with which customers can achieve their goals when interacting with a product or service. It typically uses a scale to measure effort, with lower scores indicating less effort required.
// 			Customer Loyalty Index (CLI): CLI combines various metrics to evaluate customer loyalty. It considers factors like repeat purchases, customer lifetime value, and advocacy.
// 			Customer Satisfaction Index (CSI): CSI is a broad measure of overall satisfaction with a company's products or services. It often includes multiple survey questions to assess different aspects of the customer experience.
// 			Overall Satisfaction (OSAT): OSAT is a straightforward measure of overall customer satisfaction with a specific interaction, product, or service.
// 			Customer Churn Rate: This metric measures the percentage of customers who stop using a product or service over a specific period, indicating dissatisfaction.
// 			Customer Retention Rate: The opposite of churn rate, this measures the percentage of customers who continue using a product or service over time.
// 			Social Media Sentiment Analysis: This involves analyzing social media comments, reviews, and mentions to gauge public sentiment and customer satisfaction.
// 			Customer Feedback Forms: These can be custom surveys designed by companies to gather feedback on specific aspects of their products or services.
// 			Online Reviews and Ratings: Monitoring and analyzing online reviews and ratings on platforms like Yelp, Google, or Amazon can provide insights into customer satisfaction.`,
//     ],
//     priority: 1,
//     userstories: {
//       client_manager: [
//         "automatically send CSAT surveys upon ticket resolution",
//       ],
//       client_executive: [
//         "see customer satisfaction metrics in my KPI dashboard",
//       ],
//     },
//   },
//   {
//     title: "Internal Communications Tool",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
//     priority: 1,
//     userstories: {
//       client_user: [
//         "an internal chat function to collaborate with team members",
//       ],
//       client_manager: ["track internal discussions related to tickets"],
//     },
//   },
//   {
//     title: "Business Continuity and Disaster Recovery",
//     version: 0.0,
//     status: "0. New",
//     description: "Built-in backup and recovery options",
//     priority: 1,
//     userstories: {
//       client_administrator: [
//         "back up and restore the entire PSA system to a specific timestamp",
//         "roll back granular changes to entities/relationships",
//       ],
//       client_manager: [
//         "contingency plan feature that documents the steps to take in case of system failure",
//       ],
//     },
//   },
//   {
//     title: "Resource Allocation and Capacity Planning",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 1,
//     userstories: {
//       client_manager: [
//         "allocate resources based on skill sets and availability.",
//       ],
//       client_executive: [
//         "plan for capacity based on trends in ticket volume and resource utilization",
//       ],
//     },
//   },
//   {
//     title: "Change Management",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Change Requests, Change Approvals, Implementation Feebback, Rollback Options, Lessons Learned",
//     priority: 3,
//     userstories: {
//       client_manager: ["approve major changes before they are implemented"],
//       client_technician: ["log changes made during the resolution process"],
//     },
//   },
//   {
//     title: "Quality Control",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {},
//   },
//   {
//     title: "Quality Assurance",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {},
//   },
//   {
//     title: "Email Design",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "design email templates from within the PSA. (see https://news.ycombinator.com/item?id=37596253 loops and similar)",
//     priority: 3,
//     userstories: {},
//   },
//   {
//     title: "White-Labeling and Customization",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_administrator: [
//         "the ability to white-label the PSA tool to maintain brand consistency. This includes custom domain / dns records to have the psa available under our corporate domain.",
//         "extensive UI/UX customization capabilities to match our specific workflow needs.",
//       ],
//     },
//   },
//   {
//     title: "Shared Inbox",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "'One space for email, marketing, and customer relationships' (e.g. https://helpmonks.com/) and for employees to be able to view shared folders/inboxes",
//     priority: 2,
//     userstories: {},
//   },
//   {
//     title: "Keyboard shortcuts",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       any_user: [
//         "use keyboard shortcuts to navigate the app (on web or desktop)",
//       ],
//     },
//   },
//   {
//     title: "Inventory Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_procurement: [
//         "real-time inventory tracking within the PSA for hardware and software assets.",
//       ],
//       client_technician: [
//         "See what stock we have on hand in order to provision a device for a customer.",
//       ],
//     },
//   },
//   {
//     title: "Stock Take",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_procurement: [
//         "barcode scanning and other features to make stock take easy",
//       ],
//     },
//   },
//   {
//     title: "Signatures/Signoff & Document Management",
//     version: 0.0,
//     status: "0. New",
//     description: "E-Signature and Document Management",
//     priority: 3,
//     userstories: {
//       any_user: [
//         "be able to sign off / give my blessing on a proposal, ticket or other entity",
//       ],
//       client_manager: [
//         "have evidence of a signed agreement with the customer",
//         "collate all client-related documents in one centralized repository.",
//       ],
//       client_salesperson: [
//         "send, receive, and store e-signed contracts within the PSA.",
//       ],
//     },
//   },
//   {
//     title: "Social Media Integration",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {
//       client_technician: [
//         "manage customer inquiries from social media channels within the PSA.",
//       ],
//       client_manager: ["social media analytics in my reporting dashboard"],
//       client_marketingmanager: [
//         "manage campaigns and promotions within the PSA.",
//       ],
//     },
//   },
//   {
//     title: "Gamification",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 4,
//     userstories: {
//       any_user: [
//         "I [MAY] want [THE OPTION] to earn rewards or recognition for achieving performance milestones [THAT IS NON-MANDATORY AND DOES NOT AFFECT PERFORMANCE ASSESSMENTS]. <-- CONTENTIOUS. (Or just make it a pleasant app to use!)",
//       ],
//       client_manager: [
//         "incorporate gamification elements to motivate and engage technicians.",
//       ],
//     },
//   },
//   {
//     title: "Real-time Collaboration",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       any_user: [
//         "collaborate in real-time with team members on complex issues.",
//       ],
//       client_manager: [
//         "a live feed of ticket status updates for dynamic resource allocation.",
//       ],
//     },
//   },
//   {
//     title: "Payment Processing",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {
//       client_administrator: [
//         "integrate payment gateways for direct billing through the PSA.",
//       ],
//       customer_financialcontroller: [
//         "pay invoices within the PSA portal itself for convenience.",
//       ],
//     },
//   },
//   {
//     title: "Client Portal",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {
//       client_accountmanager: [
//         "allow customers to log tickets in their customer portal",
//         "allow customers to access information themselves rather than having to come through me",
//       ],
//       customer_user: [
//         "log into my MSPs portal and see all open tickets, discussions, configurations, proposals etc.",
//       ],
//     },
//   },
//   {
//     title: "Rosters, availability, On call and Time-Off Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 3,
//     userstories: {
//       client_hrmanager: [
//         "manage leave, holidays, and time-off within the same PSA system where work is being tracked.",
//         "forecast and coordinate on-call teams, holidays, after hours coverage and emergency coverage",
//       ],
//       client_user: ["request time off in the easiest way possible."],
//       client_dispatcher: [
//         "see employee availability on a single pane of glass.",
//       ],
//     },
//   },
//   {
//     title: "Sales Proposals and Quoting",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_salesperson: [
//         "create, send, and track sales proposals within the PSA system to streamline the sales process.",
//       ],
//       client_salesmanager: [
//         "maintain a repository of proposal templates for different services and contract types.",
//       ],
//       client_administrator: [
//         "integrate proposal software with the PSA to ensure that pricing and asset lists are up-to-date.",
//       ],
//       cusotomer_financialcontroller: [
//         "view, comment on, and e-sign proposals through a client portal.",
//       ],
//     },
//   },
//   {
//     title: "Natural Language & Rich Text Notes with Links",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       any_user: [
//         "write notes/descriptions in the entities that are references/relationships (to other entities, with their attribute/relationship type) in them.",
//         "Paste images and other media directly into notes",
//         "Have anything I add into an entity's notes auto-added as relationships to the entity.",
//       ],
//     },
//   },
//   {
//     title: "Globalization and Localization",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_financialcontroller: [
//         "add varying tax rules to invoice templates, territories, customers and other billing areas",
//       ],
//       client_administrator: [
//         "multi-language and multi-currency support for international operations.",
//       ],
//       client_manager: [
//         "set region-specific settings, like date formats and compliance standards.",
//       ],
//     },
//   },
//   {
//     title: "Vendor Management",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {
//       client_manager: [
//         "track vendor performance metrics.",
//         "record contracts and terms with vendors.",
//       ],
//       client_administrator: [
//         "multi-language and multi-currency support for international operations.",
//       ],
//       client_financialcontroller: [
//         "manage payments and renewals with vendors.",
//       ],
//       client_procurement: [
//         "track and manage all vendor interactions, including quotations, lead times, and service quality, within the PSA system.",
//       ],
//     },
//   },
//   {
//     title: "Training and Documentation",
//     version: 0.0,
//     status: "0. New",
//     description: "Training, Learning & Development, and associated Resources",
//     priority: 2,
//     userstories: {
//       client_manager: [
//         "robust documentation and training modules within the PSA.",
//         "assign and track training courses for new hires.",
//         "view the expertise at my disposal",
//       ],
//       client_user: [
//         "manage my skills & certifications within the same pane of glass",
//       ],
//       client_dispatcher: [
//         "filter expertise and assign an engineer with the skills commensurate to the project/service required.",
//       ],
//     },
//   },
//   {
//     title: "Business Intelligence and Advanced Analytics",
//     version: 0.0,
//     status: "0. New",
//     description: "Training, Learning & Development, and associated Resources",
//     priority: 2,
//     userstories: {
//       client_manager: [
//         "predictive analytics capabilities to forecast resource needs, revenue, and other key metrics.",
//         "view the expertise at my disposal",
//       ],
//       client_user: [
//         "spin up charts/reports/dashboards (with the data available and related to me)",
//       ],
//     },
//   },
//   {
//     title: "Tax Settings and Region-based tax rules",
//     version: 0.0,
//     status: "0. New",
//     description: "",
//     priority: 2,
//     userstories: {},
//   },
//   {
//     title: "Audit Trail",
//     version: 0.0,
//     status: "0. New",
//     description: "Entity Logs",
//     priority: 1,
//     userstories: {
//       client_administrator: ["see all changes and edits made in the system"],
//       client_technician: [
//         "see a timeline of what I and my colleagues have done",
//       ],
//     },
//   },
//   {
//     title: "Signup Functionality",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Signup Functionality",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Complete the implementation of the signup functionality:\n1. Defined the interface and placeholders for the signup related functions, but the actual logic is missing.\n2. Implement the requestAuthSignup and useAuthSignup functions according to your library's requirements.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Change Password Functionality",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Implement a function that allows users to change their passwords after signing in.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Password Recovery (Forgot Password) Functionality",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Provide a function for users to recover their passwords through a password reset process. This involves sending password reset emails and allowing users to set a new password.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Social Authentication",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Include functions for authenticating users using popular social media platforms like Google, Facebook, Twitter, etc.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Multi-Factor Authentication (MFA)",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Implement support for multi-factor authentication to enhance security by adding an extra layer of verification.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Account Deactivation and Removal",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Provide functions to allow users to deactivate or delete their accounts.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Account Verification and Email Confirmation",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Implement functions to send verification emails and confirm user email addresses.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "User Profile Management",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Include functions to update user profile information, such as profile picture, display name, and other relevant details.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Session Management",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Enhance session management by adding functions to check and refresh authentication tokens.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Role-Based Access Control (RBAC)",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "If applicable, include functions to manage user roles and permissions for different parts of the application.",
//     priority: 1,
//     userstories: {
//       client_administrator: [
//         "define user roles and permissions based on job function",
//       ],
//       client_user: ["have role-specific access to modules and data"],
//       customer_user: [
//         "different levels of access based on my agreement with the MSP",
//       ],
//       customer_manager: [
//         "only allow a certain team access to information (i.e. a select few client employees",
//       ],
//     },
//   },
//   {
//     title: "Security Enhancements",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Implement security features like brute-force protection, account lockout mechanisms, and IP blocking.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Event Hooks and Customization",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Provide hooks and customization options to allow developers to integrate the authentication package seamlessly into their applications.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Localization and Internationalization",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Support different languages and regions by including features for localization and internationalization.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Account Linking",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Allow users to link multiple authentication methods to their account, such as email and social media accounts.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "OAuth and OpenID Connect Integration",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Integrate with OAuth and OpenID Connect providers for broader authentication options.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Analytics and Monitoring",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Include features to track authentication-related events and provide monitoring capabilities.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Password Complexity and Policies",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Provide options for setting and enforcing password complexity rules and policies.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "OAuth2 / OIDC Server (for Advanced Use Cases)",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "If your package aims to cover advanced use cases, consider offering OAuth2 or OpenID Connect server capabilities.",
//     priority: 1,
//     userstories: {},
//   },
//   {
//     title: "Downtime detector",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "a la https://downdetector.com.au/ / https://www.pingdom.com/solution/website-down-detector/ / https://uptimerobot.com/",
//     priority: 5,
//     userstories: {},
//   },
//   {
//     title: "StatusPage",
//     version: 0.0,
//     status: "0. New",
//     description: "a la https://status.io/",
//     priority: 4,
//     userstories: {},
//   },
//   {
//     title: "DNS Manager",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Create a dns manager system for engineers to update from the PSA instead of logging into separate hosting instances.",
//     priority: 5,
//     userstories: {},
//   },
//   {
//     title:
//       "Extra rich text functionality: Ability to paste tables, screenshots (etc.) into rich text",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "CW etc. does not allow you to paste csv or xlsx cells/tables into time entries with formatting. We should be able to retain the formatting when pasted in.",
//     priority: 5,
//     userstories: {},
//   },
//   {
//     title: "Password Manager",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "A la Bitwarden etc. Depends on appropriate securitty & security audit.",
//     priority: 3,
//     userstories: {},
//   },
//   {
//     title: "Payments System",
//     version: 0.0,
//     status: "0. New",
//     description:
//       "Allow customers to pay our clients' invoices, downpayments etc. through Orgmenta. Via stripe if possible (allow clients to configure Stripe integration and accept payments, add products/sync products from Orgmenta etc.",
//     priority: 3,
//     userstories: {},
//   },
// ];

/////////////////////////
// MAPPING (into entity-rels) FOR ENTRY INTO SUPABASE (DONE)

// import { useQuery } from "@tanstack/react-query";
// // import {doArrayUnion} from './array'
// import { createUuid4 } from "./uuid";
// import { instanceSupabaseClient } from "./supabase";
// import { data } from "./static";

// first, get the user roles ready.
// let Troles = user_roles.map((olditem)=>{ return{...olditem, id: createUuid4(), type: 'Contact', class:'Group', categories: ['product-catalog-solutions-usecases-userroles','project-response-stakeholders-stakeholderlist']}})
// console.log('Troles', Troles)

// then upsert them into the orgmenta entities table.
// async function uploadMultipleRowsToEntitiesOrgmenta(): Promise<void> {
//   console.log('uh oh! lucky i used upsert and that modern dbs are good at catching dupes, and that I have primary key enabled in the table!')
//   const { error } = await instanceSupabaseClient
//     .from("attributes")
//     .upsert({
//         "id": "38a15ab6-c1ad-47cf-803c-5446e2214601",
//         "status": "Active",
//         "a_name_singular": "has",
//         "a_name_plural": "has",
//         "a_display_singular": "Has",
//         "a_display_plural": "Has",
//         "b_name_singular": "has",
//         "b_name_plural": "has",
//         "b_display_singular": "Has",
//         "b_display_plural": "Has",
//         "a_cell_field": "relationship",
//         "a_filter_field": "relationship",
//         "b_cell_field": "relationship",
//         "b_filter_field": "input",
//         "a_table_sort": 10,
//         "b_table_sort": 10,
//         "a_filter_sort": 10,
//         "b_filter_sort": 10,
//         "a_form_field": "input",
//         "a_form_sort": 10,
//         "b_form_field": "relationship",
//         "b_form_sort": 10,
//         "a_templates": ["Entity"],
//         "b_templates": ["Entity"]
//       });
//   if (error) {
//     console.error("Error uploading data:", error);
//   }
// }
// uploadMultipleRowsToEntitiesOrgmenta(); // DO NOT UNCOMMENT THIS :)

// now we can use their uuids for relationships
// let Tfeatures = [];
// let Tusecases = [];
// let Trels = [];

// console.log(
//   "newUserRoles",
//   newUserRoles.find((x) => x.id === "548a799f-95e1-46cf-8a3c-61d452f6480f")
// );
// console.log('newUserRoles',newUserRoles.find(x=>x.title==="548a799f-95e1-46cf-8a3c-61d452f6480f"))
// then, we can get the features etc. in there.
// let featureTransforms = features.map((old) => {
//   // FEATURE
//   // First, remove some stuff we don't need (or need to change) from the object.
//   const { userstories, version, notes, ...rest } = old;
//   // Then, create an entity for the feature.
//   let feature = {
//     id: createUuid4(),
//     type: "Item",
//     class: "Feature",
//     categories: ["product-catalog-solutions-features"],
//     ...rest,
//     description: notes ? rest.description + " " + notes : rest.description,
//   };
//   Tfeatures.push(feature);
//   // console.log('userstories',userstories)
//   // we don't need to create a version yet, they are all on 0.0. So we move on.
//   // FEATURES DONE.
//   // now we can create the stories and the relationships.
//   // STORIES
//   // Then for each userstory role IF EXISTS
//   if (userstories && Object.keys(userstories).length > 0) {
//     // loop through each role
//     let roles = Object.keys(userstories).map((x, i) => {
//       // console.log( userstories[x])
//       userstories[x]?.map((z:any)=>{
//         const userstoryid = createUuid4()
//         let usecase = {
//           id: userstoryid,
//           type: "Item",
//           class: "Usecase",
//           categories: ["product-catalog-solutions-usecases"],
//           title: z,
//         };
//         Tusecases.push(usecase);
//         let relstorytofeature = {
//           id: createUuid4(),
//           e1: feature.id,
//           e2: userstoryid,
//           description: "Feature has User Story",
//           a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
//         };
//         Trels.push(relstorytofeature)
//         // console.log('x',x)
//         // console.log('userstories[i]',userstories[i])
//         let role = newUserRoles.find((y) => y.title === x);
//         // if no role, flag it!
//         if (!role) {
//           console.log("no role!", x);
//         } else {
//           // create a relationship to it
//           let relstorytostake = {
//             id: createUuid4(),
//             e1: userstoryid,
//             e2: role.id,
//             description: "Stakeholder Group has User Story",
//             a: "38a15ab6-c1ad-47cf-803c-5446e2214601",
//           };
//           Trels.push(relstorytostake)
//         }
//       })
//     });
//     // ensure the user role exists
//     // , create an entity (and a corresponding relationship)

//     // MAKE SURE YOU SAVE STATICALLY (OR ADD ALL AT ONCE), SO THAT YOU DONT LOSE THE CORRECT LINKED GENERATED IDS!
//   }
//   // old object
//   // const {userstories, ...rest} = old;
//   // userstories
//   // let userstories = { // PLURAL!
//   //   id: createUuid4(),
//   // }
//   // // rel
//   // let rel = {// PLURAL!
//   //   id: createUuid4(),
//   // }
//   // Trels.push(rel);
//   // Tfeatures.push(feature);
//   // Tusecases.push(usecase);
//   return;
// });
// console.log("Tfeatures", Tfeatures);
// console.log("Tusecases", Tusecases);
// console.log("Trels", Trels);

// let userstoryTransforms = features.map((feature) => {
//   const {id, userstories, ...rest} = feature;
//   return userstories;
// });
// userstoryTransforms = userstoryTransforms.filter(x=>(x !== undefined && Object.keys(x).length !== 0))
// console.log('featureTransforms',featureTransforms)

//////////////////////////////////
// NOTE TO SELF
// if i need to add any more detail to existing entities, I can:
// - check that the primary key in the table is the id (uuid)
// - get all of the items via a useQuery
// - map the data
// - upsert it back in (it will match to the id ).
// E.g., when i decide where in governance to put 'stakeholdertypes/groups management' (probably gov>exec>roles?)
// then i can get, map and upsert the stakeholder groups by mapping and doing 'categories = categories.concat(['thenewcategory'])

// async function uploadMultipleRowsToEntitiesOrgmenta(): Promise<void> {
//   console.log('uh oh! lucky i used upsert and that modern dbs are good at catching dupes, and that I have primary key enabled in the table!')
//   const { error } = await instanceSupabaseClient
//     .from("relationships_orgmenta")
//     .upsert(relsNew);
//   if (error) {
//     console.error("Error uploading data:", error);
//   }
// }
// uploadMultipleRowsToEntitiesOrgmenta(); // DO NOT UNCOMMENT THIS :)
