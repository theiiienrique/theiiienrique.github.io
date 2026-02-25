import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function GuideIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M7 3.75h7.5L19.25 8.5V19A1.25 1.25 0 0 1 18 20.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z"
      />
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M14.5 3.75V8.5h4.75M8.75 12h7.5M8.75 15.5h5.5"
      />
    </svg>
  );
}

function ToolIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 7-4 5 4 5M16 7l4 5-4 5M14 5l-4 14"
      />
    </svg>
  );
}

function TemplateIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth="1.8" />
      <path strokeWidth="1.8" strokeLinecap="round" d="M9 9h6M9 12.5h6M9 16h4" />
    </svg>
  );
}

const META_BY_KIND = {
  guide: { label: "Guide", Icon: GuideIcon },
  reference: { label: "Reference", Icon: GuideIcon },
  tooling: { label: "Tooling", Icon: ToolIcon },
  template: { label: "Template", Icon: TemplateIcon },
};

function resolveCardMeta({ kind, title, tags = [] }) {
  const normalizedKind = typeof kind === "string" ? kind.trim().toLowerCase() : null;

  if (normalizedKind && META_BY_KIND[normalizedKind]) {
    return META_BY_KIND[normalizedKind];
  }

  const joined = `${title} ${tags.join(" ")}`.toLowerCase();

  if (joined.includes("template") || joined.includes("user story")) {
    return { label: "Template", Icon: TemplateIcon };
  }

  if (joined.includes("vale") || joined.includes("tool")) {
    return { label: "Tooling", Icon: ToolIcon };
  }

  return { label: "Guide", Icon: GuideIcon };
}

export default function DocCard({
  title,
  description,
  link,
  tags,
  thumbnail,
  thumbnailLight,
  thumbnailDark,
  kind,
  onTagClick,
}) {
  const { label, Icon } = resolveCardMeta({ kind, title, tags });
  const resolvedThumbnail = thumbnail ? useBaseUrl(thumbnail) : null;
  const resolvedThumbnailLight = thumbnailLight ? useBaseUrl(thumbnailLight) : null;
  const resolvedThumbnailDark = thumbnailDark ? useBaseUrl(thumbnailDark) : null;

  return (
    <Link to={link} className={styles.docCard}>
      {(resolvedThumbnail || resolvedThumbnailLight || resolvedThumbnailDark) && (
        <div className={styles.thumbnailWrap} aria-hidden="true">
          {resolvedThumbnailLight && (
            <img
              src={resolvedThumbnailLight}
              alt=""
              className={`${styles.thumbnail} ${styles.thumbnailLight}`}
              loading="lazy"
            />
          )}
          {resolvedThumbnailDark && (
            <img
              src={resolvedThumbnailDark}
              alt=""
              className={`${styles.thumbnail} ${styles.thumbnailDark}`}
              loading="lazy"
            />
          )}
          {!resolvedThumbnailLight && !resolvedThumbnailDark && resolvedThumbnail && (
            <img src={resolvedThumbnail} alt="" className={styles.thumbnail} loading="lazy" />
          )}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.cardTop}>
          <div className={styles.iconBadge} aria-hidden="true">
            <Icon className={styles.cardIcon} />
          </div>
          <span className={styles.kindLabel}>{label}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${styles.tag} ${onTagClick ? styles.tagInteractive : ""}`}
                onClick={
                  onTagClick
                    ? (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        onTagClick(tag);
                      }
                    : undefined
                }
                onKeyDown={
                  onTagClick
                    ? (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          event.stopPropagation();
                          onTagClick(tag);
                        }
                      }
                    : undefined
                }
                role={onTagClick ? "button" : undefined}
                tabIndex={onTagClick ? 0 : undefined}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
