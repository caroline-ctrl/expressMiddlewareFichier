// ce dont j'ai besoin
const express = require('express');
const path = require('path');

const route = express.Router();


route.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'formulaireNom.html'));
});

route.get('/users-image', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'formulaireImage.html'));
})


route.post('/user-create', (req, res) => {
    res.send(`
    <body>
    <h1>Votre nom est : ${req.body.name}</h1>
    <a href="/">Revenir a la page d'accueil</a>
    </body>`);
});

module.exports = route;