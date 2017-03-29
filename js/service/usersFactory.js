angular.module("app").factory("usersFactory", function(){
    var users = [
        {firstName: "Estelle", lastName: "Roussette", email:"hksgdjhs@djs.fr" },
        {firstName: "Emma", lastName: "BenChabry", email:"fdjskfnkl@djs.fr" },
        {firstName: "Clemence", lastName: "Mosquita", email:"dshjdkbn@djs.fr" },
        {firstName: "Jean", lastName: "Pierre", email:"jkescnlz@djs.fr" }
    ];

    var getUsers = function(){
        return users;
    };

    var addUsers = function(newUser){
        users.push({firstName:newUser.firstName, lastName:newUser.lastName, email:newUser.email});
    };

    return {
        getUsers : getUsers,
        addUsers : addUsers
    }
});