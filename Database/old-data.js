/**
 * Created by root on 9/18/16.
 */
var routeNameList = [
    // {"datasetName":"RouteAM1", "routeName" : 'AM 1', "routeID" : "99163AM1", "routeBusID" : 4001, "simulationPath" : "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:30AM - 08:15AM", "Color" : "#d63ef7"  },
    // {"datasetName":"RouteAM2", "routeName" : "AM 2", "routeID" : "99163AM2", "routeBusID" : 4002, "simulationPath" : "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:45AM - 08:10AM", "Color" : "#319578"  },
    // {"datasetName":"RouteAM3", "routeName" : "AM 3", "routeID" : "99163AM3", "routeBusID" :4003, "simulationPath" : "","OpDays" : "M-T-W-TH-F" , "OpHours" : "07:15AM - 08:10AM", "Color" : "#01b56d" },
    // {"datasetName":"RouteAM4", "routeName" : "AM 4", "routeID" : "99163AM4", "routeBusID" : 4004, "simulationPath" : "" , "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:40AM - 08:10AM", "Color" : "#fe4b4e"  },
    // {"datasetName":"RouteAM5", "routeName" : "AM 5", "routeID" : "99163AM5", "routeBusID": 4005, "simulationPath" : "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:25AM - 08:05AM", "Color" : "#ceb96c" },

    {"datasetName":"RouteBlue", "routeName" : "Blue Route", "routeID":"99163Blue" , "routeBusID": 3994, "simulationPath":"OfficialBlueRoute", "OpDays" : "M-T-W-TH-F" , "OpHours" : "06:30AM - 18:30PM", "Color" : "#169cff" },
    // {"datasetName":"RouteCoffee", "routeName" :"Coffee Route", "routeID" : "99163Coffee", "routeBusID":4020, "simulationPath": "N/A", "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:15AM - 10:15AM", "Color" : "#6f4e37"  },
    // {"datasetName":"CrimsonExpress","routeName":"Crimson Express", "routeID": "99163Crimson", "routeBusID":3997,"OpDays" : "M-T-W-TH-F" , "OpHours" : "07:05AM - 18:45PM", "Color" : "#981e32",  "simulationPath":"OfficialCrimsonExpress"},
    // {"datasetName":"GreyExpress", "routeName": "Grey Express", "routeID": "99163Grey", "routeBusID" : 3998, "simulationPath": "OfficialGreyExpress",  "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:00AM - 20:39PM", "Color" : "#5e6a71"},

    // {"datasetName":"SATNorth", "routeName": "North", "routeID": "99163SAT.North", "routeBusID" : 2368, "simulationPath": "N/A"},
    // {"datasetName":"SATSouth", "routeName": "South", "routeID": "99163SAT.South", "routeBusID" : 2375, "simulationPath": "N/A"},

    // {"datasetName":"SilverRoute", "routeName": "Silver Route", "routeID": "99163Silver", "routeBusID" : 4058, "simulationPath": "OfficialSilverRoute", "OpDays" : "M-T-W-TH-F" , "OpHours" : "07:15AM - 10:15AM", "Color" : "#CCCCCC"  },
    // {"datasetName":"North", "routeName": "North", "routeID": "99163North", "routeBusID" : 4062, "simulationPath": "OfficialNorth","OpDays" : "M-T-W-TH-F-SAT" , "OpHours" : "17:30PM - 23:59PM", "Color" : "#70E588"},
    // {"datasetName":"South", "routeName": "South", "routeID": "99163South", "routeBusID" : 4000, "simulationPath": "OfficialSouth", "OpDays" : "M-T-W-TH-F-SAT" , "OpHours" : "20:39PM - 23:59PM", "Color" : "#F85E35" },
    // {"datasetName":"LoopRoute", "routeName": "Loop Route", "routeID": "99163Loop", "routeBusID" : 4059, "simulationPath": "OfficialLoopRoute", "OpDays" : "M-T-W-TH-F" , "OpHours" : "06:30AM - 21:30PM", "Color" : "#E6B41F" },
    //
    // {"datasetName":"PM1", "routeName": "PM 1", "routeID": "99163PM1", "routeBusID" : 4006, "simulationPath": "","OpDays" : "M-T-W-TH-F" , "OpHours" : "15:00PM - 15:45PM", "Color" : "#b64615"  },
    // {"datasetName":"PM2", "routeName": "PM 2", "routeID": "99163PM2", "routeBusID" : 4007, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "15:00PM - 15:35PM", "Color" : "#a5dd6c" },
    // {"datasetName":"PM3", "routeName": "PM 3", "routeID": "99163PM3", "routeBusID" : 4008, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "15:00PM - 15:35PM", "Color" : "#9E83E3"   },
    // {"datasetName":"PM4", "routeName": "PM 4", "routeID": "99163PM4", "routeBusID" : 4009, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "15:00PM - 15:31PM", "Color" : "#169CFF"  },
    // {"datasetName":"PM5", "routeName": "PM 5", "routeID": "99163PM5", "routeBusID" : 4010, "simulationPath": "","OpDays" : "M-T-W-TH-F" , "OpHours" : "14:55PM - 15:48PM", "Color" : "#9f8ef1" },
    // {"datasetName":"PM6", "routeName": "pm 6", "routeID": "99163PM6", "routeBusID" : 4011, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "14:55PM - 15:44PM", "Color" : "#011304"   },
    //
    //
    // {"datasetName":"ShuttleA", "routeName": "Shuttle A", "routeID": "99163ShuttleA", "routeBusID" : 4015, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 11:00AM", "Color" : "#a5dd6c" },
    // {"datasetName":"ShuttleB", "routeName": "Shuttle B", "routeID": "99163ShuttleB", "routeBusID" : 4017, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 09:10AM", "Color" : "#5da88e" },
    // {"datasetName":"ShuttleC", "routeName": "Shuttle C", "routeID": "99163ShuttleC", "routeBusID" : 4018, "simulationPath": "","OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 09:10AM", "Color" : "#66d2ea" },
    // {"datasetName":"ShuttleD", "routeName": "Shuttle D", "routeID": "99163ShuttleD", "routeBusID" : 4016, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 11:00AM", "Color" : "#391d35"},
    // {"datasetName":"ShuttleE", "routeName": "Shuttle E", "routeID": "99163ShuttleE", "routeBusID" : 4019, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 11:00AM", "Color" : "#170cc6"  },
    // {"datasetName":"ShuttleF", "routeName": "Shuttle F", "routeID": "99163ShuttleF", "routeBusID" : 4042, "simulationPath": "", "OpDays" : "M-T-W-TH-F" , "OpHours" : "08:20AM - 09:10AM", "Color" : "#abb915"  },
]

exports.routeNameList = routeNameList
