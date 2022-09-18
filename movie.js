let title = "LOTR";
let length = 178;
let isKidFriendly = true;

let protagonist = {
  characterName: "Legolas",
  actorName: "Orlando Bloom",
};

let antagonist = {
  characterName: "Sauron",
  actorName: "Sala Baker",
};

let myFavoriteMovie = {
  fullTitle: "The Lord of the Rings: The Fellowship of the Ring",
  releaseDate: 2002,
  director: "Peter Jackson",
  basedOn: "The Fellowship of the Ring book",
  bookWriter: "J. R. R. Tolkien",
  wonAcademyAwardsName: [
    "Best Cinematography",
    "Best Makeup",
    "Best Original Score",
    "Best Visual Effects",
  ],
  characters: [
    { name: "Gandalf", playedBy: "Ian McKellen" },
    { name: "Frodo", playedBy: "Elijah Wood" },
  ],

  academyAwards: function () {
    return this.wonAcademyAwardsName.length
  }

};

console.log(myFavoriteMovie);
console.log(myFavoriteMovie.academyAwards);
console.log(myFavoriteMovie.director);