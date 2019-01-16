var express     = require('express');  
var app         = express();  
var exec        = require('child_process').exec;
 

app.configure(function() {  
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev')); 
    app.use(express.bodyParser());              
    app.use(express.methodOverride());                  
});


app.get("/exec/cmd", function (req, res) {  
    
    var code = req.query['code'];
    
    var command = code;
    
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
        }
		else{
			res.header("Content-Type", "application/json");
			res.end(stderr);
		}
    });

});


app.get("/exec/instid", function (req, res) {  
    
    var instid_username = req.query['instid_username'];
    
    var command = "python projects/instagram-user-id/main.py " + instid_username;
    
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
        }
        else{
            res.header("Content-Type", "application/json");
            res.end("Error obteniendo el ID");
        }
    });

});


app.get("/exec/instafollow", function (req, res) {  
    
    var username = req.query['username'];
    var password = req.query['password'];
    var tag = req.query['tag'];

    var command = "python projects/instagram-followers-bot/main.py -u " + username + " -p " + password + " -o follow-tag -t " + tag;
    
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
        }
        else{
            res.header("Content-Type", "application/json");
            res.end("Error obteniendo el token");
        }
    });

});


app.get("/exec/instaunfollow", function (req, res) {  
    
    var username = req.query['username'];
    var password = req.query['password'];

    var command = "python projects/instagram-followers-bot/main.py -u " + username + " -p " + password + " -o super-unfollow";
    
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
        }
        else{
            res.header("Content-Type", "application/json");
            res.end("Error al hacer follow");
        }
    });

});


app.get("/exec/instoken", function (req, res) {  
    
    var client_id = req.query['client_id'];
    var client_secret = req.query['client_secret'];
    var redirect_uri = req.query['redirect_uri'];
    var code_ = req.query['code'];
    

    var command = "python projects/instoken/main.py -i " + client_id + " -s " + client_secret + " -r " + redirect_uri + " -c " + code_ ;
    
    exec(command, function (error, stdout, stderr) {
        if (error === null) {
            res.header("Content-Type", "application/json");
            res.end(stdout);
        }
        else{
            res.header("Content-Type", "application/json");
            res.end("Error al hacer unfollow");
        }
    });

});


app.get('html/*', function(req, res) {  
    res.sendfile('./public/html/dir_particles.html');
});

app.get('*', function(req, res) {  
    res.sendfile('./public/html/index.html');
});


app.listen(process.env.PORT || 8080, function() {  
    console.log('Visit... http://localhost:8080');
});
