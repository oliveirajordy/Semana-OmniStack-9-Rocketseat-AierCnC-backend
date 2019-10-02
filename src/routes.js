const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.get('/dashboard', DashboardController.show);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('tumbnail'), SpotController.store);

routes.post('/spots/:id/bookings', BookingController.store);

module.exports = routes;