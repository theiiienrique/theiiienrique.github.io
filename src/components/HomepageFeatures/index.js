import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'High-quality documentation',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Skilled in creating high-quality documentation for software products.
      </>
    ),
  },
  {
    title: 'Proficient with technical writing tools',
    Svg: require('@site/static/img/undraw_version_control.svg').default,
    description: (
      <>
        Proficient with technical writing tools such as Markdown, Docusaurus,
        Git, and docs-as-code workflows.
      </>
    ),
  },
  {
    title: 'API documentation',
    Svg: require('@site/static/img/undraw_launch_day.svg').default,
    description: (
      <>
        Experienced in writing API documentation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
