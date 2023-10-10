// Module for the Orgmenta website.
// This file may be split out into separate modules: Orgmentacompany, Orgmentaproduct, Orgmentacommunity.

import { useReactEffect, useReactState } from "./react";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";
import { ViewPageMain } from "./page";
import { ViewModalContainer } from "./modal";
import { ViewRouterLink, ViewRouterLinkthemed } from "./router";
import { ViewHeaderMain, ViewHeaderSection } from "./header";
import { ViewSpaceWidget } from "./space";
import { ViewUserWidget } from "./user";
import { ViewImageMain, ViewImageBackground } from "./image";
import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewBrowseWidget } from "./browse";
import { ViewBookmarkWidget } from "./bookmark";
import { ViewButtonPressable } from "./button";
import { ViewInquiryMain } from "./inquiry";
import { ViewSvgMain, ViewSvgPath, ViewSvgGroup } from "./svg";
import { mapTypeMain } from "./type";
import { useModalVisibility } from "./modal";
import { useWindowDimensions } from "./window";
import { useThemeToken } from "./theme";
import { articlesTemp } from "../articles/_general";
import {
  features,
  requirements,
  pricingTemp,
  procedures,
  paradigms,
  checklist,
  arrayIndustryProducts,
  competitorFeatures,
  arrayCompetitors,
  needs,
  devworkflow,
} from "./roadmap";
// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.
import { UseNewStripeWrapperFunctions } from "./stripe";

// HEADER

// Full Header component
export const ViewOrgmentaHeader = () => {
  return (
    <ViewHeaderMain>
      <ViewHeaderSection flex={1}>
        <ViewSpaceWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <ViewBookmarkWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1.5}>
        <ViewOrgmentaWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <ViewBrowseWidget />
      </ViewHeaderSection>
      <ViewHeaderSection flex={1}>
        <ViewUserWidget />
      </ViewHeaderSection>
    </ViewHeaderMain>
  );
};

// MODAL

export const ViewOrgmentaModal = (props: any) => {
  // Modal for the header of Orgmenta site
  return (
    <ViewModalContainer
      modalName={"orgmenta"}
      backdrop
      height={200}
      width={"100%"}
    >
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        {/* App Links Column */}
        <ViewContainerStatic style={{ flex: 1, alignItems: "center" }}>
          <ViewTypographyText
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            App
          </ViewTypographyText>
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
        </ViewContainerStatic>
        {/* App Links Column */}
        <ViewContainerStatic style={{ flex: 1, alignItems: "center" }}>
          {/* These links might be best merged into larger scope pages (with a contents menu/anchors) if it gets too cluttered here */}
          <ViewTypographyText
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            Company
          </ViewTypographyText>
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
            <ViewTypographyText style={{ fontWeight: "bold" }}>
              Home
            </ViewTypographyText>
          </ViewRouterLink>
        </ViewContainerStatic>
        {/* App Links Column */}
        <ViewContainerStatic style={{ flex: 1, alignItems: "center" }}>
          {/* These links might be best merged into larger scope pages (with a contents menu/anchors) if it gets too cluttered here */}
          <ViewTypographyText
            style={{
              fontWeight: "800",
              fontSize: 18,
              color: "#0c4a73",
              padding: 5,
            }}
          >
            Community
          </ViewTypographyText>
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
        </ViewContainerStatic>
      </ViewContainerStatic>
    </ViewModalContainer>
  );
};

// APP PAGES

