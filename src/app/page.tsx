import { ExploreBtn } from "@/components/HomePage";
import { EventCard } from "@/components/ui";

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

const events: {
    title: string;
    image: string;
    url: string;
}[] = [
    {
        title: "Event 1",
        image: "/images/event1.png",
        url: "/events/nextjs-conf-2023",
    },
    {
        title: "Event 2",
        image: "/images/event2.png",
        url: "/events/nextjs-conf-2023",
    },
    
];

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

                <ExploreBtn />

                <div className="mt-20 space-y-7">
                    <h3>Featured Events</h3>
                    <ul className="events">
                        {events.map((event) => (
                            <li key={event.title}>
                                <EventCard {...event}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
