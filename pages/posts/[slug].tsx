import { Post, PostParams } from "../../types"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Base from "../../components/base"
import { serialize } from 'next-mdx-remote/serialize'
import Content from "../../components/content"
import Meta from "../../components/meta"
import { Helpers } from "../../helpers"

const Post = ({ meta, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Base>
            <Meta meta={meta} />
            <Content content={content} />
        </Base>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Helpers.getAllPostsSlugs(),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as PostParams
    const { meta, content }: Post = Helpers.getPostBySlug(params.slug)

    return {
        props: {
            meta,
            content: await serialize(content)
        }
    }
}

export default Post