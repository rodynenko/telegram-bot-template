const config = require('config');
const Telegraf = require('telegraf');
const session = require('telegraf/session');
const { nanoid } = require('nanoid');
const { logger } = require('../../services/logger');

const bot = new Telegraf(config.get('bot.token'));

bot.use(session());

bot.catch((err) => {
	logger('error', err);
});

const secretPath = nanoid();

const getBotMiddleware = () => {
	return bot.webhookCallback(`/${secretPath}`);
};

const startBot = () => {
	if (config.get('bot.useWebhook')) {
		const domain = config.get('bot.domain');
		bot.telegram
			.deleteWebhook()
			.then(async () => {
				await bot.telegram.setWebhook(`${domain}/${secretPath}`, undefined, 100);
				const webhookInfo = await bot.telegram.getWebhookInfo();
				logger('info', `Bot is up and running with webhooks: ${webhookInfo}`);
			})
			.catch((err) => logger('info', `Bot launch error: ${err}`));
	} else {
		bot.telegram
			.deleteWebhook()
			.then(async () => {
				bot.startPolling();
				// Console that everything is fine
				logger('info', 'Bot is up and running');
			})
			.catch((err) => logger('info', `Bot launch error: ${err}`));
	}
};

module.exports = {
	getBotMiddleware,
	bot,
	startBot,
};
