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
      title: "Next-Gen Electronics",
      description:
        "Discover our latest collection of cutting-edge electronics for your home and office.",
      ctaText: "Shop Now",
      ctaLink: "/products/featured",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&q=80",
      title: "Premium Sound Systems",
      description:
        "Experience immersive audio with our premium range of speakers and sound systems.",
      ctaText: "Explore Audio",
      ctaLink: "/products/speakers",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&q=80",
      title: "Expert Repair Services",
      description:
        "Get your electronics fixed by certified technicians with our reliable repair services.",
      ctaText: "Book Service",
      ctaLink: "/services/repair",
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
