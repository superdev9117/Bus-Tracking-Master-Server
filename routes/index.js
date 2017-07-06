// require module
var dataset = require('./bus-coordinates-dataset.js');
var routeInfoDataset = require('../OfficialRoutes/RouteInfo.js');

var BusRoutes = require('../OfficialRoutes/DistanceData.js');
var BusPath = require('../OfficialRoutes/PathCoordinate.js');
var pathCoordinateDataset = require('./bus-route-path-coordinate-dataset.js');
var debugTool = require("../util/debug-helper")
var routeData2016Fall = require('../OfficialRoutes/DistanceData')
var mysqlHelper = require('../util/mysql-helper.js');
var routeCoodinateGenerator = require('./route-coordinate-generator.js');
var moment = require('moment');
var locator = require("./bus-locator")
var mathHelper = require('../util/math-helper');
var timeDataSet = require('./bus-time.js');
var admin = require('./admin-panel.js');
var fs = require('fs');
var express = require('express'),
    router = express.Router(),
    path = require('path'),
    __parentdirname = path.dirname(module.parent.filename);

//required to read files and http request
var fs = require('fs');
var http = require('http');
var https = require('https');
var mysql = require('mysql');
var apn = require('apn');
var request = require("request");
//var moment = require('moment');
var distance = require('google-distance');
distance.apiKey = 'AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA';

var globals = require("../global")

var optionValue = globals.serverStatus

var db_config = {
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
};

var pool = mysql.createPool({
    connectionLimit: 10000,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
});

// global variable
// var firebasekey = "AIzaSyAs8MIdRW1uTkLVcgPZuGwVvXWucHV7SCE";
var firebasekey = "AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA"

// router
// checking server status 
// only have test status currently/
router.get("getServerStatus", function (req, res) {
    res.send(optionValue)
});

router.get('/', function (req, res) {
    res.sendFile(__parentdirname + '/public/views/index.html');
});

router.get('/SavePosition/:bid/:rname/:did/:lat/:lng/:time', function (req, res) {
    var bid = req.params.bid;
    var rname = req.params.rname;
    var did = req.params.did;


    var lat = req.params.lat;
    var lng = req.params.lng;
    var time = req.params.time;


    

    var datajson = {bid: bid, rname: rname, did: did, lat: lat, lng : lng, time: time}

    console.log(JSON.stringify(datajson))

    var datatosend = JSON.stringify(datajson)

        var rid = rname

        var item = IdToPath(rid)
        if(item.route == "noid")
        {
            res.send("0")
            return
        }

    locator.LocateEachBus(rid, rname, lat, lng, bid)

fs.appendFile('locationdata.txt', datatosend + "\n", function (err) {

    if(err)
    {
        res.send("0")
    }
    else
    {
        res.send("1")
    }
});
});


router.get('/VehicleID/:rid', function (req, res) {
    var rid = req.params.rid;

    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusLiveData WHERE RouteID = ?;', [rid], function (error, busLiveData, fields) {
            connection.release();
            res.send(HandleBLDResult(busLiveData))
        });
        });
});

function HandleBLDResult(data){
    var list = []
    for(var i = 0; i<data.length; i++)
    {
        list.push(data[i].BusID)
    }
    return list
}


router.get('/Admin', function (req, res) {
    res.sendFile(__parentdirname + '/View/admin.html');
});


router.get('/GetNorthOutbound', function (req, res) {
    var Northposition = 0;
    res.send(tempSatNorth[Northposition]);
    Northposition++;
    if (Northposition > tempSatNorth.length) {
        Northposition = 0;
    }
});



router.get('/GetWalkingTime/:src/:dest', function (req, res) {
    var src = req.params.src;
    var dest = req.params.dest;


    distance.get(
        {
            index: 1,
            origin: src,
            destination: dest,
            mode: 'walking'
        },
        function (err, data) {
            if (err) return console.log(err);

            //now we set a new distance to the next stop
            var time = data.duration
            if (time.includes("mins")) {
                time = time.replace("mins", "")
            }
            else if (time.includes("min")) {
                time = time.replace("min", "")
            }
            res.send(time)
        });
});


router.get('/GetPath/:Route', function (req, res) {

    var route = req.params.Route;
    if(route.includes("99163"))
    {

    }
    else
    {
        route = "99163" + route
    }
    var path = IdToPath(route)
    res.send(BusPath[path.path])



});


