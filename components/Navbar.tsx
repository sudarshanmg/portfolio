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
      <nav className="flex items-center gap-1 px-2 py-2 rounded-full bg-[#111111] border border-white/10 shadow-lg shadow-black/50 backdrop-blur-sm">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={twMerge(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-orange-500 text-black font-semibold"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
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
