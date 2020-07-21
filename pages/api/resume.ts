import fs from 'fs'
import path from 'path'

export default async (req, res) => {


  const fileName = 'resume.pdf'
  const filePath = path.join(process.cwd(), 'public', 'assets', fileName)
  const stat = fs.statSync(filePath)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Length', stat.size)

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)

}