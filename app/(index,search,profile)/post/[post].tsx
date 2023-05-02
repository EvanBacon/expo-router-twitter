import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Tweet } from "../../../components/tweet";
import { posts } from "../../../data";

export async function generateStaticParams() {
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
      <Stack.Screen options={{ title: "Tweet" }} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Tweet item={post} />
      </ScrollView>
    </>
  );
}
