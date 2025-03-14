import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  slides?: {
    id: number;
    image: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  }[];
}

const HeroSection = ({
  slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=1200&q=80",
      title: "Thiết Bị Điện Tử Thế Hệ Mới",
      description:
        "Khám phá bộ sưu tập thiết bị điện tử hiện đại nhất cho ngôi nhà và văn phòng của bạn.",
      ctaText: "Mua Ngay",
      ctaLink: "/products/featured",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&q=80",
      title: "Hệ Thống Âm Thanh Cao Cấp",
      description:
        "Trải nghiệm âm thanh sống động với dòng loa và hệ thống âm thanh cao cấp của chúng tôi.",
      ctaText: "Khám Phá",
      ctaLink: "/products/speakers",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=80",
      title: "Dịch Vụ Sửa Chữa Chuyên Nghiệp",
      description:
        "Sửa chữa thiết bị điện tử của bạn bởi đội ngũ kỹ thuật viên chuyên nghiệp với dịch vụ sửa chữa đáng tin cậy.",
      ctaText: "Đặt Lịch",
      ctaLink: "/services/repair",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=1200&q=80",
      title: "Khuyến Mãi Đặc Biệt Tháng Này",
      description:
        "Giảm giá lên đến 50% cho các sản phẩm điện tử cao cấp. Cơ hội có hạn, hãy mua ngay hôm nay!",
      ctaText: "Xem Ưu Đãi",
      ctaLink: "/promotions",
    },
  ],
}: HeroSectionProps) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full bg-background relative overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                  <div className="container mx-auto px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-lg text-white"
                    >
                      <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-lg mb-6">{slide.description}</p>
                      <Button className="group">
                        {slide.ctaText}
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
