import { Stack } from "expo-router";
import { View } from "react-native";

import { Feed } from "../../components/feed";
import { posts } from "../../data";

export default function Search() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Search" }} />
      <Feed data={posts} />
    </View>
  );
}
