import db from "../database/conection";

interface Character {
  id: number;
  name: string;
  description: string;
  image_url: string;
  main_character: boolean;
}

const Character = {
  async getAllCharacters() {
    try {
      return await db("characters").select("*");
    } catch (error) {
      throw new Error("Erro ao buscar os personagens");
    }
  },

  async getCharacterById(id: number) {
    try {
      const character = await db("characters").where({ id }).first();
      if (!character) {
        throw new Error("Personagem não encontrado");
      }
      return character;
    } catch (error) {
      throw new Error("Erro ao buscar o personagem");
    }
  },

  async createCharacter(character: Character) {
    try {
      const [id] = await db("characters").insert(character);
      return { characterId: id,...character };
    } catch (error) {
      throw new Error("Erro ao criar personagem");
    }
  },

  async updateCharacter(id: number, character: Character) {
    try {
      await db("characters").where({ id }).update(character);
      return {...character, id };
        } catch (error) {
      throw new Error("Erro ao atualizar personagem");
    }
  },

  async deleteCharacter(id: number) {
    try {
      await db("characters").where({ id }).del();
    } catch (error) {
      throw new Error("Erro ao deletar personagem");
    }
  },
};

export default Character;