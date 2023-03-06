import path from 'path'
import express from 'express'

const environments = ['production', 'staging', 'development']
export const app = express()


app.get('/', function (req, res) {
  res.json({
    path: path.resolve('/foo/bar/baz', '../ber', 'bir')
  })
})

if (environments.includes(String(process.env.NODE_ENV))) {
  app.listen(3000)
}
