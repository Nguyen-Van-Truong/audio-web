import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert(
      "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
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
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
                alt="Contact Us"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Liên Hệ Với Chúng Tôi
                </h1>
                <p className="text-xl mb-8">
                  Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ
                  với chúng tôi ngay hôm nay để được tư vấn và giải đáp mọi thắc
                  mắc.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Gửi Tin Nhắn Cho Chúng Tôi
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Họ Tên</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Nhập họ tên của bạn"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Nhập email của bạn"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Số Điện Thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Nhập số điện thoại của bạn"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Chủ Đề</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Nhập chủ đề"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Tin Nhắn</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Nhập tin nhắn của bạn"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Gửi Tin Nhắn
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Địa Chỉ</h3>
                        <p className="text-gray-600">
                          123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Điện Thoại</h3>
                        <p className="text-gray-600">+84 (28) 3822-9999</p>
                        <p className="text-gray-600">+84 (28) 3822-8888</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600">hotro@dientuvn.com</p>
                        <p className="text-gray-600">info@dientuvn.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Giờ Làm Việc</h3>
                        <p className="text-gray-600">
                          Thứ Hai - Thứ Sáu: 8:00 - 17:00
                        </p>
                        <p className="text-gray-600">Thứ Bảy: 9:00 - 12:00</p>
                        <p className="text-gray-600">Chủ Nhật: Đóng cửa</p>
                      </div>
                    </div>
                  </div>
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

export default ContactPage;
