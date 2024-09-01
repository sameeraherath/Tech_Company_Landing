import { Code, Cloud, Shield } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#" },
  { label: "About Us", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The software provided has transformed our operations. The team was professional, and the product exceeded our expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Our project was a success thanks to their innovative solutions. The team's dedication and expertise were evident throughout.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "A fantastic experience from start to finish. Their attention to detail and commitment to quality made a significant difference.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "The software development process was smooth and efficient. Their insights and solutions greatly contributed to our project's success.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Impressed by their professionalism and the high quality of their software. They delivered more than we had anticipated.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Their team went above and beyond to ensure our software met all our requirements. We’re looking forward to future collaborations.",
  },
];

export const Service = [
  {
    icon: <Code />,
    text: "Custom Software Development",
    description:
      "Tailored solutions to meet your unique business needs, from initial concept to final deployment.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Integration",
    description:
      "Seamless integration with cloud platforms to enhance scalability, flexibility, and accessibility.",
  },
  {
    icon: <Shield />,
    text: "Cybersecurity Solutions",
    description:
      "Advanced security features to protect your data and systems from emerging threats and vulnerabilities.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Support Center" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Platforms" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Career Opportunities" },
];
