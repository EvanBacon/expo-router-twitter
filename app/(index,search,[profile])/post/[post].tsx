import { Stack, useSearchParams } from "expo-router";
import { Text } from "react-native";

import { Tweet } from "../../../components/tweet";
import { posts } from "../../../data";

export default function Post() {
  const { post: id } = useSearchParams<{ post: string }>();

  const post = posts.find((post) => post.id == id);

  if (!post) {
    return <Text>Post not found: {id}</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: "Tweet" }} />
      <Tweet item={post} />
    </>
  );
}
