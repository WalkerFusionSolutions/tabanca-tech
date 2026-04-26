import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconDeviceDesktop, IconPalette, IconCloudLock } from '@tabler/icons-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section id="hero" style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', position:'relative', overflow:'hidden', padding:'8rem 2rem 4rem' }}>

        {/* Background layers */}
        <div className="hero-bg" style={{ position:'absolute', inset:0, zIndex:0 }}>
          <div
            className="hero-bg-gradient"
            style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(124,107,255,0.18) 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 80% 80%,rgba(6,214,160,0.08) 0%,transparent 60%)' }}
          />
          <div
            className="hero-grid"
            style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize:'80px 80px', maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)' }}
          />
          {/* Framer Motion Floating Orbs */}
          <motion.div
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position:'absolute', width:300, height:300, background:'var(--accent)', filter:'blur(100px)', borderRadius:'50%', top:'10%', right:'5%', opacity:0.3, zIndex:1 }}
          />
          <motion.div
            animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ position:'absolute', width:250, height:250, background:'var(--accent3)', filter:'blur(100px)', borderRadius:'50%', bottom:'10%', left:'5%', opacity:0.2, zIndex:1 }}
          />
        </div>

        {/* Hero content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'1.5rem', position:'relative', zIndex:2 }}>
          Web Design &amp; IT Solutions
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontFamily:'var(--font-head)', fontSize:'clamp(3.5rem,8vw,7.5rem)', fontWeight:800, lineHeight:1.0, letterSpacing:'-0.04em', position:'relative', zIndex:2, marginBottom:'1.75rem' }}>
          <span style={{ display:'block' }}>You imagine it.</span>
          <span style={{ display:'block' }}>
            <span style={{ background:'linear-gradient(135deg,var(--white) 30%,var(--accent2) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>We build it,</span>
            {' '}<em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)', WebkitTextFillColor:'var(--accent2)' }}>fast.</em>
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ fontSize:'clamp(1rem,1.5vw,1.15rem)', color:'var(--offwhite)', maxWidth:520, lineHeight:1.7, margin:'0 auto 2.5rem', fontWeight:300, position:'relative', zIndex:2 }}>
          Tabanca Tech is a trusted web design &amp; IT studio that feels like an in-house team — but only costs you a fraction of it.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', position:'relative', zIndex:2 }}>
          <Link to="/contact" className="btn-primary" aria-label="Get an instant quote">Instant Quote</Link>
          <Link to="/services" className="btn-secondary" aria-label="View our services">View Work</Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} style={{ position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem', zIndex:2 }}>
          <div style={{ width:1, height:40, background:'linear-gradient(to bottom,var(--accent),transparent)', animation:'scrollDown 1.5s ease-in-out infinite' }} />
          <span style={{ fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted)' }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── Brand Marquee ─────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg2)', overflow: 'hidden', position: 'relative' }}>
        <motion.div style={{ position: 'relative', y: y1 }}>
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
        </motion.div>
      </section>

      {/* ── Featured Services Preview ─────────────────────────── */}
      <section id="work" style={{ background:'var(--bg2)', padding: '6rem 0' }}>
        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
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
          </motion.div>

          <div className="bento-grid">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0 }} className="work-card bento-item-large underglow">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/ewf8ffnkuoe161evou7kdgjl" alt="Web Design" className="card-img" style={{ borderRadius: '16px' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <IconDeviceDesktop size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <div className="card-tag">Web Design &amp; Development</div>
                <div className="card-title">High-Converting Digital Experiences</div>
                <div className="card-desc">We build lightning-fast web applications and sites that don't just look good — they are engineered to convert visitors into loyal customers.</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="work-card bento-item-small underglow">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/jajnxbpa24z76wnrya8u4bb6" alt="Branding" className="card-img" style={{ borderRadius: '16px 16px 0 0' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <IconPalette size={32} color="var(--accent2)" style={{ marginBottom: '0.75rem' }} />
                <div className="card-tag">Brand Identity</div>
                <div className="card-title">Systems That Scale</div>
                <div className="card-desc">Logos, palettes, and typography.</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.4 }} className="work-card bento-item-small underglow">
              <img src="https://leadpages.com/api/pages/1OBQLHZyil/assets/g5q6auh0h5l9zl3x71c2raat" alt="IT Solutions" className="card-img" style={{ borderRadius: '16px 16px 0 0' }} />
              <div className="card-body glass-panel" style={{ borderRadius: '0 0 16px 16px' }}>
                <IconCloudLock size={32} color="var(--accent3)" style={{ marginBottom: '0.75rem' }} />
                <div className="card-tag">IT Solutions</div>
                <div className="card-title">Managed Infrastructure</div>
                <div className="card-desc">Reliable network and cloud architecture.</div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link to="/services" className="btn-secondary">See all services →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section style={{ background:'var(--bg)', padding:'6rem 2rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <motion.div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(124,107,255,0.12) 0%,transparent 70%)', y: y2 }} />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position:'relative', zIndex:1 }}>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:800, letterSpacing:'-0.03em', marginBottom:'1.5rem' }}>
            Ready to build something <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>remarkable?</em>
          </h2>
          <p style={{ color:'var(--offwhite)', maxWidth:480, margin:'0 auto 2.5rem', lineHeight:1.7, fontWeight:300 }}>
            Get in touch and we'll turn your idea into a living, breathing digital product.
          </p>
          <Link to="/contact" className="btn-primary">Start your project</Link>
        </motion.div>
      </section>
    </main>
  );
}
