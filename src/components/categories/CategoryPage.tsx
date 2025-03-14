import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import ProductCard from "../products/ProductCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  category: string;
  brand: string;
  subcategory?: string;
}

interface CategoryPageProps {
  category?: string;
  subcategory?: string;
}

const CategoryPage = ({
  category = "fans",
  subcategory = "",
}: CategoryPageProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 20000000]);
    setSelectedBrands([]);
  };

  // Get category display name
  const getCategoryDisplayName = () => {
    switch (category) {
      case "fans":
        return "Quạt";
      case "tvs":
        return "Tivi";
      case "speakers":
        return "Loa";
      case "cookers":
        return "Nồi Cơm";
      default:
        return "Sản Phẩm";
    }
  };

  // Get subcategory display name
  const getSubcategoryDisplayName = () => {
    switch (subcategory) {
      case "ceiling":
        return "Quạt Trần";
      case "table":
        return "Quạt Bàn";
      case "tower":
        return "Quạt Đứng";
      case "oled":
        return "Tivi OLED";
      case "led":
        return "Tivi LED";
      case "smart":
        return "Tivi Thông Minh";
      case "bluetooth":
        return "Loa Bluetooth";
      case "soundbars":
        return "Loa Soundbar";
      case "home-theater":
        return "Dàn Âm Thanh";
      case "rice":
        return "Nồi Cơm Điện";
      case "pressure":
        return "Nồi Áp Suất";
      case "slow":
        return "Nồi Nấu Chậm";
      default:
        return "";
    }
  };

  // Filter products based on category, subcategory, search query, price range, and brands
  const filteredProducts = products.filter((product) => {
    const matchesCategory = product.category === category;
    const matchesSubcategory = subcategory
      ? product.subcategory === subcategory
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return (
      matchesCategory &&
      matchesSubcategory &&
      matchesSearch &&
      matchesPrice &&
      matchesBrand
    );
  });

  // Get brands for the current category
  const categoryBrands = [
    ...new Set(
      products
        .filter((product) => product.category === category)
        .map((product) => product.brand),
    ),
  ].sort();

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {subcategory
                ? getSubcategoryDisplayName()
                : getCategoryDisplayName()}
            </h1>
            <p className="text-gray-600">
              Khám phá bộ sưu tập{" "}
              {subcategory
                ? getSubcategoryDisplayName().toLowerCase()
                : getCategoryDisplayName().toLowerCase()}{" "}
              chất lượng cao của chúng tôi
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filter sidebar - desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">Bộ Lọc</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="h-8 text-xs"
                  >
                    Xóa tất cả
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Khoảng Giá</h3>
                    <Slider
                      defaultValue={[0, 20000000]}
                      max={20000000}
                      step={100000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm">
                      <span>{priceRange[0].toLocaleString()}đ</span>
                      <span>{priceRange[1].toLocaleString()}đ</span>
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Thương Hiệu</h3>
                    <div className="space-y-2">
                      {categoryBrands.map((brand) => (
                        <div
                          key={brand}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => handleBrandChange(brand)}
                          />
                          <Label htmlFor={`brand-${brand}`} className="text-sm">
                            {brand}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product listing */}
            <div className="flex-1">
              {/* Search and filter controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  className="lg:hidden flex items-center gap-2"
                  onClick={toggleFilter}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Bộ Lọc
                </Button>
              </div>

              {/* Mobile filter panel */}
              {isFilterOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                  <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg p-6 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-semibold text-lg">Bộ Lọc</h2>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleFilter}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {/* Price Range */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Khoảng Giá</h3>
                        <Slider
                          defaultValue={[0, 20000000]}
                          max={20000000}
                          step={100000}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span>{priceRange[0].toLocaleString()}đ</span>
                          <span>{priceRange[1].toLocaleString()}đ</span>
                        </div>
                      </div>

                      {/* Brands */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">
                          Thương Hiệu
                        </h3>
                        <div className="space-y-2">
                          {categoryBrands.map((brand) => (
                            <div
                              key={brand}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`mobile-brand-${brand}`}
                                checked={selectedBrands.includes(brand)}
                                onCheckedChange={() => handleBrandChange(brand)}
                              />
                              <Label
                                htmlFor={`mobile-brand-${brand}`}
                                className="text-sm"
                              >
                                {brand}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={clearFilters}
                        >
                          Xóa tất cả
                        </Button>
                        <Button className="flex-1" onClick={toggleFilter}>
                          Áp dụng
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Results count */}
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Hiển thị {filteredProducts.length} sản phẩm
                </p>
              </div>

              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      rating={product.rating}
                      image={product.image}
                      discount={product.discount}
                      isNew={product.isNew}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">Không tìm thấy sản phẩm nào</p>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                      &lt;
                    </Button>
                    <Button variant="default" size="icon">
                      1
                    </Button>
                    <Button variant="outline" size="icon">
                      2
                    </Button>
                    <Button variant="outline" size="icon">
                      3
                    </Button>
                    <span className="px-2">...</span>
                    <Button variant="outline" size="icon">
                      10
                    </Button>
                    <Button variant="outline" size="icon">
                      &gt;
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

// Sample data
const products: Product[] = [
  // Fans - Ceiling
  {
    id: "f1",
    name: "Quạt Trần Cao Cấp 5 Cánh",
    price: 2990000,
    originalPrice: 3590000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1614605670899-47ecbf05d0a1?w=600&q=80",
    discount: 17,
    isNew: false,
    category: "fans",
    subcategory: "ceiling",
    brand: "Panasonic",
  },
  {
    id: "f2",
    name: "Quạt Trần Điều Khiển Từ Xa",
    price: 3490000,
    originalPrice: 3990000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1636220506380-30a68f60c04c?w=600&q=80",
    discount: 13,
    isNew: true,
    category: "fans",
    subcategory: "ceiling",
    brand: "Mitsubishi",
  },
  // Fans - Table
  {
    id: "f3",
    name: "Quạt Bàn Mini USB",
    price: 290000,
    originalPrice: 390000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1587212805869-38847e28f596?w=600&q=80",
    discount: 26,
    isNew: false,
    category: "fans",
    subcategory: "table",
    brand: "Xiaomi",
  },
  {
    id: "f4",
    name: "Quạt Bàn Cao Cấp",
    price: 790000,
    originalPrice: 990000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1587212805869-38847e28f596?w=600&q=80",
    discount: 20,
    isNew: false,
    category: "fans",
    subcategory: "table",
    brand: "Panasonic",
  },
  // Fans - Tower
  {
    id: "f5",
    name: "Quạt Đứng Điều Khiển Từ Xa",
    price: 1990000,
    originalPrice: 2690000,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    discount: 26,
    isNew: true,
    category: "fans",
    subcategory: "tower",
    brand: "Panasonic",
  },
  {
    id: "f6",
    name: "Quạt Đứng Công Nghiệp",
    price: 2490000,
    originalPrice: 2990000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    discount: 17,
    isNew: false,
    category: "fans",
    subcategory: "tower",
    brand: "Mitsubishi",
  },
  // TVs - OLED
  {
    id: "t1",
    name: "Tivi OLED 65 inch",
    price: 19990000,
    originalPrice: 24990000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80",
    discount: 20,
    isNew: true,
    category: "tvs",
    subcategory: "oled",
    brand: "LG",
  },
  {
    id: "t2",
    name: "Tivi OLED 55 inch",
    price: 15990000,
    originalPrice: 19990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80",
    discount: 20,
    isNew: false,
    category: "tvs",
    subcategory: "oled",
    brand: "Sony",
  },
  // TVs - LED
  {
    id: "t3",
    name: "Tivi LED 50 inch",
    price: 9990000,
    originalPrice: 12990000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    discount: 23,
    isNew: false,
    category: "tvs",
    subcategory: "led",
    brand: "Samsung",
  },
  {
    id: "t4",
    name: "Tivi LED 43 inch",
    price: 7990000,
    originalPrice: 9990000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    discount: 20,
    isNew: false,
    category: "tvs",
    subcategory: "led",
    brand: "LG",
  },
  // TVs - Smart
  {
    id: "t5",
    name: "Tivi Thông Minh 4K 55 inch",
    price: 11990000,
    originalPrice: 16990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    discount: 29,
    isNew: false,
    category: "tvs",
    subcategory: "smart",
    brand: "Samsung",
  },
  {
    id: "t6",
    name: "Tivi Thông Minh 4K 65 inch",
    price: 16990000,
    originalPrice: 21990000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    discount: 23,
    isNew: true,
    category: "tvs",
    subcategory: "smart",
    brand: "Sony",
  },
  // Speakers - Bluetooth
  {
    id: "s1",
    name: "Loa Bluetooth Không Dây",
    price: 1799000,
    originalPrice: 2999000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    discount: 40,
    isNew: false,
    category: "speakers",
    subcategory: "bluetooth",
    brand: "Sony",
  },
  {
    id: "s2",
    name: "Loa Bluetooth Mini",
    price: 990000,
    originalPrice: 1490000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    discount: 34,
    isNew: true,
    category: "speakers",
    subcategory: "bluetooth",
    brand: "JBL",
  },
  // Speakers - Soundbars
  {
    id: "s3",
    name: "Loa Soundbar 2.1 Kênh",
    price: 2490000,
    originalPrice: 3490000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    discount: 29,
    isNew: false,
    category: "speakers",
    subcategory: "soundbars",
    brand: "Sony",
  },
  {
    id: "s4",
    name: "Loa Soundbar 5.1 Kênh",
    price: 4990000,
    originalPrice: 6990000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    discount: 29,
    isNew: true,
    category: "speakers",
    subcategory: "soundbars",
    brand: "Samsung",
  },
  // Speakers - Home Theater
  {
    id: "s5",
    name: "Dàn Âm Thanh 5.1",
    price: 7990000,
    originalPrice: 9990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    discount: 20,
    isNew: false,
    category: "speakers",
    subcategory: "home-theater",
    brand: "Sony",
  },
  {
    id: "s6",
    name: "Dàn Âm Thanh 7.1",
    price: 12990000,
    originalPrice: 15990000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    discount: 19,
    isNew: true,
    category: "speakers",
    subcategory: "home-theater",
    brand: "Bose",
  },
  // Cookers - Rice
  {
    id: "c1",
    name: "Nồi Cơm Điện Tử",
    price: 1390000,
    originalPrice: 1890000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    discount: 26,
    isNew: false,
    category: "cookers",
    subcategory: "rice",
    brand: "Philips",
  },
  {
    id: "c2",
    name: "Nồi Cơm Điện Cao Cấp",
    price: 2490000,
    originalPrice: 2990000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    discount: 17,
    isNew: true,
    category: "cookers",
    subcategory: "rice",
    brand: "Zojirushi",
  },
  // Cookers - Pressure
  {
    id: "c3",
    name: "Nồi Áp Suất Điện Tử",
    price: 1690000,
    originalPrice: 2190000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    discount: 23,
    isNew: false,
    category: "cookers",
    subcategory: "pressure",
    brand: "Philips",
  },
  {
    id: "c4",
    name: "Nồi Áp Suất Đa Năng",
    price: 2290000,
    originalPrice: 2790000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    discount: 18,
    isNew: true,
    category: "cookers",
    subcategory: "pressure",
    brand: "Tefal",
  },
  // Cookers - Slow
  {
    id: "c5",
    name: "Nồi Nấu Chậm 3.5L",
    price: 1190000,
    originalPrice: 1490000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    discount: 20,
    isNew: false,
    category: "cookers",
    subcategory: "slow",
    brand: "Philips",
  },
  {
    id: "c6",
    name: "Nồi Nấu Chậm Điện Tử 5L",
    price: 1690000,
    originalPrice: 1990000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    discount: 15,
    isNew: true,
    category: "cookers",
    subcategory: "slow",
    brand: "Crock-Pot",
  },
];

export default CategoryPage;
