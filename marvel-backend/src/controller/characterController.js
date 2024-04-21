const { getCharactersFromMarvelAPI } = require("../services/marvelServices");

exports.getMainCharacters = async (req, res) => {
  try {
    const characters = await getCharactersFromMarvelAPI();
    console.log(characters);
    res.json(characters);
  } catch (error) {
    console.error("Erro interno ao buscar os personagens:", error);
    res.status(500).json({ error: "Erro interno ao buscar os personagens" });
  }
};
