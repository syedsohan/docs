import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './video.module.css';
import VideoNavBoxes from '../components/video-page/navBoxes';
import { Redirect } from '@docusaurus/router';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Video Tips and Tutorials</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // return <Redirect to="/docs/intro" />;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <VideoNavBoxes />
      </main>
    </Layout>
  );
}