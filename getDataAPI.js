const express = require('express');
const app = express();
const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true,
}).then(() => {
    console.log('logged in mongoose');
})

const db = mongoose.connection;

db.on('err',err => console.log(err));

db.once('open' , () => console.log('connected to database'));

app.use(express.json());

const Router = require("./router/router");

app.use("/",Router);

app.listen(3000 , () => console.log("server started"))