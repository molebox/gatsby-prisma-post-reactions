import React from 'react';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default PostTemplate = ({ data, pageContext }) => {
    const { frontmatter, body, slug } = data.mdx;
    const { title } = frontmatter;
    const { previous, next } = pageContext;

    return (
        <>
            <h1>{title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
        </>
    )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      slug
      body
    }
  }
`;