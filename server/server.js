import express from "express";
import cors from "cors";
import {readdirSync} from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

//create express app
const app = express();

// Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log("** Database Connected **"))
.catch((err) => console.log("Databases Failed", err));

//apple middlewares - code that will run before any request with the client 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Route
readdirSync("./routes").map((r) => 
app.use("/api", require( `./routes/${r}`)))

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`)); 

