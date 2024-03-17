import path from 'path'
import express, { Request, Response } from 'express'
import { startConnection } from '../database/connection'

const environments = ['production', 'staging', 'development']
const {
  NODE_ENV,
  SERVER_PORT,
} = process.env

export const app = express()

async function main() {
  await startConnection()

  app.get('/', function (req: Request, res: Response) {
    res.json({
      path: path.resolve('/foo/bar/baz', '../ber', 'bir')
    })
  })

  console.info({
    'environment': NODE_ENV
  })
  if (environments.includes(String(NODE_ENV))) {
    app.listen(Number(SERVER_PORT))
    console.info({
      message: 'server started'
    })
  }
}

main()
