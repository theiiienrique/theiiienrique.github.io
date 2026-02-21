import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "User-focused documentation",
    Svg: require("@site/static/img/undraw_programming.svg").default,
    description: (
      <>
        I create clear, comprehensive documentation that helps users
        succeed—from product guides to API references to technical how-tos.
      </>
    ),
  },
  {
    title: "Docs-as-code expertise",
    Svg: require("@site/static/img/undraw_version_control.svg").default,
    description: (
      <>
        I build modern documentation systems with Git workflows, static site
        generators, automated linting, and CI/CD pipelines.
      </>
    ),
  },
  {
    title: "Collaborative approach",
    Svg: require("@site/static/img/undraw_launch_day.svg").default,
    description: (
      <>
        I partner with engineering, product, and design teams to deliver
        accurate, actionable content that drives adoption.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <article className={styles.featureCard}>
        <Svg className={styles.featureSvg} role="img" />
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
