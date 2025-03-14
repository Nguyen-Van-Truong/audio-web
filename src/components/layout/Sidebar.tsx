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
      name: "Speakers",
      href: "/products/speakers",
      subcategories: [
        { name: "Bluetooth Speakers", href: "/products/speakers/bluetooth" },
        { name: "Soundbars", href: "/products/speakers/soundbars" },
        {
          name: "Home Theater Systems",
          href: "/products/speakers/home-theater",
        },
      ],
    },
    {
      name: "TVs",
      href: "/products/tvs",
      subcategories: [
        { name: "OLED TVs", href: "/products/tvs/oled" },
        { name: "LED TVs", href: "/products/tvs/led" },
        { name: "Smart TVs", href: "/products/tvs/smart" },
      ],
    },
    {
      name: "Fans",
      href: "/products/fans",
      subcategories: [
        { name: "Ceiling Fans", href: "/products/fans/ceiling" },
        { name: "Table Fans", href: "/products/fans/table" },
        { name: "Tower Fans", href: "/products/fans/tower" },
      ],
    },
    {
      name: "Cookers",
      href: "/products/cookers",
      subcategories: [
        { name: "Rice Cookers", href: "/products/cookers/rice" },
        { name: "Pressure Cookers", href: "/products/cookers/pressure" },
        { name: "Slow Cookers", href: "/products/cookers/slow" },
      ],
    },
  ];

  const repairServices: CategoryItem[] = [
    { name: "TV Repair", href: "/services/tv-repair" },
    { name: "Speaker Repair", href: "/services/speaker-repair" },
    { name: "Fan Repair", href: "/services/fan-repair" },
    { name: "Cooker Repair", href: "/services/cooker-repair" },
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
    <div className="relative h-full bg-white">
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
          "h-full w-[280px] overflow-y-auto border-r border-gray-200 bg-white transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-4">
          <div className="mb-6 flex items-center space-x-2">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">ElectroShop</span>
          </div>

          {/* Quick links */}
          <div className="mb-6 space-y-2">
            <a
              href="/"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a
              href="/cart"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
            </a>
            <a
              href="/wishlist"
              className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </a>
          </div>

          {/* Product Categories */}
          <div className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-gray-500">
              Product Categories
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
              Repair Services
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
