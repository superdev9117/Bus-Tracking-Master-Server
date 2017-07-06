/**
 * Created by roufei on 8/14/15.
 */
var http = require('http');
var https = require('https');
var fs = require('fs')
var mysql = require('mysql');
var request = require("request");
var debugTool = require("../util/debug-helper")
var apn = require('apn');
var apnoptions = {};
var apnConnection = new apn.Connection(apnoptions);
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
});
var mathHelper = require('../util/math-helper')
var globals = require("../global")
var optionValue = globals.serverStatus

// summer data
var routeListDataset = require('../routes/route-list.js');
var routeCoordinateDataset = require('../routes/bus-coordinates-dataset.js');
var pathCoordinateDataset = require('../routes/bus-route-path-coordinate-dataset')
var simulationDataset = require("../OfficialRoutes/SimulationData")

// 2016 fall
var routeData2016Fall = require('../OfficialRoutes/DistanceData')
var pathData2016Fall = require('../OfficialRoutes/PathCoordinate')

var simulationDataContainer = {}
var simulationCounter = -1;

var SimulationList = routeData2016Fall.routeNameList

var firebasekey = "AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA"

//gooogle
var distance = require('google-distance');
distance.apiKey = 'AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA';

// 1.Get all the routes
// 2.Find route dataset path
// 3. Find bus simulation data path
function startLocatePullmanBus() {
    var timeInterval = 20000
    if (globals.serverStatus == "test") {
        timeInterval = 20000
        if (globals.updateInterval == "long") {
            timeInterval = 30000
        }
        InitialSimulationData(SimulationList)
    }
    if (globals.updateInterval == "long") {
        timeInterval = 30000
    }

    setInterval(CheckingBusAlarmListIOS, timeInterval)
    setInterval(UpdateBusInPullman, timeInterval)
    setInterval(CheckBusLiveData, timeInterval)
}

function CheckBusLiveData() {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT * FROM BusLiveData;';
        connection.query(queryStr, function (error, results, fields) {
            connection.release();
            if (error) {
                console.log(error);
            }
            else {
                for (var i = 0; i < results.length; i++) {
                    var time = results[i].LastUpdate;
                    var d1 = new Date(time)
                    var d2 = new Date()
                    var diffSec = (d2 - d1) / 1000
                    if (String(results[i].BusID) == "10" && String(results[i].RouteID) == "99163Grey") {
                        debugTool.WriteLogToNewFile("route:" + results[i].RouteID + "busid:" + results[i].BusID + "diff*******:" + diffSec)
                    }
                    //delete record if bus disspear for 30 sec
                    if (diffSec > 30) {
                        DeleteBusData(results[i].RouteID, results[i].BusID)
                    }
                }
            }
        });
    });
}

function DeleteBusData(routeID, busID) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'DELETE FROM BusLiveData WHERE RouteID = ? AND BusID = ?;';
        connection.query(queryStr, [routeID, busID], function (error, results, fields) {
            connection.release();
        });
    });
}

function InitialSimulationData(simuList) {
    simulationCounter = 0;
    for (var i = 0; i < simuList.length; i++) {
        if (simuList[i].simulationPath != "N/A") {
            debugTool.WriteLogToNewFile("init %%%%%%%%%%%%%%:")
            simulationDataContainer[simuList[i].datasetName] = simuList[i].simulationPath;
            fs.truncate("BusLocationLog/" + simuList[i].routeID + ".txt", 0, function () {
                console.log('clearfile')
            })
        }
    }
}

function UpdateBusInPullman() {
    UpdateBusList(SimulationList)
}
// busList is routeList(datasetName) for now
function UpdateBusList(busList) {
    for (var i = 0; i < busList.length; i++) {

        var routeID = busList[i]["routeID"]
        var routeBusID = busList[i].routeBusID
        if (globals.serverStatus == "test") {
            UpdateBus(busList[i]["routeID"], busList[i]["routeBusID"], false, busList[i]['routeName'], busList[i].datasetName)
            // TODO:SIMULATE BUS DATA
            simulationCounter++;
            if (simulationCounter > 1000)
                simulationCounter = 0;
        }
        else {
            UpdateBus(busList[i]["routeID"], busList[i]["routeBusID"], true, busList[i]["routeName"], busList[i].datasetName)
        }
    }
}
// flag is true when it is real update
// flag is false when it is simulation
function UpdateBus(routeID, routeBusId, flag, routeName, datasetName) {
    var http = require('http');
    var str = '';
    var options;
    var url = "";

    // debugTool.WriteLogToNewFile("routeID:" + routeBusId)
    // get simulation data
    if (flag == false) {
        url = "http://127.0.0.1:3000/GetSimulator/" + routeID
    }
    else {
        url = 'https://pullman.mytransitride.com/api/VehicleStatuses?patternIds%5B%5D=' + routeBusId
    }
    debugTool.WriteLogToNewFile("url:" + url)
    debugTool.WriteLogToNewFile("routeID:" + routeID)
    RequestBusData(url, routeID, routeName, datasetName)
}

function UpdateBusPatternID() {
    var url = "https://pullman.mytransitride.com/api/Route"
    https.get(url, function (res) {
        res.on('data', function (d) {
            try {
                var patternData = JSON.parse(d);
                for (var i = 0; i < patternData.length; i++) {
                    var routeName = patternData[i].RouteName
                    var patternID = patternData[i].PatternID
                    var routeInfoList = routeData2016Fall.routeNameList

                    for (var j = 0; j < routeInfoList.length; j++) {
                        if (routeInfoList[j].routeName == routeName) {
                            routeInfoList[j].routeBusID = patternID;
                        }
                    }
                }
            } catch (e) {
                debugTool.WriteLogToNewFile("****start update pattern error&&&&&&&:" + e);
            }
        });
        res.on('error', function (e) {
            debugTool.WriteLogToNewFile("****start update pattern errro:" + e);
            console.error(e);
        });

    });
}

function RequestBusData(url, routeID, routeName, datasetName) {
    ParsedCoordinates(url, datasetName, function (results) {
        var res = JSON.stringify(results);

        if (results == "") {
            UpdateBusPatternID()
        } else {
            var coordsArr = handleResultsMultiple(results);

            for (var i = 0; i < coordsArr.length; i++) {
                var coords = coordsArr[i];
                var busLat = coords.lat;
                var busLng = coords.lng;
                var busID = coords.busID;
                // update coordinate
                debugTool.WriteLogToNewFile("Live Bus index:" + " routeID:" + routeID)
                LocateEachBus(routeID, routeName, busLat, busLng, busID)
            }
        }
    });
}

