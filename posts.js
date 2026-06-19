// ============================================================
//  YOUR PHOTOGRAPHY BLOG — SITE CONFIGURATION
// ============================================================

const SITE_CONFIG = {
  title: "The Usual Subjects",
  tagline: "Photography",
  about: "Stories told through a lens.",
  instagram: ["the.usual.subjects", "angie.vish"],   // add one handle per icon, e.g. ["yourhandle", "yoursecondhandle"]
  twitter: "angievish",
  facebook: "",
  wordpress: "https://thefierynavigator.wordpress.com",   // full URL, e.g. "https://yourname.wordpress.com"
  email: "anjali.vish11@gmail.com",
};

// ============================================================
//  ABOUT — shown when someone clicks the (i) icon in the header
//  Replace the photo URLs and text below with your own.
// ============================================================

const ABOUT = {
  photo: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781893982/IMG_20221121_095448_519_jkriit.jpg",
  heading: "Hi, I'm Anjali Vishwakarma",
  paragraphs: [
    "I'm a hobbyist photographer with a full time side gig. This site is a small, ongoing archive of the frames I've chosen to keep.",
    "My fascination with photography started in 2008 with a kids reel camera, and it has gotten better since then!",
    "I love to capture wildlife, nature, cityscapes & my husband :).",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500",
  ],
};



// ============================================================
//  THEMES — add or rename as you like
//  Each photo belongs to one theme via the "theme" field
// ============================================================

const THEMES = [
  { id: "people", label: "People" },
  { id: "wildlife", label: "Wildlife" },
  { id: "city", label: "City" },
  { id: "nature", label: "Nature" },
  { id: "artefacts", label: "Artefacts" },
  { id: "structures", label: "Structures" },
];

// ============================================================
//  POSTS — keep adding new entries right after the "[" below
//  (that's still the easiest spot to paste into on GitHub).
//  On the live site they now display oldest → newest,
//  top → bottom, so new photos appear below the older ones.
//  Fields: id, title, date, caption, image, theme
// ============================================================

const POSTS = [

  {
    id: 1,
    title: "Demigod",
    date: "2024-03-15",
    caption: "",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0807_tj93qs.jpg",
    theme: "artefacts",
  },
  {
    id: 2,
    title: "Buddha",
    date: "2024-02-28",
    caption: "",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0802_lh07p0.jpg",
    theme: "artefacts",
  },
    {
    id: 3,
    title: "fuji",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630278/DSC_0603_ky7urm.jpg",
    theme: "nature",
  },

  {
    id: 4,
    title: "car",
    date: "2026-06-16",
    caption: "heloo this is favourite car",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630259/DSC_0462_u9fwed.jpg",
    theme: "city",
  },

  {
    id: 5,
    title: "temple 3",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0715_nh9ecc.jpg",
    theme: "structures",
  },
    {
    id: 6,
    title: "deer",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0774_pkxtkl.jpg",
    theme: "wildlife",
  },

  {
    id: 7,
    title: "car2",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631411/WhatsApp_Image_2026-05-05_at_12.27.11_l1fevx.jpg",
    theme: "city",
  },

  {
    id: 8,
    title: "lady",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0841_whhdbu.jpg",
    theme: "people",
  },
  
  {
    id: 9,
    title: "palace",
    date: "2026-06-16",
    caption: "with my boo",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0722_d5picc.jpg",
    theme: "structures",
  },
  {
    id: 10,
    title: "Temple1",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630394/DSC_0748_wqmilk.jpg",
    theme: "structures",
  },

  {
    id: 11,
    title: "Buddha",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630389/DSC_0702_ynqeqa.jpg",
    theme: "artefacts",
  },

  {
    id: 12,
    title: "osaka",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630389/DSC_0751_u8hq5k.jpg",
    theme: "city",
  },

  {
    id: 13,
    title: "palace",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0721_mmyyse.jpg",
    theme: "structures",
  },

  {
    id: 14,
    title: "Fishing",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630386/DSC_0619_gtcpxa.jpg",
    theme: "people",
  },

];
