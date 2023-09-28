import { useEffect, useState } from "react";
import { Text, ScrollView, View, Image, ImageBackground } from "react-native";
import { useWindowDimensions } from "../utils/window";
import { ViewInquiryMain } from "./inquiry";
import {
  ViewTypographyTextthemed,
  ViewTypographyTextheading,
} from "../utils/typography";

export const ViewLandingPage = () => {
  const windowDimensions = useWindowDimensions();
  return (
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("../assets/background2.jpg")}
      resizeMode="cover"
    >
      <ScrollView>
        <View
          style={{
            margin: 10,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 5,
            // position: "absolute",
            aspectRatio: 13 / 2,
            width: windowDimensions.width / 2 + 40,
            padding: 10,
            height: 200,
            alignSelf: "center",
            justifyContent: "center",
            // top: windowDimensions.height / 2 - 325,
          }}
        >
          <Image
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 13,
              paddingTop: 10,
              fontStyle: "italic",
            }}
          >
            {`Build, automate and manage your \n`}
            <Text style={{ fontWeight: "500", color: "#0c4a73" }}>
              <CompanytypeSwitcher />
            </Text>
            {`\nfrom a single pane of glass`}
          </Text>
        </View>

        <View
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
          <ViewTypographyTextheading style={{ margin:5, color: "black", size: 16 }}>
            Coming Soon
          </ViewTypographyTextheading>
          <ViewTypographyTextthemed style={{ color: "black"}}>
            Register your interest:
          </ViewTypographyTextthemed>
          <ViewInquiryMain />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const CompanytypeSwitcher: React.FC = () => {
  const [index, setIndex] = useState(0);
  const texts = ["IT Company", "MSP", "MSSP", "VAR", "TSP", "OED"];
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex: any) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return <Text>{texts[index]}</Text>;
};
