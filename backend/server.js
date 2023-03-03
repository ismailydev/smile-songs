const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/songs", require("./routes/song"));

app.get("/", (req, res) => {
    res.send(
        "<h1>Welcome to <b>smile-songs-api</b></h1><p>Checkout /api/songs</p>"
    );
});

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () =>
        console.log(`Server running on PORT ${PORT}`)
    );
});
