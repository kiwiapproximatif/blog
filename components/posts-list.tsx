import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react"
import { PostMeta } from "../types"
import Title from "./title"
import Subtitle from "./subtitle"
import Description from "./description"
import Link from "./link"
import Tags from "./tags"


interface PostsListItemProps {
    key: string,
    post: PostMeta
}

interface PostsListProps {
    posts: PostMeta[]
}

const PostsListItem = ({ post }: PostsListItemProps) => {
    return (
        <Box>
            <VStack
                spacing={0}
                align="stretch"
            >
                <Title>{post.title}</Title>
                <Subtitle>Published on {post.publishedAt}</Subtitle>
                <Description mt={2}>{post.description}</Description>
                <Flex alignItems={"center"}>
                    <Tags tags={post.tags} />
                    <Spacer />
                    <Link href={`/posts/${post.title.replaceAll(" ", "-").toLowerCase()}`} title="See more"/>
                </Flex>
                
            </VStack>
        </Box>
    )
}

const PostsList = ({ posts }: PostsListProps) => {
    return (
        <VStack
            spacing={2}
            align="stretch"
        >
            {posts.length > 0 ? (
                posts.map((post: PostMeta, index: number) => (
                    <PostsListItem key={`${index}-${post.title}`} post={post} />
                ))
            ) : (
                <Center><Text>Nevermind... no post.</Text></Center>
            ) }
            
        </VStack>
    )
}

export default PostsList