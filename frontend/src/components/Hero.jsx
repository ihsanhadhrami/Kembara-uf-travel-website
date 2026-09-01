import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { brand } from "@/lib/content";
import WhatsAppButton from "@/components/WhatsAppButton";

// Line-by-line masked reveal — the signature on-load moment.
const line = {
    hidden: { y: "110%", opacity: 0.4 },
    show: (i) => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 1.05,
            delay: 0.15 + i * 0.12,
            ease: [0.19, 1, 0.22, 1],
        },
    }),
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
    const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);

    // 3D tilt on the floating spotlight image
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
        stiffness: 120,
        damping: 12,
    });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
        stiffness: 120,
        damping: 12,
    });

    const onMouseMove = (e) => {
        const b = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - b.left) / b.width - 0.5);
        my.set((e.clientY - b.top) / b.height - 0.5);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-[100svh] w-full overflow-hidden bg-uf-navy grain"
        >
            {/* Backdrop imagery, parallaxed */}
            <motion.div
                style={{ y: heroY, scale: heroScale }}
                className="absolute inset-0 -z-10"
            >
                <img
                    src="https://images.unsplash.com/photo-1720549973451-018d3623b55a?crop=entropy&cs=srgb&fm=jpg&q=90&w=2200"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center opacity-45"
                />
            </motion.div>
            <motion.div
                style={{ opacity: overlay }}
                className="absolute inset-0 -z-10 bg-gradient-to-b from-uf-navy via-uf-navy/70 to-uf-navy"
            />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_75%_20%,rgba(20,184,166,0.18),transparent_60%),radial-gradient(60%_45%_at_15%_85%,rgba(245,158,11,0.14),transparent_60%)]" />

            {/* Top strip */}
            <div className="relative pt-[88px] md:pt-[104px]">
                <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.28em] text-uf-cream/60">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-uf-teal animate-pulse" />
                            Live · Slot Umrah Mac – Mei 2026
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="hidden md:block"
                        >
                            N 1° 27′ · E 103° 45′ — Johor Bahru
                        </motion.span>
                    </div>
                </div>
            </div>

            {/* Main hero grid */}
            <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-24 md:pb-28">
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
                    {/* Copy column */}
                    <div className="col-span-12 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="font-arabic text-2xl text-uf-gold">
                                {brand.arabicMotto}
                            </span>
                            <span className="h-px w-10 bg-uf-gold/50" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream/60">
                                Kembara UF · Since 2019
                            </span>
                        </motion.div>

                        <h1 className="font-display text-[54px] leading-[0.95] sm:text-[76px] md:text-[104px] lg:text-[132px] tracking-[-0.02em] text-uf-cream">
                            <span className="reveal-line">
                                <motion.span
                                    custom={0}
                                    initial="hidden"
                                    animate="show"
                                    variants={line}
                                >
                                    Jom Umrah
                                </motion.span>
                            </span>
                            <span className="reveal-line">
                                <motion.span
                                    custom={1}
                                    initial="hidden"
                                    animate="show"
                                    variants={line}
                                    className="italic text-uf-gold"
                                >
                                    Private / VIP
                                </motion.span>
                            </span>
                            <span className="reveal-line">
                                <motion.span
                                    custom={2}
                                    initial="hidden"
                                    animate="show"
                                    variants={line}
                                >
                                    bersama Kami.
                                </motion.span>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 1 }}
                            className="mt-8 max-w-xl text-uf-cream/75 text-base md:text-lg leading-relaxed"
                        >
                            A small Johor team taking rombongan kecil to the
                            <em className="text-uf-cream not-italic"> Haramain</em>,
                            up Bromo at 04:00, and home again with kurma Ajwa
                            in hand. Umrah, outbound, inbound — all on
                            WhatsApp.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.05, duration: 0.9 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <WhatsAppButton
                                serviceId="umrah-vip"
                                label="Tengok Pakej Umrah"
                                tone="primary"
                                size="lg"
                                testid="hero-cta-primary"
                            />
                            <a
                                href="#services"
                                data-testid="hero-cta-secondary"
                                className="group inline-flex items-center gap-3 text-uf-cream/80 hover:text-uf-cream text-sm px-2 py-3"
                            >
                                <span className="w-9 h-9 rounded-full border border-white/25 grid place-items-center group-hover:border-uf-gold transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M6 1v10m0 0l4-4m-4 4L2 7"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                Scroll — apa yang kami buat
                            </a>
                        </motion.div>
                    </div>

                    {/* Floating spotlight image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onLeave}
                        className="col-span-12 lg:col-span-4 relative"
                        style={{ perspective: 1200 }}
                    >
                        <motion.div
                            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
                            className="relative aspect-[3/4] rounded-[28px] overflow-hidden border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
                        >
                            <img
                                src="https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=940"
                                alt="Bromo sunrise — jeep tour"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

                            <div className="absolute top-4 left-4 flex items-center gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream bg-uf-navy/70 backdrop-blur px-2 py-1 rounded">
                                    Bromo · 04:32
                                </span>
                            </div>

                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="font-display text-2xl text-uf-cream">
                                    Sunrise, atas gunung berapi.
                                </div>
                                <div className="mt-1 text-[12px] font-mono uppercase tracking-[0.22em] text-uf-gold/80">
                                    108.4K views · @uf.travel
                                </div>
                            </div>
                        </motion.div>

                        {/* Signature wave motif */}
                        <svg
                            className="absolute -bottom-6 -left-6 w-40 opacity-70"
                            viewBox="0 0 160 40"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M0 20 Q 20 0 40 20 T 80 20 T 120 20 T 160 20"
                                stroke="#F59E0B"
                                strokeWidth="1.2"
                            />
                            <path
                                d="M0 30 Q 20 10 40 30 T 80 30 T 120 30 T 160 30"
                                stroke="#14B8A6"
                                strokeWidth="1"
                                strokeOpacity="0.7"
                            />
                        </svg>
                    </motion.div>
                </div>

                {/* Bottom facts row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 border-t border-white/10 pt-8"
                >
                    {[
                        ["≤ 15", "Jemaah / rombongan"],
                        ["5★", "Hotel dekat Haram"],
                        ["24/7", "WhatsApp response"],
                        ["100%", "SSM berdaftar"],
                    ].map(([k, l]) => (
                        <div key={l}>
                            <div className="font-display text-4xl md:text-5xl text-uf-cream">
                                {k}
                            </div>
                            <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.22em] text-uf-cream/50">
                                {l}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
