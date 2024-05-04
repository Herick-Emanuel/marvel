import db from "../database/conection";

interface Creator {
  id: number;
  name: string;
  role: string;
  contributedComics: number[];
}

const Creator = {
  async getAllCreators() {
    return await db("creators");
  },

  async createCreator(creator: Creator) {
    await db("creators").insert(creator);
  },

  async updateCreator(id: number, creator: Creator) {
    await db("creators").where({ id }).update(creator);
  },

  async deleteCreator(id: number) {
    await db("creators").where({ id }).del();
  },
};

export default Creator;