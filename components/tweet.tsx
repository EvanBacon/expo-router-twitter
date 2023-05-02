import { Link, useSegments } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { Post } from "../data";

type Group<T extends string> = `(${T})`;

type SharedSegment = Group<"index"> | Group<"search"> | Group<"profile">;

export function Tweet({ item }: { item: Post }) {
  const [segment] = useSegments() as [SharedSegment];
  return (
    <Link href={`/${segment}/post/${item.id}`} asChild>
      <Pressable>
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
                backgroundColor: "red",
              },
              pressed && {
                backgroundColor: "blue",
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
            <View style={{ gap: 4, flex: 1 }}>
              <Link href={`/${segment}/${item.user.user}`} asChild>
                <Pressable>
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

              <Text>{item.post}</Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
