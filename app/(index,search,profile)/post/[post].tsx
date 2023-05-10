import { Stack, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Tweet } from "@/components/tweet";
import { posts } from "@/data";

// Run in Node.js environments at build time to generate a list of
// pages that should be statically generated.
export function generateStaticParams() {
  return posts.map(({ id }) => ({ post: String(id) }));
}

export default function Post() {
  const { post: id } = useLocalSearchParams<{ post: string }>();

  const post = posts.find((post) => post.id == id);

  if (!post) {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Post not found: {id}</Text>
      </ScrollView>
    );
  }

  return (
    <>
      <Head>
        <title>{post.user.name} | Post | Expo Twitter</title>
        <meta name="description" content={post.post} />
        <meta property="og:description" content={post.post} />
        <meta property="og:image" content={post.user.image} />
      </Head>
      <Stack.Screen options={{ title: "Tweet" }} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Tweet item={post} />
      </ScrollView>
    </>
  );
}
