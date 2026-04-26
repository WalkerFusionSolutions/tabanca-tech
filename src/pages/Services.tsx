import { useLocalStorageData } from '../hooks/useLocalStorageData';
import type { Service } from '../types';
import { Link } from 'react-router-dom';

const FALLBACK: Service[] = [
  { id:1, tag:'Web Design', title:'High-Converting Landing Pages', description:"We design landing pages that don't just look good — they drive real results. Every layout decision is backed by conversion principles and sharp aesthetics.", image:'https://leadpages.com/api/pages/1OBQLHZyil/assets/ewf8ffnkuoe161evou7kdgjl', featured:true },
  { id:2, tag:'Branding & Identity', title:'Brand Systems That Scale', description:'Logos, palettes, typography, and guidelines. We build brand identities that stay consistent from your website to your business card.', image:'https://leadpages.com/api/pages/1OBQLHZyil/assets/jajnxbpa24z76wnrya8u4bb6', featured:false },
  { id:3, tag:'IT Solutions', title:'Managed IT & Support', description:'From network setup to cloud migrations, we handle the tech so you can focus on growing your business. Reliable, responsive, affordable.', image:'https://leadpages.com/api/pages/1OBQLHZyil/assets/g5q6auh0h5l9zl3x71c2raat', featured:false },
];

const SHAPES = ['sphere','torus','box'];
const SHAPE_COLORS = ['#7c6bff','#06d6a0','#a78bfa'];

export default function Services() {
  const { data: services, loading } = useLocalStorageData<Service>('services', '/data/default-services.json', FALLBACK);

  return (
    <>
      <section id="work" style={{ background:'var(--bg2)', paddingTop:'80px' }}>
        <div
          className="work-bg"
          string="parallax" string-parallax-speed="0.2"
          style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 50% at 100% 0%,rgba(6,214,160,0.05) 0%,transparent 70%)' }}
        />

        {/* 3D sphere decoration */}
        <div
          className="st3d-hide"
          string="3d progress" string-3d="sphere"
          style={{ position:'absolute', left:'3%', top:'10%', width:160, height:160, ['--material-color' as string]:'#a78bfa', ['--rotate-y' as string]:'calc(var(--progress,0)*360deg)', opacity:0.5, zIndex:0 } as React.CSSProperties}
          aria-hidden="true"
        />

        <div className="section-inner">
          <div className="reveal" string="progress" style={{ marginBottom:'4rem' }}>
            <div className="section-label">What we do</div>
            <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.2rem,4vw,3.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em', maxWidth:500 }}>
              Work that <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>earns</em> attention
            </h1>
          </div>

          {loading ? (
            <div style={{ textAlign:'center', color:'var(--muted)', padding:'4rem' }}>Loading…</div>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', gap:'6rem' }}>
              {services.map((service, i) => (
                <div
                  key={service.id}
                  className="service-card-inner reveal"
                  string="progress"
                  style={{
                    display:'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    direction: i % 2 === 1 ? 'rtl' : 'ltr',
                    gap:'4rem',
                    alignItems:'center',
                    position:'relative',
                  } as React.CSSProperties}
                >
                  {/* 3D shape per card */}
                  <div
                    className="st3d-hide"
                    string="3d progress"
                    string-3d={SHAPES[i % 3]}
                    style={{ position:'absolute', top:'-2rem', right: i%2===0 ? 'auto' : '-2rem', left: i%2===0 ? '-2rem' : 'auto', width:80, height:80, ['--material-color' as string]:SHAPE_COLORS[i % 3], ['--rotate-y' as string]:'calc(var(--progress,0)*360deg)', opacity:0.4, zIndex:0 } as React.CSSProperties}
                    aria-hidden="true"
                  />

                  {/* Image */}
                  <div style={{ direction:'ltr', borderRadius:16, overflow:'hidden', border:'1px solid var(--border)', position:'relative' }}>
                    <img src={service.image} alt={service.tag} string="parallax" string-parallax-speed="0.12"
                      style={{ width:'100%', height:360, objectFit:'cover', display:'block' }}
                    />
                    {service.featured && (
                      <div style={{ position:'absolute', top:'1rem', left:'1rem', background:'var(--accent)', color:'var(--white)', fontFamily:'var(--font-head)', fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.3rem 0.8rem', borderRadius:99 }}>
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div style={{ direction:'ltr', display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                    <div className="card-tag">{service.tag}</div>
                    <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.03em' }}>{service.title}</h2>
                    <p style={{ fontSize:'1rem', color:'var(--offwhite)', lineHeight:1.75, fontWeight:300 }}>{service.description}</p>
                    <Link to="/contact" className="btn-primary" string="magnetic" style={{ alignSelf:'flex-start' }}>
                      Get a quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="reveal" string="progress" style={{ textAlign:'center', marginTop:'5rem' }}>
            <p style={{ color:'var(--offwhite)', marginBottom:'1.5rem' }}>Don't see what you need? Let's talk.</p>
            <Link to="/contact" className="btn-secondary" string="magnetic">Start a custom project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
