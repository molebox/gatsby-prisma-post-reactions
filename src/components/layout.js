import React from 'react';
import { Box } from 'theme-ui';

const Layout = ({children}) => {

    return (
        <Box
        variant="layout"
        as="main">
        {children}
        </Box>
    )
}

export default Layout;