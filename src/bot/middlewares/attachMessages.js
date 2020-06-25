const { getMessages } = require('../../services/messages');

/**
 * Add function getMessages to the context for getting messages by ids
 * @param {Telegraf} bot
 */
const setupAttachMessages = (bot) => {
	const messages = getMessages();
	const getMessage = (id) => messages[id];
	bot.use((ctx, next) => {
		ctx.getMessage = getMessage;
		next();
	});
};

module.exports = {
	setupAttachMessages,
};
