"use strict";

//Imports 
const db = require('../DB/config.js');


/*
 * Checks if the specified Cache Exists in Table 
 * Returns a promise with Cache Data if Found in Database.
 */

const GetAllSupportedLanguages = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `tbl_sp_languages`", function (err, rows, fields) {
            if (err) {
                throw err;
            }
            if (rows.length > 0) {
                console.log("Languages Found!");
                resolve(rows);
            } else {
                const error = "Not Found";
                console.log("Data Not Found");
                reject(error);
            }
        });

    });

}


module.exports = {
    GetAllSupportedLanguages
}