import { Link } from 'react-router-dom';
import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Pokédex.. or Reactdex ?</h1>
      <nav>
        <ul className="header__list">
          <li className="header__list-item"><Link to="/" className="header__list-link">Liste</Link></li>
          <li className="header__list-item"><Link to="/type" className="header__list-link">Types</Link></li>
        </ul>
      </nav>
    </header>
  );
}
