import express from "express";

const FactoriesRouter = express.Router();

FactoriesRouter.get("/factories", (req, res) => res.status(200).json({ message: "Factories" }))

export default FactoriesRouter;