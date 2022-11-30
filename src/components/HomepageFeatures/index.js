import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/desc.svg').default,
    description: (
      <>
        LinkORB is a software development company which develops web based applications for several markets. We are very active in healthcare, small-to-medium-sized businesses and marketing and sales.
      </>
    ),
  },
  {
    title: 'Contact Information',
    Svg: require('@site/static/img/contact.svg').default,
    description: (
      <>
        
        Phone: +3110 714 46 55<br></br> Email: info@linkorb.com
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
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
