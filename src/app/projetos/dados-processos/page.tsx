import type { Metadata } from "next";
import ProjectCaseTemplate from "@/components/case/ProjectCaseTemplate";
import { dadosProcessosCase } from "@/data/projects";

export const metadata: Metadata = {
  title: dadosProcessosCase.title,
  description: dadosProcessosCase.subtitle,
  alternates: { canonical: "/projetos/dados-processos" },
  openGraph: { title: dadosProcessosCase.title, url: "/projetos/dados-processos" },
};

export default function DadosProcessosPage() {
  return <ProjectCaseTemplate projectCase={dadosProcessosCase} />;
}
