
// REQUIRES

const mysql = require('mysql');
const config = require('./config.json'); // Конфигурация для подключения к базе данных

// CODE

//? Создание подключения к базе данных
mp.custom.database.main = mysql.createPool({
    connectionLimit: 1000,

    host: config.main.hostname,
    user: config.main.username,
    password: config.main.password,
    database: config.main.database,

    debug: false
});

//? Проверяем подключение
mp.custom.database.checkConnection = function() {
    mp.custom.database.main.getConnection((err) => {
        if(err) {
            mp.custom.logger.error(`Основная база данных не подключена. Запрос повторится через ${config.main.interval_reconnect} секунд..`);
    
            setTimeout(() => {
                return mp.custom.database.checkConnection();
            }, config.main.interval_reconnect * 1000);
        } else {
            return mp.custom.logger.done(`Основная база данных подключена.`);
        }
    });
}

setTimeout(() => {
    mp.custom.database.checkConnection();
}, 1000);