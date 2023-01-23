function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num)
}


console.log(generateRandomNumber(10))
  
const randomStuff = {
  movies: ['Zoolander', 'Bullet Train', 'Shrek', 'Knives Out', 'Kick Ass', 'Puss In Boots 2: The last wish', 'M3GAN', 'El Camino', 'Suicide Squad'],
  videogame: ['The Last of Us', 'Project Zomboid', 'Fallout New Vegas', 'Overwatch 2', 'Team Fortress 2', 'Minecraft', 'Fornite', 'GTA V', 'Red Dead Redemption 2'],
  musician: ['Magdalena Bay', 'Daft Punk', 'Justice', 'LMFAO', 'José José', 'Bad Bunny', 'Dualipa', 'The Weeknd']
}
  

const returnElement = (arr) =>{
  const index = generateRandomNumber(arr.length);
  return arr[index]
}



console.log(`Random movie: ${returnElement(randomStuff.movies)}`);
console.log(`Random videogame: ${returnElement(randomStuff.videogame)}`);
console.log(`Random musician: ${returnElement(randomStuff.musician)}`);
