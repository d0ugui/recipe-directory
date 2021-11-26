import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { SearchBar } from '../SearchBar';

import './styles.css';

export function Navbar() {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  )
}
