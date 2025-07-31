import express from "express";
import CustomerRouter from "./router/customers/CustomersRouter.js";
import FactoriesRouter from "./router/factories/FactoriesRouter.js";
import OrderRouter from "./router/order/OrderRouter.js";
const app = express()

app.use("/represent", CustomerRouter)
app.use("/represent", FactoriesRouter)
app.use("/represent", OrderRouter)
export default app;