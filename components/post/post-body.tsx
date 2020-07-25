import styles from './github-markdown.module.css'
import cn from 'classnames'
export default function PostBody({ children }) {
    return (
        <article className={cn('max-w-2xl', 'mx-auto', 'markdown-body', styles['markdown-body'])}>
            {children}
        </article >
    )
}
