import {Box, Divider, Heading, ListItem, OrderedList, Text, UnorderedList} from "@chakra-ui/react"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import Code from "./code"
import Link from "./link"


interface ContentProps {
    content: MDXRemoteSerializeResult
}

const customComponents = {
    p: (props: any) => <Text mb={4} textAlign="justify" {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    ol: (props: any) => <OrderedList {...props} />,
    li: (props: any) => <ListItem {...props} />,
    a: (props: any) => <Link {...props} />,
    code: (props: any) => <Code code={props.children} language={props.className}/>,
    h2: (props: any) => <Box mt={8} mb={4}>
        <Heading as="h2" fontSize="xl" mb={4} {...props} />
        <Divider />
    </Box>,
    h3: (props: any) => <Heading as="h3" fontSize="md" mb={4} {...props} />,
}

const Content = ({content}: ContentProps) => (
    <Box mt={4}>
        <MDXRemote {...content} components={customComponents}/>
    </Box>
)

export default Content