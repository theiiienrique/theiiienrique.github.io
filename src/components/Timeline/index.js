import React from "react";
import styles from "./styles.module.css";

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineMarker} />
          <div className={styles.timelineContent}>
            <div className={styles.company}>
              <h3>{item.company}</h3>
              {item.roles && (
                <div className={styles.roles}>
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={styles.role}>
                      <div className={styles.roleHeader}>
                        <span className={styles.title}>{role.title}</span>
                        <span className={styles.dateRange}>
                          {role.dateRange}
                        </span>
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
