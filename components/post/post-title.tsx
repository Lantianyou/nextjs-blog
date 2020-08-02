import { FunctionComponent, ReactNode } from "react"

const PostTitle: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return (
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
            {children}
        </h1>
    )
}

export default PostTitle