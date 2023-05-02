import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Feed } from "../../components/feed";
import { posts, users } from "../../data";

export default function Profile() {
  const { profile } = useLocalSearchParams<{ profile: string }>();
  return <ProfileScreen profile={profile} />;
}

export function ProfileScreen({ profile }: { profile: string }) {
  const user = users.find((user) => user.user === profile);

  if (!user) {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>User not found: {profile}</Text>
      </ScrollView>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: "Profile" }} />

      <Feed
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1 }}
        ListHeaderComponent={() => (
          <View
            style={{
              flex: 1,
              paddingHorizontal: 18,
              gap: 8,
              paddingTop: 24,
            }}
          >
            <Image
              source={{ uri: user.image }}
              style={{ width: 64, height: 64, borderRadius: 64 / 2 }}
            />
            <View>
              <Text style={{ fontSize: 32, fontWeight: "bold" }}>
                {user.name}
              </Text>
              <Text style={{ fontSize: 16, opacity: 0.6 }}>@{user.user}</Text>
            </View>
            <Text style={{ fontSize: 16 }}>{user.bio}</Text>
            <Link
              style={{
                color: "dodgerblue",
              }}
              href={user.url as any}
            >
              {user.url.replace(/\/$/, "").replace(/^https?:\/\//, "")}
            </Link>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {user.followers} <Text style={{ opacity: 0.6 }}>Followers</Text>
            </Text>
          </View>
        )}
        data={posts.filter((post) => post.user.user === profile)}
      />
    </>
  );
}
