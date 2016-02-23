var AWS = require('aws-sdk');

function func() {
    AWS.config.region = 'region';
}

module.exports = func;
