import React from "react";
import { Button } from "@/components/ui/button";
import ServiceCard from "../services/ServiceCard";
import { ArrowRight } from "lucide-react";

interface RepairServicesPreviewProps {
  title?: string;
  description?: string;
  services?: {
    id: string;
    title: string;
    description: string;
    image: string;
    linkUrl: string;
  }[];
}

const RepairServicesPreview = ({
  title = "Dịch Vụ Sửa Chữa Chuyên Nghiệp",
  description = "Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi sẵn sàng sửa chữa mọi thiết bị điện tử với chất lượng cao và bảo hành dài hạn.",
  services = defaultServices,
}: RepairServicesPreviewProps) => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px- mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
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

        <div className="text-center">
          <Button variant="outline" className="group" asChild>
            <a href="/services">
              Xem Tất Cả Dịch Vụ
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                Ưu Đãi Đặc Biệt
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Giảm 20% Cho Lần Sửa Chữa Đầu Tiên
              </h3>
              <p className="text-gray-600 mb-6">
                Đăng ký dịch vụ sửa chữa ngay hôm nay và nhận ưu đãi giảm 20%
                cho lần sửa chữa đầu tiên của bạn. Áp dụng cho tất cả các loại
                thiết bị điện tử.
              </p>
              <Button className="w-fit">Đặt Lịch Ngay</Button>
            </div>
            <div className="bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1581092921461-7031e8fbc93e?w=800&q=80"
                alt="Technician repairing electronics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h3 className="text-xl font-semibold mb-2">Bảo Hành 12 Tháng</h3>
            <p className="text-gray-600">
              Tất cả dịch vụ sửa chữa của chúng tôi đều được bảo hành 12 tháng,
              đảm bảo sự an tâm cho khách hàng.
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
            <h3 className="text-xl font-semibold mb-2">Sửa Chữa Nhanh Chóng</h3>
            <p className="text-gray-600">
              Cam kết thời gian sửa chữa nhanh chóng, nhiều trường hợp có thể
              hoàn thành trong ngày.
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
            <h3 className="text-xl font-semibold mb-2">
              Kỹ Thuật Viên Chuyên Nghiệp
            </h3>
            <p className="text-gray-600">
              Đội ngũ kỹ thuật viên được đào tạo chuyên sâu và có nhiều năm kinh
              nghiệm trong lĩnh vực sửa chữa điện tử.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultServices = [
  {
    id: "1",
    title: "Sửa Chữa Tivi",
    description:
      "Dịch vụ sửa chữa tất cả các loại tivi với công nghệ hiện đại.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
    linkUrl: "/services/tv-repair",
  },
  {
    id: "2",
    title: "Sửa Chữa Loa",
    description:
      "Khôi phục chất lượng âm thanh cho các loại loa và hệ thống âm thanh.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    linkUrl: "/services/speaker-repair",
  },
  {
    id: "3",
    title: "Sửa Chữa Quạt",
    description: "Dịch vụ sửa chữa quạt điện các loại nhanh chóng, hiệu quả.",
    image:
      "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=600&q=80",
    linkUrl: "/services/fan-repair",
  },
  {
    id: "4",
    title: "Sửa Chữa Nồi Cơm",
    description: "Dịch vụ sửa chữa nồi cơm điện và các thiết bị nhà bếp khác.",
    image:
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=600&q=80",
    linkUrl: "/services/cooker-repair",
  },
];

export default RepairServicesPreview;
