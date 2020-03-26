// ce dont j'ai besoin
const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/', (req, res, next) => {
    console.log('accueil');
    res.sendFile(path.join(__dirname, '../', 'views', 'accueil.html'));
});

module.exports = route;