'use strict';

const config = require('./config.json');

module.exports = {
  endpoint: `${config.host}:${config.port}${config.restApiRoot}`,
};
