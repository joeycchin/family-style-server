// Commented out to avoid linting error
var eventsHandler = require('../handlers/events.handler.js');
var usersController = require('../controllers/users.controller.js');
var eventsController = require('../controllers/events.controller.js');
var yelpController = require('../controllers/yelp.controller.js');

module.exports = function routesHandler(app) {
  // app.get('/users/:userId/events', usersController.getEvents);
  app.get('/users/:userId', usersController.getOne);
  app.post('/users/', usersController.create);

  app.get('/events', eventsHandler.getAll);
  app.get('/events/:eventId', eventsHandler.getOne);
  app.post('/events', eventsController.create);
  app.put('/events/:eventId', eventsController.update);

  app.get('/api/yelp', yelpController.search);
};
