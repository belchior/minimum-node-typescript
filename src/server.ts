import path from 'path'
import express, { Request, Response } from 'express'

const environments = ['production', 'staging', 'development']
export const app = express()

app.get('/', function (req: Request, res: Response) {
  res.json({
    path: path.resolve('/foo/bar/baz', '../ber', 'bir')
  })
})

console.log('environment:', process.env.NODE_ENV)
if (environments.includes(String(process.env.NODE_ENV))) {
  app.listen(3000)
  console.log('server started')
}
