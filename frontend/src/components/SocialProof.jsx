import React from "react";
import { motion } from "framer-motion";
import { gallery, social } from "@/lib/content";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/whatsapp";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: i * 0.07, ease: [0.19, 1, 0.22, 1] },
    }),
};

export default function SocialProof() {
    return (
        <section
            id="gallery"
            data-testid="social-proof"
            className="relative bg-uf-navy py-24 md:py-32"
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
                    <div className="col-span-12 md:col-span-6">
                        <div className="flex items-center gap-3 text-uf-teal">
                            <span className="w-8 h-px bg-uf-teal" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                                Field Notes · @uf.travel
                            </span>
                        </div>
                        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-uf-cream">
                            Kecil.{" "}
                            <span className="italic text-uf-gold">Betul.</span>{" "}
                            Semakin membesar.
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:pt-6 space-y-4">
                        <p className="text-uf-cream/75 leading-relaxed">
                            Kami tak jual angka. Akaun ini baru — tapi setiap
                            rakaman datang dari trip yang benar-benar kami buat.
                            Bromo betul. Nabawi betul. Kurma yang dipetik dari
                            tangan yang sama.
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {[
                                ["200", "IG followers"],
                                ["280", "TikTok followers"],
                                ["21.5K", "TikTok likes"],
                                ["108.4K", "Top reel views"],
                            ].map(([k, l]) => (
                                <div key={l}>
                                    <div className="font-display text-2xl md:text-3xl text-uf-cream">
                                        {k}
                                    </div>
                                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-uf-cream/50">
                                        {l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gallery grid — vertical, styled like TikTok tiles */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {gallery.map((g, i) => (
                        <motion.a
                            key={g.id}
                            href={TIKTOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`gallery-tile-${g.id}`}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={rise}
                            custom={i}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${g.aspect}`}
                        >
                            <img
                                src={g.image}
                                alt={g.label}
                                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[1400ms] group-hover:scale-[1.08] group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-uf-navy/90 via-uf-navy/30 to-transparent" />

                            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-uf-navy/80 backdrop-blur grid place-items-center opacity-90 group-hover:bg-uf-gold group-hover:text-uf-navy transition-colors">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                    <path d="M3 2v8l7-4z" />
                                </svg>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-3">
                                <div className="font-display text-base md:text-lg leading-tight text-uf-cream">
                                    {g.label}
                                </div>
                                <div className="mt-0.5 text-[9px] font-mono uppercase tracking-[0.22em] text-uf-gold/80">
                                    {g.sub}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* light-touch follow row */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10">
                    <div className="text-sm text-uf-cream/60">
                        Cerita penuh (dan reel Quba' Cafe) di{" "}
                        <span className="text-uf-cream">
                            {social.instagramHandle}
                        </span>
                        .
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="social-link-instagram"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-sm text-uf-cream/85 hover:border-uf-gold hover:text-uf-gold transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href={TIKTOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="social-link-tiktok"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-sm text-uf-cream/85 hover:border-uf-gold hover:text-uf-gold transition-colors"
                        >
                            TikTok
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
