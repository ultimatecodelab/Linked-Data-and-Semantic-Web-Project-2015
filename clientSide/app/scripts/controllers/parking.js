'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:ParkingCtrl
 * @description
 * # ParkingCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('ParkingCtrl', function ($scope, $http) {

    var refresh = function() {
      
		var meter_data = $http.get('https://galwayparkingapitest.herokuapp.com/parking/');
		meter_data.then(function (result) {
        $scope.parking = result.data;
      
      });
    }; 
    refresh();
//====================Sort====================================
	 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
//=======================================================
   
    $scope.addParking = function(){
      $http.post('https://galwayparkingapitest.herokuapp.com/parking/',{'parkingid': $scope.spots.parkingid,'name': $scope.spots.name,'no_spaces': $scope.spots.no_spaces,'latitude': $scope.spots.latitude,
        'longitude': $scope.spots.longitude,'eastitm': $scope.spots.eastitm,'northitm': $scope.spots.northitm,'eastig': $scope.spots.eastig,'northig': $scope.spots.northig,'types': $scope.spots.types}).success(function(response){
		refresh();
		window.alert("Record Inserted");
      });
    };//addContact
	
//=====================================================

    $scope.remove = function(id) {
      $http.delete('https://galwayparkingapitest.herokuapp.com/parking/'+id).success(function () {
        refresh();
		window.alert("Record deleted");
      });
    };
//===========================================
    $scope.edit = function(id) {
	console.log(id + "Is id");
      $http.get('https://galwayparkingapitest.herokuapp.com/parking/' + id).success(function(response) {
        //var id = $routeParams.id;
       // $scope.contact = $filter('filter')($scope.parking, {_id: id})[0];

	   $scope.spots = response;

      });
    };
	$scope.update = function() {
	console.log("Here");
		$http.put('https://galwayparkingapitest.herokuapp.com/parking/'+ $scope.spots._id ,$scope.spots).success(function(response){
		refresh();
		window.alert("Record Updated");
	  });
	};
	//=======================================================================
	 $scope.deselect = function(){
         $scope.spots = '';
		  refresh();
    }

  });
