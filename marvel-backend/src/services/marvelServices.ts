import axios from "axios";
import md5 from "md5";

const publicKey = "6fe7418ac33e1141acd7be58c1e13edb";
const privateKey = "e6d4a118fc7510f5a764446190e5795e78b0d283";
const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + privateKey + publicKey);

const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
});

const getCharactersFromMarvelAPI = async () => {
try {
const response = await marvelApi.get("/characters", {
params: {
apikey: publicKey,
ts: timestamp,
hash: hash,
nameStartsWith:
"Nightcrawler,Colossus,Iceman,Angel,Beast,Storm,Professor X,Wolverine,Cyclops,Jean Gray",
},
});
return response.data.data.results;
} catch (error: any) {
console.error("Erro ao buscar os personagens:", error);
throw new Error("Erro ao buscar os personagens: " + error.message);
}
};

export { getCharactersFromMarvelAPI };
