import React from "react";

import SafeAreaWrapper from "@/components/SafeAreaWrapper/SafeAreaWrapper";
import Header from "@/components/Header";

import Tabs from "./Tabs";
import Posts from "./Posts";
import useHome from "./useHome";

export default function HomeScreen() {
  const { tabs } = useHome();
  return (
    <SafeAreaWrapper>
      <Header />
      <Tabs {...tabs} />
      <Posts />
    </SafeAreaWrapper>
  );
}
