import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title }: {
  title: string;
}) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    url: `${siteUrl}`,
  }

  return (
    <>
      <title>{title} | {seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  )
}

export default Seo
