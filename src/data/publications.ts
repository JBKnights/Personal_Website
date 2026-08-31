// ---------------------------------------------------------------------------
// Publications list, shown in full on /publications and (featured: true
// items only) as "Selected Publications" on the homepage.
// Keep newest first; the /publications page groups entries by year.
//
// Sourced from Joshua's CV plus arXiv/GitHub links found via web search.
// A note on the entries below:
//  - The ISPRS tree-parameter regression paper is still under review, so
//    it has no public link or image yet.
//
// `image` paths point at public/images/publications/ — teaser figures/gifs
// pulled from each paper's project page, GitHub README, or first arXiv
// figure (see the download commands in git history / ask me to re-run if
// you want different ones swapped in).
// ---------------------------------------------------------------------------

export interface Author {
  name: string;
  /** Set true for yourself — the name is bolded automatically. */
  self?: boolean;
}

export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  featured?: boolean;
  links?: PubLink[];
  /** Path under /images/publications/ — a teaser image or gif for the entry. */
  image?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Few-Shot Adaptation for Robust Deep Regression of Tree Parameters from ULS Forest Data Using Meta-Learning",
    authors: [{ name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "Under review, ISPRS Journal of Photogrammetry and Remote Sensing",
    year: 2026,
    image: "/images/publications/tree-height-regression.png",
  },
  
  {
    title:
      "WildCross: A Cross-Modal Large Scale Benchmark for Place Recognition and Metric Depth Estimation in Natural Environments",
    authors: [{ name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2026,
    featured: true,
    links: [
      { label: "ArXiv", href: "https://arxiv.org/abs/2603.01475"},
      { label: "Code", href: "https://github.com/csiro-robotics/WildCross"},
      { label: "Project Page", href: "https://csiro-robotics.github.io/WildCross" },
    ],
    image: "/images/publications/wildcross.gif",
  },
  
  {
    title: "SOLVR: Submap Oriented LiDAR-Visual Re-Localisation",
    authors: [
      { name: "Joshua Knights", self: true },
      { name: "Sebastián Barbas Laina" },
      { name: "Peyman Moghadam" },
      { name: "Stefan Leutenegger" },
    ],
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2025,
    featured: true,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2409.10247" },
      // { label: "PDF", href: "https://arxiv.org/pdf/2409.10247" },
    ],
    image: "/images/publications/solvr.jpg",
  },
  {
    title: "WildScenes: A Benchmark for 2D and 3D Semantic Segmentation in Large-scale Natural Environments",
    authors: [
      { name: "Kavisha Vidanapathirana" },
      { name: "Joshua Knights", self: true },
      { name: "Stephen Hausler" },
      { name: "Mark Cox" },
      { name: "Milad Ramezani" },
      { name: "Jason Jooste" },
      { name: "Ethan Griffiths" },
      { name: "Shaheer Mohamed" },
      { name: "Sridha Sridharan" },
      { name: "Clinton Fookes" },
      { name: "Peyman Moghadam" },
    ],
    venue: "International Journal of Robotics Research (IJRR)",
    year: 2024,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2312.15364" },
      { label: "Code", href: "https://github.com/csiro-robotics/WildScenes" },
      { label: "Project Page", href: "https://csiro-robotics.github.io/WildScenes/" },
    ],
    image: "/images/publications/wildscenes.gif",
  },
  {
    title: "GeoAdapt: Self-Supervised Test-Time Adaptation in LiDAR Place Recognition Using Geometric Priors",
    authors: [{ name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    year: 2024,
    featured: true,
    // NOTE: dropped the "Code" link that was here — github.com/csiro-robotics/GeoAdapt
    // 404s and isn't in the csiro-robotics org's repo list, so it looks like the
    // code either isn't public or lives somewhere else. Let me know the right URL.
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2308.04638" }],
    image: "/images/publications/geoadapt.jpg",
  },
  {
    title: "Wild-Places: A Large-Scale Dataset for Lidar Place Recognition in Unstructured Natural Environments",
    authors: [
      { name: "Joshua Knights", self: true },
      { name: "Kavisha Vidanapathirana" },
      { name: "et al." },
    ],
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2023,
    featured: true,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2211.12732" },
      { label: "Code", href: "https://github.com/csiro-robotics/Wild-Places" },
      { label: "Project Page", href: "https://csiro-robotics.github.io/Wild-Places/" },
    ],
    image: "/images/publications/wild-places.gif",
  },
  {
    title: "InCloud: Incremental Learning for Point Cloud Place Recognition",
    authors: [{ name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2022,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2203.00807" },
      { label: "Code", href: "https://github.com/csiro-robotics/InCloud" },
    ],
    image: "/images/publications/incloud.jpg",
  },
  {
    title: "Temporally Coherent Embeddings for Self-Supervised Video Representation Learning",
    authors: [
      { name: "Joshua Knights", self: true },
      { name: "Ben Harwood" },
      { name: "Daniel Ward" },
      { name: "Anthony Vanderkop" },
      { name: "Olivia Mackenzie-Ross" },
      { name: "Peyman Moghadam" },
    ],
    venue: "IEEE International Conference on Pattern Recognition (ICPR)",
    year: 2021,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2004.02753" },
      { label: "Code", href: "https://github.com/csiro-robotics/TCE" },
    ],
    image: "/images/publications/tce.jpg",
  },

  // -- Contributing-author publications --------------------------------
  {
    title: "REGRACE: A Robust and Efficient Graph-based Re-localization Algorithm using Consistency Evaluation",
    authors: [{ name: "D. N. P. Oliveira" }, { name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2025,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2503.03599" },
      { label: "Code", href: "https://github.com/ethz-mrl/regrace/tree/main"}],
    image: "/images/publications/regrace.jpg",
  },
  {
    title: "Uncertainty-Aware Lidar Place Recognition in Novel Environments",
    authors: [
      { name: "Keita Mason" },
      { name: "Joshua Knights", self: true },
      { name: "Milad Ramezani" },
      { name: "Peyman Moghadam" },
      { name: "Dimity Miller" },
    ],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2023,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2210.01361" },
      { label: "Code", href: "https://github.com/csiro-robotics/Uncertainty-LPR" },
    ],
    image: "/images/publications/uncertainty-lpr.jpg",
  },
  {
    title: "Pose-Graph Attentional Graph Neural Network for Lidar Place Recognition",
    authors: [{ name: "Milad Ramezani" }, { name: "Joshua Knights", self: true }, { name: "et al." }],
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    year: 2023,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2309.00168" },
      { label: "Code", href: "https://github.com/csiro-robotics/P-GAT" },
    ],
    image: "/images/publications/pgat.jpg",
  },
];
