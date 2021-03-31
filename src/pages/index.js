import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const Home = ({ data }) => {
  const {nodes} = data.allMdx;
  console.log({ data })

  React.useEffect(() => {
    fetch("/.netlify/functions/save-post-reaction", {
      method: "POST",
      body: JSON.stringify({ appSays: "boop" }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <Layout>
      <h1>Hello</h1>
      {nodes.map(({fields: {slug}, frontmatter: {title}}) => (
        <Link
        to={slug}
        >
          {title}
        </Link>
      ))}
    </Layout>
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
