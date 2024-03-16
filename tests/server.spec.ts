import request from 'supertest'
import { app } from '../src/server'

describe('server', () => {
  it('should works', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toHaveProperty('path', '/foo/bar/ber/bir')
  })
})
