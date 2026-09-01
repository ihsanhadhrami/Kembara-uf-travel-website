// Single source of truth for copy, imagery, and structured data.
// Later, this file is the seam where a CMS/JSON feed can plug in.

export const brand = {
    name: "Kembara UF",
    legalName: "UF Travel",
    ssm: "SSM JM1005380-H",
    baseCity: "Johor, Malaysia",
    est: "Est. Johor",
    taglineMs: "Jom Umrah Private/VIP bersama Kami",
    taglineEn: "Bespoke pilgrimages & curated kembara.",
    bio:
        "Jom Umrah Private/VIP bersama Kami. Outbound, Inbound. " +
        "Supplier Zam-Zam Ori Mekah & Kurma Ajwa Madinah. Dm Us For Booking.",
    arabicMotto: "بِسْمِ ٱللَّٰهِ",
    arabicMottoRoman: "Bismillah — every journey begins with a niat.",
};

export const social = {
    instagramHandle: "@uf.travel",
    tiktokHandle: "@uf.travel",
    instagramFollowers: 200,
    tiktokFollowers: 280,
    tiktokLikes: 21500,
    topVideoViews: 108400,
    topVideoTitle: "Quba' Cafe — Madinah",
};

// 5 real services. Umrah VIP is the flagship — visually dominant.
export const services = [
    {
        id: "umrah-vip",
        idx: "01",
        flagship: true,
        titleMs: "Umrah Private & VIP",
        titleEn: "Private / VIP Pilgrimage",
        blurb:
            "Pakej Umrah eksklusif dengan bilik hotel dekat Haram, mutawwif berpengalaman & jadual peribadi. Untuk keluarga, korporat & rombongan kecil.",
        english:
            "Private tawaf schedules, hotels within a short walk of the Haram, and a mutawwif who moves at your family's pace.",
        highlights: [
            "Hotel 5★ dekat Masjidil Haram & Nabawi",
            "Mutawwif peribadi (Bahasa Melayu)",
            "Ziarah Makkah + Madinah lengkap",
            "Rombongan kecil · maksimum 15 jemaah",
        ],
        image:
            "https://images.unsplash.com/photo-1720549973451-018d3623b55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
        secondary:
            "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        badge: "Perkhidmatan Utama",
    },
    {
        id: "outbound",
        idx: "02",
        titleMs: "Outbound",
        titleEn: "Outbound Tours",
        blurb:
            "Bromo sunrise jeep, Jogja gondola, Malang, Safari Park & Mesir. Rentak santai, rasa cukup.",
        image:
            "https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        badge: "Kembara Nusantara",
    },
    {
        id: "inbound",
        idx: "03",
        titleMs: "Inbound",
        titleEn: "Malaysia Inbound",
        blurb:
            "4 wilayah dijelajah — air terjun tersembunyi, motosikal santai, laut jernih.",
        image:
            "https://images.unsplash.com/photo-1548430065-53c58a6582dd?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        badge: "Domestik",
    },
    {
        id: "zamzam",
        idx: "04",
        titleMs: "Air Zam-Zam Ori",
        titleEn: "Zam-Zam Supply · Ori Mekah",
        blurb:
            "Dibawa terus dari Mekah. Segel rasmi, sijil pengesahan, penghantaran ke rumah.",
        image:
            "https://images.unsplash.com/photo-1519817650390-64a93db51149?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        badge: "Supplier",
    },
    {
        id: "ajwa",
        idx: "05",
        titleMs: "Kurma Ajwa Madinah",
        titleEn: "Ajwa Dates · Madinah",
        blurb:
            "Kurma Nabi ﷺ. Gred premium, bekalan kekal dari petani terpilih di Madinah.",
        image:
            "https://images.unsplash.com/photo-1610450949065-1f2841536c88?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        badge: "Supplier",
    },
];

