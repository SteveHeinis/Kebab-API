import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let GrecSchema = new Schema({
	name: String
})

module.exports = mongoose.model('Grec', GrecSchema);