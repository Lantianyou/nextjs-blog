import { ReactNode, FunctionComponent } from "react"

const PostBody: FunctionComponent<ReactNode> = ({ children }) => {
    return (
        <article id="article-top" className='max-w-2xl mx-auto'>
            {children}
        </article >
    )
}

export default PostBody