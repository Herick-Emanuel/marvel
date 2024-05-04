import { Request, Response } from "express";
import Character from "../models/characterModel";

const getAllCharacters = async (_req: Request, res: Response) => {
  try {
    const characters = await Character.getMainCharacters();
    res.json(characters);
  } catch (error) {
    console.error("Erro ao buscar os personagens:", error);
    res.status(500).json({ error: "Erro interno ao buscar os personagens" });
  }
};

const createCharacter = async (req: Request, res: Response) => {
try {
const character = req.body;
const newCharacter = await Character.createCharacter(character);
res.status(201).json(newCharacter);
} catch (error) {
console.error("Erro ao criar personagem:", error);
res.status(500).json({ error: "Erro interno ao criar personagem" });
}
};

const updateCharacter = async (req: Request, res: Response) => {
try {
const { id } = req.params;
const updatedCharacter = await Character.updateCharacter(parseInt(id), req.body);
res.json(updatedCharacter);
} catch (error) {
console.error("Erro ao atualizar personagem:", error);
res.status(500).json({ error: "Erro interno ao atualizar personagem" });
}
};

const deleteCharacter = async (req: Request, res: Response) => {
try {
const { id } = req.params;
await Character.deleteCharacter(parseInt(id));
res.sendStatus(204);
} catch (error) {
console.error("Erro ao deletar personagem:", error);
res.status(500).json({ error: "Erro interno ao deletar personagem" });
}
};

export default {
  getAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
