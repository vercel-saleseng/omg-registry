import { cn } from "@/lib/utils";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/tokens.css";
import "@/app/globals.css";
import { BrandHeader } from "@/components/brand-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const breadcrumbs = [
    { label: "Stores", href: "/stores" },
    { label: "General", href: "/stores/general" },
    { label: "Product", href: "/stores/general/product" },
    { label: "List" },
  ];

  const actions = (
    <>
      <Button variant="outline" className="w-full md:w-auto">
        Standard Button
      </Button>
      <Button className="w-full bg-primary hover:bg-green-700 md:w-auto">
        Standard Button
      </Button>
    </>
  );

  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background",
        "text-foreground",
      )}
    >
      <body className="flex min-h-screen flex-col">
        <BrandHeader />
        <div className="mt-16">
          <Breadcrumbs items={breadcrumbs} />
          <PageHeader title="Header" actions={actions} />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
