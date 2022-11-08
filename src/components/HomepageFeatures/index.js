import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Autoscaling',
    Svg: require('@site/static/img/autoscaling.svg').default,
    description: (
      <>
        Clouddley is designed to autoscale your infrastructure to meet your needs. You will never have to worry about scaling up or down.
      </>
    ),
  },
  {
    title: 'Multiple Runtime Environments',
    Svg: require('@site/static/img/runtime.svg').default,
    description: (
      <>
        You can deploy any of your favorite frameworks and languages to Clouddley.
          We support Node.js, Python, Ruby, PHP, Java, Go, .NET, and more.
      </>
    ),
  },
  {
    title: 'DDOS Mitigation',
    Svg: require('@site/static/img/mitigation.svg').default,
    description: (
      <>
       Clouddley's global network protects your application from DDoS attacks and other threats.
          We offer CDN and WAF services to protect your application.
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
        <h3>{title}</h3>
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
