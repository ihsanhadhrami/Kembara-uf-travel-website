import React from "react";
import Logo from "@/components/Logo";
import { WHATSAPP_DISPLAY, INSTAGRAM_URL, TIKTOK_URL, getBookingLink } from "@/lib/whatsapp";
import { brand } from "@/lib/content";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-uf-navy border-t border-white/10 pt-20 pb-10"
        >
            {/* wave divider */}
            <div className="absolute top-0 inset-x-0 h-10 wave-divider opacity-70 -mt-5" aria-hidden="true" />

            <div className="max-w-[1440px] mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-8 md:gap-10">
                    <div className="col-span-12 md:col-span-5">
                        <div className="flex items-center gap-3">
                            <Logo size={44} />
                            <div>
                                <div className="font-display text-2xl text-uf-cream">
                                    {brand.name}
                                </div>
                                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-teal/80">
                                    {brand.legalName} · {brand.est}
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 max-w-md text-uf-cream/70 leading-relaxed">
                            {brand.bio}
                        </p>
                        <p className="mt-6 font-arabic text-xl text-uf-gold/80">
                            {brand.arabicMotto}
                        </p>
                    </div>

                    <div className="col-span-6 md:col-span-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream/50 mb-4">
                            Perkhidmatan
                        </div>
                        <ul className="space-y-2 text-sm text-uf-cream/80">
                            {[
                                ["Umrah Private/VIP", "umrah-vip"],
                                ["Outbound Tours", "outbound"],
                                ["Inbound Malaysia", "inbound"],
                                ["Air Zam-Zam Ori", "zamzam"],
                                ["Kurma Ajwa Madinah", "ajwa"],
                            ].map(([label, id]) => (
                                <li key={id}>
                                    <a
                                        href={getBookingLink(id)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`footer-link-${id}`}
                                        className="hover:text-uf-gold transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-4">
                        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-uf-cream/50 mb-4">
                            Contact
                        </div>
                        <ul className="space-y-3 text-sm text-uf-cream/80">
                            <li>
                                <a
                                    href={getBookingLink("general")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-whatsapp"
                                    className="hover:text-uf-gold transition-colors block"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-uf-cream/50 block">
                                        WhatsApp
                                    </span>
                                    {WHATSAPP_DISPLAY}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-instagram"
                                    className="hover:text-uf-gold transition-colors block"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-uf-cream/50 block">
                                        Instagram
                                    </span>
                                    @uf.travel
                                </a>
                            </li>
                            <li>
                                <a
                                    href={TIKTOK_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid="footer-tiktok"
                                    className="hover:text-uf-gold transition-colors block"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-uf-cream/50 block">
                                        TikTok
                                    </span>
                                    @uf.travel
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-uf-cream/40">
                    <div>
                        © {new Date().getFullYear()} {brand.legalName} · {brand.ssm} · {brand.baseCity}
                    </div>
                    <div className="text-right md:text-left">
                        Demo preview site · Bukan laman rasmi
                    </div>
                </div>
            </div>
        </footer>
    );
}
