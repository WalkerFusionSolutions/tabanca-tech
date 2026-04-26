import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy authentication
    navigate('/admin');
  };

  return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem', background:'var(--bg)' }}>
      <div style={{ width:'min(460px, 100%)' }}>
        <div style={{ textAlign:'center', marginBottom:'2rem' }}>
          <div style={{ fontFamily:'var(--font-head)', fontWeight:800, fontSize:'1.5rem', marginBottom:'0.5rem' }}>
            TABANCA<span style={{ color:'var(--accent)' }}>TECH</span>
          </div>
          <p style={{ color:'var(--muted)' }}>Sign in to Admin Dashboard</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue="admin@tabancatech.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" defaultValue="password" required />
          </div>
          <button type="submit" className="form-submit" style={{ cursor:'pointer' }}>Sign In</button>
        </form>

        <div style={{ textAlign:'center', marginTop:'2rem' }}>
          <a href="/" style={{ color:'var(--muted)', fontSize:'0.85rem' }}>← Back to public site</a>
        </div>
      </div>
    </div>
  );
}
