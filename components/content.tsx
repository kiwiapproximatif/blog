import { Box, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Code from "./code";
import Link from "./link";
import Paragraph from "./paragraph"


interface ContentProps {
    content: MDXRemoteSerializeResult
}

const customComponents = {
    p: (props: any) => <Paragraph {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    ol: (props: any) => <OrderedList {...props} />,
    li: (props: any) => <ListItem {...props} />,
    a: (props: any) => <Link {...props} />,
    code: (props: any) => <Code code={props.children} language={props.className} />
}

const Content = ({ content }: ContentProps) => (
    <Box mt={4}>
        <MDXRemote {...content} components={customComponents} />
    </Box>
)

export default Content