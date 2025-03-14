import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import ProductCard from "./ProductCard";
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
}

const ProductsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 20000000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  // Filter products based on search query, price range, categories, and brands
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 h-full md:relative md:block">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-[280px]">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="container px-4 py-8 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sản Phẩm Điện Tử</h1>
            <p className="text-gray-600">
              Khám phá bộ sưu tập thiết bị điện tử chất lượng cao của chúng tôi
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

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Danh Mục</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() =>
                              handleCategoryChange(category)
                            }
                          />
                          <Label
                            htmlFor={`category-${category}`}
                            className="text-sm"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Thương Hiệu</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
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

                      {/* Categories */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Danh Mục</h3>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div
                              key={category}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`mobile-category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() =>
                                  handleCategoryChange(category)
                                }
                              />
                              <Label
                                htmlFor={`mobile-category-${category}`}
                                className="text-sm"
                              >
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Brands */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">
                          Thương Hiệu
                        </h3>
                        <div className="space-y-2">
                          {brands.map((brand) => (
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
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

// Sample data
const categories = ["Loa", "Tivi", "Quạt", "Nồi Cơm", "Máy Lọc Không Khí"];
const brands = ["Sony", "Samsung", "LG", "Panasonic", "Philips"];

const products: Product[] = [
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
    category: "Loa",
    brand: "Sony",
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
    category: "Tivi",
    brand: "Samsung",
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
    category: "Quạt",
    brand: "Panasonic",
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
    category: "Nồi Cơm",
    brand: "Philips",
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
    category: "Máy Lọc Không Khí",
    brand: "LG",
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
    category: "Máy Giặt",
    brand: "Samsung",
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
    category: "Tủ Lạnh",
    brand: "LG",
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
    category: "Máy Pha Cà Phê",
    brand: "Philips",
  },
  {
    id: "9",
    name: "Loa Soundbar 2.1 Kênh",
    price: 2490000,
    originalPrice: 3490000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    discount: 29,
    isNew: false,
    category: "Loa",
    brand: "Sony",
  },
  {
    id: "10",
    name: "Tivi OLED 65 inch",
    price: 19990000,
    originalPrice: 24990000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&q=80",
    discount: 20,
    isNew: true,
    category: "Tivi",
    brand: "LG",
  },
  {
    id: "11",
    name: "Quạt Trần Cao Cấp",
    price: 2990000,
    originalPrice: 3590000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1614605670899-47ecbf05d0a1?w=600&q=80",
    discount: 17,
    isNew: false,
    category: "Quạt",
    brand: "Panasonic",
  },
  {
    id: "12",
    name: "Nồi Áp Suất Điện Tử",
    price: 1690000,
    originalPrice: 2190000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    discount: 23,
    isNew: false,
    category: "Nồi Cơm",
    brand: "Philips",
  },
];

export default ProductsPage;
