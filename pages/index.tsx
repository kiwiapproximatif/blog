import { GetStaticProps, InferGetStaticPropsType } from "next"
import Base from "../components/base"
import PostsList from "../components/posts-list"
import { Helpers } from "../helpers"
import { PostMeta } from "../types"


const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Base>
            <PostsList posts={posts} />
        </Base>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts: PostMeta[] = Helpers.getAllPosts()

    return {
        props: {
            posts
        }
    }
}

export default Home