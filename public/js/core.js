var app = angular.module('MainApp', []);

app.factory('mySharedService', ['$rootScope', function($rootScope) {
    var mySharedService = {};

    mySharedService.message = '';

    mySharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    mySharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return mySharedService;
}]);

app.controller('UserC', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {
    $http.get('/api/users/')
        .success(function(data) {
            $scope.users = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.getUserById = function(id) {
        for (let i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].id === id) {
                return $scope.users[i];
            }
        }
    }

    $scope.updateProfile = function() {
        $http.post('/api/users/', $scope.user)
            .success(function(data) {
                $scope.user = {}; // clear the form so our user is ready to enter another
                $scope.users = data;
                console.log(data);
                location.href = "/users/me"
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteUser = function() {
        $http.delete('/api/users/')
            .success(function(data) {
                $scope.users = data;
                console.log(data);
                alert("Account deleted !");
                location.href = '/login';
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.sendId = function(msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function() {
        localStorage.removeItem('Id');
        $scope.message = mySharedService.message;
        localStorage.setItem('Id', $scope.message);
    });
}]);

app.controller('UserCO', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {

    $http.get('/api/users/' + localStorage.getItem('Id'))
        .success(function(data) {
            $scope.user = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}]);

app.controller('GroupC', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {

    $http.get('/api/groups/')
        .success(function(data) {
            $scope.groups = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createGroup = function() {
        $http.post('/api/groups', $scope.group)
            .success(function(data) {
                $scope.group = {}; // clear the form so our user is ready to enter another
                $scope.groups = data;
                console.log(data);
                location.href = '/groups';
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.sendId = function(msg) {
        mySharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function() {
        localStorage.removeItem('Id');
        $scope.message = mySharedService.message;
        localStorage.setItem('Id', $scope.message);
    });

}]);


app.controller('GroupCO', ['$scope', '$http', 'mySharedService', function($scope, $http, mySharedService) {

    $http.get('/api/groups/' + localStorage.getItem('Id'))
        .success(function(data) {
            $scope.group = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.deleteGroup = function() {
        $http.delete('/api/groups/' + localStorage.getItem('Id'))
            .success(function(data) {
                $scope.groups = data;
                console.log(data);
                location.href = '/groups';
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.updateGroup = function() {
        $http.put('/api/groups/' + localStorage.getItem('Id'), $scope.group)
            .success(function(data) {
                $scope.group = {}; // clear the form so our user is ready to enter another
                $scope.groups = data;
                console.log(data);
                location.href = "/groups/" + localStorage.getItem('Id');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.addComment = function() {
        $http.put('/api/groups/' + localStorage.getItem('Id'), $scope.group)
            .success(function(data) {
                $scope.group = {}; // clear the form so our user is ready to enter another
                $scope.groups = data;
                console.log(data);
                location.href = "/groups/" + localStorage.getItem('Id');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }


}]);