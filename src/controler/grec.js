import { mongoose } from 'mongoose';
import { Router } from 'express';
import Grec from '../model/grec';
import bodyparser from 'body-parser';

export default({config, db}) => {
	let api = Router();

	api.get('/', (req, res) => {
		Grec.find({}, (err, grecs) => {
			if (err){
				res.send(err);
			}
			res.json(grecs);
		});
	});

	api.get('/:id', (req, res) => {
		Grec.findById(req.params.id, (err, grec) => {
			if(err){
				res.send(err);
			}
			res.json(grec);
		});
	});

	api.put('/update/:id', (req, res) => {
		Grec.findOneAndUpdate(req.params.id, req.body, (err, updateGrec) => {
			if(err){
				res.send(err);
			}
			res.json(updateGrec);
		});
	});

	api.delete('/delete/:id', (req, res) => {
            Grec.findByIdAndRemove(req.params.id, (err, Grec) => {  
              if (err) {res.send(err);}
              res.json({message:'Grec successfully removed'});
         });
    });

	api.post('/add', (req, res) => {
		let newRest = new Grec();
		newRest.name = req.body.name;

		newRest.save((err) => {
			if (err) {
				res.send(err);
			}
			res.json({ message : 'Grec saved succesfully'});
		})
	})
	return api
}