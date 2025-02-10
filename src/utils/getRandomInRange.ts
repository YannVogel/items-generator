// Génération aléatoire d'une valeur dans une plage donnée
export const getRandomInRange = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1));
