import Svg, { Path } from "react-native-svg";

interface OtherIconInterface {
  color?: string;
}

function Other({ color = "#e4e4e4" }: OtherIconInterface) {
  return (
    <Svg
      fill={color}
      stroke-width="0"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Svg>
  );
}

export default Other;
