import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

interface FeaturedDealsProps {
  title?: string;
  products?: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            {product.discount}% OFF
          </Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600">
            NEW
          </Badge>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < product.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Thêm Vào Giỏ
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedDeals = ({
  title = "Ưu Đãi Nổi Bật",
  products = defaultProducts,
}: FeaturedDealsProps) => {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <Button variant="outline" asChild>
            <a href="/products">Xem Tất Cả</a>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default mock data
const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Loa Bluetooth Không Dây",
    price: 1799000,
    originalPrice: 2999000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    discount: 40,
    isNew: false,
  },
  {
    id: "2",
    name: "Tivi Thông Minh 4K 55 inch",
    price: 11990000,
    originalPrice: 16990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    discount: 29,
    isNew: false,
  },
  {
    id: "3",
    name: "Quạt Đứng Điều Khiển Từ Xa",
    price: 1990000,
    originalPrice: 2690000,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    discount: 26,
    isNew: true,
  },
  {
    id: "4",
    name: "Nồi Cơm Điện Tử",
    price: 1390000,
    originalPrice: 1890000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    discount: 26,
    isNew: false,
  },
  {
    id: "5",
    name: "Máy Lọc Không Khí Thông Minh",
    price: 3990000,
    originalPrice: 5990000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    discount: 33,
    isNew: true,
  },
  {
    id: "6",
    name: "Máy Giặt Cửa Trước 9kg",
    price: 7990000,
    originalPrice: 10990000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80",
    discount: 27,
    isNew: false,
  },
  {
    id: "7",
    name: "Tủ Lạnh Inverter 250L",
    price: 8990000,
    originalPrice: 11990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80",
    discount: 25,
    isNew: false,
  },
  {
    id: "8",
    name: "Máy Pha Cà Phê Tự Động",
    price: 2990000,
    originalPrice: 3990000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80",
    discount: 25,
    isNew: true,
  },
];

export default FeaturedDeals;
