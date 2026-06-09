import { MessageSquare, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="section-label">Let's Work Together</div>
          <h2>Automate your operations. Scale your business.</h2>
          <p className="contact-desc">
            Tell me what you're building — I'll tell you how I can help.
            Whether it's a chatbot, an automation pipeline, or a full infrastructure overhaul,
            let's make it happen.
          </p>
          <div className="contact-actions">
            <a
              href="https://wa.me/218910080678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare size={18} />
              Message me on WhatsApp <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:shehapalbelazi@gmail.com"
              className="btn-secondary"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
