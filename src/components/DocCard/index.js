import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function DocCard({ title, description, image, link, tags }) {
  return (
    <Link to={link} className={styles.docCard}>
      <div className={styles.imageContainer}>
        {image && <img src={image} alt={title} className={styles.image} />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
