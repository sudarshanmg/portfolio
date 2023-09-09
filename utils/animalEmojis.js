function getRandomElementFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const animals = ["🐸", "🐻", "🐼", "🦊", "🐮", "🐷"];
export const randomAnimal = getRandomElementFromArray(animals);
