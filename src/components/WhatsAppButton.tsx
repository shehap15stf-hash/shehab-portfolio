import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/218910080678"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Message me on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
