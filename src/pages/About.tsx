import { Link } from 'react-router-dom';

const PROCESS = [
  { num:'01', title:'Discovery', desc:'We immerse ourselves in your brand, goals, and target audience — then map out a clear strategy.' },
  { num:'02', title:'Design', desc:'Pixel-perfect wireframes and high-fidelity mockups, designed with conversion and beauty in mind.' },
  { num:'03', title:'Build', desc:'Clean, performant code. React, Next.js, or whatever fits — shipped to production in record time.' },
  { num:'04', title:'Launch', desc:'We handle deployment, DNS, and monitoring so you go live with zero stress and maximum impact.' },
];

const VALUES = [
  { icon:'⚡', title:'Speed', desc:'We ship in days, not months. Fast decisions, rapid prototyping, zero bottlenecks.' },
  { icon:'🎯', title:'Precision', desc:'Every pixel, word, and interaction is deliberate. We sweat the details so you don\'t have to.' },
  { icon:'🤝', title:'Partnership', desc:'We act like your in-house team — proactive, accountable, and invested in your success.' },
  { icon:'🚀', title:'Scalability', desc:'Built to grow. Every project is architected to handle 10x the load without breaking a sweat.' },
];

export default function About() {
  return (
    <>
      {/* ── About Hero ──────────────────────────────────────────── */}
      <section id="about" style={{ background:'var(--bg)', paddingTop:'80px' }}>
        <div
          className="about-bg"
          string="parallax" string-parallax-speed="0.2"
          style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 0% 50%,rgba(124,107,255,0.07) 0%,transparent 70%)' }}
        />

        {/* 3D torus decoration */}
        <div
          className="st3d-hide"
          string="3d progress" string-3d="torus"
          style={{ position:'absolute', right:'4%', top:'15%', width:180, height:180, ['--material-type' as string]:'standard', ['--material-color' as string]:'#06d6a0', ['--material-metalness' as string]:0.1, ['--material-roughness' as string]:0.3, ['--rotate-y' as string]:'calc(var(--progress,0)*360deg)', opacity:0.6, zIndex:0 } as React.CSSProperties}
          aria-hidden="true"
        />

        <div className="section-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'center' }}>

            {/* Image column */}
            <div className="reveal-left" string="progress" style={{ position:'relative' }}>
              <div
                className="about-float"
                string="lerp" string-lerp-y-strength="20"
                style={{ position:'absolute', top:'-2rem', right:'-2rem', width:80, height:80, background:'linear-gradient(135deg,var(--accent),var(--accent2))', borderRadius:'50%', opacity:0.3, animation:'float 5s ease-in-out infinite', zIndex:-1 }}
              />
              <div style={{ position:'relative', borderRadius:16, overflow:'hidden', aspectRatio:'4/5' }}>
                <img
                  src="https://leadpages.com/api/pages/1OBQLHZyil/assets/c2s1cgnfr64gvtek4o3rdzwz"
                  alt="Tabanca Tech Studio"
                  string="progress"
                  style={{ width:'100%', height:'100%', objectFit:'cover' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,8,13,0.6) 0%,transparent 50%)' }} />
                <div style={{ position:'absolute', bottom:'1.5rem', left:'1.5rem', background:'rgba(7,8,13,0.8)', backdropFilter:'blur(20px)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem 1.25rem', display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <div style={{ fontFamily:'var(--font-head)', fontSize:'2rem', fontWeight:800, color:'var(--accent)', lineHeight:1 }}>1+</div>
                  <div style={{ fontSize:'0.8rem', color:'var(--offwhite)', lineHeight:1.4 }}>Years of<br/>experience</div>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="reveal-right" string="progress">
              <div className="section-label">About us</div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1.5rem' }}>
                We craft digital <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>experiences</em> that move people
              </h2>
              <p style={{ fontSize:'1.05rem', color:'var(--offwhite)', lineHeight:1.75, marginBottom:'1.25rem', fontWeight:300 }}>
                In the Spice Isle, we all know the feeling of Tabanca — that heavy, hollow longing for something that's missing. In the modern business world, that heartbreak usually stems from a digital presence that's gone cold.
              </p>
              <p style={{ fontSize:'1.05rem', color:'var(--offwhite)', lineHeight:1.75, marginBottom:'1.25rem', fontWeight:300 }}>
                From pixel-perfect landing pages to full-stack web applications — we deliver work that converts, impresses, and scales with your business.
              </p>

              {/* Stats */}
              <div style={{ display:'flex', gap:'2.5rem', marginTop:'2.5rem', paddingTop:'2.5rem', borderTop:'1px solid var(--border)' }}>
                {[['5+','Projects delivered'],['98%','Client satisfaction'],['14d','Avg. turnaround']].map(([num, label]) => (
                  <div key={label} className="stat-reveal" string="progress">
                    <div style={{ fontFamily:'var(--font-head)', fontSize:'2.5rem', fontWeight:800, letterSpacing:'-0.03em', color:'var(--white)', lineHeight:1 }}>
                      <span style={{ color:'var(--accent)' }}>{num}</span>
                    </div>
                    <div style={{ fontSize:'0.8rem', color:'var(--muted)', marginTop:'0.25rem', letterSpacing:'0.02em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ─────────────────────────────────────────── */}
      <section style={{ background:'var(--bg2)' }}>
        <div string="parallax" string-parallax-speed="0.15"
          style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 50% at 100% 50%,rgba(124,107,255,0.06) 0%,transparent 70%)' }}
        />
        {/* 3D dodecahedron decoration */}
        <div
          className="st3d-hide"
          string="3d progress" string-3d="dodecahedron"
          style={{ position:'absolute', left:'3%', bottom:'10%', width:140, height:140, ['--material-type' as string]:'standard', ['--material-color' as string]:'#7c6bff', ['--material-metalness' as string]:0.4, ['--rotate-y' as string]:'calc(var(--progress,0)*720deg)', ['--rotate-x' as string]:'calc(var(--progress,0)*360deg)', opacity:0.6, zIndex:0 } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="section-inner">
          <div className="reveal" string="progress" style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="section-label" style={{ justifyContent:'center' }}>How we work</div>
            <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem' }}>
              Our <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>process</em>
            </h2>
            <p style={{ fontSize:'1rem', color:'var(--offwhite)', maxWidth:440, margin:'0 auto', fontWeight:300, lineHeight:1.7 }}>
              Four steps from idea to launch. Simple, transparent, repeatable.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'2rem' }}>
            {PROCESS.map((step, i) => (
              <div
                key={step.num}
                className="timeline-item"
                string="progress"
                style={{ ['--progress-offset' as string]: i * 0.1, background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:16, padding:'2rem', position:'relative', overflow:'hidden' } as React.CSSProperties}
              >
                <div style={{ fontFamily:'var(--font-head)', fontSize:'4rem', fontWeight:800, color:'var(--accent)', opacity:0.12, lineHeight:1, marginBottom:'0.5rem' }}>{step.num}</div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:'1.25rem', fontWeight:700, marginBottom:'0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize:'0.9rem', color:'var(--offwhite)', lineHeight:1.7, fontWeight:300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section style={{ background:'var(--bg)' }}>
        <div className="section-inner">
          <div className="reveal" string="progress" style={{ textAlign:'center', marginBottom:'4rem' }}>
            <div className="section-label" style={{ justifyContent:'center' }}>What drives us</div>
            <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em' }}>
              Our <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>values</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'1.5rem' }}>
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal-scale" string="progress"
                style={{ ['--progress-offset' as string]: i * 0.08, background:'var(--bg3)', border:'1px solid var(--border)', borderRadius:16, padding:'2rem', textAlign:'center' } as React.CSSProperties}
              >
                <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:'1.15rem', fontWeight:700, marginBottom:'0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize:'0.88rem', color:'var(--offwhite)', lineHeight:1.7, fontWeight:300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{ background:'var(--bg2)', padding:'6rem 2rem', textAlign:'center' }}>
        <h2 className="reveal" string="progress" style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'1.5rem' }}>
          Ready to <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>work together?</em>
        </h2>
        <Link to="/contact" className="btn-primary reveal" string="magnetic progress">Start the conversation</Link>
      </section>
    </>
  );
}
