var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

//This will take the port in env otherwise the port 5000
var port = process.env.PORT || 5000;

//Send the nav by variable to the router
var nav = [{
    link: '/books',
    text: 'Book'
            }, {
    link: '/authors',
    text: 'Author'
            }];

//I send the nav onject to to bookRotuer and use it over there
var bookRouter = require('./src/routes/bookRoutes')(nav);

//Set up the public directory as static directory
//For this: 'use' will use first the directory added--middleware
app.use(express.static('public'));
//This is for set a variable views which is into ./src/views
app.set('views', './src/views');

//The engine for views
//Change to jade for different engine
app.set('view engine', 'ejs');

app.use('/books', bookRouter);

app.get('/', (function (req, res) {
    res.render('index', {
        title: "Hello from render",
        nav: [{
            link: '/books',
            text: 'Books'
        }, {
            link: '/authors',
            text: 'Authors'
        }]
    });
}));

app.get('/authors', function (req, res) {
    res.send('Hello authors');
});
app.listen(port, function (err) {
    console.log('Listening on port ' + port);
});