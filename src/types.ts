export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export type BasketItem = {
  id: number;
  productId: number;
  quantity: number;
  product: Product;
};
