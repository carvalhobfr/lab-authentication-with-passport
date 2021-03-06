'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		passwordHashAndSalt: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
