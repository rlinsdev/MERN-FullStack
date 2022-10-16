import { useEffect, useState } from "react"

// Components
import WorkoutsDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutForm'

const Home = () => {
	const [workouts, setWorkouts] = useState(null)

	useEffect(()=> {
		const fetchWorkout = async () => {
			const response = await fetch ('/api/workouts/')
			const json = await response.json()

			if (response.ok) {
				setWorkouts(json)
			}
		}
		fetchWorkout()
	}, [])

	return (
		<div className="home">
			<div className="workouts">
			{workouts && workouts.map((workout) => (
					<WorkoutsDetails key={workout._id} workout={workout} />
				))}
			</div>
			<WorkoutsForm />
		</div>
	)
}
export default Home
