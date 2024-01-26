"use client";
import { useRouter } from "next/router";

function TopicRoute() {
    const router = useRouter();

    return (
        <main>
            <div>{router.query.route}</div>
        </main>
    );
};

export default TopicRoute;