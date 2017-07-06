/**
 * Created by root on 9/18/16.
 */

var jsonfile = require('jsonfile')

var baseQuery = require('./mysql-query')
var routeInfo = require('./old-data')
var debugHelper = require("../util/debug-helper")

var fs = require('fs')

function UpdateRouteQuery(postcode, city, routeName, color, operationDay, operationTime, routeCode, callback) {
    baseQuery.CheckRoute(routeName, postcode, function (error, results) {
        if (error) {
            console.log("update route:" + routeName + ",error:" + error)
            callback(error);
            return
        }
        if (results.length == 0) {
            console.log("Insert route name" + routeName + ",postcode:" + postcode)
            baseQuery.InsertNewRoute(routeName, color, city, postcode, operationDay, operationTime, routeCode, function (error, results) {
                if (error) {
                    console.log("Insert route error 2 :" + error)
                }
                console.log("Insert route done 2:" + results)
                callback(error, results)
            });
        }
        else {
            // console.log("Insert route name2" + routeName + ",postcode:" + postcode)
            // baseQuery.DeleteRoute(results[0].routeId, function (error, results) {
            //     if (error) {
            //         console.log("fail to delete route:" + routeName + "error:" + error)
            //         callback(error);
            //         return
            //     }
            //     else {
            var routeID = results[0].routeId
            // baseQuery.UpdateRoute(routeName, color, postcode, operationDay, operationTime, routeCode, function (error, results) {
            baseQuery.UpdateRoute(routeID, routeName, color, city, postcode, operationDay, operationTime, routeCode, function (error, results) {
                if (error) {
                    console.log("Insert route error 2")
                }
                callback(error, results)
            });
            //     }
            // });
        }
    });
}

function UpdateAllRoute(infoList, postcode, city) {
    for (var i = 0; i < infoList.length; i++) {
        var infoItem = infoList[i];
        var routeName = infoItem.routeName
        var color = infoItem.Color
        var operationDay = infoItem.OpDays
        var operationTime = infoItem.OpHours
        var routeCode = infoItem.datasetName
        UpdateRouteQuery(postcode, city, routeName, color, operationDay, operationTime, routeCode, function (err, res) {
            if (err) {
                console.log("err" + err)
            }
            else {
                console.log("res" + JSON.parse(JSON.stringify(res)).insertId)
                var routeID = JSON.parse(JSON.stringify(res)).insertId
                if (err) {
                    throw err;
                }
                var file = './stop-data/' + routeCode + ".json"
                ReadStopFile(file, routeID, postcode, city)
            }
        });
    }
}

function UpdateNonExistRoute(infoList) {

}

function UpdateStopQuery(routeID, postcode, city, stopName, stopNum, lat, lng, distance, time) {
    baseQuery.CheckStop(stopName, postcode, function (error, results) {
        if (error) {
            console.log("update stop:" + stopName + ",error:" + error)
            return
        }
        if (results.length == 0) {
            // console.log("update stop2:" + stopName)
            baseQuery.InsertNewStop(stopName, lat, lng, city, postcode, function (error, results) {
                if (error) {
                    console.log("insert stop error 1:" + error)
                }
                else {
                    var stopID = JSON.parse(JSON.stringify(results)).insertId
                    baseQuery.InsertNewRouteStopRelation(routeID, stopID, stopNum, distance, time, function (error, res) {
                        if (error) {
                            console.log("insert stop error 5:" + error)
                            return
                        }
                    });
                }
            });
        }
        else {
            var stopId = results[0].stopId
            baseQuery.UpdateStop(stopId, stopName, lat, lng, city, postcode, function (error, results) {
                // baseQuery.InsertNewStop(stopName, lat, lng, city, postcode, function (error, results) {
                if (error) {
                    console.log("insert stop error 2:" + error)
                    return
                }
                else {
                    var stopID = JSON.parse(JSON.stringify(results)).insertId
                    baseQuery.InsertNewRouteStopRelation(routeID, stopID, stopNum, distance, time, function (error, res) {
                        if (error) {
                            console.log("insert stop error 5:" + error)
                            return
                        }
                    });
                }
            });
        }
    });
}

function UpdateStop(routeID, postcode, city, infoList) {
    // console.dir("****object"+infoList)
    var stopDataset = infoList
    // console.dir("****object"+stopDataset)
    for (var i = 0; i < stopDataset.length; i++) {
        console.log("item:" + stopDataset[i])
        var info = JSON.stringify(stopDataset[i]);
        // console.log("item:" + infoItem)
        var infoItem = JSON.parse(info)
        var stopName = infoItem['stopname']
        var stopNum = infoItem.stopnum
        var lat = infoItem.lat
        // TODO: update item name for new system
        var lng = infoItem.long
        var distance = infoItem.distance
        var time = infoItem.time
        console.log("update stop ****:" + stopName + ",lat:" + lat)
        UpdateStopQuery(routeID, postcode, city, stopName, stopNum, lat, lng, distance, time)
    }
}

function UpdateNonExistStop(infoList) {

}

function UpdatePullmanTransit() {
    var nameList = routeInfo.routeNameList;
    var postcode = "99163"
    var cityName = "Pullman"
    console.log("name list:" + nameList)
    UpdateAllRoute(nameList, postcode, cityName);
    // UpdateAllStops(nameList, postcode, cityName)
}

function ReadStopFile(file, routeID, postcode, cityName) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) {
            console.dir("****err" + err)
        }
        console.dir("****object" + obj)
        var stopDataset = JSON.stringify(obj)
        console.dir("****object" + stopDataset)
        console.dir("name:" + JSON.stringify(obj[0]))
        UpdateStop(routeID, postcode, cityName, obj)
    });

}

function UpdatePathFile(file) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) {
            console.dir("****err" + err)
        }
        console.dir("****object" + obj)
        UpdateStop(routeID, postcode, cityName, obj)
    });
}

function UpdateFinePath() {

}

UpdatePullmanTransit()

exports.UpdatePullmanTransit = UpdatePullmanTransit
