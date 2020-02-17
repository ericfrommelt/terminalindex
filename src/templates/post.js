 import React from 'react'
 import SEO from "../components/seo"
 import { graphql } from 'gatsby'
 import { MDXRenderer } from 'gatsby-plugin-mdx'
 import styles from './post.module.css'
 import Layout from '../components/layout'

 export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        emoji
        tags
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
 `

 const PostTemplate = ({ data: { mdx: post } }) => (
   <Layout>
     <SEO title="post" />
     <div className={styles.wrapper}>
      <MDXRenderer>{post.body}</MDXRenderer>
      <div className={styles.metaOne}>{post.frontmatter.date}</div>
      <div className={styles.metaTwo}>{post.frontmatter.author}</div>
      <div className={styles.metaThree}>{post.frontmatter.tags}</div>
      <div className={styles.metaFour}>{post.frontmatter.emoji}</div>
     </div>
   </Layout>
 )

 export default PostTemplate