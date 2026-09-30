export interface Project {
  name: string;
  href: string;
  // short one-liner, used for the header dropdown tooltip
  tagline: string;
  description: string;
  // screenshot used as the card backdrop, lives in /public/projects
  image: string;
  // optional blog post about the project
  writeup?: string;
}

// first entry is rendered as the featured (full-width) card
export const projects: Project[] = [
  {
    name: "OpenGameInstaller",
    href: "https://ogi.nat3z.com",
    tagline: "a video game management and installation tool",
    description:
      "a desktop game manager that installs, organizes, and launches games from multiple sources through addons. works on windows and the steam deck. trusted by over 18k users.",
    image: "/projects/opengameinstaller.webp",
  },
  {
    name: "BetterFlex",
    href: "https://betterflex.co/",
    tagline: "my commercial project, helping with 'flex period' management",
    description:
      "my commercial project. flex period scheduling that's clear for students, simple for teachers, and manageable for coordinators.",
    image: "/projects/betterflex.webp",
  },
  {
    name: "DynSchedule",
    href: "https://schedule.nat3z.com/",
    tagline: "a schedule management tool for students",
    description:
      "a dynamic schedule site for schools, so you always know what block you're in and when it ends.",
    image: "/projects/dynschedule.webp",
    writeup: "/blog/creating-a-schedule-site",
  },
];
