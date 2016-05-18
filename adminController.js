var adminController = angular.module('adminController', []);

adminController.controller('adminLoginController', function($scope,$http,$window,$rootScope) {
    
    $scope.loginCheck = function(event){
        event.preventDefault();
        
        if(($scope.uname!=null) && ($scope.pwd!=null)){
        
        var a=$scope.uname.match(/\d+/g);
        var b=$scope.pwd.match(/\d+/g);
        if((a==null) && (b==null)){    
            var request = $http({
                method: "post",
                url: "php/loginCheck.php",
                data: {
                    uname:$scope.uname,
                    pwd:$scope.pwd,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'     }
            });
            request.success(function (data) {
                data=jQuery.trim(data);
                $rootScope.final="Distance is "+data;
                $rootScope.$broadcast('final', "Distance is "+data);
            });
            }    
        }
        else{
            alert("Please fill all the fields with strings");
        }
    }    
});