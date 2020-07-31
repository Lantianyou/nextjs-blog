import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div>
          {preview ? (
            <div className="py-2 text-center text-sm flex justify-center">
              <a href='https://drive.google.com/file/d/1xdfY1iilJy5ciTbGk5KezG0cqnPtOhix/view?usp=sharing' className="underline hover:text-cyan duration-200 transition-colors mx-10"
              >正在找工作：求职信</a>

              <a
                href="https://drive.google.com/file/d/1fYUWbfEQARGHPFZ0r349N7b4UjoNCzbB/view?usp=sharing"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                简历
              </a>{' '}
            </div>

          ) : (
              <>
                {/* The source code for this blog is{' '} */}
              </>
            )}
        </div>
      </Container>
    </div>
  )
}
