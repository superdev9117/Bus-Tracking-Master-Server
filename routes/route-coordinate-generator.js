var http = require('http');
var geolib = require('geolib');
var fs = require('fs');
var dataset = require('./bus-coordinates-dataset.js');
var newDataset = require('../OfficialRoutes/DistanceData');
var debugTool = require('../util/debug-helper')
var distance = require('google-distance');
distance.apiKey = 'AIzaSyApTm5oTUNR4x2QwLjqDGIZEzMZRmVumvA';


var https = require('https');
var googleApiKey = 'AIzaSyDNEDyzKF4qEOmfhlN1RLQn-fLK2rpO9Fk'

var polyline = require('polyline');

var pathCounter = 0;

function generateRouteCoodinate(startLat, startLng, endLat, endLng, busStopNum, busStopName, routeName) {
    var http = require('http');
    var responseStr = '';
    var pathStr = '/api/GeneratePathPoints?'

    pathStr += 'startLat=';
    pathStr += String(startLat)
    pathStr += '&startLng='
    pathStr += String(startLng)
    pathStr += '&endLat='
    pathStr += String(endLat)
    pathStr += '&endLng='
    pathStr += String(endLng)

    var options = {
        host: 'api.mapstrat.com',
        path: pathStr
    };

    console.log(options)
    callback = function (response) {
        response.on('data', function (chunk) {
            responseStr += chunk;
        });

        response.on('error', function (err) {
            console.log('encountered an error.  error details below: ');
            console.log(err)
        });

        response.on('end', function () {
            var output = '';
            var jsonData = JSON.parse(responseStr);

            try {
                if (jsonData.Message != null) {
                    console.log('message:' + jsonData.Message)
                    return
                }
            }
            catch (e) {
                console.log("no message");
            }


            for (var i = 0; i < jsonData.length; i++) {
                var point = jsonData[i];
                console.log('data num:' + i + 'data:' + point);
                pathCounter++;
                output += "{'stopnum':"
                output += String(busStopNum)
                output += ", 'lat':"
                output += point.lat
                output += ", 'long':"
                output += point.lng
                output += ", 'stopID':'"
                output += ("99163" + String(busStopName))
                output += "', 'stopname':'"
                output += String(busStopName)
                output += "', 'pathcounter':"
                output += String(pathCounter)
                output += "}"
                output += ',\n'

            }
            // your code here if you want to use the results !
            //we should have our final strings here
            //should save this string to route




            fs.appendFile("BusLocationLog/" + routeName + "CoordinateData" + ".txt", output, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved for route:" + routeName);
                startGenerate()
            });
            console.log('respon:' + responseStr);
            console.log('output:' + output)
        });
    };

//making the call, we need this here so it can do a call back
    var req = http.request(options, callback).end();
}


var counter = 0
function startGenerate(distancedataid) {
    var routeNameList = [String(distancedataid)]
    debugTool.WriteLogToNewFile('start',"pathgen")
    var i = 0
    var routeName = routeNameList[i]
    var data = newDataset[routeName];
    var entry = data[counter]
    
    if (counter >= data.length - 1) {
        console.log('last one')
        if(entry)
        {
            generateRouteCoodinateWithGoogleApi(entry.lat, entry.long, data[0].lat, data[0].long, entry.stopnum, entry.stopname, routeName, distancedataid)
        }
    }
    else
    {
        console.log("testing to see if this is the breaking point")

        if(entry)
        {
            generateRouteCoodinateWithGoogleApi(entry.lat, entry.long, data[counter + 1].lat, data[counter + 1].long, entry.stopnum, entry.stopname, routeName , distancedataid)
    }
    }
    counter++;
}

