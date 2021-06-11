
// REQUIRES

const colors = require('colors');

// CODE

mp.custom.logger.error = function(message) {
    console.log(`${colors.bgRed(` ERROR `)} ${message.toString()}`);
}

mp.custom.logger.done = function(message) {
    console.log(`${colors.bgGreen(` DONE `)} ${message.toString()}`);
}