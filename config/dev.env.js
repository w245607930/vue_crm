'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// console.log('QQQQQQQQQQQQQ==========================================process.env.ENV_PATH:============================================'+ process.env.ENV_PATH)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.70.206:9301"',
})
