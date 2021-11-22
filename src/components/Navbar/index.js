import { Link } from 'react-router-dom';

import './styles.css';

export function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  )
}
