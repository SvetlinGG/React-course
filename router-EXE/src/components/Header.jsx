export default function Header() {
    return (
        <header>
  {/* Navigation */}
  <nav>
    <a className="home" href="#">
      {" "}
      <img src="/images/logo.png" alt="logo" />{" "}
    </a>
    <a href="/catalog">Catalog</a>
    {/* Logged-in users */}
    <div id="user">
      <a href="/create">Add Game</a>
      <a href="/login">Logout</a>
    </div>
    {/* Guest users */}
    <div id="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
  </nav>
</header>

    );
}