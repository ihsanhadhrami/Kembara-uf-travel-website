import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRecentClicks, clearRecentClicks } from "@/lib/analytics";

// Small demo-only pill in the bottom-left corner. Shows how many
// WhatsApp clicks have fired this session and the last package tapped.
// In production this can be removed by not mounting <ClickPulse /> in App.
export default function ClickPulse() {
    const [clicks, setClicks] = useState(() => getRecentClicks());
    const [open, setOpen] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);

    useEffect(() => {
        const refresh = () => {
            setClicks(getRecentClicks());
            setPulseKey((k) => k + 1);
        };
        const clear = () => setClicks([]);
        window.addEventListener("uf:whatsapp_click", refresh);
        window.addEventListener("uf:whatsapp_click_cleared", clear);
        return () => {
            window.removeEventListener("uf:whatsapp_click", refresh);
            window.removeEventListener("uf:whatsapp_click_cleared", clear);
        };
    }, []);

    const count = clicks.length;
    const latest = clicks[0];

    return (
        <div
            data-testid="click-pulse"
            className="fixed bottom-4 left-4 z-40 select-none pointer-events-auto"
        >
            <div className="flex items-end gap-2">
                <button
                    onClick={() => setOpen((v) => !v)}
                    data-testid="click-pulse-toggle"
                    className="group relative flex items-center gap-2 rounded-full border border-white/15 bg-uf-navy2/85 backdrop-blur-md pl-2.5 pr-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-uf-cream/85 hover:border-uf-gold hover:text-uf-gold transition-colors shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
                    aria-expanded={open}
                    aria-label="Analytics pulse"
                >
                    <span className="relative flex w-2 h-2">
                        <AnimatePresence>
                            {count > 0 && (
                                <motion.span
                                    key={pulseKey}
                                    initial={{ scale: 1, opacity: 0.9 }}
                                    animate={{ scale: 2.6, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="absolute inset-0 rounded-full bg-uf-teal"
                                />
                            )}
                        </AnimatePresence>
                        <span
                            className={`relative inline-flex w-2 h-2 rounded-full ${
                                count > 0 ? "bg-uf-teal" : "bg-uf-cream/40"
                            }`}
                        />
                    </span>
                    <span>WA clicks</span>
                    <span
                        data-testid="click-pulse-count"
                        className="ml-1 font-display normal-case text-base tracking-normal text-uf-cream group-hover:text-uf-gold"
                    >
                        {count}
                    </span>
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        data-testid="click-pulse-panel"
                        className="absolute bottom-12 left-0 w-[340px] max-w-[calc(100vw-2rem)] rounded-xl border border-white/10 bg-uf-navy/95 backdrop-blur-xl p-4 shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-uf-teal">
                                Live event log — demo
                            </div>
                            <button
                                onClick={() => {
                                    clearRecentClicks();
                                    setClicks([]);
                                }}
                                data-testid="click-pulse-clear"
                                className="text-[10px] font-mono uppercase tracking-[0.22em] text-uf-cream/50 hover:text-uf-ember transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                        <p className="text-[11px] text-uf-cream/60 leading-relaxed mb-3">
                            Every WhatsApp CTA fires <code className="text-uf-gold">whatsapp_click</code>{" "}
                            via gtag, GTM & Meta Pixel — this panel mirrors it locally.
                        </p>
                        {count === 0 ? (
                            <div className="rounded-md border border-dashed border-white/10 p-4 text-center text-uf-cream/50 text-xs">
                                Tap any WhatsApp button to log an event.
                            </div>
                        ) : (
                            <ul className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                                {clicks.slice(0, 8).map((c, i) => (
                                    <li
                                        key={c.ts + i}
                                        className="rounded-md bg-uf-navy2/70 border border-white/5 px-2.5 py-2 text-[11px] flex items-center justify-between gap-2"
                                    >
                                        <div className="min-w-0">
                                            <div className="font-mono text-uf-gold truncate">
                                                {c.service_id}
                                            </div>
                                            <div className="text-uf-cream/50 truncate">
                                                {c.surface}
                                            </div>
                                        </div>
                                        <div className="text-uf-cream/40 font-mono text-[9px] shrink-0">
                                            {new Date(c.ts).toLocaleTimeString(
                                                "en-GB",
                                                { hour12: false },
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {latest && (
                            <div className="mt-3 pt-3 border-t border-white/10 text-[10px] font-mono uppercase tracking-[0.22em] text-uf-cream/40">
                                Last: {latest.service_id}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
