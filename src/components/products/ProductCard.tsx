import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  image?: string;
  discount?: number;
  isNew?: boolean;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Loa Bluetooth Không Dây",
  price = 2990000,
  originalPrice = 3990000,
  rating = 4.5,
  image = "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
  discount = 20,
  isNew = false,
  onAddToCart = () => console.log("Added to cart"),
  onAddToWishlist = () => console.log("Added to wishlist"),
}: ProductCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card className="w-[280px] h-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="p-0 relative">
        <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {discount}% OFF
            </Badge>
          )}
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
              NEW
            </Badge>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
                  onClick={onAddToWishlist}
                >
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Thêm vào yêu thích</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 mb-1">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-sm text-gray-500">{rating}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={onAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Thêm Vào Giỏ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
