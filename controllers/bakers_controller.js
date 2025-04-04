const express = require('express');
const bakerRouter = express.Router();
const Baker = require('../models/baker');
const bakerSeedData = require('../models/baker_seed');

// Seed
bakerRouter.get('/data/seed', (req, res) =>  {
    Baker.insertMany(bakerSeedData)
    .then(() => {
        res.redirect('/breads');
    })
    .catch(err => {
        res.redirect('Error404');
    });
});

module.exports = bakerRouter;
