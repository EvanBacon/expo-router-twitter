import { Stack } from "expo-router";
import Head from "expo-router/head";

import { Feed } from "../../components/feed";
import { posts } from "../../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Stack.Screen options={{ title: "Home" }} />
      <Feed contentInsetAdjustmentBehavior="automatic" data={posts} />
    </>
  );
}
