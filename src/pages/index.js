import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'


const BlogLink = styled(Link)`
  text-decoration: none; 
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: purple; 
`

export default ({data}) => {
  console.log(data);
  return (
  <Layout>
    <Seo title="Home" />
    <div>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key = {node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                    {node.frontmatter.title} - {node.frontmatter.date}
                </BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
  )
}

export const query = graphql`
  query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
        fields{
          slug
        }
        excerpt
      }
    }
  }
}`
