'use strict';

// Node Modules
const express = require('express');
const debug = require('debug')('demaree-services:server');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Routes


dotenv.load();

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI);

const morganFormat = process.env.PRODUCTION ? 'common' : 'dev';

app.use(cors());
app.use(morgan(morganFormat));

app.get('/', (req, res) => {
  res.send('Test McTesterson');
});

app.listen(PORT, () => {
  debug(`Port up: ${PORT}`);
});
