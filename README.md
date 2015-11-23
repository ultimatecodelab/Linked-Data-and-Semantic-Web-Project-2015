
# Software Developers - Arjun Kharel And James Ngondo (GMIT)

![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/banner.PNG "Optional title")

**API has been hosted on heroku. Links are listed under  "How to query the api" section.**

1. Installation (prerequisites)
    - Setting up API
    - Setting up the client side webapp for consuming the API
2. Project description
    - Datasets
    - Database Technology
    - Server Side Technologies
    - Front-End Technologies 
3. How to query the api
    - Querying API (REST Verbs)
    - Using Postman
4. Angularjs Frontend (Graphical User Interface)
5. Use of the API
6. Conclusion
7. References 

## 1: Installation (prerequisites)
  **Setting up the server-side dependency**
  
      1: Download node: https://nodejs.org/en/download/
      2: CD into "server" folder located on the project root directory. 
      3: Hold shift and right click and open command prompt.
      4: npm install to install the serverside dependencies. 
      5: Type node index.js and hit enter. (you should get message on your console, saying it is running on port 3000 )
      
  **Setting up the client side dependencies**
  
      1: Download grunt cli : https://www.npmjs.com/package/grunt-cli
      2: Open command prompt, cd into client folder and type npm install . This will install all the client side  dependencies
        listed on the package.json fole
      3: Open command prompt, cd into client folder and type grunt serve. Web browser will open automatically and you will
        see the front-end(webapp) built using angularjs. You can perform all the HTTP actions/verbs from the GUI.
        
  **Internet connection is required because the mongodb database is hosted online.**

## 2: Project description
 **Datasets** : THREE different datasets have been chosen to create an API that allows user to find parking places in Galway city

  * Dataset 1 -Parking  https://data.gov.ie/dataset/galway-city-car-parking-locations
  * Dataset 2 -Blue Badge https://data.gov.ie/dataset/galway-city-blue-badge-parking-locations
  * Dataset 3 -Parking-Meters https://data.gov.ie/dataset/galway-city-parking-meter-locations
  
**Database Technology**

   MongoDb : Mongodb is a document based database. The database is hosted on a server online and our application connects 
    to a remote database. MongoDb is higly scalable.
    
**Server Side Technologies**
  * Server-side is completely isolated from the client side code. An API has been hosted online.
  * API was developed using the express and restify framework.
  * Routes / HTTP verbs tested from postman (chrome extension)

**Front-End Technologies**
  * Angularjs - we are consuming the json data returned by our server.
  * Yoeman - The web's scaffolding tool for modern webapps. See more at : http://yeoman.io/


## 3: How to Query the API from Url's
  **API routes**
  
   Navigate to: https://galwayparkingapitest.herokuapp.com/parking (Dataset 1)
   
   Navigate to https://galwayparkingapitest.herokuapp.com/meters (Dataset 2)
   
   Navigate to https://galwayparkingapitest.herokuapp.com/bluebadge (Dataset 3)
   
**Getting specific record by using the id field**

  https://galwayparkingapitest.herokuapp.com/meters/5651b9d87fa09d17185b1b6f
 
   https://galwayparkingapitest.herokuapp.com/parking/5651d41d7fa09d17185b1be8

  https://galwayparkingapitest.herokuapp.com/bluebadge/56510c047fa09d171859f960
   
## 4: Using Postman to interact (Get/Post/Put/Delete) with our API. 
![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/postmanget.PNG "Optional title")


* Navigate to: https://galwayparkingapitest.herokuapp.com/parking (Dataset 1)

```javascript
[{"_id":"56428b5c58391feaec5283d8","parkingid":"1","name":"Market St","
type":"Pay/Surface Carpark","no_spaces":"88","latitude":"53.273","longitude":"-9.054",
"eastitm":"529691.955","northitm":"725294.803","eastig":"129726.012","northig":"225265.639"},
{"_id":"56428b5c58391feaec5283d9","parkingid":"2","name":"Jurys Hotel","type":"Multistorey Carpark",
"no_spaces":"348","latitude":"53.271","longitude":"-9.055","eastitm":"529620.784","northitm":"725010.839",
"eastig":"129654.828","northig":"224981.613"},{"_id":"56428b5c58391feaec5283da","parkingid":"3","name":"Gaol Rd / Cathedral",
"type":"Pay/Surface Carpark","no_spaces":"161","latitude":"53.274","longitude":"-9.057","eastitm":"529481.534","northitm":"725397.739",
"eastig":"129515.546","northig":"225368.595"}
```

