import React from "react";
import {
  IconSchool,
  IconBuildingArch,
  IconFileText,
  IconMapPin,
  IconChartBar,
  IconTrophy,
  IconArrowDown,
} from "@tabler/icons-react";

export function EducationCardSection() {
  const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <div className="education-cards-container">
      {/* Card 1: G H Raisoni */}
      <div className="education-showcase-card education-card-blue">
        {/* Card Header Banner */}
        <div className="education-card-banner education-banner-blue">
          <div className="education-banner-left">
            <div className="education-icon-box">
              <IconBuildingArch className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="education-institution-name">
                G H Raisoni International
              </h3>
              <p className="education-institution-sub">
                Skill Tech University, Pune
              </p>
            </div>
          </div>
          <div className="education-banner-thumb">
            <img
              src={`${baseUrl}/gh_raisoni_campus.jpg`}
              alt="G H Raisoni Campus"
              className="education-thumb-img"
            />
          </div>
        </div>

        {/* Card Content Rows */}
        <div className="education-card-body">
          <div className="education-data-row">
            <div className="education-row-icon icon-bg-blue">
              <IconSchool className="h-5 w-5 text-sky-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">CURRENT STATUS</span>
              <strong className="education-row-value">
                Currently pursuing 2nd year
              </strong>
            </div>
          </div>

          <div className="education-data-row">
            <div className="education-row-icon icon-bg-purple">
              <IconFileText className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">PROGRAM</span>
              <strong className="education-row-value">
                B.Tech (Skill Tech)
              </strong>
            </div>
          </div>

          <div className="education-data-row">
            <div className="education-row-icon icon-bg-green">
              <IconMapPin className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">LOCATION</span>
              <strong className="education-row-value">
                Pune, Maharashtra
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Downward Connector Arrow */}
      <div className="education-connector" aria-hidden="true">
        <div className="education-connector-line"></div>
        <div className="education-connector-dot"></div>
        <div className="education-connector-arrow">
          <IconArrowDown className="h-5 w-5 text-sky-400 animate-bounce" />
        </div>
        <div className="education-connector-line"></div>
      </div>

      {/* Card 2: Ajeenkya DY Patil */}
      <div className="education-showcase-card education-card-purple">
        {/* Card Header Banner */}
        <div className="education-card-banner education-banner-purple">
          <div className="education-banner-left">
            <div className="education-icon-box">
              <IconBuildingArch className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="education-institution-name">
                Ajeenkya DY Patil
              </h3>
              <p className="education-institution-sub">
                College of Engineering, Pune
              </p>
            </div>
          </div>
          <div className="education-banner-thumb">
            <img
              src={`${baseUrl}/adypu_campus.jpg`}
              alt="Ajeenkya DY Patil Campus"
              className="education-thumb-img"
            />
          </div>
        </div>

        {/* Card Content Rows */}
        <div className="education-card-body">
          <div className="education-data-row">
            <div className="education-row-icon icon-bg-purple">
              <IconSchool className="h-5 w-5 text-purple-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">COURSE</span>
              <strong className="education-row-value">
                Diploma (3 years)
              </strong>
            </div>
          </div>

          <div className="education-data-row">
            <div className="education-row-icon icon-bg-amber">
              <IconChartBar className="h-5 w-5 text-amber-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">ACADEMICS</span>
              <strong className="education-row-value text-amber-300">
                84%
              </strong>
            </div>
          </div>

          <div className="education-data-row">
            <div className="education-row-icon icon-bg-green">
              <IconTrophy className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="education-row-details">
              <span className="education-row-label">RESULT</span>
              <strong className="education-row-value text-emerald-300">
                Passed with First Class with Distinction
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
