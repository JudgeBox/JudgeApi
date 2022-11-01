const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    OJ: {
        type: String,
        required: true,
    },
    problemURL: {
        type: String, 
        required: true
    },
    problemId: {
        type: String,
        required: true
    },
    problemName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Problems', schema, 'Problems');