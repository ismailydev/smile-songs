const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        album: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            enum: [
                "Pop",
                "EDM",
                "Lofi",
                "R&B",
                "Jazz",
                "Rock",
                "Reggae",
                "Hip-Hop",
                "Classical",
                "Country",
            ],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Song", songSchema);