function generateRouteCoodinateWithGoogleApi(startLat, startLng, endLat, endLng, busStopNum, busStopName, routeName, id) {
    var responseStr = '';
    var pathStr = '/maps/api/directions/json?'
    pathStr += 'origin=';
    pathStr += String(startLat)
    pathStr += ','
    pathStr += String(startLng)
    pathStr += '&destination='
    pathStr += String(endLat)
    pathStr += ','
    pathStr += String(endLng)
    pathStr += '&key='
    pathStr += googleApiKey

    var options = {
        host: 'maps.googleapis.com',
        path: pathStr
    };

    console.log(options)
    callback = function (response) {
        response.on('data', function (chunk) {
            responseStr += chunk;
            debugTool.WriteLogToNewFile('chuck:' + chunk,"pathgen")
        });

        response.on('error', function (err) {
            console.log('encountered an error.  error details below: ');
            console.log(err)
            debugTool.WriteLogToNewFile(err,"pathgen")
        });

        response.on('end', function () {
            var output = '';
            var jsonData = JSON.parse(responseStr);
            debugTool.WriteLogToNewFile('data:' + jsonData,"pathgen")

            try {
                if (jsonData.Message != null) {
                    console.log('message:' + jsonData.Message)
                    debugTool.WriteLogToNewFile('message:' + jsonData.Message,"pathgen")
                    return
                }
            }
            catch (e) {
                console.log("no message");
            }

            var pointList = jsonData.routes

            for (var i = 0; i < pointList.length; i++) {
                var pathInfo = pointList[i];
                var overviewPolyline = pathInfo.overview_polyline
                var points = overviewPolyline.points
                var decodePoints = polyline.decode(points)

                for (var j = 0; j < decodePoints.length; j++) {
                    var point = decodePoints[j]
                    console.log('data num:' + j + 'data: ' + point);
                    var coords = String(point).split(',');
                    output += "{'stopnum':"
                    output += String(busStopNum)
                    output += ", 'lat':"
                    output += coords[0]
                    output += ", 'long':"
                    output += coords[1]
                    output += ", 'stopID':'"
                    output += ("99163" + String(busStopName))
                    output += "', 'stopname':'"
                    output += String(busStopName)
                    output += "', 'pathcounter':"
                    output += String(pathCounter)
                    output += "}"
                    output += ',\n'
                }
            }
            fs.appendFile("BusLocationLog/" + routeName + "CoordinateData" + ".txt", output, function (err) {
                if (err) {
                    return console.log(err);
                }
                startGenerate(id)
                console.log("The file was saved for route:" + routeName);
            });
        });
    };

    debugTool.WriteLogToNewFile('making call',"pathgen")
//making the call, we need this here so it can do a call back
    var req = https.request(options, callback).end();

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


function RouteMaker() {
    //Route E : 3955
    var rHolder = []
    var rData = dataset.TestParsingRouteE

    for (var i = 0; i < rData.length; i++) {

        console.error(rData[i]);
        var snum = i + 1
            var a = {"stopnum": snum, "lat": rData[i].Latitude, "long": rData[i].Longitude, "stopname": rData[i].StopName}

        
        rHolder.push(a)

        var b = JSON.stringify(a) + ",\n"

        fs.appendFile("E.txt", b, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    }
    return rHolder
}

function GetDistance(src, dest, callback) {

    distance.get(
        {
            index: 1,
            origin: src,
            destination: dest
        },
        function (err, data) {
            if (err) return console.log(err);
            callback(data)
        });
}


function NewRouteModel(rname) {
    var mydataset = []
    var a = RouteMaker()
    //var a = dataset.FinalSouth

    var forEach = require('async-foreach').forEach;
    forEach(a, function (item, index, arr) {
        if (arr[index + 1] !== undefined) {
            var src = String(item.lat) + "," + String(item.long)
            var dest = String(arr[index + 1].lat) + "," + String(arr[index + 1].long)
            var indx = item.stopnum
            distance.get(
                {
                    index: indx,
                    origin: src,
                    destination: dest
                },
                function (err, data) {
                    if (err) return console.log(err);
                    var time = data.durationValue
                    //sec to mins conversion
                    time = (time * 0.0166667)
                    var dataset = {
                        stopnum: data.index,
                        lat: arr[data.index - 1].lat,
                        long: arr[data.index - 1].long,
                        stopname: arr[data.index - 1].stopname,
                        distance: data.distanceValue,
                        time: time.toFixed(2)
                    }
                    mydataset.push(dataset)
                });
        }

        else {
            //console.log("hellllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllo")
            //console.log(item.stopnum)
            var src = String(item.lat) + "," + String(item.long)
            var dest = String(arr[0].lat) + "," + String(arr[0].long)


            distance.get(
                {
                    index: item.stopnum,
                    origin: src,
                    destination: dest
                },
                function (err, data) {
                    if (err) return console.log(err);

                    //console.log(data);
                    //console.log("each", arr);
                    var time = data.durationValue
                    //sec to mins conversion
                    time = time * 0.0166667


                    var dataset = {
                        stopnum: data.index,
                        lat: arr[data.index - 1].lat,
                        long: arr[data.index - 1].long,
                        stopname: arr[data.index - 1].stopname,
                        distance: data.distanceValue,
                        time: time.toFixed(2)
                    }
                    mydataset.push(dataset)
                    //        fs.appendFile("DistanceData.txt", JSON.stringify(dataset) + ",\n", function (err) {
                    //     if (err) {
                    //         return console.log(err);
                    //     }

                    // })
                    console.log(mydataset)
                    SortJson(mydataset, rname)


                });


        }


    });


}



function SortJson(array, rname) {

    fs.appendFileSync("BusLocationLog/" + rname + "BusStops" + ".txt", "var " + rname + "BusStops = [\n", encoding = 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        

    })
    var count = 0
    var counter =0 
    for (var i = 0; i <= array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (i == array[j].stopnum) {
                var data = JSON.stringify(array[j]) + ",\n"

                fs.appendFileSync("BusLocationLog/" + rname + "BusStops" + ".txt", data, encoding = 'utf8', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                count++
            }
        }
    }

    fs.appendFileSync("BusLocationLog/" + rname + "BusStops" + ".txt", "];\n", encoding = 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    })

    if(count != array.length)
    {
        NewRouteModel(rname)

        fs.appendFileSync("BusLocationLog/" + rname + "BusStops" + ".txt", "Fail to generate all path " + count + "/" + array.length + ".  Clear this file and run the functions again.\n", encoding = 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
        })
    }


}


