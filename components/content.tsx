import {Box, ListItem, OrderedList, Text, UnorderedList} from "@chakra-ui/react"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import Code from "./code"
import Link from "./link"


interface ContentProps {
    content: MDXRemoteSerializeResult
}

const customComponents = {
    p: (props: any) => <Text mb={4} {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    ol: (props: any) => <OrderedList {...props} />,
    li: (props: any) => <ListItem {...props} />,
    a: (props: any) => <Link {...props} />,
    code: (props: any) => <Code code={props.children} language={props.className}/>
}

const Content = ({content}: ContentProps) => (
    <Box mt={4}>
        <MDXRemote {...content} components={customComponents}/>
    </Box>
)

export default Content