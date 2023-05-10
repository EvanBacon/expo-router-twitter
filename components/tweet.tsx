import { Link, useRouter, useSegments } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { Post } from "@/data";

type Group<T extends string> = `(${T})`;

type SharedSegment = Group<"index"> | Group<"search"> | Group<"profile">;

export function Tweet({ item }: { item: Post }) {
  const [segment] = useSegments() as [SharedSegment];
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push(`/${segment}/post/${item.id}`);
      }}
    >
      {({ hovered, pressed }) => (
        <View
          style={[
            {
              flexDirection: "row",
              padding: 16,
              gap: 16,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              transitionDuration: "200ms",
            },
            hovered && {
              backgroundColor: "#ddd",
            },
            pressed && {
              backgroundColor: "#ccc",
            },
          ]}
        >
          <Image
            source={{ uri: item.user.image }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
            }}
          />
          <View style={{ gap: 4, flex: 1, alignItems: "flex-start" }}>
            <Link href={`/${segment}/${item.user.user}`} asChild>
              <Pressable style={{ alignItems: "flex-start" }}>
                {({ hovered }) => (
                  <Text
                    style={[
                      { fontWeight: "bold", fontSize: 16 },
                      hovered && { textDecorationLine: "underline" },
                    ]}
                  >
                    @{item.user.user}
                  </Text>
                )}
              </Pressable>
            </Link>

            <Text selectable>{item.post}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
}
