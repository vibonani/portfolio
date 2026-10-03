import type { Metadata } from "next";
import ProjectCaseTemplate from "@/components/case/ProjectCaseTemplate";
import { avaliacaoCandidatosCase } from "@/data/projects";

export const metadata: Metadata = {
  title: avaliacaoCandidatosCase.title,
  description: avaliacaoCandidatosCase.subtitle,
  alternates: { canonical: "/projetos/avaliacao-candidatos" },
  openGraph: {
    title: avaliacaoCandidatosCase.title,
    url: "/projetos/avaliacao-candidatos",
  },
};

export default function AvaliacaoCandidatosPage() {
  return <ProjectCaseTemplate projectCase={avaliacaoCandidatosCase} />;
}
