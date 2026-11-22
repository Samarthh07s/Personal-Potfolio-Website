import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

export function ExpandableProjectCards({ cards }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="expandable-backdrop"
          />
        )}
      </AnimatePresence>

      {/* Expanded card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="expandable-overlay">
            {/* Mobile close button */}
            <motion.button
              key={`close-btn-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="expandable-close-btn"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="expandable-card-expanded"
            >
              {/* Corner close button on card */}
              <button
                type="button"
                className="expandable-card-corner-close"
                onClick={() => setActive(null)}
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>

              {/* Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="expandable-card-image"
                />
              </motion.div>

              {/* Body */}
              <div className="expandable-card-body">
                <div className="expandable-card-header">
                  <div>
                    <motion.p
                      layoutId={`type-${active.title}-${id}`}
                      className="expandable-card-type"
                    >
                      {active.type}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="expandable-card-title"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <motion.a
                    layoutId={`cta-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noreferrer"
                    className="expandable-cta-btn"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                {/* Long description + tags */}
                <div className="expandable-card-content-wrap">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="expandable-card-content"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>

                  <div className="expandable-tags">
                    {active.tags.map((tag) => (
                      <span key={tag} className="expandable-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card list */}
      <ul className="expandable-list">
        {cards.map((card, index) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="expandable-card-row"
          >
            {/* Thumbnail */}
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="expandable-thumb-wrap"
            >
              <img
                src={card.src}
                alt={card.title}
                className="expandable-thumb"
              />
            </motion.div>

            {/* Text */}
            <div className="expandable-row-text">
              <span className="expandable-row-index">0{index + 1}</span>
              <div>
                <motion.p
                  layoutId={`type-${card.title}-${id}`}
                  className="expandable-row-type"
                >
                  {card.type}
                </motion.p>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="expandable-row-title"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>

            {/* CTA pill */}
            <motion.button
              layoutId={`cta-${card.title}-${id}`}
              className="expandable-row-cta"
              onClick={(e) => {
                e.stopPropagation();
                setActive(card);
              }}
            >
              {card.ctaText}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
