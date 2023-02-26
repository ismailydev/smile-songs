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
};
