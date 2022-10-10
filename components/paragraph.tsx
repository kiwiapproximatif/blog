import { Text, TextProps } from "@chakra-ui/react"

interface ParagraphProps extends TextProps {}

const Paragraph = ({...props}: ParagraphProps) => {
    return (
        <Text mb={4} {...props}>{props.children}</Text>
    )
}

export default Paragraph