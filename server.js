const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("client/public"));

const parkRoutes = require("./routes/api")
app.use(parkRoutes);

const userRoutes = require("./routes/user");
app.use(userRoutes);
// const userRoutes = require("./routes/user.js");
// app.use(userRoutes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/nationalPark");

app.listen(PORT, function(){
  console.log("Connected on PORT: " + PORT);
});