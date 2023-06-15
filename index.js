import express from "express";
import {pins} from "./pins.js";

const app = express();

app.get("/pins", (req, res) => {
    res.send(pins);
});

app.listen(3030, () => {
    console.log("Server is running");
});
