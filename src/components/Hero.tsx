import { ArrowRight, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Bot size={14} />
              <span>Infrastructure & Automation Engineer</span>
            </div>
            <h1 className="hero-title">
              I turn repetitive operations into{' '}
              <span className="text-accent">automated systems</span>{' '}
              that run themselves.
            </h1>
            <p className="hero-subtitle">
              Whatever business you're building, I can help you streamline,
              automate, and scale it.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Book a Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary">
                See What I Do
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="cube cube-1" />
              <div className="cube cube-2" />
              <div className="cube cube-3" />
              <div className="float-bot">
                <Bot size={48} color="#00BFA5" strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
