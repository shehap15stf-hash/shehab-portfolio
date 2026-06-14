import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('.metric-number');
      counters.forEach((el) => {
        const target = parseInt(el.dataset.target ?? '0', 10);
        const suffix = el.dataset.suffix ?? '';
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(el, {
              innerText: target,
              duration: 2,
              ease: 'power2.out',
              snap: { innerText: 1 },
              modifiers: {
                innerText: (v) => Math.round(Number(v)).toString() + suffix,
              },
            });
          },
          once: true,
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="metrics" ref={ref}>
      <div className="container">
        <div className="metrics-grid">
          <div>
            <div className="metric-number" data-target="10" data-suffix="+">
              0
            </div>
            <div className="metric-label">Services Managed</div>
          </div>
          <div>
            <div className="metric-number" data-target="92" data-suffix="%">
              0
            </div>
            <div className="metric-label">Faster Provisioning</div>
          </div>
          <div>
            <div className="metric-number" data-target="40" data-suffix="+">
              0
            </div>
            <div className="metric-label">Network Devices</div>
          </div>
          <div>
            <div className="metric-number" data-target="99" data-suffix=".9%">
              0
            </div>
            <div className="metric-label">Uptime Achieved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
