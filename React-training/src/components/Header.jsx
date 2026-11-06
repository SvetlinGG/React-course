import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // start with the values from the URL, so after refresh the form is still filled
  const [type, setType] = useState(searchParams.get("type") || "artist");
  const [text, setText] = useState(searchParams.get("q") || "");

  const onSearch = (e) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    navigate(`/search?${new URLSearchParams({ type, q })}`);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          Music Explorer
        </Link>

        <form className="header__search" onSubmit={onSearch} role="search">
          <select
            className="header__search-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="Search by"
          >
            <option value="artist">Artist</option>
            <option value="album">Album</option>
            <option value="song">Song</option>
          </select>

          <input
            type="search"
            className="header__search-input"
            placeholder={`Search ${type}...`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Search text"
          />

          <button type="submit" className="header__search-btn">
            Search
          </button>
        </form>

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