router.get('/GetRoutePath/:RouteID', function (req, res) {
    var route = req.params.RouteID;
    var path = IdToPath(route)
    console.log("**********path:"+path.path)
    debugTool.WriteLogToNewFile(BusPath[path.path],"path")
    res.send(BusPath[path.path])
});


router.get('/GetBusStops/:Route', function (req, res) {


    var route = req.params.Route;

    if(route.includes("99163"))
    {
    }
    else
    {
        route = "99163" + route
    }
    
    var path = IdToPath(route)
    res.send(BusRoutes[path.route])
});

router.get('/GetArrvingBus/:top', function (req, res) {
    var busStop = req.params.BusStop
});

router.get("/GetEStimulator", function (req, res) {
    res.send(currentStimulatorString)
});

router.get("/GetSimulator/:routeID", function (req, res) {
    var routeID = req.params.routeID;
    debugTool.WriteLogToNewFile("start simulate******************")
    locator.getDatasetName(routeID, function (results) {
        if (results.length > 0) {
            var datasetName = results[0].datasetName
            var resStr = locator.getSimulationStr(datasetName)
            debugTool.WriteLogToNewFile("resStr:" + resStr)
            res.send(resStr)
        }
        else {
            res.send("");
        }
    });
});


//get routes information based on zipcode
router.get("/GetInfo/:zipcode", function (req, res) {

    var zip = req.params.zipcode;


    var today = new Date();
    var localoffset = -(today.getTimezoneOffset() / 60);
    var destoffset = -7;

    var offset = destoffset - localoffset;
    var d = new Date(new Date().getTime() + offset * 3600 * 1000)

    var day = d.getDay()

    console.log(d)
    if (globals.date == "normal") {
        if (day != 6 && day != 0) {

            // var dataToSend = CheckValidTime(dataset.Info_99163)
            // res.send(dataToSend)
             res.send(dataset.Info_99163)
        }
        else if (zip == "99163" && day == 6) {
            var dataToSend = CheckValidTime(dataset.Info_Weekends_99163)
            res.send(dataToSend)

        }
        else if (zip == "99163" && day == 0) {
            //zipcode not found
            res.send(dataset.Info_Unavailable_99163)

        }

    }
else if (globals.date == "football"){
	res.send(routeInfoDataset.Info_foootball_99163)
}
    else if (globals.date == "weekday") {
        // res.send(CheckValidTime(dataset.Info_99163))
        res.send(dataset.Info_99163)
    }
    else if (globals.date == "weekend") {
        // res.send(CheckValidTime(dataset.Info_Weekends_99163))
        res.send(dataset.Info_Weekends_99163)
    }
});


router.get("/GetBusstopInfo/:routeID", function (req, res) {
    var routeID = req.params.routeID
    pool.getConnection(function (err, connection) {
        var queryStr = "SELECT  BusstopNum, lat, lng,BusstopName FROM Route AS R1 JOIN RouteStopRelation AS R2 JOIN Busstop As B1 WHERE R1.RouteID = ? AND R1.RouteID = R2.RouteID AND R2.BusstopID = B1.BusstopID;"
        connection.query(queryStr, [routeID], function (error, results, fields) {
            connection.release();
            res.send(results)
        });
    });
});


router.get("/GetSummerRoutes", function (req, res) {
    res.send(SummerRoutes)
});

//0 for sunday
//1 for saturday
//2 for the weekdays
router.get("/GetStatus", function (req, res) {
    var d = new Date();
    if (d.getDay() == 0) {
        res.status(500).send('0');
    }
    else if (d.getDay() == 6) {
        res.send("1")
    }
    else {
        res.send("2")
    }
});


router.get("/GetBusPosition/:RouteId", function (req, res) {
    var lat = -1;
    var lng = -1;
    var routeID = req.params.RouteId

    locator.getBusLiveDataForARoute(routeID, function (liveBusRes) {
        console.log("routeForPostion:" + routeID)
        var respond = []
        console.log("bussize:" + liveBusRes.length)
        debugTool.WriteLogToNewFile("GetBusPositon live bus size:" + liveBusRes.length)
        for (var i = 0; i < liveBusRes.length; i++) {
            var resItem = liveBusRes[i]
            var str = JSON.stringify(resItem);
            console.log("outpue**:" + str)
            debugTool.WriteLogToNewFile("GetBusPositon live bus index:" + i + ",data:" + str)
            var result = {
                "busID": resItem.BusID,
                "lat": resItem.BusLat,
                "lng": resItem.BusLng,
                "routeID": resItem.RouteID,
                "stopNum": resItem.StopNum,
                "lastUpdated": resItem.LastUpdate
            }
            console.log("res*:" + result)
            respond.push(result)
        }
        // debugTool.WriteLogToNewFile("route:"+ routeID+",send respond lat:"+respond[0].lat + ",lng:" +respond[0].lng)

        console.log("send ****:" + respond)
        res.send(respond)
    })
});

