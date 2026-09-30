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

export interface MoreProject {
  name: string;
  href: string;
  description: string;
  language: string;
}

// smaller projects, listed in the "more projects" dropdown under the cards
export const moreProjects: MoreProject[] = [
  {
    name: "osuautodeafen",
    href: "https://github.com/Nat3z/osuautodeafen",
    description: "the discord auto deafener for osu!, built in go.",
    language: "Go",
  },
  {
    name: "balatro-music-patch",
    href: "https://github.com/Nat3z/balatro-music-patch",
    description: "a simple music patcher for balatro that patches in music from dom palombi.",
    language: "Python",
  },
  {
    name: "yeet.nvim",
    href: "https://github.com/Nat3z/yeet.nvim",
    description: "yeet your changes to git even faster.",
    language: "Lua",
  },
  {
    name: "CozyParty",
    href: "https://github.com/Nat3z/CozyParty",
    description: "cozy party-esque games for your friends to play :3",
    language: "Java",
  },
  {
    name: "Hackpad",
    href: "https://github.com/Nat3z/Hackpad",
    description: "a 3 key keypad with a rotary encoder, made for hack club's hackpad project.",
    language: "Python",
  },
  {
    name: "innerhcb",
    href: "https://github.com/Nat3z/innerhcb",
    description: "npm package to send authenticated requests to hcb.",
    language: "TypeScript",
  },
  {
    name: "FragBot",
    href: "https://github.com/Nat3z/FragBot",
    description: "the hypixel skyblock frag bot.",
    language: "TypeScript",
  },
  {
    name: "nixos",
    href: "https://github.com/Nat3z/nixos",
    description: "my nixos configuration.",
    language: "Nix",
  },
];
