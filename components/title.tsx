import { Text, TextProps } from "@chakra-ui/react"

interface TitleProps extends TextProps { }

const Title = ({ ...props }: TitleProps) => {
    return (
        <Text fontSize="3xl" {...props}>{props.children}</Text>
    )
}

export default Title