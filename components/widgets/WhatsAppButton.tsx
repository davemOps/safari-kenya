import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 sm:ring-4 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
    </a>
  );
}