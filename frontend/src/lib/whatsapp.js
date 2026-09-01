// Deep module: everything WhatsApp-related lives here.
// Callers only ever need getBookingLink(serviceId, context?).

const WA_NUMBER = "+60182573204";
const WA_BASE = "https://wasap.my/";

// Malay-first templates parallel to the real link text
// "SayaNakTengokPakejUmrah" — friendly, short, no spaces.
const TEMPLATES = {
    "umrah-vip": "SayaNakTengokPakejUmrahPrivateVIP",
    umrah: "SayaNakTengokPakejUmrah",
    outbound: "SayaBerminatKembaraOutboundBromoJogja",
    inbound: "SayaNakPakejInboundMalaysia",
    zamzam: "SayaNakTempahAirZamZamOriMekah",
    ajwa: "SayaNakTempahKurmaAjwaMadinah",
    egypt: "SayaBerminatKembaraMesir",
    general: "SayaNakTanyaTentangKembaraUF",
    booking: "SayaNakBukingKembaraUF",
    "social-follow": "SayaFollowDariInstagramKembaraUF",
};

function slugify(input = "") {
    return input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .trim()
        .split(/\s+/)
        .map((w, i) =>
            i === 0
                ? w.charAt(0).toUpperCase() + w.slice(1)
                : w.charAt(0).toUpperCase() + w.slice(1),
        )
        .join("")
        .slice(0, 80);
}

/**
 * Return the full WhatsApp booking link with pre-filled message.
 * @param {string} serviceId — key in TEMPLATES or arbitrary string
 * @param {string} [context] — extra free-form Malay/English phrase appended
 */
export function getBookingLink(serviceId = "general", context = "") {
    const key = String(serviceId).toLowerCase().trim();
    const base = TEMPLATES[key] || slugify(serviceId) || TEMPLATES.general;
    const extra = context ? slugify(context) : "";
    const message = extra ? `${base}${extra}` : base;
    return `${WA_BASE}${WA_NUMBER}/${message}`;
}

export const WHATSAPP_DISPLAY = "+60 18-257 3204";
export const INSTAGRAM_URL = "https://instagram.com/uf.travel";
export const TIKTOK_URL = "https://www.tiktok.com/@uf.travel";

export default getBookingLink;
