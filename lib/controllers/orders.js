const { Router } = require('express');
const Order = require('../models/Order');
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
      console.log('controller working', order);
      res.send(order);
    } catch (err) {
      next(err);
    }
  });

//   .get('/:id', async (req, res, next) => {
//     try {
//       const order = await OrderService.getAllOrders(req.params.id);
//       res.send(order);
//     } catch (err) {
//       next(err);
//     }
//   });
