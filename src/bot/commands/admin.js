const config = require('config');

function checkIfSuperAdmin(ctx, next) {
	if (ctx.from.id === config.get('bot.adminId')) {
		next();
	}
}

function setupAdmin(bot) {
	bot.command('admin', checkIfSuperAdmin, (ctx) => {
		ctx.reply('Admin access');
	});
}

module.exports = {
	setupAdmin,
};
