// ---------------------------------------------------------------------------
// Core site identity & configuration.
// ---------------------------------------------------------------------------

export interface SocialLink {
  /** Short label shown in the UI, e.g. "GitHub" */
  label: string;
  /** 2-3 letter monogram shown in the badge, e.g. "GH" */
  monogram: string;
  href: string;
}

export const site = {
  name: "Joshua Knights",
  /** Shown in the header on narrow screens instead of the full name. */
  initials: "JK",
  role: "Post-Doctoral Research Associate",
  institution: "Australian Centre for Robotics, The University of Sydney",
  email: "joshuab.knights@gmail.com",

  /** Short tagline used in <meta name="description"> and link previews. */
  tagline:
    "Robotic perception research — 3D scene understanding, LiDAR/visual place recognition, and closing domain gaps for robots in unstructured environments.",

  /** Bio paragraphs shown on the homepage. Plain text or simple HTML strings. */
  bio: [
    "I am a Post-Doctoral Research Associate in Robotic Perception at the Australian Centre for Robotics, The University of Sydney. My research focuses on 3D scene understanding for robots operating in unstructured, natural environments &mdash; including LiDAR and visual place recognition, cross-modal re-localisation, and adapting learned perception models to novel domains.",
    "I completed my PhD at Queensland University of Technology in a joint program with CSIRO&rsquo;s Data61, supervised by Peyman Moghadam, Clinton Fookes and Sridha Sridharan, and received the 2025 QUT Outstanding Doctoral Thesis Award for my thesis, <em>Bridging Domain Gaps in 3D Scene Understanding</em>. In 2024 I was a Research Engineer at the Smart Robotics Lab, Technical University of Munich, developing perception pipelines for autonomous drones as part of the EU Horizon project DigiForest.",
  ],

  // NOTE: I couldn't confidently verify a personal GitHub account, so it's
  // left out for now — add one below once you give me the handle, e.g.:
  // { label: "GitHub", monogram: "GH", href: "https://github.com/yourhandle" }
  socials: [
    { label: "Google Scholar", monogram: "GS", href: "https://scholar.google.com/citations?user=RxbGr2EAAAAJ&hl=en" },
    { label: "LinkedIn", monogram: "in", href: "https://au.linkedin.com/in/joshua-knights-b577431a3" },
    { label: "Email", monogram: "@", href: "mailto:joshuab.knights@gmail.com" },
  ] satisfies SocialLink[],

  /**
   * Path to the CV PDF in /public. The header's "CV" link opens this
   * directly (in a new tab) rather than an in-site summary page — replace
   * public/cv.pdf and this stays pointed at it.
   */
  cvPdfUrl: "/cv.pdf",
};
