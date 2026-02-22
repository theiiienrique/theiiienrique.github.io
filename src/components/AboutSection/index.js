import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function AboutSection({ id, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    const isInitiallyInViewport = rect.top < window.innerHeight * 0.95;

    if (!isInitiallyInViewport) {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={clsx(styles.section, isVisible ? styles.visible : styles.hidden)}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
}
