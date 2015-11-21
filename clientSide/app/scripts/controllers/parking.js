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
      
	  var meter_data = $http.get('http://localhost:3000/parking');
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
      $http.post('http://localhost:3000/parking',{'parkingid': $scope.spots.parkingid,'name': $scope.spots.name,'no_spaces': $scope.spots.no_spaces,'latitude': $scope.spots.latitude,
        'longitude': $scope.spots.longitude,'eastitm': $scope.spots.eastitm,'northitm': $scope.spots.northitm,'eastig': $scope.spots.eastig,'northig': $scope.spots.northig,'types': $scope.spots.types}).success(function(response){
		refresh();
      });
    };//addContact
	
//=====================================================

    $scope.remove = function(id) {
      $http.delete('http://localhost:3000/parking/'+id).success(function () {
        refresh();
      });
    };
//===========================================
    $scope.edit = function(id) {
	console.log(id + "Is id");
      $http.get('http://localhost:3000/parking/' + id).success(function(response) {
        //var id = $routeParams.id;
       // $scope.contact = $filter('filter')($scope.parking, {_id: id})[0];

	   $scope.spots = response;

      });
    };
	$scope.update = function() {
	console.log("Here");
		$http.put('http://localhost:3000/parking/'+ $scope.spots._id ,$scope.spots).success(function(response){
		refresh();
	  });

	};
	//=======================================================================
	 $scope.deselect = function(){
        //$scope.parking= "";
    }

  });
