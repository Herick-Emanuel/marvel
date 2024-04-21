const db = require("../knexfile");

class Character {
  static async getMainCharacters() {
    try {
      return await db("characters").where({ main_character: true }).select("*");
    } catch (error) {
      throw new Error("Error fetching characters");
    }
  }
}

module.exports = Character;
