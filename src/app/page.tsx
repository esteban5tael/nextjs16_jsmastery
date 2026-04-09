import {
    generateAsyncTitle,
    generateAsyncDescription,
} from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: await generateAsyncTitle(),
        description: await generateAsyncDescription(),
    };
}

export default function Page() {
    return (
        <>
            <main>
                <h1></h1>
            </main>
        </>
    );
}
