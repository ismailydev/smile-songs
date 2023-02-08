import Head from "next/head";
import { getSongs } from "@/features/songsSlice";
import { count, countTypes, getAlbumCount } from "@/utils";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "@/components/Spinner";

export default function Stats() {
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");

    const songs = useSelector((state) => state.songs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>smile-songs | stats</title>
            </Head>
            <main className="py-4 pb-12">
                {songs ? (
                    <>
                        <h2 className="pt-8 text-center text-3xl text-white uppercase">
                            Stats
                        </h2>
                        {songs && (
                            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-32">
                                <div className="py-8">
                                    <h3 className="pb-8 text-xl">
                                        General Stats
                                    </h3>
                                    <div className="flex gap-8">
                                        <p className="pb-2 w-52 text-white/75">
                                            Total number of songs:
                                        </p>
                                        <span className="text-white">
                                            {songs.length}
                                        </span>
                                    </div>
                                    <div className="flex gap-8">
                                        <p className="pb-2 w-52 text-white/75">
                                            Total number of artists:
                                        </p>
                                        <span className="text-white">
                                            {countTypes(songs, "artist").length}
                                        </span>
                                    </div>
                                    <div className="flex gap-8">
                                        <p className="pb-2 w-52 text-white/75">
                                            Total number of albums:
                                        </p>
                                        <span className="text-white">
                                            {countTypes(songs, "album").length}
                                        </span>
                                    </div>
                                    <div className="flex gap-8">
                                        <p className="pb-2 w-52 text-white/75">
                                            Total number of genres:
                                        </p>
                                        <span className="text-white">
                                            {countTypes(songs, "genre").length}
                                        </span>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <h3 className="pb-8 text-xl">
                                        Specific Stats
                                    </h3>
                                    <div className="pb-8">
                                        <div className="flex">
                                            <h3 className="mr-4 text-xl inline w-24">
                                                By Genre
                                            </h3>
                                            <select
                                                name="genre"
                                                className="outline-none text-black rounded-lg py-1 px-4 w-40 placeholder:text-slate-500"
                                                value={genre}
                                                onChange={(e) =>
                                                    setGenre(e.target.value)
                                                }
                                                required
                                            >
                                                <option>select genre</option>
                                                {countTypes(songs, "genre").map(
                                                    (genre) => (
                                                        <option
                                                            key={genre}
                                                            value={genre}
                                                        >
                                                            {genre}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <div className="flex py-2 gap-8">
                                            <p className="pb-2 w-52 text-white/75">
                                                Total number of songs:
                                            </p>
                                            <span className="text-white">
                                                {count(songs, "genre", genre) ||
                                                    ""}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pb-8">
                                        <div className="flex">
                                            <h3 className="mr-4 text-xl inline w-24">
                                                By Artist
                                            </h3>
                                            <select
                                                name="artist"
                                                className="outline-none text-black rounded-lg py-1 px-4 w-40 placeholder:text-slate-500"
                                                value={artist}
                                                onChange={(e) =>
                                                    setArtist(e.target.value)
                                                }
                                                required
                                            >
                                                <option>select artist</option>
                                                {countTypes(
                                                    songs,
                                                    "artist"
                                                ).map((artist) => (
                                                    <option
                                                        key={artist}
                                                        value={artist}
                                                    >
                                                        {artist}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex pt-2 gap-8">
                                            <p className="pb-2 w-52 text-white/75">
                                                Total number of songs:
                                            </p>
                                            <span className="text-white">
                                                {count(
                                                    songs,
                                                    "artist",
                                                    artist
                                                ) || ""}
                                            </span>
                                        </div>
                                        <div className="flex gap-8">
                                            <p className="pb-2 w-52 text-white/75">
                                                Total number of albums:
                                            </p>
                                            <span className="text-white">
                                                {getAlbumCount(songs, artist) ||
                                                    ""}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pb-8">
                                        <div className="flex">
                                            <h3 className="mr-4 text-xl inline w-24">
                                                By Album
                                            </h3>
                                            <select
                                                name="album"
                                                className="outline-none text-black rounded-lg py-1 px-4 w-40 placeholder:text-slate-500"
                                                value={album}
                                                onChange={(e) =>
                                                    setAlbum(e.target.value)
                                                }
                                                required
                                            >
                                                <option>select album</option>
                                                {countTypes(songs, "album").map(
                                                    (genre) => (
                                                        <option
                                                            key={genre}
                                                            value={genre}
                                                        >
                                                            {genre}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <div className="flex py-2 gap-8">
                                            <p className="pb-2 w-52 text-white/75">
                                                Total number of songs:
                                            </p>
                                            <span className="text-white">
                                                {count(songs, "album", album) ||
                                                    ""}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
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
