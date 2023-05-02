import { Tabs } from "expo-router";
import { Icon, IconName } from "../components/icon";

function makeIcon(icon: IconName, activeIcon: IconName) {
  return function (props) {
    return <Icon name={props.focused ? activeIcon : icon} fill={props.color} />;
  };
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(29, 155, 240)",
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Home",
          tabBarIcon: makeIcon("home", "home-active"),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: makeIcon("explore", "explore-active"),
        }}
      />
      <Tabs.Screen
        name="([profile])"
        initialParams={{ profile: "baconbrix" }}
        options={{
          title: "Profile",
          href: "/([profile])/baconbrix",
          tabBarIcon: makeIcon("profile", "profile-active"),
        }}
      />
    </Tabs>
  );
}
