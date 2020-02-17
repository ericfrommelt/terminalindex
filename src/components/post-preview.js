import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => (
  <article>
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>Read more.</Link>
  </article>
)

export default PostPreview