function UpdateBusCoord(busID, busLat, busLng, routeID) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO BusLiveData(BusID, BusLat, BusLng, RouteID,LastUpdate) VALUES(?,?,?,?,?) ON DUPLICATE KEY UPDATE BusLat = ?, BusLng = ?, LastUpdate = ?;';
        connection.query(queryStr, [busID, busLat, busLng, routeID, new Date(), busLat, busLng, new Date()], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log(error);
            }
        });
    });
}

function LocateEachBus(routeID, routeName, busLat, busLng, busID) {
    console.log("id********************:" + routeID + routeName + busLat + busLng + busID)
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  * FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.RouteID = ?;', [routeID], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log("Update Bus error1:" + error)
                UpdateBusCoord(busID, busLat, busLng, routeID)
            }
            else {
                if (results.length == 0) {
                    return
                    UpdateBusCoord(busID, busLat, busLng, routeID)
                }

                if (globals.locaterMethod == 'normal') {

                    var routefinepath = IdToPath(routeID)

                                        console.log("======================================================================================")
                     console.log(routefinepath)
                    var finepath = pathData2016Fall[routefinepath.finePath]
                    debugTool.WriteLogToNewFile("***%%%%%%%%%% routefinepath  : " + JSON.stringify(routefinepath))
                    var busLocation = {"lat": busLat, "long": busLng};
                    var indexposition = findBus(busLocation, finepath)
                    var loc = finepath[indexposition].stopnum


                    InsertNewLiveBusData(busLat, busLng, routeID, loc, -1, busID, routeName)
                    return;
                }
                pool.getConnection(function (err, connection) {
                    connection.query('SELECT * FROM BusLiveData WHERE RouteID = ?;', [routeID], function (error, busLiveData, fields) {
                        connection.release();
                        // function LocatorMethodBasedOnDistanceAwayFromPath(busLat, busLng, routeID, datasetName, busLiveData) {
                        var datasetName = IdToNameAndDataset(routeID).route
                        console.log("id:" + routeID + ",name:" + datasetName)
                        if (globals.locaterMethod == "dtp") {
                            var numRes = LocatorMethodBasedOnDistanceAwayFromPath(busLat, busLng, routeID, datasetName, busLiveData)
                            var stopNum = -1;
                            var pathNum = -1;
                            try {
                                stopNum = numRes[0].stopNum;
                                pathNum = numRes[0].pathNum;
                                InsertNewLiveBusData(busLat, busLng, routeID, stopNum, pathNum, busID, routeName)
                            }
                            catch (e) {
                                console.log("Update Bus error2:" + e)
                            }
                        }
                        else if (globals.locaterMethod == "gd") {
                            // GoogleMapLocationMethod(busLat, busLng, routeID, busID, function (numRes) {
                            var stopNum = -1;
                            var pathNum = -1;
                            var dToTravel = 0;
                            try {
                                stopNum = numRes[0].stopNum;
                                pathNum = numRes[0].pathNum;
                                dToTravel = numRes[0].dToTravel;
                                InsertNewLiveBusData(busLat, busLng, routeID, stopNum, pathNum, busID, routeName, dToTravel)
                            }
                            catch (e) {
                                console.log("Update Bus error3:" + e)
                            }
                        }
                    });
                });

            }
        });
    });
}


// Locate bus based on bus coordinate
// Find the closest path that bus path through 

// input: bus lat, bus lng, bus id, num of busstop
// return: which bus num the bus just pass through

function InsertNewLiveBusData(busLat, busLng, routeID, busLocationInStop, busLocationInPath, busID, routeName, dToTravel) {
    console.log("insert new bus")
    if (typeof dToTravel == "undefined") {
        console.log("insert normal")
        pool.getConnection(function (err, connection) {
            var queryStr = 'INSERT INTO BusLiveData(BusID, BusLat, BusLng, RouteID,PathNum,StopNum,LastUpdate,RouteName) VALUES(?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE BusLat = ?, BusLng = ?, PathNum = ?, StopNum = ?, LastUpdate = ?, RouteName = ?;';
            connection.query(queryStr, [busID, busLat, busLng, routeID, busLocationInPath, busLocationInStop, new Date(), routeName, busLat, busLng, busLocationInPath, busLocationInStop, new Date(), routeName], function (error, results, fields) {
                connection.release();
                if (error) {
                    console.log(error);
                }
            });
        });
    }
    else {
        pool.getConnection(function (err, connection) {
            var queryStr = 'INSERT INTO BusLiveData(BusID, BusLat, BusLng, RouteID,PathNum,StopNum,LastUpdate,RouteName,DistanceToTravel) VALUES(?,?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE BusLat = ?, BusLng = ?, PathNum = ?, StopNum = ?, LastUpdate = ?, RouteName = ?, DistanceToTravel=?;';
            connection.query(queryStr, [busID, busLat, busLng, routeID, busLocationInPath, busLocationInStop, new Date(), routeName, dToTravel, busLat, busLng, busLocationInPath, busLocationInStop, new Date(), routeName, dToTravel], function (error, results, fields) {
                connection.release();
                if (error) {
                    console.log(error);
                }
            });
        });
    }
}

