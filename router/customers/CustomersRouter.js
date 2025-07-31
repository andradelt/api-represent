import express from "express";
const CustomerRouter = express.Router();

CustomerRouter.get('/customer', (req, res) => res.status(200).json({ message: "Customer" }))

export default CustomerRouter;