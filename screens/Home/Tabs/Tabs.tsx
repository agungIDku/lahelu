import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface TabsInterface {
  tabActiveIndex: number;
  setTabActiveIndex: (payload: number) => void;
}

function Tabs({ tabActiveIndex, setTabActiveIndex }: TabsInterface) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setTabActiveIndex(0)}
        style={[styles.item, tabActiveIndex === 0 && styles.itemActive]}
      >
        <Text
          style={[styles.label, tabActiveIndex === 0 && styles.labelActive]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabActiveIndex(1)}
        style={[styles.item, tabActiveIndex === 1 && styles.itemActive]}
      >
        <Text
          style={[styles.label, tabActiveIndex === 1 && styles.labelActive]}
        >
          Fresh
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTabActiveIndex(2)}
        style={[styles.item, tabActiveIndex === 2 && styles.itemActive]}
      >
        <Text
          style={[styles.label, tabActiveIndex === 2 && styles.labelActive]}
        >
          Trending
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    borderTopColor: "#0c0c0c",
    borderBottomColor: "#0c0c0c",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#65a4ec",
  },
  label: {
    color: "#e4e4e4",
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 12,
  },
  labelActive: {
    color: "#65a4ec",
  },
});

export default Tabs;