function LocatorMethodBasedOnDistanceAwayFromPath(busLat, busLng, routeID, datasetName, busLiveData) {
    var possibleLocation = [];
    var busPoint = {x: busLat, y: busLng};
    var counter = 0;
    var firstPoint, startPoint, endPoint;
    var coordinateData = pathData2016Fall[datasetName];
    coordinateData.forEach(function (entry) {
        counter++;
        if (counter == 1) {
            firstPoint = {x: entry.lat, y: entry.long};
            startPoint = {x: entry.lat, y: entry.long}
        }
        else if (counter == coordinateData.length) {
            endPoint = firstPoint;
            startPoint = {x: entry.lat, y: entry.long}
        }
        else if (counter == 2) {
            endPoint = {x: entry.lat, y: entry.long}
        }
        else {
            startPoint = endPoint;
            endPoint = {x: entry.lat, y: entry.long}
        }
        if (counter != 1) {
            var dist = mathHelper.distToSegment(busPoint, startPoint, endPoint);
            if (dist < 0.005) {
                possibleLocation.push({pathNum: entry.pathcounter, stopNum: entry.stopnum})
            }
        }
    });
    var currentMinDiff = coordinateData.length;
    var busLocationInStop = -1;
    var busLocationInPath = -1;

    if (possibleLocation.length != 0) {
        // TODO: improve this part
        if (typeof busLiveData == "undefined") {
            return [{"stopNum": -1, "pathNum": -1}]
        }
        if (busLiveData.length == 0) {
            return [{"stopNum": -1, "pathNum": -1}]
        }
        else {
            var tmpPathNum = busLiveData[0].PathNum;
            var tmpStopNum = busLiveData[0].StopNum;
            for (var i = 0; i < possibleLocation.length; i++) {
                var tmpDiff = possibleLocation[i].pathNum - tmpPathNum;
                if (tmpDiff < 0)
                    tmpDiff += coordinateData.length;
                if (tmpDiff < currentMinDiff)
                    currentMinDiff = tmpDiff;
                busLocationInPath = possibleLocation[i].pathNum;
                busLocationInStop = possibleLocation[i].stopNum
            }
            // TODO: find a better way to filter the update
            // if (busLocationInStop != tmpStopNum && (Math.abs(busLocationInStop - tmpStopNum) < 3 || Math.abs(busLocationInStop - tmpPathNum) > (routeSize - 3))) {
            console.log("New update Location " + routeID + ":" + busLocationInStop);
            // }
            fs.appendFile("Pullman2016FallRouteLog/" + routeID + ".log", busLocationInStop + ' - ', function (err) {
                if (err) {
                    console.log(err);
                    return [{"stopNum": busLiveData[0].StopNum, "pathNum": busLiveData[0].StopNum}]
                }
            });
            // callback
            return [{"stopNum": busLocationInStop, "pathNum": busLocationInPath}]
        }
    }
    else {
        return [{"stopNum": busLiveData[0].StopNum, "pathNum": busLiveData[0].StopNum}]
    }
}

function getSimulationStr(datasetName) {
    debugTool.WriteLogToNewFile("***sim called &&&&&&&&&:")
    var simPath = ''
    var resStr = ''
    var newSimuStrSet
    try {
        debugTool.WriteLogToNewFile("***sim name :" + datasetName)
        debugTool.WriteLogToNewFile("***sim data name :" + JSON.stringify(simulationDataContainer))
        simPath = simulationDataContainer[datasetName]
        debugTool.WriteLogToNewFile("***sim path :" + simPath)
        if (typeof  simPath == 'undefined')
            return ""
        newSimuStrSet = fs.readFileSync('OfficialSimRoutes/' + simPath + ".txt").toString().split("\n")
        resStr = newSimuStrSet[simulationCounter]

        debugTool.WriteLogToNewFile("sim counter:" + simulationCounter)
        debugTool.WriteLogToNewFile("***DATA:" + resStr)

    }
    catch (e) {
        debugTool.WriteLogToNewFile("***sim error:" + e)
        console.log('sim error:' + e)
        return resStr
    }
    return resStr
}

function getDatasetName(routeID, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT Route.datasetName FROM Route WHERE RouteID = ?;';
        connection.query(queryStr, [routeID], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log(error);
            }
            else {
                callback(results, routeID)
            }
        });
    });
}

function GetBusLiveDataForARoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusLiveData WHERE RouteID = ?;', [routeID], function (error, results, fields) {
            connection.release()
            callback(results)
        });
    });
}

// send message
function SendMessageToBusstopSubscriber(stop, message) {
    console.log("messageForBusstop:" + message)
    debugTool.WriteLogToNewFile("start send to subscribe: " + message)

    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusstopSubscriber WHERE BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            var tokenList = results;
            for (var i = 0; i < tokenList.length; i++) {
                if (tokenList[i].OS == "Android") {
                    request({
                        uri: "https://fcm.googleapis.com/fcm/send",
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': 'key=' + firebasekey
                        },
                        json: {
                            "priority": "high",
                            "data": {

                                "content_available": true,
                                "content_type": "BusstopTimeUpdate",
                                "busstop_ID": stop,
                                "busArray": message
                            },
                            "to": String(tokenList[i].Token),

                        }
                    }, function (error, response, body) {
                        if (error) {
                            console.log("send message to sub error" + error);
                        } else {

                        }
                    });
                }
                else {
                    request({
                        uri: "https://fcm.googleapis.com/fcm/send",
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'key=' + firebasekey
                        },
                        json: {
                            "priority": "high",
                            "notification": {
                                "title": "BusstopTimeUpdate"
                            },
                            "data": {

                                "content_available": true,
                                "content_type": "BusstopTimeUpdate",
                                "Busstop_ID": stop,
                                "busArray": message

                            },
                            "to": String(tokenList[i].Token),

                        }
                    }, function (error, response, body) {
                        if (error) {
                            console.log("send message to sub error" + error);
                        } else {
                        }
                    });
                }
            }
        });
    });
}

function SendCoordinatesToSubscriber(stop, routeID) {
    GetBusLiveDataForARoute(routeID, function (results) {
        if (results.length == 0) {
            return
        }
        for (var i = 0; i < results.length; i++) {
            SendBusCoordinateHelper(results[i], stop, routeID)
        }
    });
}
function SendBusCoordinateHelper(busLiveData, stop, routeID) {
    var lat = busLiveData.BusLat
    var lng = busLiveData.BusLng
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusstopSubscriber WHERE BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            var tokenList = results;
            for (var i = 0; i < tokenList.length; i++) {
                if (tokenList[i].OS != "Android") {
                    request({
                        uri: "https://fcm.googleapis.com/fcm/send",
                        method: "POST",
                        headers: { //We can define headers too
                            'Content-Type': 'application/json',
                            'Authorization': 'key=' + firebasekey
                        },
                        json: {
                            "priority": "high",
                            "notification": {
                                "title": "CoordinatesUpdate",
                                "lat": lat,
                                "long": lng,
                                "bposition": routeID
                            },
                            "data": {
                                "content_available": true,
                                "content_type": "CoordinatesUpdate",
                                "lat": lat,
                                "long": lng,
                                "bposition": routeID
                            },
                            "to": String(tokenList[i].Token),
                        }
                    }, function (error, response, body) {
                        if (error) {
                            console.log("send message to sub error" + error);
                        } else {
                            // console.log(response.statusCode, body);
                        }
                    });
                }
                else {
                    request({
                        uri: "https://fcm.googleapis.com/fcm/send",
                        method: "POST",
                        headers: { //We can define headers too
                            'Content-Type': 'application/json',
                            'Authorization': 'key=' + firebasekey
                        },
                        json: {
                            "priority": "high",
                            "data": {
                                "content_available": true,
                                "content_type": "CoordinatesUpdate",
                                "lat": lat,
                                "long": lng,
                                "bposition": routeID
                            },
                            "to": String(tokenList[i].Token),
                        }
                    }, function (error, response, body) {
                        if (error) {
                            console.log("send message to sub error" + error);
                        } else {
                        }
                    });
                }
            }
        });

    });
}


