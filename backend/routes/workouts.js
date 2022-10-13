const express = require('express');
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get('/', async (req, res) => {
	res.json({msg: "Get all"});
	// const workout = await Workout.get()
	// res.status(200).json(workout);
});

router.get('/:id', (req, res) => {
	res.json({msg: "Get Single"});
});

router.post('/', async (req, res) => {

	const {title, load, reps} = req.body;

	try {
		const workout = await Workout.create({title, load, reps});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
});

router.delete('/:id', (req, res) => {
	res.json({msg: "DElete Single"});
});

router.patch('/:id', (req, res) => {
	res.json({msg: "Patch Single"});
});


module.exports = router;
