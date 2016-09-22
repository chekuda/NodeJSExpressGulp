var express = require('express');

var app = express();

var port = 5000;

//Set up the public directory as static directory
//For this: 'use' will use first the directory added--middleware
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/book', function (req, res) {
    res.send('Hello books');
});
app.listen(port, function (err) {
    console.log('Listening on port ' + port);
});