function GetBusstopInfo(stop, callback) {
    debugTool.WriteLogToNewFile("start query stop: " + stop)
    //get remaining time by routesId and stopId
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopNum FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            var responseJsonMessage = [];
            var busstopList = results;
            if (results.length == 0) {
                console.log("no fit result a")
                debugTool.WriteLogToNewFile("error: no route pass this stop")
                callback("error, no route pass that stop")
                return;
            }
            else {
                debugTool.WriteLogToNewFile("size: " + busstopList.length)
                var messageCounter = 0;
                for (var j = 0; j < busstopList.length; j++) {
                    debugTool.WriteLogToNewFile("index j: " + j)
                    var jsonResult = JSON.stringify(busstopList[j]);
                    if (typeof jsonResult == 'undefined') {
                        // callback("error")
                        messageCounter++;
                        return;
                    } else {
                        var routeID = busstopList[j].RouteID;
                        var routeName = busstopList[j].RouteName;
                        var stopNum = busstopList[j].BusstopNum;
                        debugTool.WriteLogToNewFile("index 1 j: " + j)

                        debugTool.WriteLogToNewFile("id 1: " + routeID)
                        debugTool.WriteLogToNewFile("name 1: " + routeName)
                        debugTool.WriteLogToNewFile("num 1: " + stopNum)

                        getDatasetName(routeID, function (datasetNameResults, routeID) {
                            var datasetName = datasetNameResults[0].datasetName
                            debugTool.WriteLogToNewFile("index id 2 j: " + routeID)

                            GetBusLiveDataForARoute(routeID, function (results) {
                                debugTool.WriteLogToNewFile("index 3 j: " + j)
                                // TODO: UPDATE for multiple buses
                                if (results.length != 0) {
                                    debugTool.WriteLogToNewFile("index 4 j: " + j)
                                    var postion = results[0].StopNum
                                    // var rTime;
                                    var currentBusstopNum = postion;
                                    var routeInfo = IdToPath(results[0].RouteID)
                                    var min = 0
                                    var remainTime = 99999
                                    //get the soonest arrival time 
                                    for (var v = 0; v < results.length; v++) {
                                        var lat = results[v].BusLat
                                        var lng = results[v].BusLng
                                        // var tmpTime = busTimeToDestination(stopNum, pathData2016Fall[routeInfo.finePath], lat, lng, routeData2016Fall[routeInfo.route])
                                        var time = busTimeToDestination(stopNum, pathData2016Fall[routeInfo.finePath], lat, lng, routeData2016Fall[routeInfo.route])
                                        if (time < remainTime && time >= 0) {
                                            remainTime = time
                                        }
                                        if (remainTime >= 99999) {
                                            remainTime = -1
                                        }
                                        // resultcounter++
                                    }
                                    remainTime = Math.ceil(remainTime)
                                    // rTime = Math.round(rTime * 10) / 10
                                    // remainTime = Math.round(remainTime * 10) / 10


                                    //console.log("timeForStop:" + rTime);
                                    debugTool.WriteLogToNewFile("messge j: " + j)
                                    messageCounter++;
                                    responseJsonMessage.push(
                                        {
                                            "RouteID": results[0].RouteID,
                                            "RouteName": results[0].RouteName,
                                            "StopNum": currentBusstopNum,
                                            "BusstopID": stop,
                                            "Time": remainTime,
                                        }
                                    );
                                }
                                else {
                                    //error
                                    debugTool.WriteLogToNewFile("Not get enough bus info Error")
                                    messageCounter++;
                                }


                                if (messageCounter == busstopList.length) {
                                    // SendMessageToBusstopSubscriber(stop, responseJsonMessage)
                                    debugTool.WriteLogToNewFile("messge conennt : " + responseJsonMessage)
                                    debugTool.WriteLogToNewFile("messge size : " + responseJsonMessage.length)
                                    debugTool.WriteLogToNewFile("index send j : " + j)
                                    callback(responseJsonMessage)
                                }
                            });
                        });
                    }

                }
                // SendCoordinatesToSubscriber(stop, routeID)
                // 
            }
        });
    });
}

function GetAlarmInfo(stopID, routeID, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopNum FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE Route.RouteID =? AND RouteStopRelation.BusstopID = ?;', [routeID, stopID], function (error, stopRes, fields) {
            connection.release();
            var stopNum = stopRes[0].BusstopNum;
            getDatasetName(routeID, function (datasetNameResults, routeID) {
                var datasetName = datasetNameResults[0].datasetName
                GetBusLiveDataForARoute(routeID, function (results) {
                    // TODO: UPDATE for multiple buses
                    if (results.length != 0) {
                        var postion = results[0].StopNum
                        // var rTime;
                        // var currentBusstopNum = postion;
                        // currentBusstopNum = routeCoordinateDataset[datasetName]
                        // //console.log("datasetName:" + datasetName)
                        // rTime = mathHelper.CalculateTime(routeData2016Fall[datasetName], currentBusstopNum, stopNum)
                        //
                        // for (var i = 1; i < results.length; i++) {
                        //     var tmpTime = mathHelper.CalculateTime(routeData2016Fall[datasetName], results[i].StopNum, stopNum)
                        //     if (tmpTime < rTime)
                        //         rTime = tmpTime
                        // }
                        var rTime = 1000;

                        var routeInfo = IdToPath(results[0].RouteID)
                        var remainTime = 99999
                        // rTime = mathHelper.CalculateTime(routeData2016Fall[datasetName], currentBusstopNum, stopNum)
                        for (var v = 0; v < results.length; v++) {
                            var lat = results[v].BusLat
                            var lng = results[v].BusLng
                            var time = busTimeToDestination(stopNum, pathData2016Fall[routeInfo.finePath], lat, lng, routeData2016Fall[routeInfo.route])
                            if (time < remainTime && time >= 0) {
                                remainTime = time
                            }
                            if (remainTime >= 99999) {
                                remainTime = -1
                            }
                        }
                        remainTime = Math.ceil(remainTime)

                        rTime = Math.round(rTime * 10) / 10
                        // remainTime = Math.round(remainTime * 10) / 10
                        var responseJsonMessage =
                        {
                            "RouteID": results[0].RouteID,
                            "RouteName": results[0].RouteName,
                            "StopNum": postion,
                            "BusstopID": stopID,
                            "Time": remainTime,
                        }

                        callback(responseJsonMessage)
                    }
                    else {
                        //error
                        callback("")
                    }
                });
            });
        });
    });
}


