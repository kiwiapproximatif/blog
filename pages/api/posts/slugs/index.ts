import matter from "gray-matter"
import { readdirSync, readFileSync } from "fs"
import { Helpers } from "../../../../helpers"


const handler = (req: any, res: any) => {
    const allPostsFilename = readdirSync(Helpers.POSTS_DIRECTORY)

    return res.status(200).json(
        allPostsFilename.map((filename) => {
            const postFullPath = `${Helpers.POSTS_DIRECTORY}/${filename}`
            const fileContents = readFileSync(postFullPath, "utf8")
            const { data } = matter(fileContents)
            const { title } = data

            return { params: { slug: title.replaceAll(' ', '-').toLowerCase() } }
        })
    )
}

export default handler