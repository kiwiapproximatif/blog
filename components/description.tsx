import { ChildrenProp } from "../types"
import { Box, Text, TextProps } from "@chakra-ui/react"

interface DescriptionProps extends TextProps { }

const Description = ({ ...props }: DescriptionProps) => {
    return (
        <Box>
            <Text {...props}>
                {props.children}
            </Text>
        </Box>
    )
}

export default Description