import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

// Tech stack items with official SVG brand icons and tailored colors
export const languagesStack = [
  {
    name: "Python",
    tag: "Core Language",
    description: "Backend architecture, OOP & data pipelines",
    proficiency: "88%",
    color: "#3776AB",
    borderHover: "hover:border-[#3776AB]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C8.42 0 8.636 1.516 8.636 1.516l.005 1.567h3.332v.47H5.215S3 3.297 3 6.804c0 3.506 1.936 3.39 1.936 3.39h1.155V8.588s-.062-1.936 1.905-1.936h3.284s1.843.03 1.843-1.812V1.812S13.297 0 11.914 0zM10.12 1.055a.656.656 0 1 1 0 1.312.656.656 0 0 1 0-1.312z" fill="#3776AB" />
        <path d="M12.086 24c3.494 0 3.278-1.516 3.278-1.516l-.005-1.567h-3.332v-.47h6.758S21 20.703 21 17.196c0-3.506-1.936-3.39-1.936-3.39h-1.155v1.606s.062 1.936-1.905 1.936h-3.284s-1.843-.03-1.843 1.812v3.382S10.703 24 12.086 24zm1.794-1.055a.656.656 0 1 1 0-1.312.656.656 0 0 1 0 1.312z" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Django",
    tag: "Full Stack Framework",
    description: "Robust ORM, REST APIs, & secure auth",
    proficiency: "82%",
    color: "#2BA977",
    borderHover: "hover:border-[#2BA977]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.146 0h3.325v15.011c-1.396.223-2.482.335-3.256.335-3.371 0-4.996-1.583-4.996-4.856 0-3.303 1.769-5.184 4.927-5.184.628 0 1.256.09 1.884.269V0zm0 8.006c-.465-.112-.907-.168-1.326-.168-1.559 0-2.396.883-2.396 2.512 0 1.605.814 2.442 2.396 2.442.419 0 .861-.056 1.326-.168V8.006zM15.892 5.568h3.326v15.011c-1.395.223-2.488.335-3.28.335-3.325 0-4.972-1.583-4.972-4.856 0-1.093.186-2.07.605-2.907l2.884 1.488c-.279.465-.419.977-.419 1.488 0 1.605.814 2.442 2.396 2.442.442 0 .907-.056 1.349-.168V5.568h.111zM20.674 0h3.326v18.43h-3.326V0zM6.357 5.568h3.326V18.43H6.357V5.568zM0 13.918h3.326v4.512H0v-4.512z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    tag: "Frontend Language",
    description: "ES6+, Async/Await, dynamic DOM & interactive UI",
    proficiency: "74%",
    color: "#F7DF1E",
    borderHover: "hover:border-[#F7DF1E]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="#000" />
        <path d="M3 3h18v18H3V3z" fill="#F7DF1E" />
        <path d="M12.012 16.5c0 2.21-1.312 3.094-3.28 3.094-1.805 0-2.86-.96-3.375-1.922l1.64-1.031c.328.61.75 1.125 1.64 1.125.75 0 1.266-.375 1.266-1.266V9.75h2.109v6.75zm5.719 3.094c-1.922 0-3.14-.984-3.656-2.062l1.688-.985c.375.656.89 1.219 1.968 1.219.844 0 1.406-.422 1.406-1.031 0-.703-.562-.984-1.547-1.406l-.515-.235c-1.5-.656-2.531-1.5-2.531-3.234 0-1.64 1.265-2.86 3.187-2.86 1.36 0 2.39.516 3.047 1.688l-1.547 1c-.328-.563-.75-.844-1.5-.844-.656 0-1.078.375-1.078.89 0 .61.422.844 1.36 1.266l.515.235c1.781.75 2.766 1.547 2.766 3.375 0 1.875-1.453 3.047-3.609 3.047z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "AI & Machine Learning",
    tag: "Core Focus",
    description: "Predictive models, neural foundations & data analytics",
    proficiency: "68%",
    color: "#A855F7",
    borderHover: "hover:border-[#A855F7]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v3a4 4 0 0 1 4 4c1.5 0 2.8-.8 3.5-2h-3" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5v3a4 4 0 0 0-4 4c-1.5 0-2.8-.8-3.5-2h3" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 15v7" />
        <path d="M9 22h6" />
      </svg>
    ),
  },
  {
    name: "SQL & Databases",
    tag: "Data Persistence",
    description: "PostgreSQL, SQLite, relational schemas & indexing",
    proficiency: "71%",
    color: "#336791",
    borderHover: "hover:border-[#336791]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: "HTML5 & CSS3",
    tag: "Frontend Foundation",
    description: "Semantic layouts, responsive flex/grid & CSS animations",
    proficiency: "84%",
    color: "#E34F26",
    borderHover: "hover:border-[#E34F26]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.235-2.625H5.438l.703 7.875h9.703l-.328 3.516-3.563.984-3.562-.984-.235-2.578H5.532l.422 5.063 6.023 1.687 6.047-1.687.797-9.625H8.53z" />
      </svg>
    ),
  },
  {
    name: "React.js",
    tag: "Modern UI Library",
    description: "Component architecture, hooks, state & virtual DOM",
    proficiency: "75%",
    color: "#61DAFB",
    borderHover: "hover:border-[#61DAFB]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    tag: "Modern Styling",
    description: "Utility-first design, fluid glassmorphism & dark themes",
    proficiency: "86%",
    color: "#38BDF8",
    borderHover: "hover:border-[#38BDF8]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    tag: "API Architecture",
    description: "Clean endpoint design, JWT auth & JSON responses",
    proficiency: "80%",
    color: "#10B981",
    borderHover: "hover:border-[#10B981]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    tag: "Version Control",
    description: "Branching workflows, commits, collaborative PRs",
    proficiency: "85%",
    color: "#F05032",
    borderHover: "hover:border-[#F05032]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.6 10.59L8.38 4.8a1.37 1.37 0 0 1 1.94 0l1.37 1.37-2.36 2.36a1.94 1.94 0 0 0-.55 1.58 1.92 1.92 0 0 0 .97 1.48v4.83a1.9 1.9 0 0 0-.42.23 1.9 1.9 0 1 0 1.9 0v-4.63a1.86 1.86 0 0 0 .76-.64l2.42-2.42 1.25 1.25a1.37 1.37 0 0 1 0 1.94l-5.78 5.79a1.37 1.37 0 0 1-1.94 0L2.6 12.53a1.37 1.37 0 0 1 0-1.94z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    tag: "Relational DB",
    description: "ACID compliance, complex joins, views & foreign keys",
    proficiency: "76%",
    color: "#4169E1",
    borderHover: "hover:border-[#4169E1]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.99-2.17 5.45-5 5.93z" />
      </svg>
    ),
  },
  {
    name: "PyTorch & Data",
    tag: "Deep Learning Track",
    description: "Tensors, NumPy arrays, gradient descent & model logic",
    proficiency: "65%",
    color: "#EE4C2C",
    borderHover: "hover:border-[#EE4C2C]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.626 0L10.23 3.395l1.414 1.414 1.982-1.981V11.5a1 1 0 0 0 2 0V2.828l1.982 1.981 1.414-1.414L15.626 0a1.414 1.414 0 0 0-2 0zM5.5 8a6.5 6.5 0 0 0 0 13h13a6.5 6.5 0 0 0 5.487-10h-2.175a4.5 4.5 0 0 1-3.312 8H5.5a4.5 4.5 0 0 1 0-9h9V8h-9z" />
      </svg>
    ),
  },
  {
    name: "Linux & Shell",
    tag: "Dev Environment",
    description: "Bash scripting, process control, file systems & SSH",
    proficiency: "72%",
    color: "#FCC624",
    borderHover: "hover:border-[#FCC624]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    name: "FinWise Stack",
    tag: "Flagship Build",
    description: "Python backend + Django + Finance dashboard engine",
    proficiency: "90%",
    color: "#FF7A1A",
    borderHover: "hover:border-[#FF7A1A]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "System Design",
    tag: "Architecture",
    description: "Scalable project folders, MVC architecture & clean code",
    proficiency: "78%",
    color: "#38BDF8",
    borderHover: "hover:border-[#38BDF8]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    name: "Pandas & NumPy",
    tag: "Data Manipulation",
    description: "Matrix math, DataFrames, data cleaning & feature sets",
    proficiency: "70%",
    color: "#2563EB",
    borderHover: "hover:border-[#2563EB]/60",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
];

export function ThreeDMarqueeDemo({
  images,
  items = languagesStack,
  className,
}) {
  return (
    <div
      className={`mx-auto my-6 w-full max-w-7xl rounded-3xl bg-neutral-950/40 p-2 sm:p-4 ring-1 ring-white/10 backdrop-blur-xl shadow-2xl ${className || ""}`}
    >
      <ThreeDMarquee images={images} items={items} />
    </div>
  );
}
