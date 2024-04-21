import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/characters",
});

export const getCharacters = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(
        "Não foi possível encontrar os personagens. O endpoint pode estar incorreto."
      );
    } else {
      throw new Error("Erro ao buscar os personagens.");
    }
  }
};
