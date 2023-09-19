import Home from "./pages/home";
import User from "./pages/user";
import Space from "./pages/space";
import Entity from "./pages/entity";
import Attribute from "./pages/attribute";
import { StatusBar } from "expo-status-bar";
import { msalInstance } from "./api/authConfig";
import { MsalProvider } from "@azure/msal-react";
import Header from "./components/navigation/header";
// import Sidebar from "./components/navigation/sidebar";
import { ViewQueryerProvider } from "./utils/queryer";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ViewBookmarkModal } from './utils/bookmark'
import { ViewOrgmentaModal } from './utils/orgmenta'
import { ViewBrowseModal } from './utils/browse'
import { ViewSpaceModal } from './utils/space'
import { ViewUserModal } from './utils/user'

export default function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <ViewQueryerProvider>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />

            <View style={styles.content}>

              <View style={{ flex: 6, margin: 20, paddingLeft: "10%", paddingRight:"10%", }}>
                <Routes>

                  {/* Home */}
                  <Route path="/" element={<Home />} />

                  {/* App Pages */}
                  <Route
                    path="app/"
                    element={<Navigate to="app/" replace />}
                  />
                  <Route
                    path="app/pricing"
                    element={
                      <Text>
                        Pricing
                      </Text>
                    }
                  />
                  <Route
                    path="app/product"
                    element={
                      <Text>
                      {`Use case by industry (just show entities from Orgmenta>Product>Catalog>Offerings>Features)`}
                      </Text>
                    }
                  />
                  <Route
                    path="app/roadmap"
                    element={
                      <Text>
                        {`Roadmap (backlog) (just show entities from Orgmenta>Product>Catalog>Offerings)`}
                      </Text>
                    }
                  />
                  <Route 
                    path="app/compare"
                    element={
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
                        
                        `}
                      </Text>
                    }
                  />
                  <Route 
                    path="app/industries"
                    element={
                      <Text>
                        {`Use case by industry (just show entities from Orgmenta>Product>Catalog>Offerings>UseCases)`}
                      </Text>
                    }
                  />
                  <Route 
                    path="app/frameworks"
                    element={
                      <Text>
                        {`Standards, Libraries, Frameworks and Methodologies
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
                    }
                  />

                  {/* Company Pages */}
                  <Route
                    path="company/"
                    element={<Navigate to="company/about" replace />}
                  />
                  <Route
                    path="company/about"
                    element={
                      <Text>
                        About
                      </Text>
                    }
                  />
                  <Route
                    path="company/privacy"
                    element={
                      <Text>
                        Privacy
                      </Text>
                    }
                  />
                  <Route
                    path="company/terms"
                    element={
                      <Text>
                        Terms
                      </Text>
                    }
                  />
                  <Route 
                    path="company/contact"
                    element={
                      <Text>
                        Contact
                      </Text>
                    }
                  />
                  <Route 
                    path="company/partners"
                    element={
                      <Text>
                        Partner
                      </Text>
                    }
                  />

                  {/* Community Pages */}
                  <Route
                    path="community/"
                    element={<Navigate to="community/forums" replace />}
                  />
                  <Route
                    path="community/forums"
                    element={
                      <Text>
                        Forums
                      </Text>
                    }
                  />
                  <Route
                    path="community/guides"
                    element={
                      <Text>
                        Guides
                      </Text>
                    }
                  />
                  <Route 
                    path="community/enhancements"
                    element={
                      <Text>
                        Enhancements
                      </Text>
                    }
                  />

                  {/* Entities */}
                  <Route
                    path="entity/"
                    element={
                      <Text>
                        Path "entity/" has no specified entity - this will
                        reroute somewhere (see App.tsx)
                      </Text>
                    }
                  />
                  <Route
                    path="entity/:entity_id_or_nickname"
                    element={<Navigate to="pods" replace />}
                  />
                  <Route
                    path="entity/:entity_id_or_nickname/:mode/*"
                    element={<Entity />}
                  />

                  {/* User */}
                  <Route
                    path="users/"
                    element={<Navigate to="all" replace />}
                  />
                  <Route path="users/:userid" element={<User />} />

                  {/* Space */}
                  <Route
                    path="spaces/"
                    element={<Navigate to="all" replace />}
                  />
                  <Route path="/spaces/:spaceid" element={<Space />} />

                  {/* Attributes */}
                  <Route
                    path="attributes/"
                    element={<Navigate to="main" replace />}
                  />
                  <Route
                    path="/attributes/*"
                    // path="/attributes/:mode/:attributeid"
                    element={<Attribute />}
                  />
                </Routes>

              </View>

              <ViewSpaceModal/>
              <ViewBookmarkModal/>
              <ViewOrgmentaModal/>
              <ViewBrowseModal/>
              <ViewUserModal/>

            </View>
          </View>
        </ViewQueryerProvider>
      </BrowserRouter>
    </MsalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position:'absolute',
    height:"100%",
    width:"100%",
    overflow:'hidden'
  },
  content: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    overflowX:'hidden',
    overflowY:'scroll'
  },
});
