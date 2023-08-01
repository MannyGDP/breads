//Dependencies
const express = require ('express');

const mongoose = require('mongoose');
require('dotenv').config();

const { PORT } = process.env;

// Configuration
const app = express();

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Asesome App about Breads!');
});

// Breads start
const breadsController = require('./controllers/breads_controller');
    app.use('/breads', breadsController);

app.listen(PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
});
