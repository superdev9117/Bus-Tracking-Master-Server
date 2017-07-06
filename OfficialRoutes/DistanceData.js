var routeNameList = [
    {"datasetName":"RouteAM1", "routeName" : 'AM 1', "routeID" : "99163AM1", "routeBusID" : 4001, "simulationPath" : ""},
    {"datasetName":"RouteAM2", "routeName" : "AM 2", "routeID" : "99163AM2", "routeBusID" : 4002, "simulationPath" : ""},
    {"datasetName":"RouteAM3", "routeName" : "AM 3", "routeID" : "99163AM3", "routeBusID" :4003, "simulationPath" : ""},
    {"datasetName":"RouteAM4", "routeName" : "AM 4", "routeID" : "99163AM4", "routeBusID" : 4004, "simulationPath" : "" },
    {"datasetName":"RouteAM5", "routeName" : "AM 5", "routeID" : "99163AM5", "routeBusID": 4005, "simulationPath" : ""},


    {"datasetName":"RouteBlue", "routeName" : "Blue Route", "routeID":"99163Blue" , "routeBusID": 3994, "simulationPath":"OfficialBlueRoute"},
    {"datasetName":"RouteCoffee", "routeName" :"Coffee Route", "routeID" : "99163Coffee", "routeBusID":4020, "simulationPath": "N/A"},
    {"datasetName":"CrimsonExpress","routeName":"Crimson Express", "routeID": "99163Crimson", "routeBusID":3997, "simulationPath":"OfficialCrimsonExpress"},
    {"datasetName":"GreyExpress", "routeName": "Grey Express", "routeID": "99163Grey", "routeBusID" : 3998, "simulationPath": "OfficialGreyExpress"},
    {"datasetName":"SATNorth", "routeName": "North", "routeID": "99163SAT.North", "routeBusID" : 2368, "simulationPath": "N/A"},
    {"datasetName":"SATSouth", "routeName": "South", "routeID": "99163SAT.South", "routeBusID" : 2375, "simulationPath": "N/A"},
    {"datasetName":"SilverRoute", "routeName": "Silver Route", "routeID": "99163Silver", "routeBusID" : 4058, "simulationPath": "OfficialSilverRoute"},
    {"datasetName":"North", "routeName": "North", "routeID": "99163North", "routeBusID" : 4062, "simulationPath": "OfficialNorth"},
    {"datasetName":"South", "routeName": "South", "routeID": "99163South", "routeBusID" : 4000, "simulationPath": "OfficialSouth"},

    {"datasetName":"LoopRoute", "routeName": "Loop Route", "routeID": "99163Loop", "routeBusID" : 4059, "simulationPath": "OfficialLoopRoute"},
    
    {"datasetName":"PM1", "routeName": "PM 1", "routeID": "99163PM1", "routeBusID" : 4006, "simulationPath": ""},
    {"datasetName":"PM2", "routeName": "PM 2", "routeID": "99163PM2", "routeBusID" : 4007, "simulationPath": ""},
    {"datasetName":"PM3", "routeName": "PM 3", "routeID": "99163PM3", "routeBusID" : 4008, "simulationPath": ""},
    {"datasetName":"PM4", "routeName": "PM 4", "routeID": "99163PM4", "routeBusID" : 4009, "simulationPath": ""},
    {"datasetName":"PM5", "routeName": "PM 5", "routeID": "99163PM5", "routeBusID" : 4010, "simulationPath": ""},
    {"datasetName":"PM6", "routeName": "pm 6", "routeID": "99163PM6", "routeBusID" : 4011, "simulationPath": ""},
    
    
    {"datasetName":"ShuttleA", "routeName": "Shuttle A", "routeID": "99163ShuttleA", "routeBusID" : 4015, "simulationPath": ""},
    {"datasetName":"ShuttleB", "routeName": "Shuttle B", "routeID": "99163ShuttleB", "routeBusID" : 4017, "simulationPath": ""},
    {"datasetName":"ShuttleC", "routeName": "Shuttle C", "routeID": "99163ShuttleC", "routeBusID" : 4018, "simulationPath": ""},
    {"datasetName":"ShuttleD", "routeName": "Shuttle D", "routeID": "99163ShuttleD", "routeBusID" : 4016, "simulationPath": ""},
    {"datasetName":"ShuttleE", "routeName": "Shuttle E", "routeID": "99163ShuttleE", "routeBusID" : 4019, "simulationPath": ""},
    {"datasetName":"ShuttleF", "routeName": "Shuttle F", "routeID": "99163ShuttleF", "routeBusID" : 4042, "simulationPath": ""},


    {"datasetName":"Express4B", "routeName": "Cougar Express 4B", "routeID": "99163CougarExpress4B", "routeBusID" : 4176, "simulationPath": ""},
    {"datasetName":"Express4A", "routeName": "Cougar Express 4A", "routeID": "99163CougarExpress4A", "routeBusID" : 4165, "simulationPath": ""},
    {"datasetName":"Express3C", "routeName": "Cougar Express 3C", "routeID": "99163Cougar Express 3C", "routeBusID" : 4177, "simulationPath": ""},
    {"datasetName":"Express3BPost", "routeName": "Cougar Express 3B Post", "routeID": "99163Cougar Express 3B Post", "routeBusID" : 4175, "simulationPath": ""},
    {"datasetName":"Express3B", "routeName": "Cougar Express 3B Pre", "routeID": "99163Cougar Express 3B Pre", "routeBusID" : 4174, "simulationPath": ""},
    {"datasetName":"Express3APost", "routeName": "Cougar Express 3A Post", "routeID": "99163Cougar Express 3A Post", "routeBusID" : 4042, "simulationPath": ""},
    {"datasetName":"Express3A", "routeName": "Cougar Express 3A Pre", "routeID": "99163Cougar Express 3A Pre", "routeBusID" : 4042, "simulationPath": ""},
    {"datasetName":"Express2B", "routeName": "Cougar Express 2B", "routeID": "99163Cougar Express 2B", "routeBusID" : 4172, "simulationPath": ""},
    {"datasetName":"Express1B", "routeName": "Cougar Express 1B", "routeID": "99163Cougar Express 1B", "routeBusID" : 4171, "simulationPath": ""},
    {"datasetName":"Express2A", "routeName": "Cougar Express 2A", "routeID": "99163Cougar Express 2A", "routeBusID" : 4163, "simulationPath": ""},
    {"datasetName":"Express1A", "routeName": "Cougar Express 1A", "routeID": "99163Cougar Express 1A", "routeBusID" : 4162, "simulationPath": ""},

]

