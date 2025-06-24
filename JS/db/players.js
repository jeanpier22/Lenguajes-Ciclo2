
const players = [
  {
    "name": "Thibaut Courtois",
    "age": 32,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Thibaut_Courtois_2018.jpg"
  },
  {
    "name": "Andriy Lunin",
    "age": 25,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Andriy_Lunin_2020.jpg"
  },
  {
    "name": "Fran González",
    "age": 22,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Fran_Gonzalez_2023.jpg"
  },
  {
    "name": "Sergio Mestre",
    "age": 21,
    "position": "Portero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sergio_Mestre_2023.jpg"
  },
  {
    "name": "Éder Militão",
    "age": 27,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/%C3%89der_Milit%C3%A3o_2020.jpg"
  },
  {
    "name": "Antonio Rüdiger",
    "age": 32,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Antonio_R%C3%BCdiger_2018.jpg"
  },
  {
    "name": "David Alaba",
    "age": 32,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/David_Alaba_2019.jpg"
  },
  {
    "name": "Jesús Vallejo",
    "age": 28,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Jes%C3%BAs_Vallejo_2019.jpg"
  },
  {
    "name": "Ferland Mendy",
    "age": 29,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Ferland_Mendy_2020.jpg"
  },
  {
    "name": "Fran García",
    "age": 25,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fran_Garc%C3%ADa_2021.jpg"
  },
  {
    "name": "Daniel Carvajal",
    "age": 33,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dani_Carvajal_2019.jpg"
  },
  {
    "name": "Lucas Vázquez",
    "age": 33,
    "position": "Defensa",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Lucas_V%C3%A1zquez_2019.jpg"
  },
  {
    "name": "Aurélien Tchouaméni",
    "age": 24,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Aur%C3%A9lien_Tchouam%C3%A9ni_2022.jpg"
  },
  {
    "name": "Federico Valverde",
    "age": 25,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Federico_Valverde_2020.jpg"
  },
  {
    "name": "Eduardo Camavinga",
    "age": 21,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Eduardo_Camavinga_2022.jpg"
  },
  {
    "name": "Toni Kroos",
    "age": 34,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toni_Kroos_Germany_2022.jpg"
  },
  {
    "name": "Luka Modrić",
    "age": 38,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Luka_Modri%C4%87_2021.jpg"
  },
  {
    "name": "Jude Bellingham",
    "age": 20,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Jude_Bellingham_2023.jpg"
  },
  {
    "name": "Arda Güler",
    "age": 19,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Arda_G%C3%BCler_2023.jpg"
  },
  {
    "name": "Dani Ceballos",
    "age": 27,
    "position": "Centrocampista",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Dani_Ceballos_2021.jpg"
  },
  {
    "name": "Vinícius Júnior",
    "age": 23,
    "position": "Delantero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Vinicius_Junior_2021.jpg"
  },
  {
    "name": "Rodrygo Goes",
    "age": 23,
    "position": "Delantero",
    "team": "Real Madrid",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Rodrygo_Goes_2022.jpg"
  },
  {
    "name": "Joselu Mato",
    "age": 34,
    "position": "Delantero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Joselu_2021.jpg"
  },
  {
    "name": "Brahim Díaz",
    "age": 25,
    "position": "Delantero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Brahim_Diaz_2022.jpg"
  },
  {
    "name": "Endrick Felipe",
    "age": 18,
    "position": "Delantero",
    "team": "Real Madrid",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/Endrick_Felipe_2022.jpg"
  }
];
