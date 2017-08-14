angular.module('angularInstagram', []);  

function mainController($scope, $http) {  

    $scope.page = 'dir_index';
    $scope.cmd_code_ = 'ls';
    

    $scope.cmd_submit = function(){
        
        $http.get('/exec/cmd', { params:  {code: $scope.cmd_code_} } )
            .success(
                function(response) {
                    $scope.cmd_result = response;
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };


    $scope.instid_submit = function(){
        
        $http.get('/exec/instid', { params:  {instid_username: $scope.instid_username} } )
            .success(
                function(response) {
                    $scope.instid_result = response;
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };


    $scope.instoken_submit = function(){
    
    $http.get('/exec/instoken', { params:  {client_id: $scope.instoken_client_id, client_secret: $scope.instoken_client_secret, redirect_uri: $scope.instoken_redirect_uri, code: $scope.instoken_code_ } } )
        .success(
            function(response) {
                $scope.instoken_result = response
            }
        )
        .error(
            function() {
                console.log('Error');
            }   
        );
    };


    $scope.instafollow_submit = function(){
        
        $http.get('/exec/instafollow', { params:  {username: $scope.instafollow_username, password: $scope.instafollow_password, tag: $scope.instafollow_tag } } )
            .success(
                function(response) {
                    $scope.instafollow_result = "Following people!";
                }
            )
            .error(
                function() {
                    console.log('Error');
                }   
            );
    };


    $scope.instaunfollow_submit = function(){
        
        $http.get('/exec/instaunfollow', { params:  {username: $scope.instaunfollow_username, password: $scope.instaunfollow_password } } )
            .success(
                function(response) {
                    $scope.instaunfollow_result = "Unfollowing people!";
                }
            )
            .error(
                function() {
                    $scope.instaunfollow_result = "Error!";
                    console.log('Error');
                }   
            );
    };

}