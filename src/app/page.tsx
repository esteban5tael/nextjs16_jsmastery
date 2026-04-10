import LightRays from "@/components/ui/LightRays";
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
            <section>
                <h1 className="text-center">
                    The Hub for Every Dev <br />
                    Event You Can't Miss
                </h1>
                <p className="text-center mt-5">
                    Hackathons, Meetups and Conferences. Discover,
                    Share, and Connect with Dev Events Worldwide.
                </p>
            </section>
        </>
    );
}
