
const express = require('express');
const routes = require('./routes.js')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // a aplicação ouve a porta 3333

