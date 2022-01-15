import { useParams } from 'react-router-dom';
import findPokemon from 'src/selector';
import './style.scss';

export default function Pokemon() {
  // pokemon by id
  const { id } = useParams();

  const pokemon = findPokemon(id);
  return (
    <>
      <h2 className="title__page">Détails de {pokemon.name.english}</h2>
      <section className="wrapper-card">
        <aside className="aside__img">
          <img
            src={`/img/${pokemon.id}.png`}
            alt={pokemon.name.english}
            className="pokemon__img"
          />
        </aside>
        <article className="info__pokemon">
          <h3 className="info__title">#{pokemon.id} {pokemon.name.english}</h3>
          {pokemon.type.map((element) => (
            <a href="/search/" key={element} style={{ backgroundColor: `var(--${element})` }} className="into__type">{element}</a>
          ))}
          <h4 className="info__subtitle">Statistiques</h4>
          {Object.getOwnPropertyNames(pokemon.base).map((stat, index) => (
            <ul className="stat__grid">
              <li>{stat}</li>
              <li>{Object.values(pokemon.base)[index]}</li>
              <li className="stat__bar">
                <div style={{ width: `${(Object.values(pokemon.base)[index] * 100 / 255)}%` }} className="stat__bar-value"/>
              </li>
            </ul>
          ))}
        </article>
      </section>
    </>
  );
}
