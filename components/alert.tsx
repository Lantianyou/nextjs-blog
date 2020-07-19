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
            <div className="py-2 text-center text-sm">
              This is page is a preview.{' '}
              <a
                href="/about"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                应届生——正在找工作
              </a>{' '}
              to exit preview mode.
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
