import { Link, Stack } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Feed } from "../../components/feed";
import { posts } from "../../data";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Home" }} />
      <Feed data={posts} />
    </View>
  );
}
