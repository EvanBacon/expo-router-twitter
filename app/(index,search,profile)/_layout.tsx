import { Stack } from "expo-router";

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
