"use client";
import ProjectCard from "@/components/project_card/card";
import React from "react";

export default function page() {
  return (
    <div className="grid sm:grid-cols-3 gap-10">
      {/* left column */}
      <div className="grid grid-flow-row gap-10 order-2 sm:order-1">
        <div>
          <ProjectCard
            link="/projects/projectDetails/uniThrift"
            live="https://bewear-three.vercel.app"
            title="Bewear"
            description="Bewear loja de roupas online"
          />
        </div>
        <div>
          <ProjectCard
            link="/projects/projectDetails/kms"
            live="https://knowledge-management-system.vercel.app"
            title="H&K Knowledge Management System"
            description="Next gen bot for crypto-currencies."
            imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
          />
        </div>
      </div>
      {/* right column */}
      <div className="grid sm:col-span-2 order-1 sm:order-2 gap-10">
        <div className="flex items-center justify-center">
          <h1 className="uppercase text-4xl font-bold">Todos os Projetos</h1>
        </div>
        <div className=" grid sm:grid-cols-2 gap-10">
          <div>
            <ProjectCard
              link="/projetos/detalhes/rb-beauty"
              live="https://rbeuaty.vercel.app"
              title="Agendamento de Beleza"
              description="Sistema de agendamento de beleza"
            />
          </div>
          <div>
            <ProjectCard
              link="/projects/projectDetails/eVoting"
              title="H&L E-Voting System"
              description="Next gen bot for crypto-currencies."
              imageUrl="https://necatikcl.dev/images/works/cryptosea.png"
            />
          </div>
          <div>
            <ProjectCard
              title="Rota Norte Noticias"
              description="Refatoracao do site de noticias"
              imageUrl="/projects/rotanortescreenshot.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
