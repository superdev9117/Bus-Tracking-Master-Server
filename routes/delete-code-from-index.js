/**
 * Created by root on 7/5/16.
 */
var LatestRouteEPosition = -1;
var LatestRouteIPosition = -1;
var LatestRouteSouthPosition = -1;
var LatestRouteNorthPosition = -1;

function testNotification(routeIdentifier) {
    //token to be removed
    var unUsedToken = []
    //process by route identifier
    if (routeIdentifier == 1) {
        //grab all tid from database and try to send it to the users
        connection.query('SELECT * FROM EROUTE;', function (error, results, fields) {
            //results contain an array of json objects that contains our data from mysql
            for (var j = 0; j < 1; j++) {
                var jsonResult = JSON.stringify(results[j])
                if (typeof jsonResult != 'undefined') {
                    console.log("results[j].bustop is: " + results[j].bustop)
                    var rTime = mathHelper.CalculateTime(timeDataSet.ETime, LatestRouteEPosition, results[j].bustop)
                    console.log('1indicater:' + j)
                    request({
                        uri: "https://fcm.googleapis.com/fcm/send",
                        method: "POST",
                        headers: { //We can define headers too
                            'Content-Type': 'application/json',
                            'Authorization': 'key=AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA'
                        },
                        json: {
                            "data": {
                                "time": rTime
                            },
                            "content_available": true,
                            "priority": "high",
                            "to": String(results[j].tid)
                        }
                    }, function (error, response, body) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(response.statusCode, body);
                        }
                    });
                    if (rTime <= 0) {
                        //remove token after sending notification if time is 0
                        connection.query('DELETE FROM EROUTE WHERE tid = ?;', results[j].tid, function (error, results, fields) {
                        });
                    }
                    console.log("sent to token : " + String(results[j].tid))
                    console.log("with remainer time of : " + rTime)
                }
                else {
                    console.log("empty db")
                }
            }

        });
    }
    //delete all records when you send
    /*    connection.query('Truncate table USERS;', function (error, results, fields) {

     });*/
}

function testFirebaseMultiUser() {
    var tokenList = [
        "fZP_6VWY8XQ:APA91bH_ODPEbd0-Ydd8HPO3chPMPSx9_njU7cb2IXph8xs61KFkHQig9QQ4rIoIGtEFnHgaegzl0QFjU9af_sK9eARgmvbZwT-falh3nSouFWd2ELgrd1lx2xJuoHPYr40oFRDmzi8L",
        "fsyI8B-f-mY:APA91bG-SoxAWz8w6LfrcwAxP8Q6mRRre081PGdusnx49whY6rA-mM6Xjy4w2PyBl0-WWtnjQttuJc6PNfPcaUJX11T1MMbHNXl3GWDd2JoIa4iBh58nDm-t53h-LCSuZTyO-5RtlYbX",
        "eTlivrBVmRE:APA91bE_KzY0rG9hQYtYIBnpYdstDOYxHLV1HFSncPdr0_QRQj-_Qkf_5WTOdfQ6muvVTjVcEnMDRWvEWVyVybGxsvk58bNwh-K0iJZIp-VIzBWxOC5pKEKoZpGqQ8hhZGS-LENpm6Jf"
    ]

    for (var i = 0; i < 3; i++) {
        console.log("send index:" + i)
        request({
            uri: "https://fcm.googleapis.com/fcm/send",
            method: "POST",
            headers: { //We can define headers too
                'Content-Type': 'application/json',
                'Authorization': 'key=AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA'
            },
            json: {
                "priority": "high",

                // "data": {
                //     "routeID": routeID,
                //     "routeName": routeName,
                //     "stopNum":stopNum,
                //     "stopID": stop,
                //     "time": rTime,
                //     "sendFrom": "local"
                // },
                "data": {

                    "content_available": true,
                    "test data": "test message"

                },
                "content_available": true,
                "priority": "high",
                "to": String(tokenList[i])
            }
        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
            }
        });
    }
}


// function UpdateBusLocation(routeID, busstopSize, busID, isSimulation, coordinateDataset) {
//     var http = require('http')
//     var str = ''
//     var options
//     if (isSimulation == true) {
//         options = {
//             host: 'localhost',
//             port: '3000',
//             path: '/GetEStimulator'
//         };
//     }
//     else {
//         options = {
//             host: 'pullman.mapstrat.com',
//             path: '/nextvehicle/buslocator.axd?&shapeids=,' + busID
//         }
//     }
//     callback = function (response) {
//         response.on('data', function (chunk) {
//             str += chunk;
//         });
//         response.on('end', function () {
//             if (str == "PlotBusLocations([]);") {
//                 console.log('no output');
//                 return;
//             }
//             str += "\n";
//             var oldlat, oldlong;
//             var newstr = str.slice(55, 80);
//             var aftersplit = newstr.split(',');
//             var latnlong = {"lat": aftersplit[0], "long": aftersplit[1]};
//             var currentBusLocation = latnlong;
//             var i = 0;
//             dataset[coordinateDataset].forEach(function (entry) {
//                 if (Math.abs(entry.lat - aftersplit[0]) < 0.00095 && Math.abs(entry.long - aftersplit[1]) < 0.00095 && aftersplit[0] != oldlat && aftersplit[1] != oldlong) {
//                     busArray = new Array(busstopSize).fill("0");
//                     // busArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
//                     if (LatestRouteEPosition >= busstopSize) {
//                         LatestRouteEPosition = 0
//                     }
//                     if (LatestRouteEPosition < entry.stopnum) {
//                         LatestRouteEPosition = entry.stopnum
//                         busArray[entry.stopnum - 1] = 1;
//                         oldlat = aftersplit[0];
//                         oldlong = aftersplit[1];
//
//                         fs.appendFile("BusRoutesLog/newE500.txt", entry.stopnum + ' - ', function (err) {
//                             if (err) {
//                                 return console.log(err);
//                             }
//                         })
//                     }
//                 }
//                 i++;
//             });
//         });
//     };
// //making the call, we need this here so it can do a call back
//     var req = http.request(options, callback).on('error', function (e) {
//         console.log("Got error: " + e.message);
//     }).end();
// }
// router end

var tempRegList = JSON.parse('[]')

function clearRegList() {
    tempRegList = JSON.parse('[]')
}


router.get("/Simulation/Busstop/:stop/:token", function (req, res) {
    console.log("*****************************")
    var stop = req.params.stop
    var token = req.params.token
    tempRegList.push({"token": token, "stop": stop})
    connection.query('SELECT  Route.RouteID FROM Route JOIN RouteStopRelation ON Route.RouteID = RouteStopRelation.RouteID WHERE RouteStopRelation.BusstopID = ? GROUP BY Route.RouteID;', [stop], function (error, results, fields) {
        // console.log("res:" + results)
        // console.log("error:" + error)
        // console.log("fields:" + fields)
        res.send(results)
    });
})

function CalcDistanceBetween(lat1, lon1, lat2, lon2) {
    //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
    var R = 3958.7558657440545; // Radius of earth in Miles 
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    //d is in kilometers
    return d;
}
function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}