import { View, StyleSheet, Text } from "react-native";

interface CampaignInterface {
  icon: React.ReactNode;
  content: React.ReactNode;
}

function Campaign({ icon, content }: CampaignInterface) {
  return (
    <View style={styles.container}>
      <View>
        <Text>{icon}</Text>
      </View>
      <View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: "#65a4ec",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#2c3942",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  content: {
    fontWeight: "700",
    color: "#e4e4e4",
  },
});

export default Campaign;
