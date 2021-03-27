import React from "react";
import Emoji from "./emoji";

const Reaction = (id) => {
    console.log({id})

  const handleReaction = (reaction) => {
    console.log({ reaction });
    fetch("/.netlify/functions/save-post-reaction", {
      method: "POST",
      body: JSON.stringify({
        id,
        reaction
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <ul>
      <li onClick={() => handleReaction("happy")}>
        <Emoji ariaLabel="Face with hearts for eyes" symbol="😍" />
      </li>
      <li onClick={() => handleReaction("unimpressed")}>
        <Emoji ariaLabel="Unimpressed face with straight mouth" symbol="😐" />
      </li>
      <li onClick={() => handleReaction("sad")}>
        <Emoji ariaLabel="Sad face" symbol="😩" />
      </li>
    </ul>
  );
};

export default Reaction;
