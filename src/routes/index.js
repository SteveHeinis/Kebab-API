import express from "express";
import config from "../config";
import initializeDb from '../db';
import middleware from '../middleware';
import grec from '../controler/grec';
// import initialize DB from 

let router = express();

initializeDb(db => {

	router.use(middleware({ config, db }));

	router.use('/grec', grec({config, db}));

})

export default router;