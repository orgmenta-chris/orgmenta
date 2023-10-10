// Currently is Orgmenta landing page rather than generalised component

import {
  ViewTypographyHeading,
  ViewTypographyTextthemed,
  ViewTypographyText,
} from "./typography";
import { ViewContainerScroll, ViewContainerStatic } from "./container";
import { ViewImageMain } from "./image";
import { ViewInquiryMain } from "./inquiry";
import { ViewOrgmentaBackground } from "./orgmenta";
import { useWindowDimensions } from "./window";
import { useReactEffect, useReactState } from "./react";

export const ViewLandingPage = () => {
  const windowDimensions = useWindowDimensions();
  return (
    <ViewOrgmentaBackground>
      <ViewContainerScroll>
        <ViewContainerStatic
          style={{
            margin: 10,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 5,
            aspectRatio: 13 / 2,
            width: windowDimensions.width / 2 + 40,
            padding: 10,
            height: 200,
            alignSelf: "center",
            justifyContent: "center",
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
          <ViewTypographyTextthemed
            style={{ color: "black", textAlign: "center", fontSize: 20 }}
          >
            The Business Operating System
          </ViewTypographyTextthemed>
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

        <ViewContainerStatic
          style={{
            margin: 10,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 5,
            // position: "absolute",
            aspectRatio: 13 / 2,
            width: windowDimensions.width / 2 + 40,
            padding: 10,
            height: 275,
            alignSelf: "center",
            // justifyContent: "center",
            // top: windowDimensions.height / 2 - 100,
          }}
        >
          <ViewTypographyHeading
            style={{ margin: 5, color: "black", size: 16 }}
          >
            Coming Soon
          </ViewTypographyHeading>
          <ViewTypographyTextthemed style={{ color: "black" }}>
            Register your interest:
          </ViewTypographyTextthemed>
          <ViewInquiryMain />
        </ViewContainerStatic>
      </ViewContainerScroll>
    </ViewOrgmentaBackground>
  );
};

// temp
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
