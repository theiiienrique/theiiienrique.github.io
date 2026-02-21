import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function DocCard({ title, description, image, link, tags }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      // image was cached and already loaded
      setImageLoaded(true);
    }
  }, [image]);

  return (
    <Link to={link} className={styles.docCard}>
      <div className={styles.imageContainer}>
        {image ? (
          <>
            <img
              ref={imgRef}
              src={image}
              alt={title}
              className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <div className={styles.skeleton} />}
          </>
        ) : (
          <div className={styles.noImage}>
            <span>Documentation Sample</span>
          </div>
        )}
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
        <div className={styles.footer}>
          View sample
        </div>
      </div>
    </Link>
  );
}
