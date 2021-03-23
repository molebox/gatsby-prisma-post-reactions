import React from 'react';

export default Emoji = ({ ariaLabel, symbol }) => (
    <span role="img" aria-label={ariaLabel}>
        {symbol}
    </span>
);