function QueryRoutePassCertainStop(stop) {
    var routeDataSet = []
    // console.log("start query route stop:" + String(stop));
    debugTool.WriteLogToNewFile("start query stop: " + stop)
    //get remaining time by routesId and stopId
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopNum FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            var responseJsonMessage = [];
            var busstopList = results;
            if (results.length == 0) {
                console.log("no fit result a")
            }
            else {
                debugTool.WriteLogToNewFile("size: " + busstopList.length)
                for (var j = 0; j < busstopList.length; j++) {
                    debugTool.WriteLogToNewFile("index j: " + j)
                    var jsonResult = JSON.stringify(busstopList[j]);
                    if (typeof jsonResult != 'undefined') {
                        var routeID = busstopList[j].RouteID;
                        var routeName = busstopList[j].RouteName;
                        var stopNum = busstopList[j].BusstopNum;
                        debugTool.WriteLogToNewFile("index 1 j: " + j)

                        debugTool.WriteLogToNewFile("id 1: " + routeID)
                        debugTool.WriteLogToNewFile("name 1: " + routeName)
                        debugTool.WriteLogToNewFile("num 1: " + stopNum)

                        getDatasetName(routeID, function (datasetNameResults, routeID) {
                            var datasetName = datasetNameResults[0].datasetName
                            debugTool.WriteLogToNewFile("index id 2 j: " + routeID)

                            GetBusLiveDataForARoute(routeID, function (results) {
                                debugTool.WriteLogToNewFile("index 3 j: " + j)
                                // TODO: UPDATE for multiple buses
                                if (results.length != 0) {
                                    debugTool.WriteLogToNewFile("index 4 j: " + j)
                                    var postion = results[0].StopNum
                                    var rTime = -1;
                                    var currentBusstopNum = postion;
                                    // currentBusstopNum = routeCoordinateDataset[datasetName]
                                    //console.log("datasetName:" + datasetName)
                                    rTime = mathHelper.CalculateTime(routeData2016Fall[datasetName], currentBusstopNum, stopNum)

                                    for (var i = 1; i < results.length; i++) {
                                        var tmpTime = mathHelper.CalculateTime(routeData2016Fall[datasetName], results[i].StopNum, stopNum)
                                        if (tmpTime < rTime)
                                            rTime = tmpTime
                                    }

                                    //console.log("timeForStop:" + rTime);
                                    debugTool.WriteLogToNewFile("messge j: " + j)
                                    responseJsonMessage.push(
                                        {
                                            "RouteID": results[0].RouteID,
                                            "RouteName": results[0].RouteName,
                                            "StopNum": currentBusstopNum,
                                            "BusstopID": stop,
                                            "Time": rTime,
                                        }
                                    );
                                }

                                if (responseJsonMessage.length >= busstopList.length) {
                                    SendMessageToBusstopSubscriber(stop, responseJsonMessage)
                                    debugTool.WriteLogToNewFile("messge conennt : " + responseJsonMessage)
                                    debugTool.WriteLogToNewFile("messge size : " + responseJsonMessage.length)
                                    debugTool.WriteLogToNewFile("index send j : " + j)
                                }
                            });
                        });
                    }
                }
            }
        });
    });
}

function UpdateBusRemainingTime() {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT DISTINCT BusstopID FROM BusstopSubscriber;', function (error, results, fields) {
            connection.release();
            var mysqlRegList = results;
            if (typeof mysqlRegList == "undefined") {
                console.log("undefined object");
                return
            }
            for (var i = 0; i < mysqlRegList.length; i++) {
                // var token = mysqlRegList[i].Token
                var stop = mysqlRegList[i].BusstopID;
                //QueryRoutePassCertainStop(stop)
            }
        });
    });
}

function SendAlarmUpdate(routeID, stop, token, OS) {
    // console.log("start send alarm update route:" + String(routeID) + ", stop:" + stop);
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  BusstopNum FROM RouteStopRelation WHERE RouteID = ? AND BusstopID = ?;', [routeID, stop], function (error, results, fields) {
            connection.release();
            var stopNumList = results;
            if (typeof  stopNumList == "undefined") {
                return
            }
            // console.log("query result in RouteStopRelation data lengh:" + stopNumList.length);

            if (stopNumList.length > 1) {
                console.log("error in RouteStopRelation data table")
            }
            else if (stopNumList.length == 1) {
                GetBusLiveDataForARoute(routeID, function (results) {
                    var stopNum = stopNumList[0].BusstopNum;
                    // TODO: UPDATE for multiple buses
                    if (results.length == 0) {
                        return;
                    }
                    var postion = results[0].StopNum
                    getDatasetName(routeID, function (datasetNameResults) {
                        var datasetName = datasetNameResults[0]
                        var rTime = -1;
                        rTime = mathHelper.CalculateTime(routeCoordinateDataset[datasetName].time, currentBusstopNum, stopNum)
                        if (OS == "Android") {
                            request({
                                uri: "https://fcm.googleapis.com/fcm/send",
                                method: "POST",
                                headers: { //We can define headers too
                                    'Content-Type': 'application/json',
                                    'Authorization': 'key=' + firebasekey
                                },
                                json: {
                                    "priority": "high",
                                    "data": {
                                        "content_available": true,
                                        "content_type": "AlarmTimeUpdate",
                                        "route_ID": routeID,
                                        "busstop_ID": stop,
                                        "remain_time": rTime,
                                    },
                                    "to": String(token),
                                }
                            }, function (error, response, body) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    // console.log(response.statusCode, body);
                                }
                            });
                        }
                        else {

                            request({
                                uri: "https://fcm.googleapis.com/fcm/send",
                                method: "POST",
                                headers: { //We can define headers too
                                    'Content-Type': 'application/json',
                                    'Authorization': 'key=' + firebasekey
                                },
                                json: {
                                    "priority": "high",
                                    "notification": {
                                        "title": "AlarmTimeUpdate"
                                    },
                                    "data": {

                                        "content_available": true,
                                        "content_type": "AlarmTimeUpdate",
                                        "route_ID": routeID,
                                        "busstop_ID": stop,
                                        "remain_time": rTime,

                                    },
                                    "to": String(token),

                                }
                            }, function (error, response, body) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    // console.log(response.statusCode, body);
                                }
                            });
                        }

                    });

                });
            }

        });
    });
}


