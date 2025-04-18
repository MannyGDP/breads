//Dependencies
const express = require ('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();

const { PORT } = process.env;

// Configuration
const app = express();

//Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Asesome App about Breads! 02/07');
});

// Breads
const breadsController = require('./controllers/breads_controller');
app.use('/breads', breadsController);

// Bakers
const bakersController = require('./controllers/bakers_controller');
app.use('/bakers', bakersController);

// 404 Page
app.get('*', (req, res) => {
    res.render('Error404');
});

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});

// const { default: mongoose } = require('mongoose');