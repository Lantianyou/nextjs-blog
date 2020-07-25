import unified from 'unified'
import markdown from 'remark-parse'
import { readFileSync } from 'fs'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'


export const getPost = async (fileName = './lib/example.md') => {

  const processor = await unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(stringify)
    .process(readFileSync(fileName))

  return processor.toString()

}