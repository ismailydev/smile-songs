const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ method: req.method, msg: "get songs" });
});
router.get("/:id", (req, res) => {
    res.json({ method: req.method, msg: `get song with id ${req.params.id}` });
});
router.post("/", (req, res) => {
    res.json({ method: req.method, msg: "add song" });
});
router.put("/:id", (req, res) => {
    res.json({
        method: req.method,
        msg: `update song with id ${req.params.id}`,
    });
});
router.delete("/:id", (req, res) => {
    res.json({
        method: req.method,
        msg: `delete song with id ${req.params.id}`,
    });
});

module.exports = router;
