const mongoose = require("mongoose");
const Song = require("../models/song");

module.exports = {
    getSongs: async (req, res) => {
        try {
            const songs = await Song.find().sort({
                createdAt: -1,
            });
            res.status(200).json(songs);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    getSong: async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such song." });
        }

        const song = await Song.findById(id);

        if (!song) {
            return res.status(404).json({ error: "No such song." });
        }

        res.status(200).json(song);
    },
    addSong: async (req, res) => {
        const { title, artist, album, genre } = req.body;

        try {
            const song = await Song.create({
                title,
                artist,
                album,
                genre,
            });
            res.status(200).json(song);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    deleteSong: async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such song." });
        }

        const song = await Song.findOneAndDelete({ _id: id });

        if (!song) {
            return res.status(404).json({ error: "No such song." });
        }

        res.status(200).json(song);
    },
    updateSong: async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such song." });
        }

        const song = await Song.findOneAndUpdate({ _id: id }, { ...req.body });

        if (!song) {
            return res.status(404).json({ error: "No such song." });
        }

        res.status(200).json(song);
    },
};
