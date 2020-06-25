module.exports = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	mongodb: {
		debug: false,
		url: process.env.MONGO_URL,
	},
	bot: {
		adminId: parseInt(process.env.ADMIN_ID, 10),
		token: process.env.BOT_TOKEN,
		useWebhook: process.env.USE_WEBHOOK === 'true',
		domain: process.env.DOMAIN || '',
	},
};
