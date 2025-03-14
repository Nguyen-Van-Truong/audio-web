import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Heart, ShoppingCart, Trash2, ShoppingBag } from "lucide-react";
import ProductCard from "../products/ProductCard";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

const WishlistPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Loa Bluetooth Không Dây",
      price: 1799000,
      originalPrice: 2999000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
      discount: 40,
      isNew: false,
    },
    {
      id: "5",
      name: "Máy Lọc Không Khí Thông Minh",
      price: 3990000,
      originalPrice: 5990000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
      discount: 33,
      isNew: true,
    },
    {
      id: "8",
      name: "Máy Pha Cà Phê Tự Động",
      price: 2990000,
      originalPrice: 3990000,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80",
      discount: 25,
      isNew: true,
    },
    {
      id: "10",
      name: "Tivi OLED 65 inch",
      price: 19990000,
      originalPrice: 24990000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80",
      discount: 20,
      isNew: true,
    },
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (id: string) => {
    console.log(`Added item ${id} to cart`);
    // In a real app, this would add the item to the cart
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 h-full md:relative md:block md:w-[280px]">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="container px-4 py-8 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Danh Sách Yêu Thích</h1>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">
                {wishlistItems.length} sản phẩm
              </span>
            </div>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="relative">
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    rating={item.rating}
                    image={item.image}
                    discount={item.discount}
                    isNew={item.isNew}
                    onAddToCart={() => addToCart(item.id)}
                    onAddToWishlist={() => removeFromWishlist(item.id)}
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full p-0"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
                <Heart className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Danh sách yêu thích trống
              </h2>
              <p className="text-gray-600 mb-8">
                Bạn chưa có sản phẩm nào trong danh sách yêu thích.
              </p>
              <Button size="lg" asChild>
                <a href="/products">Khám Phá Sản Phẩm</a>
              </Button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default WishlistPage;
