import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { useLocalStorageData } from '../../hooks/useLocalStorageData';
import type { Service } from '../../types';

export default function ManageServices() {
  const { data, add, remove } = useLocalStorageData<Service>('services', '/data/default-services.json', []);
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    add({
      tag: fd.get('tag') as string,
      title: fd.get('title') as string,
      description: fd.get('description') as string,
      image: fd.get('image') as string,
      featured: fd.get('featured') === 'on'
    });
    e.currentTarget.reset();
    setShowAdd(false);
  };

  return (
    <AdminLayout>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem' }}>
          <div>
            <h1 style={{ fontFamily:'var(--font-head)', fontSize:'2rem' }}>Manage Services</h1>
            <p style={{ color:'var(--muted)' }}>Add, edit, or remove services offered.</p>
          </div>
          <button className="btn-secondary" onClick={() => setShowAdd(!showAdd)}>
            {showAdd ? 'Cancel' : '+ Add Service'}
          </button>
        </div>

        {showAdd && (
          <form onSubmit={handleAdd} style={{ marginBottom:'2rem' }}>
            <div className="form-row">
              <div className="form-group"><label>Tag (e.g. Web Design)</label><input name="tag" required /></div>
              <div className="form-group"><label>Title</label><input name="title" required /></div>
            </div>
            <div className="form-group"><label>Description</label><textarea name="description" required rows={3}></textarea></div>
            <div className="form-group"><label>Image URL</label><input name="image" required /></div>
            <div className="form-group" style={{ flexDirection:'row', alignItems:'center', gap:'0.5rem' }}>
              <input type="checkbox" name="featured" id="feat" style={{ width:'auto' }} />
              <label htmlFor="feat" style={{ margin:0 }}>Featured (shows tag on image)</label>
            </div>
            <button type="submit" className="form-submit">Save Service</button>
          </form>
        )}

        <div className="admin-list">
          {data.map(item => (
            <div key={item.id} className="admin-item">
              <div>
                <div style={{ fontWeight:700, marginBottom:'0.25rem' }}>{item.title} <span style={{ color:'var(--accent)', fontSize:'0.8em', marginLeft:'0.5rem' }}>{item.tag}</span></div>
                <div style={{ fontSize:'0.85rem', color:'var(--muted)' }}>{item.description.substring(0, 80)}...</div>
              </div>
              <div className="admin-actions">
                <button className="btn-secondary btn-small" onClick={() => remove(item.id)}>Delete</button>
              </div>
            </div>
          ))}
          {data.length === 0 && <div style={{ color:'var(--muted)', textAlign:'center', padding:'2rem' }}>No services found.</div>}
        </div>
      </div>
    </AdminLayout>
  );
}
