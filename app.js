var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

//This will take the port in env otherwise the port 5000
var port = process.env.PORT || 5000;

//Set up the public directory as static directory
//For this: 'use' will use first the directory added--middleware
app.use(express.static('public'));
//This is for seta variable views which is into ./src/views
app.set('views','./src/views');

app.engine('.hbs',handlebars({extname: '.hbs'}));//this only for handlebars

//The engine for views
//Change to jade for different engine
app.set('view engine','.hbs');

app.get('/', function (req, res) {
    res.render('index',{list:['1','2','3']});
});

app.get('/book', function (req, res) {
    res.send('Hello books');
});
app.listen(port, function (err) {
    console.log('Listening on port ' + port);
});