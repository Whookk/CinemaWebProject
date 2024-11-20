var mysql = require('mysql');

var config = {
	host: 'vlvlnl1grfzh34vj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
	user: "zmyhwuolk3l46wku",
	database: "hqssypisobx7wyuy",
	password: "yq2tiqk9asa3990j",
     port: 3306
} 

function ConnectToDB(config) {
    const connection = mysql.createConnection(config);
    connection.connect(function (err) {
         if (err) {
              return console.error("Помилка: " + err.message);
         }
         else {
              console.log("Підключення до сервера MySQL успішно встановлено");
         }
    });
    return connection;
}

var connection = ConnectToDB(config);
module.exports = connection; 
