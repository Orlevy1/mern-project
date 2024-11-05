const express = require ('express')
const {
    creatWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workout_controller')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts) 

//get a single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/',creatWorkout) 

//delete a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)

module.exports = router