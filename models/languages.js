"use strict";

//Imports 
const db = require('../DB/config.js');


/*
 * Checks if the specified Cache Exists in Table 
 * Returns a promise with Cache Data if Found in Database.
 */

const GetAllSupportedLanguages = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM `tbl_sp_languages` ORDER BY id asc LIMIT 10", function (err, rows, fields) {
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



/*
 * Gets All Caches From Table
 * Returns a promise with Cache Data if Found in Database.
 */

const UpdateLanguages = (ActiveLanguages) => {
    console.log(ActiveLanguages);
    const injectedString = ActiveLanguages.map(c => `'${c}'`).join(', ');
    return new Promise((resolve, reject) => {
        db.query("UPDATE `tbl_sp_languages` SET `status` = '1' WHERE language_code IN (" + injectedString + ") " ,
        function (err, rows, fields) {
            if (err) {
                reject(err);
                throw err;
            }
            else if(rows.affectedRows > 0) {
                db.query("UPDATE `tbl_sp_languages` SET `status` = '0' WHERE language_code NOT IN (" + injectedString + ") " ,
                function (err, rows, fields) {
                    console.log("Languages Updated Successfully");
                    var status = true;
                    resolve(status);
                });
            } else {
                console.log("Error Updating Record");
                var status = false;
                resolve(status);
            }
        });

    });

}


module.exports = {
    GetAllSupportedLanguages,
    UpdateLanguages
}