import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <Link href="/" as='/'>
                <a className="leading-snug my-4 text-xl mb-8">Blog</a>
            </Link>
        </nav>
    )
}
