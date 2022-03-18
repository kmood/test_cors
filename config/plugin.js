'use strict';

// had enabled by egg
// exports.static = true;

/** @type Egg.EggPlugin */
// exports.cors = {
//   enable: true,
//   package: 'egg-cors',

// };
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };

// 参数验证
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
