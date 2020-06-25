const { bot, startBot } = require('./init');

// Middlewares
const { setupAttachChat } = require('./middlewares/attachChat');
const { setupAttachMessages } = require('./middlewares/attachMessages');
const { setupHandleMessage } = require('./middlewares/handleMessage');
// Commands
const { setupHelp } = require('./commands/help');
const { setupStart } = require('./commands/start');
const { setupAdmin } = require('./commands/admin');

// setup bot
setupAttachChat(bot);
setupAttachMessages(bot);
setupHandleMessage(bot);
// commands
setupHelp(bot);
setupStart(bot);
setupAdmin(bot);

// let's go :)
startBot();
