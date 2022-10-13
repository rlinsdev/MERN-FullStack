const express = require('express');
const {
	createWorkout,
	getWorkouts,
	getWorkoutById
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id',getWorkoutById);

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
	res.json({msg: "DElete Single"});
});

router.patch('/:id', (req, res) => {
	res.json({msg: "Patch Single"});
});


module.exports = router;
