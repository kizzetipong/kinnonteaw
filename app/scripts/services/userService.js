"use strict"
angular.module('kinnonteawApp').service("UserService", ["$q", "$http", "ENV", function ($q, $http, ENV) {
    return {
    	CreateAndUpdateWithSocial:function(response) {
    		var defer = $q.defer();
		    var createAndCheckLofinSocialUrl = ENV.apiEndpoint + '/user/CreateAndUpdateWithSocial';
        
	        $http.post(createAndCheckLofinSocialUrl, response)
	        .success(function (data, status) {
	        	defer.resolve(data);
	        })
	        .error(function (error, status) {
	         	defer.reject(error);
	        });

    		return defer.promise;
    	},
    	LoginWithUsernameAndPassword: function(username, password) {
    		var defer = $q.defer();
    		var url = ENV.apiEndpoint + "/users/FindByUsernameAndPassword/" + username + "/" + password;
      		$http.get(url)
          	.success(function (data, status) {
          		defer.resolve(data);
          	})
          	.error(function(error, status) {
          		defer.reject(error);
          	});
          	return defer.promise;
    	},
    	CreateUserEmailActivate: function(Username, Password, Email, UserObject) {
        console.log('sinn up ');
    		var defer = $q.defer();
    		var createUserURL = ENV.apiEndpoint + "/users/CreateAppUser/" + Username + "/" + Password + "/"+ Email;
    		$http.post(createUserURL, UserObject)
        	.success(function(data, status) {
        		defer.resolve(data);
        	})
        	.error(function(error, reject) {
        		defer.resolve(error);
        	});
    		return defer.promise;
    	},
    };
}]);