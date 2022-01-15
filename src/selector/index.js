import data from 'src/data/pok';
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export default function findPokemon(id) {
  const pokemon = data.find((pok) => {
    return pok.id === Number(id);
  });

  return pokemon;
}
