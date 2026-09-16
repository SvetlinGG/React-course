export default function Another() {
    return (
        <>
  <div className="sfx" id="sfx">
    <button
      className="sbtn"
      id="sbtn"
      aria-pressed="true"
      aria-label="Sound on"
      title="Sound on"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path className="cone" d="M3.5 9.4v5.2h3.4l4.6 3.8V5.6L6.9 9.4H3.5z" />
        <path className="w1" d="M14.6 9.3a3.7 3.7 0 0 1 0 5.4" />
        <path className="w2" d="M17.3 6.6a7.4 7.4 0 0 1 0 10.8" />
        <path className="slash" d="M4.5 19.5L19.5 4.5" />
      </svg>
    </button>
    <span className="scue" id="scue">
      Click once to wake the sound
    </span>
  </div>
  <button className="up" id="up" aria-label="Back to top">
    <svg viewBox="0 0 24 24">
      <path d="M12 19V6M6 12l6-6 6 6" />
    </svg>
  </button>
</>

    );
}