import { Badge, Box, HStack, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react"

interface TagsProps {
    tags: string[]
}

const Tags = ({tags}: TagsProps) => {
    return (
        <Box py={2} maxW="md">
            <Wrap>
                {tags.map((tag: string, index: number) => (
                    <WrapItem>
                    <Badge mx={0} px={0} key={`${index}-${tag}`}>{tag}</Badge>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

export default Tags