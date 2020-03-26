// ce dont j'ai besoin
const express = require('express');
const route = express.Router();

route.get('/users', (req, res, next) => {
    res.send(`
        <form action="/user-create" method="POST">
        <input type="text" name="name" placeholder="Votre nom">
        <button type="submit">Envoyer</button>
        </form>`);
});


route.post('/user-create', (req, res, next) => {
    res.send(req.body.name);
});

module.exports = route;