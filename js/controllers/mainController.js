angular.module("app").controller("mainController", function($scope, usersFactory){
    $scope.users = usersFactory.getUsers();

    $scope.addUsers = function(newUser){
        usersFactory.addUsers(newUser);
        $scope.newUser.firstName = "";
        $scope.newUser.lastName = "";
        $scope.newUser.email = "";
    }
});
