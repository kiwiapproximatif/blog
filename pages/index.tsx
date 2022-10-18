import {GetStaticProps, InferGetStaticPropsType} from "next"
import Base from "../components/base"
import {PostsList} from "../components/posts"
import {Helpers} from "../helpers"
import {PostMeta} from "../types"
import Head from "next/head";


const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
            <Base>
                <Head>
                    <title>Tous les articles</title>
                    <meta property="og:title" content="Tous les articles concernant mon blog" key="tous-les-articles"/>
                    <meta name="description" content="Tous les articles conernenant mon blog."/>
                </Head>
                <PostsList posts={posts}/>
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