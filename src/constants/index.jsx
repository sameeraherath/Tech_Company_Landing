import { Code, Cloud, Shield } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export const testimonials = [
  {
    user: "Alice Williams",
    company: "Innovatech Ltd.",
    image: user1,
    text: "Their innovative approach and dedication turned our vision into reality. We couldn’t be happier with the results.",
  },
  {
    user: "Brian Lee",
    company: "TechForward Inc.",
    image: user2,
    text: "Exceptional service and a product that truly meets our needs. Their team is knowledgeable and responsive.",
  },
  {
    user: "Catherine Young",
    company: "NextGen Solutions",
    image: user3,
    text: "A game-changer for our business. The project was delivered on time and exceeded all our expectations.",
  },
  {
    user: "Daniel Brown",
    company: "AlphaTech Co.",
    image: user4,
    text: "Smooth collaboration and a final product that was both robust and user-friendly. Highly recommend their services.",
  },
  {
    user: "Ella Martinez",
    company: "BrightFuture Enterprises",
    image: user5,
    text: "Professional and efficient. The solution provided was perfect for our needs and the support was outstanding.",
  },
  {
    user: "Frank Green",
    company: "Optimal Solutions",
    image: user6,
    text: "A pleasure to work with. Their attention to detail and proactive communication made the entire process seamless.",
  },
];

export const Service = [
  {
    icon: <Code />,
    text: "Software Development",
    description:
      "Custom software solutions designed to streamline your operations and drive innovation.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Solutions",
    description:
      "Reliable cloud services to improve scalability, efficiency, and performance across your business.",
  },
  {
    icon: <Shield />,
    text: "Information Security",
    description:
      "Comprehensive security measures to safeguard your data and infrastructure from potential threats.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Introduction" },
  { href: "#", text: "User Guide" },
  { href: "#", text: "How-To Videos" },
  { href: "#", text: "API Documentation" },
  { href: "#", text: "Customer Support" },
];

export const platformLinks = [
  { href: "#", text: "Product Features" },
  { href: "#", text: "Platform Compatibility" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Software Downloads" },
  { href: "#", text: "Version Updates" },
];

export const communityLinks = [
  { href: "#", text: "Upcoming Events" },
  { href: "#", text: "Local Meetups" },
  { href: "#", text: "Annual Conferences" },
  { href: "#", text: "Tech Challenges" },
  { href: "#", text: "Career Paths" },
];
