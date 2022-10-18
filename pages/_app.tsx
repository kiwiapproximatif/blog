import "@fontsource/roboto-slab"
import "@fontsource/ibm-plex-serif"

import '../styles/prism-gist.css'

import "@fontsource/ibm-plex-serif/100.css"
import "@fontsource/ibm-plex-serif/200.css"
import "@fontsource/ibm-plex-serif/300.css"
import "@fontsource/ibm-plex-serif/400.css"
import "@fontsource/ibm-plex-serif/500.css"
import "@fontsource/ibm-plex-serif/600.css"
import "@fontsource/ibm-plex-serif/700.css"

import "@fontsource/roboto-slab/100.css"
import "@fontsource/roboto-slab/200.css"
import "@fontsource/roboto-slab/300.css"
import "@fontsource/roboto-slab/400.css"
import "@fontsource/roboto-slab/500.css"
import "@fontsource/roboto-slab/600.css"
import "@fontsource/roboto-slab/700.css"
import "@fontsource/roboto-slab/800.css"
import "@fontsource/roboto-slab/900.css"


import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../theme'


const App = ({Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App
