require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
})

// routes
app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose.connect(process.env.MONGO_URL)
	.then(() => {
		// listen for request
		app.listen(process.env.PORT, () => {
			console.log("Connect to DB and listen on port:", process.env.PORT);
		})
	})
	.catch((error) =>{
		console.log(error);
	})


