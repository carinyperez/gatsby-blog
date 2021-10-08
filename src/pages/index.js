import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default ({data}) => {
  console.log(data);
  return (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1>Cariny's thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key = {node.id}>
              <h2>{node.frontmatter.title} - {node.frontmatter.date}</h2>
              <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
  )
}

export const query = graphql`
  query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        fileAbsolutePath
        frontmatter {
          date
          description
          title
        }
        excerpt
      }
    }
  }
}`
