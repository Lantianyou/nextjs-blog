import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString)
    return <time style={{ color: '#666', fontSize: '0.6875rem' }} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}