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
  heading: "Hi, I'm Anjali",
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
    id: 8,
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
    id: 5,
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
    title: "Himalayan Eagle",
    date: "2022-01-05",
    caption: "Uttarakhand",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782049747/copy_of_dsc_0584_unlg6u.jpg",
    theme: "wildlife",
  },
  {
    id: 12,
    title: "Bowing Deer",
    date: "2026-05-07",
    caption: "Nara",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048193/DSC_0774_n8ngv3.heic",
    theme: "wildlife",
  },
     {
    id: 13,
    title: "Osaka Castle",
    date: "2026-05-08",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048187/DSC_0878_f1dpm4.jpg",
    theme: "structures",
  },

  {
    id: 14,
    title: "Metro Model",
    date: "2026-05-06",
    caption: "Udit Pushkar",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048192/IMG_1243_jrs245.heic",
    theme: "people",
  },

  {
    id: 15,
    title: "Serenity",
    date: "2026-06-09",
    caption: "Arishiyama Forest Trail",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048190/DSC_0702_dvtziq.jpg",
    theme: "artefacts",
  },

  {
    id: 16,
    title: "Classic Taxi",
    date: "2026-05-01",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048190/DSC_0462_1_nwbzst.jpg",
    theme: "artefacts",
  },

  {
    id: 17,
    title: "Kyoto Night",
    date: "2026-05-05",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048188/CB3B4CB3-B354-45A0-8400-BF710B974B3E_wihu9n.jpg",
    theme: "city",
  },

  {
    id: 18,
    title: "Solitude",
    date: "2026-05-09",
    caption: "Osaka",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048188/0FCA1DA9-8EDB-4C28-BDCE-15485C8D8FE9_iyskew.jpg",
    theme: "people",
  },

  {
    id: 19,
    title: "Khajurao",
    date: "2022-11-15",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048187/DSC_0814_wjzyfp.jpg",
    theme: "structures",
  },

  {
    id: 20,
    title: "Nara Daibutsu",
    date: "2026-05-07",
    caption: "The Great Buddha of Nara",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048187/DSC_0802_12.30.10_AM_tf7sr4.jpg",
    theme: "artefacts",
  },

  {
    id: 21,
    title: "Parakeets",
    date: "2022-11-15",
    caption: "Khajurao",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048187/DSC_0805_bmlgzk.jpg",
  },

{
    id: 22,
    title: "Dance of the Flamingoes",
    date: "2022-11-19",
    caption: "Kutchh lake",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782049625/WhatsApp_Image_2026-06-21_at_19.15.01_s6jyux.jpg",
    theme: "wildlife",
  },
  {
    id: 23,
    title: "Mt. Fuji",
    date: "2026-05-02",  
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048188/IMG_0992_sfgysp.heic",
    theme: "nature",
  },
  
  {
    id: 24,
    title: "Tokyo Skyline",
    date: "2026-04-30",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782049625/WhatsApp_Image_2026-06-21_at_01.41.22_eqvvoe.jpg",
    theme: "city",
  }, 
  {
    id: 25,
    title: "Fishing",
    date: "2026-05-02",
    caption: "Fuji Lake",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1781630386/DSC_0619_gtcpxa.jpg",
    theme: "people",
  },
    
    
  {
    id: 26,
    title: "Sunset over Kutchh Lake",
    date: "2022-11-19",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782049816/copy_of_dsc_0122_yis1iz.jpg",
    theme: "nature",
  },

  {
    id: 27,
    title: "Khajurao",
    date: "2022-11-15",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782049246/DSC_0754_vckwyl.jpg",
    theme: "artefacts",
  },

  
  {
    id: 28,
    title: "Sanchi Stupa",
    date: "2022-11-18",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782050150/copy_of_dsc_0014_shcrzz.jpg",
    theme: "structures",
  },

  {
    id: 29,
    title: "Crested Serpent Eagle",
    date: "2022-11-15",
    caption: "Gir National Park, Gujarat",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048635/DSC_0581_gjleyt.jpg",
    theme: "wildlife",
  },

  {
    id: 30,
    title: "Red Wattled Lapwing",
    date: "2022-11-15",
    caption: "Gir National Park, Gujarat",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782048635/DSC_0604_tfml1s.jpg",
    theme: "wildlife",
  },

  {
    id: 31,
    title: "Salt Flats",
    date: "2022-11-18",
    caption: "Kutchh",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782050209/copy_of_dsc_0004_myxqap.jpg",
    theme: "nature",
  },
  {
    id: 32,
    title: "Rampur",
    date: "2021-12-23",
    caption: "West Champaran, Bihar",
    image: "https://res.cloudinary.com/dhj34fvzi/image/upload/q_auto/f_auto/v1782050037/copy_of_whatsapp_image_2026-06-21_at_014122_1_e6hl38.jpg",
    theme: "people",
  },

];
