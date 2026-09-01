import React from "react";
import { marqueeItems } from "@/lib/content";

// One slow editorial marquee. Gold+cream dividers, mixed serif/mono.
export default function Marquee() {
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <section
            aria-hidden="true"
            data-testid="editorial-marquee"
            className="relative border-y border-white/10 bg-uf-navy2 py-6 md:py-8 overflow-hidden"
        >
            <div className="flex whitespace-nowrap uf-marquee-track">
                {items.map((it, i) => (
                    <span
                        key={i}
                        className="flex items-center shrink-0 pr-10 md:pr-16"
                    >
                        <span
                            className={`font-display italic text-3xl md:text-5xl ${
                                i % 3 === 1 ? "text-uf-gold" : "text-uf-cream"
                            }`}
                        >
                            {it}
                        </span>
                        <span className="ml-10 md:ml-16 w-2 h-2 rounded-full bg-uf-teal/70" />
                    </span>
                ))}
            </div>
        </section>
    );
}
