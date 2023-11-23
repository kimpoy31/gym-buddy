const workout = require("../model/workoutModel")
const mongoose = require("mongoose")

const getAllData = async(req, res) => {
    try {

        const data = await workout.find({}).sort({createdAt: -1});
        // Process the retrieved data
        res.status(200).json(data)

    } catch (error) {

        console.error("Error retrieving data:", error);
        res.status(500).send("Internal Server Error");

    }

}

const addNewData = async(req, res) => {
    const { title, weight, reps } = req.body

    try{

        const data = await workout.create({ title, weight, reps })
        res.status(200).json(data)

    } catch ( error ) {

        console.error("Error creating data:", error);
        res.status(500).send("Internal Server Error");

    }
}

const deleteSingleData = async(req, res) => {
    const {id} = req.params

    console.log("test")

    try{

        const data = await workout.findOneAndDelete({_id: id})

        if(!data){
            res.status(404).json({error: "Internal Server Error"});
        }

        res.status(200).json(data)
        console.log(id, "not Found")

    } catch ( error ) {

        res.status(500).send("Internal Server Error");

    }
}

module.exports = {
    getAllData,
    addNewData,
    deleteSingleData,
};