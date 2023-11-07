import "react-native-url-polyfill/auto";
import { usePlatformCssweb } from "./platform";
import { ViewQueryerProvider } from "./queryer";
import { ViewRouterProvider } from "./router";
import { ViewStatusbarMain } from "./statusbar";
import { ViewWindowContainer } from "./window";

export const ViewAppContainer = ({ children }: any) => {
  usePlatformCssweb(); // shim to add css to web
  return (
    <ViewRouterProvider>
      <ViewQueryerProvider>
        <ViewStatusbarMain />
        <ViewWindowContainer>{children}</ViewWindowContainer>
      </ViewQueryerProvider>
    </ViewRouterProvider>
  );
};
