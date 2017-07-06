var locator = require("./bus-locator.js")
var pathData2016Fall = require('../OfficialRoutes/PathCoordinate')
var routeData2016Fall = require('../OfficialRoutes/DistanceData')
var fs = require('fs');

function LastStopMade(datalog, fineroute) {

    for (var i = datalog.length - 1; i > 0; i--) {
        //console.log(datalog[i])
        if (datalog[i] != "") {
            //console.log(JSON.parse(datalog[i])[0].vehicleId)
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            var path = pathData2016Fall[fineroute]
            var index = locator.findBus(busLocation, path)
            console.log(index)
            var position = path[index]
            console.log(position)
            return position.stopname
            //var obj = JSON.parse()
            break;
        }
    }
}

function DatalogFinder(Zipcode, RouteID, date) {
    var zipPath = "Log_" + Zipcode
    var routePath = RouteID
    var dataPath = RouteID + "-" + date + ".txt"

    var data = fs.readFileSync(zipPath + '/' + routePath + '/' + dataPath).toString().split('\n');

    var fpath = locator.IdToPath(RouteID)
    //console.log(data)
    var data = {logdata: data, finepath: fpath.finePath, route: fpath.route}
    return data


}

function TotalStopMade(datalog, fineroute) {
    var count = 0
    var prev = ""
    for (var i = 0; i < datalog.length; i++) {
        if (datalog[i] != "") {
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            var path = pathData2016Fall[fineroute]
            var index = locator.findBus(busLocation, path)
            var position = path[index]
            var pstopnum = position.stopnum

            if (pstopnum != prev) {
                count++
                prev = pstopnum
            }
        }


    }
    //console.log(count)
    return count
}

function TripPercentageComplete(datalog, fineroute, route) {
    var position = ""
    var myroute = routeData2016Fall[route]
    for (var i = datalog.length - 1; i > 0; i--) {
        //console.log(datalog[i])
        if (datalog[i] != "") {
            //console.log(JSON.parse(datalog[i])[0].vehicleId)
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            var path = pathData2016Fall[fineroute]
            var index = locator.findBus(busLocation, path)
            //console.log(index)
            position = path[index]
            console.log(position.stopnum)
            console.log(myroute.length)

            //var obj = JSON.parse()
            break;

        }

    }

    var percentage = (position.stopnum / myroute.length)

    return percentage * 100

}

function GetLatitude(dataLog) {
    if (typeof dataLog != undefined)
        return -1

    var len = dataLog.length
    if (len < 0)
        return -1

    var vehicalInfo = JSON.parse(dataLog[len])[0]
    var vlat = vehicalInfo.lat
    return vlat
}

function GetLongtitude(dataLog) {
    if (typeof dataLog != undefined)
        return -1

    var len = dataLog.length
    if (len < 0)
        return -1
    var vehicalInfo = JSON.parse(dataLog[len])[0]
    var vlng = vehicalInfo.lng
    return vlng
}

function GetLastStopSeqNum(dataLog, fineRoute) {
    if (typeof dataLog != undefined)
        return -1
    var len = dataLog.length
    if (len < 0)
        return -1
    var vehicalInfo = JSON.parse(dataLog[len])[0]
    var vlat = vehicalInfo.lat
    var vlng = vehicalInfo.lng
    var busLocation = {"lat": vlat, "long": vlng};
    var path = pathData2016Fall[fineRoute]
    var index = locator.findBus(busLocation, path)
    var position = path[index]
    return position.stopnum
}

function GetCurrentTime() {
    return new Date();
}

function GetVelocity(dataLog) {
    if (typeof dataLog != undefined)
        return -1

    var len = dataLog.length
    if (len < 0)
        return -1
    var vehicalInfo = JSON.parse(dataLog[len])[0]
    var v = vehicalInfo.velocity
    return v
}

function GetLastStopArrivalTime(datalog, fineroute) {
    // check when is the time last busstop seq num updated
    var stopNum = -1;
    var time = -1
    for (var i = datalog.length - 1; i > 0; i--) {
        if (datalog[i] != "") {
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            var path = pathData2016Fall[fineroute]
            var index = locator.findBus(busLocation, path)

            var position = path[index]
            if (stopNum == -1)
                stopNum = position.stopnum
            else if (stopNum != position.stopnum) {
                time = datalog[i - 1].lastUpdated
                return time;
            }
        }
    }
    return time;
}

function GetIdleMinutes(datalog) {
    var lastlocation = ""
    var endTime = ""
    var time = -1
    for (var i = datalog.length - 1; i > 0; i--) {
        if (datalog[i] != "") {
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            if (lastlocation == "") {
                lastlocation = busLocation
                endTime = vehicalInfo.lastUpdated
            }
            else if (lastlocation != busLocation) {
                time = Date.parse(endTime) - Date.parse(vehicalInfo.lastUpdated)
                return time;
            }

        }
    }
    return time;
}

function ISParking(dataLog) {
    if (GetIdleMinutes(dataLog) > 15000)
        return true
    else
        return false
}

function GetPlanedTripStartTime(scheduleInfo) {

}

function GetActualTripStartTime(dataLog) {
    var firstlocation = ""
    var time = -1
    for (var i = 0; i > dataLog.length; i++) {
        if (datalog[i] != "") {
            var vehicalInfo = JSON.parse(datalog[i])[0]
            var vlat = vehicalInfo.lat
            var vlng = vehicalInfo.lng
            var busLocation = {"lat": vlat, "long": vlng};
            if (firstlocation == "") {
                firstlocation = busLocation
            }
            else if (firstlocation != busLocation) {
                time = vehicalInfo.lastUpdated
                return time;
            }
        }
    }
    return time;
}

function GetAllBus(zipcode)
{
    return 
    // all buses and their routeID.  each bus should have a lat and lng
}

function UpdateRoute(zipcode, routeID, lat, lng)
{
//this should allow the users to update the route name and coordiantes
}

function DeleteFromRoute(zipcode, routeID, lat, lng)
{
//this should allow the users to delete a specific Bus Stop on a route
}

function CreateRoute(zipcode, routeID, lat, lng, arr)
{
//this should allow the users to create a new route. route is in arr
}

function TotalMilesTraveled(zipcode, routeID, busnum)
{
//return the total travel distance
}

function WhereTheBus(zipcode, routeID, busnum, time, date)
{
//return the specific bus location
}


function PlayBack(zipcode, routeID, busnum, date)
{
//this may need to be run on the UI
}

function EmployeesInfo()
{
//return a list of employees, name, drive hours, drive distance
}

function MissedStops(date, routeid, busnum)
{
//return number of missed stop in that day
}

function OnTimePerformance(date, routeid, busnum)
{
//return % of bus is on time with schedule
}

exports.LastStopMade = LastStopMade
exports.DatalogFinder = DatalogFinder
exports.TotalStopMade = TotalStopMade
exports.TripPercentageComplete = TripPercentageComplete
exports.GetLatitude = GetLatitude
exports.GetLongtitude = GetLongtitude
exports.GetLastStopSeqNum = GetLastStopSeqNum
exports.GetCurrentTime = GetCurrentTime
exports.GetVelocity = GetVelocity

