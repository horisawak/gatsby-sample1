import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

type DataProps = {
  mdx: {
    frontmatter: {
      date: string
      title: string
    }
  }
}

const BlogPost = ({ data, children }: {
  data: DataProps;
  children: any;
}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
