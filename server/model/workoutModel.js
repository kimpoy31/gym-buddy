const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    }
},{ timestamps:true })

const workoutModel = mongoose.model("workout", workoutSchema)

module.exports = workoutModel;