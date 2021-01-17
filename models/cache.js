"use strict";

//Import DB config 
const db = require('../DB/config.js');

/*
 * Gets All Caches From Table
 * Returns a promise with Cache Data if Found in Database.
 */

const GetAllCaches = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `tbl_translations`ORDER BY id LIMIT 20", function (err, rows, fields) {
            if (err) {
                reject(err);
                throw err;
              
            }
            if (rows.length > 0) {
                console.log("Caches Found!");
                resolve(rows);
            } else {
                const error = "Not Found";
                console.log("Data Not Found");
                resolve(error);
            }
        });

    });

}


/*
 * Deletes All Caches From Table
 * Returns a promise if Data Gets Deleted from Database.
 */

const DeleteAllCache = () => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM `tbl_translations`", function (err, rows, fields) {
            if (err) {
                reject(err);
                throw err;
            }
            else if(rows.affectedRows > 0) {
                console.log("Caches Flushed Out Successfully");
                var status = true;
                resolve(status);
            } else {
                console.log("Error Deleting Record");
                var status = false;
                resolve(status);
            }
        });

    });

}

//Exports
module.exports = {
    GetAllCaches,
    DeleteAllCache
}