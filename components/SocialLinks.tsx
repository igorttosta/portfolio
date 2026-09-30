"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Contact } from 'lucide-react';
import NestedModal from "@/components/Modal";

const SOCIAL_LINKS = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/matos-igor-tosta/",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0077b5]"
  },
  {
    icon: GithubIcon,
    href: "https://github.com/igorttosta",
    label: "GitHub",
    hoverColor: "hover:bg-[#333]"
  },
  {
    icon: Contact,
    label: "Contato",
    hoverColor: "hover:bg-[#d44638]",
    isModal: true
  }
];

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NestedModal open={isOpen} onClose={() => setIsOpen(false)} />

      <div className="flex flex-wrap gap-10 justify-center">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverColor, isModal }) =>
        isModal ? (
          <button
            key={label}
            onClick={() => setIsOpen(true)}
            className={`group relative p-2 md:p-3 bg-background dark:bg-background/80 rounded-full text-foreground transition-all duration-300 ${hoverColor} hover:text-white`}
            aria-label={label}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 duration-300" />
          </button>
        ) : href ? (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`group relative p-2 md:p-3 bg-background dark:bg-background/80 rounded-full text-foreground transition-all duration-300 ${hoverColor} hover:text-white`}
            aria-label={label}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110 duration-300" />
          </Link>
        ) : null
      )}
      </div>
    </>
  );
}

export default SocialLinks;
