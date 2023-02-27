import * as React from 'react'
import { ReactNode } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import * as styles from './layout.module.css'

const Layout = ({ pageTitle, children }: {
  pageTitle: string;
  children: ReactNode;
}) => {
  const data = useSiteMetadata()

  return (
    <div className={styles.container}>
      <header className={styles.site_title}>{data.title}</header>
      <nav>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link_item}>
            <Link to="/" className={styles.nav_link_text}>Home</Link>
          </li>
          <li className={styles.nav_link_item}>
            <Link to="/about" className={styles.nav_link_text}>About</Link>
          </li>
          <li className={styles.nav_link_item}>
            <Link to="/blog" className={styles.nav_link_text}>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
