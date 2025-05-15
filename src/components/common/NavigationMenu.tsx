"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { menuItems, MenuItem } from "@/configuration/navigation";
import { cn } from "@/utils/cnFunction";

export function AppNavigationMenu() {
  const pathname = usePathname();

  const renderMenuItem = (item: MenuItem) => {
    const isActive = pathname === item.href;

    if (item.children && item.children.length > 0) {
      return (
        <NavigationMenuItem key={item.label}>
          <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-2">
              {item.children.map((child) => (
                <li key={child.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href || "#"}
                      className={cn(
                        "block rounded px-3 py-1 text-sm hover:bg-accent",
                        pathname === child.href &&
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      {child.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={item.label}>
        <NavigationMenuLink asChild>
          <Link
            href={item.href || "#"}
            className={cn(
              "block rounded px-4 py-2 text-sm hover:bg-accent",
              isActive && "bg-accent text-accent-foreground"
            )}
          >
            {item.label}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>{menuItems.map(renderMenuItem)}</NavigationMenuList>
    </NavigationMenu>
  );
}
