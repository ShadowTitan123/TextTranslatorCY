"use strict";

//Imports 
const db = require('../DB/config.js');
const moment = require('moment'); // Require MomentJS Library to Format Dates
moment().format();


/*
 * Checks if the specified Cache Exists in Table 
 * Returns a promise with Cache Data if Found in Database.
 */

const CheckCache = (from, to, text) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `tbl_translations` WHERE from_lang = ? and to_lang = ? and text = ?", [from, to, text], function (err, rows, fields) {
            if (err) {
                throw err;
            }
            if (rows.length > 0) {
                console.log("Data Found in Cache");
                resolve(rows);
            } else {
                const error = "Not Found";
                console.log("Data Not Found in Cache");
                reject(error);
            }
        });

    });

}


/*
 * Create a New Cache Data and Inserts into Table
 * Returns a promise with status true/false after insertion.
 */

const CreateCache = (from, to, text, translation) => {
    console.log("Creating Cache From Received Data");
    var current = new Date(); // current.getTime() = 1426060964567
    var followingDay = new Date(current.getTime() + 86400000); // + 1 day in ms (add expiry time here. Currently Set to One Day)
    var SetExpiryDate = followingDay.toLocaleDateString('ko-KR'); // Set Tomorrow as Expiry 
    var FormatExpiryDate = moment(SetExpiryDate, 'MM-DD-YYYY').format('YYYY-MM-DD');  // Format to YYYY-MM-DD as supported in MySQL
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO `tbl_translations` (`text`, `translation`, `from_lang`, `to_lang`, `status`, `expiry_date`) VALUES ( ?, ?, ?, ?, ?, ?)",
            [text, translation, from, to, 1, FormatExpiryDate], function (err, rows, fields) {
                if (err) {
                    reject(err);
                    throw err;
                }
                else if(rows.affectedRows > 0) {
                    console.log("Cache Created Successfully");
                    var status = true;
                    resolve(status);
                } else {
                    console.log("Error Inserting Record");
                    var status = false;
                    resolve(status);
                }
            });
    })

}

/*
 * Deletes Caches Which are Expired 
 * Returns a promise if Data Gets Deleted from Database.
 */

const DeleteExpiredCache = (CurrentDate) => {
    return new Promise((resolve, reject) => {
    console.log(CurrentDate);
        db.query("DELETE FROM `tbl_translations` WHERE expiry_date <= ? ", [CurrentDate], function (err, rows, fields) {
            if (err) {
                reject(err);
                throw err;
            }
            else if(rows.affectedRows > 0) {
                console.log("Expired Caches Deleted Successfully");
                var status = true;
                resolve(status);
            } else {
                console.log("No Expired Caches Found");
                var status = false;
                resolve(status);
            }
        });

    });

}


module.exports = {
    CheckCache,
    CreateCache,
    DeleteExpiredCache,
} 