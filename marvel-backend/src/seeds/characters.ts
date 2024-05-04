exports.seed = function (knex: (arg0: string) => { (): any; new(): any; del: { (): Promise<any>; new(): any; }; insert: { (arg0: { name: string; description: string; image_url: string; main_character: boolean; }[]): any; new(): any; }; }) {
  return knex("characters")
    .del()
    .then(function () {
      return knex("characters").insert([
        {
          name: "Jean Grey",
          description: "Mutant with telepathic and telekinetic powers",
          image_url: "https://example.com/jean-grey.jpg",
          main_character: true,
        },
        {
          name: "Cyclops",
          description: "Leader of the X-Men with optic blasts",
          image_url: "https://example.com/cyclops.jpg",
          main_character: true,
        },
        {
          name: "Wolverine",
          description: "Mutant with enhanced senses and retractable claws",
          image_url: "https://example.com/wolverine.jpg",
          main_character: true,
        },
        {
          name: "Professor X",
          description: "Founder of the X-Men and powerful telepath",
          image_url: "https://example.com/professor-x.jpg",
          main_character: false,
        },
        {
          name: "Storm",
          description: "Mutant with weather-manipulation powers",
          image_url: "https://example.com/storm.jpg",
          main_character: false,
        },
        {
          name: "Beast",
          description: "Mutant with superhuman strength and agility",
          image_url: "https://example.com/beast.jpg",
          main_character: false,
        },
        {
          name: "Angel",
          description: "Mutant with wings that grant flight",
          image_url: "https://example.com/angel.jpg",
          main_character: false,
        },
        {
          name: "Iceman",
          description: "Mutant with the ability to generate ice",
          image_url: "https://example.com/iceman.jpg",
          main_character: false,
        },
        {
          name: "Colossus",
          description:
            "Mutant with the ability to transform his body into organic steel",
          image_url: "https://example.com/colossus.jpg",
          main_character: false,
        },
        {
          name: "Nightcrawler",
          description: "Mutant with the ability to teleport",
          image_url: "https://example.com/nightcrawler.jpg",
          main_character: false,
        },
      ]);
    });
};
