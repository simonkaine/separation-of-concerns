const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  //send a text and store the order

  static async createOrder({ quantity }) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity}`
    );

    //store the order
    const order = await Order.insert({ quantity });

    return order;
  }

  static async getAllOrders() {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'New Order received'
    );
    //store the order
    const order = await Order.getOrders();
    return order;
  }

  static async getOrdersById(id) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'New Order >>ID<< received'
    );
    //store the order
    const order = await Order.getOrderId(id);
    return order;
  }

  static async patchOrderByID(id, quantity) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'Updated order by ID'
    );
    const order = await Order.patchByID(id, quantity);
    console.log('order service', order);
    return order;
  }
};
