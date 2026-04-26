import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section id="hero" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', position:'relative', overflow:'hidden', padding:'8rem 2rem 4rem' }}>

        {/* Background layers */}
        <div className="hero-bg" style={{ position:'absolute', inset:0, zIndex:0 }}>
          <div
            className="hero-bg-gradient"
            string="parallax" string-parallax-speed="0.15"
            style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(124,107,255,0.18) 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 80% 80%,rgba(6,214,160,0.08) 0%,transparent 60%)', willChange: 'transform' }}
          />
          <div
            className="hero-grid"
            string="parallax" string-parallax-speed="0.3"
            style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'80px 80px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)', willChange: 'transform' }}
          />
          <div
            className="hero-orb"
            string="progress"
            style={{ position:'absolute', width:600, height:600, background:'radial-gradient(circle,rgba(124,107,255,0.15) 0%,transparent 70%)', borderRadius:'50%', top:'50%', left:'50%', transform:'translate(-50%,-60%)', animation:'pulse 6s ease-in-out infinite', willChange: 'transform, opacity' }}
          />
        </div>

        {/* 3D Icosahedron — hero accent */}
        <div
          className="st3d-hide"
          string="3d progress parallax" string-parallax-speed="0.2"
          string-3d="icosahedron"
          style={{ position:'absolute', top:'10%', right:'5%', width:280, height:280, ['--material-type' as string]:'standard', ['--material-color' as string]:'#7c6bff', ['--material-metalness' as string]:0.4, ['--material-roughness' as string]:0.1, ['--rotate-y' as string]:'calc(var(--progress,0) * 720deg)', ['--rotate-x' as string]:'calc(var(--progress,0) * -360deg)', zIndex:1 } as React.CSSProperties}
          aria-hidden="true"
        />
        {/* 3D Torus — lower left */}
        <div
          className="st3d-hide"
          string="3d progress parallax" string-parallax-speed="-0.15"
          string-3d="torus"
          style={{ position:'absolute', bottom:'15%', left:'5%', width:200, height:200, ['--material-type' as string]:'standard', ['--material-color' as string]:'#06d6a0', ['--material-metalness' as string]:0.2, ['--material-roughness' as string]:0.2, ['--rotate-y' as string]:'calc(var(--progress,0) * -720deg + 45deg)', ['--rotate-x' as string]:'calc(var(--progress,0) * 360deg + 45deg)', zIndex:1, opacity:0.8 } as React.CSSProperties}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="hero-overline" style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'1.5rem', opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', position:'relative', zIndex:2 }}>
          Web Design &amp; IT Solutions
        </div>

        <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(3.5rem,8vw,7.5rem)', fontWeight:800, lineHeight:1.0, letterSpacing:'-0.04em', position:'relative', zIndex:2, marginBottom:'1.75rem' }}
          string="split" string-split-type="words"
        >
          <span style={{ display:'block', opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards' }}>You imagine it.</span>
          <span style={{ display:'block', opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s forwards' }}>
            <span style={{ background:'linear-gradient(135deg,var(--white) 30%,var(--accent2) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>We build it,</span>
            {' '}<em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)', WebkitTextFillColor:'var(--accent2)' }}>fast.</em>
          </span>
        </h1>

        <p style={{ fontSize:'clamp(1rem,1.5vw,1.15rem)', color:'var(--offwhite)', maxWidth:520, lineHeight:1.7, margin:'0 auto 2.5rem', fontWeight:300, opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s forwards', position:'relative', zIndex:2 }}>
          Tabanca Tech is a trusted web design &amp; IT studio that feels like an in-house team — but only costs you a fraction of it.
        </p>

        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s forwards', position:'relative', zIndex:2 }}>
          <Link to="/contact" className="btn-primary" string="magnetic" aria-label="Get an instant quote">Instant Quote</Link>
          <Link to="/services" className="btn-secondary" string="magnetic" aria-label="View our services">View Work</Link>
        </div>

        {/* Trusted by strip moved to marquee below */}

        {/* Scroll indicator */}
        <div style={{ position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem', opacity:0, animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.3s forwards', zIndex:2 }}>
          <div style={{ width:1, height:40, background:'linear-gradient(to bottom,var(--accent),transparent)', animation:'scrollDown 1.5s ease-in-out infinite' }} />
          <span style={{ fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted)' }}>Scroll</span>
        </div>
      </section>

      {/* ── Brand Marquee ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg2)', overflow: 'hidden', position: 'relative' }}>
        <div string="parallax" string-parallax-speed="0.15" style={{ position: 'relative', willChange: 'transform' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
          Trusted by forward-thinking brands
          </div>
          <div style={{ display: 'flex', width: '200%', animation: 'marqueeScroll 30s linear infinite', willChange: 'transform' }}>
            {[1, 2].map(set => (
              <div key={set} style={{ display: 'flex', width: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
                {['Stash Street','Cilantro','Movie Palace','Lavo Lanes','TAMCC',"L&M's Catering"].map(name => (
                  <div key={name} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    color: 'rgba(255,255,255,0.2)',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color='rgba(255,255,255,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.color='rgba(255,255,255,0.2)')}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2zm0 3.5l7.5 15h-15L12 5.5z"/>
                    </svg>
                    <span style={{ fontFamily:'var(--font-head)', fontWeight:700, fontSize:'1.2rem', letterSpacing:'-0.02em' }}>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Services Preview ─────────────────────────── */}
      <section id="work" style={{ background:'var(--bg2)' }}>
        <div className="work-bg" string="parallax" string-parallax-speed="0.2"
          style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 50% at 100% 0%,rgba(6,214,160,0.05) 0%,transparent 70%)', willChange: 'transform' }}
        />
        {/* Decorative 3D box */}
        <div
          className="st3d-hide"
          string="3d progress parallax" string-3d="box" string-parallax-speed="0.15"
          style={{ position:'absolute', right:'3%', top:'15%', width:100, height:100, ['--material-type' as string]:'standard', ['--material-color' as string]:'#a78bfa', ['--material-metalness' as string]:0.1, ['--material-roughness' as string]:0.4, ['--rotate-y' as string]:'calc(var(--progress,0)*720deg)', ['--rotate-x' as string]:'calc(var(--progress,0)*-720deg)', opacity:0.5, zIndex:0 } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="section-inner">
          <div className="reveal" string="progress"
            style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'4rem', flexWrap:'wrap', gap:'2rem' }}
          >
            <div>
              <div className="section-label">What we do</div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', maxWidth:400 }}>
                Work that <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>earns</em> attention
              </h2>
            </div>
            <p style={{ maxWidth:320, fontSize:'0.95rem', color:'var(--offwhite)', lineHeight:1.7, fontWeight:300, textAlign:'right' }}>
              A selection of services and projects that define how we think and build.
            </p>
          </div>

          <div className="bento-grid">
            <div className="work-card bento-item-large underglow reveal" string="progress">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/ewf8ffnkuoe161evou7kdgjl" alt="Web Design" className="card-img" style={{ borderRadius: '16px' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <div className="card-tag">Web Design &amp; Development</div>
                <div className="card-title">High-Converting Digital Experiences</div>
                <div className="card-desc">We build lightning-fast web applications and sites that don't just look good — they are engineered to convert visitors into loyal customers.</div>
              </div>
            </div>
            <div className="work-card bento-item-small underglow reveal" string="progress">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/jajnxbpa24z76wnrya8u4bb6" alt="Branding" className="card-img" style={{ borderRadius: '16px 16px 0 0' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <div className="card-tag">Brand Identity</div>
                <div className="card-title">Systems That Scale</div>
                <div className="card-desc">Logos, palettes, and typography.</div>
              </div>
            </div>
            <div className="work-card bento-item-small underglow reveal" string="progress">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/g5q6auh0h5l9zl3x71c2raat" alt="IT Solutions" className="card-img" style={{ borderRadius: '16px 16px 0 0' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <div className="card-tag">IT Solutions</div>
                <div className="card-title">Managed Infrastructure</div>
                <div className="card-desc">Reliable network and cloud architecture.</div>
              </div>
            </div>
          </div>

          <div className="reveal" string="progress" style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link to="/services" className="btn-secondary" string="magnetic">See all services →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section style={{ background:'var(--bg)', padding:'6rem 2rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div string="parallax" string-parallax-speed="0.1"
          style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(124,107,255,0.12) 0%,transparent 70%)', willChange: 'transform' }}
        />
        <div
          className="st3d-hide"
          string="3d progress" string-3d="dodecahedron"
          style={{ position:'absolute', left:'8%', top:'20%', width:160, height:160, ['--material-type' as string]:'standard', ['--material-color' as string]:'#7c6bff', ['--material-metalness' as string]:0.4, ['--material-roughness' as string]:0.2, ['--rotate-y' as string]:'calc(var(--progress,0)*720deg)', ['--rotate-x' as string]:'calc(var(--progress,0)*-720deg)', opacity:0.8, zIndex:0 } as React.CSSProperties}
          aria-hidden="true"
        />
        <div style={{ position:'relative', zIndex:1 }}>
          <h2 className="reveal" string="progress"
            style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'1.5rem' }}
          >
            Ready to build something <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>remarkable?</em>
          </h2>
          <p className="reveal" string="progress" style={{ color:'var(--offwhite)', maxWidth:480, margin:'0 auto 2.5rem', lineHeight:1.7, fontWeight:300 }}>
            Get in touch and we'll turn your idea into a living, breathing digital product.
          </p>
          <Link to="/contact" className="btn-primary reveal" string="magnetic progress">Start your project</Link>
        </div>
      </section>
    </main>
  );
}
