import { GetStaticProps, InferGetStaticPropsType } from "next"
import Base from "../components/base"
import PostsList from "../components/posts-list"
import { PostMeta } from "../types"


const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Base>
            <PostsList posts={posts} />
        </Base>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch(`${process.env.API_URL}/api/posts`)
    const posts: PostMeta[] = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Home