router.get("/GetRoute", function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  * FROM Route;', function (error, results, fields) {
            connection.release();
            // console.log("res:" + results)
            // console.log("error:" + error)
            // console.log("fields:" + fields)
            res.send(results)
        });
    });
});
// Get all bus location that pass the target stop
router.get("/GetArrivingBus/:stop", function (req, res) {
    var stop = req.params.stop

});

router.get("/Simulation/SubscribeBusAlarm/:route/:stop/:token", function (req, res) {
    var route = req.params.route;
    var stop = req.params.stop;
    var token = req.params.token;
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO BusAlarmSubscriber(RouteID,BusstopID, token) VALUES(?,?,?) ON DUPLICATE KEY UPDATE token = token;', [route, stop, token], function (error, results, fields) {
            connection.release();
            // console.log("error: " + error)
            // console.log("results: " + results)
            // console.log("fields: " + fields)

        });
    });
});
router.get("/Simulation/SubscribeBusAlarm/:route/:stop/:token/:os", function (req, res) {
    var route = req.params.route;
    var stop = req.params.stop;
    var token = req.params.token;
    var os = req.params.os;
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO BusAlarmSubscriber(RouteID,BusstopID, token, OS) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE token = token;', [route, stop, token, os], function (error, results, fields) {
            connection.release();
            // console.log("error: " + error)
            // console.log("results: " + results)
            // console.log("fields: " + fields)

        });
    });
});


router.get("/Simulation/SubscribeBusAlarmIOS/:route/:stop/:token/:time", function (req, res) {
    var route = req.params.route;
    var stop = req.params.stop;
    var token = req.params.token;
    var time = req.params.time;
    console.log(stop)
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO BusAlarmSubscriberIOS(RouteID,BusstopID, token, time) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE token = token;', [route, stop, token, time], function (error, results, fields) {
            connection.release();
        });
    });


});

router.get("/Simulation/UnsubscribeBusAlarm/:route/:stop/:token", function (req, res) {
    var route = req.params.route;
    var stop = req.params.stop;
    var token = req.params.token;
    console.log("unsub alarm");
    pool.getConnection(function (err, connection) {
        connection.query('DELETE FROM BusAlarmSubscriber WHERE RouteID = ? AND BusstopID = ? AND Token = ?;', [route, stop, token], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log(error);
            }

        });
    });
});


router.get("/GetBusstopTimeInfo/:stop", function (req, res) {
    var stop = req.params.stop
    locator.GetBusstopInfo(stop, function (data) {
        res.send(data)
    })
});  

router.get("/GetRemainingTimeForARoute/:route/:stop", function (req, res) {
    var routeID = req.params.route
    var stopID = req.params.stop
    locator.GetAlarmInfo(stopID, routeID, function (data) {
        res.send(data)
    });
});

