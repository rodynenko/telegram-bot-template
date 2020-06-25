function setupHelp(bot) {
	bot.help((ctx) => {
		ctx.replyWithMarkdown(ctx.getMessage('help'), {
			disable_web_page_preview: true,
		});
	});
}

module.exports = {
	setupHelp,
};
