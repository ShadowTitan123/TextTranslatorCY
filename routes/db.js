//Database Connection
const db = require('../DB/config.js');



const CheckCache =  (from,to,text) =>{
    //  console.log(from,to,text);
     return new Promise((resolve, reject) => {
     db.query("SELECT * FROM `tbl_translations` WHERE from_lang = ? and to_lang = ? and text = ?",[from,to,text], function (err, rows, fields) {
        if (err) {
            throw err;
        }
        // console.log(rows);
        if(rows.length > 0){
            console.log("Data Found in Cache")
            resolve(rows);
        }else{
           error = "Not Found";
           console.log("Data Not Found in Cache")
           reject(error);
        }
        //res.json(rows);
      });

    })

}




const CreateCache =  (from,to,text,translation) =>{
    
    console.log("Creating Cache From Received Data");
    var current = new Date(); // current.getTime() = 1426060964567
    var followingDay = new Date(current.getTime() + 86400000); // + 1 day in ms
    var ExpiryDate = followingDay.toLocaleDateString(); // Set Tomorrow as Expiry 
    return new Promise((resolve, reject) => {
    db.query("INSERT INTO `tbl_translations` (`text`, `translation`, `from_lang`, `to_lang`, `status`, `expiry_date`) VALUES ( ?, ?, ?, ?, ?, ?)",
    [text,translation,from,to,1,ExpiryDate], function (err, rows, fields) {
        if (err) {
            throw err;
        }
        // console.log(rows);
        if(rows.affectedRows > 0){
            console.log("Cache Created Successfully");
            status = true;
            resolve(status);
        }else{
            console.log("Error Inserting Record");
            status = false;
            resolve(status);
        }
      });
    })

}




module.exports ={
    
    CheckCache,
    CreateCache,

} 