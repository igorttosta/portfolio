/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { GithubIcon, LinkedinIcon, Contact } from 'lucide-react';
import NestedModal from "@/components/Modal";
import About from "../json/about.json";

// Social links data
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
    label: "Contact",
    hoverColor: "hover:bg-[#d44638]",
    isModal: true
  }
];

const ProfileImage = () => (
  <div className="relative group mx-auto md:mx-10 w-fit">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500">
      <div className="absolute inset-0 animate-spin-slow" />
    </div>
    <div className="relative rounded-full overflow-hidden h-48 w-48 md:h-64 md:w-64">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 group-hover:opacity-0 transition duration-500" />
      <img
        src="/assets/image/it-image.png"
        alt="Igor Tosta"
        width={256}
        height={256}
        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
      />
    </div>
  </div>
);

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
  
const Profile = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background to-background/95 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto">
        <article className="backdrop-blur-sm bg-background/50 dark:bg-background/20 rounded-2xl border border-border shadow-2xl">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 p-8 md:p-12">
            <div className="space-y-8">
              <ProfileImage />
              <SocialLinks />
            </div>

            <div className="space-y-8 text-center md:text-left" >
              <header className="space-y-4">
                <div className="font-edu-nsw text-2xl md:text-3xl">
                  <Typography variant="h5" className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                      About me
                  </Typography>
                </div>
              </header>
              {About.map((item, index) => (
                <AccordionDetails
                  key={index}
                  className="space-y-3 text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  <Typography variant="body1">
                    {`Experienced Software Engineer with a solid background in fullstack development, 
                    backend systems, and microservices architecture, specialized in building robust 
                    and scalable applications.

                    I have over 3 years of experience creating and maintaining high-performance 
                    systems, always aiming to enhance user experience and improve overall 
                    system reliability.`}
                  </Typography>
                  <Typography variant="body1">Technologies:</Typography>
                  <ul className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    {item.tecnologies.map((technology, techIndex) => (
                      <li key={techIndex}> {/* Aqui também adicionamos uma key única */}
                        <Typography variant="body2">{technology}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Typography variant="body1">
                    {`Passionate about solving complex challenges, I thrive in dynamic environments, 
                    focusing on delivering quality work that adds value to the product and enhances 
                    user experience.

                    Committed to continuous learning, I embrace new technologies and industry trends 
                    while fostering collaboration and teamwork to achieve common goals and drive success.`}
                  </Typography>
                </AccordionDetails>
              ))}
              
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Profile;