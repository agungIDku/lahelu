import { SafeAreaView, Text, View } from "react-native";

interface ScreenPlaceholderInterface {
  screen: string;
}

function ScreenPlaceholder({ screen }: ScreenPlaceholderInterface) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{screen}</Text>
    </SafeAreaView>
  );
}

export default ScreenPlaceholder;
