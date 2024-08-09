import { Stack } from "expo-router";
import Head from "expo-router/head";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export const unstable_settings = {
  initialRouteName: "(tabs)/(profile)",
};

export default function RootLayout() {
  return (
    <>
      <Head>
        <title>Expo Twitter</title>
        <meta
          name="description"
          content="A Twitter clone built with Expo Router"
        />
        <meta
          property="og:description"
          content="A Twitter clone built with Expo Router"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="expo:handoff" content="true" />
        <meta property="expo:spotlight" content="true" />
      </Head>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="about" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}