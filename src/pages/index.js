import React from "react";
import { graphql } from "gatsby";

const Home = ({ data }) => {
  //console.log({ data })

  React.useEffect(() => {
    fetch("/.netlify/functions/save-post-reaction", {
      method: "POST",
      body: JSON.stringify({ appSays: "boop" }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;

export const query = graphql`
  query BlogIndexQuery {
    allMdx {
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
