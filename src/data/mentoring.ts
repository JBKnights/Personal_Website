// ---------------------------------------------------------------------------
// Student mentoring / supervision, shown on /mentoring. Keep newest first.
// ---------------------------------------------------------------------------

export interface MentoringEntry {
  period: string; // e.g. "2024"
  student: string;
  role: string;
  institution: string;
  description?: string;
}

export const mentoring: MentoringEntry[] = [
  // {
  //   period: "2025",
  //   student: "Joseph Reid",
  //   role: "Supervisor",
  //   institution: "University of Queensland",
  //   description: "Provided supervision for the research component of his Masters of Engineering degree.",
  // },
  {
    period: "2024",
    student: "Débora Oliveira Makowski",
    role: "Masters Thesis Co-Supervisor",
    institution: "Technical University of Munich",
    description:
      "Provided supervision for the research component of her Masters of Engineering degree, which culminated in a publication at ICRA 2025 (REGRACE).",
  },
  {
    period: "2022",
    student: "Keita Mason",
    role: "Honors Thesis Co-Supervisor",
    institution: "Data61, CSIRO",
    description:
      "Provided supervision and assistance for her Honours research placement, which culminated in a publication at IROS 2023 (Uncertainty-Aware Lidar Place Recognition in Novel Environments).",
  },
];
