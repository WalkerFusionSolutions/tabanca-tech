import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { useLocalStorageData } from '../../hooks/useLocalStorageData';
import type { Testimonial } from '../../types';

export default function ManageTestimonials() {
  const { data, add, remove } = useLocalStorageData<Testimonial>('testimonials', '/data/default-testimonials.json', []);
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    add({
      name: fd.get('name') as string,
      role: fd.get('role') as string,
      quote: fd.get('quote') as string
    });
    e.currentTarget.reset();
    setShowAdd(false);
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem' }}>
          <div>
            <h1 style={{ fontFamily:'var(--font-head)', fontSize:'2rem' }}>Manage Testimonials</h1>
            <p style={{ color:'var(--muted)' }}>Add, edit, or remove client testimonials.</p>
          </div>
          <button className="btn-secondary" onClick={() => setShowAdd(!showAdd)}>
            {showAdd ? 'Cancel' : '+ Add Testimonial'}
          </button>
        </div>

        {showAdd && (
          <form onSubmit={handleAdd} style={{ marginBottom:'2rem' }}>
            <div className="form-row">
              <div className="form-group"><label>Client Name</label><input name="name" required /></div>
              <div className="form-group"><label>Role / Company</label><input name="role" required /></div>
            </div>
            <div className="form-group"><label>Quote</label><textarea name="quote" required rows={4}></textarea></div>
            <button type="submit" className="form-submit">Save Testimonial</button>
          </form>
        )}

        <div className="admin-list">
          {data.map(item => (
            <div key={item.id} className="admin-item">
              <div>
                <div style={{ fontWeight:700, marginBottom:'0.25rem' }}>{item.name} <span style={{ color:'var(--accent)', fontSize:'0.8em', marginLeft:'0.5rem' }}>{item.role}</span></div>
                <div style={{ fontSize:'0.85rem', color:'var(--offwhite)', fontStyle:'italic' }}>"{item.quote}"</div>
              </div>
              <div className="admin-actions">
                <button className="btn-secondary btn-small" onClick={() => remove(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          {data.length === 0 && <div style={{ color:'var(--muted)', textAlign:'center', padding:'2rem' }}>No testimonials found.</div>}
        </div>
      </div>
    </AdminLayout>
  );
}
