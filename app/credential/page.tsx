import BootstrapIcon from "@/components/icons/bootstrap";
import CssIcon from "@/components/icons/css";
import HtmlIcon from "@/components/icons/html";
import JavaScriptIcon from "@/components/icons/javascript";
import LaravelIcon from "@/components/icons/laravel";
import LinkedInIcon from "@/components/icons/linkedIn";
import MongoDBIcon from "@/components/icons/mongodb";
import MySQLIcon from "@/components/icons/mysql";
import Nextjs from "@/components/icons/nextjs";
import NodeJs from "@/components/icons/nodeJs";
import PhpIcon from "@/components/icons/php";
import PostgreSQLIcon from "@/components/icons/postgresql";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { BorderBeam } from "@/components/magicui/border-beam";
// import { ScrollProgress } from "@/components/magicui/scroll-progress";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ChevronRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { DownloadIcon, EyeIcon, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
const width = 40;
const height = 40;

export default function Page() {
  const cv = "cv.pdf";
  const contactData = [
    {
      icons: <Instagram />,
      name: "Instagram",
      url: "https://www.instagram.com/fsuknaic/",
    },
    {
      icons: <LinkedInIcon width={28} height={28} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-suknaic/",
    },
    {
      icons: <WhatsappIcon width={28} height={28} />,
      name: "Whatsapp",
      url: "https://wa.me/5568999280070",
    },
  ];
  return (
    <div className="grid gap-10">
      <div className="grid sm:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="card_bg p-10 max-h-fit">
          <div className="flex items-center justify-center">
            <Image src="/_DSC0001.png" alt="profile" width={250} height={100} />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Felipe Suknaic</h1>
            <p>
              <a href="mailto:fsuknaic@hotmail.com" className="opacity-50">
                @fsuknaic
              </a>
            </p>
            <p className="flex gap-4 items-center justify-center">
              {contactData.map((contact, index) => (
                <a href={contact.url} key={index} className="card_bg p-1">
                  {contact.icons}
                </a>
              ))}
            </p>

            <Button className="cursor-pointer z-50">
              <a href="mailto:fsuknaic@hotmail.com">Fale Comigo</a>
            </Button>
          </div>
          {/* <BorderBeam duration={8} size={100} /> */}
        </div>

        {/* Right Section */}
        <div className="grid sm:col-span-2 gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Sobre Min</h2>
            <p className="text-gray-400">
              Sou um desenvolvedor full-stack especializado em desenvolvimento
              back-end, front-end e design de UI/UX. Com experiência em
              JavaScript, React.js, Next.js e Tailwind CSS, crio aplicações web
              escaláveis ​​e fáceis de usar. Minha experiência abrange desde o
              desenvolvimento de plataformas de e-commerce até o design de
              interfaces de usuário intuitivas.
            </p>
          </div>

          {/* Skills Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Linguagens de Programação
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-blue-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <JavaScriptIcon width={width} height={height} />
                      <TypescriptIcon width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <HtmlIcon width={width} height={height} />
                      <CssIcon width={width} height={height} />
                      <PhpIcon width={width} height={height} />
                    </div>
                  </div>
                  <ul className="list-disc ml-6">
                    <li>JavaScript (Ativo)</li>
                    <li>HTML (Proficiente)</li>
                    <li>CSS (Proficiente)</li>
                    <li>PHP (Proficiente)</li>
                  </ul>
                  <BorderBeam duration={6} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <Nextjs width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <ReactIcon width={width} height={height} />
                      <TailwindIcon width={width} height={height} />
                      <LaravelIcon width={width} height={height} />
                      {/* <BootstrapIcon width={width} height={height} /> */}
                    </div>
                  </div>
                  <ul className="list-disc ml-6">
                    <li>Nextjs (Ativo)</li>
                    <li>React (Ativo)</li>
                    <li>Tailwind CSS (Ativo)</li>
                    <li>Laravel (Proficiente)</li>
                  </ul>
                  <BorderBeam duration={5} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Database & Backend
                  </h3>
                  <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                    <PostgreSQLIcon width={width} height={height} />
                    <NodeJs width={width} height={height} />
                  </div>
                  <div className="flex rounded-3xl p-2 gap-4 justify-around">
                    <MySQLIcon width={width} height={height} />
                    <MongoDBIcon width={width} height={height} />
                  </div>

                  <ul className="list-disc ml-6">
                    <li>PostgreSQL (Ativo)</li>
                    <li>Node.js (Ativo)</li>
                    <li>MySQL (Proficiente)</li>
                    <li>MongoDB (Proficiente)</li>
                  </ul>
                  <BorderBeam duration={4} size={100} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Experience Section */}
        <section className="py-12 card_bg px-4 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Experiência</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Desenvolvedor Web / Designer
                </h3>
                <p className="text-gray-500 mb-2 ">
                  Autotec System. Ltda. | Atualmente Ativo
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Desenvolvo e mantenho aplicações web responsivas usando
                    React.js, Tailwind CSS e Node.js.
                  </li>
                </ul>

                <p className="text-gray-500 mb-2 pt-4">
                  RotaNorte Notícias. Ltda. | Atualmente Ativo
                </p>
                <ul className="list-disc ml-6">
                  <li>Desenvolvi e mantenho Portal de Noticias.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Educação</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Curso Superior de Tecnologia (CST) em Sistemas para Internet
                </h3>
                <p className="text-gray-500 mb-2">
                  Instituto Federal de Educação, Ciência e Tecnologia do Acre
                  (IFAC)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Formação Full Stack javascript
                </h3>
                <p className="text-gray-500 mb-2">Rocketseat | 2023 – 2024</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <section className="dark:bg-background/5  card_bg rounded-full flex items-center justify-between px-10 overflow-hidden ">
          <div className="flex flex-col uppercase">
            <span className=" opacity-50">CV 2025</span>
            <h1 className=" font-bold text-2xl">Resumo</h1>
          </div>

          <div className="flex gap-6">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium"
            >
              <EyeIcon />
            </a>

            <a href={cv} download>
              <DownloadIcon />
            </a>
          </div>
        </section>
        <section className="card_bg p-4">
          <div className="container mx-auto px-4">
            <div className="flex">
              <div>
                <h1 className="font-bold text-4xl">Vamos</h1>
                <h2 className="font-bold text-4xl">Trabalhar juntos.</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
