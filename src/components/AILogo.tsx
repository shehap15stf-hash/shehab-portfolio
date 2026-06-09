import { Bot } from 'lucide-react';

export default function AILogo({ size = 40 }: { size?: number }) {
  return (
    <div className="ai-logo" style={{ width: size, height: size }}>
      <Bot size={size * 0.7} color="#00BFA5" strokeWidth={1.5} />
      <div className="ai-logo-ring" />
    </div>
  );
}
