const express = require("express");
const {
    getSongs,
    getSong,
    addSong,
    updateSong,
    deleteSong,
} = require("../controllers/song");

const router = express.Router();

router.get("/", getSongs);
router.get("/:id", getSong);
router.post("/", addSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

module.exports = router;
