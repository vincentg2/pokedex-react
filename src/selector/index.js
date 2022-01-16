import data from 'src/data/pok';
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export default function findPokemon(id) {
  const pokemon = data.find((pok) => {
    return pok.id === Number(id);
  });

  return pokemon;
}
export function getTypes(types) {
  const allTypes = [...new Map(types.map((el) => el.type))];
  const result = [];
  allTypes.filter((el) => el.forEach((type) => result.push(type)));
  const newArray = ([...new Set(result.filter((el) => el))]);
  // console.log(newArray);
  return newArray;
}
