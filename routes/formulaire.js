// ce dont j'ai besoin
const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'formulaire.html'));
});


route.post('/user-create', (req, res, next) => {
    res.send(req.body.name);
});

module.exports = route;