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
   var refresh = function() {
		var meter_data = $http.get('https://galwayparkingapitest.herokuapp.com/bluebadge/');
		meter_data.then(function (result){

			$scope.bluebadge = result.data;
		});
	};
	refresh();
	//=======================Sort==================================
	 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }

		//=======================Add================================
	$scope.addBluebadge = function(){
	console.log("posted");
      $http.post('https://galwayparkingapitest.herokuapp.com/bluebadge/',{'badgeid': $scope.spots.badgeid,'location': $scope.spots.location,'no_spaces': $scope.spots.no_spaces,
	  'description': $scope.spots.description,'street': $scope.spots.street,'latitude': $scope.spots.latitude,
	  'longitude': $scope.spots.longitude,'eastitm': $scope.spots.eastitm,'northitm': $scope.spots.northitm,'eastig': $scope.spots.eastig,
	  'northig': $scope.spots.northig}).success(function(response){
       refresh();
	   if($scope.spots != " ") {
		window.alert("Record Added");
	   }
	   else{
	   window.alert(" Cannot add the empty record");
	   }
	
      });
    };//addContact
	
	//=============================Remove==========================
	 $scope.remove = function(id) {
      $http.delete('https://galwayparkingapitest.herokuapp.com/bluebadge/'+id).success(function () {
        //refresh();
		console.log("Deleted");
		refresh();
		window.alert("Record Deleted");
      });
    };
	//===========================Edit============================
   $scope.edit = function(id) {
	console.log(id + "Is id");
      $http.get('https://galwayparkingapitest.herokuapp.com/bluebadge/' + id).success(function(response) {
        //var id = $routeParams.id;
       // $scope.contact = $filter('filter')($scope.parking, {_id: id})[0];

	   $scope.spots = response;

      });
    };
	
	//=====================Update==================================
	$scope.update = function() {
	console.log("Here");
	$http.put('https://galwayparkingapitest.herokuapp.com/bluebadge/'+ $scope.spots._id ,$scope.spots).success(function(response){
    refresh();
	window.alert("Record Updated");
	  
	  })

	};
	
	//=======================================================
	$scope.deselect = function(){
        $scope.spots = '';
		refresh();
    }
	
	
  });
