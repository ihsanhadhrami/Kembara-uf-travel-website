import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Deep module: mounts Lenis smooth-scroll once for the whole app,
// respects prefers-reduced-motion, and cleans up on unmount.
export default function SmoothScroll({ children }) {
    const rafRef = useRef();
    const lenisRef = useRef();

    useEffect(() => {
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
        });
        lenisRef.current = lenis;

        const raf = (time) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);

        // Intercept anchor clicks so Lenis handles them
        const onAnchor = (e) => {
            const a = e.target.closest("a[href^='#']");
            if (!a) return;
            const id = a.getAttribute("href");
            if (id && id.length > 1) {
                const el = document.querySelector(id);
                if (el) {
                    e.preventDefault();
                    lenis.scrollTo(el, { offset: -72, duration: 1.4 });
                }
            }
        };
        document.addEventListener("click", onAnchor);

        return () => {
            document.removeEventListener("click", onAnchor);
            cancelAnimationFrame(rafRef.current);
            lenis.destroy();
        };
    }, []);

    return children;
}
