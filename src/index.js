import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import http from "http";
import config from "./config";
import routes from "./routes";

let app = express();
app.server = http.createServer(app);

app.use(bodyparser.json({
	limit : config.bodyLimit

	}));

app.use("/v1", routes); 

app.server.listen(config.port);

console.log(`started on port ${app.server.address().port}`);

export default app;

