angular.module('angularInstagramFollow', []);  

function instafollowController($scope, $http) {  
       
    $scope.submit = function(){
        
        $http.get('/exec/instoken', { params:  {client_id: $scope.client_id, client_secret: $scope.client_secret, redirect_uri: $scope.redirect_uri, code: $scope.code_ } } )
            .success(
                function(response) {
                    $scope.result = response
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };

}