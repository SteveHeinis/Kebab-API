import express from "express";
import config from "../config";
import initializeDb from '../db';
import middleware from '../middleware';
// import initialize DB from 

let router = express();

initializeDb(db => {

	router.use(middleware({ config, db }));

})

// import middlware from

export default router;