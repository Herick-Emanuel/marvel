import db from "../database/conection";

interface Comic {
    id: number;
    title: string;
    description: string;
    publishedDate: Date;
    coverImageUrl: string;
  }
  
  const Comic = {
    async getAllComics() {
      return await db("comics");
    },
  
    async createComic(comic: Comic) {
      await db("comics").insert(comic);
    },
  
    async updateComic(id: number, comic: Comic) {
      await db("comics").where({ id }).update(comic);
    },
  
    async deleteComic(id: number) {
      await db("comics").where({ id }).del();
    },
  };
  
  export default Comic;