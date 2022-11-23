const express = require('express');
const data = require('../controllers/home');


const dataRouter = express.Router();
dataRouter.route('/')
.get(data.homedata);

module.exports = dataRouter ; 


