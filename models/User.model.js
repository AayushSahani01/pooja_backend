const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin','Shoppker'],
        default: 'user'
    }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;