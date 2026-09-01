import React from "react";
import { getBookingLink } from "@/lib/whatsapp";

// Deep module: one WhatsApp button. Callers pass serviceId + label.
// Owns focus ring, magnetic hover, and glow border internally.
export default function WhatsAppButton({
    serviceId = "general",
    context = "",
    label = "WhatsApp Kami",
    tone = "primary", // primary | ghost | gold
    size = "md",
    className = "",
    testid,
    icon = true,
}) {
    const href = getBookingLink(serviceId, context);

    const base =
        "group relative inline-flex items-center gap-2.5 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform";
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-[15px]",
        lg: "px-8 py-4 text-base",
    };
    const tones = {
        primary:
            "bg-uf-teal text-uf-navy hover:bg-white hover:text-uf-navy shadow-[0_10px_40px_-10px_rgba(20,184,166,0.6)] hover:shadow-[0_20px_60px_-10px_rgba(245,239,230,0.5)]",
        gold:
            "bg-uf-gold text-uf-navy hover:bg-white shadow-[0_10px_40px_-10px_rgba(245,158,11,0.6)]",
        ghost:
            "bg-transparent text-uf-cream border border-white/20 hover:border-uf-gold hover:text-uf-gold",
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={testid || `wa-cta-${serviceId}`}
            className={`${base} ${sizes[size]} ${tones[tone]} ${className}`}
        >
            {icon && (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="opacity-90 transition-transform duration-500 group-hover:rotate-[8deg]"
                >
                    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4C7.6 4 4 7.6 4 12.05a8 8 0 0 0 1.08 4.02L4 20l4.04-1.06a8 8 0 0 0 3.98 1.02h.03c4.44 0 8.05-3.6 8.05-8.05a8 8 0 0 0-2.5-5.6zM12.05 18.6h-.02a6.65 6.65 0 0 1-3.38-.93l-.24-.14-2.4.63.64-2.34-.16-.24a6.63 6.63 0 0 1-1.02-3.53c0-3.68 3-6.67 6.68-6.67a6.65 6.65 0 0 1 6.66 6.68c0 3.68-3 6.66-6.68 6.66zm3.66-5c-.2-.1-1.18-.58-1.36-.65-.18-.07-.32-.1-.45.1s-.52.65-.63.78-.24.15-.44.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.38c-.11-.2 0-.31.09-.4l.3-.35c.1-.13.13-.22.2-.36.06-.15.03-.28-.02-.38l-.62-1.5c-.16-.4-.33-.34-.45-.35H9.28c-.13 0-.35.05-.53.24s-.7.69-.7 1.68.72 1.94.82 2.08c.1.13 1.4 2.15 3.4 3 .48.2.85.32 1.14.42.48.15.92.13 1.26.08.38-.06 1.18-.48 1.34-.94.16-.47.16-.87.12-.95-.04-.08-.18-.13-.38-.23z" />
                </svg>
            )}
            <span>{label}</span>
            {tone !== "ghost" && (
                <svg
                    className="transition-transform duration-500 group-hover:translate-x-0.5"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M2 7h9m0 0L7 3m4 4l-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </a>
    );
}
