import { useLocalStorageData } from '../hooks/useLocalStorageData';
import type { Project } from '../types';

const FALLBACK: Project[] = [
  { id:1, domain:'cilantro.gd', tag:'Web Design & Dev', title:'Cilantro Restaurant', description:'A full-stack restaurant website with online reservations, menu management, and a custom CMS — built for a Caribbean dining experience.', image:'https://leadpages.com/api/library/pibszxzqo57bp4v96z1qq5jq', link:'https://cilantro-mhtg376gm-walkerfusionsolutions-8509s-projects.vercel.app/#top', pills:['Next.js','Vercel','Custom CMS'] },
  { id:2, domain:'moviepalace.gd', tag:'Web Design & Dev', title:'Movie Palace Grenada', description:"A cinema booking platform for Grenada's premier movie theatre — featuring live showtimes, seat selection, and mobile ticket delivery.", image:'https://leadpages.com/api/library/get1hixezmtho6t8d8o334hr', link:'https://movie-palace-grenada-c9n3u81jd.vercel.app/', pills:['React','Vercel','Booking System'] },
];

export default function Portfolio() {
  const { data: projects, loading } = useLocalStorageData<Project>('projects', '/data/default-projects.json', FALLBACK);

  return (
    <main>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-sticky">
          
          <div className="portfolio-parallax-bg" string="parallax" string-parallax-speed="0.1"
            style={{ position:'absolute', inset:0, background:'radial-gradient(70% 50% at 30% 50%, rgba(6,214,160,0.07) 0%, transparent 70%), radial-gradient(50% 40% at 80% 20%, rgba(124,107,255,0.06) 0%, transparent 60%)', willChange:'transform' }}
          />

          <div className="section-inner portfolio-inner" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" string="progress" style={{ textAlign:'center', marginBottom:'4rem' }}>
              <div className="section-label" style={{ justifyContent:'center' }}>Our Work</div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
                Sites we've <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>shipped</em>
              </h2>
            </div>

            {loading ? (
              <div style={{ textAlign:'center', color:'var(--muted)' }}>Loading…</div>
            ) : (
              <div className="h-scroll-track" string="progress">
                {projects.map((p, i) => (
                  <div key={p.id} className="pf-item">
                    <div className="pf-browser" style={{ flex: 1, position:'relative', width: '100%' }}>
                      <div className="pf-browser-bar">
                        <span className="pf-dot" style={{ background:'#ff5f57' }} />
                        <span className="pf-dot" style={{ background:'#febc2e' }} />
                        <span className="pf-dot" style={{ background:'#28c840' }} />
                        <div className="pf-url-bar">{p.domain}</div>
                      </div>
                      <div className="pf-screen" style={{ overflow: 'hidden' }}>
                        <div className="pf-screen-scroll">
                          <img src={p.image} alt={p.title} style={{ width:'100%', height:'auto', display:'block' }} loading="lazy" />
                        </div>
                      </div>
                    </div>

                    <div className="pf-info">
                      <div className="pf-tag" style={{ color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent3)' }}>{p.tag}</div>
                      <h3 className="pf-title">{p.title}</h3>
                      <p className="pf-desc">{p.description}</p>
                      <div className="pf-meta">
                        {(p.pills || []).map(pill => (
                          <span key={pill} className="pf-pill">{pill}</span>
                        ))}
                      </div>
                      <a href={p.link} target="_blank" rel="noreferrer" className="pf-link" string="magnetic" aria-label={`View live site for ${p.title}`}>
                        View live site 
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
