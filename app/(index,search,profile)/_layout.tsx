import { Stack } from "expo-router";
import Head from "expo-router/head";
import { Share, TouchableOpacity } from "react-native";

import { Icon } from "../../components/icon";

export default function DynamicLayout({ segment }) {
  // Do dynamic settings using `segment`.
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerRight(props) {
          return <ShareButton {...props} />;
        },
      }}
    />
  );
}

function safeLocation() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.toString();
}

// const useLink = () => ({ url: window.location.toString() });
const useLink = Head.useLink
  ? Head.useLink
  : () => ({
      url: safeLocation(),
    });

function ShareButton(props) {
  const link = useLink?.();
  const url = link?.url ?? safeLocation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        Share.share({
          url,
        });
      }}
    >
      <Icon name="share" fill={props.tintColor} width={24} height={24} />
    </TouchableOpacity>
  );
}
