const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

//Dashboard route
router.get('/', dashboardController.index);

//Price route
router.get('/price', dashboardController.price);

// exchange route
router.get('/exchange', dashboardController.exchange);

module.exports = router;
