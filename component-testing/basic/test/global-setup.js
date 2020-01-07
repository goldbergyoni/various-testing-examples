const isPortReachable = require('is-port-reachable');
const path = require('path');
const waitPort = require('wait-port');
const dockerCompose = require('docker-compose');
const Umzug = require('umzug');
const Sequelize = require('sequelize');
const npm = require('npm');
const config = require('../data-access/config/config');

module.exports = async () => {
  console.time('global-setup');
  /*  #region ️️️⚙️ Database initialization */
  const isDBReachable = await isPortReachable(54320);
  if (!isDBReachable) {
    await dockerCompose.upAll({
      cwd: path.join(__dirname),
      log: true,
    });
  }
  await waitPort({
    host: 'localhost',
    port: 54320,
  });
  /* #endregion */

  const npmLoadAsPromise = util.promisify(npm.load);
  await npmLoadAsPromise();
  const npmCommandAsPromise = util.promisify(npm.commands.run);
  const result = await npmCommandAsPromise(['db:migrate']);
  
  /*  #region ️️️⚙️ DB migration */
  const sequelize = new Sequelize(config);
  const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize,
    },

    migrations: {
      params: [
        sequelize.getQueryInterface(),
        Sequelize,
      ],
      path: path.join(__dirname, '../data-access/migrations'),
    },
  });
  await umzug.up();

  /* #endregion */

  // 👍🏼 We're ready
  console.timeEnd('global-setup');
};
