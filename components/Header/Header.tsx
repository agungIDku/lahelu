import { View, Pressable, StyleSheet, Text } from "react-native";

import { Menu, Search } from "../icons";

function Header() {
  return (
    <View style={style.container}>
      <View style={style.containerLeft}>
        <Pressable>
          <Menu />
        </Pressable>
        <Text style={style.logo}>LAHELU</Text>
      </View>
      <Pressable>
        <Search />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1a1a1a",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  containerLeft: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  logo: {
    color: "#65a4ec",
    fontWeight: "bold",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 }, // Shadow direction
    textShadowRadius: 5, // Shadow blur radius
  },
});

export default Header;
