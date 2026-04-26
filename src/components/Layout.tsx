import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          TABANCA<span>TECH</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
          {[
            ['/','Home'],
            ['/about','About'],
            ['/services','Services'],
            ['/portfolio','Portfolio'],
            ['/testimonials','Clients'],
            ['/contact','Contact'],
          ].map(([path, label]) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
          <Link to="/contact" className="nav-cta">Kick off</Link>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            id="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">TABANCA<span>TECH</span></div>
        <div className="footer-copy">© 2025 Tabanca Tech. All rights reserved.</div>
        <div className="footer-links">
          {[
            ['/about','About'],
            ['/services','Work'],
            ['/testimonials','Clients'],
            ['/contact','Contact'],
            ['/admin','Admin'],
          ].map(([path, label]) => (
            <Link key={path} to={path}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
