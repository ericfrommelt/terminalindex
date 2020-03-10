import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import styles from './index.module.css'


export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};