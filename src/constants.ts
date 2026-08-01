// Anchor sections on the home page. Each entry drives both the in-page
// scroll nav (when already on "/") and the "/#id" links used from other
// pages (e.g. the blog) to jump back to a section.
export const HOME_SECTIONS = [
  { id: "what-we-do", name: "What We Do" },
  { id: "team", name: "Team" },
  { id: "contact", name: "Contact" },
] as const;

export const BLOG_LINK = { href: "/blog", name: "Blog" } as const;

export const CONTACT_EMAIL = "info@paradoxyparticles.com";

export const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/paradoxyllc/",
    linkTitle: "ParadOxy Particles on LinkedIn",
  },
] as const;

// Headshots live in public/team/ — see README for the exact filenames.
export const TEAM = [
  {
    name: "Rajan Desai",
    title: "CEO & Co-Founder",
    role: "Data Scientist",
    image: "/team/rajan-desai.jpg",
    linkedin: "https://www.linkedin.com/in/rajandes7/",
  },
  {
    name: "Kyle O'Malley",
    title: "CTO & Co-Founder",
    role: "Chemical Engineer",
    image: "/team/kyle-omalley.jpg",
    linkedin: "https://www.linkedin.com/in/kyle-o-malley-5175967a/",
  },
] as const;
