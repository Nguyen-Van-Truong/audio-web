import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  Tv,
  Speaker,
  Fan,
  Utensils,
  Wrench,
  ShoppingCart,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

interface CategoryItem {
  name: string;
  href: string;
  subcategories?: CategoryItem[];
}

const Sidebar = ({ isOpen = true, onToggle = () => {} }: SidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const productCategories: CategoryItem[] = [
    {
      name: "Loa",
      href: "/products/speakers",
      subcategories: [
        { name: "Loa Bluetooth", href: "/products/speakers/bluetooth" },
        { name: "Loa Soundbar", href: "/products/speakers/soundbars" },
        {
          name: "Dàn Âm Thanh",
          href: "/products/speakers/home-theater",
        },
      ],
    },
    {
      name: "Tivi",
      href: "/products/tvs",
      subcategories: [
        { name: "Tivi OLED", href: "/products/tvs/oled" },
        { name: "Tivi LED", href: "/products/tvs/led" },
        { name: "Tivi Thông Minh", href: "/products/tvs/smart" },
      ],
    },
    {
      name: "Quạt",
      href: "/products/fans",
      subcategories: [
        { name: "Quạt Trần", href: "/products/fans/ceiling" },
        { name: "Quạt Bàn", href: "/products/fans/table" },
        { name: "Quạt Đứng", href: "/products/fans/tower" },
      ],
    },
    {
      name: "Nồi Cơm",
      href: "/products/cookers",
      subcategories: [
        { name: "Nồi Cơm Điện", href: "/products/cookers/rice" },
        { name: "Nồi Áp Suất", href: "/products/cookers/pressure" },
        { name: "Nồi Nấu Chậm", href: "/products/cookers/slow" },
      ],
    },
  ];

  const repairServices: CategoryItem[] = [
    { name: "Sửa Tivi", href: "/services/tv-repair" },
    { name: "Sửa Loa", href: "/services/speaker-repair" },
    { name: "Sửa Quạt", href: "/services/fan-repair" },
    { name: "Sửa Nồi Cơm", href: "/services/cooker-repair" },
  ];

  const getCategoryIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "speakers":
        return <Speaker className="h-5 w-5" />;
      case "tvs":
        return <Tv className="h-5 w-5" />;
      case "fans":
        return <Fan className="h-5 w-5" />;
      case "cookers":
        return <Utensils className="h-5 w-5" />;
      default:
        return <Wrench className="h-5 w-5" />;
    }
  };

  return (
    <div className="relative h-full bg-white sticky top-0">
      {/* Sidebar toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-10 top-4 z-10 rounded-full bg-white shadow-md"
        onClick={onToggle}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>

      {/* Sidebar content */}
      <div
        className={cn(
          "h-screen w-[280px] overflow-y-auto border-r border-gray-200 bg-white transition-all duration-300 ease-in-out fixed",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-4">
          <div className="mb-6 flex items-center space-x-2">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">ĐiệnTửVN</span>
          </div>

          {/* Quick links */}
          <div className="mb-6 space-y-2">
            <a
              href="/"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Home className="h-4 w-4" />
              <span>Trang Chủ</span>
            </a>
            <a
              href="/cart"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Giỏ Hàng</span>
            </a>
            <a
              href="/wishlist"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Heart className="h-4 w-4" />
              <span>Yêu Thích</span>
            </a>
          </div>

          {/* Product Categories */}
          <div className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-gray-500">
              Danh Mục Sản Phẩm
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {productCategories.map((category) => (
                <AccordionItem
                  key={category.name}
                  value={category.name}
                  className="border-b-0"
                >
                  <AccordionTrigger className="px-3 py-2 hover:bg-gray-100 hover:no-underline">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(category.name)}
                      <span>{category.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10">
                    <div className="space-y-1">
                      {category.subcategories?.map((subcategory) => (
                        <a
                          key={subcategory.name}
                          href={subcategory.href}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {subcategory.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Repair Services */}
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-gray-500">
              Dịch Vụ Sửa Chữa
            </h3>
            <div className="space-y-1">
              {repairServices.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <Wrench className="h-4 w-4" />
                  <span>{service.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
