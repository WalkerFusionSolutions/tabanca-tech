import AdminLayout from './AdminLayout';
import { useLocalStorageData } from '../../hooks/useLocalStorageData';

export default function Admin() {
  const { data: services } = useLocalStorageData('services', '/data/default-services.json', []);
  const { data: projects } = useLocalStorageData('projects', '/data/default-projects.json', []);
  const { data: testimonials } = useLocalStorageData('testimonials', '/data/default-testimonials.json', []);

  return (
    <AdminLayout>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <h1 style={{ fontFamily:'var(--font-head)', fontSize:'2rem', marginBottom:'0.5rem' }}>Dashboard Overview</h1>
        <p style={{ color:'var(--muted)', marginBottom:'2rem' }}>Welcome back. Here is the current state of your site content.</p>

        <div className="admin-grid">
          <div className="admin-card">
            <div style={{ fontSize:'0.8rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.5rem' }}>Active Services</div>
            <div style={{ fontSize:'2.5rem', fontFamily:'var(--font-head)', fontWeight:700, color:'var(--white)' }}>{services.length}</div>
          </div>
          <div className="admin-card">
            <div style={{ fontSize:'0.8rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.5rem' }}>Portfolio Projects</div>
            <div style={{ fontSize:'2.5rem', fontFamily:'var(--font-head)', fontWeight:700, color:'var(--white)' }}>{projects.length}</div>
          </div>
          <div className="admin-card">
            <div style={{ fontSize:'0.8rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'0.5rem' }}>Testimonials</div>
            <div style={{ fontSize:'2.5rem', fontFamily:'var(--font-head)', fontWeight:700, color:'var(--white)' }}>{testimonials.length}</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
