// This file may be split out into separate modules:
// Orgmentacompany, Orgmentaproduct, Orgmentacommunity.

import { ViewCardExpandable } from "./card";
import { ViewModalMain } from "./modal";
import { ViewRouterLink } from "./router";
import { useThemeToken } from "./theme";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";
import { useQuery } from "@tanstack/react-query";
import { Text, View, ScrollView, ImageBackground } from "react-native";
import { ViewHeaderMain, ViewHeaderSection } from "./header";
import { ViewPageMain } from "../utils/page";
import SpaceWidget from "../components/navigation/widgets/spaceWidget";
import UserWidget from "../components/navigation/widgets/userWidget";
import BrowseWidget from "../components/navigation/widgets/browseWidget";
import OrgmentaWidget from "../components/navigation/widgets/orgmentaWidget";
import BookmarkWidget from "../components/navigation/widgets/bookmarkWidget";
import {
  features,
  requirements,
  needs,
  pricingTemp,
  articlesTemp,
  procedures,
  devworkflow,
  paradigms,
  checklist,
  competitorFeatures,
  arrayCompetitors,
} from "./roadmap";
import { ViewInquiryMain } from "../utils/inquiry";

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
            to={"app/features"}
            style={{
              justifyContent: "center",
              textDecoration: "none",
              color: "black",
              padding: 3,
            }}
          >
            Features
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
            to={"community/partner"}
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
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Pricing</ViewTypographyHeading>
        <Text>ViewOrgmentaPricing placeholder</Text>
        <Text>{JSON.stringify(pricingTemp, null, 2)}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaRoadmap = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Roadmap</ViewTypographyHeading>
        <Text>
          {`Roadmap timeline (Title, summary + priorities, dates etc.) here.\n(Info comes from Orgmenta's space > System/Governance? > Offerings > Roadmap\n\n`}
          {JSON.stringify(
            [
              { features },
              { requirements },
              { procedures },
              { paradigms },
              { checklist },
            ],
            null,
            2
          )}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaCompare = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Compare</ViewTypographyHeading>
        <Text>
          {`(Temp):\n\n`}
          {`\n\nCompetitors:\n\n`}
          {JSON.stringify(arrayCompetitors, null, 2)}
          {`\n\nFeature Comparison:\n\n`}
          {JSON.stringify(competitorFeatures, null, 2)}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaIndustries = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Industries</ViewTypographyHeading>
        <Text>
          {`Use case by industry (just show entities from Orgmenta>Product>Catalog>Offerings>UseCases)`}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaFrameworks = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Methodologies</ViewTypographyHeading>
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
    </ViewPageMain>
  );
};

export const ViewOrgmentaFeatures = ({}: any) => {
  // const theme = useThemeToken("orgmentaproduct"); // CG todo
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Features</ViewTypographyHeading>
        <ViewTypographySubheading>P1</ViewTypographySubheading>
        {features
          .filter((x) => x.priority === 1)
          .map((x, i) => (
            <ViewTypographyText
              key={"p1-" + i}
              style={{ width: "100%", flex: 1 }}
            >
              {x.title}
            </ViewTypographyText>
          ))}
        <ViewTypographySubheading>P2</ViewTypographySubheading>
        {features
          .filter((x) => x.priority === 2)
          .map((x, i) => (
            <ViewTypographyText
              key={"p2-" + i}
              style={{ width: "100%", flex: 1 }}
            >
              {x.title}
            </ViewTypographyText>
          ))}
        <ViewTypographySubheading>P3</ViewTypographySubheading>
        {features
          .filter((x) => x.priority === 3)
          .map((x, i) => (
            <ViewTypographyText
              key={"p3-" + i}
              style={{ width: "100%", flex: 1 }}
            >
              {x.title}
            </ViewTypographyText>
          ))}
        <ViewTypographySubheading>P4+</ViewTypographySubheading>
        {features
          .filter((x) => x.priority > 3)
          .map((x, i) => (
            <ViewTypographyText
              key={"p4-" + i}
              style={{ width: "100%", flex: 1 }}
            >
              {x.title}
            </ViewTypographyText>
          ))}
      </ScrollView>
    </ViewPageMain>
  );
};

// Company Pages

export const ViewOrgmentaAbout = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>About</ViewTypographyHeading>
        <Text>{`Company information goes here`}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaPrivacy = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Privacy</ViewTypographyHeading>
        <Text>{`Privacy policy goes here`}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaTerms = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Terms</ViewTypographyHeading>
        <Text>{`Terms & Conditions go here`}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaSocials = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Socials</ViewTypographyHeading>
        <Text>
          {`
          LINKS
          Social media related here.

          FEED
          Feed of social media posts here 
          `}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaContact = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Contact</ViewTypographyHeading>
        <ViewTypographySubheading>Contact Us:</ViewTypographySubheading>
        <ViewInquiryMain />
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaPartner = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Partners</ViewTypographyHeading>
        <ViewTypographySubheading>
          Partner With Us:
        </ViewTypographySubheading>
        <ViewInquiryMain />
        <ViewTypographySubheading>
          Our Partners:
        </ViewTypographySubheading>
        <Text>List of partners goes here</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

// Community Pages

export const ViewOrgmentaNews = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>News</ViewTypographyHeading>
        <Text>
          {`
                    NEWS
                    `}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaForums = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Forums</ViewTypographyHeading>
        <Text>{`Community forums / discussion boards go here`}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaGuides = ({}: any) => {
  // rename this to 'articles' and have a 'guides' tag/type of article instead?
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Guides</ViewTypographyHeading>
        <Text>{`Guides, tutorials, instructions, how-tos etc. go here`}</Text>
        <Text>{JSON.stringify(articlesTemp, null, 2)}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaWhitepapers = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>White Papers</ViewTypographyHeading>
        <Text>{`White papers, justifications etc. go here`}</Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaEnhancements = ({}: any) => {
  return (
    <ViewPageMain>
      <ScrollView>
        <ViewTypographyHeading>Enhancements</ViewTypographyHeading>
        <Text>
          {`
          Request a feature or other enhancement
          Enhacement request form goes here

          Enhancement Requests
          Enhacement request list goes here, showing status (whether reviewed, addded to roadmap etc.)
          `}
        </Text>
      </ScrollView>
    </ViewPageMain>
  );
};

export const ViewOrgmentaBackground = ({ children }: any) => {
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../assets/backgroundCompressed.jpg")}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};
