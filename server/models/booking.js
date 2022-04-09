const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    bid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Booking', userSchema)