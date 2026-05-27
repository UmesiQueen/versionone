"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

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
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHidden, setIsHidden] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const pathname = usePathname();

  React.useEffect(() => {
    let scrollStopTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      // Always show the header at the top of the page
      if (window.scrollY === 0) {
        if (scrollStopTimeout) {
          clearTimeout(scrollStopTimeout);
          scrollStopTimeout = null;
        }
        setIsHidden(false);
        setIsAtTop(true);
        return;
      }

      // Hide while scrolling is in progress
      setIsHidden(true);
      setIsAtTop(false);

      // Reset the "scroll stopped" timer on every scroll event
      if (scrollStopTimeout) {
        clearTimeout(scrollStopTimeout);
      }
      scrollStopTimeout = setTimeout(() => {
        setIsHidden(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollStopTimeout) {
        clearTimeout(scrollStopTimeout);
      }
    };
  }, []);

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
      <div
        aria-hidden={isHidden}
        className={cn(
          "absolute top-0 w-full h-16 shadow-md flex items-end backdrop-blur-sm transform-gpu transition-transform duration-300 ease-out will-change-transform",
          isHidden ? "-translate-y-full" : "translate-y-0",
          isAtTop ? "sm:h-22" : "sm:h-18",
        )}
      >
        <div className="bg-white mx-auto h-16 sm:h-18 w-full flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="h-12 sm:h-14">
            <Image
              src={Logo}
              alt="VersionOne logo"
              className="h-full w-fit object-contain"
            />
          </Link>
          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex w-fit"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <DropdownMenu
                  key={link.href}
                  open={openMenu === link.href}
                  onOpenChange={(isOpen) =>
                    setOpenMenu(isOpen ? link.href : null)
                  }
                >
                  <DropdownMenuTrigger
                    onMouseEnter={() => setOpenMenu(link.href)}
                    onMouseLeave={() => setOpenMenu(null)}
                    data-status={
                      link.children.some((child) => child.href === pathname) &&
                      "active"
                    }
                    className=" rounded-none bg-transparent group relative inline-flex items-center gap-1 py-1 text-base font-medium text-[#344054] outline-none transition-colors duration-400 ease-out hover:text-secondary data-[status=active]:text-secondary focus-visible:text-secondary data-[state=open]:text-secondary"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
                    />
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full group-data-[status=active]:w-full group-data-[state=open]:w-full" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={3}
                    className="rounded-none border-none p-2"
                    onMouseEnter={() => setOpenMenu(link.href)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    {link.children.map((child) => (
                      <DropdownMenuItem
                        key={child.href}
                        data-status={child.href === pathname && "active"}
                        className="data-[status=active]:text-secondary"
                        asChild
                      >
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  data-status={link.href === pathname && "active"}
                  className="group relative py-1 text-base font-medium text-[#344054] transition-colors duration-400 ease-out hover:text-secondary data-[status=active]:text-secondary"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full group-data-[state=active]:w-full group-data-[status=active]:w-full bg-secondary transition-all duration-500 ease-out" />
                </Link>
              ),
            )}
          </nav>
          <div className="hidden lg:block">
            <Button
              asChild
              size="xl"
              className="rounded-full px-5 border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
            >
              <Link href="/contact">Get in Touch</Link>
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
            <SheetContent side="right" className="w-full px-3">
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
                          data-status={link.href === pathname && "active"}
                          className="rounded-md p-3 text-base font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-[status=active]:text-secondary"
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
                        data-status={
                          link.children.some(
                            (child) => child.href === pathname,
                          ) && "active"
                        }
                        className="flex items-center justify-between rounded-md p-3 text-base font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-[status=active]:text-secondary"
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
                                  data-status={
                                    child.href === pathname && "active"
                                  }
                                  className="block rounded-md px-3 py-2 text-[15px] font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-[status=active]:text-secondary"
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
              <div className="mt-4 space-y-3">
                <SheetClose asChild>
                  <Button
                    asChild
                    size="xl"
                    className="rounded-full px-5 w-full border border-blue-900/60 bg-linear-to-b from-blue-400 via-blue-500/70 to-blue-950/40 text-white/90 hover:text-white hover:border-blue-900 hover:via-blue-600 hover:to-blue-950 hover:shadow-lg transition-colors duration-300 ease-in-out"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="rounded-full px-5 w-full border-primary/10 shadow-sm"
                  >
                    <Link href="/book-consultation">Book a Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
