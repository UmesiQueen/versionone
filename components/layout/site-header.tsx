"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import Logo from "@/app/assets/VersionOne.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Immigration",
    href: "/immigration",
    children: [
      { label: "Migrate", href: "/migrate" },
      { label: "Work Abroad", href: "/work-abroad" },
      { label: "Study Abroad", href: "/study-abroad" },
    ],
  },
  {
    label: "Travel",
    href: "/travel",
    children: [
      { label: "Visit", href: "/visit" },
      { label: "Tour Packages", href: "/tour-packages" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Investment", href: "/investment" },
];

function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [expandedMobile, setExpandedMobile] = React.useState<string | null>(
    null,
  );

  const toggleMobileSection = (label: string) => {
    setExpandedMobile((current) => (current === label ? null : label));
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setExpandedMobile(null);
    }
  };

  return (
    <header data-slot="site-header" className="sticky top-0 z-40 w-full">
      <div className="absolute top-3 bg-white mx-auto flex h-18 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <Link href="/" className="h-14 w-fit">
          <Image
            src={Logo}
            alt="VersionOne logo"
            className="h-full w-full object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex w-fit"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <DropdownMenu key={link.href}>
                <DropdownMenuTrigger className="group relative inline-flex items-center gap-1 py-1 text-base font-medium text-[#344054] outline-none transition-colors duration-400 ease-out hover:text-secondary focus-visible:text-secondary data-[state=open]:text-secondary">
                  <span>{link.label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
                  />
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full group-data-[state=open]:w-full" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={12}>
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 text-base font-medium text-[#344054] transition-colors duration-400 ease-out hover:text-secondary"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full bg-secondary transition-all duration-500 ease-out" />
              </Link>
            ),
          )}
        </nav>

        <div className=" group hidden lg:block p-px rounded-full bg-linear-to-b from-[#004E99]/40 to-[#004E99] hover:to-blue-950/80 transition-colors duration-300 ease-in-out">
          <Button
            asChild
            size="lg"
            className="rounded-full px-5 bg-linear-to-b from-[#004E99]/60 to-[#004E99] text-white group-hover:to-blue-950/80 transition-colors duration-300 ease-in-out"
          >
            <Link href="#consultation">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
              className=" lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-2 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                if (!link.children) {
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-3 text-base font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                }

                const isExpanded = expandedMobile === link.label;
                const submenuId = `mobile-submenu-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`;

                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(link.label)}
                      aria-expanded={isExpanded}
                      aria-controls={submenuId}
                      className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform duration-300 ease-out ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <ul
                        id={submenuId}
                        className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-3"
                      >
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <SheetClose asChild>
                              <Link
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="mt-4">
              <SheetClose asChild>
                <div className="p-px rounded-full bg-linear-to-b from-[#004E99]/40 to-[#004E99]">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-10 w-full px-5 bg-linear-to-b from-[#004E99]/60 to-[#004E99] text-white hover:bg-linear-to-b hover:from-[#004E99]/10 hover:to-[#004E99]/30 transition-all duration-300 ease-out"
                  >
                    <Link href="#">Get in Touch</Link>
                  </Button>
                </div>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export { SiteHeader };
