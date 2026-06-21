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
  photo: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048185/DSC_0111_czkgsx.jpg",
  heading: "Hi, I'm Anjali Vishwakarma",
  paragraphs: [
    "I'm a hobbyist photographer with a full time side gig. This site is a small, ongoing archive of the frames I've chosen to keep.",
    "My fascination with photography started in 2008 with a kids reel camera, and it has gotten better since then!",
    "I love to capture wildlife, nature, cityscapes & my husband :).", 
    "Below are few recent snaps of my fav model!",
  ],
  gallery: [
    "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781973033/DSC_0722_opfm2t.jpg",
    "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781973033/DSC_0484_h1tk6u.jpg",
    "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781973034/DSC_0831_r9a0yp.jpg",
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
      
    id: 2,
    title: "Mural in Tokyo Street",
    date: "2026-05-01",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048188/IMG_0790_b9ddfa.heic",
    theme: "city",
  },

  {
    id: 1,
    title: "Tokyo Sky",
    date: "2026-05-02",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048192/F28D1F17-6B62-467A-8543-67F3A79DD9D7_2_xqbfqn.jpg",
    theme: "city",
  },

  {
    id: 3,
    title: "Kyoto Palace",
    date: "2026-05-05",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048191/DSC_0721_niikjg.jpg",
    theme: "structures",
  },

  {
    id: 4,
    title: "Right of Way",
    date: "2026-05-03",
    caption: "Tokyo Trains",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048193/F546E657-802E-4ECD-BE09-20354E81B706_awlqcd.jpg",
    theme: "city",
  },

  {
    id: 5,
    title: "The Queen",
    date: "2022-11-20",
    caption: "Gir National Park",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048185/DSC_0433_akpmxq.jpg",
    theme: "wildlife",
  },

  {
    id: 6,
    title: "Kyoto City",
    date: "2026-05-07",
    caption: "View from Fushimi Inari Shrine",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048186/DSC_0751_12.30.08_AM_dc70eo.jpg",
    theme: "city",
  },

  {
    id: 7,
    title: "Crested Serpent Eagle",
    date: "2022-11-20",
    caption: "Gir National Park",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048635/DSC_0581_gjleyt.jpg",
    theme: "wildlife",
  },

  {
    id: 8,
    title: "Hawa Mahal",
    date: "2026-02-12",
    caption: "Jaipur",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048194/12261CF2-47DD-4AD1-93AE-1BAF0A731475_ekmu5y.heic",
    theme: "city",
  },

  {
    id: 9,
    title: "Fushimi Inari Shrine",
    date: "2026-05-07",
    caption: "Kyoto, Japan",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048191/DSC_0748_tpwvys.jpg",
    theme: "structures",
  },

  {
    id: 10,
    title: "Self",
    date: "2026-04-30",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048192/IMG_0658_xktr67.heic",
    theme: "people",
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
    title: "Fishing",
    date: "2026-06-16",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630386/DSC_0619_gtcpxa.jpg",
    theme: "people",
  },

];
