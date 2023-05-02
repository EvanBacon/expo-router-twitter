import { Stack } from "expo-router";

export const unstable_settings = {
  profile: {
    initialRouteName: "profile",
  },
};

export default function DynamicLayout({ segment }) {
  // Do dynamic settings using `segment`.
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
      }}
    />
  );
}
