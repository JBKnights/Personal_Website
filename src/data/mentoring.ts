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
      'Provided supervision for the research component of her Masters of Engineering degree, which culminated in a publication at ICRA 2025 (<a href="/publications#regrace-a-robust-and-efficient-graph-based-re-localization-algorithm-using-consistency-evaluation">REGRACE: A Robust and Efficient Graph-based Re-localization Algorithm using Consistency Evaluation</a>).',
  },
  {
    period: "2022",
    student: "Keita Mason",
    role: "Honors Thesis Co-Supervisor",
    institution: "Data61, CSIRO",
    description:
      'Provided supervision and assistance for her Honours research placement, which culminated in a publication at IROS 2023 (<a href="/publications#uncertainty-aware-lidar-place-recognition-in-novel-environments">Uncertainty-Aware Lidar Place Recognition in Novel Environments</a>).',
  },
];
