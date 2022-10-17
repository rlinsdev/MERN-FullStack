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

	let emptyFields = []
	if (!title)
		emptyFields.push('title')
	if (!load)
		emptyFields.push('load')
	if (!reps)
		emptyFields.push('reps')
	if (emptyFields.length > 0)
		return res.status(400).json({error: "Please fill all the fields", emptyFields})

	try {
		const workout = await Workout.create({title, load, reps});
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
	// return workout;
}

// Delete Workout
const deleteWorkout = async (req, res) => {
	const uriReps = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(uriReps)) {
		return res.status(404).json({error: 'No such workout'})
	  }

	const workout = await Workout.findOneAndDelete({ _id: uriReps });
	if (!workout) {
		return res.status(404).json({error: 'Not found'});
	}
	res.status(200).json(workout);
}

// Update Workout
const updateWorkout = async (req, res) =>{
	const uriReps = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(uriReps)) {
		return res.status(404).json({error: 'No such workout'})
	  }
	const workout = await Workout.findOneAndUpdate({_id: uriReps}, {
		...req.body
	});

	if (!workout) {
		return res.status(404).json({error: 'Not found'});
	}
	res.status(200).json(workout);
}

module.exports = {
	createWorkout, getWorkouts, getWorkoutById, deleteWorkout, updateWorkout
};
