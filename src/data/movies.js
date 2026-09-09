export const MOVIES = [
  {
    id: 1,
    title: "The Departed",
    year: 2006,
    genre: "Crime",
    director: "Martin Scorsese",
    runtime: 151,
    rating: 8.5,
    tagline: "Two men. Two lies. One city.",
    synopsis:
      "An undercover cop and a police informant playing for opposite sides try to identify each other while infiltrating the Irish mob in South Boston.",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    hue: 358,
  },
  {
    id: 2,
    title: "Spirited Away",
    year: 2001,
    genre: "Fantasy",
    director: "Hayao Miyazaki",
    runtime: 125,
    rating: 8.6,
    tagline: "The tunnel led Chihiro to a mysterious town.",
    synopsis:
      "During her family's move to a new home, a sullen ten-year-old girl wanders into a world ruled by gods and witches, where humans are changed into beasts.",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    hue: 175,
  },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    director: "Bong Joon-ho",
    runtime: 132,
    rating: 8.6,
    tagline: "Act like you own the place.",
    synopsis:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    hue: 42,
  },
  {
    id: 4,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    director: "Denis Villeneuve",
    runtime: 116,
    rating: 7.9,
    tagline: "Why are they here?",
    synopsis:
      "A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    hue: 205,
  },
  {
    id: 5,
    title: "Portrait of a Lady on Fire",
    year: 2019,
    genre: "Romance",
    director: "Céline Sciamma",
    runtime: 122,
    rating: 8.1,
    tagline: "In every love story there's a first look.",
    synopsis:
      "On an isolated island in Brittany at the end of the eighteenth century, a young painter is obliged to paint a wedding portrait without the subject's knowledge.",
    cast: ["Noémie Merlant", "Adèle Haenel", "Luàna Bajrami"],
    hue: 15,
  },
  {
    id: 6,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    director: "Damien Chazelle",
    runtime: 106,
    rating: 8.5,
    tagline: "The road to greatness can take you to the edge.",
    synopsis:
      "A promising young drummer enrolls at a cutthroat music conservatory where his instructor will stop at nothing to realize a student's potential.",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    hue: 350,
  },
  {
    id: 7,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    director: "George Miller",
    runtime: 120,
    rating: 8.1,
    tagline: "What a lovely day.",
    synopsis:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    hue: 28,
  },
  {
    id: 8,
    title: "Moonlight",
    year: 2016,
    genre: "Drama",
    director: "Barry Jenkins",
    runtime: 111,
    rating: 7.4,
    tagline: "This is the story of a lifetime.",
    synopsis:
      "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and adulthood.",
    cast: ["Trevante Rhodes", "André Holland", "Janelle Monáe"],
    hue: 220,
  },
  {
    id: 9,
    title: "Knives Out",
    year: 2019,
    genre: "Mystery",
    director: "Rian Johnson",
    runtime: 130,
    rating: 7.9,
    tagline: "Hell of a case.",
    synopsis:
      "A detective investigates the death of a patriarch of an eccentric, combative family shortly after the family's celebration of his 85th birthday.",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    hue: 8,
  },
];

export const GENRES = ["All", ...Array.from(new Set(MOVIES.map((m) => m.genre))).sort()];

export function poster(hue, big) {
  return {
    background: `linear-gradient(160deg, hsl(${hue} 55% ${big ? 22 : 20}%) 0%, hsl(${hue} 45% ${big ? 10 : 9}%) 55%, hsl(${(hue + 30) % 360} 40% 8%) 100%)`,
  };
}