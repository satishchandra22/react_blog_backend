const express = require('express');
const cors = require('cors')
const app = express();
const data_home = require('./routes/home');
const data_bollywood = require('./routes/bollywood')
const data_technology = require('./routes/technology')
const data_hollywood = require('./routes/hollywood')
const data_fitness = require('./routes/fitness')
const data_food = require('./routes/food')

app.use(cors());
app.use(data_home);
app.use('/bollywood',data_bollywood);
app.use('/technology',data_technology);
app.use('/hollywood',data_hollywood);
app.use('/fitness',data_fitness);
app.use('/food',data_food);
app.listen(process.env.PORT || 8080,()=>console.log('server started'));
