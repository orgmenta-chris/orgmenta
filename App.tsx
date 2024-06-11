// import "react-native-url-polyfill/auto";
// import { usePlatformCssweb } from "./utils/platform";
import { ViewOrgmentaHome, ViewOrgmentaIntegrations } from "./utils/orgmenta";
import { ViewEntityPage } from "./utils/entity";
import { ViewSpacePage } from "./utils/space";
import { ViewBrowsePage } from "./utils/browse";
import { ViewAttributeMain } from "./utils/attribute";
import { ViewRouterLostpage } from "./utils/router";
import { ViewBookmarkModal, ViewBookmarkPage } from "./utils/bookmark";
import { ViewOrgmentaModal } from "./utils/orgmenta";
import { ViewBrowseModal } from "./utils/browse";
import { ViewSpaceModal } from "./utils/space";
import { ViewUserPage, ViewUserModal } from "./utils/user";
import { ViewLandingPage } from "./utils/landing";
import { ViewTestPage } from "./utils/test";
import { enGB, registerTranslation } from "react-native-paper-dates";
import {
  // ViewRouterProvider,
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
// import { ViewLibraryPage } from "./utils/library";
import { ViewAppContainer } from "./utils/app";
import { ViewTypographyText } from "./utils/typography";
// import { ViewStripeWrappermain } from "./utils/stripe-test";
// import { msalInstance } from "./api/authConfig"; // msal-react is not immediately compatible with react-native. We need https://www.npmjs.com/package/react-native-msal.
// import { MsalProvider as ViewMsalProvider } from "@azure/msal-react"; // msal-react is not immediately compatible with react-native. We need https://www.npmjs.com/package/react-native-msal.

// export default function App() {
// return <ViewTypographyText>test</ViewTypographyText>
// }

registerTranslation("en-GB", enGB);

export default function App() {
  return (
    <ViewAppContainer>
      {!!__DEV__ && <ViewOrgmentaHeader />}
      <ViewRouterRoutes>
        {/*  Temp page for deployed website (landing page only, stips all other functionality out).  add '|| true' if you want to see the landing page version of the app instead of the full app. */}
        {!__DEV__ ? (
          <>
            <ViewRouterRoute path="/*" element={<ViewLandingPage />} />
          </>
        ) : (
          <>
            {/* Testing Page */}
            <ViewRouterRoute path="/test" element={<ViewTestPage />} />
            {/* Home Page */}
            <ViewRouterRoute path="/" element={<ViewOrgmentaHome />} />
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
            <ViewRouterRoute
              path="app/integrations"
              element={<ViewOrgmentaIntegrations />}
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
              element={<ViewEntityPage />}
            />
            {/* User Page */}
            <ViewRouterRoute
              path="users/"
              element={<ExecuteRouterNavigate to="all" replace />}
            />
            <ViewRouterRoute
              path="users/:userid"
              element={<ExecuteRouterNavigate to="users" replace />}
            />
            <ViewRouterRoute
              path="users/:userid/*"
              element={<ViewUserPage />}
            />
            {/* Space Page */}
            <ViewRouterRoute
              path="spaces/"
              element={<ExecuteRouterNavigate to="all" replace />}
            />
            <ViewRouterRoute
              path="spaces/:spaceid"
              element={<ExecuteRouterNavigate to="spaces" replace />}
            />
            <ViewRouterRoute
              path="spaces/:spaceid/*"
              element={<ViewSpacePage />}
            />
            {/* Bookmark Page */}
            <ViewRouterRoute
              path="bookmark/"
              element={<ExecuteRouterNavigate to="all/all" replace />}
            />
            <ViewRouterRoute
              path="bookmark/:bookmarkgroup/*"
              element={<ViewBookmarkPage />}
            />
            {/* Browse Page */}
            <ViewRouterRoute
              path="browse/"
              element={<ExecuteRouterNavigate to="all/all" replace />}
            />
            <ViewRouterRoute
              path="browse/:browsemode/:searchterm"
              element={<ViewBrowsePage />}
            />
            {/* Attributes Page */}
            <ViewRouterRoute
              path="attributes/"
              element={<ExecuteRouterNavigate to="all/all" replace />}
            />
            <ViewRouterRoute
              path="attributes/:mode/:attributeid/*"
              element={<ViewAttributeMain />}
            />
            {/* Library */}
            {/* <ViewRouterRoute
              path="library/"
              element={
                <ExecuteRouterNavigate
                  to="bookmark/ViewBookmarkWidget"
                  replace
                />
              }
            /> */}
            {/* <ViewRouterRoute
              path="library/bookmark"
              element={
                <ExecuteRouterNavigate to="ViewBookmarkWidget" replace />
              }
            /> */}
            {/* <ViewRouterRoute path="library/*" element={<ViewLibraryPage />} /> */}
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
    </ViewAppContainer>
  );
}
