import {Link } from "react-router";
export default function Header() {
    return (
        <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Music Explorer
        </Link>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/" className="header__link">Home</Link>
            </li>
            <li className="header__item">
              <Link to="/my-collection" className="header__link">MyCollection</Link>
            </li>
            <li className="header__item">
              <Link to="/liked" className="header__link">Liked</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
}