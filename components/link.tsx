import NextLink from 'next/link'
import {Link as ChakraLink, Text} from '@chakra-ui/react'

interface LinkProps {
    href: string,
    title: string
}

const Link = ({href, title}: LinkProps) => {
    return (
        <NextLink href={href} passHref>
            <ChakraLink>
                <Text as="u">
                    {title}
                </Text>
            </ChakraLink>
        </NextLink>
    )
}

export default Link