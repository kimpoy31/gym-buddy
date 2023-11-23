// Import dotenv
require("dotenv").config()

// Mongoose Imports and Declarations
const mongoose = require("mongoose")

// Express Imports and Declarations
const express = require("express");
const app = express();

// Import Router
const router = require("./routes/router")

// Import Cors
const cors = require('cors');




// Initialize DB CONNECTION
mongoose.connect(process.env.DB_URI)
.then(() => {
    app.listen(process.env.PORT, () => console.log("Connected"))
})
.catch(error => console.error("Error connecting to MongoDB:", error));

// Use cors middleware
app.use(cors());

// Express JSON middleware
app.use(express.json());

// Routes
app.use(router)