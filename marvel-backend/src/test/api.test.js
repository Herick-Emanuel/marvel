const request = require('supertest');
const app = require('../src/app');
const db = require('../src/database/connection');

describe('Testes da API Marvel Saga', () => {
  beforeAll(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.destroy();
  });

  it('Deve retornar todos os personagens da saga', async () => {
    const response = await request(app).get('/api/characters');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve criar um novo personagem', async () => {
    const newCharacter = {
      name: 'Novo Personagem',
      description: 'Descrição do novo personagem',
      image_url: 'https://example.com/novo_personagem.jpg',
      main_character: false
    };

    const response = await request(app)
      .post('/api/characters')
      .send(newCharacter);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newCharacter);
  });

  it('Deve retornar um personagem específico pelo ID', async () => {
    const characterId = 1;
    const response = await request(app).get(`/api/characters/${characterId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(characterId);
  });

  it('Deve atualizar um personagem existente', async () => {
    const characterId = 1;
    const updatedCharacter = {
      name: 'Personagem Atualizado',
      description: 'Nova descrição do personagem atualizado'
    };

    const response = await request(app)
      .put(`/api/characters/${characterId}`)
      .send(updatedCharacter);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedCharacter);
  });

  it('Deve excluir um personagem existente', async () => {
    const characterId = 1;
    const response = await request(app).delete(`/api/characters/${characterId}`);
    expect(response.status).toBe(204);
  });
});
