import React from "react";

const icons = require.context("../assets/icons");

export type IconName =
  | "profile-active"
  | "profile"
  | "explore-active"
  | "explore"
  | "home-active"
  | "home";

export function Icon({
  name,
  ...props
}: {
  name: IconName;
  fill: string;
  style?: any;
  width: number;
  height: number;
}) {
  const Comp = React.useMemo(() => {
    const imp = icons(`./${name}.svg`);
    if (!imp) {
      throw new Error(
        `Icon not found: ${name}. Options: ${icons.keys().join(", ")}}`
      );
    }
    return imp.default;
  }, [name]);
  return <Comp {...props} color={props.fill} />;
}
