import Link from 'next/link'
import Container from './container'
import Icon from 'svg-react-loader?name=Icon!../public/images/twitter.svg';


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://github.com/Lantianyou/nextjs-blog">
              <a className="mx-3 font-bold hover:underline">View on GitHub</a>
            </Link>
            <Link href="https://twitter.com/dtlantianyou">
              <a className="mx-3 font-bold hover:underline">twitter</a>
            </Link>
            
          </div>
        </div>
      </Container>
    </footer>
  )
}
