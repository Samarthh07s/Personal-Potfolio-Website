import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  IconBriefcase,
  IconSchool,
  IconCode,
  IconCheck,
  IconExternalLink,
  IconAward,
  IconCalendar,
  IconMapPin,
} from "@tabler/icons-react";

export function TimelineDemo() {
  const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  const data = [
    {
      title: "2026 - Present",
      content: (
        <div className="experience-timeline-card">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div>
              <span className="experience-badge experience-badge-current">
                Current Focus
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                B.Tech (Skill Tech) &amp; Full Stack AI Development
              </h4>
              <p className="text-sm text-orange-300/90 font-medium flex items-center gap-1.5 mt-0.5">
                <IconSchool className="h-4 w-4" />
                G H Raisoni International Skill Tech University, Pune
              </p>
            </div>
            <span className="chip chip-quiet text-xs">2nd Year Undergrad</span>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Currently pursuing B.Tech in Skill Tech (2nd Year) from 2026 while building real-world software products. Focused on Python full-stack engineering, Django REST Framework, database architecture, and machine learning foundation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="timeline-mini-card">
              <div className="timeline-mini-thumb">
                <img
                  src={`${baseUrl}/finwise_preview.jpg`}
                  alt="FinWise project"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <strong className="text-xs text-white block mt-2">FinWise</strong>
              <span className="text-[11px] text-neutral-400 block">Python • Django • Finance</span>
            </div>
            <div className="timeline-mini-card">
              <div className="timeline-mini-thumb">
                <img
                  src={`${baseUrl}/healthcare_preview.jpg`}
                  alt="SmartHealthCare project"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <strong className="text-xs text-white block mt-2">SmartHealthCare</strong>
              <span className="text-[11px] text-neutral-400 block">Healthcare UX • Workflows</span>
            </div>
            <div className="timeline-mini-card">
              <div className="timeline-mini-thumb">
                <img
                  src={`${baseUrl}/barber_preview.jpg`}
                  alt="Barber Booking project"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <strong className="text-xs text-white block mt-2">Barber Booking</strong>
              <span className="text-[11px] text-neutral-400 block">Appointment Scheduling</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="timeline-tag">Python</span>
            <span className="timeline-tag">Django REST</span>
            <span className="timeline-tag">PostgreSQL</span>
            <span className="timeline-tag">React.js</span>
            <span className="timeline-tag">AI / ML</span>
            <span className="timeline-tag">System Design</span>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="experience-timeline-card">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div>
              <span className="experience-badge experience-badge-internship">
                Internship Training
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                Python Full Stack Developer Intern
              </h4>
              <p className="text-sm text-orange-300/90 font-medium flex items-center gap-1.5 mt-0.5">
                <IconBriefcase className="h-4 w-4" />
                Graphix Tech • 3 Months • Completed during diploma
              </p>
            </div>
            <span className="chip chip-quiet text-xs">Hands-on Sprints</span>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Underwent intensive hands-on development training covering end-to-end web workflows, API integration, and database management for commercial applications.
          </p>

          <div className="timeline-feature-list mb-4">
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Developed backend CRUD APIs using Python &amp; Django with secure session management and authentication.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Designed normalized relational database schemas with SQL &amp; PostgreSQL, optimizing query efficiency.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Gained team Git version control discipline, code reviews, and Agile project tracking.</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="timeline-tag">Python</span>
            <span className="timeline-tag">Django</span>
            <span className="timeline-tag">SQL</span>
            <span className="timeline-tag">REST APIs</span>
            <span className="timeline-tag">Git &amp; GitHub</span>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2026",
      content: (
        <div className="experience-timeline-card">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <div>
              <span className="experience-badge experience-badge-education">
                Diploma Graduated • 84% Distinction
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                Diploma in Engineering (3 Years)
              </h4>
              <p className="text-sm text-orange-300/90 font-medium flex items-center gap-1.5 mt-0.5">
                <IconAward className="h-4 w-4 text-amber-400" />
                Ajeenkya DY Patil College of Engineering, Pune
              </p>
            </div>
            <span className="chip chip-quiet text-xs font-semibold text-emerald-300">
              First Class with Distinction
            </span>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            Completed the 2023–2026 technical diploma program with outstanding academic marks (84%). Built strong foundations across computational problem solving, data structures, algorithms, and software engineering principles.
          </p>

          <div className="timeline-feature-list mb-4">
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Consistently achieved top marks across all semesters, graduating with 84% First Class with Distinction.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Core coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks.</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-neutral-200">
              <IconCheck className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Built foundational mini-projects and collaborative lab experiments.</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="timeline-tag">Data Structures</span>
            <span className="timeline-tag">Algorithms</span>
            <span className="timeline-tag">C++</span>
            <span className="timeline-tag">Python</span>
            <span className="timeline-tag">DBMS</span>
            <span className="timeline-tag">Computer Networks</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
