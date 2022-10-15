const express = require('express');
const {
	createWorkout,
	getWorkouts,
	getWorkoutById,
	deleteWorkout
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id', getWorkoutById);

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout);

router.patch('/:id', (req, res) => {
	res.json({msg: "Patch Single"});
});


module.exports = router;
