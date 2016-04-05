var dashboard = angular.module('dashboard', []); 

// factory
dashboard.factory('peopleFactory', function($http){
	var factory = {}; 
	factory.getUsers = function(callback){
		$http.get('/names').success(function(response){
			callback(response); 
		});
	}
	factory.addUser = function(data, callback){
		$http.get("/new/"+data.name).success(function(response){
			callback(response);
		}); 
	}
	factory.remove = function(data, callback){
		$http.get('/remove/'+data._id).success(function(response){
			callback(response);
		}); 
	}
	return factory; 
}); 
// controller
dashboard.controller('people', function($scope, peopleFactory){
	$scope.names = []; 
	peopleFactory.getUsers(function(data){
		$scope.names = data;
	});
	$scope.addUser = function(){
		peopleFactory.addUser($scope.newName, function(data){
			$scope.names = data; 
			$scope.newName = {}; 
		});
	}
	$scope.remove = function(friend){
		peopleFactory.remove(friend, function(response){
			$scope.names = response; 
		}); 
	}
}); 