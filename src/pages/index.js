import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroInner)}>
        <p className={styles.eyebrow} aria-hidden="true">
          <span className={styles.flourishLine} />
          <span className={styles.flourishMark}>*</span>
          <span className={styles.flourishLine} />
        </p>
        <Heading as="h1" className={clsx("hero__title", styles.title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            View samples
          </Link>
          <Link className={clsx("button button--lg", styles.ghostButton)} to="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Technical writer portfolio featuring docs-as-code workflows, API and product documentation samples, and writing systems built by Enrique Martinez III."
    >
      <div className="homepage">
        <HomepageHeader />
        <main>{<HomepageFeatures />}</main>
      </div>
    </Layout>
  );
}
