/**
 * Handle user input according to bot's state, that was defined by previous command
 * @param {Telegraf} bot
 */
function setupHandleMessage(bot) {
	bot.on('message', async (ctx, next) => {
		// const text = ctx.message.text;
		const mode = ctx.session.mode;
		const isCommand =
			Array.isArray(ctx.message.entities) &&
			ctx.message.entities.some((v) => v.type === 'bot_command');

		ctx.session.mode = undefined;

		if (isCommand) {
			return next();
		}

		if (!mode) {
			ctx
				.replyWithMarkdown(ctx.getMessage('error'))
				.then(() => ctx.replyWithMarkdown(ctx.getMessage('try-command')));
			return;
		}

		next(); // <-- replace by switch (mode) { }
		// to handle user input according to bot's state
	});
}

module.exports = {
	setupHandleMessage,
};
