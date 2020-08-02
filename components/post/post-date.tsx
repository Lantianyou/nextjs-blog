import { parseISO, format } from 'date-fns'
import { FunctionComponent } from 'react'

const Date: FunctionComponent<{ dateString: string }> = ({ dateString }) => {
    const date = parseISO(dateString)
    return <time style={{ color: '#666', fontSize: '0.6875rem' }} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date