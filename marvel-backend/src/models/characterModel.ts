const db = require("../knexfile");

interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  mainCharacter: boolean;
}

const Character = {
  async getMainCharacters() {
    return await db("characters").where({ mainCharacter: true });
  },

  async getAllCharacters() {
    return await db("characters");
  },

  async createCharacter(character: Character) {
    await db("characters").insert(character);
  },

  async updateCharacter(id: number, character: Character) {
    await db("characters").where({ id }).update(character);
  },

  async deleteCharacter(id: number) {
    await db("characters").where({ id }).del();
  },
};

export default Character;