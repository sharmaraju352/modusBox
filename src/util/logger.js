const bunyan = require('bunyan');
const config = require('config/service');

const log = bunyan.createLogger({
  name: config.projectName,
  serializers: {
    req: bunyan.stdSerializers.req,
    err: bunyan.stdSerializers.err,
  },
  streams: [
    {
      stream: process.stdout,
      level: config.log.level,
    },
    {
      path: config.log.directory,
      level: 'trace',
    },
  ],
});

module.exports = log;
