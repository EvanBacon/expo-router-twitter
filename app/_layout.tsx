import { Tabs } from "expo-router";
import { Icon } from "../components/icon";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Home",
          tabBarIcon(props) {
            return (
              <Icon
                name={props.focused ? "home-active" : "home"}
                fill={props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon(props) {
            return (
              <Icon
                name={props.focused ? "explore-active" : "explore"}
                fill={props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="([profile])"
        options={{
          title: "Profile",
          href: "/([profile])/baconbrix",
          tabBarIcon(props) {
            return (
              <Icon
                name={props.focused ? "messages-active" : "messages"}
                fill={props.color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
