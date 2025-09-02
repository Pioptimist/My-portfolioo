import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.jpg";
import PROJECT_IMG_7 from "../assets/images/project-7.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
    ],
  },
  {
  title: "Database",
  icon: Database,
  description: "Managing and optimizing data storage",
  skills: [
    { name: "Express", level: 88, color: "bg-green-600" },
    { name: "MongoDB", level: 85, color: "bg-blue-700" },
    { name: "Redis", level: 80, color: "bg-red-500" },
    { name: "Prisma", level: 82, color: "bg-indigo-600" },
    { name: "Firebase", level: 78, color: "bg-yellow-600" },
  ],
},
{
  title: "DevOps",
  icon: Cloud,
  description: "Deploying and scaling applications",
  skills: [
    { name: "Docker", level: 82, color: "bg-blue-600" },
    { name: "AWS", level: 78, color: "bg-orange-600" },
  ],
},
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack"
];

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "22+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack – with full Markdown support, tag filtering, and an integrated AI post generator.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://youtu.be/tUnGudIBi9I",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack – with full Markdown support, tag filtering, and an integrated AI post generator.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://youtu.be/tUnGudIBi9I",
    githubUrl: "",
    featured: true,
    category: "Full Stack",
  },
  
]

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started my College journey",
    company: "Self-taught",
    description:
      "Discovering myself and my interests in  the technology world",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "Started my coding journey",
    company: "Self-taught",
    description:
      "Began exxploring and learning basics of HTML,CSS and Javascript and built basic foundation.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "First Hackathon",
    company: "TechStart Inc.",
    description:
      "Participated in my first ever Hackathon gaining experience on real world application over problems.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2025",
    title: "Expanding my domain",
    company: "Self-taught",
    description:
      "Found interest in web-page animation and worked towards building core conceptual understanding of gsap and three.js",
    icon: Briefcase,
    color: "bg-green-500",
  },
]

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Pioptimist",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/soumyodeep-chakraborty-851ba6325/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:soumyodeepc641@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "New,Delhi, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "soumyodeepc641@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+91) 7982588477",
  },
];


// m6VX.vfg2C4amaa
// service_cbqeidx