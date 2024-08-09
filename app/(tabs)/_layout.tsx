import { Tabs, useRouter } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";
import { Icon, IconName } from "@/components/icon";


function makeIcon(icon: IconName, activeIcon: IconName) {
  return function (props: { size: number; color: string; focused: boolean }) {
    return (
      <Icon
        width={props.size}
        height={props.size}
        name={props.focused ? activeIcon : icon}
        fill={props.color}
      />
    );
  };
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(29, 155, 240)",
        headerLargeTitle: true,
        headerRight: (props) => <ShareButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: makeIcon("home", "home-active"),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: makeIcon("explore", "explore-active"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: makeIcon("profile", "profile-active"),
        }}
      />
    </Tabs>
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