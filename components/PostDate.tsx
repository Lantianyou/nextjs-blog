import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
    if (!dateString) {
        return <div>time</div>
    }
    const date = parseISO(dateString)

    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>

}