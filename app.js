const express = require('express');

const app = express();

app.get('/',function (req, res) {
    res.send('Thank for this opportunity')

})

app.listen('/saroj', function (req, res) {
    res.send('Running')
})