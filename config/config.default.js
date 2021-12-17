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
  const config = exports = {
    mysql:{
      client:{
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:process.env.PASSWORD,
	database:'test'
      },
      app:true,
      agent:false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639470452728_4885';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.cluster = {
  listen: {
    hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    // path: '/var/run/egg.sock',
  }
}

  return {
    ...config,
    ...userConfig,
  };
};
