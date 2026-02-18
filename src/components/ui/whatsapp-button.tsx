import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  href: string;
  ariaLabel: string;
};

export function WhatsAppButton({ href, ariaLabel }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-lime-500 hover:bg-lime-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl z-50"
      aria-label={ariaLabel}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
