import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body, id, slug } = data.mdx;
  const { title } = frontmatter;
  const { previous, next } = pageContext;

  return (
    <>
      <h1>{title}</h1>
      <MDXRenderer postId={id}>{body}</MDXRenderer>
    </>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
      slug
      body
    }
  }
`;
