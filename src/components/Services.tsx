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
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Connect your tools, automate repetitive tasks, and build end-to-end pipelines — from data processing to content generation.',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    desc: 'Provision, scale, and manage infrastructure with code — eliminating manual work and human error across servers and containers.',
  },
  {
    icon: Eye,
    title: 'Monitoring & Observability',
    desc: 'Know everything about your infrastructure in real-time with smart alerts that catch issues before they become problems.',
  },
  {
    icon: Network,
    title: 'Network Automation',
    desc: 'Intelligent networks that self-optimize — SD-WAN, firewalls, routers, and wireless managed with an automation-first approach.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">Services</h2>
        <p className="section-desc">
          Real solutions built on real experience — every service here is something
          I've built, deployed, and operated in production.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card reveal">
              <div className="service-icon">
                <s.icon size={22} />
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
