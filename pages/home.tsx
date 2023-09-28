// The home page will ideally just show a demo space + product information/ sales pitch, and a guest user if not logged in.
// If logged in, then it should also show the user a dropdown asking them if they want to set a default page when logged in.
import { useEffect, useState } from "react";
import { Text, ScrollView, View, Image, ImageBackground } from "react-native";
import { mapTypeMain } from "../utils/type";
import Svg, { Path, G } from "react-native-svg";
import { useWindowDimensions } from "../utils/window";
import { BarCodeReaderComponent, CameraComponent } from "../utils/camera";
import { ClipboardCopy } from "../utils/clipboard";
import { Notification, NotificationBody } from "../utils/notification";

// const notificationBody: NotificationBody = {
//   testMode: true,
// };

export default function Home() {
  const windowDimensions = useWindowDimensions();
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/background2.jpg")}
        resizeMode="cover"
      >
        <View
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
          <Image
            style={{
              resizeMode: "contain",
              width: "100%",
              height: 80,
            }}
            source={require("../assets/logo/full/color_cropped.png")}
          />
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            The Business Operating System
          </Text>
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
              <TextSwitcher />
            </Text>
            {`\nfrom a single pane of glass`}
          </Text>
        </View>
        <ScrollView
          style={{
            padding: 10,
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          {/* <View key={'test'} style={{height:windowDimensions.height-80, backgroundColor:'green'}}></View> */}

          <View key={"product_overview"}>
            <View
              key={"product_toprow"}
              style={{ top: -5, flexDirection: "row" }}
            >
              <View
                key={"orgmenta"}
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Svg
                  key={"orgmenta_arrow"}
                  width="100"
                  height="100"
                  style={{ alignSelf: "center" }}
                  viewBox="0 0 100 100"
                >
                  <Path
                    d="M50,50 L50,10"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="none"
                  />
                  <Path
                    d="M50,10 L40,30 L50,10 L60,30 L50,10"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="#22b2e4"
                  />
                </Svg>
                <Text
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
                  <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                    Site
                  </Text>
                </Text>
              </View>
            </View>

            <View
              key={"product_secondrow"}
              style={{ flexDirection: "row", width: "100%", top: -165 }}
            >
              <View
                key={"bookmark"}
                style={{
                  left: "5%",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Svg
                  key={"bookmark_arrow"}
                  style={{ left: -30 }}
                  width="100"
                  height="150"
                  viewBox="0 0 100 400"
                >
                  <Path
                    d="M80,360 C35,260 35,140 58,15"
                    stroke="#22b2e4"
                    strokeWidth="15"
                    fill="none"
                  />
                  {/* Extended Curved Arrow line */}
                  <G transform="rotate(20 50 40)">
                    <Path
                      d="M50,10 L40,30 L50,10 L60,30 L50,10"
                      stroke="#22b2e4"
                      strokeWidth="15"
                      fill="#22b2e4"
                    />
                  </G>
                  {/* Rotated Arrowhead */}
                </Svg>
                <Text
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
                  <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                    Bookmarks
                  </Text>
                </Text>
              </View>
              <View
                key={"browse"}
                style={{
                  right: "5%",
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Svg
                  key={"browse_arrow"}
                  style={{ right: -30 }}
                  width="100"
                  height="150"
                  viewBox="0 0 100 400"
                >
                  <Path
                    d="M20,360 C65,260 65,140 42,15"
                    stroke="#22b2e4"
                    strokeWidth="15"
                    fill="none"
                  />
                  <G transform="scale(-1, 1) translate(-100, 0) rotate(20 50 40)">
                    <Path
                      d="M50,10 L40,30 L50,10 L60,30 L50,10"
                      stroke="#22b2e4"
                      strokeWidth="15"
                      fill="#22b2e4"
                    />
                  </G>
                </Svg>
                <Text
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
                  {`Universal search and \nquick-add\nwith `}
                  <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                    Browse
                  </Text>
                </Text>
              </View>
            </View>

            <View
              key={"product_thirdrow"}
              style={{ top: -710, flexDirection: "row", width: "100%" }}
            >
              <View
                key={"space"}
                style={{
                  flex: 1,
                  left: -50,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Svg
                  key={"user_arrow"}
                  width="100"
                  height="1200"
                  viewBox="0 0 100 600"
                >
                  <G transform="scale(-1, 1) translate(-100, 0)">
                    <Path
                      d="M20,540 C97.5,390 97.5,210 63,22.5"
                      stroke="#22b2e4"
                      strokeWidth="5"
                      fill="none"
                    />
                    <G transform="scale(-1, 1) translate(-100, 0) rotate(20 37 22.5)">
                      <Path
                        d="M37,22.5 L27,42.5 L37,22.5 L47,42.5 L37,22.5"
                        stroke="#22b2e4"
                        strokeWidth="5"
                        fill="#22b2e4"
                      />
                    </G>
                  </G>
                </Svg>
                <Text
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
                  <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                    Spaces
                  </Text>
                </Text>
              </View>
              <View
                key={"user"}
                style={{
                  flex: 1,
                  right: -50,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Svg
                  key={"user_arrow"}
                  width="100"
                  height="1200"
                  viewBox="0 0 100 600"
                >
                  <Path
                    d="M20,540 C97.5,390 97.5,210 63,22.5"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="none"
                  />
                  <G transform="scale(-1, 1) translate(-126, 0) rotate(20 63 22.5)">
                    <Path
                      d="M63,22.5 L53,42.5 L63,22.5 L73,42.5 L63,22.5"
                      stroke="#22b2e4"
                      strokeWidth="5"
                      fill="#22b2e4"
                    />
                  </G>
                </Svg>
                <Text
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
                  <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                    Users
                  </Text>
                </Text>
              </View>
            </View>

            <View
              key={"product_bottomrow"}
              style={{ top: -1110, flexDirection: "row" }}
            >
              <View
                key={"more"}
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text
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
                >{`Or scroll down for\nmore information`}</Text>
                <Svg
                  key={"orgmenta_arrow_flipped"}
                  width="100"
                  height="100"
                  style={{ alignSelf: "center" }}
                  viewBox="0 0 100 100"
                >
                  <Path
                    d="M50,50 L50,90"
                    stroke="#22b2e4"
                    strokeWidth="5"
                    fill="none"
                  />
                  <G transform="scale(1, -1) translate(0, -100)">
                    <Path
                      d="M50,10 L40,30 L50,10 L60,30 L50,10"
                      stroke="#22b2e4"
                      strokeWidth="5"
                      fill="#22b2e4"
                    />
                  </G>
                </Svg>
              </View>
            </View>

            {/* temp spacer */}
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <View
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(0, 0, 0, 0.15)",
                  borderWidth: 1,
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Contact Form
                </Text>
                <Text>xyz</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Overview
                </Text>
                <Text>Clear, transparent pricing</Text>
                <Text>
                  No mandatory demo or sales pressure, just sign up and use it
                </Text>
                <Text>
                  (But sign up for a demo here if you want one [link])
                </Text>
                <Text>
                  Dedicated Account Manager who will never abandon you or charge
                  for their time
                </Text>
                <Text>24/7 Support</Text>
                <Text>Consulting packages available for bespoke requests</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Pricing
                </Text>
                <Text>xyz</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Entity Types
                </Text>
                <Text>
                  All your entities and their relationships brought into the hub
                </Text>
                <Text style={{ fontStyle: "italic" }}>
                  {mapTypeMain.map((x) => x.display_plural).join(" <--> ")}
                </Text>
                <Text>Link Anything To Anything</Text>
                <Text>
                  No restrictions - link any contact, to any event, to any task,
                  to any location, to any reference, to any item
                </Text>
                <Text>(Example screenshot here)</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Features
                </Text>
                <Text>Business Management</Text>
                <Text>Projects & Service Tickets</Text>
                <Text>Accounting & Finance</Text>
                <Text>Procurement and stock management</Text>
                <Text>Invoice your agreements and sales to your customers</Text>
                <Text>Employee management and productivity</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Benefits
                </Text>
                <Text>
                  Integrated Services (outsource your work to on-demand
                  technical experts)
                </Text>
                <Text>MSP Community (peer/expert discussions and groups)</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Integrations
                </Text>
                <Text>Productivity</Text>
                <Text>- Microsoft</Text>
                <Text>- Google Workspace / Gsuite</Text>
                <Text>- Zapier</Text>
                <Text>Remote Monitoring Systems</Text>
                <Text>- ConnectWise Automate (LabTech)</Text>
                <Text>- Datto RMM (Kaseya)</Text>
                <Text>- SolarWinds N-Central</Text>
                <Text>Vendors</Text>
                <Text>- Pax8</Text>
                <Text>- Datto Commerce</Text>
                <Text>- Ingram Micro</Text>
                <Text>- Dicker Data</Text>
                <Text>- Tech Data</Text>
                <Text>- Rhipe</Text>
                <Text>- Synnex</Text>
                <Text>Finance</Text>
                <Text>- Xero</Text>
                <Text>- QuickBooks</Text>
                <Text>- Myob</Text>
                <Text>- WaveApps</Text>
                <Text>- Dicker Data</Text>
                <Text>- Tech Data</Text>
                <Text>- Rhipe</Text>
                <Text>- Synnex</Text>
                <Text>Import / Export</Text>
                <Text>- CSV</Text>
                <Text>- Xlsx</Text>
                <Text>- xml / RSS</Text>
                <Text>- Postgres/SQLite.</Text>
                <Text style={{ fontWeight: "800", color: "#0c4a73" }}>
                  Contact Form
                </Text>
                <Text>xyz</Text>
                {/* Barcode Scanner (working) */}
                {/* <BarCodeReaderComponent /> */}

                {/* Camera (working) */}
                {/* <CameraComponent /> */}

                {/* Clipboard copy (working) */}
                {/* <ClipboardCopy /> */}

                {/* Notification component (working) */}
                {/* <Notification {...notificationBody} /> */}
              </View>
            </View>
            {/* temp spacer */}
            <View style={{ height: 100 }}></View>
            {/* temp spacer */}
            <View style={{ height: 100 }}></View>
            {/* temp spacer */}
            <View style={{ height: 100 }}></View>
            {/* temp spacer */}
            <View style={{ height: 100 }}></View>
            {/* temp spacer */}
            <View style={{ height: 100 }}></View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const TextSwitcher: React.FC = () => {
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
