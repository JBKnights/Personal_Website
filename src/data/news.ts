// ---------------------------------------------------------------------------
// News / updates feed shown on the homepage. Keep newest first.
// `html` may contain simple inline markup like <a> or <em>.
//
// NOTE: entries use year-level granularity (`label`) rather than exact
// dates — the CV this was populated from doesn't record specific months/
// days for these milestones. Tighten a `label` to a full date any time
// you know the real one, e.g. "Mar 2026".
// ---------------------------------------------------------------------------

export interface NewsItem {
  label: string;
  html: string;
}

export const news: NewsItem[] = [
  {
    label: "2026",
    html: "Started as a Post-Doctoral Research Associate in Robotic Perception at the Australian Centre for Robotics, The University of Sydney.",
  },
  {
    label: "2026",
    html: "Awarded the 2025 QUT Outstanding Doctoral Thesis Award for my PhD thesis, &ldquo;Bridging Domain Gaps in 3D Scene Understanding.&rdquo;",
  },
  {
    label: "2026",
    html: 'Our paper <a href="https://csiro-robotics.github.io/WildCross" target="_blank" rel="noopener noreferrer">WildCross</a>, a benchmark for place recognition and metric depth estimation in natural environments, was accepted to <strong>ICRA 2026</strong>.',
  },
  {
    label: "2025",
    html: 'Completed my PhD at QUT, a joint program with CSIRO&rsquo;s Data61, supervised by <a href="https://people.csiro.au/m/p/peyman-moghadam" target="_blank" rel="noopener noreferrer">Peyman Moghadam</a>, <a href="https://www.qut.edu.au/about/our-people/academic-profiles/c.fookes" target="_blank" rel="noopener noreferrer">Clinton Fookes</a> and <a href="https://www.qut.edu.au/about/our-people/academic-profiles/s.sridharan" target="_blank" rel="noopener noreferrer">Sridha Sridharan</a>.',
  },
  {
    label: "2025",
    html: 'Our paper <a href="https://arxiv.org/abs/2409.10247" target="_blank" rel="noopener noreferrer">SOLVR</a>, a submap-oriented LiDAR-visual re-localisation pipeline developed at the <a href="https://srl.cit.tum.de/" target="_blank" rel="noopener noreferrer">Smart Robotics Lab</a>, TU Munich, was accepted to <strong>ICRA 2025</strong>.',
  },
  {
    label: "2024",
    html: 'Worked as a Research Engineer at the <a href="https://srl.cit.tum.de/" target="_blank" rel="noopener noreferrer">Smart Robotics Lab</a>, Technical University of Munich, developing computer vision pipelines for autonomous drones as part of the EU Horizon project DigiForest.',
  },
  {
    label: "2024",
    html: 'Our paper <a href="/publications#wildscenes-a-benchmark-for-2d-and-3d-semantic-segmentation-in-large-scale-natural-environments">WildScenes</a>, a benchmark for 2D/3D semantic segmentation in natural environments, was published in the <em>International Journal of Robotics Research</em>.',
  },
];
