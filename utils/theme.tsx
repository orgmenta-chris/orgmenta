// A 'theme' is the visual style and design configuration that defines the look and feel of a user interface.

// Meta

export const metaThemeInfo = {
    description: `A 'theme' is the visual style and design configuration that defines the look and feel of a user interface.`,
    requestThemeMain: `A function to get the theme`,
    useThemeToken: `A hook for accessing the theme`,
    TypeThemeMain: `Record<K, T> is a utility type that constructs an object type with keys of type K and values of type T. Useful for describing objects that have a set of properties where the property names are not fixed but the type of each value is known.`,
};

// Main

export type TypeThemeMain = Record<string, any>;
// Record<K, T> is a utility type that constructs an object type with keys of type K and values of type T.
// Useful for describing objects that have a set of properties where the property names are not fixed but the type of each value is known.
//

// Token

export const useThemeToken = (component_name: string) => {
    const theme: TypeThemeMain = {
        text: { style: { color: `white` } },
        heading: {
            style: { color: `white`, fontSize: 30, alignSelf: "center" },
        },
        link: { style: { textDecoration: `none`, color: `white` } },
        default: { style: {} },
    };
    if (theme[component_name]) {
        return theme[component_name];
    } else {
        return theme.default;
    }
};

// Temp - not final theme structure

export const objectThemeDefault = {
    colors: [
        {
            hex: `#FFFFFF`, // WHITE
            hsl: `(0, 0%, 100%)`,
            rgb: `(255, 255, 255)`,
        },
        {
            hex: "#9cd7f2",
            hsl: "(199,77%,78%)",
            rgb: "(156,215,242)",
        },
        {
            hex: "#65c8ee",
            hsl: "(197,80%,66%)",
            rgb: "(101,200,238)",
        },
        {
            hex: "#22b2e4",
            hsl: "(195,78%,51%)",
            rgb: "(34,178,228)",
        },
        {
            hex: "#1b9dd8",
            hsl: "(199,78%,48%)",
            rgb: "(27,157,216)",
        },
        {
            hex: "#127ab9",
            hsl: "(203,82%,40%)",
            rgb: "(18,122,185)",
        },
        {
            hex: "#218ccb",
            hsl: "(202,72%,46%)",
            rgb: "(33,140,203)",
        },
        {
            hex: "#176596",
            hsl: "(203,73%,34%)",
            rgb: "(23,101,150)",
        },
        {
            hex: "#0c4a73",
            hsl: "(204,81%,25%)",
            rgb: "(12,74,115)",
        },
    ],
};

// Also temp - this is the structure that the theme tokens will probably take. Example data only.

const tokens = {
    color: {
        base: {
            orange: { value: "#ff9b00" },
            purple: { value: "#5f259f" },
            blue: { value: "#0096e6" },
            red: { value: "#ff0000" },
            white: { value: "#ffffff" },
            lightGray: { value: "#b2b2b2" },
            gray: { value: "#999999" },
            darkGray: { value: "#333333" },
            black: { value: "#000000" },
        },
        text: {
            brand1: { value: "{color.base.orange}" },
            brand2: { value: "{color.base.purple}" },
            interaction: { value: "{color.base.blue}" },
            error: { value: "{color.base.red}" },
            inverse: { value: "{color.base.white}" },
            default: { value: "{color.base.darkGray}" },
        },
        background: {
            brand1: { value: "{color.base.orange}" },
            brand2: { value: "{color.base.purple}" },
            interaction: { value: "{color.base.blue}" },
            default: { value: "{color.base.white}" },
            alt: { value: "#{color.base.lightGray}" },
            inverse: { value: "{color.base.black}" },
        },
        icon: {
            inverse: { value: "{color.base.white}" },
            default: { value: "{color.base.gray}" },
            interaction: { value: "{color.base.blue}" },
        },
    },
    layout: {
        media: {
            tablet: { value: "640" },
            desktop: { value: "940" },
            largeDesktop: { value: "1200" },
        },
        zIndex: {
            bottomlessPit: { value: "-9999" },
            dropdown: { value: "200" },
            sticky: { value: "400" },
            popover: { value: "600" },
            default: { value: "1" },
            overlay: { value: "800" },
            modal: { value: "1000" },
            snackbar: { value: "1200" },
            spinner: { value: "1500" },
            overTheMoon: { value: "9999" },
        },
        size: {
            font: {
                sm1: { value: "12px" },
                sm2: { value: "14px" },
                sm3: { value: "16px" },
                sm4: { value: "18px" },
                lg1: { value: "24px" },
                lg2: { value: "32px" },
                lg3: { value: "40px" },
                lg4: { value: "48px" },
            },
        },
    },
};