router.get("/Simulation/SubscribeBusstop/:stop/:token", function (req, res) {
    var stop = req.params.stop;
    var token = req.params.token;

    var count = 0;
    var resultcounter = 0
    debugTool.WriteLogToNewFile("########## sim sub")
    var responseJsonMessage = [];
    QueryRoutePassCertainStopWithCallback(stop, function (err, data) {
        debugTool.WriteLogToNewFile("########## sim query stop")
        if (err) {
            // error handling code goes here
            console.log("ERROR : ", err);
            debugTool.WriteLogToNewFile("########## sim query error:" + err)
        } else {
            // code to execute on data retrieval
            console.log("result from db is : -----------------------------------------------------------------", data);
            debugTool.WriteLogToNewFile("########## sim query res:" + JSON.stringify(data));
            var busstopList = data;
            if (data.length == 0) {
                console.log("no fit result a")
                debugTool.WriteLogToNewFile("########## sim query nofit");
            }
            else {
                var resCounter = 0;
                debugTool.WriteLogToNewFile("########## sim query len:" + busstopList.length);
                for (var j = 0; j < busstopList.length; j++) {
                    var jsonResult = JSON.stringify(busstopList[j]);
                    if (typeof jsonResult != 'undefined') {
                        var routeID = busstopList[j].RouteID;
                        var routeName = busstopList[j].RouteName;
                        var stopNum1 = busstopList[j].BusstopNum;

                        debugTool.WriteLogToNewFile("########## busstopList[j].routeID:" + JSON.stringify(busstopList[j].RouteID));
                        debugTool.WriteLogToNewFile("########## busstopList[j].BusstopNum:" + JSON.stringify(busstopList[j].BusstopNum));


                        GetBusLiveDataForARoute(routeID, function (results) {

                            if (results.length > 0) {


                                //had to loop the 2nd time to get bus stop position due to async
                                for (var i = 0; i < busstopList.length; i++) {

                                    if (JSON.stringify(busstopList[i].RouteID) == JSON.stringify(results[0].RouteID)) {
                                        var busstopnum = JSON.stringify(busstopList[i].BusstopNum)
                                        var fineroutepath = ""
                                        var routeInfo = IdToPath(results[0].RouteID)
                                        var min = 0
                                        var remaintime = 99999
                                        //get the soonest arrival time 
                                        for (var v = 0; v < results.length; v++) {
                                            var lat = results[v].BusLat
                                            var lng = results[v].BusLng
                                            var time = busTimeToDestination(busstopnum, BusPath[routeInfo.finePath], lat, lng, BusRoutes[routeInfo.route])
                                            if (time < remaintime && time >= 0) {
                                                remaintime = time
                                            }
                                            if (remaintime >= 99999) {
                                                remaintime = -1
                                            }
                                            resultcounter++
                                        }
                                        remaintime = Math.ceil(remaintime)
                                        //debugTool.WriteLogToNewFile("########## access array dynamiclly :" + JSON.stringify(routeInfo));
                                        // = busTimeToDestination(busstopnum, BusPath[routeInfo.finePath], lat, lng, BusRoutes[routeInfo.route])
                                        if (resultcounter == results.length) {
                                            responseJsonMessage.push(
                                                {
                                                    "RouteID": results[0].RouteID,
                                                    "Time": remaintime,
                                                    "RouteName": results[0].RouteName,
                                                    "BusstopID" :stop,
                                                     "StopNum":busstopnum,
                                                }
                                            );
                                            resCounter++;
                                            resultcounter = 0
                                        }
                                    }

                                }

                            }
                            else {
                                resCounter++;
                            }
                            if (resCounter == busstopList.length) {
                                if (count == 0) {
                                    debugTool.WriteLogToNewFile("########## sim query send back:" + JSON.stringify(responseJsonMessage));
                                    res.send(JSON.stringify(responseJsonMessage))
                                    count = 1
                                }
                            }
                        });
                    }
                    else {
                    }
                }
            }
        }
    });
});

router.get("/Simulation/SubscribeBusstop/:stop/:token/:os", function (req, res) {
    var stop = req.params.stop;
    var token = req.params.token;
    var os = req.params.os;
    // tempRegList.push({"token": token, "stop": stop})

    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO BusstopSubscriber(BusstopID, token, OS) VALUES(?,?, ?);', [stop, token, os], function (error, results, fields) {
            connection.release();
            console.log("error: " + error)
            // console.log("results: " + results)
            // console.log("fields: " + fields)

        });
    });

    pool.getConnection(function (err, connection) {
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopID FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            if (error)
                console.log("error **:" + error)
            else {
                console.log("res **:" + JSON.stringify(results[0]))
                res.send(results)
            }
        });
    });
});

router.get("/Simulation/UnsubscribeBusstop/:stop/:token", function (req, res) {
    var stop = req.params.stop;
    var token = req.params.token;
    pool.getConnection(function (err, connection) {
        connection.query('DELETE FROM BusstopSubscriber WHERE BusstopID = ? AND Token = ?;', [stop, token], function (error, results, fields) {
            connection.release();
        });
    });
});

