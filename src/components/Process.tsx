import { Search, Cog, Activity, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Understand',
    desc: 'I analyze your current infrastructure, workflows, and pain points to identify what needs fixing and what can be automated.',
  },
  {
    icon: Cog,
    title: 'Automate',
    desc: 'I build the automation layer — Terraform scripts, n8n workflows, AI agents, or network configs — tailored to your environment.',
  },
  {
    icon: Activity,
    title: 'Monitor',
    desc: 'I set up observability and alerting so you always know what\'s happening. Problems get caught before they impact your business.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    desc: 'The system runs itself. I hand over documentation and training, and stay on standby for upgrades, optimizations, and expansion.',
  },
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-label">How I Work</div>
        <h2 className="section-title">From problem to production</h2>
        <p className="section-desc">
          A proven process that turns operational chaos into a well-oiled machine.
        </p>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className="process-step reveal">
              <div className="process-step-icon">
                <s.icon size={24} />
              </div>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
