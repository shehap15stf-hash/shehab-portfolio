import { Server, Bot, Globe, Zap, Cloud, Wifi } from 'lucide-react';

const projects = [
  {
    icon: Server,
    title: 'Self-Service Cloud Provisioning',
    desc: 'A web form that lets anyone request a Linux container — n8n triggers Terraform and Ansible to fully provision it on Proxmox automatically. From request to ready, zero manual intervention.',
    tags: ['Zero-touch', 'Web → n8n → Terraform → Proxmox', 'Full pipeline'],
  },
  {
    icon: Bot,
    title: 'AI Customer Service Bot',
    desc: 'A RAG-powered chatbot using Gemini AI + Supabase Vector Store that answers customer questions with context-aware accuracy. Integrates with Facebook Messenger and any platform.',
    tags: ['24/7 availability', 'Context-aware', 'Custom knowledge base'],
  },
  {
    icon: Globe,
    title: 'Production VPS Hosting Platform',
    desc: 'A full self-hosted platform running 10+ services including n8n, PostgreSQL, AI tools, and production websites — all behind Traefik reverse proxy with Cloudflare DNS and SSL.',
    tags: ['10+ services', '99.9% uptime', 'Prometheus + Grafana'],
  },
  {
    icon: Zap,
    title: 'Infrastructure Provisioning Pipeline',
    desc: 'Cut server setup from days to hours with Terraform + Ansible. Standardized configurations across VMs, containers, and bare metal — repeatable and fully automated.',
    tags: ['92% faster', 'Version-controlled', 'Standardized IaC'],
  },
  {
    icon: Cloud,
    title: 'Network Automation with NetBox',
    desc: 'Centralized management of 40+ network devices — IPAM, topology mapping, and documentation in one platform. Eliminated config drift and cut troubleshooting time.',
    tags: ['40+ devices', 'Single source of truth', 'Config drift eliminated'],
  },
  {
    icon: Wifi,
    title: 'SD-WAN & Wireless Infrastructure',
    desc: 'Dual-ISP SD-WAN with FortiGate, SLA-based routing, and 30+ access points managed via Cisco WLC. Optimized RF coverage with automated failover for uninterrupted connectivity.',
    tags: ['99.9% uptime', 'Automated failover', '30+ APs managed'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-label">Real Work</div>
        <h2 className="section-title">Projects I've Built</h2>
        <p className="section-desc">
          Every project here was built, deployed, and operated in production —
          not just a lab experiment.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card reveal">
              <div className="project-icon">
                <p.icon size={22} />
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
