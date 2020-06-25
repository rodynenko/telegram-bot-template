const { findChat } = require('../../services/db');
const { logger } = require('../../services/logger');

/**
 * Add chat and its information to request context
 * @param {Telegraf} bot
 */
async function setupAttachChat(bot) {
	bot.use(async (ctx, next) => {
		try {
			ctx.dbchat = await findChat(ctx.chat.id || ctx.update.channel_post.chat.id);
		} catch (err) {
			logger('error', 'chat find: ' + err);
		}
		next();
	});
}

module.exports = {
	setupAttachChat,
};
