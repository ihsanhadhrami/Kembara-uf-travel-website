// Deep module: fire a single trackWhatsAppClick() event.
// Fans out to whatever analytics is loaded on the page (GA4, GTM, Meta Pixel),
// dispatches a CustomEvent for anything else, and keeps a rolling
// localStorage log so the client can literally see clicks in the demo.

const STORE_KEY = "uf:wa_clicks";
const MAX_LOG = 50;

function safe(fn) {
    try {
        fn();
    } catch (_) {
        /* never let analytics break a click */
    }
}

function pushLocal(entry) {
    if (typeof window === "undefined" || !window.localStorage) return;
    safe(() => {
        const raw = window.localStorage.getItem(STORE_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        arr.unshift(entry);
        window.localStorage.setItem(
            STORE_KEY,
            JSON.stringify(arr.slice(0, MAX_LOG)),
        );
        window.dispatchEvent(new CustomEvent("uf:whatsapp_click", { detail: entry }));
    });
}

/**
 * Fire a WhatsApp-click event for a given service tile.
 * Silently no-ops when analytics libs are absent.
 */
export function trackWhatsAppClick({
    serviceId,
    context = "",
    label = "",
    surface = "unknown", // where the click happened: hero, nav, service-card-umrah-vip...
    href = "",
} = {}) {
    const entry = {
        event: "whatsapp_click",
        service_id: serviceId,
        surface,
        label,
        context,
        href,
        ts: new Date().toISOString(),
    };

    if (typeof window === "undefined") return entry;

    // Google Analytics 4 (gtag.js)
    safe(() => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "whatsapp_click", {
                service_id: serviceId,
                surface,
                label,
            });
        }
    });

    // Google Tag Manager dataLayer
    safe(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "whatsapp_click",
            service_id: serviceId,
            surface,
            label,
        });
    });

    // Meta Pixel (fbq)
    safe(() => {
        if (typeof window.fbq === "function") {
            window.fbq("trackCustom", "WhatsAppClick", {
                service_id: serviceId,
                surface,
                content_name: label,
            });
            // also fire the standard Lead event — this IS a warm lead
            window.fbq("track", "Lead", {
                content_name: label || serviceId,
                content_category: "whatsapp_click",
            });
        }
    });

    // Local rolling log + custom DOM event for anything else to hook
    pushLocal(entry);

    // Debug-friendly console signal in dev
    if (
        typeof process !== "undefined" &&
        process.env &&
        process.env.NODE_ENV !== "production"
    ) {
        // eslint-disable-next-line no-console
        console.info("[uf] whatsapp_click →", entry);
    }

    return entry;
}

export function getRecentClicks() {
    if (typeof window === "undefined" || !window.localStorage) return [];
    try {
        return JSON.parse(window.localStorage.getItem(STORE_KEY) || "[]");
    } catch {
        return [];
    }
}

export function clearRecentClicks() {
    if (typeof window === "undefined" || !window.localStorage) return;
    window.localStorage.removeItem(STORE_KEY);
    window.dispatchEvent(new CustomEvent("uf:whatsapp_click_cleared"));
}
