export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="pulse" />
              Digital Marketing • CRM • Analytics • MarTech
            </span>
            <h1>
              Marketing campaigns built with{' '}
              <span className="gradient-text">clean tracking, CRM alignment, and measurable growth.</span>
            </h1>
            <p className="lede">
              I help marketing teams plan, launch, QA, measure, and optimize digital campaigns across CRM
              workflows, email, paid media, landing pages, analytics, and customer journey reporting.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/work/">
                View Portfolio Work
              </a>
              <a className="btn" href="/contact/">
                Contact Me
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>7+</strong>
                <span>Years marketing & web experience</span>
              </div>
              <div className="stat">
                <strong>5–7</strong>
                <span>Active campaigns supported at once</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Remote-ready collaboration</span>
              </div>
            </div>
          </div>
          <aside className="profile-card" aria-label="Brian Wilson profile">
            <img className="profile-img" src="/assets/profile.png" alt="Professional office portrait" />
            <div className="profile-meta">
              <div>
                <strong>Brian Wilson</strong>
                <p>Marketing Specialist | MarTech & Digital Analytics</p>
              </div>
              <span className="badge">Available Immediately</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>What I do</h2>
              <p>
                Practical marketing execution with a strong technical foundation, focused on campaign
                performance, reliable data, and clear customer journeys.
              </p>
            </div>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>Campaign Execution</h3>
              <p>
                Support multi-channel campaigns from planning to launch, including email, paid media,
                landing pages, CRM workflows, social content, and campaign QA.
              </p>
              <div className="tag-row">
                <span className="tag">Email</span>
                <span className="tag">Paid Media</span>
                <span className="tag">Landing Pages</span>
              </div>
            </article>
            <article className="card">
              <h3>CRM & Lifecycle</h3>
              <p>
                Build and support CRM-integrated marketing workflows, lead tracking, segmentation, lifecycle
                measurement, nurture campaigns, and reporting processes.
              </p>
              <div className="tag-row">
                <span className="tag">CRM</span>
                <span className="tag">Segmentation</span>
                <span className="tag">Lifecycle</span>
              </div>
            </article>
            <article className="card">
              <h3>Analytics & MarTech</h3>
              <p>
                Validate campaign tracking, UTMs, events, tags, pixels, and analytics reporting so teams can
                trust performance data and optimize with confidence.
              </p>
              <div className="tag-row">
                <span className="tag">GA4</span>
                <span className="tag">GTM</span>
                <span className="tag">Adobe Analytics</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h2>Core strengths</h2>
            <ul>
              <li>Digital marketing campaign planning, execution, QA, and optimization</li>
              <li>CRM workflows, contact management, lead tracking, segmentation, and lifecycle support</li>
              <li>Google Ads and Meta Ads campaign tracking, conversion setup, and performance reporting</li>
              <li>Adobe Analytics, Adobe Experience Cloud, AEP, CJA, GA4, GTM, and campaign tagging</li>
              <li>Website, landing page, form, link, pixel, and analytics validation before launch</li>
            </ul>
          </article>
          <article className="card">
            <h2>Tools & platforms</h2>
            <p>
              Adobe Analytics, Adobe Experience Cloud, Adobe Experience Platform, Customer Journey Analytics,
              Google Analytics 4, Google Tag Manager, Adobe Launch / Tags, Tealium, Google Ads, Meta Ads
              Manager, HubSpot-style CRM workflows, Mailchimp, Klaviyo, Canva, JIRA, Trello, Asana, Slack,
              Microsoft Teams, Google Workspace, Excel, Power BI, Tableau, Looker, HTML, CSS, JavaScript,
              REST, JSON, and SQL.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Experience</h2>
              <p>
                Marketing execution, analytics implementation support, and web development experience across
                campaign and customer-facing workflows.
              </p>
            </div>
          </div>
          <div className="timeline">
            <article className="card job">
              <time>Jan 2020 – May 2026</time>
              <div>
                <h3>Marketing Specialist • WP Marketing</h3>
                <p>
                  Supported digital marketing campaigns, CRM workflows, email marketing, paid media tracking,
                  reporting, QA, segmentation, analytics validation, landing page optimization, and
                  cross-functional campaign execution.
                </p>
              </div>
            </article>
            <article className="card job">
              <time>Sep 2018 – Sep 2019</time>
              <div>
                <h3>Full Stack Developer • WEBNOW</h3>
                <p>
                  Built and supported web features, landing pages, tracking logic, forms, integrations, and
                  QA workflows using HTML, CSS, JavaScript, REST, JSON, and SQL.
                </p>
              </div>
            </article>
            <article className="card job">
              <time>2014 – 2018</time>
              <div>
                <h3>B.S. Business Administration, Marketing • University of Nebraska Omaha</h3>
                <p>
                  Marketing concentration with business, communications, customer behavior, and campaign
                  strategy foundation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
