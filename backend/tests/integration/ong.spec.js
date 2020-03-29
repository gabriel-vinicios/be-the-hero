const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
   await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

    it('should be able to create a new NGO', async () => {
      const response = await request(app)
      .post('/ongs')
      
      .send({
    name: "APAD",
	email: "contato@apad.com.br",
	whatsapp: "47000000000",
	city: "Rio do Sul",
	fu: "SC"
      })

      expect(response.body).tohaveProperty('id')
      expect(response.body.id).tohaveLength(8)
    });
});