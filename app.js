// ce dont j'ai besoin
const express = require('express');
const accueilRoute = require('./routes/accueil');
const formulaireRoute = require('./routes/formulaire');
const parser = require('body-parser');

const app = express();
app.use(parser.urlencoded({extended: true}));

app.use(accueilRoute);
app.use(formulaireRoute);

app.listen(3000);