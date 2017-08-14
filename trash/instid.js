angular.module('angularInstagram', []);  

function instidController($scope, $http) {  

    // $scope.code_ = "ricardojoserf";
        
    $scope.submit = function(){
        
        $http.get('/exec/instid', { params:  {code: $scope.code_} } )
            .success(
                function(response) {
                    $scope.result = response;
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };

}