/**
 * Created by root on 7/5/16.
 */

var fs = require('fs');
function ErrorLog(message) {
    CustomizeConsoleLog(message, "#222", '#bada55')
}


function CustomizeConsoleLog(message, color, background) {
    console.log("%c" + message, 'background:' + background + "; color: " + color)
}

function WriteLogToNewFile(message, fileName) {
    if(typeof fileName == "undefined"){
        fileName = "defaultLog"
    }
    // fs.truncate("DebugLog/" + fileName , 0, function(){console.log('clearfile' + fileName)})
    fs.appendFile("DebugLog/"+ fileName +".log", new Date() + message +"\n", function (err) {
        if (err) {
            return console.log(err);
        }

    })
}

function WriteLog(message,fileName,path) {
     if(typeof fileName == "undefined"){
        fileName = "defaultLog"
    }
         if(typeof path == "undefined"){
        path = "DebugLog"
    }
    // fs.truncate("DebugLog/" + fileName , 0, function(){console.log('clearfile' + fileName)})
    fs.appendFile(path + "/"+ fileName, message +"\n", function (err) {
        if (err) {
            return console.log(err);
        }

    })   
}

function TruncateLog() {
    fs.truncate("DebugLog/undefined.log" , 0, function(){console.log('clearfile')})
    fs.truncate("DebugLog/defaultLog.log" , 0, function(){console.log('clearfile')})
}

exports.Errorlog = ErrorLog
exports.CustomizeConsoleLog = CustomizeConsoleLog
exports.WriteLogToNewFile =WriteLogToNewFile
exports.TruncateLog = TruncateLog
exports.WriteLog = WriteLog