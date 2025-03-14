import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import HeroSection from "./home/HeroSection";
import FeaturedDeals from "./home/FeaturedDeals";
import RepairServicesPreview from "./home/RepairServicesPreview";
import ProductCard from "./products/ProductCard";
import ServiceCard from "./services/ServiceCard";

interface SidebarCategoryProps {
  title: string;
  items: { name: string; href: string }[];
}

const SidebarCategory = ({ title, items = [] }: SidebarCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="flex items-center justify-between py-2">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between p-2 font-medium"
          >
            {title}
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pl-4 space-y-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block py-2 px-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
          >
            {item.name}
          </a>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

const Sidebar = () => {
  const categories = [
    {
      title: "Audio",
      items: [
        { name: "Speakers", href: "/products/speakers" },
        { name: "Headphones", href: "/products/headphones" },
        { name: "Sound Systems", href: "/products/sound-systems" },
      ],
    },
    {
      title: "Video",
      items: [
        { name: "TVs", href: "/products/tvs" },
        { name: "Projectors", href: "/products/projectors" },
        { name: "Media Players", href: "/products/media-players" },
      ],
    },
    {
      title: "Home Appliances",
      items: [
        { name: "Fans", href: "/products/fans" },
        { name: "Cookers", href: "/products/cookers" },
        { name: "Refrigerators", href: "/products/refrigerators" },
      ],
    },
    {
      title: "Repair Services",
      items: [
        { name: "TV Repair", href: "/services/tv-repair" },
        { name: "Audio Repair", href: "/services/audio-repair" },
        { name: "Phone Repair", href: "/services/phone-repair" },
        { name: "Computer Repair", href: "/services/computer-repair" },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-white p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        <Separator className="mb-4" />
        <div className="space-y-1">
          {categories.map((category, index) => (
            <SidebarCategory
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <a href="/" className="text-2xl font-bold ml-2 md:ml-0">
            ElectroFix
          </a>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products and services..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-white">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ElectroFix</h3>
            <p className="text-gray-400">
              Your one-stop shop for electronics and repair services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-400 hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/products/featured"
                  className="text-gray-400 hover:text-white"
                >
                  Featured Deals
                </a>
              </li>
              <li>
                <a
                  href="/products/new"
                  className="text-gray-400 hover:text-white"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  All Services
                </a>
              </li>
              <li>
                <a
                  href="/services/repair"
                  className="text-gray-400 hover:text-white"
                >
                  Repair Services
                </a>
              </li>
              <li>
                <a
                  href="/services/installation"
                  className="text-gray-400 hover:text-white"
                >
                  Installation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Electronics Ave</li>
              <li className="text-gray-400">Tech City, TC 12345</li>
              <li className="text-gray-400">support@electrofix.com</li>
              <li className="text-gray-400">(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ElectroFix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="flex">
          <div className="hidden md:block w-[280px] h-[calc(100vh-80px)] sticky top-20 border-r">
            <Sidebar />
          </div>
          <div className="flex-1">
            <HeroSection />
            <FeaturedDeals />
            <RepairServicesPreview />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
