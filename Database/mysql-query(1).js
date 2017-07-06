/**
 * Created by root on 9/15/16.
 */

var fs = require('fs')
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'thrifa'
});

function CheckRoute(routeName, postcode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT routeId FROM route WHERE routeName =? AND postcode = ?'
        connection.query(queryStr, [routeName, postcode], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertNewRoute(routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("insert connection err")
        }
        console.log("insert new r")
        var queryStr = 'INSERT INTO route(routeName, routeColor,city, postcode,operationDay,operationTime,routeCode,lastUpdate) VALUES(?,?,?,?,?,?,?,?);'
        connection.query(queryStr, [routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, new Date()], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log("insert new r e")
                callback(error)
            }
            else {
                console.log("insert new r done")
                callback(error, results)
            }
        });
    });
}

function InsertOrUpdateRoute(routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, callback) {
       pool.getConnection(function (err, connection) {
        if (err) {
            console.log("insert connection err")
        }
        console.log("insert new r")
        var queryStr = 'INSERT INTO route(routeName, routeColor,city, postcode,operationDay,operationTime,routeCode,lastUpdate) VALUES(?,?,?,?,?,?,?,?) ON DUPLICATE UPDATE routeColor = ?,city = ?, operationDay = ?, operationTime = ?, lastUpdate = ?, routeCode = ?;'
        connection.query(queryStr, [routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, new Date(), routeColor,city,operationDay,operationTime, new Date(), routeCode], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log("insert new r e")
                callback(error)
            }
            else {
                console.log("insert new r done")
                callback(error, results)
            }
        });
    });
}

function UpdateRoute(routeID, routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'UPDATE route SET routeName = ?, routeColor = ?,city = ?, postcode = ?, operationDay = ?, operationTime = ?, lastUpdate = ?, routeCode = ? WHERE routeId = ?;'
        connection.query(queryStr, [routeName, routeColor, city, postcode, operationDay, operationTime, routeCode, new Date(), routeID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function DeleteRoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM route WHERE routeId = ?;'
        connection.query(queryStr, [routeID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function CheckStop(stopName, postcode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT stopId FROM stop WHERE stopName = ? AND postcode = ?'
        connection.query(queryStr, [stopName, postcode], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertNewStop(stopName, lat, lng, city, postcode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO stop(stopName, lat, lng, city, postcode) VALUES(?,?,?,?,?);'
        connection.query(queryStr, [stopName, lat, lng, city, postcode], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertOrUpdateStop(stopName, lat, lng, city, postcode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO stop(stopName, lat, lng, city, postcode) VALUES(?,?,?,?,?) ON DUPLICATE UPDATE lat = ?, lng = ?,postcode = ? ;'
        connection.query(queryStr, [stopName, lat, lng, city, postcode, lat,lng,city], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function UpdateStop(stopID, stopName, lat, lng, city, postcode, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'Update stop SET stopName = ?, lat = ?, lng = ?, city = ?, postcode = ? WHERE stopId = ?;'
        connection.query(queryStr, [stopName, lat, lng, city, postcode, stopID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function DeleteStop(stopID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM stop WHERE stopId = ?;'
        connection.query(queryStr, [stopID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertNewRouteStopRelation(routeID, stopID, stopNum, distance, time, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO routeStopRelation(routeId, stopId, stopNum, distanceToNextStop, timeToNextStop) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE stopId = ?, distanceToNextStop = ?, timeToNextStop = ?;'
        connection.query(queryStr, [routeID, stopID, stopNum, distance, time, stopID, distance, time], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}


// Delete one Relation
function DeleteRouteStopRelation(routeID, stopNum, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM routeStopRelation WHERE routeId = ? AND stopNum = ?;'
        connection.query(queryStr, [routeID, stopNum], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

// Delete All relation
function DeleteALLRouteStopRelationInARoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM routeStopRelation WHERE routeId = ?;'
        connection.query(queryStr, [routeID, stopNum], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertPath(routeID, pathNum, stopNum, lat, lng, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO path(routeId, pathNum, stopNum, lat, lng) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE stopNum = ?, lat = ?, lng = ?;'
        connection.query(queryStr, [routeID, pathNum, lat, lng, stopNum, lat, lng], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

// delete one path dot
function DeletePath(routeID, stopNum, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM path WHERE routeId = ?, stopNum = ?;'
        connection.query(queryStr, [routeID, stopNum], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}


function DeleteAllPathInARoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM path WHERE routeId = ?;'
        connection.query(queryStr, [routeID, pathNum], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertFinePath(routeID, stopNum, lat, lng, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO finePath(routeId, finePathNum, stopNum, lat, lng) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE stopNum = ?, lat = ?, lng = ?;'
        connection.query(queryStr, [routeID, stopNum, stopNum, lat, lng], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function DeleteFinePath(routeID, stopNum, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM finePath WHERE routeId = ?, stopNum = ?;'
        connection.query(queryStr, [routeID, stopNum], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function DeleteAllFinePathInARoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM findPath WHERE routeId = ?;'
        connection.query(queryStr, [routeID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function CheckDriver(driverID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT * from driver WHERE driverId = ?;'
        connection.query(queryStr, [driverID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertNewBusDriver(driverID, driverName, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO driver(driverId, driverName) VALUES(?,?);'
        connection.query(queryStr, [driverID, driverName], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function InsertNewBus(vehicleID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO bus(vehicleID) VALUES(?);'
        connection.query(queryStr, [vehicleID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function UpdateBusLocation(vehicleID, lat, lng) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'UPDATE bus SET lat = ?, lng = ? WHERE vehicleID = ?;'
        connection.query(queryStr, [lat, lng, vehicleID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function UpdateBusDriver(vehicleID, driverID) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'UPDATE bus SET driverId =? WHERE vehicleID = ?;'
        connection.query(queryStr, [driverID, vehicleID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

function UpdateBusRoute(routeID, vehicleID) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'UPDATE bus SET routeId =? WHERE vehicleId = ?;'
        connection.query(queryStr, [routeID, vehicleID], function (error, results, fields) {
            connection.release();
            if (error) {
                callback(error)
            }
            else {
                callback(error, results)
            }
        });
    });
}

exports.CheckRoute = CheckRoute
exports.InsertNewRoute = InsertNewRoute
exports.UpdateRoute = UpdateRoute
exports.DeleteRoute = DeleteRoute
exports.CheckStop = CheckStop
exports.InsertNewStop = InsertNewStop
exports.UpdateStop = UpdateStop
exports.DeleteStop = DeleteStop
exports.InsertNewRouteStopRelation = InsertNewRouteStopRelation
exports.DeleteRouteStopRelation = DeleteRouteStopRelation
exports.DeleteALLRouteStopRelationInARoute = DeleteAllFinePathInARoute
exports.InsertPath = InsertPath
exports.DeletePath = DeletePath
exports.DeleteAllPathInARoute = DeleteAllFinePathInARoute
exports.InsertFinePath = InsertFinePath
exports.DeleteFinePath = DeletePath
exports.DeleteAllFinePathInARoute = DeleteAllFinePathInARoute
exports.CheckDriver = CheckDriver
exports.InsertNewBusDriver = InsertNewBusDriver
exports.InsertNewBus = InsertNewBus
exports.UpdateBusLocation = UpdateBusLocation
exports.UpdateBusDriver = UpdateBusDriver
exports.UpdateBusRoute = UpdateBusRoute

exports.InsertOrUpdateRoute = InsertOrUpdateRoute
exports.InsertOrUpdateStop = InsertOrUpdateStop
