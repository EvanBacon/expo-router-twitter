import { Stack } from "expo-router";

import { Feed } from "../../components/feed";
import { posts } from "../../data";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <Feed contentInsetAdjustmentBehavior="automatic" data={posts} />
    </>
  );
}
