/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // config.sequelize = {
  //   datasources: [
  //     {
  //       delegate: 'model', // load all models to app.model and ctx.model
  //       baseDir: 'model',
  //       dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
  //       username: 'postgres', // username
  //       database: 'geo_data_engine',
  //       host: '172.16.100.242',
  //       password: 'postgres',
  //       port: '5432',
  //       timezone: '+08:00',
  //       pool: {
  //         max: 1,
  //         min: 0,
  //         acquire: 30000,
  //         idle: 10000,
  //       },
  //       logging: () => {},
  //       // logging: console.log,
  //     },
  //   ],
  // };

  config.cors = {
    origin: '*', // 匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607671883154_9750';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
