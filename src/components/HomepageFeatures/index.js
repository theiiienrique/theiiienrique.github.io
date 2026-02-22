import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const CARD_LAYOUT = "centered";

function DocsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.8" strokeLinecap="round" d="M7 3.75h7.5L19.25 8.5V19A1.25 1.25 0 0 1 18 20.25H7A1.25 1.25 0 0 1 5.75 19V5A1.25 1.25 0 0 1 7 3.75Z" />
      <path strokeWidth="1.8" strokeLinecap="round" d="M14.5 3.75V8.5h4.75M8.75 12h7.5M8.75 15.5h5.5" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" d="m8 7-4 5 4 5M16 7l4 5-4 5M14 5l-4 14" />
    </svg>
  );
}

function TeamIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="8" cy="8" r="2.25" strokeWidth="1.8" />
      <circle cx="16" cy="8" r="2.25" strokeWidth="1.8" />
      <path strokeWidth="1.8" strokeLinecap="round" d="M3.75 18.25c.5-2.4 2.1-3.75 4.25-3.75s3.75 1.35 4.25 3.75M11.75 18.25c.5-2.4 2.1-3.75 4.25-3.75s3.75 1.35 4.25 3.75" />
    </svg>
  );
}

const FeatureList = [
  {
    title: "User-focused documentation",
    Icon: DocsIcon,
    description: (
      <>
        I create clear, comprehensive documentation that helps users
        succeed—from product guides to API references to technical how-tos.
      </>
    ),
  },
  {
    title: "Docs-as-code expertise",
    Icon: CodeIcon,
    description: (
      <>
        I build modern documentation systems with Git workflows, static site
        generators, automated linting, and CI/CD pipelines.
      </>
    ),
  },
  {
    title: "Collaborative approach",
    Icon: TeamIcon,
    description: (
      <>
        I partner with engineering, product, and design teams to deliver
        accurate, actionable content that drives adoption.
      </>
    ),
  },
];

function Feature({ Icon, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <article
        className={clsx(
          styles.featureCard,
          CARD_LAYOUT === "centered" && styles.featureCardCentered
        )}
      >
        <div className={styles.iconBadge} aria-hidden="true">
          <Icon className={styles.featureIcon} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionLead}>
          <p>What I Bring</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
