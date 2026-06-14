import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              Infrastructure & Automation Engineer
            </div>
            <h1 className="hero-title">
              I build systems that{' '}
              <span className="highlight">run themselves</span>
            </h1>
            <p className="hero-subtitle">
              From self-provisioning servers to AI-driven workflows —
              I automate the repetitive so you can focus on what matters.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#work" className="btn btn-secondary">
                See My Work
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shapes">
              <div className="shape shape-1" />
              <div className="shape shape-2" />
              <div className="shape shape-3" />
              <div className="shape shape-4" />
              <div className="shape-dot shape-dot-1" />
              <div className="shape-dot shape-dot-2" />
              <div className="shape-dot shape-dot-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
