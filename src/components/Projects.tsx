import { Server, Bot, Globe, Zap, Cloud, Wifi } from 'lucide-react';

const projects = [
  {
    icon: Server,
    title: 'Self-Service Cloud Provisioning',
    desc: 'A web form that lets anyone request a Linux container — n8n triggers Terraform and Ansible to fully provision it on Proxmox automatically. From request to ready, with zero manual intervention.',
    metrics: ['Zero-touch deployment', 'Full automation pipeline', 'Web → n8n → Terraform → Proxmox'],
  },
  {
    icon: Bot,
    title: 'AI Customer Service Bot',
    desc: 'A RAG-powered chatbot using Gemini AI + Supabase Vector Store that answers customer questions with context-aware accuracy. Integrates with Facebook Messenger and can be adapted for any platform.',
    metrics: ['24/7 availability', 'Context-aware responses', 'Custom knowledge base'],
  },
  {
    icon: Globe,
    title: 'Production VPS Hosting Platform',
    desc: 'A full self-hosted platform running 10+ services including n8n, PostgreSQL, AI tools, and production websites — all behind Traefik reverse proxy with Cloudflare DNS, SSL, and real-time monitoring.',
    metrics: ['10+ managed services', '99.9% uptime', 'Prometheus + Grafana monitoring'],
  },
  {
    icon: Zap,
    title: 'Infrastructure Provisioning Pipeline',
    desc: 'Cut server setup from days to hours with Terraform + Ansible. Standardized configurations across VMs, containers, and bare metal — repeatable, version-controlled, and fully automated.',
    metrics: ['92% faster provisioning', 'Version-controlled IaC', 'Standardized deployments'],
  },
  {
    icon: Cloud,
    title: 'Network Automation with NetBox',
    desc: 'Centralized management of 40+ network devices — IPAM, topology mapping, and documentation in one platform. Eliminated configuration drift and cut troubleshooting time significantly.',
    metrics: ['40+ devices managed', 'Eliminated config drift', 'Single source of truth'],
  },
  {
    icon: Wifi,
    title: 'SD-WAN & Wireless Infrastructure',
    desc: 'Dual-ISP SD-WAN with FortiGate, SLA-based routing, and 30+ wireless access points managed via Cisco WLC. Optimized RF coverage and automated failover for uninterrupted connectivity.',
    metrics: ['99.9% uptime', 'Automated failover', '30+ APs managed'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Real Work</div>
        <h2>Projects I've Built</h2>
        <p className="section-desc">
          Every project here was built, deployed, and operated in production —
          not just a lab experiment.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-icon">
                <p.icon size={24} />
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-metrics">
                {p.metrics.map((m, j) => (
                  <span key={j} className="metric-tag">{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
