import type { Metadata } from "next";
import ProjectCaseTemplate from "@/components/case/ProjectCaseTemplate";
import { validacaoLeadsCase } from "@/data/projects";

export const metadata: Metadata = {
  title: validacaoLeadsCase.title,
  description: validacaoLeadsCase.subtitle,
  alternates: { canonical: "/projetos/validacao-leads" },
  openGraph: { title: validacaoLeadsCase.title, url: "/projetos/validacao-leads" },
};

export default function ValidacaoLeadsPage() {
  return <ProjectCaseTemplate projectCase={validacaoLeadsCase} />;
}
