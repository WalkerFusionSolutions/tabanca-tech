import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? { borderColor: 'var(--accent)', color: 'var(--white)' } : {};

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar" style={{ display:'flex', flexDirection:'column' }}>
        <Link to="/" style={{ display:'block', marginBottom:'2.5rem', fontFamily:'var(--font-head)', fontWeight:800, color:'var(--white)' }}>
          TABANCA<span style={{color:'var(--accent)'}}>TECH</span>
          <div style={{ fontSize:'0.7rem', color:'var(--muted)', marginTop:'0.2rem', fontWeight:400, letterSpacing:'0.05em', textTransform:'uppercase' }}>Admin Panel</div>
        </Link>
        
        <nav style={{ display:'flex', flexDirection:'column', flex:1 }}>
          <Link to="/admin" className="admin-link" style={isActive('/admin')}>Dashboard</Link>
          <Link to="/admin/services" className="admin-link" style={isActive('/admin/services')}>Manage Services</Link>
          <Link to="/admin/projects" className="admin-link" style={isActive('/admin/projects')}>Manage Projects</Link>
          <Link to="/admin/testimonials" className="admin-link" style={isActive('/admin/testimonials')}>Manage Testimonials</Link>
          
          <div style={{ marginTop:'auto' }}>
            <Link to="/" className="admin-link" style={{ marginBottom:'0.5rem', textAlign:'center' }}>View Site</Link>
            <Link to="/admin/login" className="admin-link" style={{ borderColor:'rgba(255,107,107,0.3)', color:'#ff6b6b', textAlign:'center', marginBottom:0 }}>Logout</Link>
          </div>
        </nav>
      </aside>
      <main className="admin-main" style={{ overflowY:'auto', maxHeight:'100vh' }}>
        {children}
      </main>
    </div>
  );
}
