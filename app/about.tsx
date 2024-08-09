import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function About() {
  return (
    <>
      <Stack.Screen options={{ title: "About" }} />
      <View>
        <Text>About</Text>
      </View>
    </>
  );
}