router.get("/GetBusTimeInfoFromAStop/:stop/:token", function (req, res) {
    var stop = req.params.stop;
    var token = req.params.token;
    // TODO: change busID instead of routeID, make it available for multiple bus
    pool.getConnection(function (err, connection) {
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopNum FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();
            var responseJsonMessage = [];
            var busstopList = results;
            if (results.length == 0) {
                console.log("no fit result 3")
            }
            else {
                for (var j = 0; j < busstopList.length; j++) {
                    var jsonResult = JSON.stringify(busstopList[j]);
                    if (typeof jsonResult != 'undefined') {
                        var routeID = busstopList[j].RouteID;
                        var routeName = busstopList[j].RouteName;
                        var stopNum = busstopList[j].BusstopNum;

                        var rTime = -1;
                        var currentBusstopNum = -1;

                        if (routeID == '99163E') {
                            rTime = mathHelper.CalculateTime(timeDataSet.ETime, LatestRouteEPosition, stopNum);
                            currentBusstopNum = LatestRouteEPosition
                        }
                        else if (routeID == '99163I') {
                            rTime = mathHelper.CalculateTime(timeDataSet.ITime, LatestRouteIPosition, stopNum);
                            currentBusstopNum = LatestRouteIPosition
                        }
                        else if (routeID == '99163South') {
                            rTime = mathHelper.CalculateTime(timeDataSet.South, LatestRouteSouthPosition, stopNum);
                            currentBusstopNum = LatestRouteSouthPosition
                        }
                        else {
                            //ignore
                        }
                        responseJsonMessage.push(
                            {
                                "RouteID": routeID,
                                "RouteName": routeName,
                                "StopNum": currentBusstopNum,
                                "BussopID": stop,
                                "Time": rTime,
                            }
                        );
                    }
                }
                res.send(responseJsonMessage);
            }
        });
    });
});

function QueryRoutePassCertainStopWithCallback(stop, callback) {
    //var routeDataSet = []
    console.log("start query route stop:" + String(stop));
    //get remaining time by routesId and stopId
    pool.getConnection(function (err, connection) {
        if(err)
        {
            connection.release();
            callback(err,null);
            return;
        }
        connection.query('SELECT  Route.RouteID, Route.RouteName, RouteStopRelation.BusstopNum FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ?;', [stop], function (error, results, fields) {
            connection.release();

            if (error)
                callback(error, null);
            else
                callback(null, results);

        });
    });

}

function CheckValidTime(dataset) {

    var d = new Date()
    var timeholder = []
    var hr = new Date().getUTCHours();
    var min = new Date().getMinutes()
    var n = 7 //PST Offset
    var time = hr - n
    //console.log(time)    
    if (time < 0) {
        hr = 24 - Math.abs(time)

    }
    else {
        hr = hr - n
    }


    hr = parseInt(hr)
    min = parseInt(min)

    for (var i = 0; i < dataset.length; i++) {
        var ophour = dataset[i].OpHours
        ophour = ophour.split('-')


        var starthr = moment(ophour[0], "H:mma").format("HH")
        var startmin = moment(ophour[0], "H:mma").format("mm")

        var endhr = moment(ophour[1], "H:mma").format("HH")
        var endmin = moment(ophour[1], "H:mma").format("mm")

        starthr = parseInt(starthr)
        startmin = parseInt(startmin)
        endhr = parseInt(endhr)
        endmin = parseInt(endmin)


        // console.log("starthr")
        // console.log(starthr)
        // console.log("startmin")
        // console.log(startmin)
        // if(hr < startmin)
        // {
        //  console.log("lolololol")
        // }

        console.log("time: ")
        console.log(hr)
        console.log(starthr)
        console.log(endhr)

        if (hr >= starthr && hr <= endhr) {
            timeholder.push(dataset[i])

        }

    }

    return timeholder

}

function GetBusLiveDataForARoute(routeID, callback) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT * FROM BusLiveData WHERE RouteID = ?;', [routeID], function (error, results, fields) {
            connection.release()
            callback(results, routeID);
        });
    });
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
        //totalTime = 0
    }



    console.log("time to destination: " + totalTime);

    debugTool.WriteLogToNewFile("########## TIIIIIIIIIIMMMMMMMMMEEEEEEEE: " + totalTime);

    return totalTime

}

