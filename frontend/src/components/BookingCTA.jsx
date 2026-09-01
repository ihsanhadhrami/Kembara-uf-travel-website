import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BookingCTA() {
    return (
        <section
            id="contact"
            data-testid="booking-cta"
            className="relative overflow-hidden bg-uf-navy py-24 md:py-36"
        >
            {/* Background photo — Kaaba at night, spotlight framed */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?crop=entropy&cs=srgb&fm=jpg&q=90&w=2200"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-uf-navy/95 via-uf-navy/85 to-uf-navy" />
                <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_40%,rgba(245,158,11,0.16),transparent_70%)]" />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <span className="font-arabic text-2xl text-uf-gold">
                        ٱدْعُونِي
                    </span>
                    <span className="h-px w-10 bg-uf-gold/50" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream/60">
                        Buka slot 2026
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.05 }}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-uf-cream"
                >
                    Satu chat.
                    <span className="block italic text-uf-gold">
                        Satu kembara.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="mt-8 max-w-xl mx-auto text-uf-cream/75 leading-relaxed"
                >
                    Hantar WhatsApp — kami balas dalam bahasa yang anda selesa.
                    Tiada bot. Tiada borang. Cuma satu team di Johor menunggu
                    soalan anda.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.15 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <WhatsAppButton
                        serviceId="umrah-vip"
                        label="Buka WhatsApp — Umrah VIP"
                        tone="gold"
                        size="lg"
                        surface="booking-cta-primary"
                        testid="cta-final-primary"
                    />
                    <WhatsAppButton
                        serviceId="general"
                        label="Tanya perkhidmatan lain"
                        tone="ghost"
                        size="lg"
                        surface="booking-cta-secondary"
                        testid="cta-final-secondary"
                    />
                </motion.div>

                <div className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-uf-cream/50">
                    +60 18-257 3204 · wasap.my/+60182573204
                </div>
            </div>
        </section>
    );
}
