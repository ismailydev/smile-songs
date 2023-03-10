import Head from "next/head";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Song from "@/components/Song";
import RecentSong from "@/components/RecentSong";

import { getSongs } from "../features/songsSlice";
import Spinner from "@/components/Spinner";

export default function Home() {
    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>smile-songs | songs</title>
            </Head>
            <main className="py-4 pb-12">
                {songs ? (
                    <>
                        <h2 className="py-8">Trending Now</h2>
                        <div className="grid grid-cols-2 md:flex gap-4">
                            {songs
                                ?.slice(0, 5)
                                .reverse()
                                .map((song) => (
                                    <RecentSong key={song.id} song={song} />
                                ))}
                        </div>
                        <h2 className="py-8">Recently Added</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {songs?.map((song) => (
                                <Song key={song.id} song={song} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="w-full min-h-[85vh] flex items-center justify-center">
                        <Spinner />
                    </div>
                )}
            </main>
        </>
    );
}
