const Workout = require('../models/workoutModel');
const mongoose = require ('mongoose');

// get All
const getWorkouts = async (req, res) => {
	const workout = await Workout.find({}).sort({createAt: -1});
	res.status(200).json(workout);
}

// get a Single workout
const getWorkoutById = async (req, res) => {
	const uriReps = req.params.id;
	console.log(uriReps);
	console.log(req.params.id);

	if (!mongoose.Types.ObjectId.isValid(uriReps)) {
		return res.status(404).json({error: 'No such workout'})
	  }

	const workout = await Workout.findById(uriReps);
	if (!workout) {
		return res.status(404).json({error: 'Not found'});
	}
	res.status(200).json(workout);
}

// create new Workout
const createWorkout = async (req, res) => {
	const {title, load, reps} = req.body;

	try {
		const workout = await Workout.create({title, load, reps});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
	return workout;
}

// Delete Workout

// Update Workout

module.exports = {
	createWorkout, getWorkouts, getWorkoutById
};
