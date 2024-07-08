import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import mongoose, { Mongoose } from 'mongoose';

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.json({
    success: true,
    message: 'Product created successfully',
    data: result,
  });
};

const getAllProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductFromDB();
  res.json({
    success: true,
    message: 'Successfully retrieve All Products',
    data: result,
  });
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);
  res.json({
    success: true,
    message: 'Successfully Retrieve A Products',
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductIntoDB(id, req.body);
  res.json({
    success: true,
    message: 'Successfully Update A Products',
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
};
