const express = require('express');
const data = require('../controllers/hollywood');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.hollywoodData);

module.exports = dataRouter ; 