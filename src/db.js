import mongoose from "mongoose";

export default callback => {
	let db = mongoose.connect("mongodb://localhost:27017/chezmomo");
	callback(db);
}