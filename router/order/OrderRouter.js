import express from "express";
import OrderController from "../../controller/order/OrderController.js";
const OrderRouter = express.Router();

OrderRouter.get('/order', OrderController.getOrders)

export default OrderRouter;