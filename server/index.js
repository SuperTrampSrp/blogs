import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use("/posts", postRoutes)
app.use("/user", userRoutes)

const PORT = 5000;
mongoose.connect('mongodb://localhost:27017/blogs-db')
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message));

// mongoose.set("useFindAndModify", false);