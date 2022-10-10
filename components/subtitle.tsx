import { Text, TextProps } from "@chakra-ui/react"
import { ChildrenProp } from "../types"

interface SubtitleProps extends TextProps { }

const Subtitle = ({ ...props }: SubtitleProps) => {
    return (
        <Text fontSize="sm" as="i" {...props}>{props.children}</Text>
    )
}

export default Subtitle