const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    roomNumber: String,
    message: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
