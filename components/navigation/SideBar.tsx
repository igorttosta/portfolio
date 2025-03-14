/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/theme-toggle";
import { CodeXml, Folder, VideoIcon, MenuIcon, BriefcaseBusiness, CircleUser } from "lucide-react";

interface NavigationItem {
  name: string;
  link: string;
  icon: React.ElementType;
  margin?: boolean;
  external?: boolean;
  target?: string;
}

interface LogoProps {
  open: boolean;
  onClick: () => void;
}

interface NavigationItemProps {
  item: NavigationItem;
  open: boolean;
  onClick: () => void;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Profile", link: "#profile", icon: CircleUser, external: false },
  { name: "Projects", link: "#projects", icon: Folder, external: false },
  { name: "Video", link: "#video", icon: VideoIcon, external: false },
  { name: "Experiences", link: "#experiences", icon: BriefcaseBusiness, external: false },
  { name: "Code", link: "https://github.com/igorttosta/portfolio", icon: CodeXml, target: "_blank", external: true },
];

const NavigationItem: React.FC<NavigationItemProps> = ({ item, open, onClick }) => {
  const isExternal = item.external;

  return (
    <Link
      href={item.link}
      onClick={!isExternal ? onClick : undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center text-sm gap-3.5 font-medium p-2",
        "hover:text-gray-100 hover:bg-gray-800 rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "transition-colors duration-200",
        item.margin && "mt-5"
      )}
    >
      <div aria-hidden="true">
        {React.createElement(item.icon, { size: "20" })}
      </div>
      <span
        className={cn(
          "whitespace-pre transition-all duration-200",
          !open && "opacity-0 translate-x-28 overflow-hidden"
        )}
        style={{ transitionDelay: `${NAVIGATION_ITEMS.indexOf(item) + 7}0ms` }}
      >
        {item.name}
      </span>
      <span
        className={cn(
          "absolute left-48 bg-white font-semibold whitespace-pre text-gray-900",
          "rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden",
          "group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit",
          open && "hidden"
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};

const Logo: React.FC<LogoProps> = ({ open, onClick }) => (
  <Link
    href="/"
    className={cn(
      "flex items-center gap-2 transition-all duration-200",
      !open && "w-0"
    )}
    onClick={onClick}
  >
    {open && <span className="text-2xl">{`{`}</span>}
    <img
      src="/assets/image/logo.png"
      alt="Igor Tosta Logo"
      width={25}
      height={25}
      className="rounded-xl"
    />
    {open && <span className="text-2xl">{`}`}</span>}
  </Link>
);

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed z-50 flex gap-6 min-h-screen"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        ref={sidebarRef}
        className={cn(
          "bg-transparent px-4 transition-all duration-300",
          open ? "w-72 backdrop-blur" : "w-12 md:w-16"
        )}
      >
        <div className="flex min-w-full justify-between py-3">
          <Logo open={open} onClick={() => setOpen(false)} />
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-3 h-9 w-9"
          >
            <MenuIcon size={50} />
          </Button>
        </div>

        <div
          className={cn(
            "mt-4 flex flex-col gap-2 relative",
            !open && "hidden md:block"
          )}
        >
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationItem
              key={item.name}
              item={item}
              open={open}
              onClick={() => open && setOpen(false)}
            />
          ))}
          <div className={cn("mt-5", !open && "flex justify-center")}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;