function SendAlarmUpdateIos(routeID, stop, token) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  * FROM RouteStopRelation WHERE RouteID = ? AND BusstopID = ?;', [routeID, stop], function (error, results, fields) {
            connection.release();
            var stopNumList = results;
            if (typeof  stopNumList == "undefined") {
                return
            }

            console.log(stop)
            if (stopNumList.length > 1) {
                console.log("error in RouteStopRelation data table")
            }
            else if (stopNumList.length == 1) {
                GetBusLiveDataForARoute(routeID, function (results) {
                    var stopNum = stopNumList[0].BusstopNum;
                    var rTime = -1;
                    // TODO: UPDATE for multiple buses
                    if (results.length == 0) {
                        return;
                    }
                    var postion = results[0].StopNum


                    console.log(results[0])
                    getDatasetName(routeID, function (datasetNameResults) {
                        var datasetName = datasetNameResults[0].datasetName
                        var rTime = -1;


                        var routeInfo = IdToPath(results[0].RouteID)
                        var remaintime = 99999
                        for (var v = 0; v < results.length; v++) {
                            var lat = results[v].BusLat
                            var lng = results[v].BusLng
                            var rTime = busTimeToDestination(stopNum, pathData2016Fall[routeInfo.finePath], lat, lng, routeData2016Fall[routeInfo.route])
                            if (rTime < remaintime && rTime >= 0) {
                                remaintime = rTime
                            }
                        }
                        datasetName = datasetName.replace(".", "")
                        pool.getConnection(function (err, connection) {
                            connection.query('SELECT  BusAlarmSubscriberIOS.Time FROM BusAlarmSubscriberIOS WHERE RouteID = ? AND BusstopID = ?;', [routeID, stop], function (error, results, fields) {
                                connection.release();
                                var stopNumList = results;
                                if (typeof  stopNumList == "undefined") {
                                    return
                                }
                                //at this point, i want see if the rTime is less than the Time from BusAlarmSubscriberIOS
                                //if it is lesser then I send a push notification
                                if (results[0]) {
                                    // if (rTime <= results[0].Time) {
                                    var remaintime = parseInt(rTime)
                                    var userselectedtime = parseInt(results[0].Time)
                                    if (remaintime <= userselectedtime) {
                                        SendApn(token, stop, routeID, remaintime)
                                        RemoveSubscriber(routeID, stop, token)
                                    }
                                }

                            });
                        });
                    });
                });
            }
        });
    });
}

function CheckingBusAlarmListIOS() {
    // console.log("start checking alarm list");
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusAlarmSubscriberIOS;', function (error, results, fields) {
            connection.release();

            if (error) {
                console.log(error);
            }
            var busAlarmList = results;


            if (typeof busAlarmList == "undefined") {
                console.log("undefined object");
                return
            }
            console.log(results)

            for (var i = 0; i < busAlarmList.length; i++) {
                var route = busAlarmList[i].RouteID;
                var stop = busAlarmList[i].BusstopID;
                var token = busAlarmList[i].Token;
                console.log(stop)
                SendAlarmUpdateIos(route, stop, token)
            }

        });
    });
}


var logBaseDir = "Log_99163"
//CODE TO PARSE NEW COORDINATES
function ParsedCoordinates(url, datasetName, callback) {

    if (optionValue != "test") {
        https.get(url, function (res) {
            res.on('data', function (d) {
                try {
                    if (globals.logOption == "rl") {
                        var logDir = logBaseDir + "/99163" + datasetName
                        if (!fs.existsSync(logDir)) {
                            fs.mkdirSync(logDir);
                        }
                        var date = new Date();
                        var year = date.getUTCFullYear()
                        var month = date.getUTCMonth()+1
                        var day = date.getUTCDate()

                        var fileName = "99163" + datasetName + "-" + year + "-" + month + '-' + day + ".txt"
                        if(d != "[]")
                        {
                        debugTool.WriteLog(JSON.stringify(JSON.parse(d)), fileName, logDir)
                    }
                    }
                    callback(JSON.parse(d));
                } catch (e) {
                    console.log("ParsedCoordinate normal Error :" + e);
                }
            });
            res.on('error', function (e) {
                console.error(e);
            });

        });
    } else {
        http.get(url, function (res) {
            res.on('data', function (d) {
                try {
                    callback(JSON.parse(d));
                } catch (e) {
                    console.log("ParsedCoordinate test Error :" + e);
                }
            });
            res.on('error', function (e) {
                console.error(e);
            });

        });
    }
}


function SendApn(token, stop, routeID, time) {


    stop = stop.replace(/[0-9]/g, '');
    routeID = routeID.replace(/[0-9]/g, '');
    //routeID = routeID.replace(/[0-9]/g, '');

    var myDevice = new apn.Device(token);
    var note = new apn.Notification();
    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 1;
    note.sound = "default";
    note.alert = routeID + " Route vehicle is arriving at " + stop + " in " + time + " mins";
    note.payload = {'messageFrom': 'Thrifa'};
    apnConnection.pushNotification(note, myDevice);
}


function RemoveSubscriber(route, stop, token) {

    pool.getConnection(function (err, connection) {
        connection.query('DELETE FROM BusAlarmSubscriberIOS WHERE RouteID = ? AND BusstopID = ? AND Token = ?;', [route, stop, token], function (error, results, fields) {
            connection.release();

            if (error) {
                console.log(error);
            }
        });
    });

}

function GetCertainBusLiveData(routeID, busID, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusLiveData WHERE RouteID = ? AND BusID = ?;', [routeID, busID], function (error, results, fields) {
            // TODO: improve this part
            connection.release()
            callback(results)
        });
    });
}

