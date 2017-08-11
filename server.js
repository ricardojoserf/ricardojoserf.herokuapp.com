var express     = require('express');  
var app         = express();  
var exec        = require('child_process').exec;
 

app.configure(function() {  
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev')); 
    app.use(express.bodyParser());              
    app.use(express.methodOverride());                  
});

app.get("/cmd", function (req, res) {  
    
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

app.get("/instid", function (req, res) {  
    
    var code = req.query['code'];
    var command = "python projects/instid/main.py " + code;
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

app.get('/page1', function(req, res) {  
    res.sendfile('./public/index.html');
});


app.get('/page2', function(req, res) {  
    res.sendfile('./public/instid.html');
});


app.get('*', function(req, res) {  
    res.sendfile('./public/index.html');
});


app.listen(8080, function() {  
    console.log('Visit... http://localhost:8080/');
});
