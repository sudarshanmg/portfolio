"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const routes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Wall", href: "/wall" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center pt-6 px-4 sticky top-0 z-50">
      <nav className="flex items-center gap-1 px-2 py-2 bg-[#111111] border-2 border-white/20 brutal-shadow-sm">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={twMerge(
                "px-4 py-1.5 text-sm font-mono font-bold uppercase tracking-wide transition-all duration-150 border-2 border-transparent",
                isActive
                  ? "bg-orange-500 text-black"
                  : "text-neutral-400 hover:text-white hover:border-white/20"
              )}
            >
              {route.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
