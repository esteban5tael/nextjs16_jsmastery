"use client";

import Image from "next/image";

export const ExploreBtn = () => {
    return (
        <button className="mt-7 flex items-center justify-center w-full max-w-md mx-auto py-3 px-6 bg-black text-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg font-medium">
            <span>Explore Events</span>

            <Image
                src="/icons/arrow-down.svg"
                alt="Arrow down"
                width={24}
                height={24}
                className="ml-2 invert dark:invert-0"
            />
        </button>
    );
};
