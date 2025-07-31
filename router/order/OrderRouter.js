import express from "express";
const OrderRouter = express.Router();

OrderRouter.get('/order', (req, res) => res.status(200).json({ message: "Order" }))

export default OrderRouter;