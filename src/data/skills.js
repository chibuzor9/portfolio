import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDrizzle,
  SiPandas,
  SiPolars,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Backend, APIs & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "WebSockets", icon: SiSocketdotio },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Drizzle", icon: SiDrizzle },
    ],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "Polars", icon: SiPolars },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
    ],
  },
];
