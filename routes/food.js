const express = require('express');
const data = require('../controllers/food');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.foodData);

module.exports = dataRouter ; 