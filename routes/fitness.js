const express = require('express');
const data = require('../controllers/fitness');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.fitnessData);

module.exports = dataRouter ; 