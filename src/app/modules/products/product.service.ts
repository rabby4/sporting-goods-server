import QueryBuilder from '../../queryBuilder/QueryBuilder';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const { category, ...otherFilters } = query;
  const productQuery = new QueryBuilder(
    Product.find().sort({ createdAt: -1 }),
    otherFilters,
  )
    .filter()
    .sort()
    .fields()
    .search(['name']);

  if (category) {
    productQuery.modelQuery = productQuery.modelQuery.where({ category });
  }

  const result = await productQuery.modelQuery;
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