// 4 destination regions
export const destinations = [
    {
        id: "sa",
        idx: "I",
        region: "Saudi Arabia",
        cities: "Makkah · Madinah",
        blurbMs:
            "Tawaf di Baitullah, dua rakaat di Raudhah. Perjalanan spiritual yang diurus dengan sabar & khusyuk.",
        tag: "Umrah",
        image:
            "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        latin: "الحرمين",
    },
    {
        id: "id",
        idx: "II",
        region: "Indonesia",
        cities: "Bromo · Jogja · Malang · Jakarta · Safari Park",
        blurbMs:
            "Matahari terbit atas gunung berapi dengan jip 4x4, gondola merentas kampung, air terjun sepi. Rasa penuh, kos rendah.",
        tag: "Adventure",
        image:
            "https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        latin: "Nusantara",
    },
    {
        id: "eg",
        idx: "III",
        region: "Egypt",
        cities: "Cairo · Giza · Nile",
        blurbMs:
            "Piramid Giza, Sungai Nil, muzium purba. Destinasi baharu — buka pendaftaran awal untuk 2026.",
        tag: "Segera Dibuka",
        image:
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        latin: "مصر",
    },
    {
        id: "my",
        idx: "IV",
        region: "Malaysia",
        cities: "4 Wilayah Domestik",
        blurbMs:
            "Kembara motor santai di Perlis, air terjun di Terengganu, laut pulau di Johor, hutan Belum di Perak.",
        tag: "Inbound",
        image:
            "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        latin: "Tanah Air",
    },
];

// Numbered manifesto chapters (01–04)
export const manifesto = [
    {
        num: "01",
        title: "Every kembara begins with niat.",
        titleMs: "Setiap kembara bermula dengan niat.",
        body:
            "We're a small Johor team. Umrah is our flagship — we treat it as amanah, not inventory. Every rombongan we take is one we can look in the eye afterwards.",
    },
    {
        num: "02",
        title: "Small groups. Real access.",
        titleMs: "Rombongan kecil. Akses sebenar.",
        body:
            "Maksimum 15 jemaah untuk pakej Umrah VIP. Anda dapat mutawwif yang kenal keluarga anda, bukan senarai nombor. Untuk outbound — pemandu yang jalan sama kami sudah bertahun.",
    },
    {
        num: "03",
        title: "The same team from Mekah to Bromo.",
        titleMs: "Pasukan yang sama, dari Mekah ke Bromo.",
        body:
            "Kami tak subkon perjalanan anda. Sama team yang uruskan Umrah anda tolong pilih hotel di Malang, cari kedai kurma di Madinah, dan hantar Zam-Zam ke pintu rumah.",
    },
    {
        num: "04",
        title: "Everything happens on WhatsApp.",
        titleMs: "Segalanya di WhatsApp.",
        body:
            "Tiada borang panjang. Tiada portal login. Cakap dengan kami macam cakap dengan kawan — soalan, gambar hotel, jadual, harga — semuanya bergerak dalam satu chat.",
    },
];

// Editorial marquee ribbon
export const marqueeItems = [
    "Umrah Private / VIP",
    "Bromo Sunrise Jeep",
    "Jogja Gondola",
    "Kurma Ajwa Madinah",
    "Air Zam-Zam Ori",
    "Safari Park Malang",
    "Piramid Giza · 2026",
    "4 Wilayah Domestik",
    "Est. Johor · JM1005380-H",
];

// Social proof — captured moments (labelled placeholders / real content themes)
export const gallery = [
    {
        id: "g1",
        label: "Umrah · Masjid Nabawi",
        sub: "Golden hour dhikr",
        image:
            "https://images.unsplash.com/photo-1720549973451-018d3623b55a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        aspect: "aspect-[3/4]",
    },
    {
        id: "g2",
        label: "Bromo · Sunrise Jeep",
        sub: "108.4K views · TikTok",
        image:
            "https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=800",
        aspect: "aspect-[3/4]",
    },
    {
        id: "g3",
        label: "Quba' Cafe · Madinah",
        sub: "Top pinned reel",
        image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        aspect: "aspect-[3/4]",
    },
    {
        id: "g4",
        label: "Jogja · Gondola",
        sub: "Kampung waterway",
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        aspect: "aspect-[3/4]",
    },
    {
        id: "g5",
        label: "Malang · Waterfall",
        sub: "Sequence · 12 jemaah",
        image:
            "https://images.unsplash.com/photo-1533632359083-0185df1be85d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        aspect: "aspect-[3/4]",
    },
    {
        id: "g6",
        label: "Safari Park · Malang",
        sub: "Zebra crossing, literal",
        image:
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
        aspect: "aspect-[3/4]",
    },
];

export const stats = [
    { k: "5★", label: "Hotel dekat Haram" },
    { k: "≤ 15", label: "Jemaah setiap rombongan" },
    { k: "24/7", label: "WhatsApp response" },
    { k: "2019", label: "SSM berdaftar" },
];
