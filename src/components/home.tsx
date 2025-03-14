import React, { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import HeroSection from "./home/HeroSection";
import FeaturedDeals from "./home/FeaturedDeals";
import RepairServicesPreview from "./home/RepairServicesPreview";
import Footer from "./layout/Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

        <main>
          <HeroSection />

          <section className="py-12 bg-white">
            <div className="container px-4 mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Chào Mừng Đến Với ĐiệnTửVN
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Chúng tôi cung cấp các sản phẩm điện tử chất lượng cao và dịch
                vụ sửa chữa chuyên nghiệp. Với hơn 10 năm kinh nghiệm, chúng tôi
                tự hào là đối tác tin cậy cho mọi nhu cầu điện tử của bạn.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="/products">
                    Khám Phá Sản Phẩm
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <a href="/services">
                    Dịch Vụ Sửa Chữa
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <FeaturedDeals />

          <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="container px-4 mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Miễn Phí Vận Chuyển Toàn Quốc
                  </h2>
                  <p className="text-lg mb-6 text-blue-100">
                    Đặt hàng trên 2 triệu đồng và nhận miễn phí vận chuyển đến
                    tận nhà trên toàn quốc. Áp dụng cho tất cả sản phẩm điện tử
                    trong cửa hàng của chúng tôi.
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                    asChild
                  >
                    <a href="/products">Mua Sắm Ngay</a>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
                    alt="Free shipping"
                    className="rounded-lg shadow-xl max-w-md w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <RepairServicesPreview />

          <section className="py-16 bg-gray-100">
            <div className="container px-4 mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Khách Hàng Nói Gì Về Chúng Tôi
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Khám phá trải nghiệm của khách hàng với sản phẩm và dịch vụ
                  của chúng tôi
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
                        alt="Customer"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Nguyễn Văn A</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Tôi đã mua một chiếc tivi từ ĐiệnTửVN và rất hài lòng với
                    chất lượng sản phẩm. Dịch vụ giao hàng nhanh chóng và nhân
                    viên rất thân thiện."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2"
                        alt="Customer"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Trần Thị B</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Dịch vụ sửa chữa loa của ĐiệnTửVN thực sự xuất sắc. Kỹ
                    thuật viên đã sửa chiếc loa của tôi trong thời gian rất ngắn
                    và chi phí hợp lý. Tôi sẽ quay lại khi cần."
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3"
                        alt="Customer"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Lê Văn C</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Tôi đã mua nhiều sản phẩm từ ĐiệnTửVN và luôn hài lòng với
                    chất lượng. Chính sách bảo hành của họ rất tốt và dịch vụ
                    khách hàng luôn nhiệt tình hỗ trợ."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
