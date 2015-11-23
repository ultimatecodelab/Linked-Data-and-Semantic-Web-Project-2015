
# Software Developers - Arjun Kharel And James Ngondo (GMIT)

![Alt text](https://github.com/ultimatecodelab/Linked-Data-and-Semantic-Web-Project-2015/blob/master/images/banner.PNG "Optional title")

**API has been hosted on heroku and links are provided bellow.**

1. Installation (prerequisites)
2. Project description
3. How to query the api 
4. Using Postman
5. Angularjs Frontend
6. Use of the API
7. Conclusion
8. References 

## 1: Installation (prerequisites)
* **Running Server (API)** - go to the **Server** directory which is located the on project root folder. **npm install** and node **server.js**. Make sure you are connected to the internet because database is hosted online and you must have internet connection to pull the data from the cloud.
* 
**Running Client**
* Lunch command prompt and cd into Linked-Data-and-Semantic-Web-Project-2015\clientSide and enter **npm install** to install all the dependencies.
Once all the dependencies has been installed for the client side, type **grunt serve** and web browser will open where you can perform CRUD operation on the api from front-end (angularjs)

## 2: Project description
THREE different datasets have been chosen to create an API that allows user to find parking places in Galway city.

**The  following datasets have/will be used to crean an API:** 

* Dataset 1 -Parking  https://data.gov.ie/dataset/galway-city-car-parking-locations
* Dataset 2 -Blue Badge https://data.gov.ie/dataset/galway-city-blue-badge-parking-locations
* Dataset 3 -Parking-Meters https://data.gov.ie/dataset/galway-city-parking-meter-locations

MongoDb will be used to store the datasets.

More datasets will be added if there need be. 

All the above mentioned datasets are available from data.gov.ie

## 3: How to Query the API from Url's
* Angularjs will be used for front-end. User will be able to query the API either using the url's,Navigation Links 
* User will bea able to delete data form the API
**The project is fully functional, and REST verbs are fully implemented and tested in postman(chrome extension).**

## 4: Using Postman for Get/Post/Put/Delete queries. 
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

* Getting specific record by using the id field

 https://galwayparkingapitest.herokuapp.com/meters/5651b9d87fa09d17185b1b6f
 
https://galwayparkingapitest.herokuapp.com/parking/5651d41d7fa09d17185b1be8

 https://galwayparkingapitest.herokuapp.com/bluebadge/56510c047fa09d171859f960


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
Developed a fully working API and also  a seperate webapp in angularjs for consuming the API.
The best part of this project is SERVER side code which is completely isolated from the client side( angularjs) - web app. This 
means that the API can be hosted in one server and clientside(angularjs) in different server and they can communicate back and forth.
It also makes it easier for maintaning and future development of an API because changes made to server side code will the break
down the client side functionality. 
This is a REST-full API developed using **Restify** and this technology is widely used in industries. It is very stable was specifically 
built for REST web services. 
Good programming techniques used, MVC approach was followed. 

## 8: References
Code was not directly copied and pasted, code has been modified to fit our purpose. Some of the resources used in this project
are from the following sources..

https://spring.io/guides/gs/consuming-rest-angularjs/ 

http://hello-angularjs.appspot.com/angularjs-restful-apis-get-method-code-example 

http://restify.com/#server-api

https://www.mongodb.org/


