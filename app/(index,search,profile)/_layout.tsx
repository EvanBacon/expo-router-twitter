import { Stack } from "expo-router";
import Head from "expo-router/head";
import { Platform, TouchableOpacity } from "react-native";
import * as Share from "expo-sharing";
import { Icon } from "../../components/icon";

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerRight(props) {
          if (isSharingAvailable()) {
            return <ShareButton {...props} />;
          } else {
            return null;
          }
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

function isSharingAvailable() {
  if (Platform.OS === "web") {
    if (typeof navigator === "undefined") {
      return false;
    }

    return !!navigator.share;
  }
  return true;
}
