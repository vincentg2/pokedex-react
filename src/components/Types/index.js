// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

export default function Types({ types }) {
  // Types de pokemon;
  return (
    <>
      <section>
        <h2 className="title__page">Cliquez sur un type pour voir tous les Pokémon de ce type</h2>
        <article>
          <ul className="wrapper__type">
            {types.map((type) => (
              <li key={type}><Link to={`/search/${type}`} className="type__block" style={{ backgroundColor: `var(--${type})` }}> {type}</Link></li>
            ))}
          </ul>
        </article>
      </section>
      <Link
        to="/"
        className="back__index"
      >
        Revenir à la liste
      </Link>
    </>
  );
}
Types.propTypes = {
  types: PropTypes.array.isRequired,
};
