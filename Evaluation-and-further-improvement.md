# Evaluation of Results and Ideas For Further Improvement 


## Evaluation of Results

The CY APP is a NodeJS Application developed to Perform Simple Text Translations which exposes itself to Microsoft Api 
To Perform the Translation Function.
The Code Young Translator Follows the MVC Pattern (Model , View , Controller)

#### View 
 The View For Client Side is Designed Using HTML/CSS/Javascript.
The View Displays Two TextBoxes which allows user to type their text and select appropriate Language to convert.
On Submission , The View collects the User Inputs and Makes a POST request to Server by passing From Language , To Language and the 
Text to be Translated. These Requests are then received in server and our "main.js" file handles the incoming requests and then redirects to Appropriate Controllers 

#### Controller 

The Controller Takes care of mapping the requests to thier appropriate models and then send back the response to Client.
We have 3 Controllers in our Application

TranslateController - Makes External Api Requests to Translate the given Text (first checks if data available in cache)
languageController - Returns Supported Languages
cacheController - Returns Caches if text is found in Database.


#### Model

The Model Directly Interacts with our Database. In Our Case , its MySQL.
The Model receives requests to interact with the db tables and fetch/update data by providing appropriate queries.
It Resolves or Rejects Promises on Success/Failure.

### Handle Caches Within DB 
 we can also sets an expiry of cache to next day.
If our cache was created on Monday, we set the expiry date to Tuesday.
The Expiry Date can be Set in our server code (models/db.js)  - EXTENSIBLE ARCHITECTURE

The db.js file contains cache creation , caching checking and deletion of expired caches 


#### Views Configure Panel 

Our Main View Also consists of a configuration panel. we have the following options to configure

##### manage cache 
This page Gives the user the option to view all cached resources and also allows to delete the caches

##### manage languages
This page allows the user to view and update the languages supported to translations 



# Ideas for further Improvements 

#### Improve the UI 
The UI can be improved by adding certain features like :
*Auto Detect Language
*Switch Inputs 
*Add Text-To-Speech Voice Assistant 


#### Support for More Languages 
*Adding all supported languages specified in microsoft translation api documentation (EXTENSIBLE ARCHITECTURE)


#### Add Pre-Caching
*Currently the api returns single language translation as response to reduce response time.
*For Further Improvement , one can specify multiple language parameters in api call and cache all the translations for further use




# TESTING  