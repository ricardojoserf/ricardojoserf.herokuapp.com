angular.module('angularInstagramFollow', []);  

function instafollowController($scope, $http) {  

    // $scope.username = "rjruizfdez";
    // $scope.result = "not done";
        
    $scope.submit = function(){
        
        $http.get('/exec/instafollow', { params:  {username: $scope.username, password: $scope.password, tag: $scope.tag } } )
            .success(
                function(response) {
                    $scope.result = "Following people!";
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };

}