//AM 1
var RouteAM1 =
[
{"stopnum":1,"lat":46.7207,"long":-117.185509,"stopname":"Crestview & Grand","distance":309,"time":"0.57"},
{"stopnum":2,"lat":46.7206535,"long":-117.189392,"stopname":"Crestview & Staley","distance":166,"time":"0.40"},
{"stopnum":3,"lat":46.72103,"long":-117.189667,"stopname":"Fountain & Cityview","distance":272,"time":"0.73"},
{"stopnum":4,"lat":46.7230759,"long":-117.189507,"stopname":"Fountain & Mountainview","distance":174,"time":"0.42"},
{"stopnum":5,"lat":46.72461,"long":-117.189957,"stopname":"Fountain & Center","distance":508,"time":"1.38"},
{"stopnum":6,"lat":46.727787,"long":-117.188194,"stopname":"Sunnyside School","distance":155,"time":"0.55"},
{"stopnum":7,"lat":46.7281151,"long":-117.186417,"stopname":"Arbor & Blaine","distance":225,"time":"1.02"},
{"stopnum":8,"lat":46.7301369,"long":-117.186226,"stopname":"Arbor & Main","distance":249,"time":"0.68"},
{"stopnum":9,"lat":46.73079,"long":-117.188828,"stopname":"Main & Spruce","distance":182,"time":"0.33"},
{"stopnum":10,"lat":46.7307854,"long":-117.191071,"stopname":"Main & Cedar","distance":888,"time":"1.27"},
{"stopnum":11,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":12,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.13"},
{"stopnum":13,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":14,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":2848,"time":"3.40"},
{"stopnum":15,"lat":46.7332,"long":-117.208733,"stopname":"Golden Hills  Please Exit Thru Rear Doors","distance":344,"time":"0.43"},
{"stopnum":16,"lat":46.7337227,"long":-117.205063,"stopname":"Davis & Estates ","distance":340,"time":"0.28"},
{"stopnum":17,"lat":46.73373,"long":-117.2006,"stopname":"Davis & Cory Ln","distance":335,"time":"0.32"},
{"stopnum":18,"lat":46.7337036,"long":-117.196205,"stopname":"Davis & Parkwest","distance":1294,"time":"1.68"},
{"stopnum":19,"lat":46.73213,"long":-117.181923,"stopname":"Transfer Station","distance":593,"time":"1.33"},
{"stopnum":20,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":228,"time":"0.62"},
{"stopnum":21,"lat":46.73842,"long":-117.178276,"stopname":"State & True (SE Corner)","distance":52,"time":"0.17"},
{"stopnum":22,"lat":46.7388878,"long":-117.178276,"stopname":"State & True","distance":175,"time":"0.33"},
{"stopnum":23,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.90"},
{"stopnum":24,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":25,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":647,"time":"1.25"},
{"stopnum":26,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":529,"time":"1.32"},
{"stopnum":27,"lat":46.7446747,"long":-117.180244,"stopname":"Hall & Larry","distance":129,"time":"0.28"},
{"stopnum":28,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
{"stopnum":29,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.50"},
{"stopnum":30,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.52"},
{"stopnum":31,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":334,"time":"0.88"},
{"stopnum":32,"lat":46.7394066,"long":-117.18116,"stopname":"Jefferson Elementary","distance":248,"time":"0.62"},
{"stopnum":33,"lat":46.7398453,"long":-117.183792,"stopname":"Darrow & Orion","distance":160,"time":"0.43"},
{"stopnum":34,"lat":46.7396545,"long":-117.185722,"stopname":"Clifford & Darrow","distance":323,"time":"0.63"},
{"stopnum":35,"lat":46.73675,"long":-117.185715,"stopname":"Clifford & Harrison","distance":138,"time":"0.37"},
{"stopnum":36,"lat":46.7365,"long":-117.1842,"stopname":"Harrison & Fisk","distance":205,"time":"0.52"},
{"stopnum":37,"lat":46.73648,"long":-117.181511,"stopname":"Harrison & Bryant","distance":274,"time":"0.55"},
{"stopnum":38,"lat":46.7362366,"long":-117.178368,"stopname":"Harrison & State","distance":1390,"time":"3.20"},
{"stopnum":39,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":1434,"time":"2.93"},
{"stopnum":40,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":987,"time":"2.50"}
]




//AM 2
//url https://pullman.mytransitride.com/api/Stop?patternId=2331

var RouteAM2 =
[
{"stopnum":1,"lat":46.72344,"long":-117.163292,"stopname":"Forest Way & Chinook Drive","distance":373,"time":"1.38"},
{"stopnum":2,"lat":46.7250824,"long":-117.160583,"stopname":"Forest Way & North Chinook Drive","distance":994,"time":"2.32"},
{"stopnum":3,"lat":46.72969,"long":-117.152763,"stopname":"Olympia & Grimes","distance":681,"time":"1.75"},
{"stopnum":4,"lat":46.73152,"long":-117.158936,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":241,"time":"0.53"},
{"stopnum":5,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":540,"time":"1.15"},
{"stopnum":6,"lat":46.7365952,"long":-117.1635,"stopname":"Stadium & Lybecker","distance":678,"time":"1.32"},
{"stopnum":7,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":796,"time":"1.90"},
{"stopnum":8,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":647,"time":"1.25"},
{"stopnum":9,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":871,"time":"2.07"},
{"stopnum":10,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":191,"time":"0.37"},
{"stopnum":11,"lat":46.74722,"long":-117.174072,"stopname":"Larry & Friel","distance":724,"time":"0.98"},
{"stopnum":12,"lat":46.7422028,"long":-117.171196,"stopname":"Grand & Turner","distance":224,"time":"0.30"},
{"stopnum":13,"lat":46.7403755,"long":-117.1724,"stopname":"Grand & Stadium","distance":1952,"time":"3.83"},
{"stopnum":14,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":1434,"time":"2.93"},
{"stopnum":15,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":4189,"time":"7.72"}
]

//AM 3
//url https://pullman.mytransitride.com/api/Stop?patternId=2332
var RouteAM3 = 
[
{"stopnum":1,"lat":46.7319946,"long":-117.181915,"stopname":"Transfer Station","distance":843,"time":"1.93"},
{"stopnum":2,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":1434,"time":"2.93"},
{"stopnum":3,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":683,"time":"1.85"},
{"stopnum":4,"lat":46.7229538,"long":-117.178406,"stopname":"Spring & Derby ","distance":195,"time":"0.50"},
{"stopnum":5,"lat":46.7230873,"long":-117.176231,"stopname":"Derby & Dilke","distance":427,"time":"0.70"},
{"stopnum":6,"lat":46.72327,"long":-117.1707,"stopname":"Derby & Robin","distance":413,"time":"0.85"},
{"stopnum":7,"lat":46.7212524,"long":-117.166946,"stopname":"Professional Mall","distance":446,"time":"1.05"},
{"stopnum":8,"lat":46.71775,"long":-117.164856,"stopname":"Bishop at Pro Mall ","distance":298,"time":"0.52"},
{"stopnum":9,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":270,"time":"0.35"},
{"stopnum":10,"lat":46.7132645,"long":-117.166191,"stopname":"Bishop & Summit","distance":161,"time":"0.20"},
{"stopnum":11,"lat":46.7133179,"long":-117.168236,"stopname":"Bishop & Footloose","distance":282,"time":"0.43"},
{"stopnum":12,"lat":46.7137375,"long":-117.171875,"stopname":"Bishop at Zeppoz","distance":264,"time":"0.40"},
{"stopnum":13,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":281,"time":"0.50"},
{"stopnum":14,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":455,"time":"0.97"},
{"stopnum":15,"lat":46.71685,"long":-117.182777,"stopname":"Grand At Shopko","distance":441,"time":"0.63"},
{"stopnum":16,"lat":46.7206573,"long":-117.1844,"stopname":"Grand & Crestview","distance":648,"time":"0.93"},
{"stopnum":17,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.40"},
{"stopnum":18,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":2534,"time":"4.55"},
{"stopnum":19,"lat":46.7473145,"long":-117.173683,"stopname":"Larry & Friel","distance":336,"time":"0.57"},
{"stopnum":20,"lat":46.74668,"long":-117.177933,"stopname":"Larry & Turner","distance":259,"time":"0.53"},
{"stopnum":21,"lat":46.74514,"long":-117.180489,"stopname":"Larry & Hall, Aquatic Center ","distance":498,"time":"1.00"},
{"stopnum":22,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":871,"time":"2.07"},
{"stopnum":23,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":191,"time":"0.37"},
{"stopnum":24,"lat":46.74722,"long":-117.174072,"stopname":"Larry & Friel","distance":743,"time":"1.33"},
{"stopnum":25,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
{"stopnum":26,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.67"},
{"stopnum":27,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":640,"time":"1.52"},
{"stopnum":28,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":72,"time":"0.33"},
{"stopnum":29,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.45"},
{"stopnum":30,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":31,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.38"},
{"stopnum":32,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":221,"time":"0.92"},
{"stopnum":33,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":34,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":270,"time":"0.92"},
{"stopnum":35,"lat":46.7298622,"long":-117.157867,"stopname":"Grimes at Bustad Hall","distance":403,"time":"0.83"},
{"stopnum":36,"lat":46.7296257,"long":-117.152596,"stopname":"Grimes & Olympia","distance":952,"time":"1.97"},
{"stopnum":37,"lat":46.7253,"long":-117.16037,"stopname":"Forest Way","distance":439,"time":"1.73"},
{"stopnum":38,"lat":46.7231026,"long":-117.1634,"stopname":"Forest Way & Chinook Drive","distance":1644,"time":"2.77"},
{"stopnum":39,"lat":46.7224579,"long":-117.164871,"stopname":"Bishop & Latah","distance":297,"time":"0.57"},
{"stopnum":40,"lat":46.7198944,"long":-117.164108,"stopname":"Bishop and Bleasner","distance":1345,"time":"2.53"},
{"stopnum":41,"lat":46.72316,"long":-117.175964,"stopname":"Derby & Dilke","distance":898,"time":"2.23"},
{"stopnum":42,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":2277,"time":"5.10"}
]


//AM 4
//url https://pullman.mytransitride.com/api/Stop?patternId=2334
var RouteAM4 =
[
{"stopnum":1,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
{"stopnum":2,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.67"},
{"stopnum":3,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":662,"time":"1.93"},
{"stopnum":4,"lat":46.74204,"long":-117.150108,"stopname":"Terre View & Northwood","distance":243,"time":"1.13"},
{"stopnum":5,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.52"},
{"stopnum":6,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.97"},
{"stopnum":7,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":376,"time":"0.77"},
{"stopnum":8,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.57"},
{"stopnum":9,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":350,"time":"0.70"},
{"stopnum":10,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":796,"time":"1.90"},
{"stopnum":11,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":647,"time":"1.25"},
{"stopnum":12,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":529,"time":"1.32"},
{"stopnum":13,"lat":46.7446747,"long":-117.180244,"stopname":"Hall & Larry","distance":129,"time":"0.28"},
{"stopnum":14,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
{"stopnum":15,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.50"},
{"stopnum":16,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.52"},
{"stopnum":17,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":290,"time":"0.78"},
{"stopnum":18,"lat":46.7362366,"long":-117.178375,"stopname":"State & Harrison (SW Corner)","distance":578,"time":"1.13"},
{"stopnum":19,"lat":46.73213,"long":-117.181923,"stopname":"Transfer Station","distance":910,"time":"2.43"},
{"stopnum":20,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":1434,"time":"2.93"},
{"stopnum":21,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":4829,"time":"8.75"}
]


//AM 5
//url https://pullman.mytransitride.com/api/Stop?patternId=2335
var RouteAM5 =
[
{"stopnum":1,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":280,"time":"0.77"},
{"stopnum":2,"lat":46.7388878,"long":-117.178276,"stopname":"State & True","distance":175,"time":"0.33"},
{"stopnum":3,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.90"},
{"stopnum":4,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":5,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":196,"time":"0.55"},
{"stopnum":6,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":420,"time":"1.22"},
{"stopnum":7,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":220,"time":"0.68"},
{"stopnum":8,"lat":46.74895,"long":-117.176857,"stopname":"Lamont & Robert","distance":356,"time":"1.02"},
{"stopnum":9,"lat":46.7503929,"long":-117.174072,"stopname":"Dillon & Terre View","distance":112,"time":"0.35"},
{"stopnum":10,"lat":46.7512321,"long":-117.174553,"stopname":"Terre View & Brandon","distance":106,"time":"0.18"},
{"stopnum":11,"lat":46.7517624,"long":-117.175629,"stopname":"Terre View & Clay Court","distance":416,"time":"0.83"},
{"stopnum":12,"lat":46.75007,"long":-117.171837,"stopname":"Grand & Terre View ","distance":257,"time":"0.32"},
{"stopnum":13,"lat":46.747818,"long":-117.172546,"stopname":"Grand & Larry","distance":647,"time":"0.70"},
{"stopnum":14,"lat":46.7422028,"long":-117.171196,"stopname":"Grand & Turner","distance":224,"time":"0.30"},
{"stopnum":15,"lat":46.7403755,"long":-117.1724,"stopname":"Grand & Stadium","distance":1425,"time":"2.72"},
{"stopnum":16,"lat":46.7319946,"long":-117.181915,"stopname":"Transfer Station","distance":2173,"time":"1.98"},
{"stopnum":17,"lat":46.7332,"long":-117.208733,"stopname":"Golden Hills  Please Exit Thru Rear Doors","distance":344,"time":"0.43"},
{"stopnum":18,"lat":46.7337227,"long":-117.205063,"stopname":"Davis & Estates ","distance":340,"time":"0.28"},
{"stopnum":19,"lat":46.73373,"long":-117.2006,"stopname":"Davis & Cory Ln","distance":335,"time":"0.32"},
{"stopnum":20,"lat":46.7337036,"long":-117.196205,"stopname":"Davis & Parkwest","distance":1213,"time":"1.57"},
{"stopnum":21,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":22,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.13"},
{"stopnum":23,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":24,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":309,"time":"0.47"},
{"stopnum":25,"lat":46.7307,"long":-117.191277,"stopname":"Main & Cedar","distance":237,"time":"0.40"},
{"stopnum":26,"lat":46.7305031,"long":-117.188484,"stopname":"Main & Spruce","distance":223,"time":"0.52"},
{"stopnum":27,"lat":46.7300262,"long":-117.18634,"stopname":"Arbor & Main","distance":215,"time":"0.73"},
{"stopnum":28,"lat":46.7281,"long":-117.186493,"stopname":"Arbor & Blaine","distance":149,"time":"0.45"},
{"stopnum":29,"lat":46.7278442,"long":-117.188148,"stopname":"Shirley at Sunnyside Elementary","distance":226,"time":"0.55"},
{"stopnum":30,"lat":46.7269974,"long":-117.190247,"stopname":"Fountain & Skyline","distance":256,"time":"0.55"},
{"stopnum":31,"lat":46.72486,"long":-117.190125,"stopname":"Fountain & Center","distance":257,"time":"0.88"},
{"stopnum":32,"lat":46.7231178,"long":-117.19062,"stopname":"Cityview & James","distance":305,"time":"0.88"},
{"stopnum":33,"lat":46.7208252,"long":-117.190247,"stopname":"Fountain & Crestview","distance":155,"time":"0.38"},
{"stopnum":34,"lat":46.7205276,"long":-117.188911,"stopname":"Crestview & Staley","distance":324,"time":"0.63"},
{"stopnum":35,"lat":46.7208138,"long":-117.184784,"stopname":"Crestview & Grand ","distance":933,"time":"2.33"},
{"stopnum":36,"lat":46.7177124,"long":-117.177162,"stopname":"Lincoln Middle School","distance":2839,"time":"6.35"}
]

//Blue Route
//url https://pullman.mytransitride.com/api/Stop?patternId=2323
var RouteBlue =
[
{"stopnum":1,"lat":46.73206,"long":-117.181778,"stopname":"Transfer Station","distance":574,"time":"1.28"},
{"stopnum":2,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":239,"time":"0.52"},
{"stopnum":3,"lat":46.7365379,"long":-117.181244,"stopname":"Harrison & Bryant ","distance":232,"time":"0.62"},
{"stopnum":4,"lat":46.73654,"long":-117.184288,"stopname":"Harrison & Fisk","distance":125,"time":"0.42"},
{"stopnum":5,"lat":46.7366943,"long":-117.185654,"stopname":"Harrison & Clifford","distance":325,"time":"0.67"},
{"stopnum":6,"lat":46.7396126,"long":-117.185616,"stopname":"Clifford & Darrow","distance":239,"time":"0.87"},
{"stopnum":7,"lat":46.7398033,"long":-117.182808,"stopname":"Darrow & Orion","distance":174,"time":"0.40"},
{"stopnum":8,"lat":46.7394,"long":-117.181374,"stopname":"Bryant at Jefferson Elementary","distance":338,"time":"0.78"},
{"stopnum":9,"lat":46.7388878,"long":-117.178276,"stopname":"State & True","distance":175,"time":"0.33"},
{"stopnum":10,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.90"},
{"stopnum":11,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":12,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":196,"time":"0.55"},
{"stopnum":13,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":420,"time":"1.22"},
{"stopnum":14,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":220,"time":"0.68"},
{"stopnum":15,"lat":46.74895,"long":-117.176857,"stopname":"Lamont & Robert","distance":356,"time":"1.02"},
{"stopnum":16,"lat":46.7503929,"long":-117.174072,"stopname":"Dillon & Terre View","distance":112,"time":"0.35"},
{"stopnum":17,"lat":46.7512321,"long":-117.174553,"stopname":"Terre View & Brandon","distance":106,"time":"0.18"},
{"stopnum":18,"lat":46.7517624,"long":-117.175629,"stopname":"Terre View & Clay Court","distance":645,"time":"1.35"},
{"stopnum":19,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
{"stopnum":20,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.67"},
{"stopnum":21,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":640,"time":"1.52"},
{"stopnum":22,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":509,"time":"1.10"},
{"stopnum":23,"lat":46.7410622,"long":-117.164726,"stopname":"Brandi Way East","distance":868,"time":"1.37"},
{"stopnum":24,"lat":46.746315,"long":-117.168381,"stopname":"Terre View at Schweitzer","distance":440,"time":"0.63"},
{"stopnum":25,"lat":46.75004,"long":-117.170273,"stopname":"Hopkins & Terre View","distance":152,"time":"0.45"},
{"stopnum":26,"lat":46.75007,"long":-117.171837,"stopname":"Grand & Terre View ","distance":257,"time":"0.32"},
{"stopnum":27,"lat":46.747818,"long":-117.172546,"stopname":"Grand & Larry","distance":647,"time":"0.70"},
{"stopnum":28,"lat":46.7422028,"long":-117.171196,"stopname":"Grand & Turner","distance":224,"time":"0.30"},
{"stopnum":29,"lat":46.7403755,"long":-117.1724,"stopname":"Grand & Stadium","distance":261,"time":"0.93"},
{"stopnum":30,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":630,"time":"1.12"},
{"stopnum":31,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.50"},
{"stopnum":32,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.72"},
{"stopnum":33,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":34,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":35,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":607,"time":"1.72"},
{"stopnum":36,"lat":46.7276764,"long":-117.168556,"stopname":"Spokane & Washington","distance":164,"time":"0.45"},
{"stopnum":37,"lat":46.7290649,"long":-117.168686,"stopname":"Spokane & College ","distance":273,"time":"0.70"},
{"stopnum":38,"lat":46.73151,"long":-117.168419,"stopname":"Spokane at Honors Hall","distance":270,"time":"1.10"},
{"stopnum":39,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":588,"time":"2.13"},
{"stopnum":40,"lat":46.7345543,"long":-117.172249,"stopname":"Colorado & Opal","distance":421,"time":"1.00"},
{"stopnum":41,"lat":46.7318039,"long":-117.175858,"stopname":"Maiden & Spaulding","distance":202,"time":"0.45"},
{"stopnum":42,"lat":46.73173,"long":-117.17807,"stopname":"Whitman & Kamiaken","distance":277,"time":"0.98"},
{"stopnum":43,"lat":46.730423,"long":-117.180267,"stopname":"Olson Street at Neill Library","distance":270,"time":"1.08"},
]

//Coffee Route
//url https://pullman.mytransitride.com/api/Stop?patternId=2351
var RouteCoffee =
[
{"stopnum":1,"lat":46.7320862,"long":-117.182,"stopname":"Transfer Station","distance":295,"time":"1.33"},
{"stopnum":2,"lat":46.73032,"long":-117.1796,"stopname":"Kamiaken at Porch Light","distance":267,"time":"0.68"},
{"stopnum":3,"lat":46.7314,"long":-117.177444,"stopname":"Whitman & Maple","distance":200,"time":"0.42"},
{"stopnum":4,"lat":46.73204,"long":-117.175179,"stopname":"Maiden & Spaulding","distance":313,"time":"0.72"},
{"stopnum":5,"lat":46.73354,"long":-117.172462,"stopname":"Campus & Opal","distance":336,"time":"0.87"},
{"stopnum":6,"lat":46.7320366,"long":-117.168694,"stopname":"Campus & Spokane","distance":231,"time":"0.93"},
{"stopnum":7,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":8,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":429,"time":"1.30"},
{"stopnum":9,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":10,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":11,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":1463,"time":"2.93"},
{"stopnum":12,"lat":46.72962,"long":-117.17894,"stopname":"Pine Street Mall Please Exit Thru Rear Doors","distance":515,"time":"1.47"},
]

//Crimson Express
//https://pullman.mytransitride.com/api/Stop?patternId=2326
var CrimsonExpress =
[
{"stopnum":1,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":184,"time":"0.55"},
{"stopnum":2,"lat":46.74338,"long":-117.149239,"stopname":"Northwood at Northwood Manor","distance":163,"time":"0.28"},
{"stopnum":3,"lat":46.7444153,"long":-117.147728,"stopname":"Northwood at Aspen Village","distance":321,"time":"0.57"},
{"stopnum":4,"lat":46.7464867,"long":-117.145279,"stopname":"Westwood at Maple Valley ","distance":328,"time":"0.70"},
{"stopnum":5,"lat":46.7483444,"long":-117.147728,"stopname":"Westwood at Birch Hills","distance":530,"time":"1.45"},
{"stopnum":6,"lat":46.74613,"long":-117.151665,"stopname":"Merman at Cougar Crest ","distance":228,"time":"0.60"},
{"stopnum":7,"lat":46.7442627,"long":-117.151855,"stopname":"Merman at College Crest","distance":227,"time":"0.58"},
{"stopnum":8,"lat":46.74345,"long":-117.154541,"stopname":"Merman & Terre View Please Exit Thru Rear Doors","distance":492,"time":"1.17"},
{"stopnum":9,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":72,"time":"0.33"},
{"stopnum":10,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.45"},
{"stopnum":11,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":12,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.38"},
{"stopnum":13,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":417,"time":"1.40"},
{"stopnum":14,"lat":46.7334557,"long":-117.162659,"stopname":"Cougar Way at Regents Hall ","distance":768,"time":"2.18"},
{"stopnum":15,"lat":46.7345543,"long":-117.172249,"stopname":"Colorado & Opal","distance":158,"time":"0.55"},
{"stopnum":16,"lat":46.73354,"long":-117.172462,"stopname":"Campus & Opal","distance":336,"time":"0.87"},
{"stopnum":17,"lat":46.7320366,"long":-117.168694,"stopname":"Campus & Spokane","distance":200,"time":"0.45"},
{"stopnum":18,"lat":46.7304764,"long":-117.16861,"stopname":"Spokane at Sloan Hall Please Exit Thru Rear Doors","distance":278,"time":"0.62"},
{"stopnum":19,"lat":46.7279778,"long":-117.168831,"stopname":"Spokane & Washington","distance":257,"time":"0.78"},
{"stopnum":20,"lat":46.727684,"long":-117.165672,"stopname":"Washington & Nevada","distance":588,"time":"1.82"},
{"stopnum":21,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":253,"time":"0.83"},
{"stopnum":22,"lat":46.73152,"long":-117.158936,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":241,"time":"0.53"},
{"stopnum":23,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":274,"time":"0.60"},
{"stopnum":24,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":25,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.95"},
]


//Grey Express
//url https://pullman.mytransitride.com/api/Stop?patternId=2327
var GreyExpress =
[
{"stopnum":1,"lat":46.74329,"long":-117.154778,"stopname":"Merman & Terre View","distance":524,"time":"1.30"},
{"stopnum":2,"lat":46.74654,"long":-117.151558,"stopname":"Merman at Cougar Crest","distance":142,"time":"0.25"},
{"stopnum":3,"lat":46.74771,"long":-117.150879,"stopname":"Merman at Pine Ridge","distance":321,"time":"1.02"},
{"stopnum":4,"lat":46.74832,"long":-117.148026,"stopname":"Westwood at Birch Hills ","distance":371,"time":"0.67"},
{"stopnum":5,"lat":46.7462959,"long":-117.145355,"stopname":"Westwood at Maple Valley","distance":333,"time":"0.55"},
{"stopnum":6,"lat":46.7442436,"long":-117.148087,"stopname":"Northwood at Aspen Village ","distance":424,"time":"0.83"},
{"stopnum":7,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.52"},
{"stopnum":8,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.97"},
{"stopnum":9,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":376,"time":"0.77"},
{"stopnum":10,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.57"},
{"stopnum":11,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.98"},
{"stopnum":12,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.50"},
{"stopnum":13,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.72"},
{"stopnum":14,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":15,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":16,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":607,"time":"1.72"},
{"stopnum":17,"lat":46.7276764,"long":-117.168556,"stopname":"Spokane & Washington","distance":164,"time":"0.45"},
{"stopnum":18,"lat":46.7290649,"long":-117.168686,"stopname":"Spokane & College ","distance":273,"time":"0.70"},
{"stopnum":19,"lat":46.73151,"long":-117.168419,"stopname":"Spokane at Honors Hall","distance":270,"time":"1.10"},
{"stopnum":20,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":21,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":335,"time":"1.23"},
{"stopnum":22,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":23,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.82"},
{"stopnum":24,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.30"},
{"stopnum":25,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":612,"time":"1.27"},
]

//North
//url https://pullman.mytransitride.com/api/Stop?patternId=2328
var North =
[
{"stopnum":1,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":2,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":335,"time":"1.23"},
{"stopnum":3,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":4,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.82"},
{"stopnum":5,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.30"},
{"stopnum":6,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":612,"time":"1.27"},
{"stopnum":7,"lat":46.74329,"long":-117.154778,"stopname":"Merman & Terre View","distance":524,"time":"1.30"},
{"stopnum":8,"lat":46.74654,"long":-117.151558,"stopname":"Merman at Cougar Crest","distance":142,"time":"0.25"},
{"stopnum":9,"lat":46.74771,"long":-117.150879,"stopname":"Merman at Pine Ridge","distance":321,"time":"1.02"},
{"stopnum":10,"lat":46.74832,"long":-117.148026,"stopname":"Westwood at Birch Hills ","distance":371,"time":"0.67"},
{"stopnum":11,"lat":46.7462959,"long":-117.145355,"stopname":"Westwood at Maple Valley","distance":333,"time":"0.55"},
{"stopnum":12,"lat":46.7442436,"long":-117.148087,"stopname":"Northwood at Aspen Village ","distance":424,"time":"0.83"},
{"stopnum":13,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.52"},
{"stopnum":14,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":291,"time":"0.68"},
{"stopnum":15,"lat":46.74412,"long":-117.158157,"stopname":"Terre View at CCN","distance":346,"time":"0.88"},
{"stopnum":16,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":733,"time":"1.03"},
{"stopnum":17,"lat":46.746315,"long":-117.168381,"stopname":"Terre View at Schweitzer","distance":914,"time":"1.52"},
{"stopnum":18,"lat":46.75135,"long":-117.163788,"stopname":"Hopkins at Schweitzer Manufacturing","distance":209,"time":"0.35"},
{"stopnum":19,"lat":46.7524338,"long":-117.161514,"stopname":"Hopkins Court Turnaround","distance":274,"time":"0.45"},
{"stopnum":20,"lat":46.7511864,"long":-117.164619,"stopname":"Hopkins at Palouse Science Center","distance":201,"time":"0.37"},
{"stopnum":21,"lat":46.7508278,"long":-117.167168,"stopname":"Hopkins at Amplicon","distance":380,"time":"0.80"},
{"stopnum":22,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
{"stopnum":23,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.67"},
{"stopnum":24,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":640,"time":"1.52"},
{"stopnum":25,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":376,"time":"0.77"},
{"stopnum":26,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.57"},
{"stopnum":27,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":350,"time":"0.70"},
{"stopnum":28,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":152,"time":"0.50"},
{"stopnum":29,"lat":46.7400627,"long":-117.172546,"stopname":"Grand at Jack In The Box","distance":953,"time":"1.27"},
{"stopnum":30,"lat":46.7473145,"long":-117.173683,"stopname":"Larry & Friel","distance":336,"time":"0.57"},
{"stopnum":31,"lat":46.74668,"long":-117.177933,"stopname":"Larry & Turner","distance":259,"time":"0.53"},
{"stopnum":32,"lat":46.74514,"long":-117.180489,"stopname":"Larry & Hall, Aquatic Center ","distance":192,"time":"0.53"},
{"stopnum":33,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
{"stopnum":34,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.50"},
{"stopnum":35,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.52"},
{"stopnum":36,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":489,"time":"1.48"},
{"stopnum":37,"lat":46.7398262,"long":-117.173119,"stopname":"Stadium at Dissmores Please Exit Thru Rear Doors","distance":211,"time":"0.75"},
{"stopnum":38,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":630,"time":"1.12"},
{"stopnum":39,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.50"},
{"stopnum":40,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.72"},
{"stopnum":41,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":42,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":43,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":607,"time":"1.72"},
{"stopnum":44,"lat":46.7276764,"long":-117.168556,"stopname":"Spokane & Washington","distance":164,"time":"0.45"},
{"stopnum":45,"lat":46.7290649,"long":-117.168686,"stopname":"Spokane & College ","distance":273,"time":"0.70"},
{"stopnum":46,"lat":46.73151,"long":-117.168419,"stopname":"Spokane at Honors Hall","distance":270,"time":"1.10"},
]

//South
//url https://pullman.mytransitride.com/api/Stop?patternId=2329
var South =
[
{"stopnum":1,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":2,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":335,"time":"1.23"},
{"stopnum":3,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":411,"time":"1.23"},
{"stopnum":4,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":5,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.95"},
{"stopnum":6,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":184,"time":"0.55"},
{"stopnum":7,"lat":46.74338,"long":-117.149239,"stopname":"Northwood at Northwood Manor","distance":163,"time":"0.28"},
{"stopnum":8,"lat":46.7444153,"long":-117.147728,"stopname":"Northwood at Aspen Village","distance":321,"time":"0.57"},
{"stopnum":9,"lat":46.7464867,"long":-117.145279,"stopname":"Westwood at Maple Valley ","distance":328,"time":"0.70"},
{"stopnum":10,"lat":46.7483444,"long":-117.147728,"stopname":"Westwood at Birch Hills","distance":530,"time":"1.45"},
{"stopnum":11,"lat":46.74613,"long":-117.151665,"stopname":"Merman at Cougar Crest ","distance":228,"time":"0.60"},
{"stopnum":12,"lat":46.7442627,"long":-117.151855,"stopname":"Merman at College Crest","distance":227,"time":"0.58"},
{"stopnum":13,"lat":46.74345,"long":-117.154541,"stopname":"Merman & Terre View Please Exit Thru Rear Doors","distance":492,"time":"1.17"},
{"stopnum":14,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":72,"time":"0.33"},
{"stopnum":15,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.45"},
{"stopnum":16,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":17,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.38"},
{"stopnum":18,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":221,"time":"0.92"},
{"stopnum":19,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":20,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":21,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":1047,"time":"2.68"},
{"stopnum":22,"lat":46.7224579,"long":-117.164871,"stopname":"Bishop & Latah","distance":297,"time":"0.57"},
{"stopnum":23,"lat":46.7198944,"long":-117.164108,"stopname":"Bishop and Bleasner","distance":252,"time":"0.42"},
{"stopnum":24,"lat":46.71775,"long":-117.164856,"stopname":"Bishop at Pro Mall ","distance":298,"time":"0.52"},
{"stopnum":25,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":270,"time":"0.35"},
{"stopnum":26,"lat":46.7132645,"long":-117.166191,"stopname":"Bishop & Summit","distance":161,"time":"0.20"},
{"stopnum":27,"lat":46.7133179,"long":-117.168236,"stopname":"Bishop & Footloose","distance":303,"time":"0.57"},
{"stopnum":28,"lat":46.71297,"long":-117.171486,"stopname":"Palouse Medical","distance":690,"time":"1.27"},
{"stopnum":29,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":483,"time":"1.45"},
{"stopnum":30,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":455,"time":"0.97"},
{"stopnum":31,"lat":46.71685,"long":-117.182777,"stopname":"Grand At Shopko","distance":441,"time":"0.63"},
{"stopnum":32,"lat":46.7206573,"long":-117.1844,"stopname":"Grand & Crestview","distance":648,"time":"0.93"},
{"stopnum":33,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.40"},
{"stopnum":34,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":488,"time":"1.83"},
{"stopnum":35,"lat":46.73032,"long":-117.1796,"stopname":"Kamiaken at Porch Light","distance":267,"time":"0.68"},
{"stopnum":36,"lat":46.7314,"long":-117.177444,"stopname":"Whitman & Maple","distance":200,"time":"0.42"},
{"stopnum":37,"lat":46.73204,"long":-117.175179,"stopname":"Maiden & Spaulding","distance":313,"time":"0.72"},
{"stopnum":38,"lat":46.73354,"long":-117.172462,"stopname":"Campus & Opal","distance":336,"time":"0.87"},
{"stopnum":39,"lat":46.7320366,"long":-117.168694,"stopname":"Campus & Spokane","distance":231,"time":"0.93"},
]

//Silver Route
//url https://pullman.mytransitride.com/api/Stop?patternId=2324
var SilverRoute =
[
{"stopnum":1,"lat":46.7320175,"long":-117.181839,"stopname":"Transfer Station","distance":2176,"time":"2.00"},
{"stopnum":2,"lat":46.7332,"long":-117.208733,"stopname":"Golden Hills  Please Exit Thru Rear Doors","distance":344,"time":"0.43"},
{"stopnum":3,"lat":46.7337227,"long":-117.205063,"stopname":"Davis & Estates ","distance":340,"time":"0.28"},
{"stopnum":4,"lat":46.73373,"long":-117.2006,"stopname":"Davis & Cory Ln","distance":335,"time":"0.32"},
{"stopnum":5,"lat":46.7337036,"long":-117.196205,"stopname":"Davis & Parkwest","distance":1213,"time":"1.57"},
{"stopnum":6,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":7,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.13"},
{"stopnum":8,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":9,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":1343,"time":"3.45"},
{"stopnum":10,"lat":46.73032,"long":-117.1796,"stopname":"Kamiaken at Porch Light","distance":267,"time":"0.68"},
{"stopnum":11,"lat":46.7314,"long":-117.177444,"stopname":"Whitman & Maple","distance":200,"time":"0.42"},
{"stopnum":12,"lat":46.73204,"long":-117.175179,"stopname":"Maiden & Spaulding","distance":313,"time":"0.72"},
{"stopnum":13,"lat":46.73354,"long":-117.172462,"stopname":"Campus & Opal","distance":336,"time":"0.87"},
{"stopnum":14,"lat":46.7320366,"long":-117.168694,"stopname":"Campus & Spokane","distance":231,"time":"0.93"},
{"stopnum":15,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":16,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":429,"time":"1.30"},
{"stopnum":17,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":18,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":19,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":1047,"time":"2.68"},
{"stopnum":20,"lat":46.7224579,"long":-117.164871,"stopname":"Bishop & Latah","distance":297,"time":"0.57"},
{"stopnum":21,"lat":46.7198944,"long":-117.164108,"stopname":"Bishop and Bleasner","distance":252,"time":"0.42"},
{"stopnum":22,"lat":46.71775,"long":-117.164856,"stopname":"Bishop at Pro Mall ","distance":298,"time":"0.52"},
{"stopnum":23,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":270,"time":"0.35"},
{"stopnum":24,"lat":46.7132645,"long":-117.166191,"stopname":"Bishop & Summit","distance":161,"time":"0.20"},
{"stopnum":25,"lat":46.7133179,"long":-117.168236,"stopname":"Bishop & Footloose","distance":282,"time":"0.43"},
{"stopnum":26,"lat":46.7137375,"long":-117.171875,"stopname":"Bishop at Zeppoz","distance":273,"time":"0.42"},
{"stopnum":27,"lat":46.71434,"long":-117.175346,"stopname":"Bishop & Harvest","distance":271,"time":"0.48"},
{"stopnum":28,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":455,"time":"0.97"},
{"stopnum":29,"lat":46.71685,"long":-117.182777,"stopname":"Grand At Shopko","distance":543,"time":"0.93"},
{"stopnum":30,"lat":46.7207,"long":-117.185509,"stopname":"Crestview & Grand","distance":309,"time":"0.57"},
{"stopnum":31,"lat":46.7206535,"long":-117.189392,"stopname":"Crestview & Staley","distance":166,"time":"0.40"},
{"stopnum":32,"lat":46.72103,"long":-117.189667,"stopname":"Fountain & Cityview","distance":272,"time":"0.73"},
{"stopnum":33,"lat":46.7230759,"long":-117.189507,"stopname":"Fountain & Mountainview","distance":174,"time":"0.42"},
{"stopnum":34,"lat":46.72461,"long":-117.189957,"stopname":"Fountain & Center","distance":292,"time":"0.67"},
{"stopnum":35,"lat":46.72701,"long":-117.190125,"stopname":"Fountain & Skyline","distance":216,"time":"0.72"},
{"stopnum":36,"lat":46.727787,"long":-117.188194,"stopname":"Sunnyside School","distance":155,"time":"0.55"},
{"stopnum":37,"lat":46.7281151,"long":-117.186417,"stopname":"Arbor & Blaine","distance":225,"time":"1.02"},
{"stopnum":38,"lat":46.7301369,"long":-117.186226,"stopname":"Arbor & Main","distance":249,"time":"0.68"},
{"stopnum":39,"lat":46.73079,"long":-117.188828,"stopname":"Main & Spruce","distance":182,"time":"0.33"},
{"stopnum":40,"lat":46.7307854,"long":-117.191071,"stopname":"Main & Cedar","distance":1226,"time":"2.10"},
]

//PM2
//https://pullman.mytransitride.com/api/Stop?patternId=2336
var PM2 =
[
{"stopnum":1,"lat":46.717968,"long":-117.177193,"stopname":"Lincoln Middle School","distance":1533,"time":"3.10"},
{"stopnum":2,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.38"},
{"stopnum":3,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":575,"time":"1.92"},
{"stopnum":4,"lat":46.73213,"long":-117.181923,"stopname":"Transfer Station","distance":593,"time":"1.33"},
{"stopnum":5,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":239,"time":"0.53"},
{"stopnum":6,"lat":46.7365379,"long":-117.181244,"stopname":"Harrison & Bryant ","distance":232,"time":"0.60"},
{"stopnum":7,"lat":46.73654,"long":-117.184288,"stopname":"Harrison & Fisk","distance":125,"time":"0.43"},
{"stopnum":8,"lat":46.7366943,"long":-117.185654,"stopname":"Harrison & Clifford","distance":325,"time":"0.67"},
{"stopnum":9,"lat":46.7396126,"long":-117.185616,"stopname":"Clifford & Darrow","distance":239,"time":"0.90"},
{"stopnum":10,"lat":46.7398033,"long":-117.182808,"stopname":"Darrow & Orion","distance":174,"time":"0.38"},
{"stopnum":11,"lat":46.7394,"long":-117.181374,"stopname":"Bryant at Jefferson Elementary","distance":338,"time":"0.78"},
{"stopnum":12,"lat":46.7388878,"long":-117.178276,"stopname":"State & True","distance":175,"time":"0.35"},
{"stopnum":13,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.85"},
{"stopnum":14,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":15,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":196,"time":"0.55"},
{"stopnum":16,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":420,"time":"1.23"},
{"stopnum":17,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":191,"time":"0.37"},
{"stopnum":18,"lat":46.74722,"long":-117.174072,"stopname":"Larry & Friel","distance":724,"time":"0.98"},
{"stopnum":19,"lat":46.7422028,"long":-117.171196,"stopname":"Grand & Turner","distance":224,"time":"0.30"},
{"stopnum":20,"lat":46.7403755,"long":-117.1724,"stopname":"Grand & Stadium","distance":261,"time":"0.92"},
{"stopnum":21,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":357,"time":"0.75"},
{"stopnum":22,"lat":46.7387962,"long":-117.166634,"stopname":"Valley at Pullman Family Medicine","distance":613,"time":"1.10"},
{"stopnum":23,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.43"},
{"stopnum":24,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":25,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.37"},
{"stopnum":26,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":221,"time":"0.92"},
{"stopnum":27,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":28,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.05"},
{"stopnum":29,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":607,"time":"1.67"},
{"stopnum":30,"lat":46.7276764,"long":-117.168556,"stopname":"Spokane & Washington","distance":164,"time":"0.45"},
{"stopnum":31,"lat":46.7290649,"long":-117.168686,"stopname":"Spokane & College ","distance":273,"time":"0.70"},
{"stopnum":32,"lat":46.73151,"long":-117.168419,"stopname":"Spokane at Honors Hall","distance":459,"time":"1.35"},
{"stopnum":33,"lat":46.7337761,"long":-117.172859,"stopname":"Campus & Opal","distance":332,"time":"0.85"},
{"stopnum":34,"lat":46.7318039,"long":-117.175858,"stopname":"Maiden & Spaulding","distance":202,"time":"0.45"},
{"stopnum":35,"lat":46.73173,"long":-117.17807,"stopname":"Whitman & Kamiaken","distance":1875,"time":"4.93"},
]

//PM3
//https://pullman.mytransitride.com/api/Stop?patternId=2337
var PM3 =
[
{"stopnum":1,"lat":46.71792,"long":-117.177124,"stopname":"Lincoln Middle School","distance":1375,"time":"3.17"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":1735,"time":"2.75"},
{"stopnum":8,"lat":46.72344,"long":-117.163292,"stopname":"Forest Way & Chinook Drive","distance":373,"time":"1.23"},
{"stopnum":9,"lat":46.7250824,"long":-117.160583,"stopname":"Forest Way & North Chinook Drive","distance":994,"time":"2.37"},
{"stopnum":10,"lat":46.72969,"long":-117.152763,"stopname":"Olympia & Grimes","distance":680,"time":"1.73"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":238,"time":"0.62"},
{"stopnum":13,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":14,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.83"},
{"stopnum":15,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.28"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1023,"time":"2.48"},
{"stopnum":17,"lat":46.74204,"long":-117.150108,"stopname":"Terre View & Northwood","distance":243,"time":"1.05"},
{"stopnum":18,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.50"},
{"stopnum":19,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.93"},
{"stopnum":20,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":21,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":22,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":350,"time":"0.68"},
{"stopnum":23,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":152,"time":"0.50"},
{"stopnum":24,"lat":46.7400627,"long":-117.172546,"stopname":"Grand at Jack In The Box","distance":953,"time":"1.23"},
{"stopnum":25,"lat":46.7473145,"long":-117.173683,"stopname":"Larry & Friel","distance":336,"time":"0.60"},
{"stopnum":26,"lat":46.74668,"long":-117.177933,"stopname":"Larry & Turner","distance":259,"time":"0.55"},
{"stopnum":27,"lat":46.74514,"long":-117.180489,"stopname":"Larry & Hall, Aquatic Center ","distance":192,"time":"0.53"},
{"stopnum":28,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
{"stopnum":29,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.48"},
{"stopnum":30,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.53"},
{"stopnum":31,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":317,"time":"0.85"},
{"stopnum":32,"lat":46.739254,"long":-117.181305,"stopname":"Bryant at Jefferson Elementary","distance":265,"time":"0.63"},
{"stopnum":33,"lat":46.7398453,"long":-117.183792,"stopname":"Darrow & Orion","distance":160,"time":"0.42"},
{"stopnum":34,"lat":46.7396545,"long":-117.185722,"stopname":"Clifford & Darrow","distance":323,"time":"0.65"},
{"stopnum":35,"lat":46.73675,"long":-117.185715,"stopname":"Clifford & Harrison","distance":138,"time":"0.38"},
{"stopnum":36,"lat":46.7365,"long":-117.1842,"stopname":"Harrison & Fisk","distance":205,"time":"0.50"},
{"stopnum":37,"lat":46.73648,"long":-117.181511,"stopname":"Harrison & Bryant","distance":274,"time":"0.55"},
{"stopnum":38,"lat":46.7362366,"long":-117.178368,"stopname":"Harrison & State","distance":412,"time":"0.72"},
{"stopnum":39,"lat":46.7329559,"long":-117.180527,"stopname":"State & Park","distance":2412,"time":"5.40"},
]

//PM4
//https://pullman.mytransitride.com/api/Stop?patternId=2338
var PM4 =
[
{"stopnum":1,"lat":46.7178574,"long":-117.177086,"stopname":"Lincoln Middle School","distance":1533,"time":"3.10"},
{"stopnum":2,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.38"},
{"stopnum":3,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":508,"time":"1.55"},
{"stopnum":4,"lat":46.7319946,"long":-117.181915,"stopname":"Transfer Station","distance":635,"time":"1.30"},
{"stopnum":5,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":280,"time":"0.75"},
{"stopnum":6,"lat":46.7388878,"long":-117.178276,"stopname":"State & True","distance":175,"time":"0.35"},
{"stopnum":7,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.85"},
{"stopnum":8,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":9,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":196,"time":"0.55"},
{"stopnum":10,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":420,"time":"1.23"},
{"stopnum":11,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":220,"time":"0.65"},
{"stopnum":12,"lat":46.74895,"long":-117.176857,"stopname":"Lamont & Robert","distance":356,"time":"0.98"},
{"stopnum":13,"lat":46.7503929,"long":-117.174072,"stopname":"Dillon & Terre View","distance":112,"time":"0.35"},
{"stopnum":14,"lat":46.7512321,"long":-117.174553,"stopname":"Terre View & Brandon","distance":106,"time":"0.18"},
{"stopnum":15,"lat":46.7517624,"long":-117.175629,"stopname":"Terre View & Clay Court","distance":645,"time":"1.35"},
{"stopnum":16,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
{"stopnum":17,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.68"},
{"stopnum":18,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":662,"time":"1.90"},
{"stopnum":19,"lat":46.74204,"long":-117.150108,"stopname":"Terre View & Northwood","distance":243,"time":"1.05"},
{"stopnum":20,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.50"},
{"stopnum":21,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.93"},
{"stopnum":22,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":23,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":24,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":350,"time":"0.68"},
{"stopnum":25,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":3423,"time":"6.85"},
]

//PM1
// https://pullman.mytransitride.com/api/Stop?patternId=2335
var PM1 =
[
{"stopnum":1,"lat":46.7180061,"long":-117.177284,"stopname":"Lincoln Middle School","distance":1533,"time":"3.10"},
{"stopnum":2,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.38"},
{"stopnum":3,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":2534,"time":"4.52"},
{"stopnum":4,"lat":46.7473145,"long":-117.173683,"stopname":"Larry & Friel","distance":336,"time":"0.60"},
{"stopnum":5,"lat":46.74668,"long":-117.177933,"stopname":"Larry & Turner","distance":259,"time":"0.55"},
{"stopnum":6,"lat":46.74514,"long":-117.180489,"stopname":"Larry & Hall, Aquatic Center ","distance":498,"time":"1.00"},
{"stopnum":7,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":871,"time":"2.12"},
{"stopnum":8,"lat":46.7469826,"long":-117.176552,"stopname":"Larry & Lamont","distance":191,"time":"0.37"},
{"stopnum":9,"lat":46.74722,"long":-117.174072,"stopname":"Larry & Friel","distance":724,"time":"0.98"},
{"stopnum":10,"lat":46.7422028,"long":-117.171196,"stopname":"Grand & Turner","distance":224,"time":"0.30"},
{"stopnum":11,"lat":46.7403755,"long":-117.1724,"stopname":"Grand & Stadium","distance":261,"time":"0.92"},
{"stopnum":12,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":357,"time":"0.75"},
{"stopnum":13,"lat":46.7387962,"long":-117.166634,"stopname":"Valley at Pullman Family Medicine","distance":613,"time":"1.10"},
{"stopnum":14,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.43"},
{"stopnum":15,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":16,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.37"},
{"stopnum":17,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":221,"time":"0.92"},
{"stopnum":18,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":19,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":673,"time":"1.75"},
{"stopnum":20,"lat":46.7296257,"long":-117.152596,"stopname":"Grimes & Olympia","distance":952,"time":"2.00"},
{"stopnum":21,"lat":46.7253,"long":-117.16037,"stopname":"Forest Way","distance":439,"time":"1.93"},
{"stopnum":22,"lat":46.7231026,"long":-117.1634,"stopname":"Forest Way & Chinook Drive","distance":1644,"time":"2.77"},
{"stopnum":23,"lat":46.7224579,"long":-117.164871,"stopname":"Bishop & Latah","distance":297,"time":"0.55"},
{"stopnum":24,"lat":46.7198944,"long":-117.164108,"stopname":"Bishop and Bleasner","distance":288,"time":"0.58"},
{"stopnum":25,"lat":46.7194557,"long":-117.165344,"stopname":"Bishop Blvd. & Pro Mall","distance":1058,"time":"1.98"},
{"stopnum":26,"lat":46.72316,"long":-117.175964,"stopname":"Derby & Dilke","distance":898,"time":"2.18"},
{"stopnum":27,"lat":46.7177658,"long":-117.177094,"stopname":"Lincoln Middle School","distance":0,"time":"0.00"},
]

//PM6
//https://pullman.mytransitride.com/api/Stop?patternId=3973
var PM6 =
[
{"stopnum":1,"lat":46.7177658,"long":-117.177094,"stopname":"Lincoln Middle School","distance":1533,"time":"3.10"},
{"stopnum":2,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.38"},
{"stopnum":3,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":2681,"time":"3.53"},
{"stopnum":4,"lat":46.7332,"long":-117.208733,"stopname":"Golden Hills Please Exit Thru Rear Doors","distance":344,"time":"0.43"},
{"stopnum":5,"lat":46.7337227,"long":-117.205063,"stopname":"Davis & Estates ","distance":340,"time":"0.28"},
{"stopnum":6,"lat":46.73373,"long":-117.2006,"stopname":"Davis & Cory Ln","distance":335,"time":"0.30"},
{"stopnum":7,"lat":46.7337036,"long":-117.196205,"stopname":"Davis & Parkwest","distance":1213,"time":"1.55"},
{"stopnum":8,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":9,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.15"},
{"stopnum":10,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":11,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":1291,"time":"2.33"},
{"stopnum":12,"lat":46.73206,"long":-117.181778,"stopname":"Transfer Station","distance":574,"time":"1.27"},
{"stopnum":13,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":228,"time":"0.58"},
{"stopnum":14,"lat":46.73842,"long":-117.178276,"stopname":"State & True (SE Corner)","distance":227,"time":"0.50"},
{"stopnum":15,"lat":46.7404671,"long":-117.178322,"stopname":"State & Timothy ","distance":385,"time":"0.85"},
{"stopnum":16,"lat":46.74231,"long":-117.177467,"stopname":"Janet & Hall","distance":238,"time":"0.52"},
{"stopnum":17,"lat":46.7439079,"long":-117.179169,"stopname":"Hall & Orion","distance":647,"time":"1.27"},
{"stopnum":18,"lat":46.7465858,"long":-117.185631,"stopname":"Pullman High School","distance":529,"time":"1.35"},
{"stopnum":19,"lat":46.7446747,"long":-117.180244,"stopname":"Hall & Larry","distance":129,"time":"0.28"},
{"stopnum":20,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
{"stopnum":21,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.48"},
{"stopnum":22,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.53"},
{"stopnum":23,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":702,"time":"1.50"},
{"stopnum":24,"lat":46.7329559,"long":-117.180527,"stopname":"State & Park","distance":205,"time":"0.57"},
{"stopnum":25,"lat":46.7320175,"long":-117.181839,"stopname":"Transfer Station","distance":2176,"time":"1.98"},
{"stopnum":26,"lat":46.7332,"long":-117.208733,"stopname":"Golden Hills Please Exit Thru Rear Doors","distance":344,"time":"0.43"},
{"stopnum":27,"lat":46.7337227,"long":-117.205063,"stopname":"Davis & Estates ","distance":340,"time":"0.28"},
{"stopnum":28,"lat":46.73373,"long":-117.2006,"stopname":"Davis & Cory Ln","distance":335,"time":"0.30"},
{"stopnum":29,"lat":46.7337036,"long":-117.196205,"stopname":"Davis & Parkwest","distance":1213,"time":"1.55"},
{"stopnum":30,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":31,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.15"},
{"stopnum":32,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":33,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":1648,"time":"3.18"},
{"stopnum":34,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":949,"time":"1.58"},
{"stopnum":35,"lat":46.71939,"long":-117.179985,"stopname":"Crestview at LMS","distance":485,"time":"1.33"},
]

//PM5
//https://pullman.mytransitride.com/api/Stop?patternId=2339
var PM5 =
[
{"stopnum":1,"lat":46.7177658,"long":-117.177094,"stopname":"Lincoln Middle School","distance":683,"time":"1.82"},
{"stopnum":2,"lat":46.7229538,"long":-117.178406,"stopname":"Spring & Derby ","distance":195,"time":"0.52"},
{"stopnum":3,"lat":46.7230873,"long":-117.176231,"stopname":"Derby & Dilke","distance":427,"time":"0.72"},
{"stopnum":4,"lat":46.72327,"long":-117.1707,"stopname":"Derby & Robin","distance":413,"time":"0.83"},
{"stopnum":5,"lat":46.7212524,"long":-117.166946,"stopname":"Professional Mall","distance":446,"time":"1.08"},
{"stopnum":6,"lat":46.71775,"long":-117.164856,"stopname":"Bishop at Pro Mall ","distance":298,"time":"0.50"},
{"stopnum":7,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":270,"time":"0.28"},
{"stopnum":8,"lat":46.7132645,"long":-117.166191,"stopname":"Bishop & Summit","distance":161,"time":"0.22"},
{"stopnum":9,"lat":46.7133179,"long":-117.168236,"stopname":"Bishop & Footloose","distance":282,"time":"0.43"},
{"stopnum":10,"lat":46.7137375,"long":-117.171875,"stopname":"Bishop at Zeppoz","distance":264,"time":"0.40"},
{"stopnum":11,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":281,"time":"0.50"},
{"stopnum":12,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":455,"time":"0.98"},
{"stopnum":13,"lat":46.71685,"long":-117.182777,"stopname":"Grand At Shopko","distance":543,"time":"0.93"},
{"stopnum":14,"lat":46.7207,"long":-117.185509,"stopname":"Crestview & Grand","distance":309,"time":"0.55"},
{"stopnum":15,"lat":46.7206535,"long":-117.189392,"stopname":"Crestview & Staley","distance":166,"time":"0.37"},
{"stopnum":16,"lat":46.72103,"long":-117.189667,"stopname":"Fountain & Cityview","distance":272,"time":"0.68"},
{"stopnum":17,"lat":46.7230759,"long":-117.189507,"stopname":"Fountain & Mountainview","distance":174,"time":"0.43"},
{"stopnum":18,"lat":46.72461,"long":-117.189957,"stopname":"Fountain & Center","distance":508,"time":"1.33"},
{"stopnum":19,"lat":46.727787,"long":-117.188194,"stopname":"Sunnyside School","distance":155,"time":"0.58"},
{"stopnum":20,"lat":46.7281151,"long":-117.186417,"stopname":"Arbor & Blaine","distance":225,"time":"1.02"},
{"stopnum":21,"lat":46.7301369,"long":-117.186226,"stopname":"Arbor & Main","distance":249,"time":"0.65"},
{"stopnum":22,"lat":46.73079,"long":-117.188828,"stopname":"Main & Spruce","distance":182,"time":"0.32"},
{"stopnum":23,"lat":46.7307854,"long":-117.191071,"stopname":"Main & Cedar","distance":888,"time":"1.27"},
{"stopnum":24,"lat":46.72737,"long":-117.201065,"stopname":"Wawawai & Big Sky Court","distance":664,"time":"0.93"},
{"stopnum":25,"lat":46.72452,"long":-117.207848,"stopname":"Wawawai at Whispering Hills ","distance":887,"time":"1.15"},
{"stopnum":26,"lat":46.7280579,"long":-117.198318,"stopname":"Wawawai & Marcia","distance":340,"time":"0.43"},
{"stopnum":27,"lat":46.729702,"long":-117.1946,"stopname":"Wawawai at Sunnyside Park","distance":1310,"time":"2.37"},
{"stopnum":28,"lat":46.73213,"long":-117.181923,"stopname":"Transfer Station","distance":2344,"time":"5.35"},
]

//Loop Route
//https://pullman.mytransitride.com/api/Stop?patternId=2325
var LoopRoute =
[
{"stopnum":1,"lat":46.73213,"long":-117.181923,"stopname":"Transfer Station","distance":593,"time":"1.33"},
{"stopnum":2,"lat":46.7363663,"long":-117.1783,"stopname":"State & Harrison (SE Corner)","distance":228,"time":"0.62"},
{"stopnum":3,"lat":46.73842,"long":-117.178276,"stopname":"State & True (SE Corner)","distance":493,"time":"1.30"},
{"stopnum":4,"lat":46.7398262,"long":-117.173119,"stopname":"Stadium at Dissmores Please Exit Thru Rear Doors","distance":211,"time":"0.75"},
{"stopnum":5,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":630,"time":"1.12"},
{"stopnum":6,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.50"},
{"stopnum":7,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.72"},
{"stopnum":8,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":9,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":10,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":1463,"time":"2.93"},
{"stopnum":13,"lat":46.71908,"long":-117.183807,"stopname":"Grand at Terrace Estates","distance":298,"time":"0.40"},
{"stopnum":14,"lat":46.716507,"long":-117.182739,"stopname":"Grand At Dairy Queen","distance":421,"time":"0.82"},
{"stopnum":15,"lat":46.71311,"long":-117.181694,"stopname":"Wheatland Mall on Fairmont Road","distance":139,"time":"0.22"},
{"stopnum":16,"lat":46.7121162,"long":-117.180588,"stopname":"Community Action Center","distance":446,"time":"0.80"},
{"stopnum":17,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":302,"time":"1.03"},
{"stopnum":18,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":19,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.38"},
{"stopnum":20,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.27"},
{"stopnum":21,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.68"},
{"stopnum":22,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.38"},
{"stopnum":23,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":24,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":25,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":1043,"time":"1.85"},
{"stopnum":26,"lat":46.72962,"long":-117.17894,"stopname":"Pine Street Mall Please Exit Thru Rear Doors","distance":780,"time":"1.78"},
{"stopnum":26,"lat":46.72962,"long":-117.17894,"stopname":"Pine Street Mall Please Exit Thru Rear Doors","distance":780,"time":"1.78"},
{"stopnum":27,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":730,"time":"1.08"},
{"stopnum":27,"lat":46.7254944,"long":-117.1858,"stopname":"Grand & Center","distance":949,"time":"1.57"},
{"stopnum":28,"lat":46.71939,"long":-117.179985,"stopname":"Crestview at LMS","distance":571,"time":"1.32"},
{"stopnum":29,"lat":46.7229538,"long":-117.178406,"stopname":"Spring & Derby ","distance":195,"time":"0.50"},
{"stopnum":30,"lat":46.7230873,"long":-117.176231,"stopname":"Derby & Dilke","distance":249,"time":"0.62"},
{"stopnum":31,"lat":46.72471,"long":-117.174728,"stopname":"Dilke & Ridgeview","distance":246,"time":"0.87"},
{"stopnum":32,"lat":46.72608,"long":-117.175926,"stopname":"South & Side","distance":149,"time":"0.48"},
{"stopnum":33,"lat":46.72617,"long":-117.177879,"stopname":"South & Spring","distance":292,"time":"0.87"},
{"stopnum":34,"lat":46.72633,"long":-117.1817,"stopname":"South & High","distance":366,"time":"0.90"},
{"stopnum":35,"lat":46.72465,"long":-117.185242,"stopname":"Rocky Way & Grand","distance":262,"time":"0.60"},
{"stopnum":36,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.40"},
{"stopnum":37,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":575,"time":"1.98"},
]





//SHUTTLE B
var ShuttleB =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":238,"time":"0.62"},
{"stopnum":13,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":14,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.83"},
{"stopnum":15,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.28"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":448,"time":"0.85"},
{"stopnum":17,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":18,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":19,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":20,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":21,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":22,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"},
]

//Shuttle A
//https://pullman.mytransitride.com/api/Stop?patternId=2346
var ShuttleA =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":274,"time":"0.60"},
{"stopnum":13,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":14,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.93"},
{"stopnum":15,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":189,"time":"0.52"},
{"stopnum":16,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.50"},
{"stopnum":17,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.93"},
{"stopnum":18,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":19,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":20,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":21,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":22,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":23,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":24,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"},
]

//Shuttle C
//https://pullman.mytransitride.com/api/Stop?patternId=2349

var ShuttleC =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":238,"time":"0.62"},
{"stopnum":13,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":14,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.83"},
{"stopnum":15,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.28"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":448,"time":"0.85"},
{"stopnum":17,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":18,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":19,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":20,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":21,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":22,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"}
]


//Shuttle D
var ShuttleD =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":274,"time":"0.60"},
{"stopnum":13,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":14,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.93"},
{"stopnum":15,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":189,"time":"0.52"},
{"stopnum":16,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.50"},
{"stopnum":17,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.93"},
{"stopnum":18,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":19,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":20,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":21,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":22,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":23,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":24,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"},
]

//Shuttle E
var ShuttleE =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":274,"time":"0.60"},
{"stopnum":13,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":14,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.93"},
{"stopnum":15,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":189,"time":"0.52"},
{"stopnum":16,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.50"},
{"stopnum":17,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":447,"time":"0.93"},
{"stopnum":18,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":19,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":20,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":21,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":22,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":23,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":24,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"},
]

//Shuttle F
var ShuttleF =
[
{"stopnum":1,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":426,"time":"0.62"},
{"stopnum":2,"lat":46.71342,"long":-117.169792,"stopname":"Bishop at Hospital ","distance":291,"time":"0.37"},
{"stopnum":3,"lat":46.713253,"long":-117.166023,"stopname":"Bishop & Summit","distance":195,"time":"0.22"},
{"stopnum":4,"lat":46.71471,"long":-117.164795,"stopname":"Bishop at Cinemas","distance":419,"time":"0.65"},
{"stopnum":5,"lat":46.71824,"long":-117.164673,"stopname":"Bishop at Pro Mall ","distance":228,"time":"0.40"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":211,"time":"0.40"},
{"stopnum":7,"lat":46.7220573,"long":-117.164452,"stopname":"Bishop at Sunset Mart","distance":521,"time":"1.15"},
{"stopnum":8,"lat":46.72591,"long":-117.167145,"stopname":"Main & Stadium Way","distance":194,"time":"0.42"},
{"stopnum":9,"lat":46.7269135,"long":-117.165916,"stopname":"Stadium at Stephenson Hall","distance":525,"time":"1.17"},
{"stopnum":10,"lat":46.72947,"long":-117.160172,"stopname":"Stadium at Bustad Hall Please Exit Thru Rear Doors","distance":252,"time":"0.83"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":242,"time":"0.53"},
{"stopnum":12,"lat":46.73368,"long":-117.158867,"stopname":"Stadium at North Fairway","distance":238,"time":"0.62"},
{"stopnum":13,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
{"stopnum":14,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.83"},
{"stopnum":15,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.28"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":448,"time":"0.85"},
{"stopnum":17,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":18,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":456,"time":"0.95"},
{"stopnum":19,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.48"},
{"stopnum":20,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.75"},
{"stopnum":21,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.77"},
{"stopnum":22,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":3263,"time":"6.50"}
]


var SATNorth =
[
    //North
    //https://pullman.mytransitride.com/api/Stop?patternId=2368
    {"stopnum":1,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
    {"stopnum":2,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":335,"time":"1.23"},
    {"stopnum":3,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":228,"time":"0.53"},
    {"stopnum":4,"lat":46.7366943,"long":-117.156693,"stopname":"Orchard At WSU Rec. Center ","distance":424,"time":"0.82"},
    {"stopnum":5,"lat":46.7399063,"long":-117.156166,"stopname":"Valley and Orchard","distance":159,"time":"0.30"},
    {"stopnum":6,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":612,"time":"1.27"},
    {"stopnum":7,"lat":46.74329,"long":-117.154778,"stopname":"Merman & Terre View","distance":524,"time":"1.30"},
    {"stopnum":8,"lat":46.74654,"long":-117.151558,"stopname":"Merman at Cougar Crest","distance":142,"time":"0.25"},
    {"stopnum":9,"lat":46.74771,"long":-117.150879,"stopname":"Merman at Pine Ridge","distance":321,"time":"1.02"},
    {"stopnum":10,"lat":46.74832,"long":-117.148026,"stopname":"Westwood at Birch Hills ","distance":371,"time":"0.67"},
    {"stopnum":11,"lat":46.7462959,"long":-117.145355,"stopname":"Westwood at Maple Valley","distance":333,"time":"0.55"},
    {"stopnum":12,"lat":46.7442436,"long":-117.148087,"stopname":"Northwood at Aspen Village ","distance":424,"time":"0.83"},
    {"stopnum":13,"lat":46.7423477,"long":-117.152153,"stopname":"Terre View at Cougar Ridge","distance":247,"time":"0.52"},
    {"stopnum":14,"lat":46.74299,"long":-117.155,"stopname":"Terre View & Merman ","distance":291,"time":"0.68"},
    {"stopnum":15,"lat":46.74412,"long":-117.158157,"stopname":"Terre View at CCN","distance":346,"time":"0.88"},
    {"stopnum":16,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":733,"time":"1.03"},
    {"stopnum":17,"lat":46.746315,"long":-117.168381,"stopname":"Terre View at Schweitzer","distance":914,"time":"1.52"},
    {"stopnum":18,"lat":46.75135,"long":-117.163788,"stopname":"Hopkins at Schweitzer Manufacturing","distance":209,"time":"0.35"},
    {"stopnum":19,"lat":46.7524338,"long":-117.161514,"stopname":"Hopkins Court Turnaround","distance":274,"time":"0.45"},
    {"stopnum":20,"lat":46.7511864,"long":-117.164619,"stopname":"Hopkins at Palouse Science Center","distance":201,"time":"0.37"},
    {"stopnum":21,"lat":46.7508278,"long":-117.167168,"stopname":"Hopkins at Amplicon","distance":380,"time":"0.80"},
    {"stopnum":22,"lat":46.7486343,"long":-117.1697,"stopname":"Palouse Trace Apartments","distance":812,"time":"0.97"},
    {"stopnum":23,"lat":46.74359,"long":-117.16346,"stopname":"Terre View & Brandi Way","distance":470,"time":"0.67"},
    {"stopnum":24,"lat":46.7440643,"long":-117.157364,"stopname":"Terre View at CCS","distance":640,"time":"1.52"},
    {"stopnum":25,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":376,"time":"0.77"},
    {"stopnum":26,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.57"},
    {"stopnum":27,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":350,"time":"0.70"},
    {"stopnum":28,"lat":46.73932,"long":-117.171448,"stopname":"Stadium at McDonalds","distance":152,"time":"0.50"},
    {"stopnum":29,"lat":46.7400627,"long":-117.172546,"stopname":"Grand at Jack In The Box","distance":953,"time":"1.27"},
    {"stopnum":30,"lat":46.7473145,"long":-117.173683,"stopname":"Larry & Friel","distance":336,"time":"0.57"},
    {"stopnum":31,"lat":46.74668,"long":-117.177933,"stopname":"Larry & Turner","distance":259,"time":"0.53"},
    {"stopnum":32,"lat":46.74514,"long":-117.180489,"stopname":"Larry & Hall, Aquatic Center ","distance":192,"time":"0.53"},
    {"stopnum":33,"lat":46.7437973,"long":-117.179146,"stopname":"Hall & Orion","distance":331,"time":"0.72"},
    {"stopnum":34,"lat":46.7423744,"long":-117.178825,"stopname":"Janet & State","distance":211,"time":"0.50"},
    {"stopnum":35,"lat":46.74095,"long":-117.1789,"stopname":"State & Timothy","distance":250,"time":"0.52"},
    {"stopnum":36,"lat":46.7388458,"long":-117.17836,"stopname":"State & True","distance":489,"time":"1.48"},
    {"stopnum":37,"lat":46.7398262,"long":-117.173119,"stopname":"Stadium at Dissmores Please Exit Thru Rear Doors","distance":211,"time":"0.75"},
    {"stopnum":38,"lat":46.738987,"long":-117.170631,"stopname":"Stadium at Starbucks","distance":630,"time":"1.12"},
    {"stopnum":39,"lat":46.73648,"long":-117.163223,"stopname":"Stadium at Harvey & Duncan","distance":267,"time":"0.50"},
    {"stopnum":40,"lat":46.7357,"long":-117.159981,"stopname":"Stadium & Cougar Way","distance":179,"time":"0.72"},
    {"stopnum":41,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
    {"stopnum":42,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
    {"stopnum":43,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":607,"time":"1.72"},
    {"stopnum":44,"lat":46.7276764,"long":-117.168556,"stopname":"Spokane & Washington","distance":164,"time":"0.45"},
    {"stopnum":45,"lat":46.7290649,"long":-117.168686,"stopname":"Spokane & College ","distance":273,"time":"0.70"},
    {"stopnum":46,"lat":46.73151,"long":-117.168419,"stopname":"Spokane at Honors Hall","distance":270,"time":"1.10"}

]

var SATSouth =
[
//South
//https://pullman.mytransitride.com/api/Stop?patternId=2375
{"stopnum":1,"lat":46.73248,"long":-117.165855,"stopname":"Campus & Thatuna Please Exit Thru Rear Doors","distance":468,"time":"1.68"},
{"stopnum":2,"lat":46.7334976,"long":-117.162247,"stopname":"Cougar Way at Bohler & Smith Gyms ","distance":335,"time":"1.23"},
{"stopnum":3,"lat":46.7356644,"long":-117.15921,"stopname":"Orchard at Beasley (NE)","distance":411,"time":"1.23"},
{"stopnum":4,"lat":46.7351074,"long":-117.156471,"stopname":"North Fairway at Bailey Brayton Field","distance":524,"time":"0.97"},
{"stopnum":5,"lat":46.7378654,"long":-117.150932,"stopname":"North Fairway at WSU Rec Center","distance":492,"time":"0.95"},
{"stopnum":6,"lat":46.74196,"long":-117.150093,"stopname":"North Fairway & Terre View ","distance":184,"time":"0.55"},
{"stopnum":7,"lat":46.74338,"long":-117.149239,"stopname":"Northwood at Northwood Manor","distance":163,"time":"0.28"},
{"stopnum":8,"lat":46.7444153,"long":-117.147728,"stopname":"Northwood at Aspen Village","distance":321,"time":"0.57"},
{"stopnum":9,"lat":46.7464867,"long":-117.145279,"stopname":"Westwood at Maple Valley ","distance":328,"time":"0.70"},
{"stopnum":10,"lat":46.7483444,"long":-117.147728,"stopname":"Westwood at Birch Hills","distance":530,"time":"1.45"},
{"stopnum":11,"lat":46.74613,"long":-117.151665,"stopname":"Merman at Cougar Crest ","distance":228,"time":"0.60"},
{"stopnum":12,"lat":46.7442627,"long":-117.151855,"stopname":"Merman at College Crest","distance":227,"time":"0.58"},
{"stopnum":13,"lat":46.74345,"long":-117.154541,"stopname":"Merman & Terre View Please Exit Thru Rear Doors","distance":492,"time":"1.17"},
{"stopnum":14,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley ","distance":72,"time":"0.33"},
{"stopnum":15,"lat":46.74027,"long":-117.159126,"stopname":"Valley and Merman","distance":223,"time":"0.45"},
{"stopnum":16,"lat":46.73985,"long":-117.156296,"stopname":"Valley and Orchard","distance":450,"time":"0.92"},
{"stopnum":17,"lat":46.7366257,"long":-117.156891,"stopname":"Orchard at WSU Rec. Center ","distance":167,"time":"0.38"},
{"stopnum":18,"lat":46.7359467,"long":-117.158714,"stopname":"Orchard at Beasley (SW)","distance":221,"time":"0.92"},
{"stopnum":19,"lat":46.7342873,"long":-117.159065,"stopname":"Stadium & Flag Lane","distance":339,"time":"0.82"},
{"stopnum":20,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":393,"time":"1.07"},
{"stopnum":21,"lat":46.72858,"long":-117.162018,"stopname":"Stadium at Troy Ln Please Exit thru Rear Doors","distance":1047,"time":"2.68"},
{"stopnum":22,"lat":46.7224579,"long":-117.164871,"stopname":"Bishop & Latah","distance":297,"time":"0.57"},
{"stopnum":23,"lat":46.7198944,"long":-117.164108,"stopname":"Bishop and Bleasner","distance":252,"time":"0.42"},
{"stopnum":24,"lat":46.71775,"long":-117.164856,"stopname":"Bishop at Pro Mall ","distance":298,"time":"0.52"},
{"stopnum":25,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":270,"time":"0.35"},
{"stopnum":26,"lat":46.7132645,"long":-117.166191,"stopname":"Bishop & Summit","distance":161,"time":"0.20"},
{"stopnum":27,"lat":46.7133179,"long":-117.168236,"stopname":"Bishop & Footloose","distance":303,"time":"0.57"},
{"stopnum":28,"lat":46.71297,"long":-117.171486,"stopname":"Palouse Medical","distance":690,"time":"1.27"},
{"stopnum":29,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":483,"time":"1.45"},
{"stopnum":30,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":455,"time":"0.97"},
{"stopnum":31,"lat":46.71685,"long":-117.182777,"stopname":"Grand At Shopko","distance":441,"time":"0.63"},
{"stopnum":32,"lat":46.7206573,"long":-117.1844,"stopname":"Grand & Crestview","distance":648,"time":"0.93"},
{"stopnum":33,"lat":46.72625,"long":-117.1851,"stopname":"Grand at Jins Mart","distance":236,"time":"0.40"},
{"stopnum":34,"lat":46.728035,"long":-117.183418,"stopname":"Grand at Thai Ginger ","distance":488,"time":"1.83"},
{"stopnum":35,"lat":46.73032,"long":-117.1796,"stopname":"Kamiaken at Porch Light","distance":267,"time":"0.68"},
{"stopnum":36,"lat":46.7314,"long":-117.177444,"stopname":"Whitman & Maple","distance":200,"time":"0.42"},
{"stopnum":37,"lat":46.73204,"long":-117.175179,"stopname":"Maiden & Spaulding","distance":313,"time":"0.72"},
{"stopnum":38,"lat":46.73354,"long":-117.172462,"stopname":"Campus & Opal","distance":336,"time":"0.87"},
{"stopnum":39,"lat":46.7320366,"long":-117.168694,"stopname":"Campus & Spokane","distance":231,"time":"0.93"}


]


var Express1A =
[

{"stopnum":1,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":853,"time":"2.30"},
{"stopnum":2,"lat":46.7398262,"long":-117.173119,"stopname":"Stadium at Dissmores Please Exit Thru Rear Doors","distance":2399,"time":"4.27"},
{"stopnum":3,"lat":46.72109,"long":-117.184723,"stopname":"Grand & Crestview","distance":1431,"time":"2.53"},
{"stopnum":4,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":302,"time":"1.05"},
{"stopnum":5,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":1559,"time":"2.25"},
{"stopnum":6,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":1703,"time":"3.97"},
{"stopnum":7,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":2451,"time":"5.42"},
{"stopnum":8,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":0,"time":"0.00"},


]

var Express2A =
[

    {"stopnum":1,"lat":46.7579269,"long":-117.169136,"stopname":"Busch ","distance":1156,"time":"1.27"},
    {"stopnum":2,"lat":46.747818,"long":-117.172546,"stopname":"Grand & Larry","distance":873,"time":"1.00"},
    {"stopnum":3,"lat":46.740387,"long":-117.172508,"stopname":"Grand & Stadium","distance":1673,"time":"4.02"},
    {"stopnum":4,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2287,"time":"5.18"},
    {"stopnum":5,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":1257,"time":"1.83"},
    {"stopnum":6,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":483,"time":"0.93"},
    {"stopnum":7,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":302,"time":"1.05"},
    {"stopnum":8,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":1559,"time":"2.25"},
    {"stopnum":9,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":1703,"time":"3.97"},
    {"stopnum":10,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":3675,"time":"5.70"},
    {"stopnum":11,"lat":46.7579269,"long":-117.169136,"stopname":"Busch ","distance":0,"time":"0.00"},

]

var Express1B =
[
    {"stopnum":1,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":302,"time":"1.05"},
{"stopnum":2,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":1559,"time":"2.25"},
{"stopnum":3,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":1703,"time":"3.97"},
{"stopnum":4,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":2451,"time":"5.42"},
{"stopnum":5,"lat":46.7452,"long":-117.18087,"stopname":"Hall & Larry, Aquatic Center","distance":853,"time":"2.30"},
{"stopnum":6,"lat":46.7398262,"long":-117.173119,"stopname":"Stadium at Dissmores Please Exit Thru Rear Doors","distance":2399,"time":"4.27"},
{"stopnum":7,"lat":46.72109,"long":-117.184723,"stopname":"Grand & Crestview","distance":1431,"time":"2.53"},
{"stopnum":8,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":0,"time":"0.00"},


]

var Express2B =
[

{"stopnum":1,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":302,"time":"1.05"},
{"stopnum":2,"lat":46.71426,"long":-117.175247,"stopname":"Bishop & Harvest ","distance":1559,"time":"2.25"},
{"stopnum":3,"lat":46.7201843,"long":-117.164024,"stopname":"Bishop & Bleasner ","distance":1703,"time":"3.97"},
{"stopnum":4,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":3675,"time":"5.70"},
{"stopnum":5,"lat":46.7579269,"long":-117.169136,"stopname":"Busch ","distance":1156,"time":"1.27"},
{"stopnum":6,"lat":46.747818,"long":-117.172546,"stopname":"Grand & Larry","distance":873,"time":"1.00"},
{"stopnum":7,"lat":46.740387,"long":-117.172508,"stopname":"Grand & Stadium","distance":1673,"time":"4.02"},
{"stopnum":8,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2287,"time":"5.18"},
{"stopnum":9,"lat":46.71523,"long":-117.165192,"stopname":"Bishop at Crimson & Grey","distance":1257,"time":"1.83"},
{"stopnum":10,"lat":46.71496,"long":-117.178764,"stopname":"Bishop at Safeway ","distance":483,"time":"0.93"},
{"stopnum":11,"lat":46.7125168,"long":-117.1772,"stopname":"Wall Mart on Harvest Drive ","distance":0,"time":"0.00"},

]

var Express3A =
[

{"stopnum":1,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2599,"time":"4.85"},
{"stopnum":2,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":3,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":4,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":5,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":948,"time":"2.10"},
{"stopnum":6,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":1471,"time":"3.77"},
{"stopnum":7,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":0,"time":"0.00"},

]

var Express3APost =
[
    {"stopnum":1,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2599,"time":"4.85"},
{"stopnum":2,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":3,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":4,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":5,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":6,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":7,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":8,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":9,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":10,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":12,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":13,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":14,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":15,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":17,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":18,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":19,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":20,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":21,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":22,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":23,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":24,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":25,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":26,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3039,"time":"4.62"},


]

var Express3B =
[
    {"stopnum":1,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":2,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":3,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":948,"time":"2.10"},
{"stopnum":4,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":1471,"time":"3.77"},
{"stopnum":5,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2599,"time":"4.85"},
{"stopnum":6,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":7,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":0,"time":"0.00"},
    

]

var Express3BPost =
[

{"stopnum":1,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":2599,"time":"4.85"},
{"stopnum":2,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":3,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":4,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":5,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":6,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":7,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":8,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":9,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":10,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":11,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":12,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":13,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":14,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":15,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":16,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":17,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":18,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":19,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":20,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":21,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":22,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":23,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":24,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":25,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":26,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3039,"time":"4.62"},

]

var Express3C =
[

{"stopnum":1,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":1297,"time":"2.85"},
{"stopnum":2,"lat":46.740078,"long":-117.158218,"stopname":"Valley and Merman","distance":1191,"time":"2.65"},
{"stopnum":3,"lat":46.7442131,"long":-117.161125,"stopname":"WSU Research Park","distance":4837,"time":"6.37"},
{"stopnum":4,"lat":46.72231,"long":-117.144348,"stopname":"Terre View & Highway 270","distance":3067,"time":"4.68"},
{"stopnum":5,"lat":46.7315063,"long":-117.158859,"stopname":"Stadium at Vogel Biosciences Please Exit Thru Rear Doors","distance":0,"time":"0.00"},

]

var Express4A =
[
{"stopnum":1,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":1908,"time":"3.95"},
{"stopnum":2,"lat":46.7444153,"long":-117.147728,"stopname":"Northwood at Aspen Village","distance":321,"time":"0.60"},
{"stopnum":3,"lat":46.7464867,"long":-117.145279,"stopname":"Westwood at Maple Valley ","distance":328,"time":"0.70"},
{"stopnum":4,"lat":46.7483444,"long":-117.147728,"stopname":"Westwood at Birch Hills","distance":530,"time":"1.37"},
{"stopnum":5,"lat":46.74613,"long":-117.151665,"stopname":"Merman at Cougar Crest ","distance":456,"time":"1.13"},
{"stopnum":6,"lat":46.74345,"long":-117.154541,"stopname":"Merman & Terre View Please Exit Thru Rear Doors","distance":492,"time":"1.13"},
{"stopnum":7,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":8,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":9,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":1241,"time":"2.97"},

]


var Express4B =
[
{"stopnum":1,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":1908,"time":"3.95"},
{"stopnum":2,"lat":46.7444153,"long":-117.147728,"stopname":"Northwood at Aspen Village","distance":321,"time":"0.60"},
{"stopnum":3,"lat":46.7464867,"long":-117.145279,"stopname":"Westwood at Maple Valley ","distance":328,"time":"0.70"},
{"stopnum":4,"lat":46.7483444,"long":-117.147728,"stopname":"Westwood at Birch Hills","distance":530,"time":"1.37"},
{"stopnum":5,"lat":46.74613,"long":-117.151665,"stopname":"Merman at Cougar Crest ","distance":456,"time":"1.13"},
{"stopnum":6,"lat":46.74345,"long":-117.154541,"stopname":"Merman & Terre View Please Exit Thru Rear Doors","distance":492,"time":"1.13"},
{"stopnum":7,"lat":46.74067,"long":-117.159317,"stopname":"Merman & Valley CALLOUT!","distance":376,"time":"0.73"},
{"stopnum":8,"lat":46.7398567,"long":-117.163925,"stopname":"Valley at Emerald Downs","distance":317,"time":"0.55"},
{"stopnum":9,"lat":46.73851,"long":-117.167595,"stopname":"Valley at Providence Court ","distance":1241,"time":"2.97"},
{"stopnum":10,"lat":46.73127,"long":-117.159058,"stopname":"Stadium at Martin Stadium ","distance":0,"time":"0.00"},


]

exports.Express4B = Express4B;

exports.Express4A = Express4A;

exports.Express3C = Express3C;

exports.Express3BPost = Express3BPost;

exports.Express3B = Express3B;

exports.Express3APost = Express3APost;

exports.Express3A = Express3A;

exports.Express2B = Express2B;

exports.Express1B = Express1B;

exports.Express2A = Express2A;


exports.Express1A = Express1A;

exports.SATSouth = SATSouth;
exports.SATNorth = SATNorth;


exports.RouteAM1 = RouteAM1;
exports.RouteAM2 = RouteAM2;
exports.RouteAM3 = RouteAM3;
exports.RouteAM4 = RouteAM4;
exports.RouteAM5 = RouteAM5;
exports.RouteBlue = RouteBlue
exports.RouteCoffee = RouteCoffee
exports.CrimsonExpress = CrimsonExpress
exports.GreyExpress =GreyExpress
exports.SilverRoute =SilverRoute
exports.North = North
exports.South = South
exports.PM1 = PM1
exports.PM2 = PM2
exports.PM3 = PM3
exports.PM4 = PM4
exports.PM5 = PM5
exports.PM6 = PM6
exports.ShuttleA = ShuttleA
exports.ShuttleB = ShuttleB
exports.ShuttleC = ShuttleC
exports.ShuttleD = ShuttleD
exports.ShuttleE = ShuttleE
exports.ShuttleF = ShuttleF
exports.LoopRoute = LoopRoute


exports.routeNameList = routeNameList
