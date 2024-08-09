import { Stack, usePathname } from "expo-router";
import Head from "expo-router/head";

import { Feed } from "@/components/feed";
import { posts } from "@/data";

export default function Home() {
    const pathname = usePathname();

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Stack.Screen options={{ title: pathname }} />
            <Feed contentInsetAdjustmentBehavior="automatic" data={posts} />
        </>
    );
}