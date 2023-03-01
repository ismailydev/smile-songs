const express = require("express");
const {
    getSongs,
    getSong,
    addSong,
    updateSong,
    deleteSong,
} = require("../controllers/song");

const router = express.Router();

router.route("/").get(getSongs).post(addSong);
router.route("/:id").get(getSong).put(updateSong).delete(deleteSong);

module.exports = router;
