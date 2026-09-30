/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import SocialLinks from "@/components/SocialLinks";
import About from "../json/about.json";

const ProfileImage = () => (
  <div className="relative group mx-auto w-fit">
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
                      Sobre mim
                  </Typography>
                </div>
              </header>
              {About.map((item, index) => (
                <AccordionDetails
                  key={index}
                  className="space-y-3 text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  <Typography variant="body1">
                    {`Engenheiro de Software com base sólida em desenvolvimento fullstack, sistemas
                    backend e arquitetura de microsserviços, especializado em construir aplicações
                    robustas e escaláveis.

                    Tenho 4 anos de experiência criando e mantendo sistemas de alta performance,
                    sempre buscando melhorar a experiência do usuário e a confiabilidade geral
                    do sistema.`}
                  </Typography>
                  <Typography variant="body1">Tecnologias:</Typography>
                  <ul className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    {item.tecnologies.map((technology, techIndex) => (
                      <li key={techIndex}> {/* Aqui também adicionamos uma key única */}
                        <Typography variant="body2">{technology}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Typography variant="body1">
                    {`Apaixonado por resolver desafios complexos, prospero em ambientes dinâmicos,
                    focando em entregar um trabalho de qualidade que agrega valor ao produto e
                    melhora a experiência do usuário.

                    Comprometido com o aprendizado contínuo, abraço novas tecnologias e tendências
                    do mercado, ao mesmo tempo em que promovo colaboração e trabalho em equipe para
                    alcançar objetivos em comum e impulsionar resultados.`}
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