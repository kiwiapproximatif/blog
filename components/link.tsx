import NextLink from 'next/link'
import {Link as ChakraLink, Text} from '@chakra-ui/react'

interface LinkProps {
    href: string,
    title: string,
    arrowDirection?: string
}

const Link = ({href, title, arrowDirection}: LinkProps) => {
    const arrow = (arrowDirection === "left") ? "< " : " >"

    return (
        <NextLink href={href} passHref>
            <ChakraLink>
                {arrowDirection === "left" && <Text>
                    {arrow}
                    <Text as="u">
                        {title}
                    </Text>
                </Text>}

                {arrowDirection === "right" && <Text>
                    <Text as="u">
                        {title}
                    </Text>
                    {arrow}
                </Text>}

                {arrowDirection === undefined && <Text as="u">
                    {title}
                </Text>}
            </ChakraLink>
        </NextLink>
    )
}

export default Link