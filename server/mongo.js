const mongoose = require('mongoose')
const env = require('./environment/environment')

mongoose.Promise = global.Promise


const mongoUri = `mongodb://${env.dbName}:${env.key}@mongopots.mongo.cosmos.azure.com:${env.port}/?ssl=true`
// this might go on the end of the uri string?
// &appName=@mongopots@

function connect() {
	return mongoose.connect(mongoUri, {
		useMongoClient: true
	})
}

module.exports = {
	connect,
	mongoose
}