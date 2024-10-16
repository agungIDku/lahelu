import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeAreaWrapperInterface {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperInterface> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
  },
});

export default SafeAreaWrapper;