var CoordinatesSet = []

function GeneratePath(array, dist, name)
{
    var newarray = []
    var count = 0

    for(var i =0; i< array.length; i++)
    {
        if(array[i+1])
        {
        var l1 = parseFloat("123.456").toFixed(2);

        var mydist = geolib.getDistance(
        {latitude: parseFloat(array[i].lat).toFixed(7), longitude: parseFloat(array[i].long).toFixed(7)},
        {latitude: parseFloat(array[i+1].lat).toFixed(7), longitude: parseFloat(array[i+1].long).toFixed(7)}
        );

        var data = {'stopnum':array[i].stopnum, 'lat':array[i].lat, 'long':array[i].long, 'stopname':array[i].stopname}
        newarray.push(data)
        if(mydist > dist)
        {
            var coords = GetPointBetween(array[i].lat, array[i].long, array[i+1].lat, array[i+1].long )

            var data = {'stopnum':array[i].stopnum, 'lat':coords.lat, 'long': coords.lng, 'stopname':array[i].stopname}
            newarray.push(data)
            count ++
        }
        else
        {}
        }
        else
        {

        var mydist = geolib.getDistance(
        {latitude: parseFloat(array[i].lat).toFixed(7), longitude: parseFloat(array[i].long).toFixed(7)},
        {latitude: parseFloat(array[0].lat).toFixed(7), longitude: parseFloat(array[0].long).toFixed(7)}
        );

                    var data = {'stopnum':array[i].stopnum, 'lat':array[i].lat, 'long':array[i].long, 'stopname':array[i].stopname}
                    newarray.push(data)
                    if(mydist > dist)
                    {
                        var coords = GetPointBetween(array[i].lat, array[i].long, array[0].lat, array[0].long )

                        var data = {'stopnum':array[i].stopnum, 'lat':coords.lat, 'long': coords.lng, 'stopname':array[i].stopname}
                        newarray.push(data)
                        count ++
                    }
        }
    }



    if(count == 0)
    {
        for(var i =0; i<CoordinatesSet.length; i++)
        {
            WriteLogToNewFileCustom(JSON.stringify(CoordinatesSet[i]), name)

        }
        return

    }
    else
    {
        CoordinatesSet = newarray
        GeneratePath(CoordinatesSet, "2", name)
    }




}


function GetPointBetween(lat1, lng1, lat2, lng2)
{
    var x = (lat1 + lat2)/2
    var y = (lng1 + lng2)/2

    var data = {"lat" : x, "lng": y}

    return data

}


function WriteLogToNewFileCustom(message, fileName) {
    if(typeof fileName == "undefined"){
        fileName = "defaultLog"
    }
    // fs.truncate("DebugLog/" + fileName , 0, function(){console.log('clearfile' + fileName)})
    fs.appendFileSync("BusLocationLog/" + fileName +"FinePathData.txt", message +",\n",'utf8' ,function (err) {
        if (err) {
            return console.log(err);
        }

    })
}




//go to bus-coordinates-dataset.js and change TestParsingRouteE to the new data you get from pullman website
//then run NewRouteModel() , then check DistanceData.txt for results
exports.NewRouteModel = NewRouteModel

exports.GeneratePath = GeneratePath
exports.generateRouteCoodinate = generateRouteCoodinate
exports.startGenerate = startGenerate
// exports.generateRouteData = generateRouteData

