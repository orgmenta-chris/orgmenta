import { ViewCardExpandable } from "./card";
import { ViewModalMain } from "./modal";
import { ViewRouterLink } from "./router";
import { useThemeToken } from "./theme";
import { ViewTypographyTextheading } from "./typography";
import { useQuery } from "@tanstack/react-query";
import { Text, View, ScrollView } from "react-native";
import { ViewHeaderMain, ViewHeaderSection } from "./header";
import SpaceWidget from "../components/navigation/widgets/spaceWidget";
import UserWidget from "../components/navigation/widgets/userWidget";
import BrowseWidget from "../components/navigation/widgets/browseWidget";
import OrgmentaWidget from "../components/navigation/widgets/orgmentaWidget";
import BookmarkWidget from "../components/navigation/widgets/bookmarkWidget";

// Full Header component
export const ViewOrgmentaHeader = () => {
  return (
    <ViewHeaderMain>
      <ViewHeaderSection flex={1}>
        <SpaceWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <BookmarkWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1.5}>
        <OrgmentaWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <BrowseWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <UserWidget />
      </ViewHeaderSection>
    </ViewHeaderMain>
  );
};

// Active

// This is a useQuery query that just returns a blank object (it doesn't query anything).
// Then the user can switch active bookmarks, which will update this query.
export const useOrgmentaActive = ({ ...Input }: TypeOrgmentaActive) => {
  const query = useQuery({
    queryKey: ["bookmark", "active"],
    queryFn: () => {
      return {};
    },
    enabled: false,
    initialData: {
      id: null,
      title: "Bookmarks",
    },
  });
  return query;
};

export type TypeOrgmentaActive = any; // placeholder

// Modal

