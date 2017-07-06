/**
 * Created by root on 9/15/16.
 */

var fs = require('fs')
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
});

function UpdateRoute() {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO Route(RouteID, RouteName, city, postcode,routeBusID, datasetName) VALUES(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE RouteName = ?, city = ?, postcode = ? ,routeBusID = ?, datasetName = ?;'
        connection.query(queryStr, [routeID, name, city, postcode, routeBusID, datasetName, name, city, postcode, routeBusID, datasetName], function (error, results, fields) {
            connection.release();
        });
    });
}

function UpdateBusstop() {
        pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO Busstop(BusstopID, BusstopName, lat, lng, city, postcode) VALUES(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE BusstopName = ?, lat = ? , lng = ? , city = ?, postcode = ?;', [BusstopID, name, lat, lng, city, postcode, name, lat, lng, city, postcode], function (error, results, fields) {
            connection.release();
        });
    });
}

function UpdatePath() {
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO RouteStopRelation(RouteID, BusstopID, BusstopNum) VALUES(?,?,?) ON DUPLICATE KEY UPDATE BusstopID = ?;', [routeID, stopID, stopNum, stopID], function (error, results, fields) {
            connection.release();
        });
    });
}



