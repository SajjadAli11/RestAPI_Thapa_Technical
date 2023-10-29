const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsTesting} = require('../controller/product');

router.route('/products').get(getAllProducts);
router.route('/productsTesting').get(getAllProductsTesting);

module.exports = router;