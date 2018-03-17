var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
mongoose = require("mongoose");
Task = require("./api/models/todoListModel");
bodyParser = require("body-parser");
dotenv = require('dotenv');

dotenv.config();

//Connect database by adding url to Mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds115749.mlab.com:15749/todolist`);

//Middleware to parse incoming request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Register routes
var routes = require("./api/routes/todoListRoutes");
routes(app);

app.listen(port);

console.log("todo list API server started on: " + port);
