const MongodbMemoryServer = require('mongodb-memory-server');

const mongod = new MongodbMemoryServer.default(getMongodbMemoryOptions());

module.exports = async () => {
  
  await mongod.start();
  global.__MONGOD__ = mongod;
  process.env.MONGO_URL = mongoConfig.mongoUri;
};
