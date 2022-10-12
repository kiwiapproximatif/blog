import {join} from "path"
import matter from "gray-matter"
import {readdirSync, readFileSync} from "fs"


const POSTS_DIRECTORY = join(process.cwd(), "public/posts")

const getAllPosts = () => {
    const allPostsFilename = readdirSync(POSTS_DIRECTORY)

    return allPostsFilename.map((filename) => {
        const postFullPath = `${Helpers.POSTS_DIRECTORY}/${filename}`
        const fileContents = readFileSync(postFullPath, "utf8")
        const {data} = matter(fileContents)
        const {title, author, description, tags, publishedAt} = data

        return {title, description, tags, publishedAt}
    })

}

const getPostBySlug = (slug: string) => {
    const postFullPath = `${POSTS_DIRECTORY}/${slug}.md`
    const fileContents = readFileSync(postFullPath, "utf8")
    const {data, content} = matter(fileContents)
    const {title, description, tags, publishedAt} = data

    return {
        meta: {
            title,
            description,
            tags,
            publishedAt
        },
        content
    }
}

const getAllPostsSlugs = () => {
    let allPostsFilename = readdirSync(POSTS_DIRECTORY)

    return allPostsFilename.map((filename) => {
        const postFullPath = `${Helpers.POSTS_DIRECTORY}/${filename}`
        const fileContents = readFileSync(postFullPath, "utf8")
        const {data} = matter(fileContents)
        const {title} = data

        return {params: {slug: title.replaceAll(' ', '-').toLowerCase()}}
    })
}

export const Helpers = {
    POSTS_DIRECTORY,
    getAllPostsSlugs,
    getPostBySlug,
    getAllPosts
}