export const ViewOrgmentaPricing = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Pricing</ViewTypographyHeading>
        <ViewTypographyText>ViewOrgmentaPricing placeholder</ViewTypographyText>
        <ViewTypographyText>
          {JSON.stringify(pricingTemp, null, 2)}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaRoadmap = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Roadmap</ViewTypographyHeading>
        <ViewTypographyText>
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
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaCompare = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Compare</ViewTypographyHeading>
        <ViewTypographyText>
          {`(Temp):\n\n`}
          {`\n\nCompetitors:\n\n`}
          {JSON.stringify(arrayCompetitors, null, 2)}
          {`\n\nFeature Comparison:\n\n`}
          {JSON.stringify(competitorFeatures, null, 2)}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaIndustries = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Industries</ViewTypographyHeading>
        <ViewTypographyText>
          {`Use case by industry (just show entities from Orgmenta>Product>Catalog>Offerings>UseCases)`}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaFrameworks = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Methodologies</ViewTypographyHeading>
        <ViewTypographyText>
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
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaFeatures = ({}: any) => {
  // const theme = useThemeToken("orgmentaproduct"); // CG todo
  return (
    <ViewPageMain>
      <ViewContainerScroll>
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
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

// COMPANY PAGES

export const ViewOrgmentaAbout = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>About</ViewTypographyHeading>
        <ViewTypographyText>{`Company information goes here`}</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaPrivacy = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Privacy</ViewTypographyHeading>
        <ViewTypographyText>{`Privacy policy goes here`}</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaTerms = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Terms</ViewTypographyHeading>
        <ViewTypographyText>{`Terms & Conditions go here`}</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaSocials = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Socials</ViewTypographyHeading>
        <ViewTypographyText>
          {`
          LINKS
          Social media related here.

          FEED
          Feed of social media posts here 
          `}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaContact = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Contact</ViewTypographyHeading>
        <ViewTypographySubheading>Contact Us:</ViewTypographySubheading>
        <ViewInquiryMain />
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaPartner = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Partners</ViewTypographyHeading>
        <ViewTypographySubheading>Partner With Us:</ViewTypographySubheading>
        <ViewInquiryMain />
        <ViewTypographySubheading>Our Partners:</ViewTypographySubheading>
        <ViewTypographyText>List of partners goes here</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaHome = ({}: any) => {
  const windowDimensions = useWindowDimensions();
  // temp switcher
  const CompanytypeSwitcher: React.FC = () => {
    const [index, setIndex] = useReactState(0);
    const texts = ["IT Company", "MSP", "MSSP", "VAR", "TSP", "OED"];
    useReactEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex: any) => (prevIndex + 1) % texts.length);
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    return <ViewTypographyText>{texts[index]}</ViewTypographyText>;
  };
  return (
    <ViewOrgmentaBackground>
      <ViewContainerStatic
        style={{
          margin: 90,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 5,
          position: "absolute",
          aspectRatio: 13 / 2,
          width: windowDimensions.width / 2 + 40,
          padding: 10,
          height: 250,
          alignSelf: "center",
          justifyContent: "center",
          top: windowDimensions.height / 2 - 220,
        }}
      >
        <ViewImageMain
          style={{
            resizeMode: "contain",
            width: "100%",
            height: 80,
          }}
          source={require("../assets/logo/full/color_cropped.png")}
        />
        <ViewTypographyText style={{ textAlign: "center", fontSize: 20 }}>
          The BOS (Business Operating System) / ERP (Enterprise Resource
          Planning) / PSA (Professional Services Automation) / BMS (Business
          Management System)
        </ViewTypographyText>
        <ViewTypographyText
          style={{
            textAlign: "center",
            fontSize: 13,
            paddingTop: 10,
            fontStyle: "italic",
          }}
        >
          {`Build, automate and manage your \n`}
          <ViewTypographyText style={{ fontWeight: "500", color: "#0c4a73" }}>
            <CompanytypeSwitcher />
          </ViewTypographyText>
          {`\nfrom a single pane of glass`}
        </ViewTypographyText>
      </ViewContainerStatic>
      <ViewContainerScroll
        style={{
          padding: 10,
          flexDirection: "column",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <ViewContainerStatic
          key={"test"}
          style={{
            height: windowDimensions.height - 80,
            backgroundColor: "green",
          }}
        ></ViewContainerStatic> */}

        <ViewContainerStatic key={"product_overview"}>
          <ViewContainerStatic
            key={"product_toprow"}
            style={{ top: -5, flexDirection: "row" }}
          >
            <ViewContainerStatic
              key={"orgmenta"}
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewSvgMain
                key={"orgmenta_arrow"}
                width="100"
                height="100"
                style={{ alignSelf: "center" }}
                viewBox="0 0 100 100"
              >
                <ViewSvgPath
                  d="M50,50 L50,10"
                  stroke="#22b2e4"
                  strokeWidth="5"
                  fill="none"
                />
                <ViewSvgPath
                  d="M50,10 L40,30 L50,10 L60,30 L50,10"
                  stroke="#22b2e4"
                  strokeWidth="5"
                  fill="#22b2e4"
                />
              </ViewSvgMain>
              <ViewTypographyText
                style={{
                  top: -45,
                  minHeight: 70,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 175,
                  left: 0,
                  flex: 1,
                  fontSize: 14,
                }}
              >
                {`Explore the App,\nCompany and Community\nwith `}
                <ViewTypographyText
                  style={{
                    fontWeight: "800",
                    color: "#0c4a73",
                  }}
                >
                  Site
                </ViewTypographyText>
              </ViewTypographyText>
            </ViewContainerStatic>
          </ViewContainerStatic>

          <ViewContainerStatic
            key={"product_secondrow"}
            style={{
              flexDirection: "row",
              width: "100%",
              top: -165,
            }}
          >
            <ViewContainerStatic
              key={"bookmark"}
              style={{
                left: "5%",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewSvgMain
                key={"bookmark_arrow"}
                style={{ left: -30 }}
                width="100"
                height="150"
                viewBox="0 0 100 400"
              >
                <ViewSvgPath
                  d="M80,360 C35,260 35,140 58,15"
                  stroke="#22b2e4"
                  strokeWidth="15"
                  fill="none"
                />
                {/* Extended Curved Arrow line */}
                <ViewSvgGroup transform="rotate(20 50 40)">
                  <ViewSvgPath
                    d="M50,10 L40,30 L50,10 L60,30 L50,10"
                    stroke="#22b2e4"
                    strokeWidth="15"
                    fill="#22b2e4"
                  />
                </ViewSvgGroup>
                {/* Rotated Arrowhead */}
              </ViewSvgMain>
              <ViewTypographyText
                style={{
                  top: -15,
                  minHeight: 70,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 150,
                  left: 0,
                  flex: 1,
                  fontSize: 14,
                }}
              >
                {`Navigate to your\nbusiness modules \nwith `}
                <ViewTypographyText
                  style={{
                    fontWeight: "800",
                    color: "#0c4a73",
                  }}
                >
                  Bookmarks
                </ViewTypographyText>
              </ViewTypographyText>
            </ViewContainerStatic>
            <ViewContainerStatic
              key={"browse"}
              style={{
                right: "5%",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewSvgMain
                key={"browse_arrow"}
                style={{ right: -30 }}
                width="100"
                height="150"
                viewBox="0 0 100 400"
              >
                <ViewSvgPath
                  d="M20,360 C65,260 65,140 42,15"
                  stroke="#22b2e4"
                  strokeWidth="15"
                  fill="none"
                />
                <ViewSvgGroup transform="scale(-1, 1) translate(-100, 0) rotate(20 50 40)">
                  <ViewSvgPath
                    d="M50,10 L40,30 L50,10 L60,30 L50,10"
                    stroke="#22b2e4"
                    strokeWidth="15"
                    fill="#22b2e4"
                  />
                </ViewSvgGroup>
              </ViewSvgMain>
              <ViewTypographyText
                style={{
                  top: -15,
                  minHeight: 70,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 150,
                  left: 0,
                  flex: 1,
                  fontSize: 14,
                }}
              >
                {`Universal search\nand quick-add\nwith `}
                <ViewTypographyText
                  style={{
                    fontWeight: "800",
                    color: "#0c4a73",
                  }}
                >
                  Browse
                </ViewTypographyText>
              </ViewTypographyText>
            </ViewContainerStatic>
          </ViewContainerStatic>

          <ViewContainerStatic
            key={"product_thirdrow"}
            style={{
              top: -710,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <ViewContainerStatic
              key={"space"}
              style={{
                flex: 1,
                left: -50,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewSvgMain
                key={"user_arrow"}
                width="100"
                height="1200"
                viewBox="0 0 100 600"
              >
                <ViewSvgGroup transform="scale(-1, 1) translate(-100, 0)">
                  <ViewSvgPath
                    d="M20,540 C97.5,390 97.5,210 63,22.5"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="none"
                  />
                  <ViewSvgGroup transform="scale(-1, 1) translate(-100, 0) rotate(20 37 22.5)">
                    <ViewSvgPath
                      d="M37,22.5 L27,42.5 L37,22.5 L47,42.5 L37,22.5"
                      stroke="#22b2e4"
                      strokeWidth="5"
                      fill="#22b2e4"
                    />
                  </ViewSvgGroup>
                </ViewSvgGroup>
              </ViewSvgMain>
              <ViewTypographyText
                style={{
                  minHeight: 70,
                  top: -370,
                  left: 50,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 175,
                  flex: 1,
                  fontSize: 14,
                }}
              >
                {`Manage your organisations & members \nwith `}
                <ViewTypographyText
                  style={{
                    fontWeight: "800",
                    color: "#0c4a73",
                  }}
                >
                  Spaces
                </ViewTypographyText>
              </ViewTypographyText>
            </ViewContainerStatic>
            <ViewContainerStatic
              key={"user"}
              style={{
                flex: 1,
                right: -50,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewSvgMain
                key={"user_arrow"}
                width="100"
                height="1200"
                viewBox="0 0 100 600"
              >
                <ViewSvgPath
                  d="M20,540 C97.5,390 97.5,210 63,22.5"
                  stroke="#22b2e4"
                  strokeWidth="5"
                  fill="none"
                />
                <ViewSvgGroup transform="scale(-1, 1) translate(-126, 0) rotate(20 63 22.5)">
                  <ViewSvgPath
                    d="M63,22.5 L53,42.5 L63,22.5 L73,42.5 L63,22.5"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="#22b2e4"
                  />
                </ViewSvgGroup>
              </ViewSvgMain>
              <ViewTypographyText
                style={{
                  minHeight: 70,
                  top: -370,
                  right: 50,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 175,
                  flex: 1,
                  fontSize: 14,
                }}
              >
                {`Manage your \naccount & activity\nwith `}
                <ViewTypographyText
                  style={{
                    fontWeight: "800",
                    color: "#0c4a73",
                  }}
                >
                  Users
                </ViewTypographyText>
              </ViewTypographyText>
            </ViewContainerStatic>
          </ViewContainerStatic>

          <ViewContainerStatic
            key={"product_bottomrow"}
            style={{ top: -1110, flexDirection: "row" }}
          >
            <ViewContainerStatic
              key={"more"}
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ViewTypographyText
                style={{
                  top: 50,
                  minHeight: 20,
                  borderRadius: 5,
                  textAlign: "center",
                  padding: 5,
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  width: 175,
                  left: 0,
                  flex: 1,
                  fontSize: 14,
                }}
              >{`Or scroll down for\nmore information`}</ViewTypographyText>
              <ViewSvgMain
                key={"orgmenta_arrow_flipped"}
                width="100"
                height="100"
                style={{ alignSelf: "center" }}
                viewBox="0 0 100 100"
              >
                <ViewSvgPath
                  d="M50,50 L50,90"
                  stroke="#22b2e4"
                  strokeWidth="5"
                  fill="none"
                />
                <ViewSvgGroup transform="scale(1, -1) translate(0, -100)">
                  <ViewSvgPath
                    d="M50,10 L40,30 L50,10 L60,30 L50,10"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="#22b2e4"
                  />
                </ViewSvgGroup>
              </ViewSvgMain>
            </ViewContainerStatic>
          </ViewContainerStatic>

          {/* temp spacer */}
          <ViewContainerStatic
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
          >
            <ViewContainerStatic
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(0, 0, 0, 0.15)",
                borderWidth: 1,
                flexDirection: "column",
                width: "100%",
              }}
            >
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Contact Form
              </ViewTypographyText>
              <ViewInquiryMain />
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Overview
              </ViewTypographyText>
              <ViewTypographyText>
                Clear, transparent pricing
              </ViewTypographyText>
              <ViewTypographyText>
                No mandatory demo or sales pressure, just sign up and use it
              </ViewTypographyText>
              <ViewTypographyText>
                (But sign up for a demo here if you want one [link])
              </ViewTypographyText>
              <ViewTypographyText>
                Dedicated Account Manager who will never abandon you or charge
                for their time
              </ViewTypographyText>
              <ViewTypographyText>24/7 Support</ViewTypographyText>
              <ViewTypographyText>
                Consulting packages available for bespoke requests
              </ViewTypographyText>
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Pricing
              </ViewTypographyText>
              <ViewTypographyText>xyz</ViewTypographyText>
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Entity Types
              </ViewTypographyText>
              <ViewTypographyText>
                All your entities and their relationships brought into the hub
              </ViewTypographyText>
              <ViewTypographyText style={{ fontStyle: "italic" }}>
                {mapTypeMain.map((x, i) => x.display_plural).join(" <--> ")}
              </ViewTypographyText>
              <ViewTypographyText>Link Anything To Anything</ViewTypographyText>
              <ViewTypographyText>
                No restrictions - link any contact, to any event, to any task,
                to any location, to any reference, to any item
              </ViewTypographyText>
              <ViewTypographyText>(Example screenshot here)</ViewTypographyText>
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Features
              </ViewTypographyText>
              <ViewTypographyText>Business Management</ViewTypographyText>
              <ViewTypographyText>
                Projects & Service Tickets
              </ViewTypographyText>
              <ViewTypographyText>Accounting & Finance</ViewTypographyText>
              <ViewTypographyText>
                Procurement and stock management
              </ViewTypographyText>
              <ViewTypographyText>
                Invoice your agreements and sales to your customers
              </ViewTypographyText>
              <ViewTypographyText>
                Employee management and productivity
              </ViewTypographyText>
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Benefits
              </ViewTypographyText>
              <ViewTypographyText>
                Integrated Services (outsource your work to on-demand technical
                experts)
              </ViewTypographyText>
              <ViewTypographyText>
                MSP Community (peer/expert discussions and groups)
              </ViewTypographyText>
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Integrations
              </ViewTypographyText>
              {arrayIndustryProducts
                .filter((x) => x.priority < 3)
                .map((x, i) => (
                  <ViewTypographyText key={i}>{x.title}</ViewTypographyText>
                ))}
              <ViewTypographyText
                style={{ fontWeight: "800", color: "#0c4a73" }}
              >
                Contact Form
              </ViewTypographyText>
              <ViewInquiryMain />
              {/* Test Stripe/supbase db functions (working) */}
              {/* <UseStripeFunctions /> */}
              <UseNewStripeWrapperFunctions />
            </ViewContainerStatic>
          </ViewContainerStatic>
          <ViewContainerStatic style={{ height: 1000 }} />
        </ViewContainerStatic>
      </ViewContainerScroll>
      {/* Test Link (temp) */}
      {__DEV__ && (
        <ViewContainerStatic
          style={{
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <ViewRouterLinkthemed to="test">
            <ViewTypographyText
              style={{ width: 400, height: 40, backgroundColor: "green" }}
            >
              TESTING PAGE
            </ViewTypographyText>
          </ViewRouterLinkthemed>
        </ViewContainerStatic>
      )}
    </ViewOrgmentaBackground>
  );
};

// COMMNUNITY PAGES

export const ViewOrgmentaNews = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>News</ViewTypographyHeading>
        <ViewTypographyText>ViewOrgmentaNews placeholder</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaForums = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Forums</ViewTypographyHeading>
        <ViewTypographyText>
          ViewOrgmentaForums placeholder - Community forums / discussion boards
          go here
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaGuides = ({}: any) => {
  // rename this to 'articles' and have a 'guides' tag/type of article instead?
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Guides</ViewTypographyHeading>
        <ViewTypographyText>{`Guides, tutorials, instructions, how-tos etc. go here`}</ViewTypographyText>
        <ViewTypographyText>
          {JSON.stringify(articlesTemp, null, 2)}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaWhitepapers = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>White Papers</ViewTypographyHeading>
        <ViewTypographyText>{`White papers, justifications etc. go here`}</ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

export const ViewOrgmentaEnhancements = ({}: any) => {
  return (
    <ViewPageMain>
      <ViewContainerScroll>
        <ViewTypographyHeading>Enhancements</ViewTypographyHeading>
        <ViewTypographyText>
          {`
          Request a feature or other enhancement
          Enhacement request form goes here

          Enhancement Requests
          Enhacement request list goes here, showing status (whether reviewed, addded to roadmap etc.)
          `}
        </ViewTypographyText>
      </ViewContainerScroll>
    </ViewPageMain>
  );
};

// BACKGROUND

export const ViewOrgmentaBackground = ({ children }: any) => {
  return (
    <ViewImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../assets/backgroundCompressed.jpg")}
      resizeMode="cover"
    >
      {children}
    </ViewImageBackground>
  );
};

// WIDGET

export const ViewOrgmentaWidget = () => {
  // const orgmentaActive = useOrgmentaActive({}) as TypeOrgmentaActive;
  const [widgetHover, setWidgetHover] = useReactState(false);
  return (
    <ViewButtonPressable
      style={{ flexDirection: "row", justifyContent: "center", height: "100%" }}
      onPress={useModalVisibility("orgmenta")}
      onHoverIn={() => setWidgetHover(true)}
      onHoverOut={() => setWidgetHover(false)}
    >
      <ViewImageMain
        resizeMode={"cover"}
        style={{
          width: widgetHover ? 150 : 50,
          height: "120%",
          top: -5,
        }}
        source={
          widgetHover
            ? require("../assets/logo/full/white-small.png")
            : require("../assets/logo/symbol/white-small.png")
        }
      />
    </ViewButtonPressable>
  );
};
