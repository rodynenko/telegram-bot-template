const yaml = require('js-yaml');
const fs = require('fs'); // eslint-disable-line import/no-nodejs-modules
const { join } = require('path'); // eslint-disable-line import/no-nodejs-modules
const { logger } = require('./logger');

const messagesPath = join(__dirname, '../../messages.yaml');

const getMessages = () => {
	try {
		// eslint-disable-next-line no-sync
		const messages = yaml.safeLoad(fs.readFileSync(messagesPath, 'utf8'));
		return messages;
	} catch (err) {
		logger('error', err);
		return {};
	}
};

module.exports = {
	getMessages,
};
