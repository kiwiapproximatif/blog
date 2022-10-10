import { Post, PostParams } from "../../types"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Base from "../../components/base"
import { serialize } from 'next-mdx-remote/serialize'
import Content from "../../components/content"
import Meta from "../../components/meta"

const Post = ({ meta, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Base>
            <Meta meta={meta} />
            <Content content={content} />
        </Base>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`${process.env.API_URL}/api/posts/slugs`)
    const paths = await response.json()

    console.log('paths------------------', paths)

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as PostParams
    const response = await fetch(`${process.env.API_URL}/api/posts/${params.slug}`)
    const { meta, content }: Post = await response.json()

    return {
        props: {
            meta,
            content: await serialize(content)
        }
    }
}

export default Post