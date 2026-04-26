import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" style={{ background:'var(--bg2)', minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', paddingTop:'80px' }}>
      <div className="contact-bg" string="parallax" string-parallax-speed="0.2"
        style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(6,214,160,0.06) 0%,transparent 70%)' }}
      />
      
      {/* 3D background shapes */}
      <div
        className="st3d-hide"
        string="3d progress" string-3d="torus"
        style={{ position:'absolute', left:'5%', top:'20%', width:200, height:200, ['--material-color' as string]:'#7c6bff', ['--rotate-y' as string]:'calc(var(--progress,0)*720deg)', ['--rotate-x' as string]:'calc(var(--progress,0)*360deg)', opacity:0.3, zIndex:0 } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        className="st3d-hide"
        string="3d progress" string-3d="box"
        style={{ position:'absolute', right:'8%', bottom:'15%', width:140, height:140, ['--material-color' as string]:'#a78bfa', ['--rotate-x' as string]:'calc(var(--progress,0)*360deg)', opacity:0.4, zIndex:0 } as React.CSSProperties}
        aria-hidden="true"
      />

      <div className="section-inner" style={{ width:'100%', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'minmax(300px, 1fr) minmax(400px, 1.2fr)', gap:'4rem', alignItems:'center' }}>
          
          <div className="contact-info reveal-left" string="progress">
            <div className="section-label">Contact us</div>
            <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:800, lineHeight:1.1, letterSpacing:'-0.04em', marginBottom:'1.5rem' }}>
              Let's <em style={{ fontStyle:'italic', fontWeight:300, color:'var(--accent2)' }}>build</em>
            </h1>
            <p style={{ fontSize:'1.05rem', color:'var(--offwhite)', lineHeight:1.75, marginBottom:'2.5rem', fontWeight:300 }}>
              Whether you need a full redesign, custom development, or ongoing IT support, our team is ready to deliver. Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
              <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(124,107,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize:'0.75rem', fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Email</div>
                  <a href="mailto:hello@tabancatech.com" style={{ fontSize:'1.05rem', fontWeight:500 }} string="magnetic">hello@tabancatech.com</a>
                </div>
              </div>
              <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(124,107,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize:'0.75rem', fontWeight:600, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Phone</div>
                  <div style={{ fontSize:'1.05rem', fontWeight:500 }}>+1 (473) 555-0199</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right" string="progress">
            <form onSubmit={handleSubmit} style={{ position:'relative' }}>
              {status === 'success' ? (
                <div style={{ textAlign:'center', padding:'3rem 1rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem' }}>
                  <div style={{ width:80, height:80, background:'var(--accent)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--white)' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h3 style={{ fontFamily:'var(--font-head)', fontSize:'1.5rem', marginBottom:'0.5rem' }}>Message Sent!</h3>
                    <p style={{ color:'var(--offwhite)' }}>We'll be in touch shortly.</p>
                  </div>
                  <button type="button" onClick={() => setStatus('idle')} className="btn-secondary" string="magnetic">Send another</button>
                </div>
              ) : (
                <div style={{ opacity: status === 'submitting' ? 0.5 : 1, transition: 'opacity 0.3s' }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" required placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service">
                      <option>Web Design & Development</option>
                      <option>Branding & Identity</option>
                      <option>Managed IT Support</option>
                      <option>Other / Custom Project</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea id="message" required placeholder="Tell us about your goals, timeline, and budget..."></textarea>
                  </div>
                  <button type="submit" className="form-submit" string="magnetic" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
