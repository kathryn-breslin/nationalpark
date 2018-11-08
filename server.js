const express = require("express");
const mongoose = require("mongoose");

// const routes = require("./routes");
const parkRoutes = require("./routes/parks");
const userRoutes = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

// app.use(routes);
app.use(parkRoutes);
app.use(userRoutes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/nationalParks");

app.listen(PORT, function(){
  console.log("Connected on PORT: " + PORT);
});