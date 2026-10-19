"use client";

import { useEffect, useState } from "react";
import { SITE_WHATSAPP_URL } from "@/lib/site";

/**
 * WhatsAppFloat — stylish, animated floating WhatsApp button (bottom-right).
 *
 * - Official WhatsApp green with the official glyph.
 * - Ping ripple rings + gentle idle bob + hover wiggle animations.
 * - "Chat with us" tooltip slides in on hover (desktop) / shows once after
 *   a short delay on mobile.
 * - Clicking opens WhatsApp with a pre-filled "Hi" message via wa.me.
 */
export function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    // Entrance pop
    const pop = setTimeout(() => setMounted(true), 600);
    // Gentle nudge label appears once, then fades (works on mobile too)
    const nudge = setTimeout(() => setShowNudge(true), 2600);
    const hide = setTimeout(() => setShowNudge(false), 9000);
    return () => {
      clearTimeout(pop);
      clearTimeout(nudge);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div
      className={`fixed right-[18px] bottom-[76px] z-[70] flex items-center gap-2.5 no-print ${
        mounted ? "wa-pop-in" : "opacity-0"
      }`}
    >
      {/* Nudge label */}
      <span
        aria-hidden="true"
        className={`hidden sm:inline-flex items-center whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#071D3A] shadow-lg ring-1 ring-slate-200/80 transition-all duration-500 ${
          showNudge
            ? "opacity-100 translate-x-0"
            : "pointer-events-none opacity-0 translate-x-3"
        }`}
      >
        💬 Chat with us on WhatsApp
      </span>

      <a
        href={SITE_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative block h-14 w-14 sm:h-16 sm:w-16 outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 rounded-full"
      >
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/50 wa-ring" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 wa-ring wa-ring-delay" />

        {/* Main button */}
        <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#4ADE80] via-[#25D366] to-[#128C7E] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] transition-all duration-300 group-hover:scale-110 group-active:scale-95 wa-bob group-hover:wa-wiggle">
          {/* Official WhatsApp glyph */}
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 sm:h-8 sm:w-8 fill-white drop-shadow-sm"
            aria-hidden="true"
          >
            <path d="M16.004 2.667C8.64 2.667 2.672 8.634 2.672 16c0 2.352.615 4.65 1.784 6.677L2.667 29.333l6.812-1.754a13.28 13.28 0 0 0 6.525 1.687h.006c7.363 0 13.331-5.967 13.331-13.333 0-3.565-1.388-6.915-3.909-9.432a13.255 13.255 0 0 0-9.428-3.834Zm0 24.399h-.005a11.06 11.06 0 0 1-5.637-1.542l-.404-.24-4.042 1.04 1.078-3.94-.263-.405a11.032 11.032 0 0 1-1.697-5.979c0-6.123 4.983-11.104 11.109-11.104 2.967 0 5.753 1.157 7.848 3.256a11.03 11.03 0 0 1 3.251 7.855c-.002 6.124-4.984 11.104-11.238 11.104Zm6.095-8.314c-.334-.167-1.977-.975-2.283-1.087-.306-.111-.528-.167-.75.167-.223.334-.861 1.087-1.056 1.31-.194.223-.389.25-.722.084-.334-.167-1.41-.52-2.684-1.657-.992-.885-1.661-1.977-1.856-2.311-.194-.334-.02-.514.146-.68.15-.15.334-.39.5-.584.168-.195.223-.334.334-.556.111-.223.055-.417-.028-.584-.083-.166-.75-1.808-1.028-2.476-.27-.652-.546-.564-.75-.574l-.64-.011c-.222 0-.583.083-.889.417-.305.333-1.166 1.14-1.166 2.78 0 1.641 1.194 3.227 1.36 3.45.167.222 2.35 3.588 5.695 5.03.796.344 1.417.548 1.902.702.8.254 1.527.218 2.101.132.641-.096 1.976-.807 2.255-1.587.278-.78.278-1.449.195-1.588-.083-.14-.305-.223-.639-.39Z" />
          </svg>

          {/* Sheen sweep on hover */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-y-0 -left-1.5 w-0 skew-x-12 bg-white/30 blur-sm transition-all duration-500 group-hover:left-[110%]" />
          </span>
        </span>
      </a>
    </div>
  );
}
