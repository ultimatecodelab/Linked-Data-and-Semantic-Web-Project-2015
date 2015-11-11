'use strict';

/**
 * @ngdoc function
 * @name clientSideApp.controller:BluebadgeCtrl
 * @description
 * # BluebadgeCtrl
 * Controller of the clientSideApp
 */
angular.module('clientSideApp')
  .controller('BluebadgeCtrl', function ($scope,$http) {
  
    var meter_data = $http.get('http://localhost:3000/bluebadge');
    meter_data.then(function (result){

      $scope.bluebadge = result.data;
    });
	

		//=======================Add================================
  $scope.addMeters = function(){
  console.log("posted");
      $http.post('http://localhost:3000/bluebadge',{'badgeid': $scope.spots.badgeid,'location': $scope.spots.location,'no_spaces': $scope.spots.no_spaces,
	  'description': $scope.spots.description,'street': $scope.spots.street,'latitude': $scope.spots.latitude,
	  'longitude': $scope.spots.longitude,'eastitm': $scope.spots.eastitm,'northitm': $scope.spots.northitm,'eastig': $scope.spots.eastig,
	  'northig': $scope.spots.northig}).success(function(response){
        //$scope.parking = response.users;
	
      });
    };//addContact
	
	//=============================Remove==========================
	 $scope.remove = function(id) {
      $http.delete('http://localhost:3000/bluebadge/'+id).success(function () {
        //refresh();
		console.log("Deleted");
      });
    };
	//===========================Edit============================
   $scope.edit = function(id) {
	console.log(id + "Is id");
      $http.get('http://localhost:3000/bluebadge/' + id).success(function(response) {
        //var id = $routeParams.id;
       // $scope.contact = $filter('filter')($scope.parking, {_id: id})[0];

	   $scope.spots = response;

      });
    };
	
	//=====================Update==================================
	$scope.update = function() {
	console.log("Here");
	$http.put('http://localhost:3000/bluebadge/'+ $scope.spots._id ,$scope.spots).success(function(response){
    refresh();
	  
	  })

	};
	
	//=======================================================
	
	
	
  });
