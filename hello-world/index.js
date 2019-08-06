const express = require('express');
const endPoints = require('./endPoints');
const swaggerJsdoc = require('./swaggerDoc');

const app = express(express);

endPoints(app);
swaggerJsdoc(app);

app.use((err, req, res, next) => console.error('There are error', err));



app.listen(3000, () => console.log('App started'));


