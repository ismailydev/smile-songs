import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { deleteSong } from "@/features/songsSlice";

export default function Song({ song }) {
    const { _id: id, title, artist, album, genre } = song;

    return (
        <div className="relative">
            <Link href={`/songs/${id}`}>
                <div className="relative bg-black p-5 flex items-center justify-between rounded-3xl transition-colors duration-300 ease-in-out hover:bg-slate-300 hover:text-black cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                                src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${
                                    artist.split(" ")[0]
                                }+${artist.split(" ")[1]}`}
                                width={100}
                                height={100}
                                alt={artist}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-sm">{title}</h4>
                            <p className="text-sm text-slate-600">{artist}</p>
                        </div>
                    </div>
                    <p className="text-xs">{album}</p>
                </div>
            </Link>
            <div className="absolute right-0 -bottom-3 flex gap-2 transition-opacity duration-300 ease-in-out">
                <Link
                    href={`/genres/${genre}`}
                    className="bg-slate-800 w-20 py-2 rounded-xl cursor-pointer hover:bg-slate-900 transition-colors duration-300 ease-in-out"
                >
                    <p className="text-center text-[10px] text-slate-200 lowercase">
                        {genre}
                    </p>
                </Link>
            </div>
        </div>
    );
}
