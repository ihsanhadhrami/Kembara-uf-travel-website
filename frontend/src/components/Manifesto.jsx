import React from "react";
import { motion } from "framer-motion";
import { manifesto, brand } from "@/lib/content";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: i * 0.06, ease: [0.19, 1, 0.22, 1] },
    }),
};

export default function Manifesto() {
    return (
        <section
            id="manifesto"
            data-testid="manifesto-section"
            className="relative bg-uf-navy py-24 md:py-36"
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-6 md:gap-10">
                    <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 self-start">
                        <div className="flex items-center gap-3 text-uf-teal">
                            <span className="w-8 h-px bg-uf-teal" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                                Manifesto · Bab 01 – 04
                            </span>
                        </div>
                        <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-uf-cream">
                            Empat perkara <br />
                            <span className="italic text-uf-gold">
                                tak berubah
                            </span>{" "}
                            <br />
                            dalam setiap kembara.
                        </h2>
                        <p className="mt-8 max-w-sm text-uf-cream/70 leading-relaxed">
                            {brand.arabicMottoRoman}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-8 relative">
                        {/* vertical guide */}
                        <div className="absolute left-[42px] md:left-[54px] top-2 bottom-2 w-px bg-gradient-to-b from-uf-gold/50 via-uf-teal/30 to-transparent hidden md:block" />
                        <ol className="space-y-14 md:space-y-20">
                            {manifesto.map((c, i) => (
                                <motion.li
                                    key={c.num}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeUp}
                                    custom={i}
                                    className="relative pl-16 md:pl-32"
                                    data-testid={`manifesto-chapter-${c.num}`}
                                >
                                    <div className="absolute left-0 top-0 flex items-baseline gap-2">
                                        <span className="font-display text-[72px] md:text-[104px] leading-none text-uf-navy2 [-webkit-text-stroke:1px_rgba(245,158,11,0.55)]">
                                            {c.num}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-2xl md:text-4xl text-uf-cream leading-tight">
                                        {c.title}
                                    </h3>
                                    <p className="mt-2 font-display italic text-uf-gold/90 text-lg md:text-xl">
                                        {c.titleMs}
                                    </p>
                                    <p className="mt-5 text-uf-cream/75 leading-relaxed max-w-xl">
                                        {c.body}
                                    </p>
                                </motion.li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
