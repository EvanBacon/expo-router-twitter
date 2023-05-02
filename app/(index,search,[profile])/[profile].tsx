import { Stack, useSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { Feed } from "../../components/feed";
import { posts, users } from "../../data";

export default function Profile() {
  const { profile } = useSearchParams<{ profile: string }>();
  const user = users.find((user) => user.user === profile);

  if (!user) {
    return <Text>User not found: {profile}</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: "Profile" }} />
      <View style={{ paddingHorizontal: 24, paddingTop: 24 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image
            source={{ uri: user.image }}
            style={{ width: 128, height: 128, borderRadius: 128 / 2 }}
          />
          <Text style={{ fontSize: 64, fontWeight: "bold" }}>{user.user}</Text>
        </View>
        <Feed data={posts.filter((post) => post.user.user === profile)} />
      </View>
    </>
  );
}
