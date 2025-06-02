"use client";

import { ChevronDown, HelpCircle, Menu, Search, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-700 text-white">
      <div className="flex h-16 w-full items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden items-center space-x-3.5 lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-slate-600"
                >
                  Stores
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Store 1</DropdownMenuItem>
                <DropdownMenuItem>Store 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-slate-600"
                >
                  Manage
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-slate-600"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Product 1</DropdownMenuItem>
                <DropdownMenuItem>Product 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/catalogs">
              <Button variant="ghost" className="text-white hover:bg-slate-600">
                Catalogs
              </Button>
            </Link>

            <Link href="/accounting">
              <Button variant="ghost" className="text-white hover:bg-slate-600">
                Accounting
              </Button>
            </Link>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Search - Desktop */}
          <div className="hidden lg:block">
            {isSearchOpen ? (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  className="h-9 w-64 border-slate-500 bg-slate-600 text-white placeholder:text-slate-300 focus-visible:ring-slate-400"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute top-2.5 right-3 h-4 w-4 text-slate-300" />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-slate-600"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Search - Mobile/Tablet */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-600 lg:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Help - Desktop only */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-white hover:bg-slate-600 lg:flex"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>

          {/* Settings - Desktop only */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-white hover:bg-slate-600 lg:flex"
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* Company Dropdown - Desktop only */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white text-slate-700 hover:bg-slate-100"
                >
                  OMG Creative Services
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Service 1</DropdownMenuItem>
                <DropdownMenuItem>Service 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-600 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="w-full border-slate-600 border-t bg-slate-700 lg:hidden">
          <div className="space-y-1 px-4 py-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-600"
            >
              Stores
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-600"
            >
              Manage
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-600"
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-600"
            >
              Catalogs
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-slate-600"
            >
              Accounting
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
