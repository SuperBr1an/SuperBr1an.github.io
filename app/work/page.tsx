import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Work | Brian Wilson',
  description:
    'Portfolio work examples for Brian Wilson: campaign tracking, CRM workflows, email marketing, landing page optimization, and analytics QA.',
};

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="pulse" />
            Selected Portfolio Work
          </span>
          <h1>Campaign, CRM, analytics, and web optimization projects.</h1>
          <p className="lede">
            Representative examples of how I support marketing teams with structured execution, reliable
            tracking, and performance-focused optimization.
          </p>
          <div className="kpi-list">
            <div className="kpi">
              <b>CRM</b>
              <span>Lead tracking & lifecycle workflows</span>
            </div>
            <div className="kpi">
              <b>QA</b>
              <span>Forms, tags, UTMs & pixels</span>
            </div>
            <div className="kpi">
              <b>Analytics</b>
              <span>GA4, Adobe Analytics & reports</span>
            </div>
            <div className="kpi">
              <b>Growth</b>
              <span>Conversion and engagement support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card case-card">
            <div>
              <h3>Lead Generation Campaign Tracking</h3>
              <p>
                Supported a lead-generation campaign by aligning landing page messaging, UTM structure,
                GTM/GA4 events, form validation, conversion tracking, and CRM lead capture before launch.
              </p>
              <ul>
                <li>Validated campaign links, forms, pixels, and analytics events</li>
                <li>Confirmed leads flowed correctly into CRM workflows</li>
                <li>Created cleaner reporting visibility for post-launch optimization</li>
              </ul>
              <div className="tag-row">
                <span className="tag">GTM</span>
                <span className="tag">GA4</span>
                <span className="tag">CRM</span>
                <span className="tag">UTMs</span>
              </div>
            </div>
            <div className="number">01</div>
          </article>
          <article className="card case-card">
            <div>
              <h3>Email & Lifecycle Marketing Support</h3>
              <p>
                Supported email and nurture workflows focused on customer segmentation, journey-stage
                messaging, campaign QA, engagement reporting, and performance improvement recommendations.
              </p>
              <ul>
                <li>Reviewed audience logic, content, links, and CTAs</li>
                <li>Tracked opens, clicks, conversions, unsubscribe trends, and segment performance</li>
                <li>Recommended improvements to messaging, CTA placement, and audience targeting</li>
              </ul>
              <div className="tag-row">
                <span className="tag">Email</span>
                <span className="tag">Lifecycle</span>
                <span className="tag">Segmentation</span>
                <span className="tag">Reporting</span>
              </div>
            </div>
            <div className="number">02</div>
          </article>
          <article className="card case-card">
            <div>
              <h3>Marketing Analytics QA Workflow</h3>
              <p>
                Used structured QA checklists to review data flow across landing pages, GTM/GA4, conversion
                pixels, UTM parameters, CRM activity, and reporting dashboards.
              </p>
              <ul>
                <li>Reduced launch errors by catching tracking issues before campaigns went live</li>
                <li>Improved consistency in naming conventions and campaign reporting</li>
                <li>Helped teams trust performance dashboards and optimization decisions</li>
              </ul>
              <div className="tag-row">
                <span className="tag">Analytics QA</span>
                <span className="tag">Adobe</span>
                <span className="tag">Meta Pixel</span>
                <span className="tag">Google Ads</span>
              </div>
            </div>
            <div className="number">03</div>
          </article>
          <article className="card case-card">
            <div>
              <h3>Website & Landing Page Optimization</h3>
              <p>
                Supported updates to website pages and campaign landing pages by reviewing user flow, copy
                clarity, form behavior, mobile responsiveness, links, and analytics readiness.
              </p>
              <ul>
                <li>Improved launch readiness through detailed page and tracking QA</li>
                <li>Connected technical web checks with marketing conversion goals</li>
                <li>Supported better customer experience across campaign touchpoints</li>
              </ul>
              <div className="tag-row">
                <span className="tag">Landing Pages</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">CRO</span>
              </div>
            </div>
            <div className="number">04</div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Work sample</h2>
          <p>This representative work sample shows campaign and analytics thinking without confidential client data.</p>
          <div className="hero-actions">
            <a className="btn primary" href="/assets/Marketing_Work_Sample.pdf" target="_blank" rel="noopener">
              Open Work Sample
            </a>
            <a className="btn" href="/assets/Brian_Wilson_Resume.pdf" target="_blank" rel="noopener">
              Open Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
