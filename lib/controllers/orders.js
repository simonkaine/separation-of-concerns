const { Router } = require('express');
// const { get } = require('superagent');
// const Order = require('../models/Order');
const OrderService = require('../services/OrderService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.createOrder(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const order = await OrderService.getAllOrders();
      res.send(order);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const orderID = await OrderService.getOrdersById(req.params.id);
      console.log('CONTROLLER>>>>>', orderID);
      res.send(orderID);
    } catch (err) {
      next(err);
    }
  });
