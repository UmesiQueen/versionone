import Link from "next/link";
import { WhatsApp } from "../icons";
import { Button } from "./button";

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 group">
      <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp!
      </span>
      <Button
        size="icon-lg"
        className="bg-green-600 shadow-sm shadow-green-500/50 transition-colors duration-300 ease-in-out hover:shadow-lg hover:bg-green-500/80! p-6 rounded-full border-none"
        asChild
      >
        <Link
          href="https://wa.me/2348170000169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp className="size-5" />
        </Link>
      </Button>
    </div>
  );
}

export { FloatingWhatsApp };
