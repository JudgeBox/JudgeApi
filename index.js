const express = require('express');
const app = express();
const mongoose = require("mongoose");

require('dotenv').config();

const startParser = require('./script/startParser');

function connect() {
    console.log("started connecting to database");
    mongoose.connect(process.env.MONGO_URI, {
        keepAlive: true,
    }).then(() => {
        console.log('logged in mongoose');
    })
}

function startApp() {
    console.log("starting app");
    app.use(express.json());
    
    const Router = require("./router/router");
    
    app.use("/",Router);
    
    app.listen(process.env.PORT || 5000 , () => console.log("server started"))
}

connect();
startApp();

setTimeout(startParser.main, 5000);

//testing