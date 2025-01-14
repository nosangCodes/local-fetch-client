interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  discountPercentage?: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}
