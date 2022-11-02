const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    OJ: {
        type: String,
        required: true,
    },
    URL: {
        type: String, 
        required: true
    },
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Problems', schema, 'Problems');