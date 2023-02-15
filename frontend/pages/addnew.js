import { genres } from "@/constants";
import { addSong, updateSong } from "@/features/songsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AddNew() {
    const router = useRouter();
    const { id } = router.query;
    const [song, setSong] = useState({});

    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        album: "",
        genre: "",
    });

    const fetchSong = async () => {
        const res = await fetch(`http://localhost:8000/api/songs/${id}`);
        const data = await res.json();
        setSong(data);
    };

    useEffect(() => {
        if (id) {
            fetchSong();
            setFormData({
                title: song.title,
                artist: song.artist,
                album: song.album,
                genre: song.genre,
            });
        }
    }, [id]);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            const updatedFormData = {
                title: formData.title,
                artist: formData.artist,
                album: formData.album,
                genre: formData.genre,
            };
            dispatch(updateSong({ ...updatedFormData, id }));
            toast.success("Song updated successfully");
            router.replace(`/songs/${id}`);
        } else {
            dispatch(addSong(formData));
            toast.success("Song added successfully");
            router.replace("/");
        }
    };

    return (
        <main className="py-4 pb-12">
            <h2 className="py-8 text-center text-3xl">
                {!id ? "Add New Song" : "Update Song"}
            </h2>
            <form
                onSubmit={handleSubmit}
                className="bg-black w-full md:w-1/2 mx-auto p-8 rounded-2xl"
            >
                <div className="flex flex-col items-center">
                    <div className="flex items-center py-4">
                        <label htmlFor="title" className="w-20">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="outline-none text-black rounded-lg py-1.5 px-4 w-60 md:w-72 placeholder:text-slate-500"
                            placeholder="song title"
                            value={formData.title || song.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center py-4">
                        <label htmlFor="aritst" className="w-20">
                            Aritst
                        </label>
                        <input
                            type="text"
                            name="aritst"
                            className="outline-none text-black rounded-lg py-1.5 px-4 w-60 md:w-72 placeholder:text-slate-500"
                            placeholder="song artist"
                            value={formData.artist || song.artist}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    artist: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center py-4">
                        <label htmlFor="album" className="w-20">
                            Album
                        </label>
                        <input
                            type="text"
                            name="album"
                            className="outline-none text-black rounded-lg py-1.5 px-4 w-60 md:w-72 placeholder:text-slate-500"
                            placeholder="song album"
                            value={formData.album || song.album}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    album: e.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center py-4">
                        <label htmlFor="genre" className="w-20">
                            Genre
                        </label>
                        <select
                            name="genre"
                            className="outline-none text-black rounded-lg py-1.5 px-4 w-60 md:w-72 placeholder:text-slate-500"
                            value={formData.genre || song.genre}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    genre: e.target.value,
                                })
                            }
                            required
                        >
                            <option>select genre</option>
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex py-4">
                        <button
                            type="sumbit"
                            className="w-full py-2 px-4 bg-slate-800 text-white rounded-lg"
                        >
                            {!id ? "Add" : "Update"}
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}
