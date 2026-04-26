import { useLocalStorageData, toInitials } from '../hooks/useLocalStorageData';
import type { Testimonial } from '../types';

const FALLBACK: Testimonial[] = [
  { id:1, name:'Marcus Reid', role:'Founder, StartupFlow', quote:"Tabanca Tech built our entire website in under two weeks. The quality blew us away — it looked like we'd spent 10x the budget. Incredible team." },
  { id:2, name:'Aisha Laurent', role:'Creative Director, NovaBrand', quote:"Our rebranding was seamless. They understood the vision immediately and delivered beyond expectations. Communication was top-notch throughout." },
  { id:3, name:'David Kim', role:'CEO, RealEdge Properties', quote:"Setting up our office network used to be a nightmare. Tabanca Tech made it effortless. Fast turnaround, friendly team, and everything works perfectly." },
  { id:4, name:'Sarah Jenkins', role:'VP Marketing, TerraCo', quote:"Their attention to detail and conversion-focused design completely transformed our funnel. Our leads doubled in the first month." },
  { id:5, name:'Julian Vance', role:'Founder, PulseMedia', quote:"The 3D animations they added to our site are mind-blowing. We constantly get asked who built our website. Absolutely top tier." },
];

export default function Testimonials() {
  const { data: testimonials, loading } = useLocalStorageData<Testimonial>('testimonials', '/data/default-testimonials.json', FALLBACK);

  return (
    <section id="testimonials" style={{ background:'var(--bg)', paddingTop: '80px', position: 'relative' }}>
      <div className="testi-bg" string="parallax" string-parallax-speed="0.2"
        style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 100%,rgba(124,107,255,0.08) 0%,transparent 70%)' }}
      />

      {/* Floating 3D objects in background */}
      <div
        className="st3d-hide"
        string="3d progress" string-3d="sphere"
        style={{ position:'absolute', right:'15%', top:'20%', width:150, height:150, ['--material-color' as string]:'#7c6bff', ['--rotate-y' as string]:'calc(var(--progress,0)*360deg)', opacity:0.3, zIndex:0 } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        className="st3d-hide"
        string="3d progress" string-3d="torus"
        style={{ position:'absolute', left:'10%', bottom:'30%', width:120, height:120, ['--material-color' as string]:'#06d6a0', ['--rotate-x' as string]:'calc(var(--progress,0)*360deg)', opacity:0.2, zIndex:0 } as React.CSSProperties}
        aria-hidden="true"
      />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testi-header reveal" string="progress" style={{ textAlign:'center', marginBottom:'6rem' }}>
          <div className="section-label" style={{ justifyContent:'center' }}>Client love</div>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
            Don't take our <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>word</em> for it
          </h2>
          <p style={{ fontSize:'1rem', color:'var(--offwhite)', maxWidth:440, margin:'0 auto', fontWeight:300, lineHeight:1.7 }}>
            Real feedback from founders and teams who've worked with us.
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign:'center', color:'var(--muted)' }}>Loading…</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
            {testimonials.map((item, i) => (
              <div 
                key={item.id} 
                className="testi-card" 
                string="progress" 
                style={{ 
                  width: '100%', 
                  maxWidth: '700px',
                  /* Stagger horizontal offset based on index and scroll progress to create a winding path effect */
                  transform: `translateX(calc(${i % 2 === 0 ? '-10vw' : '10vw'} * (1 - var(--progress, 0)))) scale(calc(0.9 + var(--progress,0)*0.1))`,
                  opacity: 'var(--progress, 0)',
                  willChange: 'transform, opacity'
                } as React.CSSProperties}
              >
                <div className="testi-stars">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  ))}
                </div>
                <p className="testi-quote">"{item.quote}"</p>
                <div className="testi-author">
                  <div className="testi-avatar" string="parallax" string-parallax-speed="0.1">{toInitials(item.name)}</div>
                  <div>
                    <div className="testi-name">{item.name}</div>
                    <div className="testi-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