* Navigate to https://galwayparkingapitest.herokuapp.com/meters (Dataset 2)

```javascript
[{"_id":"56428adb58391feaec52837e","meterid":"1","machineid":"2","location":"Brmeteridgets Tce","lat":"53.277285","long":"-9.047809"},
{"_id":"56428adb58391feaec52837f","meterid":"1","machineid":"03A","location":"Bohermore","lat":"53.276893","long":"-9.047091"},
{"_id":"56428adb58391feaec528380","meterid":"3","machineid":"1","location":"Bohermore","lat":"53.277273","long":"-9.046744"},
{"_id":"56428adb58391feaec528381","meterid":"4","machineid":"4","location":"Bohermore","lat":"53.277862","long":"-9.046052"},
{"_id":"56428adb58391feaec528382","meterid":"5","machineid":"5","location":"Bothar Irwin","lat":"53.27582","long":"-9.050056"},
{"_id":"56428adb58391feaec528383","meterid":"6","machineid":"6","location":"Lombard St","lat":"53.272924","long":"-9.054099"},
{"_id":"56428adb58391feaec528384","meterid":"7","machineid":"7","location":"Brmeteridge St","lat":"53.271572","long":"-9.056403"},
{"_id":"56428adb58391feaec528385","meterid":"8","machineid":"8","location":"Cathedral","lat":"53.274497","long":"-9.05735"},
```


* Navigate tohttps://galwayparkingapitest.herokuapp.com/bluebadge (Dataset 3)

```javascript
[{"_id":"56428cef58391feaec5283e9","badgeid":"1","location":"Opposite No. 5","no_spaces":"1",
"description":"1 space opposite No. 5, Lenaboy Avenue.","street":"Lenaboy Avenue","latitude":"53.275",
"longitude":"-9.067","eastitm":"528862.425","northitm":"725453.567","eastig":"128896.303",
"northig":"225424.432"},{"_id":"56428cef58391feaec5283ea","badgeid":"2","location":"At No. 2",
"no_spaces":"1","description":"1 space at No. 2, Upper Canal Road.","street":"Upper Canal Road",
"latitude":"53.276","longitude":"-9.061","eastitm":"529264.318","northitm":"725586.144",
"eastig":"129298.283","northig":"225557.039"}
```

## 5: Angularjs Frontend - Consuming api from angularjs (Frontend)
![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/mainpagebanner.PNG "Optional title")

http://localhost:9000/#/parking 


![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/searchandfiltering.PNG "Optional title")


http://localhost:9000/#/meters

![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/consumingmeters.PNG "Optional title")

http://localhost:9000/#/bluebadge
![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/consumingbluebadge.PNG "Optional title")

Getting json raw data from client side (angularjs)
![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/rawjsonfileslinks.PNG "Optional title")

## 6: Example use of the API
User will be able to find / locate the available parking spaces in galway city. 

## 7: Conclusion
Developed a fully working API and also  a seperate webapp in angularjs that consumes the API.
The SERVER side code is completely isolated from the client side( angularjs) - web app. This 
means that the API can be hosted in one server and clientside(angularjs) in different server and they can communicate back and forth.
This makes it easier for maintanance and future developments of an API because changes made to server side code will the break
down the client side functionality. 
This is a REST-full API developed using **Restify**. This technology is widely used in industries. It is very stable and was specifically 
built for REST web services. 
Good programming techniques used, MVC approach was followed. 

## 8: References
Code was not directly copied and pasted, code has been modified to fit our purpose. Some of the resources used in this project
are from the following sources..

https://spring.io/guides/gs/consuming-rest-angularjs/ 

http://hello-angularjs.appspot.com/angularjs-restful-apis-get-method-code-example 

http://restify.com/#server-api

https://www.mongodb.org/

https://www.youtube.com/watch?v=kHV7gOHvNdk

https://www.youtube.com/watch?v=MMOIr_VwwAk


