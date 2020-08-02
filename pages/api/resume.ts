const fs = require('fs')
const { join } = require('path')

export default async (req, res) => {

  const fileName = 'resume.pdf'
  const filePath = join(process.cwd(), 'public', 'assets', fileName)
  const stat = fs.statSync(filePath)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Length', stat.size)

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)

}