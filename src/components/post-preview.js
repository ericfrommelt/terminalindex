import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from './post-preview.module.css'

const PostPreview = ({ post }) => (
  <article className={styles.wrapper}>
    <div className={styles.metaTop}>
      <div className={styles.metaOne}>{post.date}</div>
      <div className={styles.metaLine}></div>
      <div className={styles.metaTwo}>{post.title}</div>
    </div>
    <div className={styles.contentWrapper}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
    <div className={styles.metaBottom}>
      <div className={styles.metaThree}>{post.tags}</div>
      <div className={styles.metaFour}>{post.emoji}</div>
    </div>
  </article>
)

export default PostPreview