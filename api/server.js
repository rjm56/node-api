import express from "express"
import mongoose from "mongoose";
import Task from "./models/todoListModel";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { Routes } from './routes/todoListRoutes';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

//Connect database by adding url to Mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds115749.mlab.com:15749/todolist`);

//Middleware to parse incoming request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Register routes
let router = express.Router();
Routes(router);
app.use('/', router);

app.listen(port);

console.log("todo list API server started on: " + port);
