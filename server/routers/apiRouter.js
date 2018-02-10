// EXPRESS
const express = require('express');
const router = express.Router();

// CONTROLLERS
const dbController = require('../controllers/dbController');
const amazonController = require('../controllers/amazonController');

router.post('/receive',
  dbController.save,
  (req, res) => res.status(200).send('Success')
)

// Handles POST requests with user input information
router.post('/api/go', 
  amazonController.getProductsHtmlLocal,
  dbController.save,
  (req, res) => {
    res.status(200).json(res.locals.products);
  }
);

// ALL UNDEFINED ROUTES - Intercept all requests to an endpoint /api/* that aren't explicitly defined above
router.all('*', (req, res, next) => {
   err = new Error('apiRouter.js - default catch all route - not found');
   err.status = 404;
   next(err);
});

module.exports = router;