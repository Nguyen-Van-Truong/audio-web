import React from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header = ({ onToggleSidebar = () => {} }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Left section with logo and menu toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">ĐiệnTửVN</span>
          </div>
        </div>

        {/* Center section with navigation links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary">
            Trang Chủ
          </a>
          <a
            href="/products"
            className="text-sm font-medium hover:text-primary"
          >
            Sản Phẩm
          </a>
          <a
            href="/services"
            className="text-sm font-medium hover:text-primary"
          >
            Dịch Vụ Sửa Chữa
          </a>
          <a href="/about" className="text-sm font-medium hover:text-primary">
            Giới Thiệu
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-primary">
            Liên Hệ
          </a>
        </nav>

        {/* Right section with search, account, and cart */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-[200px] lg:w-[300px] pl-8"
            />
          </div>

          {/* User account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="User account"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Tài Khoản Của Tôi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Hồ Sơ</DropdownMenuItem>
              <DropdownMenuItem>Đơn Hàng</DropdownMenuItem>
              <DropdownMenuItem>Danh Sách Yêu Thích</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Đăng Xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping cart */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              variant="destructive"
            >
              3
            </Badge>
          </Button>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
