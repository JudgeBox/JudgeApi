const mongoose = require('mongoose');


require('dotenv').config();

function connect() {
    mongoose.connect(process.env.MONGO_URI, {
        keepAlive: true,
    }).then(() => {
        console.log('logged in mongoose');
    })


}

async function writeTest() {
    const ProblemSchema = require('./schema/problem-schema');

    await new ProblemSchema({
        OJ: 'Codeforces',
        problemURL: 'https://codeforces.com/problemset/problem/1/A',
        problemId: '1A',   
        problemName: 'Theatre Square',
    }).save();
}

function main() {
    connect();
    writeTest();
}

main();