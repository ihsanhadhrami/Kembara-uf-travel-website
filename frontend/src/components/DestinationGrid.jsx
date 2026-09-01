import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { destinations } from "@/lib/content";

function DestinationCard({ d, i }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <motion.article
            ref={ref}
            data-testid={`destination-card-${d.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 aspect-[3/4] bg-uf-navy2">
                <motion.img
                    style={{ y }}
                    src={d.image}
                    alt={d.region}
                    className="absolute inset-0 w-full h-[115%] object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uf-navy via-uf-navy/50 to-transparent" />

                {/* clipped frame decoration */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream bg-uf-navy/70 backdrop-blur-md px-2 py-1 rounded">
                        {d.idx} · {d.tag}
                    </span>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="font-arabic text-2xl text-uf-gold/80">
                        {d.latin}
                    </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <h3 className="font-display text-3xl md:text-4xl text-uf-cream leading-tight">
                        {d.region}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-uf-gold/85">
                        {d.cities}
                    </p>
                </div>
            </div>
            <p className="mt-4 text-sm text-uf-cream/70 leading-relaxed max-w-sm">
                {d.blurbMs}
            </p>
        </motion.article>
    );
}

export default function DestinationGrid() {
    return (
        <section
            id="destinations"
            data-testid="destination-grid"
            className="relative bg-uf-navy2 py-24 md:py-32 border-y border-white/5"
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
                    <div className="col-span-12 md:col-span-7">
                        <div className="flex items-center gap-3 text-uf-teal">
                            <span className="w-8 h-px bg-uf-teal" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                                Destinasi · Empat Wilayah
                            </span>
                        </div>
                        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-uf-cream">
                            Dari Baitullah{" "}
                            <span className="italic text-uf-gold">
                                ke gunung berapi.
                            </span>
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-5 md:pt-8 text-uf-cream/70 max-w-md">
                        Bukan setiap ejen boleh urus Umrah dan Bromo dalam masa
                        yang sama — kami boleh sebab itu pasukan yang sama, dari
                        Johor.
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {destinations.map((d, i) => (
                        <DestinationCard key={d.id} d={d} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
