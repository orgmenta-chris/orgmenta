import "react-native-url-polyfill/auto";
// import { msalInstance } from "./api/authConfig"; // msal-react is not immediately compatible with react-native. We need https://www.npmjs.com/package/react-native-msal.
// import { MsalProvider as ViewMsalProvider } from "@azure/msal-react"; // msal-react is not immediately compatible with react-native. We need https://www.npmjs.com/package/react-native-msal.
import Home from "./pages/home";
import User from "./pages/user";
import Space from "./pages/space";
import Entity from "./pages/entity";
import Browse from "./pages/browse";
import Attribute from "./pages/attribute";
import { ViewRouterLostpage } from "./utils/router";
import { usePlatformCssweb } from "./utils/platform";
import { ViewWindowContainer } from "./utils/window";
import { ViewQueryerProvider } from "./utils/queryer";
import {
  ViewRouterProvider,
  ViewRouterRoutes,
  ViewRouterRoute,
  ExecuteRouterNavigate,
} from "./utils/router";
import {
  ViewOrgmentaHeader,
  ViewOrgmentaFeatures,
  ViewOrgmentaPricing,
  ViewOrgmentaRoadmap,
  ViewOrgmentaCompare,
  ViewOrgmentaIndustries,
  ViewOrgmentaFrameworks,
  ViewOrgmentaAbout,
  ViewOrgmentaPrivacy,
  ViewOrgmentaTerms,
  ViewOrgmentaSocials,
  ViewOrgmentaContact,
  ViewOrgmentaNews,
  ViewOrgmentaForums,
  ViewOrgmentaGuides,
  ViewOrgmentaWhitepapers,
  ViewOrgmentaEnhancements,
  ViewOrgmentaPartner,
} from "./utils/orgmenta";
import { ViewStatusbarMain } from "./utils/statusbar";
import { ViewBookmarkModal } from "./utils/bookmark";
import { ViewOrgmentaModal } from "./utils/orgmenta";
import { ViewBrowseModal } from "./utils/browse";
import { ViewSpaceModal } from "./utils/space";
import { ViewUserModal } from "./utils/user";
import { ViewLandingPage } from "./utils/landing";
import { ViewTestPage } from "./utils/test";
import { ViewStripeWrappermain } from "./utils/stripe-test";
import { useState } from "react";