// UpdateBusCoord(busID, busLat, busLng, routeID)
// LocatorMethodBasedOnDistanceAwayFromPath(busLat, busLng, routeID, results.length, function (numRes) {
function GoogleMapLocationMethod(busLat, busLng, routeID, busID, callback) {
    GetCertainBusLiveData(routeID, busID, function (busData) {
        if (busData.length == 0) {
            callback([{"stopNum": -1, "pathNum": -1, "dToTravel": 0}])
            return;
        }

        var LatestPosition = busData[0].StopNum
        var preLat = busData[0].BusLat
        var preLng = busData[0].BusLng

        var dToTravel = busData[0].DistanceToTravel

        getDatasetName(routeID, function (results) {
            if (results.length <= 0 || typeof results[0] == "undefined")
                return callback([{"stopNum": LatestPosition, "pathNum": -1, "dToTravel": 0}])
            var datasetName = results[0].datasetName
            var routeData = routeData2016Fall[datasetName]

            if (LatestPosition != -1 && preLat != -1 && LatestPosition >= 0) {
                var src = preLat + "," + preLng
                var dest = busLat + "," + busLng
                //here we get the distance from the last time it was updated to the current position we are at now
                distance.get(
                    {
                        index: 1,
                        origin: src,
                        destination: dest
                    },
                    function (err, data) {
                        if (err) return console.log(err);
                        console.log(data.distanceValue)
                        //console.log()
                        //dToTravel holds the distance from our current bus stop to the next
                        //we subtract the distance it took us from the prev coordinates to the current coordinates
                        // and if it less than 0, meaning we have passed the bus stop, hence updating the location
                        dToTravel = parseInt(dToTravel) - parseInt(data.distanceValue)
                        console.log(dToTravel)

                        if (dToTravel <= 0) {
                            console.log("Distance to travel is <= 0")

                            LatestPosition += 1
                            //dToTravel = dataset.FinalSouth[LatestRouteSouthPosition - 1].distance
                            console.log(LatestPosition)
                            var innersrc = busLat + "," + busLng
                            var innerdest = ""

                            //as long as we are not at the last stop,  our destination is the next increment stop
                            if (LatestPosition < routeData.length) {
                                innerdest = routeData[LatestPosition].lat + "," + routeData[LatestPosition].long
                            }
                            //othewise, we are at the last stop, and the next stop starts at index 0
                            else {
                                innerdest = routeData[0].lat + "," + routeData[0].long

                                //the bus latest position is now at the end
                                LatestPosition = parseInt(routeData.length)
                            }

                            distance.get(
                                {
                                    index: 1,
                                    origin: innersrc,
                                    destination: innerdest
                                },
                                function (err, data) {
                                    if (err) return console.log(err);
                                    //now we set a new distance to the next stop
                                    dToTravel = data.distanceValue
                                    console.log("distance to next stop : " + dToTravel)
                                    //console.log("next stop number : " + LatestRouteSouthPosition )
                                });
                            fs.appendFile("Pullman2016FallRouteLog/" + datasetName + ".txt", LatestPosition + ' - ', function (err) {
                                if (err) {
                                    return console.log(err);
                                }
                            });
                            callback([{"stopNum": LatestPosition, "pathNum": -1, "dToTravel": dToTravel}])

                            //so if we alraedy updated the last stop, then set it back to the first stop
                            if (LatestPosition == parseInt(dataset[LatestPosition].length)) {
                                //reset position, so we can use the loop to determine where we are at
                                LatestPosition = 0
                            }
                            return
                        }

                    });
            }

            if (LatestPosition == -1) {
                routeData.forEach(function (entry) {
                    if (Math.abs(entry.lat - busLat) < 0.00095 && Math.abs(entry.long - busLng) < 0.00095) {
                        //set array to 0 before incrementing the next
                        if (LatestPosition == -1) {
                            LatestPosition = entry.stopnum;
                        }

                        if (LatestPosition >= parseInt(routeData.length)) {
                            LatestPosition = 0
                        }

                        //if its 1 then dont update unless it is two
                        //this condition make sure that if we already countered the bus stop, we dont need to log it again
                        if (LatestPosition < entry.stopnum) {
                            if (LatestPosition == 1 && entry.stopnum == parseInt(routeData.length)) {
                                return callback([{"stopNum": LatestPosition, "pathNum": -1, "dToTravel": dToTravel}])
                            }
                            if (LatestPosition <= entry.stopnum) {
                                LatestPosition = entry.stopnum;
                                fs.appendFile("Pullman2016FallRouteLog/" + datasetName + ".log", LatestPosition + ' - ', function (err) {
                                    if (err) {
                                        return console.log(err);
                                    }
                                });
                                callback([{"stopNum": LatestPosition, "pathNum": -1, "dToTravel": dToTravel}])

                            }

                        }
                    }
                    else {
                    }
                });
            }

        });
    });
}

function FindBus(lat, lng, datasetName) {
    var route = pathData2016Fall[datasetName]
    var count = 0

    var busLocation = {"lat": lat, "long": lng};
    //var output = document.getElementById('output');
    var lowestDist = DistanceBetweenLocationsistanceBetweenLocations(busLocation, route[0]);

    for (var i = 1; i < route.length; ++i) {
        var currentDist = DistanceBetweenLocations(busLocation, route[i]);

        if (currentDist < lowestDist) {
            lowestDist = currentDist;
            count = i;
        }
    }
    return count;
}

function DistanceBetweenLocations(location1, location2) {
    var lat1 = location1.lat;
    var lon1 = location1.long;
    var lat2 = location2.lat;
    var lon2 = location2.long;

    var R = 6371e3; // metres
    lat1 = lat1 * (Math.PI / 180);
    lat2 = lat2 * (Math.PI / 180);
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLong = (lon2 - lon1) * (Math.PI / 180);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c * 1000; // return meters
}


function IdToNameAndDataset(id) {
    if (id == "99163Blue") {
        return {route: "RouteBlue", finePath: "BlueRouteData"}
    }
    else if (id == "99163Crimson") {
        return {route: "CrimsonExpress", finePath: "CrimsonRouteData"}
    }
    else if (id == "99163Grey") {
        return {route: "GreyExpress", finePath: "GreyRouteData"}
    }
    else if (id == "99163North") {
        return {route: "North", finePath: "NorthRouteData"}
    }
    else if (id == "99163South") {
        return {route: "South", finePath: "SouthRouteData"}
    }
    else if (id == "99163Silver") {
        return {route: "SilverRoute", finePath: "SilverRouteData"}
    }
    else if (id == "99163Loop") {
        return {route: "LoopRoute", finePath: "LoopRouteData"}
    }
    else if (id == "99163SAT.North") {
        return {route: "SATNorth", finePath: "SATNorthData"}
    }
    else if (id == "99163SAT.South") {
        return {route: "SATSouth", finePath: "SATSouthData"}
    }
    else {
        return {route: "noid", finePath: "noid"}
    }
}


