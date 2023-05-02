import { Link, useSegments } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { Post } from "../data";

export function Tweet({ item }: { item: Post }) {
  const [segment] = useSegments();
  return (
    <Link href={`/${segment}/post/${item.id}`} asChild>
      <Pressable>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            gap: 16,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        >
          <Image
            source={{ uri: item.user.image }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
            }}
          />
          <View style={{ gap: 4, flex: 1 }}>
            <Link href={`/${segment}/${item.user.user}`}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                @{item.user.user}
              </Text>
            </Link>

            <Text>{item.post}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
