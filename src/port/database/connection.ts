import dotenv from 'dotenv'
import { DataSource } from 'typeorm'

dotenv.config()

let connection: DataSource

export async function startConnection () {
  const {
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    POSTGRES_USER,
  } = process.env

  const postgresDataSource = new DataSource({
    type: 'postgres',
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [
      // ....
    ],
  })

  connection = await postgresDataSource.initialize()

  console.info({
    message: 'Database connected',
  })

  return connection
}

export async function getConnection() {
  if (connection != null) {
    return connection
  }

  return startConnection()
}

export async function stopConnection() {
  if (connection == null || connection.isInitialized === false) {
    console.warn({
      message: 'There is no connection established with database',
    })

    return
  }

  await connection.destroy()

  console.info({
    message: 'Database connection was closed',
  })
}
