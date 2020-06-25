const mongoose = require('mongoose');
const config = require('config');

mongoose.set('debug', config.get('mongodb.debug'));
mongoose.connect(config.get('mongodb.url'), {
	useNewUrlParser: true,
	autoReconnect: true,
	useFindAndModify: false,
});

mongoose.connection.on('disconnected', () => {
	mongoose.connect(config.get('mongodb.url'), {
		useMongoClient: true,
		// DB gets huge, so setting up custom timeouts
		// socketTimeoutMS: 10000,
		// connectTimeoutMS: 10000,
	});
});

mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.get('mongodb.url')}`);
});

module.exports = mongoose;