export default function App() {
   usePlatformCssweb(); // shim to add css to web
   const AppBody = () => {
    return (
      <ViewRouterProvider>
        <ViewQueryerProvider>
          <ViewStatusbarMain />
          <ViewWindowContainer>
            {!!__DEV__ && <ViewOrgmentaHeader />}
            <ViewRouterRoutes>
              {/*  Temp page for deployed website (landing page only, stips all other functionality out).  add '|| true' if you want to see the landing page version of the app instead of the full app. */}
              {!__DEV__ ? (
                <>
                  <ViewRouterRoute path="/*" element={<ViewLandingPage />} />
                </>
              ) : (
                <>
                  {/* Home Page */}
                  <ViewRouterRoute path="/" element={<Home />} />
                  {/* Test Page */}
                  <ViewRouterRoute path="/test" element={<ViewTestPage />} />
                  {/* App Pages */}
                  <ViewRouterRoute
                    path="app/"
                    element={<ExecuteRouterNavigate to="product" replace />}
                  />
                  <ViewRouterRoute
                    path="app/features"
                    element={<ViewOrgmentaFeatures />}
                  />
                  <ViewRouterRoute
                    path="app/pricing"
                    element={<ViewOrgmentaPricing />}
                  />
                  <ViewRouterRoute
                    path="app/roadmap"
                    element={<ViewOrgmentaRoadmap />}
                  />
                  <ViewRouterRoute
                    path="app/compare"
                    element={<ViewOrgmentaCompare />}
                  />
                  <ViewRouterRoute
                    path="app/industries"
                    element={<ViewOrgmentaIndustries />}
                  />
                  <ViewRouterRoute
                    path="app/frameworks"
                    element={<ViewOrgmentaFrameworks />}
                  />
                  {/* Company Pages */}
                  <ViewRouterRoute
                    path="company/"
                    element={<ExecuteRouterNavigate to="about" replace />}
                  />
                  <ViewRouterRoute
                    path="company/about"
                    element={<ViewOrgmentaAbout />}
                  />
                  <ViewRouterRoute
                    path="company/privacy"
                    element={<ViewOrgmentaPrivacy />}
                  />
                  <ViewRouterRoute
                    path="company/terms"
                    element={<ViewOrgmentaTerms />}
                  />
                  <ViewRouterRoute
                    path="company/socials"
                    element={<ViewOrgmentaSocials />}
                  />
                  <ViewRouterRoute
                    path="company/contact"
                    element={<ViewOrgmentaContact />}
                  />
                  {/* Community Pages */}
                  <ViewRouterRoute
                    path="community/"
                    element={<ExecuteRouterNavigate to="forums" replace />}
                  />
                  <ViewRouterRoute
                    path="community/news"
                    element={<ViewOrgmentaNews />}
                  />
                  <ViewRouterRoute
                    path="community/forums"
                    element={<ViewOrgmentaForums />}
                  />
                  <ViewRouterRoute
                    path="community/guides"
                    element={<ViewOrgmentaGuides />}
                  />
                  <ViewRouterRoute
                    path="community/whitepapers"
                    element={<ViewOrgmentaWhitepapers />}
                  />
                  <ViewRouterRoute
                    path="community/enhancements"
                    element={<ViewOrgmentaEnhancements />}
                  />
                  <ViewRouterRoute
                    path="community/partner"
                    element={<ViewOrgmentaPartner />}
                  />
                  {/* Entity Page */}
                  <ViewRouterRoute
                    path="entity/"
                    element={<ExecuteRouterNavigate to="all" replace />}
                  />
                  <ViewRouterRoute
                    path="entity/:entityid"
                    element={<ExecuteRouterNavigate to="pods" replace />}
                  />
                  <ViewRouterRoute
                    path="entity/:entityid/:display"
                    element={<ExecuteRouterNavigate to="display" replace />}
                  />
                  <ViewRouterRoute
                    path="entity/:entityid/:display/*"
                    element={<Entity />}
                  />
                  {/* User Page */}
                  <ViewRouterRoute
                    path="users/"
                    element={<ExecuteRouterNavigate to="all" replace />}
                  />
                  <ViewRouterRoute path="users/:userid/*" element={<User />} />
                  {/* Space Page */}
                  <ViewRouterRoute
                    path="spaces/"
                    element={<ExecuteRouterNavigate to="all" replace />}
                  />
                  <ViewRouterRoute
                    path="spaces/:spaceid/*"
                    element={<Space />}
                  />
                  {/* Browse Page */}
                  <ViewRouterRoute
                    path="browse/"
                    element={<ExecuteRouterNavigate to="all/all" replace />}
                  />
                  <ViewRouterRoute
                    path="browse/:browsemode/:searchterm"
                    element={<Browse />}
                  />
                  {/* Attributes Page */}
                  <ViewRouterRoute
                    path="attributes/"
                    element={<ExecuteRouterNavigate to="all/all" replace />}
                  />
                  <ViewRouterRoute
                    path="attributes/:mode/:attributeid/*"
                    element={<Attribute />}
                  />
                  {/* 404 / Not found / Lost */}
                  <ViewRouterRoute path="/*" element={<ViewRouterLostpage />} />
                </>
              )}
            </ViewRouterRoutes>
            {/* Modals */}
            <ViewSpaceModal />
            <ViewBookmarkModal />
            <ViewOrgmentaModal />
            <ViewBrowseModal />
            <ViewUserModal />
          </ViewWindowContainer>
        </ViewQueryerProvider>
      </ViewRouterProvider>
    );
  };
  return <AppBody />;
}
