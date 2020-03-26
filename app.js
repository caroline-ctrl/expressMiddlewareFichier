// ce dont j'ai besoin
const express = require('express');
const accueilRoute = require('./routes/accueil');
const formulaireRoute = require('./routes/formulaire');
const parser = require('body-parser');
const path = require('path');

const app = express();

app.use(parser.urlencoded({extended: true}));
// pour le css : aller chercher dans le dossier public
app.use(express.static(path.join(__dirname, 'public')));

app.use(accueilRoute);
app.use(formulaireRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);