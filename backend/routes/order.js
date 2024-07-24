const express=require('express');
const { createOrder } = require('../controllers/orderContrroller');
const router=express.Router();

router.route('/order').post(createOrder);

module.exports=router;