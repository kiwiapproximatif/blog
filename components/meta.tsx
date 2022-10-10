import { PostMeta } from "../types"
import Title from "./title"
import Subtitle from "./subtitle"
import { Box, Divider, Text, VStack } from "@chakra-ui/react"
import Tags from "./tags"
import Link from "./link"

interface MetaProps {
    meta: PostMeta
}

const Meta = ({ meta }: MetaProps) => {
    return (
        <Box>
            <VStack
                spacing={0}
                align="stretch"
            >
                <Title>{meta.title}</Title>
                <Subtitle>Published on {meta.publishedAt}</Subtitle>
                <Tags tags={meta.tags} />
            </VStack>
        </Box>
    )
}

export default Meta