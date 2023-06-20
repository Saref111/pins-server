import express from "express";
import {pins} from "./pins.js";

const app = express();

// set CORS headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/pins", (req, res) => {
    res.send(pins);
});

app.listen(3030, () => {
    console.log("Server is running");
});
