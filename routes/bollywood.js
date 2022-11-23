const express = require('express');
const data = require('../controllers/bollywood');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.bollywoodData);

module.exports = dataRouter ; 