function findBus(busLocation, route) {
    var count = 0
    //var output = document.getElementById('output');
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
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(id)
    if (id == "99163Blue") {
        return {route: "RouteBlue", finePath: "BlueRouteData", path: "RouteBlue"}
    }
    else if (id == "99163Crimson") {
        return {route: "CrimsonExpress", finePath: "CrimsonRouteData", path: "CrimsonExpress"}
    }
    else if (id == "99163Grey") {
        return {route: "GreyExpress", finePath: "GreyRouteData", path: "GreyExpress"}
    }
    else if (id == "99163North") {
        return {route: "North", finePath: "NorthRouteData", path: "North"}
    }
    else if (id == "99163South") {
        return {route: "South", finePath: "SouthRouteData", path: "South"}
    }
    else if (id == "99163Silver") {
        return {route: "SilverRoute", finePath: "SilverRouteData", path: "SilverRoute"}
    }
    else if (id == "99163Loop") {
        return {route: "LoopRoute", finePath: "LoopRouteData", path: "LoopRoute"}
    }
    else if (id == "99163SAT.North") {
        return {route: "SATNorth", finePath: "SATNorthData", path: "SATNorth"}
    }
    else if (id == "99163SAT.South") {
        return {route: "SATSouth", finePath: "SATSouthData", path: "SATSouth"}
    }
    else if (id == "99163Coffee") {
        return {route: "RouteCoffee", finePath: "CoffeeRouteData", path: "RouteCoffee"}
    }
    else if (id == "99163AM1") {
        return {route: "RouteAM1", finePath: "AM1RouteData", path: "RouteAM1"}
    }
    else if (id == "99163AM2") {
        return {route: "RouteAM2", finePath: "AM2RouteData", path: "RouteAM2"}
    }
    else if (id == "99163AM3") {
        return {route: "RouteAM3", finePath: "AM3RouteData", path: "RouteAM3"}
    }
    else if (id == "99163AM4") {
        return {route: "RouteAM4", finePath: "AM4RouteData", path: "RouteAM4"}
    }
    else if (id == "99163AM5") {
        return {route: "RouteAM5", finePath: "AM5RouteData", path: "RouteAM5"}
    }
    else if (id == "99163PM1") {
        return {route: "PM1", finePath: "PM1RouteData", path: "PM1"}
    }
    else if (id == "99163PM2") {
        return {route: "PM2", finePath: "PM2RouteData", path: "PM2"}
    }
    else if (id == "99163PM3") {
        return {route: "PM3", finePath: "PM3RouteData", path: "PM3"}
    }
    else if (id == "99163PM4") {
        return {route: "PM4", finePath: "PM4RouteData", path: "PM4"}
    }
    else if (id == "99163PM5") {
        return {route: "PM5", finePath: "PM5RouteData", path: "PM5"}
    }
    else if (id == "99163PM6") {
        return {route: "PM6", finePath: "PM6RouteData", path: "PM6"}
    }
    else if (id == "99163ShuttleA") {
        return {route: "ShuttleA", finePath: "ShuttleARouteData", path: "ShuttleA"}
    }
    else if (id == "99163ShuttleB") {
        return {route: "ShuttleB", finePath: "ShuttleBRouteData", path: "ShuttleB"}
    }
    else if (id == "99163ShuttleC") {
        return {route: "ShuttleC", finePath: "ShuttleCRouteData", path: "ShuttleC"}
    }
    else if (id == "99163ShuttleD") {
        return {route: "ShuttleD", finePath: "ShuttleDRouteData", path: "ShuttleD"}
    }
    else if (id == "99163ShuttleE") {
        return {route: "ShuttleE", finePath: "ShuttleERouteData", path: "ShuttleE"}
    }
    else if (id == "99163ShuttleF") {
        return {route: "ShuttleF", finePath: "ShuttleFRouteData", path: "ShuttleF"}
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

function testParseTime() {
   var t1 = "2016-09-06T18:40:50" 
    var t2 = "2016-09-06T18:45:50"
  var t3 =  Date.parse(t2)-Date.parse(t1)
    debugTool.WriteLogToNewFile(t3,"time parse")
}

// testParseTime()

debugTool.TruncateLog();
locator.startLocatePullmanBus();



//Build a Route inside BusLocationLog
// routeCoodinateGenerator.NewRouteModel("Express3C")

//Create Path inside BusLocationLog
// routeCoodinateGenerator.startGenerate("Express4B")

//CreateFine Path  inside BusLocationLog
/*routeCoodinateGenerator.GeneratePath(BusPath["Express2A"], "2", "Express2A")
*/

// CheckValidTime(dataset.Info_99163)

//var tempE = fs.readFileSync('OfficialSimRoutes/OfficialBlueRoute.txt').toString().split('\n');

//
// var routeblue = admin.DatalogFinder("99163", "99163Blue", "16-09-04")
// //console.log(routeblue)
// var a = admin.TripPercentageComplete(routeblue.logdata, routeblue.finepath, routeblue.route)
// console.log(a)
module.exports = router;


