import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";

const links = [
    { id: "manifesto", label: "Manifesto" },
    { id: "services", label: "Perkhidmatan" },
    { id: "destinations", label: "Destinasi" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#08101D]/75 border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="flex items-center justify-between h-[72px]">
                    <a
                        href="#top"
                        data-testid="nav-logo"
                        className="flex items-center gap-3 group"
                    >
                        <Logo size={38} />
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="font-display text-[19px] tracking-wide text-uf-cream">
                                Kembara UF
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-teal/80">
                                Est. Johor · JM1005380-H
                            </span>
                        </div>
                    </a>

                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((l, i) => (
                            <a
                                key={l.id}
                                href={`#${l.id}`}
                                data-testid={`nav-link-${l.id}`}
                                className="relative px-4 py-2 text-sm text-uf-cream/80 hover:text-uf-cream transition-colors"
                            >
                                <span className="font-mono text-[10px] text-uf-gold/70 mr-1.5">
                                    0{i + 1}
                                </span>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <WhatsAppButton
                            serviceId="booking"
                            label="Book Umrah"
                            tone="primary"
                            size="sm"
                            surface="nav"
                            testid="nav-cta-whatsapp"
                            className="hidden sm:inline-flex"
                        />
                        <button
                            data-testid="nav-menu-toggle"
                            aria-label="Menu"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden relative w-10 h-10 rounded-full border border-white/15 grid place-items-center text-uf-cream hover:border-uf-gold transition-colors"
                        >
                            <span
                                className={`absolute w-4 h-px bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
                            />
                            <span
                                className={`absolute w-4 h-px bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-[#08101D]/95"
                    >
                        <div className="px-5 py-6 flex flex-col gap-1">
                            {links.map((l, i) => (
                                <a
                                    key={l.id}
                                    href={`#${l.id}`}
                                    onClick={() => setOpen(false)}
                                    data-testid={`nav-mobile-link-${l.id}`}
                                    className="flex items-baseline gap-3 py-3 border-b border-white/5 font-display text-2xl text-uf-cream"
                                >
                                    <span className="font-mono text-[10px] text-uf-gold/70">
                                        0{i + 1}
                                    </span>
                                    {l.label}
                                </a>
                            ))}
                            <div className="pt-4">
                                <WhatsAppButton
                                    serviceId="booking"
                                    label="Buka WhatsApp"
                                    tone="primary"
                                    size="md"
                                    surface="nav-mobile"
                                    testid="nav-mobile-cta"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
