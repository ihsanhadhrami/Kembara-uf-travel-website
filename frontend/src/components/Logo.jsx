import React from "react";

// The signature visual mark — used ONCE prominently (Nav + Footer + Hero halo).
// A calligraphic "UF" monogram with a wave/bird motif, on a soft circular seal.
export default function Logo({ className = "", size = 40 }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 64 64"
            role="img"
            aria-label="Kembara UF"
        >
            <defs>
                <radialGradient id="ufDisc" cx="30%" cy="28%" r="80%">
                    <stop offset="0%" stopColor="#F5EFE6" stopOpacity="1" />
                    <stop offset="60%" stopColor="#F5EFE6" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#F5EFE6" stopOpacity="0.85" />
                </radialGradient>
                <linearGradient id="ufInk" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0D9488" />
                    <stop offset="100%" stopColor="#08101D" />
                </linearGradient>
            </defs>
            <circle
                cx="32"
                cy="32"
                r="30"
                fill="url(#ufDisc)"
                stroke="rgba(20,184,166,0.35)"
                strokeWidth="1"
            />
            {/* UF monogram */}
            <path
                d="M18 20 V36 A8 8 0 0 0 34 36 V20"
                fill="none"
                stroke="url(#ufInk)"
                strokeWidth="3.2"
                strokeLinecap="round"
            />
            <path
                d="M38 20 V44 M38 20 H50 M38 30 H48"
                fill="none"
                stroke="url(#ufInk)"
                strokeWidth="3.2"
                strokeLinecap="round"
            />
            {/* wave / bird motif */}
            <path
                d="M12 48 Q 22 42 32 48 T 52 48"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M28 46 l3 -2 l3 2"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}
