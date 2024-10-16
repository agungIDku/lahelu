import Svg, { Path } from "react-native-svg";

interface PlayIconInterface {
  color?: string;
}

function Play({ color = "#e4e4e4" }: PlayIconInterface) {
  return (
    <Svg
      fill={color}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <Path d="M7 6v12l10-6z"></Path>
    </Svg>
  );
}

export default Play;
