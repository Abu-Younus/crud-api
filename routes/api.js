import express from "express";
import * as ProductsController from "../app/controllers/ProductsController.js";

const router = express.Router();

router.post("/createProduct", ProductsController.createProduct)
router.get("/readProductById/:id", ProductsController.getProductById)
router.post("/updateProduct/:id", ProductsController.updateProduct)
router.get("/deleteProduct/:id", ProductsController.deleteProduct)

export default router