import { FlatList } from "react-native";

import { Post } from "../data";
import { Tweet } from "./tweet";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";

export function Feed({
  data,
  ...props
}: { data: Post[] } & Partial<FlatList["props"]>) {
  const ref = useRef<FlatList>(null);
  useScrollToTop(ref);
  return (
    <FlatList
      ref={ref}
      style={{ flex: 1 }}
      {...props}
      data={data}
      renderItem={({ item }) => <Tweet item={item} />}
    />
  );
}
