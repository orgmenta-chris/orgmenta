// Scalable Vector Graphics.

import Svg, { SvgProps, Path, PathProps, G, GProps } from "react-native-svg";

// Meta

/* Transform="rotate(45 50 50)" performs a rotation transformation on the SVG element it's applied to. The numbers inside the parentheses specify the parameters of the rotation:
  45: This is the angle of rotation in degrees. Positive values rotate the element counter-clockwise, and negative values rotate it clockwise.
  50: The x-coordinate of the point about which the object is rotated.
  50: The y-coordinate of the point about which the object is rotated.
  So, in this case, the path will rotate 45 degrees around the point (50, 50). 
*/

// In 'd="M58,15 L48,35 L58,15 L68,35 L58,15", "Move-to" = (M) and "Line-to" = (L)

// Main

export type TypeSvgMain = SvgProps;
export const ViewSvgMain = Svg;

// Path
export type TypeSvgPath = PathProps;
export const ViewSvgPath = Path;

// Group
export type TypeSvgGroup = GProps;
export const ViewSvgGroup = G;

// Arrow
export type TypeSvgArrowmain = any; // todo, when props can be passed through
export const ViewSvgArrowmain = () => {
  return (
    <Svg
      width="100"
      height="100"
      style={{ alignSelf: "center" }}
      viewBox="0 0 100 100"
    >
      <ViewSvgArrowhead />
      <ViewSvgArrowline />
    </Svg>
  );
};

export type TypeSvgArrowhead = any; // todo, when props can be passed through
export const ViewSvgArrowhead = () => {
  return (
    <Path
      d="M80,360 C35,260 35,140 58,15"
      stroke="#22b2e4"
      strokeWidth="5"
      fill="none"
    />
  );
};

export type TypeSvgArrowline = any; // todo, when props can be passed through
export const ViewSvgArrowline = () => {
  return (
    <Path
      d="M58,15 L48,35 L58,15 L68,35 L58,15"
      stroke="#22b2e4"
      strokeWidth="5"
      fill="#22b2e4"
      transform="rotate(5 50 10)"
    />
  );
};
