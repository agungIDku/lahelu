import Svg, { Path } from "react-native-svg";

interface MenuIconInterface {
  color?: string;
}

function Menu({ color = "#e4e4e4" }: MenuIconInterface) {
  return (
    <Svg
      fill={color}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </Svg>
  );
}

export default Menu;
