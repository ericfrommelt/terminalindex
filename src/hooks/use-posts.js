import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            emoji
            tags
            date(formatString: "MMMM DD, YYYY")
          }
          body
        }
      }
    }  
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    emoji: post.frontmatter.emoji,
    tags: post.frontmatter.tags,
    date: post.frontmatter.date,
    body: post.body,
  }));
};

export default usePosts;