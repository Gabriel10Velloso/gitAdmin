const express = require('express');
var secure = require('express-force-https');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(secure)

// Setting http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


app.use(express.static(path.join(__dirname, '../dist')));

app.all('*', function(req, res) {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});


app.use(function(err, req, res, next) {
    if (err instanceof TypeError) {
        return res.status(400).json({ erro: err.message });
    }
    res.status(err.status || 500).json({ erro: err.message });
});

app.handleValidationErrors = function(errObj, res) {
    res.status(400).json(errObj);
};

module.exports = app;