/**
 * Created by root on 6/18/16.
 */

// 2016 summer data
var routeListDataset = require('../routes/route-list.js');
var routeCoordinateDataset = require('../routes/bus-coordinates-dataset.js');

// 2016 fall data

var routeData2016Fall = require('../OfficialRoutes/DistanceData')
var pathData2016Fall = require('../OfficialRoutes/PathCoordinate')


var fs = require('fs')
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
});

function InsertNewRoute(routeID, name, postcode, city, routeBusID, datasetName) {
    console.log('insertid:' + routeID)

    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO Route(RouteID, RouteName, city, postcode,routeBusID, datasetName) VALUES(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE RouteName = ?, city = ?, postcode = ? ,routeBusID = ?, datasetName = ?;', [routeID, name, city, postcode, routeBusID, datasetName, name, city, postcode, routeBusID, datasetName], function (error, results, fields) {
            connection.release();
        });
    });
}

function InsertNewBusstop(BusstopID, name, lat, lng, city, postcode) {
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO Busstop(BusstopID, BusstopName, lat, lng, city, postcode) VALUES(?,?,?,?,?,?) ON DUPLICATE KEY UPDATE BusstopName = ?, lat = ? , lng = ? , city = ?, postcode = ?;', [BusstopID, name, lat, lng, city, postcode, name, lat, lng, city, postcode], function (error, results, fields) {
            connection.release();
        });
    });
}

function InsertRouteStopRelation(routeID, stopID, stopNum) {
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO RouteStopRelation(RouteID, BusstopID, BusstopNum) VALUES(?,?,?) ON DUPLICATE KEY UPDATE BusstopID = ?;', [routeID, stopID, stopNum, stopID], function (error, results, fields) {
            connection.release();
        });
    });
}


function UpdateRouteFromJsonList(nameList, postcode, cityname) {
    var json = JSON.stringify(nameList);
    if (typeof json == "undefined") {
        console.log(arguments.callee.toString())
        return
    }

    for (var i = 0; i < nameList.length; i++) {
        InsertNewRoute(nameList[i]["routeID"], nameList[i]["routeName"], postcode, cityname, nameList[i]["routeBusID"], nameList[i]["datasetName"])
    }
}

function UpdateBusstopFromJsonList(infoList, postcode, cityname, id) {
    var routeID = id;

    var json = JSON.stringify(infoList);
    if (typeof json == "undefined") {
        // console.log(arguments.callee.toString())
        console.log("undefined list")
        return
    }
    for (var i = 0; i < infoList.length; i++) {
        var item = infoList[i];
        var stopID = String(postcode + item["stopname"])
        var stopNum = item["stopnum"]
        InsertNewBusstop(stopID, item["stopname"], item["lat"], item["long"], postcode, cityname)
        InsertRouteStopRelation(routeID, stopID, stopNum)
    }
}

function UpdatePullmanBusstop() {
    var nameList = routeListDataset.routeNamePullman;
    var json = JSON.stringify(nameList);
    var postcode = "99163"
    var cityname = "Pullman"
    if (typeof json == "undefined") {
        console.log("undefined  route list")
        // console.log(arguments.callee.toString())
        return
    }
    for (var i = 0; i < nameList.length; i++) {
        var routeName = nameList[i]["name"]
        var routeID = nameList[i]['routeID']
        var busstopJson = routeCoordinateDataset[routeID]
	console.log(busstopJson)
        UpdateBusstopFromJsonList(busstopJson, postcode, cityname, routeID)
    }
}


function UpdataPullmanRoute2016Fall() {
    var nameList = routeData2016Fall.routeNameList;
    var postcode = "99163"
    var cityName = "Pullman"
    UpdateRouteFromJsonList(nameList, postcode, cityName);
}


function UpdatePullmanBusstop2016Fall() {
    var nameList = routeData2016Fall.routeNameList;
    var json = JSON.stringify(nameList);
    var postcode = "99163"
    var cityname = "Pullman"
    if (typeof json == "undefined") {
        console.log("undefined  route list")
        return
    }
    for (var i = 0; i < nameList.length; i++) {
        var routeName = nameList[i]["routeName"]
        var routeID = nameList[i]['routeID']
        var datasetName = nameList[i]["datasetName"]
        var busstopJson = routeData2016Fall[datasetName]
        var pathJson = pathData2016Fall[datasetName]
        UpdateBusstopFromJsonList(busstopJson, postcode, cityname, routeID)
        UpdatePathFromJsonList(pathJson,routeID,routeName)
    }
}


function UpdatePathFromJsonList(infoList, postcode, cityname, id) {
    var routeID = id;
    var json = JSON.stringify(infoList);
    if (typeof json == "undefined") {
        console.log("undefined list")
        return
    }
    for (var i = 0; i < infoList.length; i++) {
        var item = infoList[i];
        var stopID = String(postcode + item["stopname"])
        var stopNum = item["stopnum"]
        var lat = item['lat']
        var lng = item['lng']
        var stopName = item['stopname']
        var pathNum = item['pathcounter']
        var stopID ='99163' + item['stopname']
        InsertPath(stopID, stopName, lat, lng,stopNum,pathNum,id)
    }
}

function InsertPath(busstopID, stopName, lat,lng, stopNum,pathNum,routeID) {
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO BusstopPathLocationInfo(RouteID,StopID,StopName, PathNum,StopNum, Lat, Lng) VALUES(?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE StopName = ?, Lat = ? , Lng = ? ;', [routeID, busstopID, stopName, lat, lng, stopName,pathNum,stopNum ,lat, lng], function (error, results, fields) {
            connection.release();
        });
    });
}

exports.UpdataPullmanRoute2016Fall = UpdataPullmanRoute2016Fall
exports.UpdatePullmanBusstop2016Fall = UpdatePullmanBusstop2016Fall
