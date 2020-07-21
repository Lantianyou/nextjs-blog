import Link from "next/link"
import cn from 'classnames'
import Toggle from "components/Toggle"

export default function SiteNav({ passCover }) {
    return (<nav className={cn('mx-auto max-w-2xl my-4 flex justify-between text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight', { fixed: !passCover })}>
        <Link href="/" as='/'>
            <a className="hover:underline" style={{ width: '95%' }}>Blog</a>
        </Link>
        <Toggle />
    </nav>)
}