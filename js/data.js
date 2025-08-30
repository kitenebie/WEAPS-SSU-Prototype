// Portfolio projects (10 choices)
const portfolioProjects = [
  { title: "Portfolio", image: "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc", github: "https://github.com/employee-portfolio1" },
  { title: "Portfolio", image: "https://i.ytimg.com/vi/Clll-ZcI2RY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIKzRlddg3F10GXMTOZUpGjSN5Ww", github: "https://github.com/employee-portfolio2" },
  { title: "Portfolio", image: "https://5.imimg.com/data5/MH/FQ/OV/SELLER-52007146/personal-portfolio-website-500x500.jpg", github: "https://github.com/employee-portfolio3" },
  { title: "Portfolio", image: "https://5.imimg.com/data5/MH/FQ/OV/SELLER-52007146/personal-portfolio-website-500x500.jpg", github: "https://github.com/employee-portfolio4" },
  { title: "Portfolio", image: "https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg", github: "https://github.com/employee-portfolio5" },
  { title: "Portfolio", image: "https://miro.medium.com/0*hY4-qtJ45Os3uGpf.png", github: "https://github.com/employee-portfolio6" },
  { title: "Portfolio", image: "https://themehunk.com/wp-content/uploads/2024/07/Bosa-Portfolio-1.png", github: "https://github.com/employee-portfolio7" },
  { title: "Portfolio", image: "https://uicookies.com/wp-content/uploads/2019/03/breed2-free-portfolio-website-templates-1000x750.jpg", github: "https://github.com/employee-portfolio8" },
  { title: "Portfolio", image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2024/09/Dalya-Baron-homepage-1024x577.png", github: "https://github.com/employee-portfolio9" },
  { title: "Portfolio", image: "https://media-prod-ureed.s3.amazonaws.com/uploads/8d43af8e-6058-4a7c-8041-80ead1630784.jpeg", github: "https://github.com/employee-portfolio10" },
];

// Other projects (4 choices)
const otherProjects = [
  { title: "Information System", image: "https://thewebsitearchitect.com/wp-content/uploads/2021/02/school-website-project.jpg", github: "https://github.com/employee-information-system" },
  { title: "Management System", image: "https://desklog.io/wp-content/uploads/2020/01/Project-Management-Software.png", github: "https://github.com/employee-management-system" },
  { title: "POS System", image: "https://desklog.io/wp-content/uploads/2020/01/Project-Management-Software.png", github: "https://github.com/employee-pos-system" },
  { title: "Online Shop", image: "https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp", github: "https://github.com/employee-online-shop" },
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const employees = Array.from({ length: 25 }, (_, i) => ({
  id: `EMP-2025-${String(i + 1001).padStart(4, "0")}`,
  name: `Employee ${i + 1}`,
  position: [
    "Software Engineer",
    "UI/UX Designer",
    "Project Manager",
    "QA Tester",
    "DevOps Engineer",
  ][i % 5],
  department: ["IT Department", "Design", "Operations", "QA", "Infrastructure"][
    i % 5
  ],
  email: `employee${i + 1}@example.com`,
  phone: `+63 912 34${(i + 100).toString().slice(-3)} ${(i + 123456)
    .toString()
    .slice(-4)}`,
  location: ["Cavite", "Laguna", "Batangas", "Manila", "Quezon"][i % 5],
  status: ["Full-time", "Part-time", "Contract", "Probationary"][i % 4],
  company: ["Tech Solutions Inc.", "Creative Minds Co.", "NextGen Corp."][
    i % 3
  ],
  active: i % 3 !== 0,
  skills: [
    ["Laravel", "Livewire", "PHP"],
    ["React", "Tailwind", "JS"],
    ["Python", "Django"],
    ["AWS", "Docker"],
    ["Figma", "UI/UX"],
  ][i % 5],
  profile: `https://i.pravatar.cc/150?img=${i + 1}`,
  logo: "https://filamentphp.com/build/assets/rocket-0d392ed0.webp",
  socials: {
    linkedin: `https://linkedin.com/in/employee${i + 1}`,
    github: `https://github.com/employee${i + 1}`,
    twitter: `https://twitter.com/employee${i + 1}`,
    facebook: `https://facebook.com/employee${i + 1}`,
  },
  experienceDetails: `Contributed to several high-impact ${
    [
      "software systems",
      "UI revamps",
      "project launches",
      "QA cycles",
      "cloud deployments",
    ][i % 5]
  } while collaborating cross-functionally with team members.`,
  achievements: {
    work: [
      "Employee of the Month - June 2024",
      "Led a successful project migration with 20% performance gain",
    ],
    education: [
      "Dean’s Lister for 3 years",
      "Champion of inter-university hackathon",
    ],
  },

  // 🎯 Random Projects per Employee
  projects: [
    getRandomItem(portfolioProjects), // 1 portfolio project
    ...getRandomItems(otherProjects, 3), // 3 other projects
  ],
}));
