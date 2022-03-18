/* eslint-disable no-array-constructor */
/* eslint-disable eqeqeq */
// const Sequelize = require('sequelize');
'use strict';
module.exports = {

  timestamp() {
    const date = new Date();
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString();
    let day = (date.getDate()).toString();
    const ho = date.getHours();		// 小时hour
    const mi = date.getMinutes();	// 分钟minute
    const se = date.getSeconds();	// 秒second
    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }
    const dateTime = year + '-' + month + '-' + day + ' ' + ho + ':' + mi + ':' + se;
    return dateTime;
  },

};
