const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');


//INDEX
breads.get ('/', (req, res) => {
    res.render('Index', { 
        breads: Bread,
        title: 'Index Page',
    }
 );
});

// NEW
breads.get('/new', (req, res) => {
    res.render('New');
});

// Show
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        });
    } else {
        res.render('Error404');
    }
});

// CREATE
breads.post('/', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true';
    } else {
        req.body.hasGluten = 'false';
    }
    Bread.push(req.body);
    res.redirect('/breads');
});

module.exports = breads;
