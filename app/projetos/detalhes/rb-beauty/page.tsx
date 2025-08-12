import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollProgress />
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-muted-foreground hover:text-foreground transition-colors">
              Ínicio
            </BreadcrumbItem>
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            <BreadcrumbItem className="font-medium">Projetos</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold bg-primary bg-clip-text text-transparent">
            FSW-BARBER
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">
              Fullstack aplicação de agendamento para barbearias.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                Abril {currentYear} – Maio {currentYear}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/projects/fsk-barber.png"
            fill
            alt="Project preview"
            className="object-cover"
          />
        </div>
        <section className="">
            <div className="flex-row sm:flex-col space-y-6">
            {/* Protótipo do Sistema */}
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">Protótipo do Sistema</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
              Um sistema completo de agendamento para barbearias, permitindo que clientes marquem horários de forma rápida e fácil, com gestão eficiente de agendas, autenticação segura e painel administrativo para controle de serviços e horários disponíveis.
              </p>
              <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                href="https://online-flight-booking-system.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                >
                <ExternalLink className="w-4 h-4" />
                Ver Demo
                </a>
              </Button>
              </div>
            </div>
            {/* Repositório GitHub */}
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">Repositório GitHub 🔒</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                O código-fonte deste projeto é privado e não está disponível publicamente no GitHub.
                </p>
              <div className="flex flex-wrap gap-4">
              <Button variant="outline" disabled={true}>
                <a
                href="https://github.com/SuryaLimbu/online-flight-booking-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                >
                <Github className="w-4 h-4" />
                Ver no GitHub
                </a>
              </Button>
              </div>
            </div>
            </div>
        </section>

        {/* Project Overview */}
        <section className="space-y-6 bg-muted/50 p-8 rounded-xl border">
          <h2 className="text-3xl font-bold">Visão Geral do Projeto</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Desenvolvido como um projeto pessoal para aprimorar habilidades em desenvolvimento fullstack, este sistema de agendamento para barbearias foi focado em usabilidade, performance e segurança, utilizando tecnologias modernas e boas práticas de engenharia de software.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Metodologia</h3>
              <p className="text-sm text-muted-foreground">
              Iterativo, com foco em TDD/BDD
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Time</h3>
              <p className="text-sm text-muted-foreground">Projeto Solo</p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-sm text-muted-foreground">Vercel</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
            <h2 className="text-3xl font-bold">Principais Funcionalidades</h2>
            <div className="grid md:grid-cols-2 gap-6">
            {[
              {
              title: "Listagem de Barbearias",
              description:
                "Navegue e descubra barbearias, visualize serviços disponíveis e confira informações de contato em uma interface amigável.",
              icon: "🏢",
              },
              {
              title: "Agendamento Online",
              description:
                "Agende horários para cortes e outros serviços facilmente, com disponibilidade em tempo real e confirmação instantânea.",
              icon: "📅",
              },
              {
              title: "Gestão da Barbearia",
              description:
                "Barbearias podem gerenciar agendas, serviços e reservas através de um painel administrativo intuitivo.",
              icon: "🛠️",
              },
              {
              title: "Autenticação & Segurança",
              description:
                "Login e cadastro seguros utilizando NextAuth, garantindo privacidade e acesso protegido para todos os usuários.",
              icon: "🔐",
              },
              {
              title: "Notificações em Tempo Real",
              description:
                "Clientes e barbearias recebem notificações instantâneas sobre confirmações, cancelamentos e lembretes de agendamento.",
              icon: "🔔",
              },
              {
              title: "UI Moderna & Código Modular",
              description:
                "Construído com Next.js, TypeScript e Tailwind CSS, com componentes reutilizáveis e estrutura organizada para escalabilidade.",
              icon: "✨",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-muted/50 rounded-xl border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 14",
              "TypeScript",
              "Prisma ORM",
              "PostgreSQL",
              "NextAuth",
              "React Hook Form",
              "Zod",
              "Radix UI",
              "Tailwind CSS",
              "Vercel",
              "Cloudinary",
              "Lucide Icons",
              "ESLint",
              "Prettier",
              "Husky",
              "Commitlint",
              "GitHub Actions",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Role & Responsibilities */}
        <section className="space-y-6">
            <h2 className="text-3xl font-bold">Papel no Projeto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Responsabilidades</h3>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento full-stack com Next.js e TypeScript",
                  "Modelagem e integração de banco de dados com Prisma e PostgreSQL",
                  "Implementação de autenticação segura com NextAuth",
                  "Criação de componentes reutilizáveis e UI acessível com Radix UI",
                  "Validação de formulários com React Hook Form e Zod",
                  "Deploy e configuração de ambiente na Vercel",
                  "Gerenciamento de imagens com Cloudinary",
                  "Padronização de código com ESLint, Prettier, Husky e Commitlint",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Especialização</h3>
              <ul className="space-y-3">
                {[
                  "Integração de autenticação social (Google, GitHub)",
                  "Otimização de queries e performance com Prisma",
                  "Adoção de boas práticas de acessibilidade e UX",
                  "Automação de deploy com GitHub Actions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Outcomes & Learnings */}
        <section className="space-y-6">
            <h2 className="text-3xl font-bold">Resultados & Aprendizados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Resultados
              </h3>
              <ul className="space-y-2 text-green-700">
                {[
                  "Sistema de agendamento funcional e responsivo",
                  "Fluxo de autenticação social integrado",
                  "Painel administrativo intuitivo para barbearias",
                  "Deploy contínuo e ambiente de produção estável",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Aprendizados
              </h3>
              <ul className="space-y-2 text-blue-700">
                {[
                  "Aprofundamento em Next.js App Router e Server Actions",
                  "Boas práticas de validação e UX em formulários complexos",
                  "Gerenciamento de autenticação e autorização em aplicações modernas",
                  "Automação de processos com GitHub Actions e ferramentas de qualidade de código",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
