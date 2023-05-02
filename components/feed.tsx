import { FlatList } from "react-native";

import { Post } from "../data";
import { Tweet } from "./tweet";

export function Feed({ data }: { data: Post[] }) {
  return (
    <FlatList data={data} renderItem={({ item }) => <Tweet item={item} />} />
  );
}
