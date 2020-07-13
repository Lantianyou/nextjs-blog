import CoverImage from './cover-image'
import Avatar from './avatar'
import PostTitle from './post-title'
import DateFormater from './post-date'

export default function PostHeader({ title, coverImage, date, author }) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="hidden md:block md:mb-12">
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                <CoverImage title={title} src={coverImage} slug={author} />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div className="mb-6 text-lg">
                    <DateFormater dateString={date} />
                </div>
            </div>
        </>
    )
}