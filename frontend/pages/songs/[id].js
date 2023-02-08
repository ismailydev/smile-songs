import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
    MusicalNoteIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import Spinner from "@/components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong, getSong } from "@/features/songsSlice";
import toast from "react-hot-toast";

export default function SongDetails() {
    const router = useRouter();
    const { id } = router.query;

    const song = useSelector((state) => state.song);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSong(id));
    }, []);

    const handleDeleteSong = (id) => {
        dispatch(deleteSong(id));
        toast.success("Song deleted successfully");
        router.push("/");
    };

    if (!song?.artist) {
        return (
            <div className="w-full min-h-[85vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>smile-songs | song</title>
            </Head>
            {song && (
                <div className="min-h-[85vh] grid items-center grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex bg-black items-center justify-center rounded-3xl w-full h-72 opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out">
                        <MusicalNoteIcon className="h-40" />
                    </div>
                    <div className="relative flex flex-col gap-5 text-2xl">
                        <div className="flex gap-2 items-center">
                            <p className="w-32 text-slate-400">Title:</p>
                            <h1 className="">{song?.title}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="w-32 text-slate-400">Artist:</p>
                            <div className="flex items-center gap-4">
                                {song.artist && (
                                    <Image
                                        src={`https://ui-avatars.com/api/?rounded=true&background=random&name=${
                                            song?.artist?.split(" ")[0]
                                        }+${song?.artist?.split(" ")[1]}`}
                                        width={40}
                                        height={40}
                                        alt={song?.artist || "artist"}
                                    />
                                )}
                                <h2 className="text-xl">{song?.artist}</h2>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="w-32 text-slate-400">Album:</p>
                            <h4 className="text-xl">{song?.album}</h4>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="w-32 text-slate-400">Genre:</p>
                            <Link
                                href={`/genres/${song?.genre}`}
                                className="bg-slate-800 w-20 py-2 rounded-xl cursor-pointer hover:bg-slate-900 transition-colors duration-300 ease-in-out"
                            >
                                <p className="text-center text-xs text-slate-200">
                                    {song?.genre}
                                </p>
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 flex gap-2 items-center justify-center">
                            <Link
                                href={`/addnew?id=${id}`}
                                className="flex gap-4"
                            >
                                <button className="text-sm flex gap-2 items-center">
                                    <PencilIcon className="w-8 h-8 p-2 rounded-xl bg-black text-slate-300" />
                                </button>
                            </Link>

                            <button
                                onClick={() => handleDeleteSong(id)}
                                className="text-sm flex gap-2 items-center"
                            >
                                <TrashIcon className="w-8 h-8 p-2 rounded-xl bg-black text-red-500" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
