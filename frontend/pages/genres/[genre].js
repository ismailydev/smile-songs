import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "@/features/songsSlice";

import Song from "@/components/Song";
import Spinner from "@/components/Spinner";

export default function SongDetails() {
    const { genre } = useRouter().query;

    const songs = useSelector((state) => state.songs);
    const songsByGenre = songs?.filter((song) => song.genre === genre);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>smile-songs | {genre} songs</title>
            </Head>
            <h2 className="py-8 text-center text-3xl">{genre} Songs</h2>
            <div className="">
                {songsByGenre ? (
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
                        {songsByGenre.map((song) => (
                            <Song key={song.id} song={song} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full min-h-[85vh] flex items-center justify-center">
                        <Spinner />
                    </div>
                )}
            </div>
        </>
    );
}
