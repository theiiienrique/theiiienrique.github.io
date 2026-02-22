import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

export default function AboutScrollCue({ sectionIds = [] }) {
  const ids = useMemo(
    () => sectionIds.filter((id) => typeof id === "string" && id.length > 0),
    [sectionIds]
  );
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    function updateEndState() {
      const doc = document.documentElement;
      const nearBottom =
        window.scrollY + window.innerHeight >= doc.scrollHeight - 24;

      const lastSectionId = ids[ids.length - 1];
      const lastSection = lastSectionId
        ? document.getElementById(lastSectionId)
        : null;
      const lastSectionVisible = lastSection
        ? lastSection.getBoundingClientRect().bottom <= window.innerHeight
        : false;

      setIsAtEnd(nearBottom || lastSectionVisible);
    }

    updateEndState();
    window.addEventListener("scroll", updateEndState, { passive: true });
    window.addEventListener("resize", updateEndState);

    return () => {
      window.removeEventListener("scroll", updateEndState);
      window.removeEventListener("resize", updateEndState);
    };
  }, [ids]);

  function scrollToNextSection() {
    if (!ids.length || typeof window === "undefined") {
      return;
    }

    if (isAtEnd) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const currentPosition = window.scrollY + window.innerHeight * 0.2;
    const nextSection = sections.find(
      (section) => section.getBoundingClientRect().top + window.scrollY > currentPosition
    );

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    sections[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      className={styles.scrollCue}
      onClick={scrollToNextSection}
      aria-label={isAtEnd ? "Back to top" : "Scroll to next section"}
    >
      <span aria-hidden="true" className={styles.arrow}>
        {isAtEnd ? "↑" : "↓"}
      </span>
    </button>
  );
}
