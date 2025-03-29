const characters = [
  {
    id: 1,
    name: "Charlie Harper",
    series: "Two and a Half Men",
    image:
      "https://static.wikia.nocookie.net/twoandahalfmen/images/e/e7/Charlie_Harper.jpg",
    appearances: ["Two and a Half Men"],
  },
  {
    id: 2,
    name: "Walter White",
    series: "Breaking Bad",
    image:
      "https://static.wikia.nocookie.net/breakingbad/images/5/54/Walter_White_S5B.png",
    appearances: ["Breaking Bad"],
  },
  {
    id: 3,
    name: "Tyrion Lannister",
    series: "Game of Thrones",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/9/95/HandoftheKingTyrionLannister.PNG",
    appearances: ["Game of Thrones"],
  },
  {
    id: 4,
    name: "Sheldon Cooper",
    series: "The Big Bang Theory",
    image:
      "https://static.wikia.nocookie.net/bigbangtheory/images/6/6a/Sheldon_Cooper.jpg",
    appearances: ["The Big Bang Theory"],
  },
  {
    id: 5,
    name: "Michael Scott",
    series: "The Office",
    image:
      "https://static.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg",
    appearances: ["The Office"],
  },
  {
    id: 6,
    name: "Tony Soprano",
    series: "The Sopranos",
    image:
      "https://static.wikia.nocookie.net/sopranos/images/d/d2/Tony_Soprano.jpg",
    appearances: ["The Sopranos"],
  },
  {
    id: 7,
    name: "Rick Grimes",
    series: "The Walking Dead",
    image:
      "https://static.wikia.nocookie.net/walkingdead/images/c/c5/Rick_Grimes.jpg",
    appearances: ["The Walking Dead"],
  },
  {
    id: 8,
    name: "Dexter Morgan",
    series: "Dexter",
    image:
      "https://static.wikia.nocookie.net/dexter/images/4/4c/Dexter_Morgan.jpg",
    appearances: ["Dexter"],
  },
  {
    id: 9,
    name: "Jon Snow",
    series: "Game of Thrones",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/d/d0/Jon_Snow.jpg",
    appearances: ["Game of Thrones"],
  },
  {
    id: 10,
    name: "Jesse Pinkman",
    series: "Breaking Bad",
    image:
      "https://static.wikia.nocookie.net/breakingbad/images/7/7a/Jesse_Pinkman.jpg",
    appearances: ["Breaking Bad", "El Camino"],
  },
  {
    id: 11,
    name: "Eleven",
    series: "Stranger Things",
    image:
      "https://static.wikia.nocookie.net/strangerthings/images/f/f4/Eleven.jpg",
    appearances: ["Stranger Things"],
  },
  {
    id: 12,
    name: "Sherlock Holmes",
    series: "Sherlock",
    image:
      "https://static.wikia.nocookie.net/sherlock/images/b/bc/Sherlock_Holmes.jpg",
    appearances: ["Sherlock"],
  },
  {
    id: 13,
    name: "Rachel Green",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/5/5c/Rachel_Green.jpg",
    appearances: ["Friends"],
  },
  {
    id: 14,
    name: "Daenerys Targaryen",
    series: "Game of Thrones",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/d/d5/Daenerys_Targaryen.jpg",
    appearances: ["Game of Thrones"],
  },
  {
    id: 15,
    name: "Raymond Reddington",
    series: "The Blacklist",
    image:
      "https://static.wikia.nocookie.net/blacklist/images/7/7d/Raymond_Reddington.jpg",
    appearances: ["The Blacklist"],
  },
  {
    id: 16,
    name: "Barney Stinson",
    series: "How I Met Your Mother",
    image:
      "https://static.wikia.nocookie.net/himym/images/6/6d/Barney_Stinson.jpg",
    appearances: ["How I Met Your Mother"],
  },
  {
    id: 17,
    name: "Rick Sanchez",
    series: "Rick and Morty",
    image:
      "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.jpg",
    appearances: ["Rick and Morty"],
  },
  {
    id: 18,
    name: "Dwight Schrute",
    series: "The Office",
    image:
      "https://static.wikia.nocookie.net/theoffice/images/c/c5/Dwight_Schrute.jpg",
    appearances: ["The Office"],
  },
  {
    id: 19,
    name: "Penny",
    series: "The Big Bang Theory",
    image:
      "https://static.wikia.nocookie.net/bigbangtheory/images/7/7d/Penny.jpg",
    appearances: ["The Big Bang Theory"],
  },
  {
    id: 20,
    name: "Saul Goodman",
    series: "Breaking Bad",
    image:
      "https://static.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg",
    appearances: ["Breaking Bad", "Better Call Saul"],
  },
  {
    id: 21,
    name: "Gregory House",
    series: "House",
    image:
      "https://static.wikia.nocookie.net/house/images/1/11/Gregory_House.jpg",
    appearances: ["House"],
  },
  {
    id: 22,
    name: "Chandler Bing",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/8/85/Chandler_Bing.jpg",
    appearances: ["Friends"],
  },
  {
    id: 23,
    name: "Arya Stark",
    series: "Game of Thrones",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/b/be/Arya_Stark.jpg",
    appearances: ["Game of Thrones"],
  },
  {
    id: 24,
    name: "Steve Harrington",
    series: "Stranger Things",
    image:
      "https://static.wikia.nocookie.net/strangerthings/images/8/8b/Steve_Harrington.jpg",
    appearances: ["Stranger Things"],
  },
  {
    id: 25,
    name: "Jim Halpert",
    series: "The Office",
    image:
      "https://static.wikia.nocookie.net/theoffice/images/9/9a/Jim_Halpert.jpg",
    appearances: ["The Office"],
  },
  {
    id: 26,
    name: "Ted Mosby",
    series: "How I Met Your Mother",
    image: "https://static.wikia.nocookie.net/himym/images/2/24/Ted_Mosby.jpg",
    appearances: ["How I Met Your Mother"],
  },
  {
    id: 27,
    name: "Cersei Lannister",
    series: "Game of Thrones",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/c/c3/Cersei_Lannister.jpg",
    appearances: ["Game of Thrones"],
  },
  {
    id: 28,
    name: "Leonard Hofstadter",
    series: "The Big Bang Theory",
    image:
      "https://static.wikia.nocookie.net/bigbangtheory/images/8/88/Leonard_Hofstadter.jpg",
    appearances: ["The Big Bang Theory"],
  },
  {
    id: 29,
    name: "Hopper",
    series: "Stranger Things",
    image:
      "https://static.wikia.nocookie.net/strangerthings/images/d/dc/Jim_Hopper.jpg",
    appearances: ["Stranger Things"],
  },
  {
    id: 30,
    name: "Joey Tribbiani",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/f/f5/Joey_Tribbiani.jpg",
    appearances: ["Friends"],
  },
  {
    id: 31,
    name: "Phoebe Buffay",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/3/3d/Phoebe_Buffay.jpg",
    appearances: ["Friends"],
  },
  {
    id: 32,
    name: "Monica Geller",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/2/2f/Monica_Geller.jpg",
    appearances: ["Friends"],
  },
  {
    id: 33,
    name: "Ross Geller",
    series: "Friends",
    image:
      "https://static.wikia.nocookie.net/friends/images/0/0b/Ross_Geller.jpg",
    appearances: ["Friends"],
  },
  {
    id: 34,
    name: "Morty Smith",
    series: "Rick and Morty",
    image:
      "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty_Smith.jpg",
    appearances: ["Rick and Morty"],
  },
  {
    id: 35,
    name: "John Watson",
    series: "Sherlock",
    image:
      "https://static.wikia.nocookie.net/sherlock/images/b/bc/John_Watson.jpg",
    appearances: ["Sherlock"],
  },
];
