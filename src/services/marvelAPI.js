import axios from "axios";
import md5 from "md5";

const publicKey = "6fe7418ac33e1141acd7be58c1e13edb";
const privateKey = "e6d4a118fc7510f5a764446190e5795e78b0d283";
const timestamp = new Date().getTime().toString();
const hash = md5(timestamp + privateKey + publicKey);

const marvelApi = axios.create({
baseURL: "https://gateway.marvel.com/v1/public/",
});

export const getCharacters = async (sagaName) => {
    try {
        const eventsResponse = await marvelApi.get("/events", {
          params: {
            apikey: publicKey,
            ts: timestamp,
            hash: hash,
            nameStartsWith: sagaName, 
          },
        });
    
        const eventId =
          eventsResponse.data.data.results.length > 0
            ? eventsResponse.data.data.results[0].id
            : null;
    
        if (!eventId) {
          return [];
        }
    
        const response = await marvelApi.get("/characters", {
          params: {
            apikey: publicKey,
            ts: timestamp,
            hash: hash,
            events: eventId, 
          },
        });
    
        return response.data.data.results;
      } catch (error) {
        throw new Error("Erro ao buscar os personagens da saga: " + error.message);
      }
    };

export const getComics = async () => {
try {
const response = await marvelApi.get('/comics', {
params: {
apikey: publicKey,
ts: timestamp,
hash: hash,
}
});
return response.data.data.results;
} catch (error) {
throw new Error('Erro ao buscar as comics: ' + error.message);
}
};