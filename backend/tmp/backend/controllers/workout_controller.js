const Workout = require ('../models/workout_model')
const mongoose =require('mongoose')
//get all workouts

const getWorkouts = async(req,res) =>{
    //return all workouts
    console.log('sss')
    try{
        const workouts = await Workout.find({}).sort({createAT: -1})
        res.status(200).json(workouts)
    }
    catch (error){
        res.status(400).json({error: error.message})

    }
}

//get a single workout
const getWorkout = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)
  
}

//creat a new workout
const creatWorkout = async(req,res) =>{
    const {title,load,reps} = req.body
    //add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch (error){
        res.status(400).json({error: error.message})

    }
    
}
//delete a workout

const deleteWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)


}

//update a workout
const updateWorkout = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)

}



module.exports ={
    creatWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}