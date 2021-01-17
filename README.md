# CodeYoung Translator With Caching

CodeYoung Translator is a Text-Translation Web Application Developed Using NodeJS,ExpressJS,VanillaJS and MySQL Which Translates your Text into any Desired Language.
It uses the Microsoft Translator Api for Accurate Text-Translation.

## Getting Started

In Order to Run this Application on your LocalMachine you will Require Node and an Apache Server.

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


Make Sure Create a Database Named 'cytranslator' and Import the File given in
Files/translator.js


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

* [NodeJS](https://nodejs.org/en/) - Runtime
* [ExpressJS](https://expressjs.com/) - Web Server
* [MYSQL](https://www.mysql.com/) - Database 
* [AxiosJS](https://www.npmjs.com/package/axios) - For HTTP Requests
* [MomentJS](https://momentjs.com/) - For Date Formatting 
* [VanillaJS](http://vanilla-js.com/) - For UI Handling 
* [HTML/CSS](https://www.w3schools.com/html/) - For Views


## Versioning

We use [Git](https://git-scm.com/) for versioning.

## Authors

* **Mohammed Adil** - Email : mdadilehsan77@gmail.com


## License

This project is licensed under the MIT License 
## Acknowledgments

* Thanks for CodeYoung Team For Assigning This Assignment 


