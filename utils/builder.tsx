// Allow client to create corporate website / app / custom internal tools.

import { ViewContainerRow, ViewContainerStatic } from "./container";
import { ViewPageMain } from "./page";
import {
  ViewTypographyHeading,
  ViewTypographySubheading,
  ViewTypographyText,
} from "./typography";

// PAGE (todo)

export const metaBuilderPage = () => {
  return {
    description: "A complete page with all builder functionality",
  };
};

export const ViewBuilderPage = () => {
  return (
    <ViewPageMain>
      <ViewTypographyHeading>Builder</ViewTypographyHeading>
      <ViewContainerRow>
        <ViewBuilderWizard />
      </ViewContainerRow>
    </ViewPageMain>
  );
};

// WIZARD (todo)

export const metaBuilderWizard = () => {
  return {
    description: "A step-through wizard for creating an app/website",
  };
};

// abstract to wizard.tsx
export const ViewBuilderWizard = () => {
  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>Wizard</ViewTypographySubheading>
      <ViewTypographyText>todo</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// OPTIONS (todo)

export const mapBuilderOptions = {
  declarationsArray: {
    description: "A list of the enabled package declarations",
    valueDefault: [],
    valueNew: null,
    valueSaved: null,
  },
  appName: {
    valueDefault: "My App",
    valueNew: null,
    valueSaved: null,
  },
  robotsTxt: {
    // llm, crawlers, etc. options here
  },
  headerEnabled: {
    valueDefault: false,
    valueNew: null,
    valueSaved: null,
    options: [true, false],
  },
  pagesArray: {
    valueDefault: [],
    valueNew: null,
    valueSaved: null,
  },
  stateConfig: {
    valueDefault: "zustand",
    valueNew: null,
    valueSaved: null,
    options: [], //get these from state.tsx instead of setting manually.
  },
  cacheConfig: {
    valueDefault: null,
    valueNew: null,
    valueSaved: null,
    options: [], //get these from cache.tsx instead of setting manually.
  },
  localConfig: {
    valueDefault: "mmkv",
    valueNew: null,
    valueSaved: null,
    options: ["mmkv", "asyncstorage"], //get these from local.tsx instead of setting manually.
  },
  edgeConfig: {
    valueDefault: "supabase",
    valueNew: null,
    valueSaved: null,
    options: [], //get these from edge.tsx instead of setting manually.
  },
  remoteConfig: {
    valueDefault: "supabase",
    valueNew: null,
    valueSaved: null,
    options: [], //get these from remote.tsx instead of setting manually.
  },
  deployConfig: {
    valueDefault: "netlify",
    valueNew: null,
    valueSaved: null,
  },
};

export const arrayBuilderOptions = Object.keys(mapBuilderOptions);
