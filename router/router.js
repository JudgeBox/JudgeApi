const express = require('express')
const Problem = require('../schema/problem-schema')

const router = express.Router()

router.get("/Alldata", async (req, res) => {
    try {
        const problem = await Problem.find();
        res.json(problem);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get("/:OJ", async (req, res) => {
    try {
        const problem = await Problem.find({ "OJ":req.params.OJ });
        res.json(problem);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



module.exports = router