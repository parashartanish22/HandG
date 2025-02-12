"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Film, Camera, Users, Phone, Menu, Instagram } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Portfolio", href: "/portfolio", icon: Film },
  { name: "Services", href: "/services", icon: Camera },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          HnG Productions
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              {/* Instagram Link */}
              <NavigationMenuItem>
                <a
                  href="https://www.instagram.com/hng_productions?igsh=YXllY3htbTlkNjRw&utm_source=qr" // update with your Instagram URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navigationMenuTriggerStyle()}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow us on Insta
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
              {/* Mobile Instagram Link */}
              <a
                href="https://instagram.com/yourprofile" // update with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow us on Insta
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
