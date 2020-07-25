import unified from 'unified'
import markdown from 'remark-parse'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'
import { readFile } from 'fs/promises'
import { readFileSync } from 'fs'


export const getPost = async (fileName = './lib/example.md') => {

  const processor = await unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(stringify)

  return processor.processSync(readFileSync(fileName)).toString()

}