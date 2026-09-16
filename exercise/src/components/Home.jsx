export default function Home() {
    return (
        <main id="home">
  {/* hero */}
  <section className="hero">
    <div className="shell">
      <span className="pill rv">
        <b>New</b> Two-way sync with Linear
      </span>
      <h1 className="rv d1">Feedback, finally shaped.</h1>
      <p className="sub rv d2">
        Celadon pulls customer feedback out of every channel it hides in and
        groups it into the handful of themes your team can actually act on.
      </p>
      <div className="acts rv d3">
        <a className="btn solid" href="#start">
          Start free trial
        </a>
        <a className="btn" href="#how">
          See how it works
        </a>
      </div>
      <p className="note rv d3">Free for 14 days. No card needed.</p>
      <div className="stage rv d3" aria-hidden="true">
        <div className="slab s1" data-depth={14}>
          <span className="src">
            <i className="dot" style={{ background: "var(--sky)" }} />
            Zendesk
          </span>
          <p>"Any chance of a CSV export on the reports page?"</p>
        </div>
        <div className="slab s2" data-depth={-18}>
          <span className="src">
            <i className="dot" style={{ background: "var(--coral)" }} />
            Sales call
          </span>
          <p>
            "They will not sign without letting finance pull the raw numbers."
          </p>
        </div>
        <div className="slab s3" data-depth={-11}>
          <span className="src">
            <i className="dot" style={{ background: "var(--jade)" }} />
            Slack
          </span>
          <p>"Third customer this week asking to get the data out."</p>
        </div>
        <div className="slab s4" data-depth={16}>
          <span className="src">
            <i className="dot" style={{ background: "#F0C980" }} />
            App review
          </span>
          <p>"Great app, but my data feels stuck inside it."</p>
        </div>
        <div className="core" data-depth={7}>
          <span className="lab">Theme</span>
          <h3>Get data out of Celadon</h3>
          <div className="meter">
            <i />
          </div>
          <div className="row">
            <span>Requests</span>
            <b>218</b>
          </div>
          <div className="row">
            <span>Accounts affected</span>
            <b>34</b>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* trust */}
  <section className="pad-s">
    <div className="shell rv">
      <p className="trust-cap">Shaping feedback at</p>
      <div className="trust">
        <span>Northbeam</span>
        <span>Halyard</span>
        <span>Petrichor</span>
        <span>Oxbow</span>
        <span>Studio Marrow</span>
        <span>Kelp</span>
      </div>
    </div>
  </section>
  {/* features */}
  <section className="pad" id="features">
    <div className="shell center">
      <span className="eyebrow rv">What you get</span>
      <h2 className="h2 rv">Six raw pieces, one shaped workflow.</h2>
      <p className="lede rv d1">
        No more spreadsheet of quotes that nobody opens after the second week.
      </p>
      <p className="hint rv d1">Click a panel to open it.</p>
    </div>
    <div className="shell">
      <div className="slabrow rv" id="slabrow">
        <div
          className="stave open"
          role="button"
          tabIndex={0}
          aria-expanded="true"
        >
          <div className="spine">
            <span className="pip t-jade" />
            <span className="st">One inbox for all of it</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-jade">
                <svg viewBox="0 0 24 24">
                  <path d="M3 7h18M3 12h18M3 17h11" />
                  <circle cx={19} cy={17} r="2.4" />
                </svg>
              </div>
              <h3>One inbox for all of it</h3>
              <p>
                Support tickets, sales notes, app store reviews and Slack
                threads land in the same place, with the customer already
                attached.
              </p>
              <p className="proof">
                Pulling from <b>nine sources</b>, including CSV drops and
                forwarded email.
              </p>
            </div>
          </div>
        </div>
        <div className="stave" role="button" tabIndex={0} aria-expanded="false">
          <div className="spine">
            <span className="pip t-sky" />
            <span className="st">Themes, not tags</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-sky">
                <svg viewBox="0 0 24 24">
                  <circle cx={8} cy={9} r={4} />
                  <circle cx="16.5" cy={15} r="4.2" />
                  <path d="M11 11.6l2.6 2" />
                </svg>
              </div>
              <h3>Themes, not tags</h3>
              <p>
                Similar requests cluster on their own, so you stop maintaining a
                tag taxonomy that only one person ever follows.
              </p>
              <p className="proof">
                <b>94%</b> of items land in a theme with nobody touching them.
              </p>
            </div>
          </div>
        </div>
        <div className="stave" role="button" tabIndex={0} aria-expanded="false">
          <div className="spine">
            <span className="pip t-coral" />
            <span className="st">Weighted by revenue</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-coral">
                <svg viewBox="0 0 24 24">
                  <path d="M5 19V10M12 19V5M19 19v-6" />
                  <path d="M3 21h18" />
                </svg>
              </div>
              <h3>Weighted by revenue</h3>
              <p>
                Every theme shows which accounts are behind it and what they
                pay, so the loudest request stops beating the biggest one.
              </p>
              <p className="proof">
                Sorts by <b>the revenue behind the ask</b>, not by upvote count.
              </p>
            </div>
          </div>
        </div>
        <div className="stave" role="button" tabIndex={0} aria-expanded="false">
          <div className="spine">
            <span className="pip t-sky" />
            <span className="st">Reply where it started</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-sky">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16v11H9l-5 4z" />
                  <path d="M9 11h6" />
                </svg>
              </div>
              <h3>Reply where it started</h3>
              <p>
                Close the loop in the channel the feedback arrived in, without
                copying links between four different tools.
              </p>
              <p className="proof">
                Replies go out in <b>the original channel</b>, in your own
                words.
              </p>
            </div>
          </div>
        </div>
        <div className="stave" role="button" tabIndex={0} aria-expanded="false">
          <div className="spine">
            <span className="pip t-jade" />
            <span className="st">A roadmap that links back</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-jade">
                <svg viewBox="0 0 24 24">
                  <rect x={3} y={4} width={18} height={16} rx={3} />
                  <path d="M3 9h18M8 4v16" />
                </svg>
              </div>
              <h3>A roadmap that links back</h3>
              <p>
                Each roadmap item keeps a live list of the feedback that shaped
                it, so the reason it exists never goes missing.
              </p>
              <p className="proof">
                Every item keeps <b>a live list</b> of the feedback behind it.
              </p>
            </div>
          </div>
        </div>
        <div className="stave" role="button" tabIndex={0} aria-expanded="false">
          <div className="spine">
            <span className="pip t-coral" />
            <span className="st">Fits your stack</span>
          </div>
          <div className="bodywrap">
            <div className="body">
              <div className="tile t-coral">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </div>
              <h3>Fits your stack</h3>
              <p>
                Two-way sync with Linear, Jira, HubSpot and Zendesk, set up from
                a settings page rather than a support call.
              </p>
              <p className="proof">
                Status changes travel <b>both ways</b>, so nothing drifts out of
                date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* how */}
  <section className="pad" id="how">
    <div className="shell center">
      <span className="eyebrow rv">The process</span>
      <h2 className="h2 rv">Three steps, then it runs itself.</h2>
    </div>
    <div className="shell">
      <div className="track">
        <div className="step rv">
          <div className="disc">1</div>
          <h3>Collect</h3>
          <p>
            Connect your channels once. New feedback arrives every few minutes
            with the customer already matched.
          </p>
        </div>
        <div className="step rv d1">
          <div className="disc">2</div>
          <h3>Shape</h3>
          <p>
            Similar requests gather into themes with a plain summary you can
            rewrite in a sentence.
          </p>
        </div>
        <div className="step rv d2">
          <div className="disc">3</div>
          <h3>Ship</h3>
          <p>
            Push a theme to your tracker. Everyone who asked for it hears back
            on the day it lands.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* integrations */}
  <section className="pad-s">
    <div className="shell center">
      <span className="eyebrow rv">Connections</span>
      <h2 className="h2 rv">
        Plugs into the tools already open on your screen.
      </h2>
      <div className="chips rv d1">
        <span className="chip">
          <i style={{ background: "var(--jade)" }} />
          Linear
        </span>
        <span className="chip">
          <i style={{ background: "var(--sky)" }} />
          Jira
        </span>
        <span className="chip">
          <i style={{ background: "var(--coral)" }} />
          Zendesk
        </span>
        <span className="chip">
          <i style={{ background: "#F0C980" }} />
          Intercom
        </span>
        <span className="chip">
          <i style={{ background: "var(--jade)" }} />
          Slack
        </span>
        <span className="chip">
          <i style={{ background: "var(--sky)" }} />
          HubSpot
        </span>
        <span className="chip">
          <i style={{ background: "var(--coral)" }} />
          Notion
        </span>
        <span className="chip">
          <i style={{ background: "#F0C980" }} />
          Front
        </span>
        <span className="chip">
          <i style={{ background: "var(--jade)" }} />
          Gong
        </span>
        <span className="chip">
          <i style={{ background: "var(--sky)" }} />
          App Store
        </span>
        <span className="chip">
          <i style={{ background: "var(--coral)" }} />
          G2
        </span>
        <span className="chip">
          <i style={{ background: "#F0C980" }} />
          Zapier
        </span>
      </div>
    </div>
  </section>
  {/* stats */}
  <section className="pad-s">
    <div className="shell">
      <div className="statplate rv">
        <div className="stat">
          <b data-to={94} data-suffix="%">
            0%
          </b>
          <span>of new feedback themed without a human</span>
        </div>
        <div className="stat">
          <b data-to={6} data-suffix=" min">
            0 min
          </b>
          <span>from first connection to first theme</span>
        </div>
        <div className="stat">
          <b data-to={1800} data-suffix="+">
            0+
          </b>
          <span>product teams shaping feedback here</span>
        </div>
      </div>
    </div>
  </section>
  {/* testimonials */}
  <section className="pad" id="stories">
    <div className="shell">
      <div className="railhead">
        <div>
          <span className="eyebrow rv">Customers</span>
          <h2 className="h2 rv">
            What changed after the spreadsheet went away.
          </h2>
        </div>
        <div className="railnav rv d1">
          <button className="arw" id="prev" aria-label="Previous customer">
            <svg viewBox="0 0 24 24">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <span className="count" id="count">
            01 / 06
          </span>
          <button className="arw" id="next" aria-label="Next customer">
            <svg viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="shell">
      <div className="viewport" id="viewport">
        <div className="lane" id="lane">
          <article className="quote">
            <div className="qtop">
              <span className="co">
                <i className="t-jade" />
                Northbeam
              </span>
              <span className="result">11 themes on day one</span>
            </div>
            <blockquote>
              Four years of feedback sat in a spreadsheet nobody trusted.
              Celadon read it and gave us eleven themes. Two we had been arguing
              about for months.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-jade">RA</span>
              <div>
                <b>Rosa Aldana</b>
                <span>Head of Product</span>
              </div>
            </div>
          </article>
          <article className="quote tint">
            <div className="qtop">
              <span className="co">
                <i className="t-sky" />
                Halyard
              </span>
              <span className="result">Roadmap fight, 10 minutes</span>
            </div>
            <blockquote>
              The revenue weighting settled an argument we had been having all
              quarter. The feature we kept deferring was worth more than the
              three above it combined.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-sky">JM</span>
              <div>
                <b>Jonah Merrick</b>
                <span>VP Product</span>
              </div>
            </div>
          </article>
          <article className="quote">
            <div className="qtop">
              <span className="co">
                <i className="t-coral" />
                Petrichor
              </span>
              <span className="result">6 hrs a week back</span>
            </div>
            <blockquote>
              Support stopped forwarding me screenshots. Everything shows up
              already grouped, with the account name and the plan attached to
              it.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-coral">SO</span>
              <div>
                <b>Sena Okafor</b>
                <span>Product Lead</span>
              </div>
            </div>
          </article>
          <article className="quote">
            <div className="qtop">
              <span className="co">
                <i className="t-jade" />
                Oxbow
              </span>
              <span className="result">2,100 loops closed</span>
            </div>
            <blockquote>
              The loop closing is the part customers notice. People get a reply
              months after they asked, and they write back surprised that anyone
              remembered.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-jade">DK</span>
              <div>
                <b>Dov Katsaros</b>
                <span>Customer Success</span>
              </div>
            </div>
          </article>
          <article className="quote tint">
            <div className="qtop">
              <span className="co">
                <i className="t-sky" />
                Studio Marrow
              </span>
              <span className="result">Replaced three tools</span>
            </div>
            <blockquote>
              We are five people and I did not want another subscription. This
              one took out a spreadsheet, a Notion board and a weekly meeting,
              so it came out ahead.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-sky">MB</span>
              <div>
                <b>Maren Bly</b>
                <span>Founder</span>
              </div>
            </div>
          </article>
          <article className="quote">
            <div className="qtop">
              <span className="co">
                <i className="t-coral" />
                Kelp
              </span>
              <span className="result">Set up over one coffee</span>
            </div>
            <blockquote>
              I connected Zendesk and Slack, went to make a coffee, and came
              back to a themed list already waiting for me.
            </blockquote>
            <div className="groove" />
            <div className="who">
              <span className="face t-coral">TF</span>
              <div>
                <b>Tomas Ferreira</b>
                <span>Director of Product</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  {/* pricing */}
  <section className="pad" id="pricing">
    <div className="shell center">
      <span className="eyebrow rv">Pricing</span>
      <h2 className="h2 rv">Priced per workspace, not per seat.</h2>
      <p className="lede rv d1">
        Invite everyone. Charging you for the teammate who reads once a month
        never made sense.
      </p>
      <div className="toggle rv d1">
        <span className="lbl on" id="lblM">
          Monthly
        </span>
        <div
          className="switch"
          id="switch"
          role="switch"
          tabIndex={0}
          aria-checked="false"
          aria-label="Switch to yearly billing"
        >
          <span className="knob" />
        </div>
        <span className="lbl" id="lblY">
          Yearly
        </span>
        <span className="save">Save 30%</span>
      </div>
    </div>
    <div className="shell">
      <div className="plans">
        <article className="plan rv">
          <span className="tag">Solo</span>
          <div className="cost">
            <b className="price" data-m={30} data-y={21}>
              $30
            </b>
            <span className="per">per month</span>
          </div>
          <p className="total" data-m={30} data-y={252}>
            Billed monthly
          </p>
          <p className="desc">
            For one person keeping track of everything on their own.
          </p>
          <a className="btn wide" href="#start">
            Start free trial
          </a>
          <ul className="feat">
            <li>
              <i />
              Three channels connected
            </li>
            <li>
              <i />
              Up to 500 feedback items a month
            </li>
            <li>
              <i />
              Automatic theming
            </li>
            <li>
              <i />
              Email support
            </li>
          </ul>
        </article>
        <article className="plan hot rv d1">
          <span className="tag">Team, most picked</span>
          <div className="cost">
            <b className="price" data-m={80} data-y={56}>
              $80
            </b>
            <span className="per">per month</span>
          </div>
          <p className="total" data-m={80} data-y={672}>
            Billed monthly
          </p>
          <p className="desc">
            For a product team that needs the roadmap to trace back to real
            people.
          </p>
          <a className="btn solid wide" href="#start">
            Start free trial
          </a>
          <ul className="feat">
            <li>
              <i />
              Unlimited channels and seats
            </li>
            <li>
              <i />
              Up to 8,000 feedback items a month
            </li>
            <li>
              <i />
              Revenue weighting
            </li>
            <li>
              <i />
              Two-way sync with Linear and Jira
            </li>
            <li>
              <i />
              Loop closing from any channel
            </li>
          </ul>
        </article>
        <article className="plan rv d2">
          <span className="tag">Scale</span>
          <div className="cost">
            <b className="price" data-m={160} data-y={112}>
              $160
            </b>
            <span className="per">per month</span>
          </div>
          <p className="total" data-m={160} data-y={1344}>
            Billed monthly
          </p>
          <p className="desc">
            For several teams sharing one feedback pool without stepping on each
            other.
          </p>
          <a className="btn wide" href="#start">
            Talk to us
          </a>
          <ul className="feat">
            <li>
              <i />
              Everything in Team
            </li>
            <li>
              <i />
              Unlimited feedback items
            </li>
            <li>
              <i />
              Separate boards per team
            </li>
            <li>
              <i />
              SSO and audit log
            </li>
            <li>
              <i />
              Shared Slack channel with us
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
  {/* faq */}
  <section className="pad" id="faq">
    <div className="shell center">
      <span className="eyebrow rv">Questions</span>
      <h2 className="h2 rv">Asked often enough to put here.</h2>
    </div>
    <div className="shell">
      <div className="faq">
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>Can I bring in the feedback I already have?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                Yes. Upload a CSV or connect a tool and Celadon reads the full
                history, not only what arrives from today. Most teams import a
                few years on the first afternoon.
              </p>
            </div>
          </div>
        </div>
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>How accurate is the automatic theming?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                Around 94 percent of items land in a theme without anyone
                touching them. The rest sit in a review queue, and every
                grouping can be split, merged or renamed by hand.
              </p>
            </div>
          </div>
        </div>
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>Does it write to my issue tracker?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                It does. Push a theme to Linear or Jira and the issue carries
                the summary and a link back. When the issue closes, Celadon
                marks the theme shipped and queues the replies.
              </p>
            </div>
          </div>
        </div>
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>What happens when the trial ends?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                The workspace goes read only. Nothing is deleted, and you can
                export everything as CSV or JSON at any point, including after
                you leave.
              </p>
            </div>
          </div>
        </div>
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>Is customer data used to train models?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                No. Your feedback is processed to build your themes and nothing
                else. Data stays in the region you pick at setup, and the Scale
                plan adds an audit log of every read.
              </p>
            </div>
          </div>
        </div>
        <div className="q rv" role="button" tabIndex={0} aria-expanded="false">
          <div className="qh">
            <h3>We are two people. Is this too much tool?</h3>
            <span className="plus" />
          </div>
          <div className="qb">
            <div>
              <p>
                Small teams get the most out of the loop closing, since there is
                nobody spare to chase old threads. Start on Solo and move up
                only when the item count says so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* closing cta */}
  <section className="pad" id="start">
    <div className="shell">
      <div className="close-plate rv">
        <span className="eyebrow">Get started</span>
        <h2>Point it at a week of your own feedback.</h2>
        <p className="lede">
          Connect one channel and see what comes back. If the themes are wrong,
          you will know inside an hour.
        </p>
        <div className="form">
          <input
            className="field"
            type="email"
            placeholder="you@company.com"
            aria-label="Work email"
          />
          <button className="btn solid" type="button" id="create">
            Create account
          </button>
        </div>
        <p className="note">
          Free for 14 days. Cancel from the settings page in two clicks.
        </p>
      </div>
    </div>
  </section>
</main>

    );
}