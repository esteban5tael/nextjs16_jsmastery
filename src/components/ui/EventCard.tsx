import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    image: string;
    url: string;
}

export const EventCard = ({ title, image, url }: Props) => {
    return (
        <>
            <Link href={url} id="event-card">
                <Image
                    src={image}
                    alt={title}
                    width={410}
                    height={300}
                    className="poster"
                />
                <p className="title">{title}</p>
            </Link>
        </>
    );
};
