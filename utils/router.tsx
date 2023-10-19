// A 'router' manages navigation and routing in a React application, directing the display of content based on the current URL or route
// NOTE THAT BACK BUTTON FUNCTIONALITY ON MOBILE MAY NOT YET BE WORKING.

import { ViewButtonPressable } from "./button";
import { ViewTypographyText } from "./typography";
import { ViewContainerStatic } from "./container";
import { ViewPageMain } from "./page";
import { ViewTypographyTextthemed } from "./typography";
import { UtilityPlatformMain } from "./platform";
import { useThemeToken, TypeThemeMain } from "./theme";
import { validateObjectIsobject } from "./object";
import { mergeStylesheetMain, TypeStylesheetMain } from "./stylesheet";
import {
  useNavigate,
  useLocation,
  BrowserRouter,
  BrowserRouterProps,
  Routes,
  RoutesProps,
  Route,
  RouteProps,
  Navigate,
  NavigateProps,
  Link as DLink,
  LinkProps as DLinkProps,
} from "react-router-dom";
import {
  NativeRouter,
  NativeRouterProps,
  Link as NLink,
  LinkProps as NLinkProps,
} from "react-router-native";

// Location

export const useRouterLocation = () => {
  const location = useLocation();
  const paths = location?.pathname?.split("/");
  return { ...location, paths };
};

export const useRouterNavigate = useNavigate;

// Provider

export const ViewRouterProvider =
  UtilityPlatformMain.OS === "web" ? BrowserRouter : NativeRouter;
// Note that we could instead have utilised the Platform.select method to achieve this (not needed at this time), like so:
// const ViewRouterProvider = UtilityPlatformMain.select({
//     ios: () => require('NativeRouter'),
//     android: () => require('NativeRouter'),
//     native: () => require('NativeRouter'),
//     web: () => require('BrowserRouter'),
//     default: () => require('BrowserRouter'),
// })();
//

export type TypeRouterProvider = BrowserRouterProps | NativeRouterProps;

// Routes

export const ViewRouterRoutes = Routes;

export type TypeRouterRoutes = RoutesProps;

// Route

export const ViewRouterRoute = Route;

export type TypeRouterRoute = RouteProps;

// Link

export type TypeRouterLink = NLinkProps | DLinkProps;

export const ViewRouterLink: React.FC<any> = ({ children, ...rest }) => {
  const LinkComponent = UtilityPlatformMain.OS === "web" ? DLink : NLink;
  const isString = typeof children === "string";
  const navigate = useRouterNavigate();
  return UtilityPlatformMain.OS === "web" ? (
    <LinkComponent {...rest}>
      {isString ? <ViewTypographyText>{children}</ViewTypographyText> : children}
    </LinkComponent>
  ) : (
    <ViewButtonPressable
      style={{ minHeight: 40 }}
      onPress={() => {
        navigate(`${rest.to}`);
      }}
    >
      {isString ? <ViewTypographyText>{children}</ViewTypographyText> : children}
    </ViewButtonPressable>
  );
};

// Linkthemed

export type TypeRouterLinkthemed = TypeRouterLink & {
  children: React.ReactNode;
  theme_token?: string;
};

export const ViewRouterLinkthemed = ({
  children,
  theme_token,
  style,
  ...rest
}: TypeRouterLinkthemed) => {
  const theme = useThemeToken(theme_token || "link") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TypeStylesheetMain);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <ViewRouterLink {...rest} {...propsMerged}>
      {/* ViewTypographyText passed through as children must be within a text element.*/}
      {children}
    </ViewRouterLink>
  );
};

// Button (allows us to navigate AND perform functions - but we lose right click ability, so don't use this unless necessary / unless right click isn't needed)

// TODO (placeholder, not tested)
export const ViewRouterButton = ({
  to,
  otherfunctions,
  heading,
  children,
  theme_token,
  style,
  ...rest
}: any) => {
  const navigate = useNavigate();
  const theme = useThemeToken(theme_token || "link") as TypeThemeMain;
  const isStyleObject = validateObjectIsobject(style as TypeStylesheetMain);
  const stylesheetMerged = mergeStylesheetMain(
    theme?.style,
    isStyleObject ? (style as any) : {}
  );
  const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
  return (
    <ViewButtonPressable
      {...propsMerged}
      onPress={() => {
        navigate(to);
        otherfunctions();
      }}
    >
      <ViewTypographyTextthemed>{heading}</ViewTypographyTextthemed>
    </ViewButtonPressable>
  );
};

// Navigate

export const ExecuteRouterNavigate = Navigate;

export type TypeRouterNavigate = NavigateProps;

// Lost (404 / not found page)
export const ViewRouterLostpage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyText
        style={{
          margin: 20,
          fontSize: 30,
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        404 Not Found
      </ViewTypographyText>
      <ViewRouterLinkthemed to={"/"}>
        <ViewContainerStatic style={{ flex: 1 }}>
          <ViewTypographyTextthemed
            style={{ fontSize: 24, flex: 1, alignSelf: "center" }}
          >
            Home
          </ViewTypographyTextthemed>
        </ViewContainerStatic>
      </ViewRouterLinkthemed>
    </ViewPageMain>
  );
};
