import {Badge, Heading, Box, Center, Flex, Spacer, Text, TextProps, VStack, Wrap, WrapItem} from "@chakra-ui/react"
import {PostMeta as PostMetaInterface} from "../types"
import Link from "./link"

interface PostDescriptionProps extends TextProps {
}

interface PostSubtitleProps extends TextProps {
}

interface PostTitleProps extends TextProps {
}

interface PostMetaProps {
    meta: PostMetaInterface,
    isIndex: boolean
}

interface PostsListItemProps {
    key: string,
    meta: PostMetaInterface
}

interface PostsListProps {
    posts: PostMetaInterface[]
}

interface PostTagsProps {
    tags: string[]
}

const publishedAtFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
} as const

const PostTitle = ({...props}: PostTitleProps) => {
    return (
        <Heading fontSize="3xl"  {...props}>{props.children}</Heading>
    )
}

const PostSubtitle = ({...props}: PostSubtitleProps) => {
    return (
        <Text fontSize="sm" {...props}>{props.children}</Text>
    )
}

const PostTags = ({tags}: PostTagsProps) => {
    return (
        <Box py={2} maxW="md">
            <Wrap>
                {tags.map((tag: string, index: number) => (
                    <WrapItem key={`item-${index}-${tag}`}>
                        <Badge mx={0} px={1} key={`${index}-${tag}`}>{tag}</Badge>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

const PostDescription = ({...props}: PostDescriptionProps) => {
    return (
        <Box>
            <Text textAlign="justify" {...props}>
                {props.children}
            </Text>
        </Box>
    )
}

export const PostMeta = ({meta, isIndex}: PostMetaProps) => {
    const [day, month, year] = meta.publishedAt.split("/")
    const publishedAt = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const formattedPublishedAt = publishedAt.toLocaleDateString("fr-FR", publishedAtFormat)

    return (
        <VStack
            spacing={0}
            align="stretch"
        >
            <PostTitle>· {meta.title}</PostTitle>
            {isIndex ? (
                <Box>
                    <PostTags tags={meta.tags}/>
                    <PostDescription my={2}>{meta.description}</PostDescription>
                    <Flex alignItems={"center"}>
                        <PostSubtitle>Publié le {formattedPublishedAt}</PostSubtitle>
                        <Spacer/>
                        <Link href={`/posts/${meta.title.replaceAll(" ", "-").toLowerCase()}`} title="Lire la suite" arrowDirection="right"/>
                    </Flex>
                </Box>
            ) : (
                <Box>
                    <PostTags tags={meta.tags}/>
                    <PostSubtitle>Publié le {formattedPublishedAt}</PostSubtitle>
                </Box>
            )}

        </VStack>
    )
}

const PostsListItem = ({meta}: PostsListItemProps) => {
    return (
        <PostMeta meta={meta} isIndex={true}/>
    )
}

export const PostsList = ({posts}: PostsListProps) => {
    return (
        <VStack
            spacing={2}
            align="stretch"
        >
            {posts.length > 0 ? (
                posts.map((meta: PostMetaInterface, index: number) => (
                    <PostsListItem key={`${index}-${meta.title}`} meta={meta}/>
                ))
            ) : (
                <Center><Text>Aucun article...</Text></Center>
            )}

        </VStack>
    )
}