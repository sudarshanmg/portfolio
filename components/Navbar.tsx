"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const pathname = usePathname();
  const routes: {
    title: string;
    href: string;
    active?: boolean;
  }[] = [
    {
      title: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      title: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      title: "Projects",
      href: "/projects",
      active: pathname === "/projects",
    },
    {
      title: "Wall",
      href: "/wall",
      active: pathname === "/contact",
    },
  ];
  return (
    <div className="flex justify-center">
      <nav className="my-4 mx-0 flex justify-center w-full rounded-none hover:bg-inherit shadow-none bg-transparent overflow-hidden lg:rounded-full lg:bg-inherit lg:shadow-slate-700 lg:shadow-inner sm:w-auto sm:mx-4">
        <NavigationMenu className="p-2">
          <NavigationMenuList className="bg-transparent rounded-full">
            {routes.map((route, index) => (
              <div className="flex items-center" key={route.title}>
                <NavigationMenuItem>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={twMerge(
                        navigationMenuTriggerStyle(),
                        "bg-transparent rounded-full"
                      )}
                      active={route.active}
                    >
                      {route.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {index !== routes.length - 1 && (
                  <Separator orientation="vertical" className="h-[30px] m-1" />
                )}
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
    // </div>
  );
};

export default Navbar;
