
// CODE

mp.custom = {}; // Создаем глобальную переменную
mp.custom.database = {};
mp.custom.logger = {};

module.exports = mp.custom; // Выносим переменную из файла в глобалку

// REQUIRES

require('./api/index.js');
require('./modules/index.js');
