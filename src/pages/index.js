import React from 'react';
import { graphql } from 'gatsby';

export default Index = ({ data }) => {

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export const query = graphql`
  query BlogIndexQuery {
    allMdx(
      sort: { fields: [frontmatter___category], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;