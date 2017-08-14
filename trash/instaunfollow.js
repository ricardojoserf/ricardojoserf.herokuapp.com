angular.module('angularInstagramUnfollow', []);  

function instaunfollowController($scope, $http) {  

    // $scope.username = "rjruizfdez";
    // $scope.result = "not done";
        
    $scope.submit = function(){
        
        $http.get('/exec/instaunfollow', { params:  {username: $scope.username, password: $scope.password } } )
            .success(
                function(response) {
                    $scope.result = "Unfollowing people!";
                }
            )
            .error(
                function() {
                    $scope.result = "Error!";
                    console.log('Error');
                }   
            );
    };

}