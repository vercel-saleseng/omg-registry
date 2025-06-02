import { BrandHeader } from "@/components/brand-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

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
    <div className="flex min-h-screen min-w-screen flex-col">
      <BrandHeader />
      <div className="mt-16">
        <Breadcrumbs items={breadcrumbs} />
        <PageHeader title="Header" actions={actions} />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
