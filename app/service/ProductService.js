import productsModel from "../model/productsModel.js";

// Create a product
export const createProductService = async (req) => {
    try {
        let { title, short_des, price, discount, stock, star, remark } = req.body;

        // Validation to check if all fields are provided
        if (!title || !short_des || !price || !discount || !stock || !star || !remark) {
            return { status: "error", message: "All fields are required!" };
        }

        // Check if the product with the same title already exists
        const existingProduct = await productsModel.findOne({ title });
        if (existingProduct) {
            return { status: "error", message: "Title is already taken!" };
        }

        // Create the new product
        let data = await productsModel.create(req.body);
        return { status: "success", message: "Product created successfully.", data: data };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Read (get) a single product by ID
export const getProductByIdService = async (req) => {
    try {
        const { id } = req.params;

        const product = await productsModel.findById(id);
        if (!product) {
            return { status: "error", message: "Product not found!" };
        }

        return { status: "success", data: product };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Update a product by ID
export const updatedProductService = async (req) => {
    try {
        const { id } = req.params;

        // Check if the product exists
        const product = await productsModel.findById(id);
        if (!product) {
            return { status: "error", message: "Product not found!" };
        }

        // Update the product with new data
        const updatedProduct = await productsModel.findByIdAndUpdate(id, req.body, { new: true });

        return { status: "success", message: "Product updated successfully.", data: updatedProduct };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};

// Delete a product by ID
export const deleteProductService = async (req) => {
    try {
        const { id } = req.params;

        // Check if the product exists
        const product = await productsModel.findById(id);
        if (!product) {
            return { status: "error", message: "Product not found!" };
        }

        // Delete the product
        await productsModel.findByIdAndDelete(id);

        return { status: "success", message: "Product deleted successfully." };
    } catch (error) {
        return { status: "error", error: error.toString() };
    }
};
