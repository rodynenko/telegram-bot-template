function setupStart(bot) {
	// Start command
	bot.start((ctx) => {
		ctx.replyWithMarkdown(ctx.getMessage('start'));
	});
}

module.exports = {
	setupStart,
};
