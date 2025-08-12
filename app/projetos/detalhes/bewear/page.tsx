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

const currentYear = new Date().getFullYear();

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollProgress />
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </BreadcrumbItem>
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            <BreadcrumbItem className="text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </BreadcrumbItem>
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
            <BreadcrumbItem className="font-medium">Bewear</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-12">
        {/* Header Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold bg-primary bg-clip-text text-transparent">
            Bewear: E-commerce
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground">
              Desenvolvedor Full Stack & UI/UX Designer
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="bg-purple-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                Março {currentYear}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/projects/bewearpreview.png"
            fill
            alt="Project preview"
            className="object-cover"
          />
        </div>

        {/* Project Links */}
        <section className="">
          <div className="flex-row sm:flex-col space-y-6">
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">Aplicação Live</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                E-commerce completo de roupas com carrinho de compras,
                autenticação de usuários e sistema de gerenciamento de produtos
                moderno.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a
                    href="https://bewear-three.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar Bewear
                  </a>
                </Button>
              </div>
            </div>
            {/* Repositório GitHub */}
            <div className="space-y-6 bg-muted/50 p-8 rounded-xl border">
              <h2 className="text-3xl font-bold">Repositório GitHub 🔒</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                O código-fonte deste projeto é privado e não está disponível
                publicamente no GitHub.
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
            Bewear é uma loja virtual desenvolvida com as mais modernas
            tecnologias web. O projeto combina uma interface elegante e
            responsiva com um backend robusto, oferecendo uma experiência de
            compra completa e intuitiva.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Tipo</h3>
              <p className="text-sm text-muted-foreground">
                E-commerce / Projeto Pessoal
              </p>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Desenvolvimento</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Desenvolvimento Solo</p>
                <p>Metodologia Ágil</p>
              </div>
            </div>
            <div className="p-4 bg-background rounded-lg border">
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-sm text-muted-foreground">Vercel</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Funcionalidades Principais</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Carrinho de Compras",
                description:
                  "Sistema completo de carrinho com persistência e cálculo automático",
                icon: "🛒",
              },
              {
                title: "Catálogo de Produtos",
                description:
                  "Interface elegante para navegação e filtragem de produtos",
                icon: "👕",
              },
              {
                title: "Autenticação Segura",
                description:
                  "Sistema de login e registro com validação completa",
                icon: "🔐",
              },
              {
                title: "Design Responsivo",
                description:
                  "Interface adaptável para desktop, tablet e mobile",
                icon: "📱",
              },
              {
                title: "Dashboard Admin",
                description:
                  "Painel administrativo para gerenciamento de produtos e pedidos",
                icon: "⚙️",
              },
              {
                title: "Performance Otimizada",
                description:
                  "Carregamento rápido com otimizações de imagem e código",
                icon: "⚡",
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
          <h2 className="text-3xl font-bold">Stack Tecnológica</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "React Hook Form",
                  "Tanstack Query",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-sm font-medium hover:bg-primary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Postgres", "Prisma ORM", "Better-Auth"].map(
                  (tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 py-1 text-sm font-medium hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  )
                )}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Deploy & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Biome", "Vercel"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-sm font-medium hover:bg-primary/10"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Processo de Desenvolvimento</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-semibold mb-4">
                Planejamento & Design
              </h3>
              <ul className="space-y-3">
                {[
                  "Análise de mercado e concorrentes",
                  "Criação de wireframes e protótipos",
                  "Design system e componentes reutilizáveis",
                  "Definição da arquitetura do sistema",
                  "Planejamento da experiência do usuário",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-muted/50 rounded-xl border">
              <h3 className="text-xl font-semibold mb-4">Implementação</h3>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento da interface responsiva",
                  "Implementação do sistema de autenticação",
                  "Implementação do sistema de Pagamento",
                  "Integração com banco de dados",
                  "Testes e otimização de performance",
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

        {/* Challenges & Solutions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Desafios & Soluções</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-800">
                Desafios Enfrentados
              </h3>
              <ul className="space-y-2 text-red-700">
                {[
                  "Gerenciamento de estado complexo do carrinho",
                  "Otimização de performance das imagens",
                  "Responsividade em diferentes dispositivos",
                  "Segurança na autenticação de usuários",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                Soluções Implementadas
              </h3>
              <ul className="space-y-2 text-green-700">
                {[
                  "React Query para gerenciamento de estados",
                  "Next.js Image para otimização automática",
                  "Mobile-first design com Tailwind CSS",
                  "Better-Auth para autenticação de usuários",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Learnings */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Resultados & Aprendizados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">
                Métricas Alcançadas
              </h3>
              <ul className="space-y-2 text-blue-700">
                {[
                  "Tempo de carregamento < 2 segundos",
                  "100% responsivo em todos os dispositivos",
                  "Interface intuitiva e acessível",
                  "Código limpo e bem documentado",
                ].map((item, index) => (
                  <li key={index} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">
                Aprendizados Técnicos
              </h3>
              <ul className="space-y-2 text-purple-700">
                {[
                  "Arquitetura de aplicações Next.js complexas",
                  "Gerenciamento de estado em React",
                  "Otimização de SEO e performance",
                  "Melhores práticas de UI/UX",
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
