import { Fragment } from 'react';
import { site } from '@/lib/site';

/** The rising sun, with the studio's figures rising on it. */
export default function SunHero() {
  return (
    <div className="sun-col">
      <div className="sun-stage">
        <div className="sun">
          <svg viewBox="0 0 500 500" aria-hidden="true">
            <circle cx="250" cy="250" r="248" fill="#7A2414" />
            <rect x="0" y="338" width="500" height="8" fill="#F2A93B" />
            <rect x="0" y="366" width="500" height="12" fill="#F2A93B" />
            <rect x="0" y="398" width="500" height="16" fill="#F2A93B" />
            <rect x="0" y="434" width="500" height="20" fill="#F2A93B" />
            <rect x="0" y="474" width="500" height="26" fill="#F2A93B" />
          </svg>
          <dl className="sun-stats">
            {site.stats.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <span className="stat-rule" aria-hidden="true" />}
                <div className="stat">
                  <dt className="stat-label" style={{ order: 2 }}>{s.label}</dt>
                  <dd className="stat-value" style={{ margin: 0, order: 1 }}>{s.value}</dd>
                </div>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
