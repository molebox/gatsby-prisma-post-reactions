import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Reaction from './src/components/reaction'

const components = {
    Reaction
}

export const wrapRootElement = ({element}) => (
    <MDXProvider components={components}>
    {element}
  </MDXProvider>
)