const { logEvents } = require('./logEvents');

const errorhandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt');
    console.log(err.stack)
    res.status(500).send(err.message);
}

module.exports = errorhandler;