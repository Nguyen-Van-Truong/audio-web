import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import ServiceCard from "./ServiceCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  Check,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  linkUrl: string;
  category: string;
  price: string;
  duration: string;
}

const ServicesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

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
                src="https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?w=1200&q=80"
                alt="Repair Services"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Dịch Vụ Sửa Chữa Chuyên Nghiệp
                </h1>
                <p className="text-xl mb-8">
                  Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi sẵn sàng
                  sửa chữa mọi thiết bị điện tử với chất lượng cao và bảo hành
                  dài hạn.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Đặt Lịch Ngay
                </Button>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Dịch Vụ Của Chúng Tôi
              </h2>

              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">Tất Cả</TabsTrigger>
                    <TabsTrigger value="tv">Tivi</TabsTrigger>
                    <TabsTrigger value="speaker">Loa</TabsTrigger>
                    <TabsTrigger value="fan">Quạt</TabsTrigger>
                    <TabsTrigger value="cooker">Nồi Cơm</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                      <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        linkUrl={service.linkUrl}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tv" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services
                      .filter((service) => service.category === "tv")
                      .map((service) => (
                        <ServiceCard
                          key={service.id}
                          title={service.title}
                          description={service.description}
                          image={service.image}
                          linkUrl={service.linkUrl}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="speaker" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services
                      .filter((service) => service.category === "speaker")
                      .map((service) => (
                        <ServiceCard
                          key={service.id}
                          title={service.title}
                          description={service.description}
                          image={service.image}
                          linkUrl={service.linkUrl}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="fan" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services
                      .filter((service) => service.category === "fan")
                      .map((service) => (
                        <ServiceCard
                          key={service.id}
                          title={service.title}
                          description={service.description}
                          image={service.image}
                          linkUrl={service.linkUrl}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="cooker" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services
                      .filter((service) => service.category === "cooker")
                      .map((service) => (
                        <ServiceCard
                          key={service.id}
                          title={service.title}
                          description={service.description}
                          image={service.image}
                          linkUrl={service.linkUrl}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Quy Trình Sửa Chữa
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Đặt Lịch</h3>
                  <p className="text-gray-600">
                    Đặt lịch trực tuyến hoặc gọi điện để đặt lịch sửa chữa
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chẩn Đoán</h3>
                  <p className="text-gray-600">
                    Kỹ thuật viên kiểm tra và chẩn đoán vấn đề của thiết bị
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sửa Chữa</h3>
                  <p className="text-gray-600">
                    Tiến hành sửa chữa với linh kiện chính hãng chất lượng cao
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bảo Hành</h3>
                  <p className="text-gray-600">
                    Nhận thiết bị đã sửa với bảo hành lên đến 12 tháng
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Form */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-blue-600 text-white p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Đặt Lịch Sửa Chữa
                    </h2>
                    <p className="mb-6">
                      Đặt lịch ngay hôm nay để nhận ưu đãi giảm 20% cho lần sửa
                      chữa đầu tiên của bạn.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-300" />
                        <span>Kỹ thuật viên chuyên nghiệp</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-300" />
                        <span>Bảo hành 12 tháng</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-300" />
                        <span>Linh kiện chính hãng</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-green-300" />
                        <span>Giá cả minh bạch</span>
                      </div>
                    </div>

                    <div className="bg-blue-700 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Giờ Làm Việc</h3>
                      <div className="space-y-1 text-sm">
                        <p className="flex justify-between">
                          <span>Thứ Hai - Thứ Sáu:</span>
                          <span>8:00 - 17:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Thứ Bảy:</span>
                          <span>9:00 - 16:00</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Chủ Nhật:</span>
                          <span>Đóng cửa</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 p-8">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <Label htmlFor="service">Dịch Vụ</Label>
                          <select
                            id="service"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Chọn dịch vụ</option>
                            <option value="tv">Sửa Chữa Tivi</option>
                            <option value="speaker">Sửa Chữa Loa</option>
                            <option value="fan">Sửa Chữa Quạt</option>
                            <option value="cooker">Sửa Chữa Nồi Cơm</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Ngày</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? (
                                    format(date, "dd/MM/yyyy")
                                  ) : (
                                    <span>Chọn ngày</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div>
                            <Label htmlFor="time">Giờ</Label>
                            <select
                              id="time"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                            >
                              <option value="">Chọn giờ</option>
                              {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="name">Họ Tên</Label>
                          <Input id="name" placeholder="Nhập họ tên của bạn" />
                        </div>

                        <div>
                          <Label htmlFor="phone">Số Điện Thoại</Label>
                          <Input id="phone" placeholder="Nhập số điện thoại" />
                        </div>

                        <div>
                          <Label htmlFor="message">Mô Tả Vấn Đề</Label>
                          <Textarea
                            id="message"
                            placeholder="Mô tả vấn đề của thiết bị"
                            rows={3}
                          />
                        </div>

                        <Button className="w-full" type="submit">
                          Đặt Lịch
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Khách Hàng Nói Gì Về Chúng Tôi
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
                    "Tivi của tôi bị hỏng màn hình, đội ngũ kỹ thuật viên đã sửa
                    chữa nhanh chóng và chuyên nghiệp. Giá cả hợp lý và dịch vụ
                    tuyệt vời!"
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
                    "Loa của tôi bị hỏng âm thanh, sau khi sửa chữa tại
                    ĐiệnTửVN, chất lượng âm thanh thậm chí còn tốt hơn trước.
                    Rất hài lòng với dịch vụ!"
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
                    "Quạt điện của tôi bị hỏng động cơ, đã được sửa chữa nhanh
                    chóng và hiệu quả. Giá cả phải chăng và dịch vụ chuyên
                    nghiệp. Sẽ quay lại lần sau!"
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
};

// Sample data
const services: Service[] = [
  {
    id: "1",
    title: "Sửa Chữa Tivi",
    description:
      "Dịch vụ sửa chữa tất cả các loại tivi với công nghệ hiện đại.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    linkUrl: "/services/tv-repair",
    category: "tv",
    price: "300.000đ - 1.500.000đ",
    duration: "1-3 ngày",
  },
  {
    id: "2",
    title: "Sửa Chữa Loa",
    description:
      "Khôi phục chất lượng âm thanh cho các loại loa và hệ thống âm thanh.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    linkUrl: "/services/speaker-repair",
    category: "speaker",
    price: "200.000đ - 800.000đ",
    duration: "1-2 ngày",
  },
  {
    id: "3",
    title: "Sửa Chữa Quạt",
    description: "Dịch vụ sửa chữa quạt điện các loại nhanh chóng, hiệu quả.",
    image:
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    linkUrl: "/services/fan-repair",
    category: "fan",
    price: "150.000đ - 500.000đ",
    duration: "Trong ngày",
  },
  {
    id: "4",
    title: "Sửa Chữa Nồi Cơm",
    description: "Dịch vụ sửa chữa nồi cơm điện và các thiết bị nhà bếp khác.",
    image:
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    linkUrl: "/services/cooker-repair",
    category: "cooker",
    price: "200.000đ - 600.000đ",
    duration: "Trong ngày",
  },
  {
    id: "5",
    title: "Sửa Chữa Màn Hình Tivi",
    description: "Dịch vụ thay thế và sửa chữa màn hình tivi các loại.",
    image:
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600&q=80",
    linkUrl: "/services/tv-screen-repair",
    category: "tv",
    price: "800.000đ - 3.000.000đ",
    duration: "2-5 ngày",
  },
  {
    id: "6",
    title: "Sửa Chữa Loa Bluetooth",
    description: "Dịch vụ sửa chữa loa bluetooth và loa di động.",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
    linkUrl: "/services/bluetooth-speaker-repair",
    category: "speaker",
    price: "200.000đ - 500.000đ",
    duration: "1-2 ngày",
  },
  {
    id: "7",
    title: "Sửa Chữa Quạt Trần",
    description: "Dịch vụ sửa chữa và bảo dưỡng quạt trần các loại.",
    image:
      "https://images.unsplash.com/photo-1614605670899-47ecbf05d0a1?w=600&q=80",
    linkUrl: "/services/ceiling-fan-repair",
    category: "fan",
    price: "250.000đ - 700.000đ",
    duration: "1-2 ngày",
  },
  {
    id: "8",
    title: "Sửa Chữa Nồi Áp Suất",
    description: "Dịch vụ sửa chữa nồi áp suất điện các loại.",
    image:
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80",
    linkUrl: "/services/pressure-cooker-repair",
    category: "cooker",
    price: "250.000đ - 700.000đ",
    duration: "1-2 ngày",
  },
];

export default ServicesPage;
