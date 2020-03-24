const Logger = require('logplease');
const logger = Logger.create('utils');
const isEven = require('./numbers')

// logger.debug(`This is a debug message`);
// logger.log(`This is a log message`); // alias for debug()
// logger.info(`This is a info message`);
// logger.warn(`This is a warning`);
// logger.error(`This is an error`);

let numbers = [2,3,101,201,202,100]

for(i = 0; i <= numbers.length - 1; i++){
    if(isEven(numbers[i])){
        logger.info(`${numbers[i]} is even`);
    }else {
        logger.error(`${numbers[i]} is odd`);
    }
}