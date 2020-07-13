import NextLink from "next/link"

export default function Nav() {
    return (
        <nav>
            <NextLink href="/">
                <a className="leading-snug my-4 text-xl mb-8">Blog</a>
            </NextLink>
        </nav>
    )
}
