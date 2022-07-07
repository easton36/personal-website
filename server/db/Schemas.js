const mongoose = require('mongoose');

const Messages = mongoose.model('messages', new mongoose.Schema({
    message: String,
    user: {
        id: String,
        name: String
    },
    timestamp: Number
}));

module.exports = {
    Messages
}