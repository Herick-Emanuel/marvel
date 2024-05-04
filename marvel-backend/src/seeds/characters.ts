exports.seed = async function (knex: (arg0: string) => { (): any; new(): any; del: { (): Promise<any>; new(): any; }; insert: { (arg0: { name: string; description: string; image_url: string; main_character: boolean; }[]): any; new(): any; }; }) {
  await knex("characters")
    .del();
  return knex("characters").insert([
    {
      name: "Jean Grey",
      description: "Mutante com poderes telepáticos e telecinéticos",
      image_url: "",
      main_character: true,
    },
    {
      name: "Cyclops",
      description: "Líder dos X-Men com rajadas ópticas",
      image_url: "",
      main_character: true,
    },
    {
      name: "Wolverine",
      description: "Mutante com sentidos apurados e garras retráteis",
      image_url: "",
      main_character: true,
    },
    {
      name: "Professor X",
      description: "Fundador dos X-Men e poderoso telepata",
      image_url: "",
      main_character: false,
    },
    {
      name: "Storm",
      description: "Mutante com poderes de manipulação do clima",
      image_url: "",
      main_character: false,
    },
    {
      name: "Beast",
      description: "Mutante com força sobre-humana e agilidade",
      image_url: "",
      main_character: false,
    },
    {
      name: "Angel",
      description: "Mutante com asas que concedem voo",
      image_url: "",
      main_character: false,
    },
    {
      name: "Iceman",
      description: "Mutante com a habilidade de gerar gelo",
      image_url: "",
      main_character: false,
    },
    {
      name: "Colossus",
      description: "Mutante com a habilidade de transformar seu corpo em aço orgânico",
      image_url: "",
      main_character: false,
    },
    {
      name: "Nightcrawler",
      description: "Mutante com a habilidade de se teleportar",
      image_url: "",
      main_character: false,
    },
  ]);
};
