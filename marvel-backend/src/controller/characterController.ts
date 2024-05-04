import { getCharactersFromMarvelAPI } from "../services/marvelServices";

exports.getMainCharacters = async (_req: any, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const characters = await getCharactersFromMarvelAPI();
    console.log(characters);
    res.json(characters);
  } catch (error) {
    console.error("Erro interno ao buscar os personagens:", error);
    res.status(500).json({ error: "Erro interno ao buscar os personagens" });
  }
};
