// Placeholder for pressable shared/enhanced functionality & styling.
// Note: react-native button and touchable opacity are no longer supported, please ensure Pressable is used

import { Pressable, PressableProps } from "react-native";

// PRESSABLE

// The main pressable component
// export const ViewButtonPressable = Pressable;

// Provide default styling if none specified (TODO: use theme proper.)
export const ViewButtonPressable = ({
  disabled,
  children,
  style,
  ...rest
}: any) => {
  style = style || { backgroundColor: "lightblue", margin: 2, padding: 5 };
  return (
    <Pressable
      style={style}
      disabled={disabled} // hook 'disabled' prop up to styles once theming is in place
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export type TypeButtonPressable = PressableProps;
