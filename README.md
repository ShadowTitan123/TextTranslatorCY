# CodeYoung Translator With Caching

CodeYoung Translator is a Simple Text-Translation Web Application Developed Using NodeJS,ExpressJS,VanillaJS and MySQL Which Translates your Text into any Desired Language. It Also Saves the API Responses in Cache for Further Use.
This Application uses the Microsoft Azure Services to Enable Microsoft Translation API.

## Getting Started


### Run Live Version

In Order to Run Live Version of this Application. VISIT [HERE](https://nodejs.org/en/) 


### Run Locally 

In Order to Run this Application on your Localmachine, you will Require Node and an Apache Server.

### Prerequisites

Installation

```
npm install
```

### Running

Start the Application

```
node main.js
```

And Make sure to Turn ON your MYSQL Server
If Everything is setup successfully, You will see something like this on your Terminal

```
Code Young App Running on Port 3000
```

To Setup DB, Navigate to DB/config.js and change the values accordingly

```
const connection = mysql.createConnection({
  host: 'localhost',
  user: '<specify>',
  password: '<specify>',
  database: 'cytranslator'
})
```


Make Sure Create a Database Named 'cytranslator' and Import the File provided in
Files/cytranslator.sql


To Give API keys and Port Number, Navigate to .env file in root directory

```
PORT=3000
```

If All Set, You can run the Application using your browser : eg - localhost:3000

## Running the tests

To Test the Api Requests 

### Break down into end to end tests

To Test the Api Requests 

```
Give an example
```


## Built With

* [NodeJS](https://nodejs.org/en/) - Javascript Runtime
* [ExpressJS](https://expressjs.com/) - Web Server
* [MYSQL](https://www.mysql.com/) - Database 
* [AxiosJS](https://www.npmjs.com/package/axios) - For HTTP Requests
* [MomentJS](https://momentjs.com/) - For Date Formatting 
* [VanillaJS](http://vanilla-js.com/) - For UI Handling 
* [HTML/CSS](https://www.w3schools.com/html/) - For Views
* [Microsoft-Translation](https://www.microsoft.com/en-us/translator/business/trial/) - Translation Api By Azure Services

## Versioning

I used [Git](https://git-scm.com/) for versioning.



## TESTING  

I have Used the JEST-JS Framework to Test My Api Calls and Functions [Unit Testing]
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

All The Test Files are present in a folder call Test 

To Run All Tests, Make Sure Jest is Installed.
To Test All Our Files, Simple Run

```
npm run test
```

Test Cases 

#### GetAllCaches 

Makes an Asyncronous Request To Fetch All Caches and The Test Expects The Function to Return 
an Array and also checks For Empty Array 

#### CreateCache 

Makes an Asyncronous Request To Create a Cache in Database and Expects status to be True on Creation
Provide sample parameters to test

#### DeleteExpiredCache 

Makes an Asyncronous Request To Delete all expired caches in Database and Expects status to be True on deletion
Uncomment the Test Function To Run this test 

#### DeleteAllCache 

Makes an Asyncronous Request To Delete all caches in Database and Expects status to be True on deletion
Uncomment the Test Function To Run this test 

#### GetAllLanguages 

Makes an Asyncronous Request To Fetch All Supported Languages and The Test Expects The Function to Return a Populated Array 
and also checks For Empty Array 


## Author

* **Mohammed Adil** - Email : mdadilehsan77@gmail.com


## License

This project is licensed under the MIT License 
## Acknowledgments

* Thanks for CodeYoung Team For Assigning This Assignment.


