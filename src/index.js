import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import http from "http";
import config from "./config";
import routes from "./routes";

let app = express();
app.server = http.createServer(app);

// Middleware 

// Passport Config

// API route V1

app.use("/v1", routes); 

// ROUTE ICI -> 

app.server.listen(config.port);

console.log("started import ${app.server.address().port}");

export default app;

