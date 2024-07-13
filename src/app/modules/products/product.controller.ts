import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.json({
    success: true,
    message: 'Product created successfully',
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB(req.query);
    res.json({
      success: true,
      message: 'Successfully retrieve All Products',
      data: result,
    });
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);
  res.json({
    success: true,
    message: 'Successfully Retrieve A Product',
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductIntoDB(id, req.body);
  res.json({
    success: true,
    message: 'Successfully Update A Product',
    data: result,
  });
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);
  res.json({
    success: true,
    message: 'Successfully Delete A Product',
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
