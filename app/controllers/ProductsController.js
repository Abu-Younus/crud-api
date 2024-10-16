import { createProductService, deleteProductService, getProductByIdService, updatedProductService } from "../service/ProductService.js";

//create product
export const createProduct = async (req, res) => {
    let result = await createProductService(req)
    return res.json(result);
}

//get product by id
export const getProductById = async (req, res) => {
    let result = await getProductByIdService(req)
    return res.json(result);
}

//update product
export const updateProduct = async (req, res) => {
    let result = await updatedProductService(req)
    return res.json(result);
}

//delete product
export const deleteProduct = async (req, res) => {
    let result = await deleteProductService(req)
    return res.json(result);
}