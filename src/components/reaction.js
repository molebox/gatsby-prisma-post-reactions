import React from 'react';

export default Reaction = () => {

    const handleReaction = (reaction) => {
        console.log({ reaction })
    }

    return (
        <ul>
            <li onClick={() => handleReaction(happy)}>
                <Emoji ariaLabel="Face with hearts for eyes" symbol="😍" />
            </li>
            <li onClick={() => handleReaction(unimpressed)}>
                <Emoji ariaLabel="Unimpressed face with straight mouth" symbol="😐" />
            </li>
            <li onClick={() => handleReaction(sad)}>
                <Emoji ariaLabel="Sad face" symbol="😩" />
            </li>
        </ul>
    )
}