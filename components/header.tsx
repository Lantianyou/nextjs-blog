import Link from "next/link"
import Toggle from "./Toggle"

export default function Header() {
    return (
        <h2 className="flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            <Link href="/">
                <a className="w-1/24 hover:underline">Blog</a>
            </Link>
            <Toggle />
        </h2>
    )
}