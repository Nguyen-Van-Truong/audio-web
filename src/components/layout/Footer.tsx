import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ĐiệnTửVN</h3>
            <p className="mb-4 text-gray-300">
              Cửa hàng điện tử và dịch vụ sửa chữa chuyên nghiệp hàng đầu Việt
              Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dịch Vụ Sửa Chữa
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-gray-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">+84 (28) 3822-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">hotro@dientuvn.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bản Tin</h3>
            <p className="mb-4 text-gray-300">
              Đăng ký nhận bản tin để cập nhật sản phẩm mới và ưu đãi đặc biệt.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Đăng Ký
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ĐiệnTửVN. Tất cả quyền được bảo
            lưu.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều Khoản Dịch Vụ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Chính Sách Hoàn Tiền
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
