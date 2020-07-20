const fs = require('fs')
const path = require('path')

export default (req, res) => {

  // filename only
  const fileName = 'resume.pdf'
  const filePath = path.join(process.cwd(), 'public', 'assets', fileName)
  const stat = fs.statSync(filePath)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Length', stat.size)

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)

}