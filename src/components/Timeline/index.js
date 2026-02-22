import React from "react";
import styles from "./styles.module.css";

function WorkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3.75" y="6.75" width="16.5" height="12.5" rx="2" strokeWidth="1.7" />
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        d="M9 6.75v-1A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75v1M3.75 12h16.5"
      />
    </svg>
  );
}

function EducationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.7"
        strokeLinejoin="round"
        d="m3.5 9 8.5-4 8.5 4-8.5 4-8.5-4Z"
      />
      <path strokeWidth="1.7" strokeLinecap="round" d="M6.5 10.5V15.5c0 1.8 2.7 3.2 5.5 3.2s5.5-1.4 5.5-3.2v-5" />
    </svg>
  );
}

function getTimelineIcon(item) {
  const content = `${item.company ?? ""} ${item.roles?.map((r) => r.title).join(" ") ?? ""}`.toLowerCase();
  const isEducation = content.includes("university") || content.includes("bachelor") || content.includes("master");
  return isEducation ? EducationIcon : WorkIcon;
}

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineMarker} />
          <div className={styles.timelineContent}>
            <div className={styles.company}>
              <div className={styles.companyHeader}>
                <h3>{item.company}</h3>
                {(() => {
                  const Icon = getTimelineIcon(item);
                  return (
                    <div className={styles.iconBadge} aria-hidden="true">
                      <Icon className={styles.cardIcon} />
                    </div>
                  );
                })()}
              </div>
              {item.roles && (
                <div className={styles.roles}>
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={styles.role}>
                      <div className={styles.roleHeader}>
                        <span className={styles.title}>{role.title}</span>
                        <span className={styles.dateRange}>{role.dateRange}</span>
                      </div>
                      {role.description && role.description.length > 0 && (
                        <ul className={styles.roleDescription}>
                          {role.description.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              dangerouslySetInnerHTML={{ __html: point }}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {item.description && item.description.length > 0 && (
              <ul className={styles.description}>
                {item.description.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
