export default function Aside() {
    return (
        <>
        <div className="scrim" id="scrim"></div>
        <aside className="drawer" id="drawer" aria-label="Menu">
            <span className="dtag">Menu</span>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#stories">Customers</a>
            <a href="#faq">FAQ</a>
            <a className="btn solid" href="#start">Start free</a>
        </aside>
        </>
    );
}