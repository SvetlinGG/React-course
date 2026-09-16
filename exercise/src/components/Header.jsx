export default function Header() {
    return (
        <header className="top" id="top">
            <div className="shell bar">
                <a className="brand" href="#home"><span className="mark" aria-hidden="true"></span>Celadon</a>
                <nav className="nav">
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                </nav>
                <a className="btn solid" href="#start">Start free</a>
                <button className="burger"
                        id="burger"
                        aria-label="Open menu"
                        aria-expanded="false"
                        aria-controls="drawer">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
}