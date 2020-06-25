const mongoose = require('../lib/mongoose');

/**
 * Chat Schema
 */
const ChatSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		terms: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * @typedef Chat
 */
module.exports = mongoose.model('Chat', ChatSchema);
