// ce dont j'ai besoin
const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    console.log('accueil');
    res.redirect('/users');
});

module.exports = route;