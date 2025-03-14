import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react";
import { Separator } from "../ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Loa Bluetooth Không Dây",
      price: 1799000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    },
    {
      id: "2",
      name: "Tivi Thông Minh 4K 55 inch",
      price: 11990000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    },
    {
      id: "3",
      name: "Quạt Đứng Điều Khiển Từ Xa",
      price: 1990000,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=400&q=80",
    },
  ]);
  const [promoCode, setPromoCode] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 2000000 ? 0 : 50000;
  const discount = 0; // Would be calculated based on promo code
  const total = subtotal + shipping - discount;

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
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
          <h1 className="text-3xl font-bold mb-6">Giỏ Hàng</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">
                                  {formatPrice(item.price)}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center border rounded-md">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="px-3 py-1 border-r"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 py-1">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="px-3 py-1 border-l"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="font-medium text-red-600 hover:text-red-500 flex items-center"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Xóa
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Tóm Tắt Đơn Hàng
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tạm tính</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phí vận chuyển</span>
                      <span>
                        {shipping === 0 ? "Miễn phí" : formatPrice(shipping)}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Giảm giá</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Tổng cộng</span>
                      <span>{formatPrice(total)}</span>
                    </div>

                    <div className="pt-4">
                      <label
                        htmlFor="promo"
                        className="block text-sm font-medium mb-2"
                      >
                        Mã giảm giá
                      </label>
                      <div className="flex space-x-2">
                        <Input
                          id="promo"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Nhập mã giảm giá"
                        />
                        <Button variant="outline">Áp dụng</Button>
                      </div>
                    </div>

                    <Button className="w-full mt-6" size="lg">
                      <CreditCard className="mr-2 h-5 w-5" /> Thanh Toán
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <a href="/products">
                        <ShoppingBag className="mr-2 h-5 w-5" /> Tiếp Tục Mua
                        Sắm
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Giỏ hàng trống</h2>
              <p className="text-gray-600 mb-8">
                Bạn chưa có sản phẩm nào trong giỏ hàng.
              </p>
              <Button size="lg" asChild>
                <a href="/products">Tiếp Tục Mua Sắm</a>
              </Button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
