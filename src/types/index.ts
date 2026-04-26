// ─── Domain Interfaces ──────────────────────────────────────────────────────

export interface Service {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface Project {
  id: number;
  domain: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  pills: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

// ─── Admin Auth ──────────────────────────────────────────────────────────────

export interface AdminState {
  isAuthenticated: boolean;
}
