require('dotenv').config()

const express = require('express');

const workoutRoutes = require('./routes/workouts')

const mongoose = require('mongoose') 

// express app
const app = express()

//middleware
app.use(express.json)

app.use ((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");

  console.log(req.path, req.method)
  next()

})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port ', process.env.PORT)
})

  })
  .catch((error) => {
    console.log(error)
  })





