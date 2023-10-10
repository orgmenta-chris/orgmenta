import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import JSONTree from "react-native-json-tree";

// CONTAINER

// A compilation of Json views
export const ViewJsonContainer = ({ data }: any) => {
  return (
    <ViewContainerStatic style={{flexDirection:'column'}}>
      <ViewJsonMain data={data}/>
      <ViewJsonControls/>
    </ViewContainerStatic>
  )
}

// MAIN

// The primary Json View
export const ViewJsonMain = ({ data }: any) => {
  const theme = {
    scheme: "monokai",
    author: "wimer hazenberg (http://www.monokai.nl)",
    base00: "#272822",
    base01: "#383830",
    base02: "#49483e",
    base03: "#75715e",
    base04: "#a59f85",
    base05: "#f8f8f2",
    base06: "#f5f4f1",
    base07: "#f9f8f5",
    base08: "#f92672",
    base09: "#fd971f",
    base0A: "#f4bf75",
    base0B: "#a6e22e",
    base0C: "#a1efe4",
    base0D: "#66d9ef",
    base0E: "#ae81ff",
    base0F: "#cc6633",
  };
  return (
    <JSONTree
      data={data}
      theme={{
        extend: theme,
        // underline keys for literal values
        valueLabel: {
          textDecoration: "underline",
        },
        // switch key for objects to uppercase when object is expanded.
        // `nestedNodeLabel` receives additional arguments `expanded` and `keyPath`
        nestedNodeLabel: ({ style }, nodeType, expanded) => ({
          style: {
            ...style,
            textTransform: expanded ? "uppercase" : (style as any).textTransform,
          },
        }),
      }}
      invertTheme={true}
    />
  );
};

// CONTROLS

export const ViewJsonControls = ({ data }: any) => {
  return (
    <ViewContainerStatic style={{ height: 40 }}>
      <ViewButtonPressable onPress={() => console.log("todo")}>
        <ViewTypographyText
          style={{
            color: "blue",
            textDecorationStyle: "solid",
            textAlign: "center",
          }}
        >
          Expand/Collapse All Button (todo)
        </ViewTypographyText>
      </ViewButtonPressable>
    </ViewContainerStatic>
  );
};

// EXAMPLE

export const objectJsonExample = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
  email: "john.doe@example.com",
  isEmployed: true,
  hobbies: ["Reading", "Hiking"],
  pets: [
    {
      name: "Fido",
      species: "Dog",
      age: 5,
    },
    {
      name: "Whiskers",
      species: "Cat",
      age: 3,
    },
  ],
  education: [
    {
      degree: "Bachelor's",
      major: "Computer Science",
      university: "Example University",
      year: 2015,
    },
    {
      degree: "Master's",
      major: "Business Administration",
      university: "Another University",
      year: 2018,
    },
  ],
  // immutable: ImmutableMap({ key: "value" }),
};
