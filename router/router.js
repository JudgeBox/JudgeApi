const express = require('express')
const Problem = require('../schema/problem-schema')

const router = express.Router()

router.get("/problems", async (req, res) => {
    try {
        const problem = await Problem.find({}, { _id: 0, __v: 0 });
        res.json(problem);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get("/problems/:OJ", async (req, res) => {
    console.log(req.params.OJ);
    try {
        const problem = await Problem.find({ "OJ": req.params.OJ }, { _id: 0, __v: 0 });
        res.json(problem);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



module.exports = router