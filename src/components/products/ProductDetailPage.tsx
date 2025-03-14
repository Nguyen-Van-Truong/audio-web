import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";
import ProductCard from "./ProductCard";
import { Separator } from "../ui/separator";

interface ProductDetailPageProps {
  productId?: string;
}

const ProductDetailPage = ({ productId = "1" }: ProductDetailPageProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Find the product by ID
  const product = products.find((p) => p.id === productId) || products[0];

  // Get related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-5 w-5 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
      }
    }
    return stars;
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
          {/* Breadcrumbs */}
          <div className="text-sm breadcrumbs mb-6">
            <ul className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-primary">
                  Trang Chủ
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <a
                  href="/products"
                  className="text-gray-500 hover:text-primary"
                >
                  Sản Phẩm
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <a
                  href={`/products/${product.category}`}
                  className="text-gray-500 hover:text-primary"
                >
                  {getCategoryName(product.category)}
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-primary">{product.name}</li>
            </ul>
          </div>

          {/* Product details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product images */}
            <div>
              <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[400px] object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-2 rounded-md overflow-hidden ${selectedImage === index ? "border-primary" : "border-transparent"}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(product.rating)}</div>
                <span className="text-gray-500">
                  {product.rating} (120 đánh giá)
                </span>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.discount && (
                  <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Mô Tả</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Số Lượng</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Thêm Vào Giỏ
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" /> Yêu Thích
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm">Miễn phí vận chuyển</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm">Bảo hành 12 tháng</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm">Đổi trả trong 7 ngày</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mb-12">
            <Tabs defaultValue="specifications">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="specifications">
                  Thông Số Kỹ Thuật
                </TabsTrigger>
                <TabsTrigger value="features">Tính Năng</TabsTrigger>
                <TabsTrigger value="reviews">Đánh Giá</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                          <td className="py-2 px-4 font-medium w-1/3">
                            {spec.name}
                          </td>
                          <td className="py-2 px-4">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Tính Năng Nổi Bật
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Đánh Giá Từ Khách Hàng
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b pb-4 mb-4 last:border-0"
                      >
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="mr-3">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-10 h-10 rounded-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  image={product.images[0]}
                  discount={product.discount}
                  isNew={product.isNew}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

// Helper functions
const formatPrice = (price: number) => {
  return price.toLocaleString("vi-VN") + "đ";
};

const getCategoryName = (category: string) => {
  switch (category) {
    case "speakers":
      return "Loa";
    case "tvs":
      return "Tivi";
    case "fans":
      return "Quạt";
    case "cookers":
      return "Nồi Cơm";
    default:
      return category;
  }
};

// Sample data
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  images: string[];
  discount?: number;
  isNew?: boolean;
  category: string;
  description: string;
  specifications: { name: string; value: string }[];
  features: string[];
}

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Loa Bluetooth Không Dây",
    price: 1799000,
    originalPrice: 2999000,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    ],
    discount: 40,
    isNew: false,
    category: "speakers",
    description:
      "Loa Bluetooth không dây với âm thanh chất lượng cao, thiết kế hiện đại và thời lượng pin lên đến 12 giờ. Kết nối dễ dàng với các thiết bị thông qua Bluetooth 5.0 hoặc cổng AUX.",
    specifications: [
      { name: "Thương hiệu", value: "Sony" },
      { name: "Model", value: "SRS-XB23" },
      { name: "Công suất", value: "20W" },
      { name: "Kết nối", value: "Bluetooth 5.0, AUX" },
      { name: "Thời lượng pin", value: "12 giờ" },
      { name: "Kích thước", value: "76 x 218 mm" },
      { name: "Trọng lượng", value: "580g" },
      { name: "Chống nước", value: "IP67" },
    ],
    features: [
      "Âm thanh 360 độ với công nghệ Extra Bass",
      "Kết nối không dây Bluetooth 5.0 với phạm vi lên đến 30m",
      "Chống nước, chống bụi chuẩn IP67",
      "Thời lượng pin lên đến 12 giờ",
      "Có thể kết nối nhiều loa cùng lúc",
      "Tích hợp micro để đàm thoại",
      "Thiết kế nhỏ gọn, dễ mang theo",
    ],
  },
  {
    id: "2",
    name: "Tivi Thông Minh 4K 55 inch",
    price: 11990000,
    originalPrice: 16990000,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    ],
    discount: 29,
    isNew: false,
    category: "tvs",
    description:
      "Tivi thông minh 4K 55 inch với hình ảnh sắc nét, âm thanh vòm sống động và hệ điều hành thông minh. Tích hợp nhiều ứng dụng giải trí và hỗ trợ điều khiển bằng giọng nói.",
    specifications: [
      { name: "Thương hiệu", value: "Samsung" },
      { name: "Model", value: "AU8000" },
      { name: "Kích thước màn hình", value: "55 inch" },
      { name: "Độ phân giải", value: "4K UHD (3840 x 2160)" },
      { name: "Hệ điều hành", value: "Tizen OS" },
      { name: "Công nghệ hình ảnh", value: "Crystal Processor 4K" },
      { name: "Công nghệ âm thanh", value: "Q-Symphony" },
      { name: "Kết nối", value: "HDMI x3, USB x2, Bluetooth, Wi-Fi" },
    ],
    features: [
      "Độ phân giải 4K UHD cho hình ảnh sắc nét",
      "Công nghệ HDR10+ tăng cường độ tương phản",
      "Hệ điều hành Tizen OS với nhiều ứng dụng giải trí",
      "Điều khiển bằng giọng nói thông qua Bixby",
      "Tính năng AirPlay 2 để chiếu màn hình từ thiết bị Apple",
      "Chế độ Game Mode tối ưu cho trải nghiệm chơi game",
      "Thiết kế không viền 3 cạnh sang trọng",
    ],
  },
  {
    id: "3",
    name: "Quạt Đứng Điều Khiển Từ Xa",
    price: 1990000,
    originalPrice: 2690000,
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    ],
    discount: 26,
    isNew: true,
    category: "fans",
    description:
      "Quạt đứng cao cấp với điều khiển từ xa, 12 tốc độ gió và chế độ tự nhiên. Thiết kế hiện đại, hoạt động êm ái và tiết kiệm điện năng.",
    specifications: [
      { name: "Thương hiệu", value: "Panasonic" },
      { name: "Model", value: "F-409KB" },
      { name: "Công suất", value: "55W" },
      { name: "Đường kính cánh quạt", value: "40cm" },
      { name: "Số tốc độ gió", value: "12" },
      { name: "Chế độ gió", value: "Thường, Tự nhiên, Ngủ" },
      { name: "Điều khiển", value: "Từ xa, Nút bấm" },
      { name: "Hẹn giờ", value: "1-8 giờ" },
    ],
    features: [
      "Điều khiển từ xa tiện lợi",
      "12 tốc độ gió đáp ứng mọi nhu cầu",
      "Chế độ gió tự nhiên mô phỏng gió thật",
      "Chức năng đảo góc 90 độ tự động",
      "Hẹn giờ tắt từ 1-8 giờ",
      "Hoạt động êm ái, tiết kiệm điện",
      "Thiết kế hiện đại, dễ dàng di chuyển",
    ],
  },
  {
    id: "4",
    name: "Nồi Cơm Điện Tử",
    price: 1390000,
    originalPrice: 1890000,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    ],
    discount: 26,
    isNew: false,
    category: "cookers",
    description:
      "Nồi cơm điện tử cao cấp với lòng nồi dày 2mm phủ chống dính, 10 chương trình nấu và chức năng giữ ấm 24 giờ. Thiết kế sang trọng và dễ sử dụng.",
    specifications: [
      { name: "Thương hiệu", value: "Philips" },
      { name: "Model", value: "HD4515" },
      { name: "Dung tích", value: "1.8L" },
      { name: "Công suất", value: "800W" },
      { name: "Lòng nồi", value: "Hợp kim nhôm phủ chống dính" },
      { name: "Số chương trình nấu", value: "10" },
      { name: "Chức năng giữ ấm", value: "24 giờ" },
      { name: "Hẹn giờ", value: "Có, tối đa 24 giờ" },
    ],
    features: [
      "10 chương trình nấu tự động",
      "Lòng nồi dày 2mm phủ chống dính",
      "Chức năng giữ ấm thông minh 24 giờ",
      "Hẹn giờ nấu lên đến 24 giờ",
      "Nắp trong có thể tháo rời để vệ sinh",
      "Màn hình LED hiển thị rõ ràng",
      "Thiết kế sang trọng, dễ sử dụng",
    ],
  },
];

const reviews: Review[] = [
  {
    id: "r1",
    name: "Nguyễn Văn A",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
    rating: 5,
    date: "15/05/2023",
    comment:
      "Sản phẩm rất tốt, âm thanh chất lượng cao và pin trâu. Tôi đã sử dụng được 3 tháng và rất hài lòng với chất lượng sản phẩm.",
  },
  {
    id: "r2",
    name: "Trần Thị B",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2",
    rating: 4,
    date: "20/04/2023",
    comment:
      "Loa có chất lượng âm thanh tốt, thiết kế đẹp và dễ sử dụng. Pin hơi yếu so với quảng cáo nhưng vẫn đáp ứng được nhu cầu sử dụng hàng ngày.",
  },
];

export default ProductDetailPage;
