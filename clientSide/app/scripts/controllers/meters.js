'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:MetersCtrl
 * @description
 * # MetersCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('MetersCtrl', function ($scope, $http) {
   
    var refresh = function() {
	   var meter_data = $http.get('https://galwayparkingapitest.herokuapp.com/meters/');
		meter_data.then(function (result){
		  $scope.meters = result.data;		 
		});
	
	};	
 refresh();
//=======================Sort==================================
	 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
	//=======================Add================================
  $scope.addMeters = function(){
  console.log("posted");
      $http.post('https://galwayparkingapitest.herokuapp.com/meters/',{'meterid': $scope.spots.meterid,'machineid': $scope.spots.machineid,'location': $scope.spots.location,'lat': $scope.spots.lat,'long': $scope.spots.long,}).success(function(response){
        //$scope.parking = response.users;
		 refresh();
		 window.alert("Record inserted");
      });
    };//addContact
	
	//=============================Remove==========================
	 $scope.remove = function(id) {
      $http.delete('https://galwayparkingapitest.herokuapp.com/meters/'+id).success(function () {
        //refresh();
		console.log("Deleted");
		 refresh();
		 window.alert("Record removed");
      });
    };
	//===========================Edit============================
   $scope.edit = function(id) {
	console.log(id + "Is id");
      $http.get('https://galwayparkingapitest.herokuapp.com/meters/' + id).success(function(response) {
        //var id = $routeParams.id;
       // $scope.contact = $filter('filter')($scope.parking, {_id: id})[0];

	   $scope.spots = response;

      });
    };
	
	//=====================Update==================================
	$scope.update = function() {
	console.log("Here");
	$http.put('https://galwayparkingapitest.herokuapp.com/meters/'+ $scope.spots._id ,$scope.spots).success(function(response){
    refresh();
	window.alert("Record Updated");
	  
	  })

	};
	
	//=======================================================
	$scope.deselect = function(){
        $scope.spots = '';
		refresh();
    }

 });//controller
  
   
  
