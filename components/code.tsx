import {Box, Code as ChakraCode} from "@chakra-ui/react"
import Prism from "prismjs";
import {useEffect} from "react";

// PrismJS extensions
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import "prismjs/components/prism-jsx.min"
import "prismjs/components/prism-python.min"
import "prismjs/components/prism-bash"


interface CodeProps {
    code: string,
    language: string
}

const Code = ({code, language}: CodeProps) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <Box mb={4} borderWidth='1px' p={2}>
            <ChakraCode
                background="none"
                className={language}
            >
                {code}
            </ChakraCode>
        </Box>
    )
}

export default Code