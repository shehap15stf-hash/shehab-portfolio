import {
  Bot,
  Workflow,
  Server,
  Eye,
  Network,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Autonomous Agents',
    desc: 'Intelligent assistants that engage your customers 24/7 — answering questions, handling requests, and automating conversations at scale.',
    projects: [
      'Hermes Agent Platform — Build, deploy, and maintain autonomous AI agents that work independently. I set it up, configure it, and keep it running for your business.',
      'Messenger RAG Chatbot — Powered by Gemini AI + Vector Search, this bot understands your business knowledge and responds with context-aware accuracy.',
      'AI Social Media Bot — Automated, context-aware replies across Facebook and Messenger using AI + knowledge bases.',
    ],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Connect your tools, automate repetitive tasks, and build end-to-end pipelines — from data processing to content generation.',
    projects: [
      'CV Formatter — Upload a resume, AI rewrites it professionally, generates a polished PDF automatically.',
      'Course Image Generator — Enter course details, AI creates stunning promotional images ready to publish.',
      'Facebook Ads Analysis — Scheduled reports connecting Meta Ads data directly to Notion dashboards.',
      'Website Integration — Route form submissions, bookings, and inquiries to the right channels automatically.',
      'Knowledge Base Uploader — Populate AI vector stores with your content for smarter chatbot responses.',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    desc: 'Provision, scale, and manage infrastructure with code — eliminating manual work and human error.',
    projects: [
      'Reduced server provisioning from 2 days → 4 hours (92% faster) using Terraform + Ansible.',
      'Self-Service Cloud Provisioning — A form-based system that fully provisions LXC containers via n8n + Terraform + Proxmox, zero manual intervention.',
    ],
  },
  {
    icon: Eye,
    title: 'Monitoring & Observability',
    desc: 'Know everything about your infrastructure in real-time with smart alerts that catch issues before they become problems.',
    projects: [
      'Full-stack monitoring with Prometheus + Grafana + Zabbix — reduced incident detection time by 40%.',
      'Container-level observability with cAdvisor + Node Exporter, tracking every service in one dashboard.',
    ],
  },
  {
    icon: Network,
    title: 'Network Automation',
    desc: 'Intelligent networks that self-optimize — SD-WAN, firewalls, routers, and wireless managed with automation-first approach.',
    projects: [
      'Achieved 99.9% uptime with FortiGate SD-WAN + dual-ISP load balancing and SLA-based routing.',
      'Centralized management of 40+ network devices using NetBox for IPAM, topology, and documentation.',
      'Managed 30+ access points across large campus using Cisco WLC with optimized RF coverage.',
    ],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-label">What I Do</div>
        <h2>Services</h2>
        <p className="section-desc">
          Real solutions built on real experience — every service here is something
          I've built, deployed, and operated in production.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <s.icon size={24} />
                </div>
                <h3 className="service-title">{s.title}</h3>
              </div>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-projects">
                {s.projects.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
