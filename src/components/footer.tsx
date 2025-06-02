import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-700 py-2 text-center text-slate-300 text-xs">
      <div className="flex flex-col items-end justify-end space-y-2 px-4 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center space-x-1.5">
          <Twitter className="h-4 w-4" />
          <Facebook className="h-4 w-4" />
          <span>|</span>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy & Terms
          </Link>
          <span>|</span>
          <span>© 2008-2024 OrderMyGear LLC</span>
        </div>
      </div>
    </footer>
  );
}
