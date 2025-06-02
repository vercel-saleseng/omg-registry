"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="w-full bg-input px-4 py-3">
      {/* Mobile back button */}
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="sm" className="p-0 text-muted-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          List
        </Button>
      </div>

      {/* Desktop breadcrumbs */}
      <nav className="hidden items-center space-x-1 text-muted-foreground text-sm md:flex">
        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex items-center">
            {index > 0 && <ChevronRight className="mx-1 h-4 w-4" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
