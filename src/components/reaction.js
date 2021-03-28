import React from "react";
import { Box } from "theme-ui";
import Angry from "./reactions/angry";
import Happy from "./reactions/happy";
import Yawn from "./reactions/yawn";

const Reaction = (id) => {
  console.log({ id });

  const handleReaction = (reaction) => {
    console.log({ reaction });
    fetch("/.netlify/functions/save-post-reaction", {
      method: "POST",
      body: JSON.stringify({
        id,
        reaction,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <Box
      as="ul"
      sx={{
        display: "flex",
        listStyle: "none",
      }}
    >
      <li onClick={() => handleReaction("happy")}>
        <Happy />
      </li>
      <li onClick={() => handleReaction("unimpressed")}>
        <Yawn />
      </li>
      <li onClick={() => handleReaction("sad")}>
        <Angry />
      </li>
    </Box>
  );
};

export default Reaction;