export const ViewOrgmentaModal = (props: any) => {
  // Modal for the header of Orgmenta site
  return (
    <ViewModalMain modalName={"orgmenta"} backdrop height={200} width={"100%"}>
      <View style={{ flexDirection: "row" }}>
        {/* App Links Column */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            App
          </Text>
          {/* These links might be best merged into larger scope pages (with a contents menu/anchors) if it gets too cluttered here */}
          <ViewRouterLink
            to={"app/pricing"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Pricing
          </ViewRouterLink>
          <ViewRouterLink
            to={"app/product"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Product{/*Features */}
          </ViewRouterLink>
          <ViewRouterLink
            to={"app/roadmap"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Roadmap{/* App roadmap of future features */}
          </ViewRouterLink>
          <ViewRouterLink
            to={"app/compare"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Compare{/* Compare to Competitors */}
          </ViewRouterLink>
          <ViewRouterLink
            to={"app/industries"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Industries{/* Use cases per industry */}
          </ViewRouterLink>
          <ViewRouterLink
            to={"app/frameworks"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Methodologies
            {/* Standards, Libraries, Frameworks and methodologies */}
          </ViewRouterLink>
        </View>
        {/* App Links Column */}
        <View style={{ flex: 1, alignItems: "center" }}>
          {/* These links might be best merged into larger scope pages (with a contents menu/anchors) if it gets too cluttered here */}
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            Company
          </Text>
          <ViewRouterLink
            to={"company/about"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            About
          </ViewRouterLink>
          <ViewRouterLink
            to={"company/privacy"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Privacy
          </ViewRouterLink>
          <ViewRouterLink
            to={"company/terms"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Terms
          </ViewRouterLink>
          <ViewRouterLink
            to={"company/contact"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Contact
          </ViewRouterLink>
          <ViewRouterLink
            to={"company/socials"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Socials
          </ViewRouterLink>
          <ViewRouterLink
            to={"/"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Home</Text>
          </ViewRouterLink>
        </View>
        {/* App Links Column */}
        <View style={{ flex: 1, alignItems: "center" }}>
          {/* These links might be best merged into larger scope pages (with a contents menu/anchors) if it gets too cluttered here */}
          <Text
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            Community
          </Text>
          <ViewRouterLink
            to={"community/news"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            News
          </ViewRouterLink>
          <ViewRouterLink
            to={"community/forums"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Forums
          </ViewRouterLink>
          <ViewRouterLink
            to={"community/guides"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Guides
          </ViewRouterLink>
          <ViewRouterLink
            to={"community/whitepapers"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Whitepapers
          </ViewRouterLink>
          <ViewRouterLink
            to={"community/enhancements"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Enhancements{/* Enhancement Requests */}
          </ViewRouterLink>
          <ViewRouterLink
            to={"community/partners"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Partners{/* Partner with us */}
          </ViewRouterLink>
        </View>
      </View>
    </ViewModalMain>
  );
};

// App Pages

export const ViewOrgmentaPricing = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Pricing</ViewTypographyTextheading>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
      <Text>ViewOrgmentaPricing placeholder</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaRoadmap = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Roadmap</ViewTypographyTextheading>
      <ViewCardExpandable />
      <Text>
        {`
                Roadmap timeline (Title, summary + priorities, dates etc.) here
                (Info comes from Orgmenta's space > System/Governance? > Offerings > Roadmap
                `}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaCompare = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Compare</ViewTypographyTextheading>
      <Text>
        {`Compare to other products
                ServiceNow
                ConnectWise Manage/PSA
                Autotask
                SAP
                Salesforce
                Halo PSA
                Ninja RMM / NinjaOne
                FreshWorks / FreshDesk / FreshService
                Jira Service Management
                Synchro MSP
                RepairShoppr
                Ivanti Service Manager
                ManageEngine ServiceDesk Plus
                SysAid
                Cherwell ITSM
                BMC Remedy ITSM
                Odoo
                Thread (https://www.getthread.com/)
                Microsoft Dynamics
                `}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaIndustries = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Industries</ViewTypographyTextheading>
      <Text>
        {`Use case by industry (just show entities from Orgmenta>Product>Catalog>Offerings>UseCases)`}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaFrameworks = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Methodologies</ViewTypographyTextheading>
      <Text>
        {`
            Standards, Libraries, Frameworks and Methodologies (how to use Orgmenta with these libraries goes here)
            ITIL
            PRINCE2
            PMBOK
            ISO:9001
            Lean
            Six Sigma
            Kanban
            Agile, agile, Scrum & SAFe
            Waterfall
            `}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaProduct = ({}: any) => {
  const theme = useThemeToken("orgmentaproduct");
  return (
    <ScrollView>
      <ViewTypographyTextheading>Product</ViewTypographyTextheading>
      <Text style={theme}>
        {`//////////////////////
                FEATURES (AND USE CASES)
                
                (this static data will be replaced with data from Orgmenta's space > product > catalog)
                
                --- HIGH PRIORITY ----
                
                Email (and other media) Connectors
                As a dispatcher, I want client enquiries to automatically create a ticket or update a relevant existing ticket.
                As a client, I want to be able to submit tickets through multiple channels (email, chat, phone) efficiently and minimise the time for it to be triaged, assigned and resolved.
                
                Ticket Management
                As an administrator, I want to automatically categorize incoming tickets based on keywords, so they can be triaged effectively.
                As a technician, I want to view all my tickets on a single dashboard, so I can prioritize them based on SLA.
                As a client, I want to be able to submit tickets through multiple channels (email, chat, phone), so that I can reach support through my preferred method.
                
                Asset (/Configuration) Management
                As an administrator, I want to perform automatic scans on client networks to populate asset data. (low priority, RMMs cover this)
                As a technician, I want to link assets to tickets to better understand the scope of issues.
                As a manager, I want to see a utilization report for all managed assets, to understand overall performance.
                
                Billing & Invoicing
                As an administrator, I want to automate the conversion of billable hours into invoices.
                As a client, I want a breakdown of charges in my invoices for transparency.
                As a financial controller, I want to integrate the PSA with accounting software for efficient reconciliation.
                
                Reporting & Analytics
                As a manager, I want to view KPI dashboards to make data-driven decisions.
                As a technician, I want insights into common ticket issues for a given period, to improve service.
                As an executive, I want revenue and expense reports to gauge profitability.
                
                Workflow Automation
                As an administrator, I want to define workflows for common service requests.
                As a technician, I want repetitive tasks to be automated to save time.
                As a manager, I want workflow analytics to identify bottlenecks.
                
                Time Tracking
                As a technician, I want to record time spent on each ticket.
                As a manager, I want an overview of time entries for quality assurance.
                As a client, I want to view the time logged against my projects for accountability.
                
                Knowledge Base
                As a technician, I want to refer to the internal knowledge base for resolution steps.
                As a client, I want access to a public-facing FAQ for common issues.
                As a manager, I want the knowledge base to be automatically updated with new resolutions.
                
                User Management & Roles
                As an administrator, I want to define user roles and permissions based on job function.
                As a technician, I want role-specific access to modules and data.
                As a client, I want different levels of access based on my agreement with the MSP.
                
                Client Management
                As a sales executive, I want to track leads and convert them into clients within the PSA.
                As a manager, I want to associate specific technicians with certain clients for consistent service.
                As a client, I want a dedicated account manager I can reach out to for non-technical issues.
                
                Service Level Agreements (SLA)
                As a manager, I want to define SLA rules and ensure compliance.
                As a technician, I want notifications for approaching SLA deadlines.
                As a client, I want a report on SLA compliance for the services rendered.
                
                Compliance & Security
                As an administrator, I want robust security features like 2FA and data encryption.
                As a manager, I want compliance reports to adhere to standards such as GDPR, HIPAA, etc.
                As a client, I want assurance that my data is being handled securely.
                
                Multi-Tenancy and Account Segmentation
                As an administrator, I want to manage multiple tenant environments within a single PSA instance.
                As a manager, I want to segment client accounts based on specific criteria (industry, size, location).
                
                Notifications and Alerts
                As a technician, I want real-time notifications for ticket updates or comments.
                As a manager, I want to set up customized alerts for specific events, like SLA violations or system outages.
                
                Calendar and Scheduling
                As a technician, I want to synchronize my PSA calendar with external calendars (Google Calendar, Outlook).
                As a manager, I want to view all technicians' availability in one centralized calendar.
                
                Contract Management
                As a sales executive, I want to manage and renew client contracts within the PSA.
                As a manager, I want to set automated reminders for upcoming contract renewals.
                
                API and Integrations
                As an administrator, I want a well-documented API to integrate third-party solutions.
                As a manager, I want to integrate with existing CRM, ERP, and other systems to centralize data.
                
                Mobile Accessibility
                As a technician, I want a mobile-friendly interface or app to update tickets while in the field.
                As a client, I want to access ticket status and updates via a mobile application.
                
                Customer Satisfaction Surveys
                As a manager, I want to automatically send CSAT surveys upon ticket resolution.
                As an executive, I want to see customer satisfaction metrics in my KPI dashboard.
                
                Internal Communication
                As a technician, I want an internal chat function to collaborate with team members.
                As a manager, I want a communication log to track internal discussions related to tickets.
                
                Business Continuity and Disaster Recovery
                As an administrator, I want built-in backup and recovery options.
                As a manager, I want a contingency plan feature that documents the steps to take in case of system failure.
                
                Resource Allocation and Capacity Planning
                As a manager, I want to allocate resources based on skill sets and availability.
                As an executive, I want to plan for capacity based on trends in ticket volume and resource utilization.
                
                Change Management
                As a technician, I want to log changes made during the resolution process.
                As a manager, I want to approve major changes before they are implemented.
                
                Audit Trail
                As an administrator, I need to see all changes and edits made in the system. 
                As an employee, I want to be able to see a timeline of what I and my colleagues have done.
                
                
                
                --- MEDIUM PRIORITY ----
                
                Natural Language Notes with Links
                As a user, I want to be able to write notes/descriptions in the entities, and include references/relationships (to other entities, with their attribute/relationship type) in them.
                (e.g. in an entity called 'invoice123' I want to be able to write "See #Contact456 as the ^PrimaryContact" and it automatically link Contact456 as the Primary Contact if not already done)
                
                Inventory Management
                As a procurement manager, I want real-time inventory tracking within the PSA for hardware and software assets.
                
                Client Portal
                As a client, I want to log into my MSPs portal and see all open tickets, discussions, configurations, proposals etc.
                
                Rosters, availability, On call and Time-Off Management
                As an HR manager, I want to manage leaves, holidays, and time-off within the same PSA system where work is being tracked.
                As an employee, I want to request time off in the easiest way possible.
                As a dispatcher, I want to see employee availability on a single pane of glass.
                
                Sales Proposals and Quoting
                As a sales executive, I want to create, send, and track sales proposals within the PSA system to streamline the sales process.
                As a manager, I want to maintain a repository of proposal templates for different services and contract types.
                As an administrator, I want to integrate proposal software with the PSA to ensure that pricing and asset lists are up-to-date.
                As a client, I want to view, comment on, and e-sign proposals through a client portal.
                
                Globalization and Localization
                As an executive, I want multi-language and multi-currency support for international operations.
                As a manager, I want to set region-specific settings, like date formats and compliance standards.
                
                Training and Documentation
                As an administrator, I want robust documentation and training modules within the PSA.
                As a manager, I want to assign and track training courses for new hires.
                
                Vendor Management
                As a manager, I want to track vendor performance metrics.
                As an administrator, I want to record contracts and terms with vendors.
                As a financial controller, I want to manage payments and renewals with vendors.
                As a procurement manager, I want to track and manage all vendor interactions, including quotations, lead times, and service quality, within the PSA system.
                
                Training & Development
                As a technician, I want to manage my skills & certifications
                As a manager, I want to view the expertise at my disposal.
                As a dispatcher, I want to filter expertise and assign an engineer with the skills commensurate to the project/service required.
                
                Business Intelligence and Advanced Analytics
                As an executive, I want predictive analytics capabilities to forecast resource needs, revenue, and other key metrics.
                As an employee, I want to easily spin up charts/reports/dashboards (with the data available and related to me)
                
                Backups
                As an MSP, we want to be able to back up and restore the entire PSA system to a specific timestamp.
                As an MSP, we want to be able to roll back granular changes to entities/relationships.
                
                Email Design
                As an MSP, I want to be able to design email templates from within the PSA. (see https://news.ycombinator.com/item?id=37596253 loops and similar)
                
                Shared Inbox
                As an MSP, we want 'One space for email, marketing, and customer relationships' (e.g. https://helpmonks.com/) and for employees to be able to view shared folders/inboxes
                
                
                --- LOW PRIORITY ----
                
                White-Labeling and Customization
                As a manager, I want the ability to white-label the PSA tool to maintain brand consistency. This includes custom domain / dns records to have the psa available under our corporate domain.
                As an administrator, I want extensive UI/UX customization capabilities to match our specific workflow needs.
                
                E-Signature and Document Management
                As a sales executive, I want to send, receive, and store e-signed contracts within the PSA.
                As a manager, I want to manage all client-related documents in one centralized repository.
                
                Social Media Integration
                As a customer service representative, I want to manage customer inquiries from social media channels within the PSA.
                As a manager, I want social media analytics in my reporting dashboard.
                As a marketing manager, I want to manage campaigns and promotions within the PSA.
                
                Gamification
                As a manager, I want to incorporate gamification elements to motivate and engage technicians.
                As a technician, I want [THE OPTION] to earn rewards or recognition for achieving performance milestones [THAT IS NON-MANDATORY AND DOES NOT AFFECT PERFORMANCE ASSESSMENTS]. <-- CONTENTIOUS.
                (Or just make it a pleasant app to use.)
                
                Payment Processing
                As an administrator, I want to integrate payment gateways for direct billing through the PSA.
                As a client, I want to pay invoices within the PSA portal itself for convenience.
                
                Real-time Collaboration
                As a technician, I want to collaborate in real-time with team members on complex issues.
                As a manager, I want a live feed of ticket status updates for dynamic resource allocation.
                
                Compliance and Auditing
                As an administrator, I want features that help in compliance management, like GDPR or HIPAA, including automated reporting and audit trails.
                As an internal auditor, I want to provide evidence to myself and external auditors that standards are being upheld.
                
                VoIP Integration
                As a customer service representative, I want the PSA to integrate with VoIP systems so that client communication can be logged and tracked within tickets.
                As an employee, I want everything integrated into a single pane of glass (but only if it does not compromise on features or UX)
                
                Internal Tool Creation
                As a member of the dev team, I want to empower employees to transform and display data themselves.
                As an employee, I want to be able to spin up a quick internal app (a la Retool) rather than spending months with the IT department /dev team
                
                Status Page
                As a member of a client's IT support team, I want to be able to see the status of all their services in a single pane.
                As a client, I want to be able to see the status of all our services in a single pane.
                (like statuspage or updown.io)
                
                ViewRouterLink Page
                As an employee or business, I want to have a collated contact page or landing page.
                (like link tree or leaf page)
                
                Corporate Website
                As an MSP, we want to be able to single-click publish our corporate website and not worry about hosting, domains or pricing.
                As an MSP, we want to be able to make entities 'published' and public facing, and automatically go onto the correct page of our website (e.g. news, roadmap)
                
                ViewRouterLink shortener
                As an MSP, we want a bespoke url shortener that we and our clients can use.
                
                //////////////////////
                NEEDS/REQUIREMENTS
                
                --- HIGH PRIORITY ----
                
                - Never lose information. Time entries shouldn't lose or jumble text. As an employee I want to feel secure in typing directly into the app, such that if I lost internet or accidentally closed it, it would still be there upon return.
                - No popups or other forced overlays/components that prevent my usual flow. No cluttered interfaces with information that I don't need.
                - A quick application that loads within 3 seconds, and each page in under a second.
                - Feedback on changes - If I make a change, I want to see that change immediately with its status (indicators/spinners, loading messages etc.)
                - An intuitive interface where buttons and other components are where I expect them to be, and not bounce around on the screen.
                - Simple transparent billing with no unexpected charges
                - An available account manager and support system that is responsive and valuable.
                - Simple licensing - by adding a user, automatically add a license. 
                - No bargaining with account managers or sales. No unrequested sales calls. no spam messages.
                - No theft of my clients by my PSA company.
                - No multi-year lock in, tricksy contracts, unethical fine print, unanncounced contract renewals.
                - I want to believe in my PSA company, and not feel weird about their behavior or ethics.
                - No chance of the PSA company being compromised or selling out to VCs that have 'pump n dump' priorities. <-- Add canaries to promises/features/roadmaps, to burn chances of this happening without compromising investment possibilities?
                
                
                --- MEDIUM PRIORITY ----
                
                - Get advice - 'what do other MSPs do?". PSA companies are in a good position for a high level view of the industry.
                
                --- LOW PRIORITY ----
                
                ////////////////
                PARADIGMS
                The following are paradigms that the app is using. These are eposed to the client side to some extent. 
                If trials indicate that this does not work for the UX, then these paradigms can be made backend only (i.e. not expose the user to them as necessary).
                - Data structure: Node-Edge, 2-table paradigm instead of statically defined tables 
                - Displays: Data displays that the user can toggle between at will (to be restricted as necessary if users say they have 'TOO MUCH choice'/causes confusion)
                - Category/Modules/Business Framework
                - Dynamic attributes
                - TechStack - react native stack 
                - 'ViewRouterLink anything to anything' (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)
                - Custom attributes/properties on entities (if this freedom results in too much confusion, then we need to reassess and hide it somewhat / last resort remove the ability entirely)
                `}
      </Text>
    </ScrollView>
  );
};

// Company Pages

export const ViewOrgmentaAbout = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>About</ViewTypographyTextheading>
      <Text>{`Company information goes here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaPrivacy = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Privacy</ViewTypographyTextheading>
      <Text>{`Privacy policy goes here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaTerms = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Terms</ViewTypographyTextheading>
      <Text>{`Terms & Conditions go here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaSocials = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Socials</ViewTypographyTextheading>
      <Text>
        {`
                LINKS
                Social media related here.

                FEED
                Feed of social media posts here 
                `}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaContact = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Contact</ViewTypographyTextheading>
      <Text>
        {`Contact Us
                Contact form goes here`}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaPartner = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Partners</ViewTypographyTextheading>
      <Text>
        {`
                Partner With Us
                Contact form goes here

                Our Partners
                List of partners goes here
                `}
      </Text>
    </ScrollView>
  );
};

// Community Pages

export const ViewOrgmentaNews = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>News</ViewTypographyTextheading>
      <Text>
        {`
                NEWS
                `}
      </Text>
    </ScrollView>
  );
};

export const ViewOrgmentaForums = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Forums</ViewTypographyTextheading>
      <Text>{`Community forums / discussion boards go here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaGuides = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Guides</ViewTypographyTextheading>
      <Text>{`Guides, tutorials, instructions, how-tos etc. go here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaWhitepapers = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>White Papers</ViewTypographyTextheading>
      <Text>{`White papers, justifications etc. go here`}</Text>
    </ScrollView>
  );
};

export const ViewOrgmentaEnhancements = ({}: any) => {
  return (
    <ScrollView>
      <ViewTypographyTextheading>Enhancements</ViewTypographyTextheading>
      <Text>
        {`
                Request a feature or other enhancement
                Enhacement request form goes here

                Enhancement Requests
                Enhacement request list goes here, showing status (whether reviewed, addded to roadmap etc.)
                `}
      </Text>
    </ScrollView>
  );
};
