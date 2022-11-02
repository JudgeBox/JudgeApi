const mongoose = require('mongoose');

require('dotenv').config();

async function write(data) {
    await data.save();
}

async function addProblem(OJ, data) {
    const ProblemSchema = require('../schema/problem-schema');

    let oldDataCount = 0;

    try {
        for (let i = 0; i < data.length; i++) {
            let ele = data[i];
            let { URL, Id, Name } = ele;
            
            let res = await ProblemSchema.findOne({ URL: URL }).exec()

            if (res != null) {
                oldDataCount++;
            } else {
                console.log(URL);
                await new ProblemSchema({
                    OJ: OJ,
                    URL: URL,
                    Id: Id,   
                    Name: Name,
                }).save();
                oldDataCount = 0;
            }
    
            if (oldDataCount == 1000) {
                throw new Error("Finished");
            }
        }

    } catch (err) {
        if (err != 'Finished') {
            console.log(err);
        }
    }
}

module.exports = {
    addProblem: addProblem
}