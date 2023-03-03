import Image from "next/image";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";

export default function RecentSongs({ song }) {
    const { _id: id, title, artist, album } = song;

    return (
        <div
            key={id}
            className="relative shadow-sm rounded-l-none shadow-white/5 rounded-3xl w-full md:w-1/5 h-40 cursor-pointer opacity-75 hover:opacity-100 hover:shadow-white/10 transition-all duration-300 ease-in-out"
        >
            <MusicalNoteIcon className="absolute w-full h-20 top-5" />
            <div className="z-20 absolute right-0 bottom-0 w-10 h-10">
                <Image
                    src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${
                        artist.split(" ")[0]
                    }+${artist.split(" ")[1]}`}
                    width={100}
                    height={100}
                    alt={artist}
                />
            </div>
            <p className="absolute left-0 bottom-0 text-xs bg-black rounded-r-full h-10 flex items-center pl-4 w-full">
                {title}
            </p>
        </div>
    );
}
