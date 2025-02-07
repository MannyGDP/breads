const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');

//INDEX
breads.get ('/', (req, res) => {
    Bread.find()
    .then(foundBreads => {
        console.log(foundBreads);
        res.render('Index', { 
            breads: foundBreads,
            title: 'Index Page MD',
        });
    })
    .catch(error => {
        console.log(error);
        res.render('Error404');
    });
});

// NEW
breads.get('/new', (req, res) => {
    res.render('New');
});

// Show
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('Show', { 
            bread: foundBread,
    });

})
.catch(err => {
        res.render('Error404');
    });
});


    //EDIT
    breads.get('/:id/edit', (req, res) => {
        Bread.findById(req.params.id)
            .then(foundBread => {
                if (!foundBread) {
                    return res.render('Error404');
                }
                res.render('Edit', { bread: foundBread });
            })
            .catch(error => {
                console.log(error);
                res.render('Error404');
            });
    });
    // CREATE
breads.post('/', (req, res) => {
    if (!req.body.image){
        req.body.image = undefined;
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true';
    } else {
        req.body.hasGluten = 'false';
    }
    Bread.create(req.body);
    res.redirect('/breads');
});


breads.put('/:arrayIndex', (req, res) => {
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true;
    } else {
        req.body.hasGluten = false;
    }
    Bread[req.params.arrayIndex] = req.body;
    res.redirect(`/breads/${req.params.arrayIndex}`);
});
//DESTROY
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1);
    res.status(303).redirect('/breads');
});

module.exports = breads;
