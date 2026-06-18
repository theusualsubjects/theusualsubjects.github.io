// ============================================================
//  YOUR PHOTOGRAPHY BLOG — SITE CONFIGURATION
// ============================================================

const SITE_CONFIG = {
  title: "The Usual Subjects",
  tagline: "Photography",
  about: "Stories told through a lens.",
  instagram: "angie.vish",
  twitter: "",
  facebook: "",
  email: "",
};

// ============================================================
//  THEMES — add or rename as you like
//  Each photo belongs to one theme via the "theme" field
// ============================================================

const THEMES = [
  { id: "examplea", label: "Example A" },
  { id: "exampleb", label: "Example B" },
  { id: "examplec", label: "Example C" },
  { id: "exampled", label: "Example D" },
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
    theme: "examplea",
  },
  {
    id: 2,
    title: "Buddha",
    date: "2024-02-28",
    caption: "",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0802_lh07p0.jpg0",
    theme: "exampleb",
  },
    {
    id: 3,
    title: "fuji",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630278/DSC_0603_ky7urm.jpg",
    theme: "examplea",
  },

  {
    id: 4,
    title: "car",
    date: "2026-06-16",
    caption: "heloo this is favourite car",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630259/DSC_0462_u9fwed.jpg",
    theme: "exampleb",
  },

  {
    id: 5,
    title: "temple 3",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0715_nh9ecc.jpg",
    theme: "exampleb",
  },
    {
    id: 6,
    title: "deer",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0774_pkxtkl.jpg",
    theme: "examplec",
  },

  {
    id: 7,
    title: "car2",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631411/WhatsApp_Image_2026-05-05_at_12.27.11_l1fevx.jpg",
    theme: "examplec",
  },

  {
    id: 8,
    title: "lady",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781631410/DSC_0841_whhdbu.jpg",
    theme: "examplec",
  },
  
  {
    id: 9,
    title: "palace",
    date: "2026-06-16",
    caption: "with my boo",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0722_d5picc.jpg",
    theme: "examplea",
  },
  {
    id: 10,
    title: "Temple1",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630394/DSC_0748_wqmilk.jpg",
    theme: "examplea",
  },

  {
    id: 11,
    title: "Buddha",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630389/DSC_0702_ynqeqa.jpg",
    theme: "exampleb",
  },

  {
    id: 12,
    title: "osaka",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630389/DSC_0751_u8hq5k.jpg",
    theme: "examplec",
  },

  {
    id: 13,
    title: "palace",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630388/DSC_0721_mmyyse.jpg",
    theme: "examplec",
  },

  {
    id: 14,
    title: "fuji lake",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630386/DSC_0619_gtcpxa.jpg",
    theme: "exampled",
  },

];
