/**
 * Created by ruofei on 9/9/16.
 */

// util function for user account
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'q',
    database: 'cougtransit'
});

function LogIn(id, password, callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'SELECT Account WHERE AccountID = ? AND Password = ?;'
        connection.query(queryStr, [id, password], function (error, results, fields) {
            connection.release();
            if (error) {
                console.log("error: " + error)
                callback("error")
            }
            else
                callback(results)
        });
    });
}

function SignUp(accountType, userName, password, email,callback) {
    pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO Account(AccountID,AccountType,UserName,Password,Email) VALUES(?,?,?,?,?,?);'
        connection.query(queryStr, [email,accountType,userName,password,email], function (error, results, fields) {
            connection.release();
            // console.log("error: " + error)
            // console.log("results: " + results)
            // console.log("fields: " + fields)
            callback(results)
        });
    });
}

function ChangePassword(email, password,callback) {
        pool.getConnection(function (err, connection) {
        var queryStr = 'INSERT INTO Account(AccountID, Password) VALUES(?) ON DUPLICATE UPDATE Password = ?;'
        connection.query(queryStr, [email, password,password], function (error, results, fields) {
            connection.release();
            // console.log("error: " + error)
            // console.log("results: " + results)
            // console.log("fields: " + fields)
            callback(results)
        });
    });
}

