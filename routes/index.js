var express = require('express');
var router = express.Router();
var controller = require('../controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Connect controller methods to their corresponding routes
router.get('/products', controller.products.get);

router.get('/products/:id', controller.products.getProduct);

router.get('/products/:product_id/styles',
    controller.products.getProductStylesAndPhotos);


router.get('/products/:product_id/related',
    controller.products.getProductRelated);

module.exports = router;
