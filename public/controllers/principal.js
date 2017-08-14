angular.module('angularInstagram', []);  

function mainController($scope, $http) {  

    $scope.page = 'dir_particles';
    $scope.cmd_code_ = 'ls';
    $scope.instid_username = 'ricardojoserf';
    $scope.instoken_client_id = '7c3f205484bc4386a1063c18f7115d54';
    $scope.instoken_client_secret = 'b97900782ecd48c897ed77de6c370332';
    $scope.instoken_redirect_uri = 'http://none.com';
    //$scope.instafollow_username = 'manubetanc';
    $scope.instafollow_tag = 'followforfollow';
    //$scope.instaunfollow_username = 'manubetanc';


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
                    $scope.instafollow_result = "Finished!";
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
                    $scope.instaunfollow_result = "Finished!";
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