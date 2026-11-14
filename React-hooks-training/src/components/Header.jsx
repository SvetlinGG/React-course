import { Link } from 'react-router'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Music Catalog</Link>
          </li>
          <li>
            <Link to="/my-collection">My Collection</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
