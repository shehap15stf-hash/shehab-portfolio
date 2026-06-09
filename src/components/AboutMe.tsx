import { MapPin, Globe, Award } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">About Me</div>
            <h2>Infrastructure & Automation Engineer</h2>
            <p>
              I'm Shehab Albelazi — an Infrastructure and Automation Engineer based in Tripoli, Libya. 
              I specialize in building systems that don't need babysitting: networks that self-heal, 
              servers that provision themselves, and workflows that connect everything together.
            </p>
            <p>
              With deep experience across the full stack — from Cisco routing and FortiGate firewalls
              to Terraform, Ansible, Docker, and AI agents — I bridge the gap between traditional
              networking and modern infrastructure automation.
            </p>
            <p>
              I believe that good infrastructure is invisible. When it's done right, you don't notice it —
              your systems just work, your team focuses on what matters, and your business grows.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <Award size={20} />
                <div>
                  <strong>CCNP Enterprise</strong>
                  <span>Cisco Certified</span>
                </div>
              </div>
              <div className="about-stat">
                <Globe size={20} />
                <div>
                  <strong>Global Remote</strong>
                  <span>Serving clients worldwide</span>
                </div>
              </div>
              <div className="about-stat">
                <MapPin size={20} />
                <div>
                  <strong>Tripoli, Libya</strong>
                  <span>Available for remote work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-code-block">
              <pre>{`// shehab.albelazi.ly
{
  name: "Shehab Albelazi",
  title: "Infrastructure & Automation Engineer",
  location: "Tripoli, Libya",
  core: ["Networking", "Automation", "AI"],
  stack: {
    iaC: ["Terraform", "Ansible"],
    containers: ["Docker", "Proxmox"],
    monitoring: ["Prometheus", "Grafana", "Zabbix"],
    networking: ["Cisco", "FortiGate", "MikroTik"],
    ai: ["n8n", "Gemini", "Hermes Agent"],
  },
  motto: "Automate everything."
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
