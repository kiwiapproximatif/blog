import { readFileSync } from "fs"
import matter from "gray-matter"
import { Helpers } from "../../../helpers"


const handler = (req: any, res: any) => {
    const { slug } = req.query

    const postFullPath = `${Helpers.POSTS_DIRECTORY}/${slug}.md`
    const fileContents = readFileSync(postFullPath, "utf8")
    const { data, content } = matter(fileContents)
    const { title, author, description, tags, publishedAt } = data

    return res.status(200).json({ 
        meta: {
            title,
            author,
            description,
            tags,
            publishedAt
        }, 
        content
    })
}

export default handler