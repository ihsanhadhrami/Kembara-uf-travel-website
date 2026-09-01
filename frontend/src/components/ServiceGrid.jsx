import React from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { getBookingLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import WhatsAppButton from "@/components/WhatsAppButton";

const rise = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] },
    }),
};

function FlagshipCard({ s }) {
    return (
        <motion.article
            data-testid={`service-card-${s.id}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={rise}
            custom={0}
            className="group relative col-span-12 lg:col-span-7 lg:row-span-2 overflow-hidden rounded-[28px] border border-white/10 bg-uf-navy2"
        >
            <div className="relative h-full min-h-[560px] lg:min-h-[720px]">
                <img
                    src={s.image}
                    alt={s.titleEn}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uf-navy via-uf-navy/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-uf-navy/70 via-transparent to-transparent" />

                {/* clipped frame accent */}
                <div className="absolute top-5 right-5 flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-navy bg-uf-gold px-2.5 py-1 rounded-sm">
                        {s.badge}
                    </span>
                </div>

                <div className="relative h-full p-6 md:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-gold">
                            {s.idx} · Flagship
                        </span>
                        <span className="h-px flex-1 bg-uf-gold/40" />
                        <span className="font-arabic text-xl text-uf-gold">
                            العمرة
                        </span>
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] text-uf-cream max-w-xl">
                        {s.titleMs}
                        <span className="block italic text-uf-gold/90 text-2xl md:text-3xl mt-2">
                            {s.titleEn}
                        </span>
                    </h3>
                    <p className="mt-5 max-w-xl text-uf-cream/80 leading-relaxed">
                        {s.blurb}
                    </p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 max-w-xl">
                        {s.highlights.map((h) => (
                            <li
                                key={h}
                                className="flex items-start gap-2 text-sm text-uf-cream/75"
                            >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-uf-teal shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <WhatsAppButton
                            serviceId={s.id}
                            label="Semak Pakej VIP"
                            tone="gold"
                            surface={`service-card-${s.id}-primary`}
                            testid={`service-cta-${s.id}`}
                        />
                        <WhatsAppButton
                            serviceId="umrah"
                            label="Pakej Standard"
                            tone="ghost"
                            surface="service-card-umrah-standard"
                            testid="service-cta-umrah-standard"
                            icon={false}
                        />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

function SmallCard({ s, index, tall = false }) {
    return (
        <motion.article
            data-testid={`service-card-${s.id}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={rise}
            custom={index}
            className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-uf-navy2 ${
                tall ? "min-h-[360px]" : "min-h-[300px]"
            }`}
        >
            <img
                src={s.image}
                alt={s.titleEn}
                className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-[1400ms] group-hover:scale-[1.06] group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-uf-navy via-uf-navy/70 to-transparent" />

            <div className="relative h-full p-6 md:p-7 flex flex-col justify-end">
                <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-teal">
                        {s.idx} · {s.badge}
                    </span>
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-uf-cream leading-tight">
                    {s.titleMs}
                </h3>
                <p className="mt-1 italic text-uf-gold/80 text-sm">
                    {s.titleEn}
                </p>
                <p className="mt-3 text-sm text-uf-cream/70 leading-relaxed max-w-md">
                    {s.blurb}
                </p>
                <div className="mt-5">
                    <a
                        href={getBookingLink(s.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                            trackWhatsAppClick({
                                serviceId: s.id,
                                label: s.titleEn,
                                surface: `service-card-${s.id}`,
                                href: getBookingLink(s.id),
                            })
                        }
                        data-testid={`service-cta-${s.id}`}
                        className="inline-flex items-center gap-2 text-sm text-uf-cream/85 hover:text-uf-gold transition-colors"
                    >
                        Tanya di WhatsApp
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M2 6h8m0 0L6 2m4 4l-4 4"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default function ServiceGrid() {
    const [flagship, ...rest] = services;
    return (
        <section
            id="services"
            data-testid="service-grid"
            className="relative bg-uf-navy py-24 md:py-32"
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <div className="flex items-center gap-3 text-uf-teal">
                            <span className="w-8 h-px bg-uf-teal" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                                Perkhidmatan · Services
                            </span>
                        </div>
                        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-uf-cream max-w-2xl leading-[1.05]">
                            Lima perkhidmatan.{" "}
                            <span className="italic text-uf-gold">
                                Satu amanah.
                            </span>
                        </h2>
                    </div>
                    <p className="text-uf-cream/70 max-w-sm">
                        Umrah adalah teras. Semua yang lain — outbound, inbound,
                        Zam-Zam, kurma — tumbuh sekitarnya.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    <FlagshipCard s={flagship} />
                    <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {rest.map((s, i) => (
                            <SmallCard key={s.id} s={s} index={i + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
