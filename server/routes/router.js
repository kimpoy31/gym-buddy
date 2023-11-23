const express = require("express");
const router = express.Router()

const { 
    getAllData,
    addNewData,
    deleteSingleData,
 } = require("../controller/controller")

// Get All Data
router.get("/", getAllData)

// Add new Data
router.post("/", addNewData )

// Delete Data
router.delete("/:id", deleteSingleData )

module.exports = router;