function handleResultsMultiple(results) {
    var data = []
    if (results === undefined) {
        //do something with the results
        return -1;
    }
    else {
        for (var i = 0; i < results.length; i++) {
            var a = {"lat": results[i].lat, "lng": results[i].lng, "busID": results[i].vehicleId}
            data.push(a)
        }
        return data
    }
}

function busTimeToDestination(stopnum, fineroute, lat, lng, routeholder) {
    debugTool.WriteLogToNewFile("########## Received Info stopnum : " + stopnum);
    debugTool.WriteLogToNewFile("########## Received Info lat : " + lat);
    debugTool.WriteLogToNewFile("########## Received Info lng : " + lng);
    var busLocation = {"lat": lat, "long": lng};
    var current = findBus(busLocation, fineroute);
    var loc = fineroute[current].stopnum;
    var destinationIndex = stopnum;
    var startIndex;

    for (var i = 0; i < routeholder.length; i++) {
        if (routeholder[i].stopnum == loc) {
            startIndex = i + 1;
            break;
        }
    }

    console.log("starting " + startIndex);
    var counter = 0
    var totalTime = 0;


    var totalTime = mathHelper.CalculateTime(routeholder, startIndex, destinationIndex)

    if (startIndex == destinationIndex) {
        var totalTime = mathHelper.CalculateTime(routeholder, startIndex, startIndex - 1)
    }

    console.log("time to destination: " + totalTime);

    debugTool.WriteLogToNewFile("########## TIIIIIIIIIIMMMMMMMMMEEEEEEEE: " + totalTime);

    return totalTime

}

function findBus(busLocation, route) {
    var count = 0
    var lowestDist = distanceBetweenLocations(busLocation, route[0]);

    for (var i = 1; i < route.length; ++i) {
        var currentDist = distanceBetweenLocations(busLocation, route[i]);

        if (currentDist < lowestDist) {
            lowestDist = currentDist;
            count = i;
        }
    }
    return count;
}

function distanceBetweenLocations(location1, location2) {
    var lat1 = location1.lat;
    var lon1 = location1.long;
    var lat2 = location2.lat;
    var lon2 = location2.long;

    var R = 6371e3; // metres
    lat1 = lat1 * (Math.PI / 180);
    lat2 = lat2 * (Math.PI / 180);
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLong = (lon2 - lon1) * (Math.PI / 180);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c * 1000; // return meters
}

function IdToPath(id) {
    if (id == "99163Blue") {
        return {route: "RouteBlue", finePath: "BlueRouteData"}
    }
    else if (id == "99163Crimson") {
        return {route: "CrimsonExpress", finePath: "CrimsonRouteData"}
    }
    else if (id == "99163Grey") {
        return {route: "GreyExpress", finePath: "GreyRouteData"}
    }
    else if (id == "99163North") {
        return {route: "North", finePath: "NorthRouteData"}
    }
    else if (id == "99163South") {
        return {route: "South", finePath: "SouthRouteData"}
    }
    else if (id == "99163Silver") {
        return {route: "SilverRoute", finePath: "SilverRouteData"}
    }
    else if (id == "99163Loop") {
        return {route: "LoopRoute", finePath: "LoopRouteData"}
    }
    else if (id == "99163SAT.North") {
        return {route: "SATNorth", finePath: "SATNorthData"}
    }
    else if (id == "99163SAT.South") {
        return {route: "SATSouth", finePath: "SATSouthData"}
    }
    else if (id == "99163Coffee") {
        return {route: "RouteCoffee", finePath: "CoffeeRouteData"}
    }
    else if (id == "99163AM1") {
        return {route: "RouteAM1", finePath: "AM1RouteData"}
    }
    else if (id == "99163AM2") {
        return {route: "RouteAM2", finePath: "AM2RouteData"}
    }
    else if (id == "99163AM3") {
        return {route: "RouteAM3", finePath: "AM3RouteData"}
    }
    else if (id == "99163AM4") {
        return {route: "RouteAM4", finePath: "AM4RouteData"}
    }
    else if (id == "99163AM5") {
        return {route: "RouteAM5", finePath: "AM5RouteData"}
    }
    else if (id == "99163PM1") {
        return {route: "PM1", finePath: "PM1RouteData"}
    }
    else if (id == "99163PM2") {
        return {route: "PM2", finePath: "PM2RouteData"}
    }
    else if (id == "99163PM3") {
        return {route: "PM3", finePath: "PM3RouteData"}
    }
    else if (id == "99163PM4") {
        return {route: "PM4", finePath: "PM4RouteData"}
    }
    else if (id == "99163PM5") {
        return {route: "PM5", finePath: "PM5RouteData"}
    }
    else if (id == "99163PM6") {
        return {route: "PM6", finePath: "PM6RouteData"}
    }
    else if (id == "99163ShuttleA") {
        return {route: "ShuttleA", finePath: "ShuttleARouteData"}
    }
    else if (id == "99163ShuttleB") {
        return {route: "ShuttleB", finePath: "ShuttleBRouteData"}
    }
    else if (id == "99163ShuttleC") {
        return {route: "ShuttleC", finePath: "ShuttleCRouteData"}
    }
    else if (id == "99163ShuttleD") {
        return {route: "ShuttleD", finePath: "ShuttleDRouteData", path: "ShuttleD"}
    }
    else if (id == "99163ShuttleE") {
        return {route: "ShuttleE", finePath: "ShuttleERouteData"}
    }
    else if (id == "99163ShuttleF") {
        return {route: "ShuttleF", finePath: "ShuttleFRouteData"}
    }
    else if (id == "99163CougarExpress4B") {
        return {route: "Express4B", finePath: "Express4BData", path: "Express4B"}
    }
    else if (id == "99163CougarExpress4A") {
        return {route: "Express4A", finePath: "Express4AData", path: "Express4A"}
    }

    else {
        return {route: "noid", finePath: "noid"}
    }


}


exports.getDatasetName = getDatasetName
exports.getSimulationStr = getSimulationStr

exports.startLocatePullmanBus = startLocatePullmanBus
exports.getBusLiveDataForARoute = GetBusLiveDataForARoute
exports.GetBusstopInfo = GetBusstopInfo
exports.GetAlarmInfo = GetAlarmInfo
exports.LocatorMethodBasedOnDistanceAwayFromPath = LocatorMethodBasedOnDistanceAwayFromPath
exports.FindBus = FindBus
exports.IdToNameAndDataset = IdToNameAndDataset
exports.IdToPath = IdToPath

exports.IdToPath = IdToPath


exports.findBus = findBus

exports.LocateEachBus = LocateEachBus
