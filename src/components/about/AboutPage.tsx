import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 h-full md:relative md:block">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-[280px]">
        <Header onToggleSidebar={toggleSidebar} />

        <main>
          {/* Hero Section */}
          <section className="relative bg-blue-600 text-white">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80"
                alt="About Us"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Về ĐiệnTửVN
                </h1>
                <p className="text-xl mb-8">
                  Chúng tôi là đơn vị hàng đầu trong lĩnh vực cung cấp và sửa
                  chữa thiết bị điện tử tại Việt Nam với hơn 10 năm kinh nghiệm.
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Câu Chuyện Của Chúng Tôi
                  </h2>
                  <p className="text-gray-600 mb-4">
                    ĐiệnTửVN được thành lập vào năm 2013 với sứ mệnh cung cấp
                    các sản phẩm điện tử chất lượng cao và dịch vụ sửa chữa
                    chuyên nghiệp cho người tiêu dùng Việt Nam.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Từ một cửa hàng nhỏ tại Thành phố Hồ Chí Minh, chúng tôi đã
                    phát triển thành một trong những đơn vị hàng đầu trong lĩnh
                    vực điện tử với nhiều chi nhánh trên toàn quốc.
                  </p>
                  <p className="text-gray-600">
                    Với đội ngũ kỹ thuật viên giàu kinh nghiệm và tâm huyết,
                    chúng tôi cam kết mang đến cho khách hàng những sản phẩm và
                    dịch vụ tốt nhất với giá cả hợp lý.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80"
                    alt="Our Story"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Giá Trị Cốt Lõi
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chất Lượng</h3>
                  <p className="text-gray-600">
                    Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng
                    cao, đáp ứng mọi nhu cầu của khách hàng.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Hiệu Quả</h3>
                  <p className="text-gray-600">
                    Chúng tôi luôn tìm cách tối ưu hóa quy trình làm việc để
                    mang đến dịch vụ nhanh chóng và hiệu quả nhất.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tận Tâm</h3>
                  <p className="text-gray-600">
                    Chúng tôi luôn đặt khách hàng lên hàng đầu và cam kết mang
                    đến trải nghiệm dịch vụ tốt nhất.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Đội Ngũ Của Chúng Tôi
              </h2>

              <Tabs defaultValue="management" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="management">Ban Lãnh Đạo</TabsTrigger>
                    <TabsTrigger value="technical">
                      Đội Ngũ Kỹ Thuật
                    </TabsTrigger>
                    <TabsTrigger value="sales">Đội Ngũ Kinh Doanh</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="management" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {managementTeam.map((member) => (
                      <div
                        key={member.id}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 mb-2">
                            {member.position}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technicalTeam.map((member) => (
                      <div
                        key={member.id}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 mb-2">
                            {member.position}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sales" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {salesTeam.map((member) => (
                      <div
                        key={member.id}
                        className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 mb-2">
                            {member.position}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Our Achievements */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Thành Tựu Của Chúng Tôi
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    10+
                  </div>
                  <p className="text-gray-600">Năm Kinh Nghiệm</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <p className="text-gray-600">Chi Nhánh Toàn Quốc</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    50k+
                  </div>
                  <p className="text-gray-600">Khách Hàng Hài Lòng</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    100k+
                  </div>
                  <p className="text-gray-600">Thiết Bị Đã Sửa Chữa</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Sẵn Sàng Trải Nghiệm Dịch Vụ Của Chúng Tôi?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Liên hệ ngay hôm nay để được tư vấn miễn phí và nhận ưu đãi đặc
                biệt cho lần sử dụng dịch vụ đầu tiên.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 group"
                >
                  Liên Hệ Ngay
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 group"
                >
                  Xem Dịch Vụ
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

// Sample data
const managementTeam = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    position: "Giám Đốc Điều Hành",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    description:
      "Với hơn 15 năm kinh nghiệm trong lĩnh vực điện tử, anh An đã dẫn dắt công ty phát triển mạnh mẽ từ năm 2013.",
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    position: "Giám Đốc Tài Chính",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    description:
      "Chị Bình có hơn 10 năm kinh nghiệm trong lĩnh vực tài chính và đã giúp công ty tối ưu hóa chi phí hoạt động.",
  },
  {
    id: "3",
    name: "Lê Văn Cường",
    position: "Giám Đốc Kỹ Thuật",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description:
      "Anh Cường là chuyên gia trong lĩnh vực sửa chữa điện tử với hơn 12 năm kinh nghiệm và nhiều chứng chỉ quốc tế.",
  },
  {
    id: "4",
    name: "Phạm Thị Dung",
    position: "Giám Đốc Marketing",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description:
      "Chị Dung có hơn 8 năm kinh nghiệm trong lĩnh vực marketing và đã giúp xây dựng thương hiệu ĐiệnTửVN.",
  },
];

const technicalTeam = [
  {
    id: "1",
    name: "Hoàng Văn Đức",
    position: "Trưởng Phòng Kỹ Thuật",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    description:
      "Anh Đức có hơn 10 năm kinh nghiệm sửa chữa các loại thiết bị điện tử và là chuyên gia hàng đầu về tivi.",
  },
  {
    id: "2",
    name: "Nguyễn Thị Hoa",
    position: "Kỹ Thuật Viên Cao Cấp",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    description:
      "Chị Hoa chuyên sửa chữa các thiết bị âm thanh với hơn 7 năm kinh nghiệm và nhiều chứng chỉ chuyên môn.",
  },
  {
    id: "3",
    name: "Trần Văn Giang",
    position: "Kỹ Thuật Viên Cao Cấp",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    description:
      "Anh Giang là chuyên gia về sửa chữa quạt điện và các thiết bị làm mát với hơn 8 năm kinh nghiệm.",
  },
  {
    id: "4",
    name: "Lê Thị Hương",
    position: "Kỹ Thuật Viên",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    description:
      "Chị Hương chuyên sửa chữa các thiết bị nhà bếp với hơn 5 năm kinh nghiệm và luôn nhận được đánh giá cao từ khách hàng.",
  },
];

const salesTeam = [
  {
    id: "1",
    name: "Phạm Văn Khoa",
    position: "Trưởng Phòng Kinh Doanh",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    description:
      "Anh Khoa có hơn 8 năm kinh nghiệm trong lĩnh vực kinh doanh thiết bị điện tử và đã giúp công ty mở rộng thị trường.",
  },
  {
    id: "2",
    name: "Nguyễn Thị Lan",
    position: "Chuyên Viên Kinh Doanh Cao Cấp",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    description:
      "Chị Lan có hơn 6 năm kinh nghiệm tư vấn và bán hàng, luôn đạt thành tích xuất sắc trong công việc.",
  },
  {
    id: "3",
    name: "Trần Văn Minh",
    position: "Chuyên Viên Kinh Doanh",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80",
    description:
      "Anh Minh có hơn 5 năm kinh nghiệm trong lĩnh vực kinh doanh thiết bị điện tử và am hiểu sâu về sản phẩm.",
  },
  {
    id: "4",
    name: "Lê Thị Ngọc",
    position: "Chuyên Viên Kinh Doanh",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80",
    description:
      "Chị Ngọc có hơn 4 năm kinh nghiệm tư vấn khách hàng và luôn nhận được phản hồi tích cực về thái độ phục vụ.",
  },
];

export default AboutPage;
