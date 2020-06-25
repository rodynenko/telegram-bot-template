const Chat = require('../models/chat');

async function findChat(id) {
	let chat = await Chat.findOne({ id });
	if (!chat) {
		chat = new Chat({ id });
		chat = await chat.save();
	}
	return chat;
}

module.exports = {
	findChat,
};
