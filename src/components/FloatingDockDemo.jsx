import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconHome,
  IconSchool,
  IconUser,
  IconVideo,
} from "@tabler/icons-react";

export function FloatingDockDemo({ direction = "bottom" }) {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#home",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Vlogs",
      icon: <IconVideo className="h-full w-full" />,
      href: "#vlogs",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "#experience",
    },
    {
      title: "Education",
      icon: <IconSchool className="h-full w-full" />,
      href: "#education",
    },
    {
      title: "About Us",
      icon: <IconUser className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/Samarthh07s",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/in/samarth-hingane-7493a02a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  return (
    <nav className="top-floating-dock-nav" aria-label="Primary Navigation">
      <FloatingDock items={links} direction={direction} />
    </nav>
  );
}
