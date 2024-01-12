const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    // console.log(logItem);
    try {
        await fsPromises.appendFile(path.join(__dirname, '..','logs','eventLog.txt'), logItem)
    } catch (err){
        console.log(err);
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.orgin}\t${req.url}`);
    next();
}

module.exports = { logger, logEvents };