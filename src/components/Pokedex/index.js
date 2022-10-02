import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

export default function Pokedex({ pokedex }) {
  // pokedex
  const { id } = useParams(); // undefined

  const filteredPokedex = pokedex.filter((el) => {
    if (id) return el.type.join(' ').includes(id); // ['Grass', 'Fire'] => 'Grass Fire'
    return pokedex;
  });
  return (
    <main>
      <section className="wrapper-cards">
        {filteredPokedex.map((element) => (
          <Link
            to={`/pokemon/${element.id}`}
            className="card"
            key={element.name.chinese}
          >
            <article>
              <figure key={element.id}>
                <img
                  src={`/img/${element.id}.png`}
                  alt="illustration"
                  className="index__img"
                  key={element.name.chinese}
                />
                <figcaption>
                  #{element.id} &nbsp;{element.name.english}

                </figcaption>
              </figure>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
Pokedex.propTypes = {
  pokedex: PropTypes.array.isRequired,
};
