const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);  
routes.post('/ongs', OngController.create);

routes.get('/profile' , ProfileController.index)

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
 routes.delete('/incidents/:id',IncidentController.delete);
  module.exports = routes; //método para EXPORTAR uma variável de dentro de um arquivo, não um pacote
  