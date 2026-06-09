import AILogo from './AILogo';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand">
          <AILogo size={36} />
          <span className="navbar-name">Shehab Albelazi</span>
        </a>
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}
