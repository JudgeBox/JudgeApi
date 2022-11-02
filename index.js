const express = require('express');
const app = express();
const mongoose = require("mongoose");

require('dotenv').config();

const startParser = require('./script/startParser');

function connect() {
    mongoose.connect(process.env.MONGO_URI, {
        keepAlive: true,
    }).then(() => {
        console.log('logged in mongoose');
    })
}

function startApp() {
    app.use(express.json());
    
    const Router = require("./router/router");
    
    app.use("/api/",Router);
    
    app.listen(3000 , () => console.log("server started"))
}

connect();
startApp();
startParser.main();
