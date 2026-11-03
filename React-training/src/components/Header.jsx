export default function Header() {
    return (
        <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          Music Explorer
        </a>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="/" className="header__link">Home</a>
            </li>
            <li className="header__item">
              <a href="/my-collection" className="header__link">MyCollection</a>
            </li>
            <li className="header__item">
              <a href="/liked" className="header__link">Liked</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
}