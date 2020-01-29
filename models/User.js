const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
        minlength: [2, 'First name must be at least 2 characters long.'],
        maxlength: [25, 'First name cannot exceed 25 characters.'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
        minlength: [2, 'Last name must be at least 2 characters long.'],
        maxlength: [25, 'Last name cannot exceed 25 characters.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        minlength: [7, 'Password must be at least 7 characters long.'],
        maxlength: [25, 'Password cannot exceed 25 characters long.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [7, 'Password must be at least 7 characters long.'],
        maxlength: [25, 'Password cannot exceed 25 characters long.'],
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;