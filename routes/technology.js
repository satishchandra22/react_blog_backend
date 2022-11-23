const express = require('express');
const data = require('../controllers/technology');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.technologyData);

module.exports = dataRouter ; 