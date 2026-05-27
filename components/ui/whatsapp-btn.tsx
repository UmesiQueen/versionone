"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WhatsApp } from "../icons";
import { Button } from "./button";

const TOOLTIP_DELAY_MS = 60_000; // 1 minute
const TOOLTIP_DURATION_MS = 15_000; // 15 seconds
const WHATS_APP_URL =
  "https://wa.me/2348170000169?text=Hello%20VersionOne!%20I%27d%20like%20to%20enquire%20about%20your%20visa%20and%20immigration%20services.%20Please%20help%20me%20get%20started.";

function FloatingWhatsApp() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let hideTimer: number | null = null;

    const showTimer = window.setInterval(() => {
      setIsTooltipVisible(true);

      hideTimer = window.setTimeout(() => {
        setIsTooltipVisible(false);
      }, TOOLTIP_DURATION_MS);
    }, TOOLTIP_DELAY_MS);

    return () => {
      window.clearTimeout(showTimer);
      if (hideTimer !== null) window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <span
        role="status"
        aria-live="polite"
        aria-hidden={!isTooltipVisible}
        className={cn(
          "absolute top-1/2 right-full mr-3 -translate-y-1/2 bg-white text-foreground text-sm py-2 text-center rounded-full border border-secondary/20 shadow-lg whitespace-nowrap transition-all duration-500 ease-in-out pointer-events-none overflow-hidden",
          isTooltipVisible ? "opacity-100 w-52" : "opacity-0 w-0",
        )}
      >
        Need help? Chat with us. <span className="animate-wave">👋</span>
      </span>
      <Button
        size="icon-lg"
        className="bg-green-600 shadow-sm shadow-green-500/50 transition-colors duration-300 ease-in-out hover:shadow-lg hover:bg-green-500/80! p-6 rounded-full border-none"
        onClick={() => window.open(WHATS_APP_URL, "_blank")}
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsApp className="size-5" />
      </Button>
    </div>
  );
}

export { FloatingWhatsApp };
