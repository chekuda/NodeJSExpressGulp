var express = require('express');

//Routing my page
var bookRouter = express.Router();

var router = function (nav) {

    var books = [
        {
            title: 'War',
            genre: 'Historical',
            author: 'Jose Luis',
            read: false
        },
        {
            title: 'Peace',
            genre: 'Life',
            author: 'Mari Angeles',
            read: false
        },
        {
            title: 'Life',
            genre: 'Dead',
            author: 'Rafa',
            read: false
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('booklist', {
                title: "Hello from render books",
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;//This receive the parametre by URL and display where I want to display
            res.render('bookview', {
                title: "Hello from render books",
                nav: nav,
                books: books[id]
            });
        });
    return bookRouter;//need to rerturn the object
};



module.exports = router;