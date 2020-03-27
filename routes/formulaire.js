// ce dont j'ai besoin
const express = require('express');
const path = require('path');
const fs = require('fs');

const route = express.Router();


route.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'formulaireNom.html'));
});

route.get('/users-fichier', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'formulaireFichier.html'));
});


route.post('/user-create', (req, res) => {
    res.send(`
    <link rel="stylesheet" href="/styles/main.css">
    <body>
    <h1>Votre nom est : ${req.body.name}</h1>
    <button type="submit"><a href="/">Revenir a la page d'accueil</a></button>
    </body>`);
});


route.post('/user-message', (req, res) => {
    const message = req.body.message;
    console.log(message);
    fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.redirect('/');
    })
})



module.exports = route;