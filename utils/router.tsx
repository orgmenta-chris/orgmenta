// A 'router' manages navigation and routing in a React application, directing the display of content based on the current URL or route
// NOTE THAT BACK BUTTON FUNCTIONALITY ON MOBILE MAY NOT YET BE WORKING.

import { Text, View } from "react-native";
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
import { ViewPageMain } from "../utils/page";
import { ViewTypographyTextthemed } from "../utils/typography";

// Location

export const useRouterLocation = () => {
  const location = useLocation();
  const paths = location?.pathname?.split("/");
  return { ...location, paths };
};

export const useRouterNavigate = useNavigate;
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
export type TypeRouterProvider = BrowserRouterProps | NativeRouterProps;

// Routes

export const ViewRouterRoutes = Routes;
export const ViewRouterRoutes = Routes;

export type TypeRouterRoutes = RoutesProps;
export type TypeRouterRoutes = RoutesProps;

// Route

export const ViewRouterRoute = Route;
export const ViewRouterRoute = Route;

export type TypeRouterRoute = RouteProps;
export type TypeRouterRoute = RouteProps;

// Link

export type TypeRouterLink = NLinkProps | DLinkProps;
export type TypeRouterLink = NLinkProps | DLinkProps;

export const ViewRouterLink: React.FC<any> = ({ children, ...rest }) => {
    const LinkComponent = UtilityPlatformMain.OS === "web" ? DLink : NLink;
    const isString = typeof children === "string";
    return (
        <LinkComponent {...rest}>
            {isString ? <Text>{children}</Text> : children}
        </LinkComponent>
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
        isStyleObject ? (style as TypeThemeMain) : {}
    );
    const propsMerged = { ...theme, ...rest, style: stylesheetMerged };
    return (
        <ViewRouterLink {...propsMerged}>
            {/* Text passed through as children must be within a text element.*/}
            {children}
        </ViewRouterLink>
    );
};

// Navigate

export const ExecuteRouterNavigate = Navigate;
export const ExecuteRouterNavigate = Navigate;

export type TypeRouterNavigate = NavigateProps;

// Lost (404 / not found page)
export const ViewRouterLostpage = () => {
    return (
        <ViewPageMain>
            <Text
                style={{
                    margin: 20,
                    fontSize: 30,
                    fontWeight: "800",
                    textAlign: "center",
                }}
            >
                404 Not Found
            </Text>
            <ViewRouterLinkthemed to={"/"}>
                <View style={{flex:1}}>
                    <ViewTypographyTextthemed
                        style={{ fontSize: 24, flex: 1, alignSelf: "center" }}
                    >
                        Home
                    </ViewTypographyTextthemed>
                </View>
            </ViewRouterLinkthemed>
        </ViewPageMain>
    );
};
