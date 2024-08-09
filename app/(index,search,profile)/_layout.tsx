import { Stack, useRouter } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";
import { Icon } from "@/components/icon";

export const unstable_settings = {
  index: {
    initialRouteName: "index",
  },
  profile: {
    initialRouteName: "profile",
  },
  search: {
    initialRouteName: "search",
  },
};

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerRight: (props) => <ShareButton {...props} />,
      }}
    />
  );
}

function ShareButton(props) {
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        router.push("/about");
      }}
    >
      <Icon name="share" fill={props.tintColor} width={24} height={24} />
    </TouchableOpacity>
  );
}

function isSharingAvailable() {
  if (Platform.OS === "web") {
    if (typeof navigator === "undefined") {
      return false;
    }

    return !!navigator.share;
  }
  return true;
}