/**
 * Created by ruofei on 8/30/16.
 */


var locator = require("../routes/bus-locator")
var routeData2016Fall = require('../OfficialRoutes/DistanceData')
var pathData2016Fall = require('../OfficialRoutes/PathCoordinate')
var dataset = require('../routes/bus-coordinates-dataset.js');
var testData2016Fall = require('../OfficialRoutes/Test')

var outputDir = "Pullman2016FallRouteLog/"
var busDict = {}

// All test function only test one bus for each route

function setOutputDir(dir) {
   outputDir = dir 
}

// str format: {testStr:?, stopNum:?}
// otherInfo contain different content depend on algType
function testAStr(routeID,lat, lng,datasetName, otherInfo,algType){
   if(typeof algType == "undefined"){
      return;
   } 
   else if (algType == "distanceToPath"){
      var busLiveData = otherInfo[routeID]
      return locator.LocatorMethodBasedOnDistanceAwayFromPath(lat,lng)
   }
   else if (algType == "googleMap"){
      
   }
   else if (algType == "findBus1"){
       return locator.FindBus(lat,lng,datasetName)
   }
}

function testARoute(routeID,algType) {
   var routeInfo = locator.IdToNameAndDataset(routeID)
   var dataSetName = routeInfo.route
   var testData = testData2016Fall[dataSetName]
    for(var i =0; i < testData.length; i++){
       var lat = testData[i].lat
       var lng = testData[i].lng
       var stopNum = testData[i].stopNum
       var res = testAStr(routeID,lat,lng,dataSetName, busDict, algType)
       var newStopNum = res[0].stopNum
       // TODO:output new num and check accuracy
    }
}

function testMultipleRoute(RouteList){
    
}